// ==================== NAVIGATION ==================== 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== PROJECTS DATA ====================
const projects = [
    {
        id: 1,
        title: "TikTok Influencer Intelligence Platform",
        category: "data-engineering",
        description: "Distributed data acquisition platform with Kafka-based orchestration, distributed workers, and comprehensive observability for influencer marketing intelligence.",
        technologies: ["FastAPI", "Kafka", "Redis", "Docker", "Playwright", "PostgreSQL", "Prometheus", "Grafana"],
        github: "https://github.com/biso1991/tiktok-influencer-intel",
        featured: true
    },
    {
        id: 2,
        title: "Kafka TensorFlow Fraud Detection",
        category: "ai-ml",
        description: "Real-time credit card fraud detection system using Apache Kafka for streaming and TensorFlow for ML inference.",
        technologies: ["Kafka", "TensorFlow", "Python", "Docker", "Spark"],
        github: "https://github.com/biso1991/kafka-tensorflow-fraud-detection",
        featured: true
    },
    {
        id: 3,
        title: "Spark Streaming E-commerce ETL",
        category: "data-engineering",
        description: "Real-time e-commerce data processing pipeline with Spark Structured Streaming, Kafka, and PostgreSQL for ETL operations.",
        technologies: ["Spark", "Kafka", "PostgreSQL", "Python", "Docker"],
        github: "https://github.com/biso1991/spark-streaming-ecommerce-etl",
        featured: true
    },
    {
        id: 4,
        title: "Django Kafka Analytics Dashboard",
        category: "web",
        description: "Real-time analytics platform with Spark, Kafka, Hadoop, and Django for streaming data visualization.",
        technologies: ["Django", "Kafka", "Spark", "Hadoop", "Redis", "PostgreSQL"],
        github: "https://github.com/biso1991/django-kafka-analytics-dashboard",
        featured: true
    },
    {
        id: 5,
        title: "Django Vue.js Dealership System",
        category: "web",
        description: "Full-stack dealership management system with Django REST API backend and Vue.js frontend.",
        technologies: ["Django", "Vue.js", "PostgreSQL", "REST API", "Docker"],
        github: "https://github.com/biso1991/django-vuejs-dealership-system",
        featured: false
    },
    {
        id: 6,
        title: "Twitter Sentiment Clustering (K-Means)",
        category: "ai-ml",
        description: "Airline customer tweet sentiment analysis using K-Means clustering, TextBlob, NLTK, PCA, and T-SNE visualization.",
        technologies: ["Python", "K-Means", "NLTK", "TextBlob", "Pandas", "Scikit-learn"],
        github: "https://github.com/biso1991/twitter-sentiment-clustering-kmeans",
        featured: false
    },
    {
        id: 7,
        title: "NLP Comprehensive Techniques Collection",
        category: "ai-ml",
        description: "Comprehensive collection of 13 NLP techniques: LDA, NMF, text classification, clustering, generation, sentiment analysis, summarization, VADER, autocorrection, and more.",
        technologies: ["Python", "NLP", "LDA", "NMF", "BERT", "Transformers", "NLTK"],
        github: "https://github.com/biso1991/nlp-comprehensive-techniques-collection",
        featured: true
    },
    {
        id: 8,
        title: "NLP Learning Modules (Python)",
        category: "ai-ml",
        description: "Progressive 6-step NLP learning modules with structured tutorials and hands-on exercises for beginners.",
        technologies: ["Python", "NLP", "NLTK", "spaCy", "Educational"],
        github: "https://github.com/biso1991/nlp-learning-modules-python",
        featured: false
    },
    {
        id: 9,
        title: "Web Scraping Methods Comparison",
        category: "data-engineering",
        description: "Comparison of 7 different Python web scraping methods: Tweepy, BeautifulSoup, URLlib, Requests, Scrapy, and combinations.",
        technologies: ["Python", "BeautifulSoup", "Scrapy", "Selenium", "Tweepy", "Requests"],
        github: "https://github.com/biso1991/web-scraping-methods-comparison-python",
        featured: false
    },
    {
        id: 10,
        title: "Keejob Listings Scraper Notebook",
        category: "data-engineering",
        description: "Jupyter notebook for scraping job listings from keejob.com (Tunisian job portal) with automated data extraction.",
        technologies: ["Python", "Jupyter", "BeautifulSoup", "Pandas"],
        github: "https://github.com/biso1991/keejob-listings-scraper-notebook",
        featured: false
    },
    {
        id: 11,
        title: "Car vs Bike Transfer Learning Classifier",
        category: "ai-ml",
        description: "Binary image classifier using transfer learning with ResNet50, VGG16, and EfficientNet to distinguish between cars and bikes.",
        technologies: ["Python", "TensorFlow", "Keras", "ResNet50", "VGG16", "Transfer Learning"],
        github: "https://github.com/biso1991/car-vs-bike-transfer-learning-classifier",
        featured: false
    },
    {
        id: 12,
        title: "NLP Model Fine-Tuning SaaS Platform",
        category: "ai-ml",
        description: "Production platform for ML teams to fine-tune language models using Haystack framework, with Celery for async task processing. Achieved 30% improvement in workflow efficiency.",
        technologies: ["Django", "DRF", "Haystack", "PyTorch", "Celery", "Redis", "Elasticsearch", "Docker"],
        github: "#",
        featured: true
    },
    {
        id: 13,
        title: "Agricultural E-Commerce Platform",
        category: "web",
        description: "Marketplace platform for agricultural products with NLP-powered search using spaCy and real-time features.",
        technologies: ["Django", "PostgreSQL", "Redis", "WebSockets", "spaCy", "Docker"],
        github: "#",
        featured: false
    },
    {
        id: 14,
        title: "Real-Time Sales Analytics Dashboard",
        category: "data-engineering",
        description: "ETL pipeline with Airflow, Kafka, and Spark for real-time sales data processing with WebSocket-based visualization.",
        technologies: ["Django", "Airflow", "Kafka", "Spark", "PostgreSQL", "Redis"],
        github: "#",
        featured: false
    },
    {
        id: 15,
        title: "Influencer Marketing Intelligence (LLM)",
        category: "ai-ml",
        description: "Multi-agent LLM system using LangChain and LangGraph for automated influencer analysis with RAG pipeline.",
        technologies: ["LangChain", "LangGraph", "GPT", "RAG", "AWS Lambda", "Elasticsearch"],
        github: "#",
        featured: true
    }
];

// ==================== PROJECT RENDERING ====================
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function createProjectCard(project) {
    return `
        <div class="project-card" data-category="${project.category}">
            <div class="project-header">
                <h3>${project.title}</h3>
                <p class="project-category">${getCategoryName(project.category)}</p>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github !== '#' ? `<a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>` : '<span class="project-link" style="opacity: 0.5; cursor: not-allowed;">Private Project</span>'}
                </div>
            </div>
        </div>
    `;
}

function getCategoryName(category) {
    const categories = {
        'data-engineering': 'Data Engineering',
        'ai-ml': 'AI & Machine Learning',
        'web': 'Web Application'
    };
    return categories[category] || category;
}

function renderProjects(filter = 'all') {
    let filteredProjects = projects;
    
    if (filter !== 'all') {
        filteredProjects = projects.filter(project => project.category === filter);
    }
    
    // Sort to show featured projects first
    filteredProjects.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
    
    projectsGrid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
    
    // Add animation
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 100);
    });
}

// Initialize projects
renderProjects();

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .timeline-item, .contact-item, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ==================== ACTIVE NAVIGATION LINK ====================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ==================== TYPING EFFECT (Optional Enhancement) ====================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Console log
console.log('%c🚀 Welcome to Bilel Nasri\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cData Engineer | AI Engineer', 'color: #6b7280; font-size: 14px;');
console.log('%cInterested in collaboration? Let\'s connect!', 'color: #10b981; font-size: 12px;');
