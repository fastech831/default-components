const fs = require('fs');
const path = require('path');

// Simple build script that copies files and creates a basic library structure
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Create dist directory
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy main components
const componentsDir = path.join(srcDir, 'components');
const distComponentsDir = path.join(distDir, 'components');

if (!fs.existsSync(distComponentsDir)) {
  fs.mkdirSync(distComponentsDir, { recursive: true });
}

// Copy component files
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // Replace import paths to be relative
      content = content.replace(/from ['"]\.\/ui\//g, 'from "./ui/');
      content = content.replace(/from ['"]\.\/components\//g, 'from "./components/');
      
      fs.writeFileSync(destPath, content);
    }
  });
}

// Copy components
copyDirectory(componentsDir, distComponentsDir);

// Copy types
const typesDir = path.join(srcDir, 'types');
const distTypesDir = path.join(distDir, 'types');

if (fs.existsSync(typesDir)) {
  copyDirectory(typesDir, distTypesDir);
}

// Create package.json for the library
const packageJson = {
  "name": "@your-org/default-components",
  "version": "1.0.0",
  "description": "A modern, accessible component library built with Next.js 15, TypeScript, Tailwind CSS, and Geist Font",
  "main": "index.js",
  "module": "index.esm.js",
  "types": "index.d.ts",
  "files": [
    "components",
    "types",
    "index.js",
    "index.esm.js",
    "index.d.ts",
    "styles.css"
  ],
  "keywords": [
    "react",
    "components",
    "ui",
    "typescript",
    "tailwind",
    "nextjs",
    "library",
    "design-system"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/default-components.git"
  },
  "bugs": {
    "url": "https://github.com/your-username/default-components/issues"
  },
  "homepage": "https://github.com/your-username/default-components#readme",
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0",
    "next": ">=15.0.0"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.2",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.2",
    "@radix-ui/react-collapsible": "^1.1.1",
    "@radix-ui/react-context-menu": "^2.2.2",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-hover-card": "^1.1.2",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.2",
    "@radix-ui/react-navigation-menu": "^1.2.1",
    "@radix-ui/react-popover": "^1.1.2",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.1",
    "@radix-ui/react-scroll-area": "^1.2.0",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.1",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.6.0",
    "geist": "^1.3.1",
    "lucide-react": "^0.468.0",
    "react-day-picker": "^8.10.1",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7"
  }
};

fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(packageJson, null, 2));

// Copy styles
const stylesPath = path.join(srcDir, 'styles.css');
const distStylesPath = path.join(distDir, 'styles.css');

if (fs.existsSync(stylesPath)) {
  fs.copyFileSync(stylesPath, distStylesPath);
}

// Create a simple index file
const indexContent = `// Default Components Library
// This is a simplified version for easy integration

export * from './components/Header';
export * from './components/Hero';
export * from './components/FeatureCard';
export * from './components/TestimonialCard';
export * from './components/PricingCard';
export * from './components/TeamMemberCard';
export * from './components/BlogPostCard';
export * from './components/SearchBar';
export * from './components/ContactForm';
export * from './components/NewsletterSignup';
export * from './components/CallToAction';
export * from './components/ImageGallery';
export * from './components/FAQSection';
export * from './components/SocialMediaLinks';
export * from './components/Stats';
export * from './components/ProgressBar';
export * from './components/Timeline';
export * from './components/Footer';
export * from './components/ImageWithFallback';

// Basic UI Components
export * from './components/ui/button';
export * from './components/ui/card';
export * from './components/ui/badge';
export * from './components/ui/separator';
export * from './components/ui/input';
export * from './components/ui/label';
export * from './components/ui/textarea';
export * from './components/ui/select';
export * from './components/ui/checkbox';
export * from './components/ui/radio-group';
export * from './components/ui/switch';
export * from './components/ui/slider';
export * from './components/ui/progress';
export * from './components/ui/avatar';
export * from './components/ui/alert';
export * from './components/ui/alert-dialog';
export * from './components/ui/dialog';
export * from './components/ui/dropdown-menu';
export * from './components/ui/popover';
export * from './components/ui/tooltip';
export * from './components/ui/accordion';
export * from './components/ui/tabs';
export * from './components/ui/calendar';
export * from './components/ui/carousel';
export * from './components/ui/command';
export * from './components/ui/form';
export * from './components/ui/hover-card';
export * from './components/ui/menubar';
export * from './components/ui/navigation-menu';
export * from './components/ui/scroll-area';
export * from './components/ui/sheet';
export * from './components/ui/skeleton';
export * from './components/ui/table';
export * from './components/ui/toggle';
export * from './components/ui/toggle-group';
export * from './components/ui/aspect-ratio';
export * from './components/ui/breadcrumb';
export * from './components/ui/collapsible';
export * from './components/ui/context-menu';
export * from './components/ui/drawer';
export * from './components/ui/input-otp';
export * from './components/ui/pagination';
export * from './components/ui/resizable';
export * from './components/ui/sidebar';

// Types
export * from './types';

// Utilities
export { cn } from './components/ui/utils';
`;

fs.writeFileSync(path.join(distDir, 'index.js'), indexContent);
fs.writeFileSync(path.join(distDir, 'index.esm.js'), indexContent);

// Create a basic TypeScript declaration file
const dtsContent = `declare module '@your-org/default-components' {
  export * from './components/Header';
  export * from './components/Hero';
  export * from './components/FeatureCard';
  export * from './components/TestimonialCard';
  export * from './components/PricingCard';
  export * from './components/TeamMemberCard';
  export * from './components/BlogPostCard';
  export * from './components/SearchBar';
  export * from './components/ContactForm';
  export * from './components/NewsletterSignup';
  export * from './components/CallToAction';
  export * from './components/ImageGallery';
  export * from './components/FAQSection';
  export * from './components/SocialMediaLinks';
  export * from './components/Stats';
  export * from './components/ProgressBar';
  export * from './components/Timeline';
  export * from './components/Footer';
  export * from './components/ImageWithFallback';
  
  export * from './components/ui/button';
  export * from './components/ui/card';
  export * from './components/ui/badge';
  export * from './components/ui/separator';
  export * from './components/ui/input';
  export * from './components/ui/label';
  export * from './components/ui/textarea';
  export * from './components/ui/select';
  export * from './components/ui/checkbox';
  export * from './components/ui/radio-group';
  export * from './components/ui/switch';
  export * from './components/ui/slider';
  export * from './components/ui/progress';
  export * from './components/ui/avatar';
  export * from './components/ui/alert';
  export * from './components/ui/alert-dialog';
  export * from './components/ui/dialog';
  export * from './components/ui/dropdown-menu';
  export * from './components/ui/popover';
  export * from './components/ui/tooltip';
  export * from './components/ui/accordion';
  export * from './components/ui/tabs';
  export * from './components/ui/calendar';
  export * from './components/ui/carousel';
  export * from './components/ui/command';
  export * from './components/ui/form';
  export * from './components/ui/hover-card';
  export * from './components/ui/menubar';
  export * from './components/ui/navigation-menu';
  export * from './components/ui/scroll-area';
  export * from './components/ui/sheet';
  export * from './components/ui/skeleton';
  export * from './components/ui/table';
  export * from './components/ui/toggle';
  export * from './components/ui/toggle-group';
  export * from './components/ui/aspect-ratio';
  export * from './components/ui/breadcrumb';
  export * from './components/ui/collapsible';
  export * from './components/ui/context-menu';
  export * from './components/ui/drawer';
  export * from './components/ui/input-otp';
  export * from './components/ui/pagination';
  export * from './components/ui/resizable';
  export * from './components/ui/sidebar';
  
  export * from './types';
  
  export function cn(...args: any[]): string;
}
`;

fs.writeFileSync(path.join(distDir, 'index.d.ts'), dtsContent);

console.log('✅ Library built successfully!');
console.log('📁 Output directory: dist/');
console.log('📦 Ready for publishing or local use');
