from rest_framework import viewsets, generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import (
    SiteSettings, HomeHero, ImpactStatistic, AboutSection,
    HistoryEvent, Program, Facility, DailyRoutine,
    GalleryAlbum, GalleryImage, Event, DonationInformation,
    DocumentCategory, Document, ContactSubmission, SEOSettings
)
from .serializers import (
    SiteSettingsSerializer, HomeHeroSerializer, ImpactStatisticSerializer,
    AboutSectionSerializer, HistoryEventSerializer, ProgramSerializer,
    FacilitySerializer, DailyRoutineSerializer, GalleryAlbumSerializer,
    GalleryImageSerializer, EventSerializer, DonationInformationSerializer,
    DocumentCategorySerializer, DocumentSerializer, ContactSubmissionSerializer,
    SEOSettingsSerializer
)

class SiteSettingsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        settings_obj = SiteSettings.objects.first()
        if not settings_obj:
            settings_obj = SiteSettings.objects.create()
        serializer = SiteSettingsSerializer(settings_obj)
        return Response(serializer.data)


class HomeDataView(APIView):
    """
    Optimized aggregated bundle for instantaneous, 1-roundtrip LCP homepage loading.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        hero = HomeHero.objects.first() or HomeHero()
        about = AboutSection.objects.first() or AboutSection()
        donation_info = DonationInformation.objects.filter(active=True).first() or DonationInformation()
        
        stats = ImpactStatistic.objects.filter(active=True).order_by('order')
        history = HistoryEvent.objects.filter(is_featured=True).order_by('display_order')[:5]
        programs = Program.objects.filter(active=True).order_by('display_order')
        facilities = Facility.objects.filter(active=True).order_by('order')
        routines = DailyRoutine.objects.all().order_by('order')
        gallery = GalleryImage.objects.filter(is_featured=True).order_by('order')[:8]
        events = Event.objects.all().order_by('-date')[:3]

        return Response({
            'hero': HomeHeroSerializer(hero).data,
            'stats': ImpactStatisticSerializer(stats, many=True).data,
            'about': AboutSectionSerializer(about).data,
            'history': HistoryEventSerializer(history, many=True).data,
            'programs': ProgramSerializer(programs, many=True).data,
            'facilities': FacilitySerializer(facilities, many=True).data,
            'routines': DailyRoutineSerializer(routines, many=True).data,
            'gallery': GalleryImageSerializer(gallery, many=True).data,
            'events': EventSerializer(events, many=True).data,
            'donation': DonationInformationSerializer(donation_info).data,
        })


class ImpactStatisticViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ImpactStatistic.objects.filter(active=True).order_by('order')
    serializer_class = ImpactStatisticSerializer
    permission_classes = [AllowAny]


class HistoryEventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HistoryEvent.objects.all().order_by('display_order')
    serializer_class = HistoryEventSerializer
    permission_classes = [AllowAny]


class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.filter(active=True).order_by('display_order')
    serializer_class = ProgramSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category']
    search_fields = ['title', 'short_description', 'detailed_description']


class FacilityViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Facility.objects.filter(active=True).order_by('order')
    serializer_class = FacilitySerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category']
    search_fields = ['title', 'description']


class DailyRoutineViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DailyRoutine.objects.all().order_by('order')
    serializer_class = DailyRoutineSerializer
    permission_classes = [AllowAny]


class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryImage.objects.all().order_by('order')
    serializer_class = GalleryImageSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category', 'is_featured']
    search_fields = ['title', 'caption']


class GalleryAlbumViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryAlbum.objects.all().order_by('order')
    serializer_class = GalleryAlbumSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.all().order_by('-date')
    serializer_class = EventSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['is_upcoming', 'featured']
    search_fields = ['title', 'summary', 'content']


class DonationInformationView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        info = DonationInformation.objects.filter(active=True).first()
        if not info:
            info = DonationInformation.objects.create()
        serializer = DonationInformationSerializer(info)
        return Response(serializer.data)


class DocumentCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DocumentCategory.objects.all().order_by('order')
    serializer_class = DocumentCategorySerializer
    permission_classes = [AllowAny]


class DocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Document.objects.filter(is_public=True).order_by('-published_at')
    serializer_class = DocumentSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category__slug', 'year']
    search_fields = ['title', 'description']


class ContactSubmissionCreateView(generics.CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        # Honeypot field check for anti-spam
        if request.data.get('website_check', ''):
            # Bot detected, return pseudo-success
            return Response({'status': 'success', 'message': 'Thank you for reaching out.'}, status=status.HTTP_200_OK)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'status': 'success', 'message': 'Your message has been received. Our team will get back to you shortly.'},
            status=status.HTTP_201_CREATED
        )


class SEOSettingsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SEOSettings.objects.all()
    serializer_class = SEOSettingsSerializer
    lookup_field = 'page_name'
    permission_classes = [AllowAny]
