from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SiteSettingsView, HomeDataView, ImpactStatisticViewSet,
    HistoryEventViewSet, ProgramViewSet, FacilityViewSet,
    DailyRoutineViewSet, GalleryImageViewSet, GalleryAlbumViewSet,
    EventViewSet, DonationInformationView, DocumentCategoryViewSet,
    DocumentViewSet, ContactSubmissionCreateView, SEOSettingsViewSet
)

router = DefaultRouter()
router.register(r'impact-stats', ImpactStatisticViewSet, basename='impact-statistic')
router.register(r'history', HistoryEventViewSet, basename='history-event')
router.register(r'programs', ProgramViewSet, basename='program')
router.register(r'facilities', FacilityViewSet, basename='facility')
router.register(r'daily-routines', DailyRoutineViewSet, basename='daily-routine')
router.register(r'gallery', GalleryImageViewSet, basename='gallery-image')
router.register(r'gallery-albums', GalleryAlbumViewSet, basename='gallery-album')
router.register(r'events', EventViewSet, basename='event')
router.register(r'document-categories', DocumentCategoryViewSet, basename='document-category')
router.register(r'documents', DocumentViewSet, basename='document')
router.register(r'seo-settings', SEOSettingsViewSet, basename='seo-settings')

urlpatterns = [
    path('site-settings/', SiteSettingsView.as_view(), name='site-settings'),
    path('home/', HomeDataView.as_view(), name='home-data'),
    path('donation-info/', DonationInformationView.as_view(), name='donation-info'),
    path('contact/', ContactSubmissionCreateView.as_view(), name='contact-submission'),
    path('', include(router.urls)),
]
