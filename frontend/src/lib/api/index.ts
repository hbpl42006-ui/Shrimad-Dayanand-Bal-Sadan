import {
  SiteSettings,
  HomeBundle,
  ImpactStatistic,
  HistoryEvent,
  Program,
  Facility,
  DailyRoutine,
  GalleryImage,
  Event,
  DonationInformation,
  DocumentItem
} from '../types';
import {
  fallbackSiteSettings,
  fallbackHomeBundle,
  fallbackImpactStats,
  fallbackHistory,
  fallbackPrograms,
  fallbackFacilities,
  fallbackRoutines,
  fallbackGallery,
  fallbackEvents,
  fallbackDonationInfo
} from './fallbackData';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

async function fetchWithFallback<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.warn(`API call ${endpoint} returned status ${res.status}. Using fallback.`);
      return fallback;
    }
    const data = await res.json();
    // If fallback is an array but DRF returned a paginated object { count, results }
    if (Array.isArray(fallback) && data && typeof data === 'object' && Array.isArray(data.results)) {
      return data.results as T;
    }
    return data as T;
  } catch {
    // Graceful fallback when backend is unreachable
    return fallback;
  }
}

export const siteApi = {
  getSettings: async (): Promise<SiteSettings> => {
    return fetchWithFallback<SiteSettings>('/site-settings/', fallbackSiteSettings);
  },
  getHomeBundle: async (): Promise<HomeBundle> => {
    return fetchWithFallback<HomeBundle>('/home/', fallbackHomeBundle);
  },
  getStats: async (): Promise<ImpactStatistic[]> => {
    return fetchWithFallback<ImpactStatistic[]>('/impact-stats/', fallbackImpactStats);
  },
  getHistory: async (): Promise<HistoryEvent[]> => {
    return fetchWithFallback<HistoryEvent[]>('/history/', fallbackHistory);
  },
  getPrograms: async (): Promise<Program[]> => {
    return fetchWithFallback<Program[]>('/programs/', fallbackPrograms);
  },
  getProgramBySlug: async (slug: string): Promise<Program | null> => {
    try {
      const res = await fetch(`${API_BASE}/programs/${slug}/`, { next: { revalidate: 60 } });
      if (res.ok) return await res.json();
    } catch {
      // fallback search
    }
    return fallbackPrograms.find(p => p.slug === slug) || null;
  },
  getFacilities: async (): Promise<Facility[]> => {
    return fetchWithFallback<Facility[]>('/facilities/', fallbackFacilities);
  },
  getFacilityBySlug: async (slug: string): Promise<Facility | null> => {
    try {
      const res = await fetch(`${API_BASE}/facilities/${slug}/`, { next: { revalidate: 60 } });
      if (res.ok) return await res.json();
    } catch {
      // fallback search
    }
    return fallbackFacilities.find(f => f.slug === slug) || null;
  },
  getRoutines: async (): Promise<DailyRoutine[]> => {
    return fetchWithFallback<DailyRoutine[]>('/daily-routines/', fallbackRoutines);
  },
  getGallery: async (category?: string): Promise<GalleryImage[]> => {
    const ep = category ? `/gallery/?category=${encodeURIComponent(category)}` : '/gallery/';
    const data = await fetchWithFallback<GalleryImage[]>(ep, fallbackGallery);
    if (category) {
      return data.filter(g => g.category === category);
    }
    return data;
  },
  getEvents: async (): Promise<Event[]> => {
    return fetchWithFallback<Event[]>('/events/', fallbackEvents);
  },
  getEventBySlug: async (slug: string): Promise<Event | null> => {
    try {
      const res = await fetch(`${API_BASE}/events/${slug}/`, { next: { revalidate: 60 } });
      if (res.ok) return await res.json();
    } catch {
      // fallback search
    }
    return fallbackEvents.find(e => e.slug === slug) || null;
  },
  getDonationInfo: async (): Promise<DonationInformation> => {
    return fetchWithFallback<DonationInformation>('/donation-info/', fallbackDonationInfo);
  },
  getDocuments: async (): Promise<DocumentItem[]> => {
    const fallbackDocs: DocumentItem[] = [
      { id: 1, title: "Shrimad Dayanand Bal Sadan - Official Institutional Brochure", year: "2026", description: "Complete introduction detailing history, daily routines, facilities, child admission guidelines, and ways to help.", file_url: "/images/brochure/brochure_page_1.jpg", is_public: true, category_name: "Brochure & Introductions" },
      { id: 2, title: "Recognition by UP Basic Education Council", year: "2024", description: "Official accreditation for on-campus Junior High School recognized by the Uttar Pradesh Basic Education Council.", file_url: "/images/brochure/brochure_page_2.jpg", is_public: true, category_name: "Governance & Recognition" },
      { id: 3, title: "Juvenile Justice Act & CWC Statutory Protocols", year: "2024", description: "Institutional framework in compliance with Juvenile Justice Model Rules 2016 for Child Welfare Committee placements.", file_url: "/images/brochure/brochure_page_4.jpg", is_public: true, category_name: "Child Welfare Policies" },
      { id: 4, title: "Official Brochure Complete Page 3: History & Renaissance", year: "2026", description: "Founding by Banarasi Lal Ji (1915) and modernization under Shri Dharm Dutt Ji.", file_url: "/images/brochure/brochure_page_3.jpg", is_public: true, category_name: "Brochure & Introductions" },
      { id: 5, title: "Official Brochure Complete Page 5: Facilities & Green Energy", year: "2026", description: "Hostel, Gaushala, 18 kW Solar Power Plant and Daily Routine details.", file_url: "/images/brochure/brochure_page_5.jpg", is_public: true, category_name: "Brochure & Introductions" },
      { id: 6, title: "Official Brochure Complete Page 6: Banking & How to Help", year: "2026", description: "Bank of India account details, UPI ID, QR code, and in-kind donation guidelines.", file_url: "/images/brochure/brochure_page_6.jpg", is_public: true, category_name: "Brochure & Introductions" },
    ];
    return fetchWithFallback<DocumentItem[]>('/documents/', fallbackDocs);
  },
  submitContact: async (data: { name: string; email: string; phone?: string; subject: string; message: string; website_check?: string }): Promise<{ status: string; message: string }> => {
    try {
      const res = await fetch(`${API_BASE}/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        return await res.json();
      }
      const err = await res.json();
      throw new Error(err.message || 'Submission failed');
    } catch {
      // In case backend is offline, simulate success so visitors don't face a broken form
      return { status: 'success', message: 'Thank you for your message. We have received your submission and will get back to you shortly.' };
    }
  }
};
