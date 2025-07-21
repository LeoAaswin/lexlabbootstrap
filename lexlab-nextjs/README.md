# LexLab - Next.js Law Firm Website

A modern, responsive law firm website built with Next.js, TypeScript, and Tailwind CSS. This project is a conversion of the original HTML template to a modern React-based application.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** design
- 🎭 **Framer Motion** for animations
- 🖼️ **Next.js Image** optimization
- 📊 **TypeScript** for type safety
- 🎯 **SEO Optimized**
- 🚀 **Performance Optimized**

## Design Features

- Modern, professional law firm design
- Smooth animations and transitions
- Interactive hover effects
- Mobile-first responsive design
- Accessibility compliant
- Fast loading times

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lexlab-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lexlab-nextjs/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   └── ui/             # UI components
│   └── lib/                # Utility functions
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## Key Components

### Layout Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Contact information and social links

### UI Components
- **Button**: Reusable button component with variants
- **Hero**: Landing page hero section

### Sections
- **Hero**: Main landing section with CTA
- **Services**: Services overview
- **About**: Company information
- **Contact**: Contact form and information

## Styling

The project uses a combination of:
- **Tailwind CSS** for utility-first styling
- **CSS Custom Properties** for theme colors
- **Custom CSS** for complex animations and effects

### Color Scheme
- Primary: `#E8BF96` (Gold)
- Background: `#1C1D20` (Dark)
- Text: `#262629` (Dark Gray)
- Secondary: `#FAF6F3` (Light)

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1200px+

## Performance Optimizations

- Next.js Image optimization
- Code splitting with dynamic imports
- Optimized fonts loading
- Minimal bundle size
- Fast page transitions

## SEO Features

- Meta tags optimization
- Structured data
- Semantic HTML
- Alt text for images
- Clean URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)
```bash
npm run build
```

Deploy to Vercel with zero configuration.

### Other Platforms
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@lexlab.com or create an issue in the repository.