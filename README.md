# JOLOJ Water Systems - Business Website

![JOLOJ Water Systems Logo](/public/images/logo.png)

A modern, responsive business website for JOLOJ Water Systems, a leading water treatment solution provider in Bangladesh.

## 🌊 Overview

This website showcases JOLOJ Water Systems' services, projects, and expertise in water and wastewater treatment. Built with Next.js and Tailwind CSS, it features a clean, professional design with smooth animations and responsive layout.

## ✨ Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional interface with water-themed design
- **Animated Sections**: Smooth reveal animations as users scroll
- **Interactive Elements**: Hover effects, scrollable service cards, and more
- **Optimized Performance**: Fast loading and rendering with Next.js
- **SEO Friendly**: Proper metadata and semantic HTML structure

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons

## 📋 Sections

- **Hero**: Engaging introduction with call-to-action buttons
- **About**: Company information, vision, and mission
- **Services**: Categorized services with horizontally scrollable cards
  - Drinking Water Purifiers
  - Water Treatment Plants (WTP)
  - Waste Water Treatment Plants
  - Manufacturing Consultancy
  - Chemicals
- **Why Choose Us**: Key advantages of working with JOLOJ
- **Projects**: Showcase of completed water treatment projects
- **Clients**: Display of client logos and testimonials
- **Contact**: Contact form and company information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.17.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/joloj-water-systems.git
   cd joloj-water-systems
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

To start the production server:

\`\`\`bash
npm run start
# or
yarn start
\`\`\`

## 🎨 Customization

### Replacing Images

1. Place your images in the `public/images/` directory
2. Update the image paths in the components:
   - Logo: `components/navbar.tsx`
   - Hero image: `components/hero-section.tsx`
   - Service images: `components/services-section.tsx`
   - Project images: `components/projects-section.tsx`
   - Client logos: `components/clients-section.tsx`

### Updating Content

Most content can be updated in the respective component files:
- Company information: `components/about-section.tsx`
- Services: `components/services-section.tsx`
- Projects: `components/projects-section.tsx`
- Contact information: `components/contact-section.tsx` and `components/footer.tsx`

### Changing Colors

The color scheme can be modified in the `tailwind.config.ts` file and `app/globals.css`.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

JOLOJ Water Systems
- Email: jolojwatersystems@gmail.com
- Phone: 01759-142647
- Address: House: 01 Level: 02 Shastitala, Jashore (Opposite of Fire Brigade Office)
- Website: www.jolojwatersystems.com

---

Developed with ❤️ for JOLOJ Water Systems
