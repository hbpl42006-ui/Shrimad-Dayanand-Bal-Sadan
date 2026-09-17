from django.contrib import admin
from django.utils.html import format_html
from .models import (
    SiteSettings, HomeHero, ImpactStatistic, AboutSection,
    HistoryEvent, Program, Facility, DailyRoutine,
    GalleryAlbum, GalleryImage, Event, DonationInformation,
    DocumentCategory, Document, ContactSubmission, SEOSettings
)

@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ('organization_name', 'primary_phone', 'email', 'founded_year')

    def has_add_permission(self, request):
        if self.model.objects.exists():
            return False
        return super().has_add_permission(request)


@admin.register(HomeHero)
class HomeHeroAdmin(admin.ModelAdmin):
    list_display = ('heading', 'badge', 'primary_cta_text', 'secondary_cta_text')

    def has_add_permission(self, request):
        if self.model.objects.exists():
            return False
        return super().has_add_permission(request)


@admin.register(ImpactStatistic)
class ImpactStatisticAdmin(admin.ModelAdmin):
    list_display = ('label', 'value', 'suffix', 'icon', 'order', 'active')
    list_editable = ('value', 'suffix', 'order', 'active')
    search_fields = ('label', 'description')
    list_filter = ('active',)


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ('heading', 'subheading')

    def has_add_permission(self, request):
        if self.model.objects.exists():
            return False
        return super().has_add_permission(request)


@admin.register(HistoryEvent)
class HistoryEventAdmin(admin.ModelAdmin):
    list_display = ('year', 'title', 'display_order', 'is_featured', 'image_preview')
    list_editable = ('display_order', 'is_featured')
    search_fields = ('year', 'title', 'description')
    list_filter = ('is_featured',)

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;" />', obj.image)
        return "-"
    image_preview.short_description = "Image Preview"


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'icon', 'display_order', 'active', 'image_preview')
    list_editable = ('display_order', 'active', 'category')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'short_description', 'detailed_description')
    list_filter = ('category', 'active')

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;" />', obj.image)
        return "-"
    image_preview.short_description = "Image"


@admin.register(Facility)
class FacilityAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'order', 'active', 'image_preview')
    list_editable = ('order', 'active', 'category')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'description')
    list_filter = ('category', 'active')

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;" />', obj.image)
        return "-"
    image_preview.short_description = "Image"


@admin.register(DailyRoutine)
class DailyRoutineAdmin(admin.ModelAdmin):
    list_display = ('time', 'title', 'icon', 'order')
    list_editable = ('order',)
    search_fields = ('time', 'title', 'description')


@admin.register(GalleryAlbum)
class GalleryAlbumAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'order')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'description')


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'order', 'is_featured', 'image_preview')
    list_editable = ('category', 'order', 'is_featured')
    search_fields = ('title', 'caption')
    list_filter = ('category', 'is_featured')

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 45px; border-radius: 4px;" />', obj.image)
        return "-"
    image_preview.short_description = "Thumbnail"


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'location', 'is_upcoming', 'featured', 'image_preview')
    list_editable = ('is_upcoming', 'featured')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'summary', 'location')
    list_filter = ('is_upcoming', 'featured', 'date')

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 40px; border-radius: 4px;" />', obj.image)
        return "-"
    image_preview.short_description = "Banner"


@admin.register(DonationInformation)
class DonationInformationAdmin(admin.ModelAdmin):
    list_display = ('account_holder_name', 'bank_name', 'account_number', 'ifsc', 'upi_id', 'active')
    list_editable = ('active',)


@admin.register(DocumentCategory)
class DocumentCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'order')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'year', 'is_public', 'published_at')
    list_editable = ('is_public',)
    search_fields = ('title', 'description')
    list_filter = ('category', 'year', 'is_public')


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'subject', 'is_read', 'is_replied', 'created_at')
    list_editable = ('is_read', 'is_replied')
    search_fields = ('name', 'email', 'phone', 'subject', 'message')
    list_filter = ('is_read', 'is_replied', 'created_at')
    readonly_fields = ('name', 'email', 'phone', 'subject', 'message', 'created_at')


@admin.register(SEOSettings)
class SEOSettingsAdmin(admin.ModelAdmin):
    list_display = ('page_name', 'meta_title')
    search_fields = ('page_name', 'meta_title', 'meta_description')

admin.site.site_header = "Shrimad Dayanand Bal Sadan Administration"
admin.site.site_title = "Bal Sadan CMS Portal"
admin.site.index_title = "Bal Sadan Content Management"
