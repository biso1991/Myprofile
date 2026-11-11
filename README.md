# 🚀 Bilel Nasri - Professional Portfolio

A modern, responsive portfolio website showcasing my work as a **Data Engineer** and **AI Engineer**.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Project Filtering** - Interactive project gallery with category filtering
- **Professional Sections**:
  - Hero section with social links
  - About me with achievements and stats
  - Technical skills organized by category
  - Featured projects with descriptions and tech stacks
  - Professional experience timeline
  - Contact information

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Professional icons

## 📂 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🚀 How to Use

### Option 1: Local Development

1. Clone or download the portfolio folder
2. Open `index.html` in your web browser
3. No build process or dependencies required!

```bash
cd /home/bilel/Desktop/portfolio
firefox index.html  # or chrome, brave, etc.
```

### Option 2: Deploy to GitHub Pages

1. Create a new GitHub repository (e.g., `bilel-nasri-portfolio`)
2. Push the portfolio files:

```bash
cd /home/bilel/Desktop/portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/biso1991/bilel-nasri-portfolio.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/` (root)
   - Save

Your portfolio will be live at: `https://biso1991.github.io/bilel-nasri-portfolio/`

### Option 3: Deploy to Netlify

1. Create account on [Netlify](https://www.netlify.com/)
2. Drag and drop the `portfolio` folder
3. Get instant deployment with custom domain option

### Option 4: Deploy to Vercel

```bash
cd /home/bilel/Desktop/portfolio
npm install -g vercel
vercel
```

## 📝 Customization Guide

### Update Projects

Edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Name",
        category: "data-engineering", // or "ai-ml", "web"
        description: "Project description",
        technologies: ["Tech1", "Tech2"],
        github: "https://github.com/yourusername/repo",
        featured: true // or false
    }
];
```

### Update Personal Information

Edit `index.html`:
- Hero section - Update name, title, description
- About section - Update bio and achievements
- Skills section - Update technical skills
- Experience section - Update work history
- Contact section - Update contact details

### Update Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;     /* Main brand color */
    --secondary-color: #1e40af;   /* Secondary color */
    --accent-color: #3b82f6;      /* Accent color */
}
```

## 🎨 Design Features

- **Gradient Backgrounds** - Modern gradient effects
- **Smooth Animations** - Fade-in and slide-up animations
- **Hover Effects** - Interactive elements with hover states
- **Shadow Effects** - Layered shadows for depth
- **Responsive Grid** - Auto-adjusting layouts
- **Navigation Highlighting** - Active section tracking
- **Mobile Menu** - Hamburger menu for mobile devices

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔗 Social Links

Update your social media links in `index.html`:

```html
<a href="https://github.com/biso1991" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<a href="mailto:binasri1991@gmail.com">Email</a>
```

## 📊 Portfolio Sections

### 1. **Hero Section**
- Name and title
- Brief introduction
- Call-to-action buttons
- Social media links

### 2. **About Section**
- Professional summary
- Key achievements
- Career statistics

### 3. **Skills Section**
- Data Engineering
- Distributed Systems
- AI Engineering
- Cloud & DevOps
- Frameworks & Tools

### 4. **Projects Section**
- 15 featured projects
- Category filtering (All, Data Engineering, AI/ML, Web)
- Tech stack badges
- GitHub links

### 5. **Experience Section**
- Timeline layout
- Company details
- Role descriptions
- Technologies used

### 6. **Contact Section**
- Email
- Phone
- Location
- GitHub
- LinkedIn

## 🚀 Performance Optimization

- ✅ Minimal external dependencies (only Font Awesome for icons)
- ✅ CSS animations instead of JavaScript for better performance
- ✅ Lazy loading for animations (Intersection Observer)
- ✅ Optimized CSS with CSS Grid and Flexbox
- ✅ Semantic HTML for better SEO

## 📄 License

This portfolio template is free to use and customize for your own portfolio.

## 📧 Contact

**Bilel Nasri**
- Email: binasri1991@gmail.com
- Phone: +216 96 321 618
- Location: Ghazala, Ariana, Tunisia
- GitHub: [@biso1991](https://github.com/biso1991)
- LinkedIn: [bilel-n](https://www.linkedin.com/in/bilel-n-2b9ba8215/)

---

**Built with ❤️ by Bilel Nasri**
