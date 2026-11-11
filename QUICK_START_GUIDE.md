# 🚀 Quick Start Guide - Portfolio & Project Renaming

## 👋 Welcome!

Your professional portfolio is ready! Here's everything you need to know in 5 minutes.

---

## 📂 What You Got

### ✅ Professional Portfolio Website
Location: `/home/bilel/Desktop/portfolio/`

**Features:**
- Modern, responsive design ✨
- 15 projects with filtering 🎨
- Your experience timeline 📅
- Skills & achievements 🏆
- Contact information 📧

---

## 🎯 Quick Actions

### 1️⃣ Preview Your Portfolio (Right Now!)

```bash
cd /home/bilel/Desktop/portfolio
firefox index.html
```

**What to check:**
- ✅ All sections load correctly
- ✅ Projects display properly
- ✅ Filtering works (All, Data Engineering, AI/ML, Web)
- ✅ Responsive design (resize browser window)
- ✅ Links work (GitHub, LinkedIn, Email)

---

### 2️⃣ Deploy to GitHub Pages (5 minutes)

#### Option A: Automated (Easiest)

```bash
cd /home/bilel/Desktop/portfolio
./deploy.sh
```

**It will:**
1. Create GitHub repo `bilel-nasri-portfolio`
2. Push your code
3. Enable GitHub Pages
4. Give you live URL: `https://biso1991.github.io/bilel-nasri-portfolio/`

#### Option B: Manual

```bash
cd /home/bilel/Desktop/portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/biso1991/bilel-nasri-portfolio.git
git push -u origin main
```

Then go to: https://github.com/biso1991/bilel-nasri-portfolio/settings/pages
- Source: `main` branch
- Folder: `/` (root)
- Click Save

---

### 3️⃣ Rename GitHub Projects (When Token is Ready)

**You need a new GitHub token first:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: ☑️ `repo` and ☑️ `delete_repo`
4. Generate and copy token

**Then authenticate:**
```bash
echo "YOUR_TOKEN_HERE" | gh auth login --with-token
```

**Run rename commands:**
```bash
# 1. NLP Project
gh repo rename nlp-comprehensive-techniques-collection \
  --repo biso1991/nlp-topic-modeling-text-analysis --yes

# 2. Web Scraping
gh repo rename web-scraping-methods-comparison-python \
  --repo biso1991/multi-method-web-scraping-examples --yes

# 3. Job Scraper
gh repo rename keejob-listings-scraper-notebook \
  --repo biso1991/job-scraper-python-notebook --yes

# 4. CNN Classifier
gh repo rename car-vs-bike-transfer-learning-classifier \
  --repo biso1991/cnn-transfer-learning-image-classifier --yes
```

---

## 📊 Project Renaming Summary

### Why Rename?

Your projects were labeled quickly during upload. After analyzing the actual code, 4 projects need better names:

| Old Name | New Name | Why? |
|----------|----------|------|
| nlp-topic-modeling... | nlp-comprehensive-techniques-collection | Has 13 techniques, not just topic modeling |
| multi-method-web-scraping... | web-scraping-methods-comparison-python | It's a comparison, not just examples |
| job-scraper-python... | keejob-listings-scraper-notebook | Specific to keejob.com |
| cnn-transfer-learning... | car-vs-bike-transfer-learning-classifier | Should specify what it classifies |

### ✅ These 6 are perfect as-is:
- twitter-sentiment-clustering-kmeans
- nlp-learning-modules-python
- kafka-tensorflow-fraud-detection
- spark-streaming-ecommerce-etl
- django-kafka-analytics-dashboard
- django-vuejs-dealership-system

---

## 📝 Customize Your Portfolio

### Update Projects

Edit `script.js` line 18 onwards:

```javascript
const projects = [
    {
        title: "Your Project",
        category: "data-engineering", // or "ai-ml", "web"
        description: "Description",
        technologies: ["Tech1", "Tech2"],
        github: "https://github.com/yourrepo",
        featured: true
    }
];
```

### Update Colors

Edit `styles.css` line 2:

```css
:root {
    --primary-color: #2563eb;     /* Change this */
    --secondary-color: #1e40af;   /* And this */
}
```

### Update Personal Info

Edit `index.html`:
- Search for your name, email, phone
- Update links (GitHub, LinkedIn)
- Modify descriptions

---

## 🎯 After Deployment Checklist

### Share Your Portfolio:

- [ ] **LinkedIn Profile**
  - Add portfolio URL to profile header
  - Add to "Featured" section
  - Create post announcing your portfolio

- [ ] **Update CV/Resume**
  - Add portfolio link under contact info
  - Regenerate PDF with new link

- [ ] **GitHub Profile**
  - Pin portfolio repository
  - Update bio with portfolio link

- [ ] **Email Signature**
  - Add portfolio link

---

## 🆘 Troubleshooting

### Portfolio doesn't display correctly
```bash
# Check all files are present
ls -lah /home/bilel/Desktop/portfolio/
# Should see: index.html, styles.css, script.js
```

### GitHub Pages not working
- Wait 2-3 minutes after enabling
- Check https://github.com/biso1991/REPO-NAME/deployments
- Verify branch is `main` and folder is `/`

### Rename failed
```bash
# Check authentication
gh auth status

# Re-authenticate if needed
gh auth login
```

---

## 📞 Need Help?

**Files to check:**
- `README.md` - Full documentation
- `PROJECT_RELABELING_SUMMARY.md` - Rename details
- `PORTFOLIO_AND_RELABELING_COMPLETE.md` - Complete summary

**Your Info:**
- Email: binasri1991@gmail.com
- GitHub: https://github.com/biso1991
- LinkedIn: https://www.linkedin.com/in/bilel-n-2b9ba8215/

---

## 🎊 You're Ready!

### Three Simple Commands:

```bash
# 1. Preview locally
cd /home/bilel/Desktop/portfolio && firefox index.html

# 2. Deploy to GitHub Pages
cd /home/bilel/Desktop/portfolio && ./deploy.sh

# 3. Share on LinkedIn
# Copy your live URL and post about it!
```

---

**🚀 Good luck with your portfolio! 🎉**

**Built by:** Kiro AI Agent  
**For:** Bilel Nasri  
**Date:** November 10, 2026  
**Stack:** HTML5, CSS3, JavaScript
