import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface NewsItem {
    id: string;
    title: string;
    titleAr: string;
    titleFr?: string;
    slug: string;
    date: string;
    category: string;
    categoryAr: string;
    categoryFr?: string;
    excerpt: string;
    excerptAr: string;
    excerptFr?: string;
    content: string;
    contentAr: string;
    contentFr: string;
    coverImage: string;
    images?: string[];
    publishedAt: string
}

export interface EventItem {
    id: string;
    title?: string;
    titleAr: string;
    titleFr?: string;
    slug: string;
    date?: string;
    startDate: string;
    endDate: string;
    time?: string;
    location?: string;
    locationAr?: string;
    locationFr?: string;
    category?: string;
    categoryAr?: string;
    categoryFr?: string;
    content?: string;
    contentAr: string;
    contentFr?: string;
    coverImage: string;
    images?: string[];
}

interface Image {
    path: string;
    alt: string;
}
export interface GalleryAlbum {
    id: string;
    title: string;
    description?: string;
    date: string;
    coverImage: string;
    images: Image[];
}