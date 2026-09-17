import uuid
from django.db import models
from django.utils.text import slugify

class SiteSettings(models.Model):
    organization_name = models.CharField(max_length=255, default="Shrimad Dayanand Bal Sadan")
    short_name = models.CharField(max_length=100, default="Bal Sadan")
    tagline = models.CharField(max_length=255, default="Giving Children a Home, Education & Hope")
    logo = models.CharField(max_length=255, default="/images/photos/dayanand_saraswati.jpg")
    favicon = models.CharField(max_length=255, default="/favicon.ico")
    address = models.TextField(default="Moti Nagar, (Near DAV College), Aishbagh Road, Lucknow - 226004, Uttar Pradesh, India")
    primary_phone = models.CharField(max_length=50, default="+91 9452158755")
    secondary_phone = models.CharField(max_length=50, default="+91 9305882580")
    additional_phone = models.CharField(max_length=50, default="+91 9005059992")
    email = models.EmailField(default="dbslucknow@gmail.com")
    website_url = models.URLField(default="https://srimaddayanandbalsadan.in")
    youtube_url = models.URLField(blank=True, default="https://www.youtube.com")
    instagram_url = models.URLField(blank=True, default="https://www.instagram.com")
    facebook_url = models.URLField(blank=True, default="")
    map_url = models.URLField(max_length=500, blank=True, default="https://maps.google.com/?q=Moti+Nagar+DAV+College+Lucknow")
    footer_description = models.TextField(default="A premier charitable residential and educational institution established in 1915, dedicated to the holistic development, care, education, and moral upbringing of orphaned, destitute, and underprivileged children based on Vedic values.")
    donation_cta_text = models.CharField(max_length=255, default="Help Us Build Brighter Futures")
    donation_cta_url = models.CharField(max_length=255, default="/support-us")
    founded_year = models.IntegerField(default=1915)

    class Meta:
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return self.organization_name


class HomeHero(models.Model):
    badge = models.CharField(max_length=255, default="SHRIMAD DAYANAND BAL SADAN • LUCKNOW")
    heading = models.CharField(max_length=255, default="Giving Children a Home, Education & Hope.")
    subheading = models.TextField(default="Providing comprehensive care, shelter, formal education, Vedic values, and skill training to orphaned and underprivileged children since 1915.")
    hero_image = models.CharField(max_length=255, default="/images/photos/campus_school_building.jpg")
    primary_cta_text = models.CharField(max_length=100, default="Donate Now")
    primary_cta_url = models.CharField(max_length=255, default="/support-us")
    secondary_cta_text = models.CharField(max_length=100, default="Discover Our Story")
    secondary_cta_url = models.CharField(max_length=255, default="/our-story")
    footer_note = models.CharField(max_length=255, default="Serving children with dignity and Vedic values since 1915")

    class Meta:
        verbose_name = "Home Hero"
        verbose_name_plural = "Home Hero"

    def __str__(self):
        return self.heading


class ImpactStatistic(models.Model):
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=50)
    suffix = models.CharField(max_length=20, blank=True, default="")
    description = models.CharField(max_length=255, blank=True)
    icon = models.CharField(max_length=50, default="Heart")
    order = models.IntegerField(default=0)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']
        verbose_name = "Impact Statistic"
        verbose_name_plural = "Impact Statistics"

    def __str__(self):
        return f"{self.value}{self.suffix} - {self.label}"


class AboutSection(models.Model):
    heading = models.CharField(max_length=255, default="A Home Built on Compassion")
    subheading = models.CharField(max_length=255, default="More Than a Home — A Sacred Sanctuary to Grow")
    content = models.TextField()
    image = models.CharField(max_length=255, default="/images/photos/campus_main_gate.jpg")
    quote = models.CharField(max_length=255, default="Every child is treated with dignity, care and equal opportunity.")
    cta_text = models.CharField(max_length=100, default="Learn About Bal Sadan")
    cta_url = models.CharField(max_length=255, default="/about")

    class Meta:
        verbose_name = "About Section"
        verbose_name_plural = "About Section"

    def __str__(self):
        return self.heading


class HistoryEvent(models.Model):
    year = models.CharField(max_length=50)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.CharField(max_length=255, blank=True)
    display_order = models.IntegerField(default=0)
    is_featured = models.BooleanField(default=True)

    class Meta:
        ordering = ['display_order']
        verbose_name = "History Event"
        verbose_name_plural = "History Events"

    def __str__(self):
        return f"{self.year}: {self.title}"


class Program(models.Model):
    CATEGORY_CHOICES = [
        ('education', 'Academic Education'),
        ('skill', 'Vocational Skill'),
        ('vedic', 'Vedic & Sanskar'),
        ('wellness', 'Health & Wellness'),
        ('sports', 'Sports & Martial Arts'),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='skill')
    icon = models.CharField(max_length=50, default='BookOpen')
    short_description = models.TextField()
    detailed_description = models.TextField(blank=True)
    image = models.CharField(max_length=255, blank=True)
    active = models.BooleanField(default=True)
    display_order = models.IntegerField(default=0)

    class Meta:
        ordering = ['display_order']
        verbose_name = "Program & Skill"
        verbose_name_plural = "Programs & Skills"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Facility(models.Model):
    CATEGORY_CHOICES = [
        ('education', 'Education Infrastructure'),
        ('residential', 'Residential & Dining'),
        ('wellness', 'Wellness & Dispensary'),
        ('culture', 'Culture & Yagyashala'),
        ('sports', 'Sports & Physical Fitness'),
        ('sustainability', 'Sustainability & Solar'),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='education')
    description = models.TextField()
    features = models.JSONField(default=list, blank=True, help_text="List of feature bullet points")
    image = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']
        verbose_name = "Facility"
        verbose_name_plural = "Facilities"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} ({self.get_category_display()})"


class DailyRoutine(models.Model):
    time = models.CharField(max_length=50)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, default="Clock")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Daily Routine"
        verbose_name_plural = "Daily Routines"

    def __str__(self):
        return f"{self.time} - {self.title}"


class GalleryAlbum(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, default="General")
    cover_image = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class GalleryImage(models.Model):
    CATEGORY_CHOICES = [
        ('campus', 'Campus & Facilities'),
        ('education', 'Education & Learning'),
        ('vedic', 'Vedic Chants & Havan'),
        ('sports', 'Sports & Martial Arts'),
        ('skills', 'Skill Development'),
        ('events', 'Events & Celebrations'),
        ('brochure', 'Original Brochure Pages'),
    ]

    album = models.ForeignKey(GalleryAlbum, on_delete=models.SET_NULL, null=True, blank=True, related_name='images')
    title = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    caption = models.CharField(max_length=255, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='campus')
    order = models.IntegerField(default=0)
    is_featured = models.BooleanField(default=False)

    class Meta:
        ordering = ['order']
        verbose_name = "Gallery Image"
        verbose_name_plural = "Gallery Images"

    def __str__(self):
        return self.title


class Event(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    date = models.DateField()
    time_str = models.CharField(max_length=100, default="10:00 AM - 1:00 PM")
    location = models.CharField(max_length=255, default="Shri Dharm Dutt Sabhagar, Bal Sadan Campus, Lucknow")
    summary = models.TextField()
    content = models.TextField()
    image = models.CharField(max_length=255, blank=True)
    is_upcoming = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)

    class Meta:
        ordering = ['-date']
        verbose_name = "Event"
        verbose_name_plural = "Events"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} ({self.date})"


class DonationInformation(models.Model):
    account_holder_name = models.CharField(max_length=255, default="SRIMAD DAYANAND BAL SADAN")
    bank_name = models.CharField(max_length=255, default="Bank of India")
    branch = models.CharField(max_length=255, default="Aishbagh branch, Lucknow")
    account_number = models.CharField(max_length=100, default="680310100008184")
    ifsc = models.CharField(max_length=50, default="BKID0006803")
    upi_id = models.CharField(max_length=100, default="9452158755@okbizicici")
    phone = models.CharField(max_length=50, default="+91 9452158755")
    qr_code = models.CharField(max_length=255, default="/images/photos/donation_upi_qr.jpg")
    instructions = models.TextField(default="Donations can be made by cheque, bank draft, or cash in the name of 'SRIMAD DAYANAND BAL SADAN' or directly via NEFT/RTGS/IMPS/UPI into our official Bank of India account.")
    in_kind_items = models.TextField(default="Ration, fresh fruits, clothing, medicines, educational notebooks & stationery, sports equipment, shoes, slippers, daily toiletries like bath soap, toothpaste, toothbrush, etc.")
    tax_exemption_note = models.CharField(max_length=255, default="Donations eligible for tax exemption under section 80G of the Income Tax Act.")
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Donation Information"
        verbose_name_plural = "Donation Information"

    def __str__(self):
        return f"{self.account_holder_name} - {self.bank_name}"


class DocumentCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Document Category"
        verbose_name_plural = "Document Categories"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Document(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(DocumentCategory, on_delete=models.CASCADE, related_name='documents')
    year = models.CharField(max_length=20, default="2026")
    description = models.TextField(blank=True)
    file_url = models.CharField(max_length=255, default="/images/brochure/brochure_page_1.jpg")
    published_at = models.DateField(auto_now_add=True)
    is_public = models.BooleanField(default=True)

    class Meta:
        ordering = ['-published_at']
        verbose_name = "Document"
        verbose_name_plural = "Documents"

    def __str__(self):
        return f"{self.title} ({self.year})"


class ContactSubmission(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    subject = models.CharField(max_length=255)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    is_replied = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Submission"
        verbose_name_plural = "Contact Submissions"

    def __str__(self):
        return f"{self.name} - {self.subject} ({self.created_at.strftime('%d-%m-%Y')})"


class SEOSettings(models.Model):
    page_name = models.CharField(max_length=100, unique=True)
    meta_title = models.CharField(max_length=255)
    meta_description = models.TextField()
    keywords = models.CharField(max_length=500, blank=True)
    og_image = models.CharField(max_length=255, default="/images/photos/campus_school_building.jpg")

    class Meta:
        verbose_name = "SEO Settings"
        verbose_name_plural = "SEO Settings"

    def __str__(self):
        return self.page_name
