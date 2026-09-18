import os
import sys
import django
from io import BytesIO
from PIL import Image

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.core.exceptions import ValidationError
from django.core.files.uploadedfile import SimpleUploadedFile
from sadan.models import GalleryImage
from sadan.serializers import GalleryImageSerializer
from rest_framework.request import Request
from django.test.client import RequestFactory

def create_dummy_image(name="test.jpg", format="JPEG", size=(100, 100), color=(255, 0, 0)):
    file_obj = BytesIO()
    img = Image.new("RGB", size=size, color=color)
    img.save(file_obj, format=format)
    file_obj.seek(0)
    return SimpleUploadedFile(name, file_obj.getvalue(), content_type=f"image/{format.lower()}")

def test_all():
    print("=" * 60)
    print("RUNNING DUAL-IMAGE ARCHITECTURE TESTS")
    print("=" * 60)

    factory = RequestFactory()
    http_request = Request(factory.get('/api/v1/gallery/'))

    # Clean previous test entries if any
    GalleryImage.objects.filter(title__startswith="Test Dual:").delete()

    # -------------------------------------------------------------
    # CASE 1: Legacy URL / Static-path image ONLY
    # -------------------------------------------------------------
    print("\n[TEST 1] Case 1: Static Path / URL Only...")
    img1 = GalleryImage(
        title="Test Dual: Static Path Only",
        image="/images/photos/campus_school_building.jpg",
        category="campus"
    )
    img1.full_clean()  # Must not raise ValidationError
    img1.save()

    assert img1.uploaded_image.name is None or img1.uploaded_image.name == "", "Uploaded image should be empty"
    assert img1.resolved_image_url == "/images/photos/campus_school_building.jpg"

    s1 = GalleryImageSerializer(img1, context={'request': http_request})
    assert s1.data['image'] == "/images/photos/campus_school_building.jpg", f"Unexpected serializer image: {s1.data['image']}"
    assert s1.data['uploaded_image'] is None, "uploaded_image should serialize to None"
    print("  -> Passed! Legacy static path preserved and serialized correctly.")

    # -------------------------------------------------------------
    # CASE 2: Newly uploaded image ONLY
    # -------------------------------------------------------------
    print("\n[TEST 2] Case 2: Uploaded File Only...")
    dummy_file = create_dummy_image(name="new_student.jpg", format="JPEG")
    img2 = GalleryImage(
        title="Test Dual: Uploaded Only",
        uploaded_image=dummy_file,
        image="",
        category="education"
    )
    img2.full_clean()
    img2.save()

    assert bool(img2.uploaded_image), "Uploaded image should exist"
    assert "gallery/" in img2.uploaded_image.url, f"Expected gallery/ in url, got {img2.uploaded_image.url}"
    assert img2.resolved_image_url == img2.uploaded_image.url

    s2 = GalleryImageSerializer(img2, context={'request': http_request})
    assert s2.data['image'].startswith("http://testserver/media/gallery/"), f"Unexpected resolved url: {s2.data['image']}"
    assert "gallery/" in s2.data['uploaded_image']
    print(f"  -> Passed! Uploaded file serialized to absolute URI: {s2.data['image']}")

    # -------------------------------------------------------------
    # CASE 3: BOTH provided -> Uploaded file takes PRIORITY, DB URL preserved
    # -------------------------------------------------------------
    print("\n[TEST 3] Case 3: Both Uploaded and Static Path Provided (Priority Test)...")
    dummy_file_both = create_dummy_image(name="both_priority.png", format="PNG")
    static_url = "https://example.com/fallback.jpg"
    img3 = GalleryImage(
        title="Test Dual: Both Provided",
        uploaded_image=dummy_file_both,
        image=static_url,
        category="vedic"
    )
    img3.full_clean()
    img3.save()

    # Verify DB preservation:
    fresh_img3 = GalleryImage.objects.get(pk=img3.pk)
    assert fresh_img3.image == static_url, "Original URL string in DB must remain intact!"
    assert bool(fresh_img3.uploaded_image), "Uploaded image must remain intact in DB!"
    assert fresh_img3.resolved_image_url == fresh_img3.uploaded_image.url, "Priority must resolve to uploaded file URL!"

    s3 = GalleryImageSerializer(fresh_img3, context={'request': http_request})
    assert s3.data['image'].startswith("http://testserver/media/gallery/"), f"Resolved serializer 'image' must be uploaded file, got {s3.data['image']}"
    assert s3.data['image'] != static_url, "Uploaded file must override static URL in serialized output!"
    print("  -> Passed! Original DB string intact and serializer gave priority to uploaded file.")

    # -------------------------------------------------------------
    # CASE 4: Validation Error when NEITHER is provided
    # -------------------------------------------------------------
    print("\n[TEST 4] Case 4: Neither Provided (Validation Error Enforcement)...")
    img4 = GalleryImage(
        title="Test Dual: Missing Both",
        image="",
        uploaded_image=None,
        category="sports"
    )
    try:
        img4.full_clean()
        assert False, "Should have raised ValidationError when both are missing!"
    except ValidationError as e:
        assert "Please upload an image or provide an image URL/path." in str(e), f"Expected validation message, got {e}"
        print(f"  -> Passed! Model raised clean error: {e}")

    # Serializer level validation test:
    s4 = GalleryImageSerializer(data={
        'title': 'Test Serializer Missing',
        'category': 'sports',
        'order': 1
    })
    assert not s4.is_valid(), "Serializer should be invalid when both sources are missing"
    assert "non_field_errors" in s4.errors or "Please upload an image or provide an image URL/path." in str(s4.errors)
    print("  -> Passed! Serializer raised validation error on missing source.")

    # -------------------------------------------------------------
    # CASE 5: API Writable Image Field Test
    # -------------------------------------------------------------
    print("\n[TEST 5] Case 5: Serializer Write Operations...")
    s5 = GalleryImageSerializer(data={
        'title': 'Test Dual: API Write URL',
        'image': '/images/photos/api_written.jpg',
        'category': 'skills',
        'order': 5
    }, context={'request': http_request})
    assert s5.is_valid(), f"Serializer write with 'image' should be valid! Errors: {s5.errors}"
    saved_obj = s5.save()
    assert saved_obj.image == '/images/photos/api_written.jpg'
    assert s5.data['image'] == '/images/photos/api_written.jpg'
    print("  -> Passed! Image field remains completely writable through API.")

    # Clean up test records
    GalleryImage.objects.filter(title__startswith="Test Dual:").delete()

    print("\n" + "=" * 60)
    print("ALL TESTS PASSED SUCCESSFULLY!")
    print("=" * 60)

if __name__ == '__main__':
    test_all()
