Project Overview: The Great Theater
The Great Theater is a high-quality landing page for a famous theater. It combines a classic style with modern web development. I built this project to show how to handle complex layouts, positioning, and fully responsive design in React.

Purpose
Cultural Experience: To create a website that feels like a theater through elegant fonts and a clean user interface.

Frontend Skills: To show my ability to build "Pixel-Perfect" designs from Figma, including vertical text and custom navigation.

Features
Core Functionality:

Dual Navigation: A standard header plus a fixed left sidebar (AsideBar) with vertical text for social media links and contacts.

Responsive Slider: A smooth gallery built with Swiper.js. It changes from 1 slide on mobile to a multi-card layout on desktop.

Mobile Burger Menu: A custom-made mobile menu built with React state. It’s lightweight and fast because I didn't use heavy UI libraries.

Adaptive Grid: A flexible max-width container that makes sure the content looks good on all screens, from large monitors to small phones.

Animations & UI:

Scroll Animations: I used data-animate attributes to make elements fade in as the user scrolls down the page.

Interactive Hover Effects: Links and buttons change color (to a gold accent) and size slightly when you hover over them.

Technical Implementation
React Components: I used a modular structure (Header, Hero, Productions, BurgerMenu) to keep the code clean and easy to update.

CSS Modules: Each component has its own styles. This prevents bugs and keeps the CSS organized.

Dynamic Classes: I used the clsx library to manage classes easily, like when opening or closing the mobile menu.

Performance: I used @font-face with font-display: swap for faster font loading and optimized all images for better speed.

Swiper.js Customization: I configured the slider with custom breakpoints and autoplay to match the project's needs.

Tech Stack:
Core: React

Styling: CSS Modules, Flexbox, Grid

Slider: Swiper.js

Icons: React Icons

Utilities: clsx
