export interface User {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
  requestsLeft: number;
  subscription: 'free' | 'pro' | 'enterprise';
}

export interface ScrapingResult {
  keyword: string;
  asin: string;
  sponsoredPlacement: string | number;
  timestamp: string;
}

export interface UploadData {
  asins: string[];
  keywords: string[];
}