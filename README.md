# cs-teaching-portfolio-prabin
CS teaching portfolio for Prabin Kumar Chaudhary showcasing online teaching, mentoring, workshops, and student placements in Nepal, with a clean gallery and contact form built using HTML, CSS, and JavaScript.

## Features

- One-page layout with clear sections: About, Online Teaching, Mentoring, Workshops, Placements, Gallery, Achievements, Contact.  
- Accessible image gallery: Auto-rotate, Pause/Resume, keyboard arrows, and pause on hover/focus.  
- Contact form with native HTML5 validation for required fields and email format.  
- Responsive dark theme with a single accent color and clean typography.  
- Lightweight stack (HTML/CSS/JS only) for fast loads and zero build steps.  
- Easy customization: Change accent color, text content, and gallery images in minutes.  
- Mobile-friendly header and navigation with sensible spacing and focus states.

## Technology Stack

### Core
- HTML5  
- CSS3 (flexbox, grid, custom properties/variables)  
- Vanilla JavaScript (form validation, slider logic)

### Hosting
- Netlify (live): https://cs-teaching-portfolio-prabin.netlify.app/  

## Installation

### Run locally
1) Download or clone this repository.  
2) Open `index.html` directly in your browser, or use a local server (e.g., VS Code Live Server).  
3) Ensure the images `teaching.jpg` and `computersession.jpg` are at the project root (or update paths in `index.html`).

### Customize content
- Accent color: edit `--accent` in `styles.css`.  
- Name highlight: the `.accent-all` class controls the blue color for the full name.  
- Sections (About, Mentoring, Workshops, Placements, Contact): edit text inside `index.html`.  
- Gallery: replace images or duplicate a `<figure class="frame">` inside the `#gallery` slider track and add a new dot.

### Build step
- None required. This is a static site (HTML/CSS/JS). No frameworks or bundlers needed.

## Project Structure

```
cs-teaching-portfolio-prabin/
├── index.html           # Main page with all sections (About, Teaching, Mentoring, Workshops, Placements, Gallery, Achievements, Contact)
├── styles.css           # Theme, layout, typography, responsive rules, slider styles
├── script.js            # Contact form validation + gallery/slider logic
├── teaching.jpg         # Classroom image (root for simple paths)
├── computersession.jpg  # Computer lab image (root)
└── README.md            # Project documentation
```
