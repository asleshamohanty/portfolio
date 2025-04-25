import { useState } from 'react';
import { Mail, User, Settings, Calendar, FileText, Briefcase, BookOpen, Code, Cpu, GitBranch, MessageSquare, FlaskConical, Download } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce application with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Developed a task management application with drag-and-drop functionality.",
      tags: ["React", "Firebase", "Tailwind CSS"]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
    },
    {
      id: 2,
      name: "100 days of Python Bootcamp",
      issuer: "Udemy",
      link: "https://www.coursera.org/professional-certificates/google-it-support",
      image: "https://storage.googleapis.com/growable-storage-prod/2020/10/Google-IT-Support-Professional-Certificate.png"
    },
    {
      id: 3,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
    },
    {
      id: 4,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
    },
  ];

  const skillGroups = [
    {
      category: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "C/C++", "Python", "Java", "HTML/CSS", "SQL", "JavaScript"]
    },
    {
      category: "Web Development Frameworks & Libraries",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["React", "Node.js", "Redux", "Flask", "Tailwind CSS", "FastAPI"]
    },
    {
      category: "Machine Learning & AI",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Supervised & Unsupervised Learning",
        "Classification, Regression, Clustering",
        "Model Evaluation & Hyperparameter Tuning",
        "Data Preprocessing & Feature Engineering",
        "ML with Scikit-learn, Pandas, NumPy",
        "Data Visualization with Matplotlib & Seaborn",
        "Exploring AI Agents, RAG and LLMs"
      ]
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
      title: "AI in Criminology at Airports",
      description: "Exploring the use of AI for real-time surveillance and threat detection in airport environments using computer vision and deep learning."
    },
    {
      id: 2,
      title: "Autonomous AI Agents for Coding",
      description: "Developing intelligent agents capable of autonomously writing and debugging code using LLMs, RAG, and reinforcement learning."
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
                  <p className="text-lg text-gray-600">Undergraduate CSE Student at MIT</p>
                </div>
                <p className="text-gray-700 max-w-2xl">
                  Passionate software developer and aspiring AI/ML engineer with experience in building full-stack web apps and researching real-world applications of AI.
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
                    <h4 className="font-medium">Software Development Intern</h4>
                    <p className="text-gray-600">Tech Company Inc. • Summer 2023</p>
                    <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                      <li>Developed and maintained React components for customer dashboard</li>
                      <li>Collaborated with team to implement new features using TypeScript</li>
                      <li>Participated in code reviews and agile development processes</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium">Frontend Developer (Part-time)</h4>
                    <p className="text-gray-600">Startup Solutions • Jan 2022 - Present</p>
                    <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                      <li>Built responsive user interfaces using React and Tailwind CSS</li>
                      <li>Implemented state management using Redux Toolkit</li>
                      <li>Optimized application performance reducing load times by 30%</li>
                      <li>Worked closely with UX designers to implement pixel-perfect designs</li>
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
                  <img src={cert.image} alt={cert.name} className="h-16 w-16 object-contain" />
                  <div className="mt-4 text-lg font-semibold">{cert.name}</div>
                  <div className="text-gray-600">{cert.issuer}</div>
                  <div className="text-xs text-gray-500 mt-1">{cert.date}</div>
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'research' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Research Projects</h2>
            <div className="space-y-4">
              {researchProjects.map((research) => (
                <div key={research.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-semibold">{research.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">{research.description}</p>
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
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 