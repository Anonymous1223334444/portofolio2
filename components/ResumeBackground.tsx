import React from 'react';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Resume | Andre SARR',
  description: 'Professional resume of Andre SARR',
}     
const ResumeBackground: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
    <defs>
      <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#4169E1" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#4169E1" stopOpacity="0"/>
      </radialGradient>
      <filter id="blueBlura">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
      </filter>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#000B18" />
        <stop offset="100%" stopColor="#0A2342" />
      </linearGradient>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, -10px); }
            50% { transform: translate(20px, 0); }
            75% { transform: translate(10px, 10px); }
          }
          @keyframes pulse {
            0%, 100% { r: 3; opacity: 0.5; }
            50% { r: 5; opacity: 1; }
          }
          .animate { animation: fadeIn 1s ease-in-out forwards; }
          .float { animation: float 20s ease-in-out infinite; }
          .pulse { animation: pulse 3s ease-in-out infinite; }
          text { font-family: Arial, sans-serif; }
        `}
      </style>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#bgGradient)"/>
  
    <g className="animate float" style={{animationDelay: '0.2s'}}>
      <path d="M0,50 Q200,0 400,50 T800,50" fill="none" stroke="#1E3A5F" strokeWidth="0.5"/>
      <path d="M0,150 Q200,100 400,150 T800,150" fill="none" stroke="#1E3A5F" strokeWidth="0.5"/>
      <path d="M0,250 Q200,200 400,250 T800,250" fill="none" stroke="#1E3A5F" strokeWidth="0.5"/>
      <path d="M0,350 Q200,300 400,350 T800,350" fill="none" stroke="#1E3A5F" strokeWidth="0.5"/>
    </g>
  
    <g className="animate" style={{animationDelay: '0.4s'}}>
      <circle cx="100" cy="100" r="30" fill="url(#blueGlow)" filter="url(#blueBlur)" opacity="0.7"/>
      <circle cx="700" cy="200" r="50" fill="url(#blueGlow)" filter="url(#blueBlur)" opacity="0.5"/>
      <circle cx="200" cy="600" r="40" fill="url(#blueGlow)" filter="url(#blueBlur)" opacity="0.6"/>
      <circle cx="600" cy="1000" r="60" fill="url(#blueGlow)" filter="url(#blueBlur)" opacity="0.4"/>
    </g>
  
    <g className="animate">
      {[50, 150, 250, 450, 550, 650, 750].map((cx, index) => (
        <circle key={index} cx={cx} cy={(index + 1) * 50} r="1" fill="#4169E1" className="particle"/>
      ))}
    </g>
    
    <g className="animate" style={{animationDelay: '0.4s'}}>
      <path d="M0 600 Q 400 500, 800 600 T 1600 600" stroke="#1E90FF" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M0 700 Q 400 800, 800 700 T 1600 700" stroke="#1E90FF" strokeWidth="2" fill="none" opacity="0.3"/>
      {[100, 300, 500, 700].map((cx, index) => (
        <circle key={index} cx={cx} cy={650} r="3" fill="#4169E1" className="pulse" style={{animationDelay: `${index * 0.5}s`}}/>
      ))}
    </g>
  
    <g className="animate" style={{animationDelay: '0.6s'}}>
      <text x="40" y="60" fontSize="40" fill="#fff">Andre SARR</text>
      <text x="40" y="90" fontSize="20" fill="#B0C4DE">Web & App Developer</text>
    </g>
    
    <g className="animate float" style={{animationDelay: '0.8s'}}>
      <svg x="720" y="40" width="60" height="60" viewBox="0 0 100 100" fill="none">
        <path d="M20 80 L50 20 L80 80 L65 80 L50 50 L35 80 Z" fill="#4169E1"/>
        <path d="M40 30 C 60 10, 85 20, 85 40 C 85 60, 60 65, 60 75 C 60 85, 75 85, 85 75" stroke="#B0C4DE" strokeWidth="6" fill="none"/>
        <line x1="20" y1="80" x2="85" y2="75" stroke="#B0C4DE" strokeWidth="2"/>
      </svg>
    </g>
    
    <g className="animate" style={{animationDelay: '1s'}}>
      <text x="40" y="130" fontSize="16" fill="#B0C4DE">📧 sarrandremichel@gmail.com | 📱 (221) 77-882-83-76 | 🌐 portofoliowebdev.vercel.app/ | 📍 Dakar</text>
    </g>
    
    <g className="animate" style={{animationDelay: '1.2s'}}>
      <text x="40" y="170" fontSize="24" fill="#fff">Professional Summary</text>
      <rect x="40" y="180" width="720" height="2" fill="#4169E1"/>
      <text x="40" y="210" fontSize="14" fill="#B0C4DE">
        <tspan x="40" dy="0">Self-taught developer with 4 years of coding experience and a passion for learning. Although I have</tspan>
        <tspan x="40" dy="20">no professional experience yet, I&apos;ve dedicated myself to mastering various programming languages</tspan>
        <tspan x="40" dy="20">and technologies. Eager to apply my skills and contribute to innovative projects in a professional setting.</tspan>
      </text>
    </g>
    
    <g className="animate" style={{animationDelay: '1.4s'}}>
      <text x="40" y="300" fontSize="24" fill="#fff">Skills</text>
      <rect x="40" y="310" width="720" height="2" fill="#4169E1"/>
      {[
        { skill: "Python / Django", width: 200 },
        { skill: "JavaScript / NextJS", width: 180 },
        { skill: "Artificial Intelligence", width: 160 },
        { skill: "Flutter / Android", width: 150 },
        { skill: "AWS / Docker", width: 140 },
        { skill: "Git / Github", width: 120 }
      ].map((item, index) => (
        <g key={index}>
          <text 
            x={index % 2 === 0 ? 40 : 420} 
            y={340 + Math.floor(index / 2) * 40} 
            fontSize="16" 
            fill="#B0C4DE"
          >
            {item.skill}
          </text>
          <rect 
            x={index % 2 === 0 ? 40 : 420} 
            y={350 + Math.floor(index / 2) * 40} 
            width={item.width} 
            height="10" 
            rx="5" 
            fill="#4169E1"
          />
        </g>
      ))}
    </g>
    
    <g className="animate" style={{animationDelay: '1.6s'}}>
      <text x="40" y="500" fontSize="24" fill="#fff">Projects and Contributions</text>
      <rect x="40" y="510" width="720" height="2" fill="#4169E1"/>
      <text x="40" y="540" fontSize="18" fill="#fff">Personal Project: Expense and Income Management Application</text>
      <text x="40" y="565" fontSize="14" fill="#B0C4DE">August 2024</text>
      {[
        "Developed a full-stack expense and income management platform using Python/Django and Docker",
        "Implemented user authentication and linked the platform to a PostgreSQL database hosted on AWS",
        "Integrated dashboard interface and deployed the application on Heroku"
      ].map((text, index) => (
        <text key={index} x="60" y={595 + index * 25} fontSize="14" fill="#B0C4DE">• {text}</text>
      ))}
      
      <text x="40" y="685" fontSize="18" fill="#fff">Self-Study Project: Web Development Bootcamp</text>
      <text x="40" y="710" fontSize="14" fill="#B0C4DE">August 2022 - October 2022</text>
      {[
        "Completed an intensive online course covering full-stack web development",
        "Built multiple projects using HTML, CSS, JavaScript, and React",
        "Gained practical experience in responsive design and modern web technologies"
      ].map((text, index) => (
        <text key={index} x="60" y={740 + index * 25} fontSize="14" fill="#B0C4DE">• {text}</text>
      ))}
    </g>
    
    <g className="animate" style={{animationDelay: '1.8s'}}>
      <text x="40" y="860" fontSize="24" fill="#fff">Education</text>
      <rect x="40" y="870" width="720" height="2" fill="#4169E1"/>
      <text x="40" y="900" fontSize="18" fill="#fff">Engineering Technology Degree in Computer Science</text>
      <text x="40" y="925" fontSize="14" fill="#B0C4DE">Polythecnic School, 2023</text>
      <text x="40" y="960" fontSize="18" fill="#fff">Associate&apos;s Degree Physics / Chemestry</text>
      <text x="40" y="985" fontSize="14" fill="#B0C4DE">Faculty of Science and Technology, 2020</text>
    </g>
    
    <g className="animate" style={{animationDelay: '2s'}}>
      <text x="40" y="1040" fontSize="24" fill="#fff">Certifications</text>
      <rect x="40" y="1050" width="720" height="2" fill="#4169E1"/>
      <text x="40" y="1080" fontSize="16" fill="#B0C4DE">• Python Essential 1</text>
      <text x="40" y="1110" fontSize="16" fill="#B0C4DE">• Python Essential 2</text>
    </g>
  </svg>
);

export default ResumeBackground;