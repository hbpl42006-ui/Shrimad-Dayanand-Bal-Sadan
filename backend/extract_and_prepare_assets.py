from PIL import Image
import os
import shutil

downloads = r"C:\Users\Dell\Downloads"
base_dir = os.path.dirname(os.path.abspath(__file__))
project_dir = os.path.abspath(os.path.join(base_dir, ".."))

backend_media = os.path.join(project_dir, "backend", "media")
backend_photos = os.path.join(backend_media, "photos")
backend_brochure = os.path.join(backend_media, "brochure")

frontend_public = os.path.join(project_dir, "frontend", "public")
frontend_images = os.path.join(frontend_public, "images")
frontend_brochure = os.path.join(frontend_images, "brochure")
frontend_photos = os.path.join(frontend_images, "photos")

for d in [backend_media, backend_photos, backend_brochure, frontend_public, frontend_images, frontend_brochure, frontend_photos]:
    os.makedirs(d, exist_ok=True)

raw_pages = [
    ("WhatsApp Image 2026-09-17 at 11.15.37 PM.jpeg", "brochure_page_1.jpg"),
    ("WhatsApp Image 2026-09-17 at 11.15.40 PM.jpeg", "brochure_page_2.jpg"),
    ("WhatsApp Image 2026-09-17 at 11.15.41 PM.jpeg", "brochure_page_3.jpg"),
    ("WhatsApp Image 2026-09-17 at 11.15.41 PM (1).jpeg", "brochure_page_4.jpg"),
    ("WhatsApp Image 2026-09-17 at 11.15.42 PM.jpeg", "brochure_page_5.jpg"),
    ("WhatsApp Image 2026-09-17 at 11.15.43 PM.jpeg", "brochure_page_6.jpg"),
]

# Copy full brochure pages
loaded_images = {}
for orig_name, target_name in raw_pages:
    src_path = os.path.join(downloads, orig_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(backend_brochure, target_name))
        shutil.copy2(src_path, os.path.join(frontend_brochure, target_name))
        loaded_images[target_name] = Image.open(src_path)
        print(f"Copied full brochure page: {target_name}")

crops = [
    # Page 1
    ("brochure_page_1.jpg", "dayanand_saraswati.jpg", (250, 270, 950, 910)),
    ("brochure_page_1.jpg", "campus_main_gate.jpg", (175, 930, 515, 1250)),
    ("brochure_page_1.jpg", "yagyashala_main.jpg", (525, 925, 860, 1260)),
    ("brochure_page_1.jpg", "havan_fire.jpg", (410, 1140, 630, 1390)),
    
    # Page 2
    ("brochure_page_2.jpg", "campus_school_building.jpg", (680, 130, 1030, 395)),
    ("brochure_page_2.jpg", "spiritual_discourse_assembly.jpg", (680, 460, 1040, 745)),
    ("brochure_page_2.jpg", "sports_football_felicitation.jpg", (710, 830, 1055, 1070)),
    ("brochure_page_2.jpg", "green_campus_plantation.jpg", (725, 1180, 1075, 1420)),

    # Page 3
    ("brochure_page_3.jpg", "dharm_dutt_sabhagar.jpg", (690, 80, 1045, 415)),
    ("brochure_page_3.jpg", "shri_dharm_dutt_meeting.jpg", (710, 500, 1065, 790)),
    ("brochure_page_3.jpg", "dussehra_celebration.jpg", (270, 1040, 600, 1550)),

    # Page 4
    ("brochure_page_4.jpg", "management_elders.jpg", (550, 50, 880, 250)),
    ("brochure_page_4.jpg", "computer_lab.jpg", (560, 250, 895, 435)),
    ("brochure_page_4.jpg", "school_assembly_uniform.jpg", (560, 440, 910, 665)),
    ("brochure_page_4.jpg", "havan_vedic_sanskars.jpg", (580, 810, 940, 1130)),
    ("brochure_page_4.jpg", "children_celebration_gifts.jpg", (470, 1170, 950, 1530)),

    # Page 5
    ("brochure_page_5.jpg", "yoga_gymnastics_pyramid.jpg", (720, 150, 925, 280)),
    ("brochure_page_5.jpg", "dining_hall_meal.jpg", (730, 290, 935, 445)),
    ("brochure_page_5.jpg", "gaushala_cowshed.jpg", (690, 540, 955, 740)),
    ("brochure_page_5.jpg", "solar_power_rooftop.jpg", (630, 810, 960, 1020)),
    ("brochure_page_5.jpg", "sports_playground_volleyball.jpg", (630, 1050, 960, 1320)),

    # Page 6
    ("brochure_page_6.jpg", "bal_sadan_banner_assembly.jpg", (180, 90, 565, 295)),
    ("brochure_page_6.jpg", "indoor_havan_gathering.jpg", (570, 90, 945, 295)),
    ("brochure_page_6.jpg", "mallakhamb_balancing.jpg", (180, 300, 485, 525)),
    ("brochure_page_6.jpg", "auditorium_participation.jpg", (490, 300, 945, 525)),
    ("brochure_page_6.jpg", "sports_trophy_winners.jpg", (150, 530, 415, 800)),
    ("brochure_page_6.jpg", "karate_martial_arts.jpg", (410, 530, 685, 800)),
    ("brochure_page_6.jpg", "cultural_stage_buddha.jpg", (685, 530, 965, 800)),
    ("brochure_page_6.jpg", "art_drawing_session.jpg", (410, 640, 675, 800)),
    ("brochure_page_6.jpg", "donation_upi_qr.jpg", (730, 850, 960, 1080)),
    ("brochure_page_6.jpg", "qr_youtube.jpg", (135, 1290, 345, 1490)),
    ("brochure_page_6.jpg", "qr_instagram.jpg", (760, 1290, 970, 1490)),
]

for src_key, out_name, box in crops:
    if src_key in loaded_images:
        im = loaded_images[src_key]
        cropped = im.crop(box)
        # Save to both backend media and frontend public images
        b_target = os.path.join(backend_photos, out_name)
        f_target = os.path.join(frontend_photos, out_name)
        cropped.save(b_target, quality=92)
        cropped.save(f_target, quality=92)
        print(f"Extracted: {out_name} ({cropped.size[0]}x{cropped.size[1]})")

print("All brochure photos extracted successfully!")
