export enum Page {
  HOME = 'HOME',
  PRODUCTS = 'PRODUCTS',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
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
  aboutContent: string;
  contactInfo: ContactInfo;
}

export interface AppContextType {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}