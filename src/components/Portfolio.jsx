import { useState } from 'react';
import { Mail, User, Settings, Calendar, FileText, Briefcase, BookOpen, Code, Cpu, GitBranch, MessageSquare, FlaskConical, Download } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const projects = [
    
    {
      id: 1,
      title: "SpendWise",
      description: "Developed a comprehensive personal finance management app with expense tracking, budgeting, and analytical features. Integrated ML to predict future balance, budgeting, and impulsive spending. Placed #6 in a competitive hackathon.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Machine Learning"],
      url: "https://github.com/asleshamohanty/SpendWise.git"
    },    
    {
      id: 2,
      title: "Comprehensive Stock Market Analysis and Prediction System",
      description: "Analyzed historical stock data using EDA to uncover trends and predict future prices with Random Forest and LSTM models. Model performance is evaluated using RMSE.",
      tags: ["Python", "EDA", "Random Forest", "LSTM", "Machine Learning", "Deep Learning", "RMSE"],
      url: "https://github.com/asleshamohanty/learning-machine-learning/tree/main/Stock%20Price%20Analysis"
    },  
    {
      id: 3,
      title: "AI Study Assistant",
      description: "Currently developing an AI-powered tool that summarizes study materials, generates MCQs, and provides an interactive tutor chat using LLMs.",
      tags: ["LLM", "NLP", "Flask", "React", "Machine Learning"],
      url: "https://github.com/asleshamohanty/AI-study-assistant"
    },    
    {
      id: 4,
      title: "Portfolio Website",
      description: "Created a responsive personal portfolio website to showcase projects, certifications, and blogs.",
      tags: ["React", "Tailwind CSS"],
      url: "https://github.com/asleshamohanty/Portfolio.git"
    },
    {
      id: 5,
      title: "Cold Email Generator for Service Companies",
      description: "Built with Groq, LangChain, and Streamlit, this tool scrapes job listings from careers pages, generates personalized cold emails, and recommends relevant portfolio links from a vector database.",
      tags: ["Groq", "LangChain", "Streamlit", "NLP", "Machine Learning"],
      url: "https://github.com/asleshamohanty/coldemail-generator-genai.git"
    },
    {
      id: 6,
      title: "Ola Data Analysis",
      description: "Analyzed ride-sharing data from Ola using Python and data visualization tools to uncover insights about ride patterns, user behavior, and pricing trends.",
      tags: ["Python", "Data Analysis", "Pandas", "Matplotlib", "Power BI"],
      url: "https://github.com/asleshamohanty/data-analysis-projects/tree/main/Ola-Ride-Hailing-Performance-Report"
    },
    {
      id: 7,
      title: "Personal Blog",
      description: "Created a personal blog with a photo gallery and dynamic content management for persomal use using react, flask and google oauth.",
      tags: ["React", "Flask", "Tailwind CSS"],
      url: "https://github.com/asleshamohanty/Personal-Blog.git"
    },
    {
      id: 8,
      title: "MediVault",
      description: "Developing a medical records and prescription manager built with Flask and PostgreSQL, allowing secure storage, access, and management of patient health data with role-based access.",
      tags: ["Flask", "PostgreSQL", "JWT", "React", "Tailwind CSS"],
      url: "https://github.com/asleshamohanty/medivault.git"
    },
    
    
    
    

  ];

  const certifications = [
    {
      id: 1,
      name: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI, Amazon Web Services",
      link: "https://www.coursera.org/account/accomplishments/verify/DB95XPMULA0Q",
      image: "/courses/genai.jpg"
    },
    {
      id: 2,
      name: "100 days of Python Bootcamp",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-98e842b0-d250-40a5-bba3-3b0819b07522/",
      image: "/courses/python.jpg"
    },
    {
      id: 3,
      name: "Tools for Data Science",
      issuer: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/7LRG4WRAXPGR",
      image: "/courses/tools.jpg"
    },
    {
      id: 4,
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      link: "https://www.coursera.org/account/accomplishments/verify/AQ1SWH5XS638",
      image: "/courses/data.jpg"
    },
    {
      id: 5,
      name: "Python for Data Science, AI & Development",
      issuer: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/H36JZVZSU94Q",
      image: "/courses/Python for AI & Data Science_page-0001.jpg"
    },
    {
      id: 6,
      name: "Introduction to Java and Object-Oriented Programming",
      issuer: "University of Pennsylvania",
      link: "https://www.coursera.org/account/accomplishments/verify/Y9IDTZMABN69",
      image: "/courses/Java OOPS_page-0001.jpg"
    },
  ];
  const skillGroups = [
    {
      category: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "C/C++", "Java", "HTML/CSS", "SQL", "JavaScript"]
    },
    {
      category: "Machine Learning",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Supervised & Unsupervised Learning",
        "Classification, Regression, Clustering",
        "Model Evaluation & Hyperparameter Tuning",
        "Data Preprocessing & Feature Engineering",
        "ML with Scikit-learn, Pandas, NumPy",
        "Data Visualization with Matplotlib & Seaborn",
        "Time Series Forecasting with LSTMs",
        "AI Model Evaluation (Confusion Matrix, ROC)"
      ]
    },
    {
      category: "Artificial Intelligence",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Exploring AI Agents, RAG and LLMs",
        "Natural Language Processing (NLP)",
        "Deep Learning (CNNs, RNNs, GANs)",
        "Reinforcement Learning (Q-Learning, DQN)",
        "AI Ethics & Explainable AI",
        "Generative Models (GANs, VAEs)",
        "Knowledge Graphs & Ontologies",
        "AI Model Deployment (Docker, MLflow)"
      ]
    },
    {
      category: "Web Development Frameworks & Libraries",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["React", "Node.js", "Redux", "Flask", "Tailwind CSS", "FastAPI"]
    },
    {
      category: "Tools & Platforms",
      icon: <Settings className="h-5 w-5" />,
      skills: ["Git", "VS Code", "Jupyter Notebook", "Postman", "Figma", "Github", "PostgreSQL", "SQLite", "Google Colab"]
    },
    {
      category: "Soft Skills",
      icon: <MessageSquare className="h-5 w-5" />,
      skills: ["Teamwork", "Communication", "Problem Solving", "Time Management", "Adaptability", "Leadership"]
    }
  ];
  
  const researchProjects = [
    {
      id: 1,
      title: "Artificial Intelligence in Credit Scoring: Enhancing Financial Inclusion & Opportunities",
      journal: "International Research Journal of Education and Technology (IRJEdT)",
      link: "https://zenodo.org/records/15256246",
      description: "Published in IRJEdT (Vol. 08, Issue 04), this paper explores the use of AI in enhancing credit scoring systems to promote financial inclusion in underserved communities."
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Aslesha_Mohanty_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center text-xl font-semibold text-gray-900">Aslesha Mohanty</div>
            <div className="hidden sm:flex sm:space-x-8">
              {["about", "skills", "projects", "certifications", "research", "contact"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === tab
                      ? 'border-pink-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className="ml-2 hidden sm:inline-flex items-center px-3 py-1 h-10 border border-pink-500 text-sm font-medium text-pink-500 rounded hover:bg-pink-100 mt-3"

              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {activeTab === 'about' && (
          <>
            <div className="space-y-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src="/public/profile-photo.jpeg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold">Aslesha Mohanty</h1>
                  <p className="text-lg text-gray-600">Undergraduate CSE Student at Manipal Institute of Technology</p>
                </div>
                <p className="text-gray-700 max-w-2xl">
                Hi, I'm Aslesha, a passionate software developer and aspiring AI/ML engineer based in Bangalore. With a strong background in machine learning, deep learning, and data science, I focus on solving real-world problems across diverse industries. I’m always learning and exploring new advancements in AI/ML. Contact me for opportunities, collaborations and more!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Work Experience</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium">Undergraduate Research Assistant</h4>
                    <p className="text-gray-600">Manipal Institute of Technology • Jan 2025 - Present</p>
                    <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                      <li>Working on behavioral analytics using AI to profile criminal activities.</li>
                      <li>Conducting research on utilizing AI to analyze behavioral cues such as gestures, posture, and facial expressions for criminal profiling.</li>
                      <li>Exploring the application of Emotional AI in detecting emotional cues to improve crime detection and interrogation accuracy.</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium">Web Development Intern</h4>
                    <p className="text-gray-600">Orange Strokes • Dec 2024 - Jan 2025</p>
                    <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                      <li>Worked as Web Development Intern at Orange Strokes during its revamp phase, gaining exposure to startup workflows</li>
                      <li>Collaborated on UI/UX design before transitioning to frontend development</li>
                      <li>Built and optimized scalable web applications using React and Next.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-4 text-xl font-semibold">
                <BookOpen className="h-5 w-5" />
                Education
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Bachelor of Technology in Computer Science and Engineering (Data Science)</h4>
                  <p className="text-gray-600">Manipal Institute of Technology • Expected 2027</p>
                  <p className="text-gray-600 mt-1">GPA: 8.61/10.0</p>
                </div>
                <div>
                  <h4 className="font-medium">Relevant Coursework</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Data Structures and Algorithms</li>
                    <li>Probabiliy & Statistics for Data Science and ML</li>
                    <li>Database Management Systems</li>
                    <li>Object Oriented Programming using Java</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">My Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.category} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-4 text-xl font-italics">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="px-4 py-2 text-sm bg-pink-100 text-black-700 rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

{activeTab === 'projects' && (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">My Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-700 mt-2 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">{tag}</span>
            ))}
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">
            <span>Github link</span>
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="16" height="16" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              className="lucide lucide-link">
              <path d="M10 13a5 5 0 0 1 7.07 0l1.42 1.42a5 5 0 0 1-7.07 7.07l-1.42-1.42"></path>
              <path d="M14 11a5 5 0 0 0-7.07 0l-1.42 1.42a5 5 0 0 0 7.07 7.07l1.42-1.42"></path>
            </svg>
          </a>
        </div>
      ))}
    </div>
  </div>
)}

        {activeTab === 'certifications' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col items-center text-center"
                >
                  <img src={cert.image} alt={cert.name} className="h-30 w-30 object-contain" />
                  <div className="mt-4 text-lg font-semibold">{cert.name}</div>
                  <div className="text-gray-600">{cert.issuer}</div>
                  <div className="text-xs text-gray-500 mt-1">{cert.date}</div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* {activeTab === 'research' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Research Projects</h2>
            <div className="space-y-4">
              {researchProjects.map((research) => (
                <div key={research.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-semibold">{research.title}</h3>
                    <p>Published in: {research.journal}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">{research.description}</p>
                  <a href={research.link} target="_blank" rel="noopener noreferrer">
            Read the Full Paper
          </a>
                </div>
              ))}
            </div>
          </div>
        )} */}

{activeTab === 'research' && (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-gray-900">Research Projects</h2>
    <div className="space-y-6">
      {researchProjects.map((research) => (
        <div key={research.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
          <div className="flex items-center justify-between space-x-3">
            <h3 className="text-2xl font-semibold text-gray-800">{research.title}</h3>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-600">Published in: <span className="font-medium text-gray-900">{research.journal}</span></p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Ongoing
              </span>
            </div>
          </div>
          <p className="text-gray-700 mt-3">{research.description}</p>
          <div className="mt-4 flex space-x-6">
            <a 
              href={research.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline">
              Read the Full Paper
            </a>
            <a 
              href="/papers/1.jpg"
              download 
              className="text-green-600 hover:underline">
              Download Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact Me</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-xl font-semibold mb-4">Get In Touch</div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">aslesha2909@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <User className="h-5 w-5 text-gray-500" />
                  <a href="https://linkedin.com/in/aslesha-mohanty-7b8447223" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                    linkedin.com/in/aslesha-mohanty-7b8447223
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <User className="h-5 w-5 text-gray-500" />
                  <a href="https://github.com/asleshamohanty" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                  https://github.com/asleshamohanty
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 