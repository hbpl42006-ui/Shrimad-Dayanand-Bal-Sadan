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
  DocumentItem,
  ContactFormData,
  ContactSubmitResponse,
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
  fallbackDonationInfo,
} from './fallbackData';

const DEFAULT_API_BASE = 'http://localhost:8000/api/v1';

/**
 * Builds a clean, normalized API URL from NEXT_PUBLIC_API_URL or local fallback,
 * preventing duplicate or missing slashes.
 */
export function buildApiUrl(endpoint: string): string {
  const base = (process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_BASE).trim().replace(/\/+$/, '');
  const path = endpoint.trim().replace(/^\/+/, '');
  return `${base}/${path}`;
}

const isDev = process.env.NODE_ENV === 'development';

/**
 * Robust server-side fetch with differentiated error logging,
 * automatic DRF pagination unwrapping, and resilient fallback data.
 */
async function fetchWithFallback<T>(
  endpoint: string,
  fallback: T,
  init?: RequestInit
): Promise<T> {
  const url = buildApiUrl(endpoint);

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      ...init,
    });

    // 1. Differentiate HTTP Non-2xx Responses
    if (!res.ok) {
      console.warn(
        `[API HTTP Error] Endpoint: "${endpoint}" | Status: ${res.status} ${res.statusText} | URL: ${url}. Serving fallback data.`
      );
      if (isDev) {
        console.info(`[API Dev Debug] "${endpoint}" -> Fallback data used due to HTTP ${res.status}`);
      }
      return fallback;
    }

    // 2. Differentiate JSON Parsing Failures
    let data: unknown;
    try {
      data = await res.json();
    } catch (jsonErr) {
      console.error(
        `[API JSON Error] Failed to parse JSON from endpoint: "${endpoint}" | URL: ${url}:`,
        jsonErr instanceof Error ? jsonErr.message : jsonErr
      );
      if (isDev) {
        console.info(`[API Dev Debug] "${endpoint}" -> Fallback data used due to JSON parse error`);
      }
      return fallback;
    }

    if (isDev) {
      console.info(`[API Dev Debug] "${endpoint}" -> Live Django API data successfully loaded`);
    }

    // 3. Handle DRF Paginated Response: { count, next, previous, results: [...] }
    if (
      Array.isArray(fallback) &&
      data &&
      typeof data === 'object' &&
      'results' in data &&
      Array.isArray((data as { results: unknown }).results)
    ) {
      return (data as { results: unknown }).results as T;
    }

    return data as T;
  } catch (networkErr) {
    // 4. Differentiate Network & Connection Failures (DNS, Connection Refused, Timeout)
    console.error(
      `[API Network Error] Connection failed for endpoint: "${endpoint}" | URL: ${url}:`,
      networkErr instanceof Error ? networkErr.message : networkErr
    );
    if (isDev) {
      console.info(`[API Dev Debug] "${endpoint}" -> Fallback data used due to network error`);
    }
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
    const fallback = fallbackPrograms.find(p => p.slug === slug) || null;
    return fetchWithFallback<Program | null>(`/programs/${encodeURIComponent(slug)}/`, fallback);
  },
  getFacilities: async (): Promise<Facility[]> => {
    return fetchWithFallback<Facility[]>('/facilities/', fallbackFacilities);
  },
  getFacilityBySlug: async (slug: string): Promise<Facility | null> => {
    const fallback = fallbackFacilities.find(f => f.slug === slug) || null;
    return fetchWithFallback<Facility | null>(`/facilities/${encodeURIComponent(slug)}/`, fallback);
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
    const fallback = fallbackEvents.find(e => e.slug === slug) || null;
    return fetchWithFallback<Event | null>(`/events/${encodeURIComponent(slug)}/`, fallback);
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
  submitContact: async (data: ContactFormData): Promise<ContactSubmitResponse> => {
    const url = buildApiUrl('/contact/');

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // 1. Success: Backend accepted submission (HTTP 201 Created or 200 OK)
      if (res.ok) {
        try {
          const resData = await res.json();
          return {
            status: 'success',
            message:
              (typeof resData?.message === 'string' && resData.message) ||
              'Thank you for your message. We have received your submission and will get back to you shortly.',
          };
        } catch {
          return {
            status: 'success',
            message: 'Thank you for your message. We have received your submission and will get back to you shortly.',
          };
        }
      }

      // 2. Validation or Server Error (e.g. 400 Bad Request)
      let errorMessage = 'We could not send your message right now. Please try again shortly.';
      try {
        const errorData = await res.json();
        if (errorData && typeof errorData === 'object') {
          if (typeof errorData.message === 'string') {
            errorMessage = errorData.message;
          } else if (typeof errorData.detail === 'string') {
            errorMessage = errorData.detail;
          } else {
            // Handle field-level validation errors like { email: ["Enter a valid email address."] }
            const entries = Object.entries(errorData);
            if (entries.length > 0) {
              const [field, errors] = entries[0];
              const cleanField = field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, ' ');
              if (Array.isArray(errors) && errors.length > 0 && typeof errors[0] === 'string') {
                errorMessage = `${cleanField}: ${errors[0]}`;
              } else if (typeof errors === 'string') {
                errorMessage = `${cleanField}: ${errors}`;
              }
            }
          }
        }
      } catch {
        // Non-JSON response (e.g. gateway error)
      }

      console.error(`[Contact API HTTP Error] Status: ${res.status} | URL: ${url}`);
      return {
        status: 'error',
        message: errorMessage,
      };
    } catch (networkError) {
      // 3. Network or connection failure
      console.error(
        `[Contact API Network Error] Submission request failed | URL: ${url}:`,
        networkError instanceof Error ? networkError.message : networkError
      );
      return {
        status: 'error',
        message: 'We could not send your message right now. Please check your connection or reach out to us by phone or email.',
      };
    }
  },
};
