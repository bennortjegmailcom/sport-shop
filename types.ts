export enum Page {
  HOME = 'HOME',
  PRODUCTS = 'PRODUCTS',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  ADMIN = 'ADMIN',
}

export interface Special {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProductCategory {
  name: string;
  imageUrl: string;
  alt: string;
}

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
    // FIX: Add optional 'openingHours' to support data used in MapPage.tsx
    openingHours?: string[];
}

export interface AppState {
  specials: Special[];
  aboutContent: string;
  contactInfo: ContactInfo;
}

export interface AppContextType {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}