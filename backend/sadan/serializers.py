from rest_framework import serializers
from .models import (
    SiteSettings, HomeHero, ImpactStatistic, AboutSection,
    HistoryEvent, Program, Facility, DailyRoutine,
    GalleryAlbum, GalleryImage, Event, DonationInformation,
    DocumentCategory, Document, ContactSubmission, SEOSettings
)

class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = '__all__'

class HomeHeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeHero
        fields = '__all__'

class ImpactStatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImpactStatistic
        fields = '__all__'

class AboutSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSection
        fields = '__all__'

class HistoryEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoryEvent
        fields = '__all__'

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = '__all__'

class DailyRoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyRoutine
        fields = '__all__'

class GalleryImageSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    image = serializers.CharField(max_length=1000, required=False, allow_blank=True)
    uploaded_image = serializers.ImageField(required=False, allow_null=True)

    class Meta:
        model = GalleryImage
        fields = '__all__'

    def validate(self, attrs):
        uploaded_image = attrs.get('uploaded_image')
        image = attrs.get('image')

        # Support partial updates by falling back to existing instance values
        if self.instance is not None:
            if 'uploaded_image' not in attrs:
                uploaded_image = self.instance.uploaded_image
            if 'image' not in attrs:
                image = self.instance.image

        has_upload = bool(uploaded_image)
        has_path = bool(image and str(image).strip())
        if not has_upload and not has_path:
            raise serializers.ValidationError(
                "Please upload an image or provide an image URL/path."
            )
        return attrs

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        if instance.uploaded_image:
            request = self.context.get('request')
            if request is not None:
                ret['image'] = request.build_absolute_uri(instance.uploaded_image.url)
            else:
                ret['image'] = instance.uploaded_image.url
        else:
            ret['image'] = instance.image or ""
        return ret

class GalleryAlbumSerializer(serializers.ModelSerializer):
    images = GalleryImageSerializer(many=True, read_only=True)

    class Meta:
        model = GalleryAlbum
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class DonationInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationInformation
        fields = '__all__'

class DocumentSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Document
        fields = '__all__'

class DocumentCategorySerializer(serializers.ModelSerializer):
    documents = DocumentSerializer(many=True, read_only=True)

    class Meta:
        model = DocumentCategory
        fields = '__all__'

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['id', 'name', 'email', 'phone', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Please provide your full name.")
        return value.strip()

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters long.")
        return value.strip()

class SEOSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SEOSettings
        fields = '__all__'
