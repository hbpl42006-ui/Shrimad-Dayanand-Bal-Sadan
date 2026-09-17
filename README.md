# Shrimad Dayanand Bal Sadan (ESTD. 1915)
### Moti Nagar, Lucknow, Uttar Pradesh, India

A complete, production-ready, institutional web platform for **Shrimad Dayanand Bal Sadan**, a historic charitable residential and educational sanctuary dedicated since **11 May 1915** to nurturing orphaned, abandoned, destitute, and vulnerable children.

---

## 🏛️ Project Architecture & Design System

The platform combines a **Next.js 16+ (App Router)** frontend with a **Django 5+ REST Framework** backend. Major website content is completely manageable through Django Admin and consumed via REST APIs at `/api/v1/`.

### Authentic Visual & Content Reference
The website was constructed using the organization’s **official 6-page brochure** and authentic campus photographs:
- **Historical Lineage**: Founded May 11, 1915 by Banarasi Lal Ji (Swami Nirbhayanand); modernized in the 1990s by Shri Dharm Dutt Ji (retired Joint Secretary, UPSEB).
- **Official Recognitions**: UP Control Board (Women & Child Development Department) and UP Basic Education Council.
- **Key Infrastructure**: 3+ acre green campus, 18 kW rooftop solar plant, 24+ indigenous cows in Gaushala, computer lab, two Yagyashalas, and Shri Dharm Dutt Sabhagar.
- **Official Banking Details**: Bank of India, Aishbagh branch, Lucknow (A/C: `680310100008184`, IFSC: `BKID0006803`, UPI: `9452158755@okbizicici`).

### Vedic Heritage Palette
- **Deep Maroon (`#7A1F2B`)**: Primary institutional authority, headers, buttons, footers.
- **Saffron (`#E98B18`)**: Sacred accents, badges, icons, highlights.
- **Warm Gold (`#D6A43B`)**: Refined borders and ornaments.
- **Dark Charcoal (`#222222`)**: Crisp, accessible typography.
- **Warm Cream (`#FFF9EF`) & Soft Beige (`#F6EFE4`)**: Section backgrounds and card backings.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Python 3.10+** (Tested on Python 3.12.4)
- **Node.js 18+** (Tested on Node.js v22.20.0, npm 11.6.2)

---

### 1. Backend Setup (Django REST Framework)

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

# Seed all authentic brochure data & photos
python manage.py seed_data

# Create or verify Django superuser
# Default admin pre-seeded:
# Username: admin
# Password: admin12345
# Or create a custom superuser:
python manage.py createsuperuser

# Start the Django development server
python manage.py runserver
```

Backend will be accessible at:
- **API Root**: [http://127.0.0.1:8000/api/v1/](http://127.0.0.1:8000/api/v1/)
- **Django Admin**: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

---

### 2. Frontend Setup (Next.js 16+ App Router)

```bash
# Navigate to frontend directory
cd frontend

# Install npm packages
npm install

# Start development server
npm run dev
```

Frontend will be accessible at:
- **Website URL**: [http://localhost:3000](http://localhost:3000)

To create a production build:
```bash
npm run build
npm run start
```

---

## 📡 REST API Structure (`/api/v1/`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/site-settings/` | General site metadata, contacts, phones, socials |
| `GET` | `/api/v1/home/` | Aggregated 1-roundtrip bundle for homepage LCP |
| `GET` | `/api/v1/impact-stats/` | Impact metrics (children, acreage, solar, cows) |
| `GET` | `/api/v1/history/` | Timeline events (1915, 1990s, 1992, 2016, present) |
| `GET` | `/api/v1/programs/` | Vocational and educational courses |
| `GET` | `/api/v1/programs/{slug}/` | Individual course detail |
| `GET` | `/api/v1/facilities/` | Campus facilities by category |
| `GET` | `/api/v1/daily-routines/` | Daily schedule from 6:00 AM to 9:00 PM |
| `GET` | `/api/v1/gallery/` | Gallery photos filtered by category |
| `GET` | `/api/v1/events/` | Upcoming and past events |
| `GET` | `/api/v1/events/{slug}/` | Event detail view |
| `GET` | `/api/v1/donation-info/` | Bank of India, IFSC, UPI ID, QR code, guidelines |
| `GET` | `/api/v1/documents/` | Transparency reports, recognition certificates |
| `POST` | `/api/v1/contact/` | Contact submission with honeypot bot protection |

---

## 🧭 Frontend Route Map

- `/` — Premium 16-section homepage with hero, floating metrics, education, Vedic values, vocational skills, facilities, Gaushala, solar sustainability, daily routine, gallery preview, and donation appeal.
- `/about` — Heritage, Maharshi Dayanand Saraswati lineage, leadership, and equality principles.
- `/our-story` — 110-year interactive vertical timeline.
- `/our-work` — Comprehensive program pillars.
- `/education` — UP Board recognized Junior High School, Sanskrit voice modulation, computing.
- `/skills` — 10+ vocational skill training courses.
- `/facilities` — Campus infrastructure categorized by education, residence, wellness, culture, and sports.
- `/child-welfare` — Statutory child protection and Child Welfare Committee (CWC) referral protocols.
- `/gallery` — Interactive gallery with category filtering tabs and full Lightbox modal.
- `/events` & `/events/[slug]` — Festival and celebration announcements.
- `/support-us` — Bank of India details, UPI ID copy buttons, QR code, meal sponsorship, and in-kind donation guidelines.
- `/transparency` — Governance, 80G tax exemption, zero-government-funding community statement, and full original brochure scans.
- `/contact` — Office address, verified phones, interactive contact form, and Google Maps.
- `/privacy-policy` & `/terms` — Legal terms and child protection privacy.
- `/sitemap.xml` & `/robots.txt` — Dynamic SEO generation.

---

## 🔒 Security & Performance Features

1. **Largest Contentful Paint (LCP) Optimization**: Hero image loaded with `priority` and `fetchpriority="high"`, while below-the-fold assets use progressive `loading="lazy"`.
2. **Dual-Mode Database**: Supports PostgreSQL out-of-the-box via `DATABASE_URL` and falls back cleanly to SQLite for instant local zero-friction setup.
3. **Spam Protection**: Contact form incorporates a honeypot field and validation logic.
4. **Structured Schema**: JSON-LD `NGO` and `EducationalOrganization` metadata injected into `<head>`.
5. **Accessibility (a11y)**: Semantic HTML5, full keyboard navigation, `aria-label`, visible focus rings, and WCAG-compliant color contrast ratios.

---

## 📞 Official Institutional Contacts

- **Organization**: Shrimad Dayanand Bal Sadan
- **Address**: Moti Nagar, (Near DAV College), Aishbagh Road, Lucknow - 226004, Uttar Pradesh, India
- **Phones**: `+91 9452158755`, `+91 9305882580`, `+91 9005059992`
- **Email**: `dbslucknow@gmail.com`
- **Website**: `https://srimaddayanandbalsadan.in`
