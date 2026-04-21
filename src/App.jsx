import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css"; // CSS file import karna na bhoolein
import heroImg from "./assets/hero.png";
import Img from "./assets/image.png";
import i1 from "./assets/1.jpeg";
import i2 from "./assets/2.jpeg";
import i3 from "./assets/3.jpeg";
import i4 from "./assets/4.jpeg";
import i5 from "./assets/5.jpeg";
import i6 from "./assets/6.jpeg";
import i7 from "./assets/7.jpeg";
import i8 from "./assets/8.jpeg";
import i9 from "./assets/9.jpeg";
import i10 from "./assets/10.jpeg";
import i11 from "./assets/11.jpeg";
import i12 from "./assets/12.jpeg";
import i13 from "./assets/13.jpeg";
import i14 from "./assets/14.jpeg";
import i15 from "./assets/15.jpeg";
import i16 from "./assets/16.jpeg";
import i17 from "./assets/17.jpeg";
import BD from "./assets/bd.png";
import p from "../public/Muhammad_Sameer_Abbasi.pdf";
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState("");

  const fullText =
    "Software Engineer | Full Stack Developer | React Native | Mobile | Python | ASP.NET | FastAPI ";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "GEO PHOTO TAGGING WITH WINDOW INTERFACE",
      short: "AI-powered multi-platform system",
      image: heroImg,
      images: [
        i1,
        i2,
        i3,
        i4,
        i5,
        i6,
        i7,
        i8,
        i9,
        i10,
        i11,
        i12,
        i13,
        i14,
        i15,
        i16,
        i17,
      ],
      stack: [
        "Full Stack Development",
        "FastAPI",
        "DeepFace",
        "React Native",
        "C#",
        "Python",
        "Full Stack",
      ],
      details: [
        "AI-powered Multi-platform architecture (Mobile, Desktop, and Web) for unified photo management",
        "Face Recognition using DeepFace AI to generate facial embeddings and automate person tagging",
        "Intelligent metadata engine for custom tagging based on Location, Event, Date, and Person",
        "Real-time cross-platform synchronization between Windows (C#) and Mobile (React Native/Flutter)",
        "Advanced Image Processing including duplicate detection, prevention, and smart clustering",
        "High-performance Backend built with FastAPI for scalable API design and image processing",
        "Optimized Relational Database structure for complex filtering and relationship management",
        "Comprehensive search functionality leveraging metadata and AI tags for instant photo retrieval",
      ],
    },
    {
      title: "CASH AND CARY INVENTORY SYSTEM",
      short: "Java-based retail system",
      image: heroImg,
      images: [],
      stack: ["Java", "SQL", "JDBC"],
      details: [
        "Optimized inventory tracking using efficient Array-based data management",
        "Customer Processing System using FIFO Queues",
        "Automated Billing & Invoicing with real-time price calculation",
        "Robust Stock Management engine with reorder points",
      ],
    },
    {
      title: "BLOOD DONATION MANAGEMENT SYSTEM",
      short: "Java-based Blood Bank System",
      image: heroImg,
      images: [],
      stack: ["Java", "MySQL", "DSA", "JDBC"],
      details: [
        "Robust donor tracking and request handling system",
        "Intelligent donor eligibility engine with donation interval validation",
        "FIFO Queue-based request handling",
        "Binary Search Tree for efficient record retrieval",
        "Multi-bank real-time blood inventory management",
        "Persistent MySQL data layer",
      ],
    },
    {
      title: "MEDICAL STORE MANAGEMENT SYSTEM",
      short: "C# Desktop Pharmacy System",
      image: heroImg, // apni image variable yahan lagana
      images: [],
      stack: ["C#", "Windows Forms", "SQL Server", "ADO.NET"],
      details: [
        "Full-featured pharmacy management system for handling medicines, billing, and stock",
        "Real-time inventory tracking with quantity management and expiry date monitoring",
        "Automated billing and invoicing system with dynamic price calculation",
        "Efficient database integration using SQL Server with ADO.NET",
        "Search and filtering functionality for quick medicine lookup",
        "Low stock and expiry alerts for better inventory control",
        "User-friendly desktop interface for managing medicines, customers, and suppliers",
        "Optimized data handling for fast and reliable operations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden font-sans">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_10px_#38bdf8] opacity-20 animate-[glowFloat_3s_infinite_ease-in-out]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar - Glassmorphism */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-[#030014]/80 backdrop-blur-2xl border-b border-white/10">
        <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
          Muhammad Sameer Abbasi
        </h1>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-[#38bdf8] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#38bdf8] transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#38bdf8] transition-colors"
          >
            Projects
          </a>
          <a href="#contact" className="hover:text-[#38bdf8] transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[100vh] flex items-center justify-center relative overflow-hidden px-6">
        {/* Background subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20 text-center lg:text-left">
          {/* Left - Text Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-6 bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#38bdf8] to-[#c084fc] bg-clip-text text-transparent">
                  Sameer
                </span>
              </h2>

              <p className="text-[#38bdf8] text-2xl md:text-3xl font-light tracking-[3px] uppercase mb-8 min-h-[3.5rem]">
                {typedText}
              </p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <a
                href="/Muhammad_Sameer_Abbasi.pdf" // Path to your PDF
                download="Muhammad_Sameer_Abbasi_CV.pdf" // Name when downloading
                className="px-10 py-4 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] hover:from-[#22d3ee] hover:to-[#a78bfa]
               text-black font-bold text-lg rounded-2xl transition-all duration-300 
               shadow-2xl shadow-cyan-500/40 hover:scale-105 active:scale-95 inline-block text-center"
              >
                Download CV
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-10 py-4 border-2 border-white/40 hover:border-white hover:bg-white/10 
               font-semibold text-lg rounded-2xl transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse" />

              {/* Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={heroImg} // ← Make sure you imported heroImg
                  alt="Sameer Abbasi"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Subtle border accent */}
              <div className="absolute -inset-1 border border-cyan-400/30 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </section>
      {/* About */}
      <section id="about" className="py-24 px-8 max-w-5xl mx-auto">
        {" "}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
          About ME
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed text-justify">
          I am a passionate software developer who enjoys building real-world,
          scalable, and intelligent systems. My journey in programming started
          with learning core concepts of Object-Oriented Programming (OOP) and
          Data Structures, and over time I expanded my skills into full-stack
          and multi-platform development. I have worked on a variety of academic
          and personal projects that helped me strengthen my problem-solving and
          system design skills. These include a Cash & Carry Inventory System in
          Java, a Blood Donation Management System with database integration,
          and a Distributed Chat System using TCP sockets with client-server
          architecture. These projects gave me strong hands-on experience in
          queues, linked lists, binary search trees, and real-time system
          communication. Alongside backend and system-level development, I also
          explored modern application development using React Native, Flutter,
          and C# desktop applications, where I built cross-platform and desktop
          interfaces connected to centralized backend systems. In my final year
          project, I am working on an advanced Geo Photo Tagging System that
          integrates AI-based face recognition (DeepFace), image metadata
          tagging, duplicate detection, and multi-platform synchronization using
          a Python FastAPI backend and multiple frontends (mobile + desktop).
          This project reflects my interest in combining AI with practical
          software solutions. I also have experience working with APIs,
          SQL/NoSQL databases (MySQL, SQL Server, SQLite), and backend systems
          using Python (FastAPI). I enjoy connecting different technologies
          together to build complete end-to-end systems. Currently, I am
          continuously improving my skills in backend architecture, AI
          integration, and modern frontend frameworks, with a focus on writing
          clean, efficient, and scalable code. My goal is to grow as a software
          engineer who builds impactful products that solve real-world problems.
          {/* Paste your full about text here - same as before */}
        </p>
      </section>
      {/* Education */}
      <section id="education" className="py-24 px-8 bg-black/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
            {/* Glow Effect */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Icon */}
              <div className="text-7xl flex-shrink-0">🎓</div>

              {/* Main Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                  Bachelor of Science in Software Engineering (BSSE)
                </h3>

                <p className="text-[#38bdf8] text-2xl mt-3 font-medium">
                  ARID AGRICULTURE UNIVERSITY RAWALPINDI
                </p>

                <span className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-bold tracking-wider rounded-full">
                  2022 — 2026
                </span>

                {/* Description */}
                <p className="mt-10 text-slate-300 text-[17px] leading-relaxed">
                  Focused on core software engineering principles, advanced
                  algorithm design, and full-stack system architecture. Gained
                  deep insights into Software Development Life Cycle (SDLC) and
                  modern engineering methodologies.
                </p>

                {/* Course Tags */}
                <div className="mt-12">
                  <p className="uppercase text-xs tracking-[2px] text-cyan-400 font-semibold mb-5">
                    Key Courses & Subjects
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Data Structures & Algorithms",
                      "Database Management",
                      "Software Architecture",
                      "Software Quality Assurance",
                      "Software Development Life Cycle",
                      "Operating Systems",
                      "Object Oriented Programming",
                      "Web & Mobile Development",
                      "Computer Networks",
                      "Artificial Intelligence",
                      "System Design",
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 
                             text-slate-300 hover:text-white rounded-2xl text-sm font-medium 
                             transition-all duration-300 cursor-default"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "💻 Languages",
                icon: "🛠️",
                tags: ["C#", "Java", "C++", "Python", "JavaScript", "SQL"],
              },
              {
                title: "📱 Mobile & Web",
                icon: "📲",
                tags: [
                  "React Native",
                  "Flutter (Intermediate)",
                  "React.js (Intermediate)",
                  "Android (Intermediate)",
                  "HTML",
                  "CSS",
                ],
              },
              {
                title: "⚙️ Backend & AI",
                icon: "🔧",
                tags: [
                  "FastAPI",
                  "ASP.NET",
                  "DeepFace",
                  "Image Processing",
                  "TCP Socket",
                ],
              },
              {
                title: "🧰 Tools & CS Fundamentals",
                icon: "⚡",
                tags: ["DSA", "OOP", "System Design", "Git/GitHub", "Figma"],
              },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 
                     hover:border-cyan-400/70 rounded-3xl p-10 md:p-12 overflow-hidden 
                     transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header */}
                <div className="flex items-center gap-5 mb-10">
                  <div className="text-4xl">{cat.icon}</div>
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-4">
                  {cat.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-7 py-4 bg-white/5 border border-white/10 rounded-2xl text-base font-medium 
                           text-slate-300 group-hover:text-white transition-all duration-300
                           hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 
                           hover:text-black hover:border-transparent hover:shadow-lg hover:shadow-cyan-500/30 
                           active:scale-95"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 
                          group-hover:w-full transition-all duration-700 rounded-b-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="py-24 px-8 bg-black/30">
        {" "}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400">{project.short}</p>
                <p className="text-purple-400 mt-6 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Details →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] w-full max-w-7xl h-[85vh] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Left - Gallery */}
              <div className="flex-1 bg-[#050505] p-8 overflow-y-auto border-r border-white/10">
                <h3 className="text-cyan-400 uppercase tracking-widest text-sm mb-6">
                  Project Screenshots
                </h3>
                <div className="flex flex-wrap gap-6 justify-center">
                  {selectedProject.images?.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt=""
                      className="w-full max-w-[45%] rounded-2xl border border-white/10 hover:border-cyan-400 transition-colors cursor-zoom-in"
                    />
                  ))}
                </div>
              </div>

              {/* Right - Details */}
              <div className="md:w-2/5 p-10 md:p-14 flex flex-col overflow-y-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-3xl text-white/70 hover:text-white"
                >
                  ✕
                </button>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>

                <div className="mt-10">
                  <p className="uppercase text-cyan-400 text-xs tracking-widest mb-4">
                    Technical Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-5 py-2 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 rounded-2xl text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <p className="uppercase text-cyan-400 text-xs tracking-widest mb-4">
                    Project Highlights
                  </p>
                  <ul className="space-y-4 text-slate-300">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-3xl mx-auto bg-white/5 border border-cyan-400/20 rounded-3xl p-16 text-center backdrop-blur-xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Get In touch
          </h2>
          <p className="text-slate-400 text-xl max-w-md mx-auto mb-12">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open!
          </p>

          <div className="space-y-6 mb-12 text-xl">
            <a
              href="mailto:emsa3112@gmail.com"
              className="block hover:text-cyan-400 transition-colors flex items-center justify-center gap-4"
            >
              📧 emsa3112@gmail.com
            </a>
            <a
              href="tel:+923045347562"
              className="block hover:text-cyan-400 transition-colors flex items-center justify-center gap-4"
            >
              📞 +92 304 5347562
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/sameer-abbasi-49497731b/"
              target="_blank"
              className="px-10 py-4 border border-white/30 hover:bg-white/10 rounded-2xl font-medium transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sameeri031"
              target="_blank"
              className="px-10 py-4 border border-white/30 hover:bg-white/10 rounded-2xl font-medium transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 border-t border-white/10">
        © 2026 Sameer
      </footer>
    </div>
  );
}
