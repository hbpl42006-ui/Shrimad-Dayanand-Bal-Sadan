from django.core.management.base import BaseCommand
from sadan.models import (
    SiteSettings, HomeHero, ImpactStatistic, AboutSection,
    HistoryEvent, Program, Facility, DailyRoutine,
    GalleryAlbum, GalleryImage, Event, DonationInformation,
    DocumentCategory, Document, SEOSettings
)
import datetime

class Command(BaseCommand):
    help = 'Seed authentic brochure data for Shrimad Dayanand Bal Sadan'

    def handle(self, *args, **options):
        self.stdout.write(self.style.NOTICE('Beginning database seeding...'))

        # 1. Site Settings
        SiteSettings.objects.all().delete()
        site_settings = SiteSettings.objects.create(
            organization_name="Shrimad Dayanand Bal Sadan",
            short_name="Bal Sadan",
            tagline="Giving Children a Home, Education & Hope",
            logo="/images/logo.png",
            favicon="/favicon.ico",
            address="Moti Nagar, (Near DAV College), Aishbagh Road, Lucknow - 226004, Uttar Pradesh, India",
            primary_phone="+91 9452158755",
            secondary_phone="+91 9305882580",
            additional_phone="+91 9005059992",
            email="dbslucknow@gmail.com",
            website_url="https://srimaddayanandbalsadan.in",
            youtube_url="https://www.youtube.com/@ShrimadDayanandBalSadan",
            instagram_url="https://www.instagram.com/srimaddayanandbalsadan",
            map_url="https://maps.google.com/?q=Moti+Nagar+DAV+College+Aishbagh+Lucknow",
            footer_description="A premier charitable residential and educational institution founded on 11 May 1915, dedicated to the holistic development, formal education, and moral upbringing of orphaned, destitute, abandoned, and vulnerable children.",
            donation_cta_text="Help Us Build Brighter Futures",
            donation_cta_url="/support-us",
            founded_year=1915
        )
        self.stdout.write("Seeded Site Settings")

        # 2. Home Hero
        HomeHero.objects.all().delete()
        HomeHero.objects.create(
            badge="SHRIMAD DAYANAND BAL SADAN • LUCKNOW",
            heading="Giving Children a Home, Education & Hope.",
            subheading="Providing shelter, wholesome nutrition, UP Board recognized education, traditional Vedic values, and life-changing vocational skills to underprivileged children since 1915.",
            hero_image="/images/photos/campus_school_building.jpg",
            primary_cta_text="Donate Now",
            primary_cta_url="/support-us",
            secondary_cta_text="Discover Our Story",
            secondary_cta_url="/our-story",
            footer_note="Serving children with dignity, love, and Vedic values since 1915 • 100+ Years of Care"
        )
        self.stdout.write("Seeded Home Hero")

        # 3. Impact Statistics
        ImpactStatistic.objects.all().delete()
        stats_data = [
            {"value": "100", "suffix": "+", "label": "Children Supported", "icon": "Users", "description": "Orphaned, abandoned, and destitute children receiving loving residential care", "order": 1},
            {"value": "3", "suffix": "+ Acres", "label": "Green Campus", "icon": "TreePine", "description": "Sprawling serene campus in the heart of Lucknow with playgrounds and gardens", "order": 2},
            {"value": "100", "suffix": "+ Years", "label": "Selfless Service", "icon": "Calendar", "description": "Continuous service to underprivileged children since May 11, 1915", "order": 3},
            {"value": "18", "suffix": " kW", "label": "Solar Clean Energy", "icon": "Sun", "description": "Rooftop solar plant powering campus with clean, uninterrupted energy", "order": 4},
            {"value": "24", "suffix": "+", "label": "Cows in Gaushala", "icon": "Heart", "description": "Sacred cowshed providing pure, fresh milk every day to all resident children", "order": 5},
            {"value": "100", "suffix": "%", "label": "Community Supported", "icon": "Award", "description": "Operates independently without government aid, supported purely by donors", "order": 6},
        ]
        for s in stats_data:
            ImpactStatistic.objects.create(**s)
        self.stdout.write("Seeded Impact Statistics")

        # 4. About Section
        AboutSection.objects.all().delete()
        AboutSection.objects.create(
            heading="A Home Built on Compassion",
            subheading="More Than a Home — A Place to Grow, Learn, and Thrive",
            content="Shrimad Dayanand Bal Sadan is a charitable residential and educational institution working tirelessly for orphaned, destitute, abandoned, and vulnerable children. In Bal Sadan, no child is treated as an orphan; our dedicated caregivers and educators provide genuine parenting, secure shelter, nutritious meals, modern schooling, and moral grounding rooted in Vedic values. Here, every child, irrespective of their background, is treated with care. There is no discrimination based on caste, color, creed, or religion. All children are the creation of God.",
            image="/images/photos/campus_main_gate.jpg",
            quote="Every child is treated with dignity, care and equal opportunity. In Bal Sadan, no child is an orphan.",
            cta_text="Learn About Bal Sadan",
            cta_url="/about"
        )
        self.stdout.write("Seeded About Section")

        # 5. History Events
        HistoryEvent.objects.all().delete()
        history_data = [
            {
                "year": "1915",
                "title": "Establishment by Banarasi Lal Ji (Swami Nirbhayanand)",
                "description": "India has never lacked noble individuals guided by altruism rather than self-interest. Banarasi Lal Ji envisioned a sanctuary for orphan and destitute children that would offer shelter, nourishment, and quality education. With the support of like-minded citizens, on 11 May 1915, Shrimad Dayanand Bal Sadan was established. Later, Banarasi Lal Ji embraced a life of renunciation and was known as Swami Nirbhayanand.",
                "image": "/images/photos/dayanand_saraswati.jpg",
                "display_order": 1,
                "is_featured": True
            },
            {
                "year": "1990s",
                "title": "Bal Sadan's Renaissance & Shri Dharm Dutt Ji",
                "description": "After the decline of the earlier Gurukul, Bal Sadan faced a period of severe hardship—lacking provision for education or basic meals, operating out of just one room with around twenty children. In the 1990s, Shri Dharm Dutt Ji (retired Joint Secretary from Uttar Pradesh State Electricity Board) was moved by the children's plight and began visiting and teaching them regularly.",
                "image": "/images/photos/shri_dharm_dutt_meeting.jpg",
                "display_order": 2,
                "is_featured": True
            },
            {
                "year": "1992 - 1994",
                "title": "Leadership & Comprehensive Modernization",
                "description": "Recognizing his dedication and devotion, the organization appointed Shri Dharm Dutt Ji as Manager in 1992 and elevated him to Secretary in 1994. He contributed a significant portion of his retirement funds, along with generous community donations, to construct the hostel, multipurpose hall, and modern school building. Despite threats from anti-social land grabbers, supported steadfastly by his wife Mrs. Omeshwari, he firmly secured and modernized Bal Sadan.",
                "image": "/images/photos/dharm_dutt_sabhagar.jpg",
                "display_order": 3,
                "is_featured": True
            },
            {
                "year": "2016",
                "title": "Adoption of Juvenile Justice Model Rules",
                "description": "Historically, Bal Sadan welcomed children through village Pradhans and social workers. Following the implementation of the Juvenile Justice Model Rules 2016 under the Juvenile Justice Act, admissions were formally aligned with Child Welfare Committees (CWC), providing systematic rehabilitation for children aged 10 to 18 in a secure legal framework.",
                "image": "/images/photos/school_assembly_uniform.jpg",
                "display_order": 4,
                "is_featured": True
            },
            {
                "year": "2019 - Present",
                "title": "A Century of Service & Sustainable Future",
                "description": "Shri Dharm Dutt Ji served the institution for nearly 27 years until his peaceful passing on December 19, 2019 at the age of ninety. Today, guided by committed trustees and patrons, Bal Sadan flourishes with an 18 kW solar power plant, gaushala, computer lab, sports training, and recognized Junior High School, proudly serving as a beacon of hope.",
                "image": "/images/photos/solar_power_rooftop.jpg",
                "display_order": 5,
                "is_featured": True
            }
        ]
        for h in history_data:
            HistoryEvent.objects.create(**h)
        self.stdout.write("Seeded History Events")

        # 6. Programs & Skills
        Program.objects.all().delete()
        programs_data = [
            {
                "title": "Formal School Education",
                "slug": "formal-school-education",
                "category": "education",
                "icon": "GraduationCap",
                "short_description": "Junior High School recognized by Uttar Pradesh Basic Education Council, providing quality academic curriculum with compassionate educators.",
                "detailed_description": "Our dedicated campus school is recognized by the UP Basic Education Council up to the Junior High School level. Compassionate teachers and counselors guide children in mathematics, science, social studies, Hindi, English, and Sanskrit. Post 8th standard, students are admitted into top reputed high schools and intermediate colleges, with many scoring first-class marks in board examinations.",
                "image": "/images/photos/campus_school_building.jpg",
                "display_order": 1
            },
            {
                "title": "Computer Literacy & IT Skills",
                "slug": "computer-literacy",
                "category": "skill",
                "icon": "Laptop",
                "short_description": "Dedicated computer laboratory teaching digital literacy, typing, office productivity, and internet research to prepare children for modern careers.",
                "detailed_description": "The institution features a separate modern computer lab equipped with high-speed internet. Children receive structured training in basic computing, MS Office, typing speed, and digital fundamentals, bridging the digital divide.",
                "image": "/images/photos/computer_lab.jpg",
                "display_order": 2
            },
            {
                "title": "Vedic Education & Sixteen Sanskars",
                "slug": "vedic-sanskars",
                "category": "vedic",
                "icon": "Flame",
                "short_description": "Imparting the sixteen sacred Vedic rites (Sanskars), Swasti Vachan, and correct pronunciation of hymns and mantras.",
                "detailed_description": "Bal Sadan preserves sacred Vedic traditions. Children learn proper voice modulation and recitation of Vedic hymns, Upanishads, and the sixteen Sanskars (including Upanayana and marriage rites). Senior students frequently travel across Lucknow to perform Havans and ceremonies for the community.",
                "image": "/images/photos/havan_vedic_sanskars.jpg",
                "display_order": 3
            },
            {
                "title": "Yoga, Pranayama & Naturopathy",
                "slug": "yoga-naturopathy",
                "category": "wellness",
                "icon": "Sparkles",
                "short_description": "Daily dawn yoga, meditation, and naturopathic routines that foster physical strength, mental poise, and disciplined vitality.",
                "detailed_description": "Starting every morning at 6:00 AM, children engage in asanas, surya namaskars, and pranayama. The campus features an active Naturopathy Center that promotes natural healing and healthy lifestyle practices.",
                "image": "/images/photos/yoga_gymnastics_pyramid.jpg",
                "display_order": 4
            },
            {
                "title": "Judo & Karate Martial Arts",
                "slug": "judo-karate",
                "category": "sports",
                "icon": "ShieldCheck",
                "short_description": "Self-defense and martial arts training instilling self-discipline, focus, physical agility, and protective confidence.",
                "detailed_description": "Trained martial arts instructors conduct regular classes in Judo and Karate. Children learn discipline, respect, agility, and self-defense skills, with multiple students winning regional medals.",
                "image": "/images/photos/karate_martial_arts.jpg",
                "display_order": 5
            },
            {
                "title": "Vocal & Instrumental Music",
                "slug": "music-vocal-instrumental",
                "category": "skill",
                "icon": "Music",
                "short_description": "Training in classical Indian vocal music, harmonium, tabla, and devotional bhajans fostering cultural enrichment and creativity.",
                "detailed_description": "Children are taught vocal and instrumental music by dedicated music instructors. They perform during daily prayers, national festivals, and public cultural ceremonies.",
                "image": "/images/photos/cultural_stage_buddha.jpg",
                "display_order": 6
            },
            {
                "title": "Sewing, Embroidery & Tailoring",
                "slug": "sewing-embroidery",
                "category": "skill",
                "icon": "Scissors",
                "short_description": "Practical garment making, needlework, and tailoring skills providing vocational independence.",
                "detailed_description": "Vocational workshops in sewing, stitching, and embroidery teach children hands-on craftsmanship and vocational self-reliance.",
                "image": "/images/photos/children_celebration_gifts.jpg",
                "display_order": 7
            },
            {
                "title": "Painting & Clay Modelling",
                "slug": "painting-clay-modelling",
                "category": "skill",
                "icon": "Palette",
                "short_description": "Creative arts sessions encouraging self-expression through sketching, canvas painting, and clay sculpture.",
                "detailed_description": "Regular art workshops provide creative emotional expression, fine motor development, and artistic skills, featured in annual campus exhibitions.",
                "image": "/images/photos/art_drawing_session.jpg",
                "display_order": 8
            },
            {
                "title": "Food Preservation & Cooking",
                "slug": "food-preservation-cooking",
                "category": "skill",
                "icon": "Utensils",
                "short_description": "Culinary basics, nutrition science, and traditional Indian food preservation techniques.",
                "detailed_description": "Children learn practical cooking, kitchen hygiene, nutritional balance, and artisanal food preservation (pickling, drying, and preserves).",
                "image": "/images/photos/dining_hall_meal.jpg",
                "display_order": 9
            },
            {
                "title": "Gardening & Campus Eco-Care",
                "slug": "gardening-eco-care",
                "category": "skill",
                "icon": "Flower2",
                "short_description": "Hands-on organic horticulture, tree planting, and ecological preservation across our 3-acre green estate.",
                "detailed_description": "Bal Sadan cultivates an environmentally conscious mindset. Children participate in tree plantation, organic vegetable gardening, and campus greening.",
                "image": "/images/photos/green_campus_plantation.jpg",
                "display_order": 10
            }
        ]
        for p in programs_data:
            Program.objects.create(**p)
        self.stdout.write("Seeded Programs & Skills")

        # 7. Facilities
        Facility.objects.all().delete()
        facilities_data = [
            {
                "title": "Junior High School & Modern Classrooms",
                "slug": "junior-high-school",
                "category": "education",
                "description": "On-campus school recognized by the UP Basic Education Council, featuring well-lit, airy classrooms and compassionate teaching staff.",
                "features": ["UP Basic Education Council curriculum", "Experienced teachers and counselors", "Quiet, focused study atmosphere", "Transition support for 9th-12th standard"],
                "image": "/images/photos/campus_school_building.jpg",
                "order": 1
            },
            {
                "title": "Modern Computer Laboratory",
                "slug": "computer-lab",
                "category": "education",
                "description": "Dedicated technical facility equipped with computers, internet access, and interactive digital learning resources.",
                "features": ["Individual desktop workstations", "High-speed internet connectivity", "Typing and software productivity training", "Digital library access"],
                "image": "/images/photos/computer_lab.jpg",
                "order": 2
            },
            {
                "title": "Residential Hostels & Dormitories",
                "slug": "residential-hostels",
                "category": "residential",
                "description": "Clean, secure, and dignified living quarters housing approximately 100 children within a secure perimeter wall.",
                "features": ["Clean bedding and personal lockers", "Round-the-clock warden supervision", "Submersible water pumps for pure drinking water", "High security and supportive environment"],
                "image": "/images/photos/campus_main_gate.jpg",
                "order": 3
            },
            {
                "title": "Spacious Dining Hall & Modern Pantry",
                "slug": "dining-hall",
                "category": "residential",
                "description": "Large hygienic dining space where all children share three wholesome, freshly prepared vegetarian meals daily.",
                "features": ["Hygienic kitchen with steam and LPG cooking", "Fresh dairy from on-campus Gaushala", "Community dining fostering brotherhood", "Donor-sponsored festival meals"],
                "image": "/images/photos/dining_hall_meal.jpg",
                "order": 4
            },
            {
                "title": "Shri Dharm Dutt Sabhagar (Auditorium)",
                "slug": "dharm-dutt-sabhagar",
                "category": "residential",
                "description": "Central multipurpose hall named in honour of visionary leader Shri Dharm Dutt Ji, hosting cultural functions and debates.",
                "features": ["Sound system and elevated stage", "Indoor seating for 300+ guests", "Venue for national celebrations and assemblies", "Rain-sheltered recreational space"],
                "image": "/images/photos/dharm_dutt_sabhagar.jpg",
                "order": 5
            },
            {
                "title": "Homeopathic Dispensary & Naturopathy Center",
                "slug": "dispensary-naturopathy",
                "category": "wellness",
                "description": "On-site healthcare clinic providing prompt medical care, naturopathic healing, and weekly visits by Govt. MBBS doctors.",
                "features": ["Trained nursing staff and first aid", "Weekly Friday clinics by Govt. MBBS doctors", "Homeopathic and naturopathic treatments", "Annual preventive health and dental checkups"],
                "image": "/images/photos/spiritual_discourse_assembly.jpg",
                "order": 6
            },
            {
                "title": "Two Grand Yagyashalas",
                "slug": "yagyashalas",
                "category": "culture",
                "description": "Beautiful traditional octagonal pavilions dedicated to daily morning and evening Agnihotra Havan rituals.",
                "features": ["Authentic brick Havan kunds", "Covered traditional pavilion", "Space for group Vedic recitation", "Open to community Sanskar ceremonies"],
                "image": "/images/photos/yagyashala_main.jpg",
                "order": 7
            },
            {
                "title": "Indigenous Gaushala (Cowshed)",
                "slug": "gaushala-cowshed",
                "category": "residential",
                "description": "Well-maintained cowshed housing over 24 cows, fulfilling our commitment to Gau Seva and providing pure, nutrient-rich milk.",
                "features": ["Housing 24+ healthy cows and calves", "Daily supply of fresh, unadulterated milk", "Organic fertilizer for campus gardens", "Nurtures empathy and reverence for life"],
                "image": "/images/photos/gaushala_cowshed.jpg",
                "order": 8
            },
            {
                "title": "18 kW Rooftop Solar Power Plant",
                "slug": "solar-power-plant",
                "category": "sustainability",
                "description": "Modern renewable energy installation drastically reducing carbon footprint and guaranteeing 24/7 uninterrupted power.",
                "features": ["18-kilowatt rooftop photovoltaic panels", "Eco-friendly zero-emission power", "Drastic reduction in grid electricity costs", "Continuous power for water pumps and classrooms"],
                "image": "/images/photos/solar_power_rooftop.jpg",
                "order": 9
            },
            {
                "title": "Sports Playgrounds & Badminton Courts",
                "slug": "sports-courts",
                "category": "sports",
                "description": "Two open playgrounds and two dedicated badminton courts supporting athletics, volleyball, football, and physical vitality.",
                "features": ["Volleyball and football grounds", "Two tournament-standard badminton courts", "Judo & Karate practice arena", "Annual sports day and inter-house competitions"],
                "image": "/images/photos/sports_playground_volleyball.jpg",
                "order": 10
            }
        ]
        for f in facilities_data:
            Facility.objects.create(**f)
        self.stdout.write("Seeded Facilities")

        # 8. Daily Routine
        DailyRoutine.objects.all().delete()
        routine_data = [
            {"time": "6:00 AM", "title": "Dawn Yoga & Meditation", "description": "Rejuvenating yogasanas, surya namaskars, and pranayama in the morning air.", "icon": "Sun", "order": 1},
            {"time": "7:00 AM", "title": "Havan & Vedic Sandhya", "description": "Sacred fire ceremony, chanting of Swasti Vachan and Upanishad hymns.", "icon": "Flame", "order": 2},
            {"time": "8:30 AM", "title": "Wholesome Breakfast", "description": "Nutritious breakfast served with pure fresh milk from the campus Gaushala.", "icon": "Coffee", "order": 3},
            {"time": "10:00 AM", "title": "Formal Schooling & IT Lab", "description": "Classes at the recognized Junior High School and practical computer training.", "icon": "BookOpen", "order": 4},
            {"time": "1:00 PM", "title": "Lunch & Rest Period", "description": "Freshly cooked vegetarian lunch in the dining hall followed by relaxation.", "icon": "Utensils", "order": 5},
            {"time": "2:00 PM", "title": "Vocational Skills & Electives", "description": "Specialized classes in music, tailoring, crafts, and food preservation.", "icon": "Wrench", "order": 6},
            {"time": "4:00 PM", "title": "Sports, Martial Arts & Recreation", "description": "Playground sports, volleyball, badminton, judo, and music practice.", "icon": "Activity", "order": 7},
            {"time": "6:00 PM", "title": "Evening Dinner", "description": "Community dinner shared with caregivers in an atmosphere of camaraderie.", "icon": "Heart", "order": 8},
            {"time": "7:00 PM", "title": "Supervised Evening Self-Study", "description": "Homework, academic revision, and reading under mentorship of teachers.", "icon": "BookMarked", "order": 9},
            {"time": "9:00 PM", "title": "Night Prayers & Rest", "description": "Peaceful conclusion of the day and restful sleep in dormitories.", "icon": "Moon", "order": 10},
        ]
        for r in routine_data:
            DailyRoutine.objects.create(**r)
        self.stdout.write("Seeded Daily Routine")

        # 9. Gallery Images
        GalleryImage.objects.all().delete()
        gallery_items = [
            {"title": "Campus Junior High School Building", "image": "/images/photos/campus_school_building.jpg", "caption": "School recognized by UP Basic Education Council", "category": "campus", "is_featured": True, "order": 1},
            {"title": "Sacred Yagyashala with Octagonal Pavilion", "image": "/images/photos/yagyashala_main.jpg", "caption": "Where daily Agnihotra and Swasti Vachan take place", "category": "vedic", "is_featured": True, "order": 2},
            {"title": "Computer Training Laboratory", "image": "/images/photos/computer_lab.jpg", "caption": "Children mastering technical computing and digital skills", "category": "skills", "is_featured": True, "order": 3},
            {"title": "Campus Gaushala & Dairy", "image": "/images/photos/gaushala_cowshed.jpg", "caption": "Sheltering over 24 indigenous cows providing pure fresh milk", "category": "campus", "is_featured": True, "order": 4},
            {"title": "18 kW Rooftop Solar Power Plant", "image": "/images/photos/solar_power_rooftop.jpg", "caption": "Clean energy installation ensuring 24x7 green power", "category": "campus", "is_featured": True, "order": 5},
            {"title": "Volleyball & Sports on Green Grounds", "image": "/images/photos/sports_playground_volleyball.jpg", "caption": "Students active in outdoor athletics and team sports", "category": "sports", "is_featured": True, "order": 6},
            {"title": "Dining Hall & Wholesome Meals", "image": "/images/photos/dining_hall_meal.jpg", "caption": "Nutritious and balanced meals served with love", "category": "campus", "is_featured": True, "order": 7},
            {"title": "Vedic Sanskars & Sacred Havan Gathering", "image": "/images/photos/havan_vedic_sanskars.jpg", "caption": "Students learning the 16 Sanskars and Vedic rituals", "category": "vedic", "is_featured": True, "order": 8},
            {"title": "Children Practicing Gymnastics Pyramid", "image": "/images/photos/yoga_gymnastics_pyramid.jpg", "caption": "Physical fitness, balance, and gymnastic discipline", "category": "sports", "is_featured": False, "order": 9},
            {"title": "Sports Trophy & Medal Winners", "image": "/images/photos/sports_trophy_winners.jpg", "caption": "Bal Sadan students displaying athletic achievements", "category": "sports", "is_featured": False, "order": 10},
            {"title": "Judo & Karate Demonstration", "image": "/images/photos/karate_martial_arts.jpg", "caption": "Martial arts practice for self-defense and confidence", "category": "sports", "is_featured": False, "order": 11},
            {"title": "Cultural Stage Performance", "image": "/images/photos/cultural_stage_buddha.jpg", "caption": "Children participating in theatrical and musical programs", "category": "events", "is_featured": False, "order": 12},
            {"title": "Mallakhamb Balancing Showcase", "image": "/images/photos/mallakhamb_balancing.jpg", "caption": "Traditional Indian balancing and gymnastics display", "category": "sports", "is_featured": False, "order": 13},
            {"title": "Children Assembly in Uniform", "image": "/images/photos/school_assembly_uniform.jpg", "caption": "Morning school assembly and discipline", "category": "education", "is_featured": False, "order": 14},
            {"title": "Art & Creative Drawing Session", "image": "/images/photos/art_drawing_session.jpg", "caption": "Fine arts and self-expression workshop", "category": "skills", "is_featured": False, "order": 15},
            {"title": "Tree Plantation & Eco Drive", "image": "/images/photos/green_campus_plantation.jpg", "caption": "Green campus initiative nurturing environmental reverence", "category": "campus", "is_featured": False, "order": 16},
            {"title": "Dussehra Celebration with Effigy", "image": "/images/photos/dussehra_celebration.jpg", "caption": "Community festival celebration at the campus grounds", "category": "events", "is_featured": False, "order": 17},
            {"title": "Shri Dharm Dutt Sabhagar Exterior", "image": "/images/photos/dharm_dutt_sabhagar.jpg", "caption": "Central auditorium named after Shri Dharm Dutt Ji", "category": "campus", "is_featured": False, "order": 18},
            {"title": "Official Brochure Page 1", "image": "/images/brochure/brochure_page_1.jpg", "caption": "Cover page: Introduction & Maharshi Dayanand Saraswati", "category": "brochure", "is_featured": False, "order": 19},
            {"title": "Official Brochure Page 2", "image": "/images/brochure/brochure_page_2.jpg", "caption": "Overview, Objective & Environment", "category": "brochure", "is_featured": False, "order": 20},
            {"title": "Official Brochure Page 3", "image": "/images/brochure/brochure_page_3.jpg", "caption": "Beginning (1915) & Bal Sadan's Renaissance", "category": "brochure", "is_featured": False, "order": 21},
            {"title": "Official Brochure Page 4", "image": "/images/brochure/brochure_page_4.jpg", "caption": "Admission Formalities & Vocational Courses", "category": "brochure", "is_featured": False, "order": 22},
            {"title": "Official Brochure Page 5", "image": "/images/brochure/brochure_page_5.jpg", "caption": "Residential Facilities, Gaushala, Solar & Routine", "category": "brochure", "is_featured": False, "order": 23},
            {"title": "Official Brochure Page 6", "image": "/images/brochure/brochure_page_6.jpg", "caption": "How to Help, Banking Info, UPI QR & Contacts", "category": "brochure", "is_featured": False, "order": 24},
        ]
        for g in gallery_items:
            GalleryImage.objects.create(**g)
        self.stdout.write("Seeded Gallery Images")

        # 10. Events
        Event.objects.all().delete()
        events_data = [
            {
                "title": "111th Foundation Day & Vedic Shanti Yagya",
                "slug": "111th-foundation-day-vedic-shanti-yagya",
                "date": datetime.date(2026, 5, 11),
                "time_str": "9:00 AM - 1:30 PM",
                "location": "Main Yagyashala & Shri Dharm Dutt Sabhagar, Bal Sadan Campus",
                "summary": "Commemorating the founding of Shrimad Dayanand Bal Sadan on 11 May 1915 with grand Agnihotra havan, musical bhajans by children, and community feast.",
                "content": "On May 11, Shrimad Dayanand Bal Sadan celebrates over a century of selfless dedication to destitute and orphan children. The day begins with sacred Swasti Vachan and mahayagya at the Yagyashala, followed by cultural performances, student award distributions, and prasad distribution.",
                "image": "/images/photos/havan_vedic_sanskars.jpg",
                "is_upcoming": True,
                "featured": True
            },
            {
                "title": "Independence Day Cultural Festival & Sports Meet",
                "slug": "independence-day-cultural-festival",
                "date": datetime.date(2026, 8, 15),
                "time_str": "8:00 AM - 12:00 PM",
                "location": "Bal Sadan Campus Grounds, Lucknow",
                "summary": "Flag hoisting ceremony, martial arts demonstrations, gymnastics pyramid showcase, and patriotic presentations by our students.",
                "content": "A vibrant celebration of national pride featuring flag hoisting by distinguished patrons, marching parade by resident students, martial arts exhibitions, gymnastics pyramid formations, and distribution of sweets.",
                "image": "/images/photos/dharm_dutt_sabhagar.jpg",
                "is_upcoming": True,
                "featured": True
            },
            {
                "title": "Annual Vijaya Dashami & Sanskriti Samaroh",
                "slug": "annual-vijaya-dashami-sanskriti-samaroh",
                "date": datetime.date(2025, 10, 2),
                "time_str": "4:00 PM - 8:00 PM",
                "location": "Bal Sadan Open Grounds",
                "summary": "Traditional Dussehra celebration emphasizing victory of dharma, truth, and character, accompanied by music, drama, and community blessing.",
                "content": "The festival of Vijaya Dashami was celebrated with tremendous joy and enthusiasm. Resident children performed inspiring plays portraying the life and ideals of Maryada Purushottam Shri Ram, emphasizing character, devotion to truth, and service to society.",
                "image": "/images/photos/dussehra_celebration.jpg",
                "is_upcoming": False,
                "featured": False
            }
        ]
        for e in events_data:
            Event.objects.create(**e)
        self.stdout.write("Seeded Events")

        # 11. Donation Information
        DonationInformation.objects.all().delete()
        DonationInformation.objects.create(
            account_holder_name="SRIMAD DAYANAND BAL SADAN",
            bank_name="Bank of India",
            branch="Aishbagh branch, Lucknow",
            account_number="680310100008184",
            ifsc="BKID0006803",
            upi_id="9452158755@okbizicici",
            phone="+91 9452158755",
            qr_code="/images/photos/donation_upi_qr.jpg",
            instructions="Donations can be made by Cheque, Bank Draft, or Cash in the name of 'SRIMAD DAYANAND BAL SADAN' or directly through NEFT / RTGS / IMPS / UPI into our official Bank of India account.",
            in_kind_items="Donations of useful items such as ration (flour, rice, pulses, cooking oil), fresh fruits, clothing, medicines, educational notebooks & school stationery, sports gear, shoes and slippers, and daily toiletries (bath soap, toothpaste, toothbrushes) are warmly welcomed.",
            tax_exemption_note="Bal Sadan operates with 100% financial transparency. Contributions are eligible for tax exemption under section 80G of the Indian Income Tax Act.",
            active=True
        )
        self.stdout.write("Seeded Donation Information")

        # 12. Document Categories & Documents
        DocumentCategory.objects.all().delete()
        cat_transparency = DocumentCategory.objects.create(name="Governance & Recognition", slug="governance", order=1)
        cat_brochure = DocumentCategory.objects.create(name="Brochure & Introductions", slug="brochure", order=2)
        cat_policies = DocumentCategory.objects.create(name="Child Welfare Policies", slug="policies", order=3)

        Document.objects.all().delete()
        Document.objects.create(
            title="Shrimad Dayanand Bal Sadan - Official Institutional Brochure",
            category=cat_brochure,
            year="2026",
            description="Complete official introduction detailing history, daily routines, facilities, child admission guidelines, and ways to help.",
            file_url="/images/brochure/brochure_page_1.jpg",
            is_public=True
        )
        Document.objects.create(
            title="Recognition by UP Basic Education Council",
            category=cat_transparency,
            year="2024",
            description="Official accreditation for on-campus Junior High School recognized by the Uttar Pradesh Basic Education Council.",
            file_url="/images/brochure/brochure_page_2.jpg",
            is_public=True
        )
        Document.objects.create(
            title="Juvenile Justice Act & CWC Admission Guidelines",
            category=cat_policies,
            year="2024",
            description="Statutory institutional protocol in compliance with Juvenile Justice Model Rules 2016 for Child Welfare Committee placements.",
            file_url="/images/brochure/brochure_page_4.jpg",
            is_public=True
        )
        self.stdout.write("Seeded Documents")

        # 13. SEO Settings
        SEOSettings.objects.all().delete()
        seo_items = [
            {
                "page_name": "home",
                "meta_title": "Shrimad Dayanand Bal Sadan | Charitable Residential & Educational Institution, Lucknow",
                "meta_description": "Shrimad Dayanand Bal Sadan, Lucknow. Established 1915. Providing shelter, nutrition, recognized education, Vedic values, and vocational skills to orphaned and underprivileged children.",
                "keywords": "Shrimad Dayanand Bal Sadan, Lucknow NGO, Orphanage Lucknow, Arya Samaj Bal Sadan, Vedic education, child welfare UP, donate for orphan children",
                "og_image": "/images/photos/campus_school_building.jpg"
            },
            {
                "page_name": "about",
                "meta_title": "About Us | Shrimad Dayanand Bal Sadan, Lucknow",
                "meta_description": "Learn about the century-old legacy of Shrimad Dayanand Bal Sadan, founded in 1915 on Maharshi Dayanand Saraswati's ideals of compassion and equality.",
                "keywords": "About Bal Sadan, Banarasi Lal Ji, Swami Nirbhayanand, Shri Dharm Dutt Ji, Lucknow orphanage history",
                "og_image": "/images/photos/dayanand_saraswati.jpg"
            },
            {
                "page_name": "support-us",
                "meta_title": "Donate & Support Us | Shrimad Dayanand Bal Sadan, Lucknow",
                "meta_description": "Support orphaned and destitute children at Bal Sadan Lucknow. Bank of India details, UPI ID, QR code, and in-kind donation guidelines.",
                "keywords": "Donate Bal Sadan, UPI donation, Bank of India Aishbagh, donate meals, sponsor child education Lucknow",
                "og_image": "/images/photos/donation_upi_qr.jpg"
            }
        ]
        for s in seo_items:
            SEOSettings.objects.create(**s)
        self.stdout.write("Seeded SEO Settings")

        self.stdout.write(self.style.SUCCESS('Successfully seeded all authentic brochure data into database!'))
