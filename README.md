# Default Components Library

A modern, accessible component library built with Next.js 15, TypeScript, Tailwind CSS, and Geist Font. Ready-to-use components for React applications.

## 🚀 Quick Start

### Installation

```bash
npm install @your-org/default-components
# or
yarn add @your-org/default-components
```

### Basic Usage

```tsx
import { Header, Hero, FeatureCard } from '@your-org/default-components';
import '@your-org/default-components/dist/styles.css';

export default function MyPage() {
  return (
    <div>
      <Header logoText="My App" />
      <Hero 
        title="Welcome to Our Platform"
        subtitle="Build amazing web experiences"
      />
      <FeatureCard
        icon={Zap}
        title="Fast Performance"
        description="Optimized components for lightning-fast loading times."
      />
    </div>
  );
}
```

## 📦 Available Components

### Layout Components
- **Header** - Responsive navigation with mobile menu
- **Hero** - Landing section with call-to-action buttons
- **Footer** - Site footer with links and information

### Content Components
- **FeatureCard** - Highlight product benefits with icons
- **TestimonialCard** - Customer feedback and reviews
- **PricingCard** - Subscription plans and pricing
- **TeamMemberCard** - Team member profiles
- **BlogPostCard** - Article previews and excerpts
- **ImageGallery** - Photo showcase with lightbox
- **Stats** - Display metrics and key numbers
- **ProgressBar** - Skills and progress indicators
- **Timeline** - Project milestones and phases
- **FAQSection** - Frequently asked questions

### Interactive Components
- **SearchBar** - Interactive search functionality
- **ContactForm** - Contact form with validation
- **NewsletterSignup** - Email subscription form
- **CallToAction** - Conversion-focused sections
- **SocialMediaLinks** - Social platform connections

### UI Components
- **Button** - Various button styles and variants
- **Card** - Content containers with header, content, footer
- **Badge** - Status indicators and labels
- **Input** - Form input fields
- **Select** - Dropdown selection components
- **Checkbox** - Checkbox inputs
- **RadioGroup** - Radio button groups
- **Switch** - Toggle switches
- **Slider** - Range sliders
- **Progress** - Progress indicators
- **Avatar** - User profile images
- **Alert** - Notification messages
- **Dialog** - Modal dialogs
- **DropdownMenu** - Context menus
- **Popover** - Floating content
- **Tooltip** - Hover information
- **Accordion** - Collapsible content
- **Tabs** - Tabbed interfaces
- **Calendar** - Date picker
- **Carousel** - Image/content carousels
- **Table** - Data tables
- **Separator** - Visual dividers
- **Skeleton** - Loading placeholders

## 🎨 Styling & Theming

### Import Styles

```css
/* In your global CSS file */
@import '@your-org/default-components/dist/styles.css';
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@your-org/default-components/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
```

### Dark Mode Support

Components automatically support dark mode when you add the `dark` class to your HTML element:

```tsx
// In your layout or root component
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
```

## 📚 Component Examples

### Header Component

```tsx
import { Header } from '@your-org/default-components';

<Header 
  logoText="My App"
  navigation={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]}
  showAuthButtons={true}
/>
```

### Feature Cards

```tsx
import { FeatureCard } from '@your-org/default-components';
import { Zap, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized components for lightning-fast loading times."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Built with security best practices and regular assessments."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that works perfectly on all devices."
  }
];

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <FeatureCard key={index} {...feature} />
  ))}
</div>
```

### UI Components

```tsx
import { 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  Badge,
  Input,
  Label
} from '@your-org/default-components';

<div className="space-y-6">
  {/* Buttons */}
  <div className="flex gap-4">
    <Button variant="default">Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
  </div>

  {/* Cards */}
  <Card className="w-96">
    <CardHeader>
      <CardTitle>Example Card</CardTitle>
    </CardHeader>
    <CardContent>
      <p>This is a sample card with some content.</p>
    </CardContent>
  </Card>

  {/* Badges */}
  <div className="flex gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="destructive">Destructive</Badge>
  </div>

  {/* Form Elements */}
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter your email" />
  </div>
</div>
```

## 🔧 Customization

### Custom Styling

You can customize components using Tailwind CSS classes:

```tsx
import { Button } from '@your-org/default-components';

<Button 
  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
>
  Custom Styled Button
</Button>
```

### TypeScript Support

All components come with full TypeScript support:

```tsx
import { FeatureCardProps } from '@your-org/default-components';
import { Zap } from 'lucide-react';

const feature: FeatureCardProps = {
  icon: Zap,
  title: "Fast Performance",
  description: "Optimized for speed and efficiency",
  className: "custom-class"
};

export default function TypedComponent() {
  return <FeatureCard {...feature} />;
}
```

## 📁 Project Structure

```
default-components/
├── dist/                    # Built library files
│   ├── components/          # Component files
│   ├── types/              # TypeScript definitions
│   ├── index.js            # CommonJS entry point
│   ├── index.esm.js        # ES Module entry point
│   ├── index.d.ts          # TypeScript declarations
│   ├── styles.css          # Component styles
│   └── package.json        # Library package.json
├── src/                    # Source files
│   ├── components/         # Main components
│   ├── types/              # Type definitions
│   └── index.ts            # Main export file
├── build-lib.js            # Build script
├── package.json            # Development package.json
└── README.md               # This file
```

## 🚀 Publishing

### Build the Library

```bash
npm run build:lib
```

### Publish to NPM

```bash
# Update version in package.json
npm version patch

# Publish
npm publish
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Geist Font](https://vercel.com/font) for modern typography

---

**Built with ❤️ using Next.js 15**