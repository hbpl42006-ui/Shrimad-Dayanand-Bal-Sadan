export interface SiteSettings {
  id?: number;
  organization_name: string;
  short_name: string;
  tagline: string;
  logo: string;
  favicon: string;
  address: string;
  primary_phone: string;
  secondary_phone: string;
  additional_phone: string;
  email: string;
  website_url: string;
  youtube_url: string;
  instagram_url: string;
  facebook_url: string;
  map_url: string;
  footer_description: string;
  donation_cta_text: string;
  donation_cta_url: string;
  founded_year: number;
}

export interface HomeHeroData {
  id?: number;
  badge: string;
  heading: string;
  subheading: string;
  hero_image: string;
  primary_cta_text: string;
  primary_cta_url: string;
  secondary_cta_text: string;
  secondary_cta_url: string;
  footer_note: string;
}

export interface ImpactStatistic {
  id?: number;
  label: string;
  value: string;
  suffix: string;
  description: string;
  icon: string;
  order: number;
  active: boolean;
}

export interface AboutSectionData {
  id?: number;
  heading: string;
  subheading: string;
  content: string;
  image: string;
  quote: string;
  cta_text: string;
  cta_url: string;
}

export interface HistoryEvent {
  id?: number;
  year: string;
  title: string;
  description: string;
  image: string;
  display_order: number;
  is_featured: boolean;
}

export interface Program {
  id?: number;
  title: string;
  slug: string;
  category: 'education' | 'skill' | 'vedic' | 'wellness' | 'sports';
  icon: string;
  short_description: string;
  detailed_description: string;
  image: string;
  active: boolean;
  display_order: number;
}

export interface Facility {
  id?: number;
  title: string;
  slug: string;
  category: 'education' | 'residential' | 'wellness' | 'culture' | 'sports' | 'sustainability';
  description: string;
  features: string[];
  image: string;
  order: number;
  active: boolean;
}

export interface DailyRoutine {
  id?: number;
  time: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface GalleryImage {
  id?: number;
  title: string;
  image: string;
  uploaded_image?: string | null;
  caption: string;
  category: 'campus' | 'education' | 'vedic' | 'sports' | 'skills' | 'events' | 'brochure';
  category_display?: string;
  order: number;
  is_featured: boolean;
}

export interface Event {
  id?: number;
  title: string;
  slug: string;
  date: string;
  time_str: string;
  location: string;
  summary: string;
  content: string;
  image: string;
  is_upcoming: boolean;
  featured: boolean;
}

export interface DonationInformation {
  id?: number;
  account_holder_name: string;
  bank_name: string;
  branch: string;
  account_number: string;
  ifsc: string;
  upi_id: string;
  phone: string;
  qr_code: string;
  instructions: string;
  in_kind_items: string;
  tax_exemption_note: string;
  active: boolean;
}

export interface DocumentCategory {
  id?: number;
  name: string;
  slug: string;
  order: number;
  documents?: DocumentItem[];
}

export interface DocumentItem {
  id?: number;
  title: string;
  category_name?: string;
  year: string;
  description: string;
  file_url: string;
  published_at?: string;
  is_public: boolean;
}

export interface HomeBundle {
  hero: HomeHeroData;
  stats: ImpactStatistic[];
  about: AboutSectionData;
  history: HistoryEvent[];
  programs: Program[];
  facilities: Facility[];
  routines: DailyRoutine[];
  gallery: GalleryImage[];
  events: Event[];
  donation: DonationInformation;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  website_check?: string;
}

export interface ContactSubmitResponse {
  status: 'success' | 'error';
  message: string;
}

