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

    class Meta:
        model = GalleryImage
        fields = '__all__'

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
