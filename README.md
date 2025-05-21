# Apple India Homepage Clone

This project is a modern, responsive clone of the Apple India homepage, built with React (Next.js) and styled using Tailwind CSS. The goal was to closely replicate the look, feel, and user experience of Apple’s official website, with a focus on pixel-perfect design, smooth interactions, and mobile responsiveness.

## Features

- **Responsive Navigation:**  
  The navigation bar adapts for both desktop and mobile. On mobile, a hamburger menu reveals a full-screen overlay with navigation links, while desktop users see a horizontal menu with icons for search and cart.

- **Hero Sections:**  
  Prominent hero banners highlight flagship Apple products such as iPhone 16 Pro, iPhone 16, and Apple Watch Series 10. Each section features high-resolution images, bold typography, and call-to-action buttons, mirroring Apple’s branding.

- **Product Cards:**  
  The homepage includes multiple product cards for devices like MacBook Air, iPad Pro, AirPods 4, and more. Cards are styled for both desktop (horizontal scroll) and mobile (vertical stack) layouts, ensuring a seamless experience across devices.

- **Horizontal Scroll (Desktop):**  
  On desktop, product cards are displayed in a horizontally scrollable container. Custom JavaScript logic enables smooth horizontal scrolling with the mouse wheel, while preventing unwanted vertical scroll at the edges. This mimics Apple’s product carousel and enhances user interaction.

- **Image Carousel:**  
  A promotional image carousel showcases Apple TV+ content, with smooth transitions and navigation controls. Each slide includes a call-to-action and descriptive text, similar to Apple’s marketing banners.

- **Footer:**  
  The footer replicates Apple’s detailed site footer, including links to shopping, account management, Apple Store services, business solutions, and company values. Legal disclaimers and contact information are also provided for authenticity.

- **Styling and Theming:**  
  The project uses Tailwind CSS for rapid, utility-first styling. Gradients, background clips, and subtle animations are used for visual effects, while maintaining accessibility and readability.

## Technical Stack

- **React (Next.js):** For component-based UI and routing.
- **Tailwind CSS:** For utility-first, responsive styling.
- **Custom JavaScript:** For horizontal scroll logic and carousel behavior.
- **Flowbite (optional):** For carousel and UI components.

## How It Works

- The main page (`page.jsx`) manages navigation, hero sections, product cards, and the carousel.
- The horizontal scroll section uses a `ref` and a custom wheel event handler to provide smooth, Apple-like scrolling for product cards.
- The mobile menu is toggled using React state, ensuring a clean and intuitive user experience on all devices.
- All images and icons are optimized for fast loading and high visual fidelity.

## Learning Outcomes

This project demonstrates proficiency in modern frontend technologies, responsive design, and UI/UX best practices. It showcases the ability to translate a complex, real-world design into a functional web application, with attention to detail, accessibility, and performance.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## License

This project is for educational and portfolio purposes only. All product names, logos, and brands are property of their respective owners.

---
