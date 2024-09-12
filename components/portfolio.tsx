'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Github, Linkedin, Mail, Send, Moon, Sun, Menu, X } from 'lucide-react'
import Image from 'next/image';
import Script from "next/script";
// import Head from "next/head"  
// import { useRouter } from "next/router";

type Theme = 'light' | 'dark'
const BackgroundGraphs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
      <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="graph-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        
        {/* Line Graph */}
        <path
          d="M0 200 Q 100 100, 200 180 T 400 150 T 600 220 T 800 180 T 1000 250"
          fill="none"
          stroke="url(#graph-gradient)"
          strokeWidth="2"
        />
        
        {/* Bar Graph */}
        <g transform="translate(100, 300)">
          {[40, 60, 30, 70, 50, 80, 45].map((height, index) => (
            <rect
              key={index}
              x={index * 40}
              y={-height}
              width="30"
              height={height}
              fill="url(#graph-gradient)"
              opacity="0.7"
            />
          ))}
        </g>
        
        {/* Scatter Plot */}
        {Array.from({ length: 20 }).map((_, index) => (
          <circle
            key={index}
            cx={Math.random() * 1000}
            cy={Math.random() * 400 + 400}
            r={Math.random() * 4 + 2}
            fill="url(#graph-gradient)"
          />
        ))}
        
        {/* Pie Chart */}
        <g transform="translate(800, 500)">
          <path
            d="M0 0 L50 0 A50 50 0 0 1 43.3 25 Z"
            fill="#3B82F6"
          />
          <path
            d="M0 0 L43.3 25 A50 50 0 0 1 -43.3 25 Z"
            fill="#60A5FA"
          />
          <path
            d="M0 0 L-43.3 25 A50 50 0 0 1 -50 0 Z"
            fill="#93C5FD"
          />
          <path
            d="M0 0 L-50 0 A50 50 0 0 1 50 0 Z"
            fill="#BFDBFE"
          />
        </g>
      </svg>
    </div>
  );
};
const ScriptureSection = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`relative py-24 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="herogradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.1)'} />
              <stop offset="100%" stopColor={theme === 'dark' ? 'rgba(59, 130, 246, 0)' : 'rgba(59, 130, 246, 0)'} />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#herogradient)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            &quot;For I know the plans I have for you,&quot; declares the LORD, &quot;plans to prosper you and not to harm you, plans to give you hope and a future.&quot;
          </h2>
          <p className={`text-xl md:text-2xl italic mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Jeremiah 29:11</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            <svg className={`w-24 h-24 mx-auto ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C40,0 60,0 100,100 Z" fill={theme === 'dark' ? '#111827' : '#F3F4F6'} />
        </svg>
      </div>
    </section>
  )
}
const projects = [
  {
    id: 1,
    title: 'Django Application Development - User Registration Email Validation System',
    description: 'Developed and deployed with docker a Django-based application focused on user registration and email validation. Integrated JavaScript for enhanced user experience and real-time validation. Collaborated with a cross-functional team to ensure the application met project goals and deadlines.',
    imgSrc: '/images/dashboard.PNG',
    caseStudyLink: 'https://django-dashboard-docker-2d6c094b404f.herokuapp.com/authentication/login?next=/',
    githubLink: 'https://github.com/Anonymous1223334444/django_dashboard.git',
  },
  {
    id: 2,
    title: 'AI Model for Sign Language Recognition - Flutter App Integration',
    description: 'Trained an AI model to recognize sign language gestures from images. Integrated the model into a Flutter app, enabling real-time gesture recognition and user interaction. Conducted extensive testing and optimization to improve model accuracy and performance.',
    imgSrc: '/images/ai3.PNG',
    caseStudyLink: 'https://not-deployed-yet.vercel.app/',
    githubLink: 'https://github.com/Anonymous1223334444/decryptage_de_geste.git',
  },
  {
    id: 3,
    title: 'Portofolio',
    description: 'This website describe all the project that I have worked on even though all of them didn\'t appear here.',
    imgSrc: '/images/portofolio1.PNG',
    caseStudyLink: 'https://andresarr.netlify.app/',
    githubLink: 'https://github.com/Anonymous1223334444/portofolio.git',
  },
  {
    id: 4,
    title: 'E-Learning Platform',
    description: 'E-Learning Platform created with PHP and in which I experiment the api stripe checkout as payment gateway.',
    imgSrc: '/images/e-learning.PNG',
    caseStudyLink: 'https://not-deployed-yet.vercel.app/',
    githubLink: 'https://github.com/Anonymous1223334444/web_project_semi_final.git',
  },
  {
    id: 5,
    title: 'Portofolio',
    description: 'This website describe all the project that I have worked on even though all of them didn\'t appear here.',
    imgSrc: '/images/portofolio2.PNG',
    caseStudyLink: 'https://portofoliowebdev.vercel.app/',
    githubLink: 'https://github.com/Anonymous1223334444/portofolio2.git',
  },
  {
    id: 6,
    title: 'Hotel and Show Reservations Platform',
    description: 'Simple interface that manages hotel and show reservations made using the django framework and mysql server. All back-end processes happens locally.',
    imgSrc: '/images/hs.PNG',
    caseStudyLink: 'https://not-deployed-yet.vercel.app/',
    githubLink: 'https://github.com/Anonymous1223334444/Show_Hotel.git',
  },
];

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: 'light',
  toggleTheme: () => {},
})

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// function Logo() {
//   const { theme } = useContext(ThemeContext)
//   return (
//     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect width="40" height="40" rx="8" fill={theme === 'dark' ? '#3B82F6' : '#1D4ED8'} />
//       <path d="M12 28L20 12L28 28" stroke={theme === 'dark' ? '#1F2937' : '#FFFFFF'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M16 20H24" stroke={theme === 'dark' ? '#1F2937' : '#FFFFFF'} strokeWidth="4" strokeLinecap="round" />
//     </svg>
//   )
// }

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <Logo /> */}
            <a href="#" className="ml-2 text-xl font-bold">Andre SARR</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const GA_TRACKING_ID = "G-Y3CJQJ3T5D";

export function Portfolio() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')

    // const formData = new FormData(e.currentTarget) 
    // const data = {
    //   name: formData.get('name'),
    //   email: formData.get('email'),
    //   message: formData.get('message'),
    // }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' });
        // e.currentTarget.reset()
      } else {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setFormStatus('error')
    }
  }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const skills = [
    "Python/Django", "Artificial Intelligence", "Next.js", "Flutter", "HTML/CSS", "JavaScript", "React", "Responsive Design"
  ];

  return (
    <>
    {/* Google Analytics Script */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <NavBar />

        <main  className="pt-16">
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <BackgroundGraphs />
            <div
              className="absolute inset-0 z-0 transition-colors duration-200 bg-blue-50 dark:bg-blue-900"
              style={{
                background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
              }}
            />
            <div className="relative z-10 text-center" style={{marginTop: 12 + 'em'}}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                Hi, I&apos;m Andre SARR
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8"
              >
                Web & App Developer
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a
                  href="https://drive.google.com/file/d/1hpTmODv1C0hmLk3kyYelXseiusDax9sz/view?usp=drive_link" target='_blank'
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                >
                  View My CV
                  <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </section>

          <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: project.id * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <a href={project.imgSrc} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <a
                          href={project.caseStudyLink} target="_blank"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-150 ease-in-out"
                        >
                          View Case Study
                        </a>
                        <a
                          href={project.githubLink} target="_blank"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition duration-150 ease-in-out"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600 text-center">An error occurred. Please try again.</p>
                )}
              </form>
            </div>
          </section>
          <ScriptureSection />
        </main>

        <footer className="bg-gray-100 dark:bg-gray-800 py-8 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">&copy; 2023 Andre SARR. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
    </>
  )
} 