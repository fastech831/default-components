import { ComponentProps } from 'react';

// Common component prop types
export type ComponentProps<T = any> = ComponentProps<T>;

// Feature Card Props
export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
}

// Testimonial Card Props
export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  className?: string;
}

// Pricing Card Props
export interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  className?: string;
  onSelect?: () => void;
}

// Team Member Card Props
export interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  className?: string;
}

// Blog Post Card Props
export interface BlogPostCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  className?: string;
  onClick?: () => void;
}

// Search Bar Props
export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

// Stats Props
export interface StatsProps {
  title?: string;
  subtitle?: string;
  stats: Array<{
    id: string;
    value: string;
    label: string;
    description: string;
  }>;
  className?: string;
}

// Progress Bar Props
export interface ProgressBarProps {
  title?: string;
  items: Array<{
    id: string;
    label: string;
    value: number;
    showPercentage?: boolean;
  }>;
  variant?: 'default' | 'skills';
  className?: string;
}

// Timeline Props
export interface TimelineProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    date: string;
    status: 'completed' | 'current' | 'upcoming';
    badge?: string;
  }>;
  className?: string;
}

// FAQ Section Props
export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  className?: string;
}

// Social Media Links Props
export interface SocialMediaLinksProps {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Newsletter Signup Props
export interface NewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => void;
  className?: string;
}

// Contact Form Props
export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

// Image Gallery Props
export interface ImageGalleryProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: number;
  className?: string;
}

// Call to Action Props
export interface CallToActionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  showRating?: boolean;
  ratingText?: string;
  className?: string;
}

// Header Props
export interface HeaderProps {
  logo?: string;
  logoText?: string;
  navigation?: Array<{
    label: string;
    href: string;
  }>;
  showAuthButtons?: boolean;
  className?: string;
}

// Hero Props
export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  backgroundImage?: string;
  className?: string;
}

// Footer Props
export interface FooterProps {
  logo?: string;
  logoText?: string;
  description?: string;
  links?: Array<{
    title: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  }>;
  socialLinks?: Array<{
    platform: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  copyright?: string;
  className?: string;
}
