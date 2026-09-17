from PIL import Image
import os

downloads = r"C:\Users\Dell\Downloads"
images = [
    "WhatsApp Image 2026-09-17 at 11.15.37 PM.jpeg",
    "WhatsApp Image 2026-09-17 at 11.15.40 PM.jpeg",
    "WhatsApp Image 2026-09-17 at 11.15.41 PM.jpeg",
    "WhatsApp Image 2026-09-17 at 11.15.41 PM (1).jpeg",
    "WhatsApp Image 2026-09-17 at 11.15.42 PM.jpeg",
    "WhatsApp Image 2026-09-17 at 11.15.43 PM.jpeg",
]

for idx, img_name in enumerate(images, 1):
    path = os.path.join(downloads, img_name)
    if os.path.exists(path):
        with Image.open(path) as im:
            print(f"Page {idx}: {im.size[0]}x{im.size[1]} - {img_name}")
    else:
        print(f"Missing: {img_name}")
