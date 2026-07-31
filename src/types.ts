export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Studio' | 'Family' | 'Product' | 'Newborn' | 'Weddings' | 'Events';
  imageUrl: string;
  location?: string;
  year?: string;
  aspectRatio?: string;
  description?: string;
}

export interface StudioServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'UserCheck' | 'Users' | 'Building2' | 'Package' | 'Baby' | 'Sparkles';
  description: string;
  fullDetails?: string;
  startingPrice: string;
  features: string[];
}

export interface OnLocationServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Heart' | 'Camera' | 'Calendar';
  description: string;
  startingPrice: string;
  highlights: string[];
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: string[];
}
