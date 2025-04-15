# Image Replacement Guide for JOLOJ Water Systems Website

This guide will help you replace the placeholder images with real images of your water treatment systems, facilities, and projects.

## Current Placeholder System

The website currently uses the built-in Next.js placeholder system with descriptive text. For example:

\`\`\`jsx
<Image
  src="/placeholder.svg?height=400&width=600&text=Water+Treatment+Facility"
  alt="JOLOJ Water Treatment Plant"
  fill
  className="object-cover"
  priority
/>
\`\`\`

## Steps to Replace Images

1. **Prepare Your Images**:
   - Collect high-quality photos of your facilities, water treatment systems, projects, etc.
   - Resize images to appropriate dimensions (see recommendations below)
   - Optimize images for web (compress without losing quality)

2. **Create Image Folders**:
   - Create the following folders in your `public` directory:
     \`\`\`
     /public/images/
       /hero/
       /about/
       /services/
       /projects/
       /clients/
     \`\`\`

3. **Add Your Images**:
   - Place your images in the appropriate folders
   - Use descriptive filenames (e.g., `ro-plant.jpg`, `industrial-etp.jpg`)

4. **Update Image Paths**:
   - In each component file, replace the placeholder paths with your actual image paths
   - Example: Change `/placeholder.svg?height=400&width=600&text=Water+Treatment+Facility` to `/images/hero/facility.jpg`

## Recommended Image Dimensions

- **Hero Section**: 1200×800px
- **About Section**: 800×600px
- **Service Cards**: 600×400px
- **Project Images**: 600×400px
- **Client Logos**: 300×200px

## Image Optimization Tips

1. **File Format**:
   - Use JPEG for photographs (.jpg)
   - Use PNG for logos or images with transparency (.png)
   - Use SVG for icons and simple graphics (.svg)

2. **File Size**:
   - Keep image file sizes under 200KB when possible
   - Use tools like TinyPNG or ImageOptim to compress images

3. **Alt Text**:
   - Always provide descriptive alt text for accessibility and SEO
   - Example: alt="JOLOJ Industrial Reverse Osmosis Plant in Dhaka"

## Example Replacement

**Before**:
\`\`\`jsx
<Image
  src="/placeholder.svg?height=400&width=600&text=Water+Treatment+Facility"
  alt="JOLOJ Water Treatment Plant"
  fill
  className="object-cover"
  priority
/>
\`\`\`

**After**:
\`\`\`jsx
<Image
  src="/images/hero/water-treatment-facility.jpg"
  alt="JOLOJ Water Treatment Plant in Dhaka"
  fill
  className="object-cover"
  priority
/>
\`\`\`

By following this guide, you'll be able to replace all placeholder images with actual photos of your water treatment systems and facilities, making your website more professional and engaging.
