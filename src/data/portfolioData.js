export const personalInfo = {
  name: "Mahendra Pal Bhalothiya",
  title: "AI/ML Researcher & Full-Stack Engineer",
  subtitles: [
    "AI/ML Research Intern @ IIT Guwahati",
    "Computer Science Undergraduate @ NIT Mizoram",
    "Generative AI Pipeline Architect",
    "Quantitative & Predictive Data Analyst",
    "C++ Systems & Full-Stack Developer"
  ],
  location: "Jaipur, Rajasthan, India",
  phone: "+91-6376243328",
  email: "bt23cs022@nitmz.ac.in",
  github: "https://github.com/Mahendra-Pal-Bhalothiya",
  githubUsername: "Mahendra-Pal-Bhalothiya",
  linkedin: "https://linkedin.com/in/mahendrapal-bhalothiya-b041172b6",
  resumePath: "/resume.pdf",
  profilePic: "/profile.png",
  summary: "Computer Science undergraduate with hands-on experience in data analysis, predictive modeling, low-level systems, and building scalable generative AI pipelines. Proficient in Python, C++, SQL, and REST APIs to extract and validate multi-source data, implement real-time computer vision models, and build production full-stack platforms.",
  stats: [
    { label: "JEE Mains Percentile", value: "96.97%", sub: "Top 3% Pan-India" },
    { label: "NIT Mizoram B.Tech", value: "7.60", sub: "CGPA (CSE 2023-Present)" },
    { label: "Detection Accuracy", value: "+18%", sub: "IIT Guwahati CV Pipeline" },
    { label: "Public Repositories", value: "16+", sub: "AI, Quant, Systems & Web" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "genai-ml",
      title: "Generative AI & Machine Learning",
      description: "Building production-grade LLM workflows, neural architectures, and predictive analytics",
      skills: [
        { name: "LLMs & Prompt Eng.", level: 92, tag: "GenAI" },
        { name: "PyTorch", level: 88, tag: "Deep Learning" },
        { name: "LangChain", level: 86, tag: "Pipelines" },
        { name: "OpenAI APIs", level: 90, tag: "GenAI" },
        { name: "Hugging Face", level: 85, tag: "Models" },
        { name: "Scikit-learn", level: 90, tag: "ML" },
        { name: "Computer Vision & OpenCV", level: 88, tag: "CV" },
        { name: "Item Response Theory (IRT)", level: 88, tag: "Psychometrics" },
        { name: "NLP & Text Classification", level: 86, tag: "NLP" }
      ]
    },
    {
      id: "data-analysis",
      title: "Programming & Data Analysis",
      description: "Statistical computing, multi-source data extraction, validation, and analytics",
      skills: [
        { name: "Python", level: 95, tag: "Primary" },
        { name: "C++ (Modern / Systems)", level: 88, tag: "Systems" },
        { name: "SQL (PostgreSQL / MySQL)", level: 90, tag: "Database" },
        { name: "Pandas & NumPy", level: 92, tag: "Data Wrangling" },
        { name: "Data Extraction & Pipelines", level: 90, tag: "ETL" },
        { name: "Data Validation", level: 88, tag: "Data Quality" },
        { name: "Matplotlib & Seaborn", level: 86, tag: "Visualization" },
        { name: "Jupyter Notebooks", level: 92, tag: "Research" }
      ]
    },
    {
      id: "software-web",
      title: "Software Development & Systems",
      description: "Full-stack web applications, microservices, containerization, and low-level systems",
      skills: [
        { name: "React.js", level: 90, tag: "Frontend" },
        { name: "Node.js & Express", level: 85, tag: "Backend" },
        { name: "Flask & REST APIs", level: 90, tag: "APIs" },
        { name: "Socket.io (WebSockets)", level: 82, tag: "Real-Time" },
        { name: "O(1) Data Structures & Cache", level: 92, tag: "Algorithms" },
        { name: "Docker", level: 80, tag: "DevOps" },
        { name: "Twilio API & Webhooks", level: 85, tag: "Integrations" },
        { name: "Git & GitHub", level: 92, tag: "Version Control" }
      ]
    },
    {
      id: "financial-modeling",
      title: "Financial & Quantitative Modeling",
      description: "Quantitative market analytics, behavioral indexes, and financial spreadsheets",
      skills: [
        { name: "Advanced Excel Modeling", level: 92, tag: "Finance" },
        { name: "Google Sheets Automation", level: 90, tag: "Operations" },
        { name: "Quantitative Analysis", level: 88, tag: "Quant" },
        { name: "Statistical Modeling", level: 86, tag: "Statistics" },
        { name: "Crypto Sentiment & Indexes", level: 90, tag: "Analytics" },
        { name: "Chart.js Visual Dashboards", level: 88, tag: "UI / Quant" }
      ]
    }
  ],
  coreCompetencies: [
    "Data Structures & Algorithms",
    "Database Design",
    "Low-Level Systems Architecture",
    "Computer Vision & Video Pipelines",
    "Real-Time Chat & WebSockets",
    "End-to-End ETL Pipelines",
    "Model Evaluation & Validation",
    "Technical Documentation"
  ]
};

export const experienceData = [
  {
    role: "AI/ML Research Intern",
    organization: "IIT Guwahati (AI/ML Research Group)",
    location: "Guwahati, India",
    period: "May 2025 – Jun 2025",
    type: "Research & Development",
    badge: "Key Achievement: +18% Detection Accuracy",
    highlights: [
      "Scoped an end-to-end computer vision business problem, designing data extraction, preparation, and validation pipelines for live video feeds.",
      "Developed and validated an object detection and alerting model in Python, improving detection accuracy by 18% and translating complex technical outputs into actionable insights for non-technical stakeholders.",
      "Analyzed quantitative model performance metrics using SQL and Pandas to identify failure modes, presenting findings to senior modelers to refine system architecture and pipeline stability."
    ],
    techStack: ["Python", "Computer Vision", "Object Detection", "SQL", "Pandas", "Live Video Pipelines", "Model Validation"],
    repoUrl: "https://github.com/Mahendra-Pal-Bhalothiya/Monkey_Alert_System"
  }
];

export const projectsData = [
  {
    id: "ai-diagnostic-platform",
    title: "AI-Diagnostic",
    subtitle: "Adaptive Psychometric Testing & LLM Evaluation Platform",
    category: "Generative AI",
    period: "Featured Project",
    summary: "Developed an intelligent adaptive testing engine incorporating Item Response Theory (IRT) and LLM-driven analytics for real-time ability estimation.",
    keyPoints: [
      "Developed an adaptive psychometric testing engine implementing Item Response Theory (IRT 2-PL) models for real-time latent test taker ability estimation.",
      "Implemented real-time data collection pipelines and LLM API integrations to generate personalized diagnostic feedback reports and targeted study recommendations.",
      "Dynamic difficulty calibration mechanism adjusts subsequent questions based on real-time latent ability parameter convergence."
    ],
    techStack: ["Python", "Applied NLP", "Item Response Theory (IRT)", "LLM APIs", "FastAPI", "Pandas"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya/AI_Diagnostic",
    featured: true,
    impactMetric: "Real-time Psychometric IRT + Personalized LLM Feedback"
  },
  {
    id: "fear-and-greed-analysis",
    title: "Market Sentiment & Quantitative Crypto Analysis",
    subtitle: "Statistical Modeling & Multi-Account Behavioral Analytics",
    category: "Data Analytics & Quant",
    period: "Featured Project",
    summary: "A comprehensive data analysis project examining the relationship between market sentiment (Fear & Greed Index) and cryptocurrency trading behavior across multiple accounts.",
    keyPoints: [
      "Analyzed multi-year trading datasets alongside the Crypto Fear & Greed Index using statistical regression and time-series modeling to identify correlation patterns and behavioral trends.",
      "Built predictive analytics scripts and data visualization dashboards in Jupyter surfacing actionable, data-driven trading strategies and key risk metrics.",
      "Engineered automated backtesting routines in Python and Pandas to evaluate risk-adjusted return ratios and contrarian trading signals."
    ],
    techStack: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Statistical Modeling", "Predictive Analytics"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya/Fear-And-Greed-Analysis",
    featured: true,
    impactMetric: "Multi-Year Statistical Sentiment & Trading Behavioral Correlation"
  },
  {
    id: "fake-news-verifier",
    title: "News Verifier Bot (Fake News Detection)",
    subtitle: "Intelligent WhatsApp Chatbot with Automated Fact-Check Verification",
    category: "Generative AI",
    period: "Open Source Project",
    summary: "An intelligent WhatsApp chatbot built using Flask, Twilio, and a machine learning model that helps users verify the authenticity of news headlines or short articles.",
    keyPoints: [
      "Trained an NLP machine learning classification model (`train.py`, `fake_news_model.pkl`) to evaluate the credibility of news claims with high precision.",
      "Integrated Twilio Messaging API webhooks with Flask to provide instant WhatsApp verification responses directly to mobile users.",
      "Incorporated automated Google Search fact-check web query integration to supply real-time source citations, alongside persistent query audit logging."
    ],
    techStack: ["Python", "Flask", "Twilio API", "Scikit-learn", "NLP", "Google Search API", "Joblib"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya/Fake_News",
    featured: true,
    impactMetric: "End-to-End Deployed WhatsApp Chatbot with Automated Fact-Checking"
  },
  {
    id: "monkey-alert-system",
    title: "Vision Alert System (Computer Vision & Classification)",
    subtitle: "Real-Time Object Detection & Alerting Pipeline for Video Feeds",
    category: "Computer Vision & AI",
    period: "Research Project (IIT Guwahati)",
    summary: "Engineered a robust computer vision classification and alerting model designed for real-time detection from live streaming video feeds and images.",
    keyPoints: [
      "Scoped and built end-to-end computer vision pipelines for live video feeds, improving object detection accuracy by 18%.",
      "Designed data extraction, preprocessing, and frame validation routines in Python and OpenCV to optimize inference latency.",
      "Implemented automated event alerting mechanisms to translate model outputs into immediate actionable alerts for operators."
    ],
    techStack: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "Video Processing", "Model Validation"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya/Monkey_Alert_System",
    featured: true,
    impactMetric: "+18% Detection Accuracy on Live Video Feeds"
  },
  {
    id: "guruvai-systems",
    title: "GURUVAI: Kernel LRU Cache & OS Event Scheduler",
    subtitle: "High-Performance Systems Engineering with O(1) Time Complexity",
    category: "Systems & Algorithms",
    period: "Core Systems Project",
    summary: "Low-level C++ systems implementation of an optimal O(1) LRU Cache and an Operating System Event Scheduler with interval graph algorithms.",
    keyPoints: [
      "Implemented a production-grade LRU (Least Recently Used) cache in C++ combining a Doubly Linked List with Hash Map iterators to guarantee strictly O(1) lookup, update, and eviction.",
      "Engineered an Operating System Event Scheduler implementing interval scheduling algorithms and minimum resource allocation using min-heap priority queues.",
      "Demonstrates core algorithmic depth, memory-conscious systems programming, and operating systems resource allocation."
    ],
    techStack: ["C++", "Data Structures & Algorithms", "Operating Systems", "O(1) Hash Map + DLL", "Min-Heaps"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya/GURUVAI",
    featured: true,
    impactMetric: "Guaranteed O(1) Time Complexity Cache & Optimal Greedy Event Scheduler"
  },
  {
    id: "fincash-dashboard",
    title: "FinCash: Modern Financial Dashboard",
    subtitle: "Real-Time Investment Analytics & Portfolio Telemetry UI",
    category: "Full-Stack & Finance",
    period: "Frontend / Quant UI",
    summary: "Modern frontend web application for financial analytics, asset allocation tracking, and interactive portfolio visualization.",
    keyPoints: [
      "Architected a responsive financial analytics dashboard in React.js and Tailwind CSS with modern component-driven UX.",
      "Integrated Chart.js and React-Chartjs-2 for interactive asset valuation curves, historical portfolio trends, and multi-currency tracking.",
      "Designed clean modular state management and financial KPI widgets (cash flow, ROI, asset distributions)."
    ],
    techStack: ["React.js", "Tailwind CSS", "Chart.js", "JavaScript", "Financial KPIs"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya/FinCash",
    featured: false,
    impactMetric: "Interactive Financial Charting & Asset Telemetry"
  },
  {
    id: "streamlive-platform",
    title: "StreamLive: Interactive Streaming Platform",
    subtitle: "WebRTC Video Broadcasts & Real-Time Participant Communication",
    category: "Full-Stack & WebRTC",
    period: "Full-Stack Project",
    summary: "Live video streaming and collaborative learning platform developed using React.js, Stream.io API, and MongoDB.",
    keyPoints: [
      "Engineered a scalable live streaming platform leveraging Stream.io WebRTC APIs for ultra-low latency interactive video broadcasting.",
      "Integrated real-time synchronized live chat, participant presence tracking, and channel management.",
      "Configured MongoDB database schemas for secure user authentication, streaming sessions, and room metadata persistence."
    ],
    techStack: ["React.js", "Stream.io API", "WebRTC", "MongoDB", "Node.js", "CSS3"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya/StreamLive",
    featured: false,
    impactMetric: "Low-Latency WebRTC Video Streaming & Synchronized Live Chat"
  },
  {
    id: "startup-ecosystem-portal",
    title: "Startup Ecosystem Portal",
    subtitle: "Multi-Stakeholder Data Platform & AI Funding Predictor",
    category: "Enterprise & AI",
    period: "Featured Platform",
    summary: "Engineered an enterprise full-stack data platform with custom workflow systems, data dictionaries, and dashboard analytics for entrepreneurs, investors, and customers.",
    keyPoints: [
      "Engineered an enterprise-grade full-stack data platform with custom workflow systems, data dictionaries, and dashboard analytics for entrepreneurs, investors, and customers.",
      "Integrated a PyTorch-based conversational LLM assistant and a Random Forest funding-prediction model to evaluate pitch feasibility.",
      "Architected robust REST APIs to extract, transform, and validate data seamlessly across system modules."
    ],
    techStack: ["Python", "SQL", "PyTorch", "Scikit-learn", "REST APIs", "Random Forest", "React"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya",
    featured: true,
    impactMetric: "Funding Prediction & Multi-Stakeholder Workflows"
  },
  {
    id: "solo-fitness",
    title: "Solo Fitness: Gamified Level-Up Tracker",
    subtitle: "Daily Quest RPG Engine & Level Progression System",
    category: "Full-Stack & WebRTC",
    period: "Interactive App",
    summary: "Gamified workout tracker themed after 'Solo Leveling', rewarding daily consistency with dynamic XP points, rank advancements, and stat progression.",
    keyPoints: [
      "Built a gamified fitness application using Node.js with custom XP progression algorithms and dynamic level-up triggers.",
      "Designed daily quest logs, streak counters, and RPG-style player attribute tracking (Strength, Stamina, Agility).",
      "Created an immersive thematic UI with responsive state persistence across workout sessions."
    ],
    techStack: ["Node.js", "Express", "JavaScript", "HTML5/CSS3", "RPG Game Mechanics"],
    githubUrl: "https://github.com/Mahendra-Pal-Bhalothiya/Solo_fitness",
    featured: false,
    impactMetric: "Gamified Behavioral Habit Formation & XP Engine"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "National Institute of Technology Mizoram (NIT Mizoram)",
    location: "Aizawl, Mizoram, India",
    period: "Aug 2023 – Present",
    score: "CGPA: 7.60 / 10.0",
    badge: "Institute of National Importance",
    details: [
      "Focus Areas: Data Structures & Algorithms, Machine Learning, Operating Systems, Database Management Systems, System Architecture, RESTful APIs.",
      "Active participant in technical symposiums, research coding hackathons, and AI development groups.",
      "Roll No: bt23cs022 • CSE Department"
    ]
  },
  {
    degree: "Senior Secondary (Class XII) & Secondary (Class X)",
    institution: "Army Public School, Jaipur",
    location: "Jaipur, Rajasthan, India",
    period: "2020 – 2022",
    score: "Intermediate: 91.8% | Matriculation: 89.2%",
    badge: "JEE Mains: 96.97 Percentile",
    details: [
      "Scored 96.97 Percentile in JEE Mains competitive entrance examination among 1,000,000+ candidates nationwide.",
      "Solid foundation in advanced mathematics, physics, and computational thinking.",
      "Recognized for academic excellence and participation in STEM olympiads."
    ]
  }
];
