"use strict";

// No conservar la posición de scroll al recargar
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const printBtn = document.getElementById("printBtn");
const langToggle = document.getElementById("langToggle");

/* ---------- TRADUCCIONES COMPLETAS ---------- */
const translations = {
  en: {
    "scroll-hint": "More info below ↓",
    "topbar-role": "IT & Cybersecurity Specialist",
    "nav-about": "About",
    "nav-exp": "Experience",
    "nav-projects": "Projects",
    "nav-edu": "Education",
    "nav-contact": "Contact",
    "hero-role-full": "IT & Cybersecurity Specialist · Systems & Network Administration",
    "hero-tagline": "IT Specialist with over 9 years of professional experience in network security, system administration and CCTV/security environments. Strong expertise in Linux and Windows servers, database administration and vulnerability analysis, focused on delivering secure, stable and high-availability infrastructures.",
    "hero-exp": "💼 9+ years experience",
    "summary-title": "Professional Summary",
    "summary-desc": "IT Specialist with over 9 years of experience in network security, system administration and technical support. Strong background in configuring and managing Linux and Windows environments, CCTV systems and databases. Skilled in identifying vulnerabilities, designing secure architectures and implementing security controls for complex networks.",
    "exp-title": "Professional Experience",
    "job1-title": "IT Support Specialist",
    "job1-sub": "Admira Digital Signage · Barcelona, Spain",
    "job1-date": "2018 – Present",
    "job1-desc": "<ul><li>Supervised and provided remote support for the configuration and maintenance of Windows and Linux-based systems, ensuring ~99% system uptime across all installations.</li><li>Collaborated with on-site technicians to resolve display and network connectivity issues, achieving a ~15% faster resolution time for reported incidents.</li><li>Developed troubleshooting guides and documentation that improved support efficiency, leading to a ~25% increase in first-call resolution rates.</li><li>Conducted regular system audits to identify potential issues, contributing to a ~30% decrease in recurring technical problems.</li></ul>",
    "job2-title": "QA Tester & CCTV Technical Support Engineer",
    "job2-sub": "Data Link & Partizan-CCTV · Ivano-Frankivsk, Ukraine",
    "job2-desc": "<ul><li>Conducted software testing and integration for CCTV and security systems, ensuring stability and compatibility across multiple environments.</li><li>Provided remote guidance to on-site technicians in more than 140 countries for installation and configuration of CCTV cameras, DVRs and NVRs.</li><li>Ensured seamless integration with third-party systems while maintaining strict security protocols, achieving zero security breaches during the testing period.</li></ul>",
    "job3-title": "CEO & Founder",
    "job3-sub": "Cyber Network Café Lounge & GSM Repair Shop · Algeria",
    "job3-desc": "<ul><li>Managed daily operations including network setup, computer maintenance, and customer support in a high-traffic environment.</li><li>Expanded service portfolio to include GSM/mobile phone repair, flashing and unlocking services.</li><li>Maintained a customer satisfaction rate of around 90% while leading a team of 5 technicians.</li></ul>",
    "job4-title": "IT Intern – Municipal Department",
    "job4-sub": "City Hall · Algeria",
    "job4-desc": "<ul><li>Completed a 6-month end-of-study internship focused on network infrastructure and software development.</li><li>Installed and configured a wired RJ45 network for 40 workstations, improving connectivity and increasing network speed by ~25%.</li><li>Managed Windows Server to ensure 99.9% uptime and support for more than 30 users.</li><li>Developed an administrative management application using Delphi 5 (Pascal), reducing document processing time by ~40%.</li><li>Delivered training sessions to 10 staff members on the new system, improving productivity and decreasing document retrieval time by ~30%.</li></ul>",
    "projects-title": "Projects & Hands-On Work",
    "proj1-title": "Home Lab for Network & Cybersecurity",
    "proj1-sub": "Self-hosted environment",
    "proj1-desc": "Design and maintenance of a home lab using Linux, Windows Server, virtual machines and network devices for practicing vulnerability assessment, incident response and secure configurations. Includes experiments with firewalls, VPNs, IDS/IPS and log analysis.",
    "proj2-title": "CCTV & Video Surveillance Solutions",
    "proj2-sub": "Partizan & client projects",
    "proj2-desc": "Involvement in deployment and support of video surveillance and access control solutions for international customers, focusing on secure remote access, ONVIF/RTSP integration and performance optimization in distributed environments.",
    "proj3-title": "Automation & Scripting",
    "proj3-sub": "Python · Bash · Web",
    "proj3-desc": "Development of small tools and scripts (Python, Bash, JavaScript) to automate routine tasks such as log parsing, backup operations, simple monitoring and data extraction, published progressively on GitHub.",
    "contact-title": "Contact",
    "contact-loc": "Location",
    "contact-phone": "Phone",
    "skills-title": "Technical Skills",
    "skill-cat1": "Networks & Security",
    "skill-cat2": "Systems & Virtualization",
    "skill-cat3": "Programming & Databases",
    "skill-cat4": "Cybersecurity",
    "lang-title": "Languages",
    "lang-list": "<li><strong>Arabic:</strong> Native</li><li><strong>French:</strong> B2</li><li><strong>Spanish:</strong> B2</li><li><strong>English:</strong> B1</li><li><strong>Ukrainian:</strong> B1</li><li><strong>Catalan:</strong> A2</li><li><strong>Russian:</strong> A2</li>",
    "extra-title": "Additional Information",
    "extra-list": "<li>Military service completed in Algeria (2011–2012).</li><li>Driving licenses: Algeria, Ukraine, Spain (Category B).</li>",
    "edu-title": "Education",
    "edu1-title": "Cybersecurity and Ethical Hacking – IFCD072PO (300h)",
    "edu1-desc": "Official 300-hour program certified by <strong>SEPE</strong>. Focused on <strong>ethical hacker activities</strong>, including advanced scanning techniques, <strong>system exploitation</strong>, and network auditing. Covers Linux/Windows security, <strong>vulnerability assessment</strong>, and wireless auditing.",
    "edu2-title": "Master in Computer Security & Computer Security Auditor",
    "edu3-title": "Level 3 Professional Certificate – IFCD0111",
    "edu3-sub": "Programming in Structured Languages for Management Applications (700 hours)",
    "edu4-title": "Level 3 Professional Certificate · University International Diploma (DQ-CLEA)",
    "edu4-sub": "(IFCT0310) Database Administration (570 hours)",
    "edu5-title": "Higher Degree in Systems and Network Administration",
    "edu6-title": "Bachelor’s Degree in IT Management",
    "cert-title": "Certifications & Official Diplomas",
    "cert-cisco": "Cisco Certified Support Technician (CCST) – Cybersecurity",
    "cert-spain": "Spain Official Diplomas (SEPE / Generalitat de Catalunya)",
    "cert-list": "<ul><li>(IFCT100PO) Security of Computer and Communication Systems – 150h</li><li>IFCD0153 – Junior JavaScript Programmer with AI – 160h</li><li>Cybersecurity in Logistics and Transportation – 150h</li><li>(IFCT083PO) Programming of Mobile Devices – 150h</li><li>(ADGN018PO) Electronic Banking and Electronic Payments – 120h</li><li>(IFCT0050) Cibersecurity in Advanced Industry 4.0 (OT) – 120h</li><li>(IFCT185PO) Linux Server Administration – 100h</li><li>(FCT0109_3_MF0488) Computer Security Incident Management – 90h</li><li>(FCT0109_3_MF0489) Secure Data Access and Transmission – 60h</li><li>(FCT0109_3_MF0490) Management of Services in the Computer System – 90h</li><li>(IFCT101PO) Computer Security Planning in the Company – 80h</li><li>ADGD387PO – Data Protection Officer (DPO) – 60h</li><li>(UC0959_262) Cybersecurity Prevention and Protection – 60h</li><li>Big Data – 60h</li><li>IFCD042PO Cloud Computing (Azure, Linux) – 30h</li><li>IFCM002PO Cloud Computing – 30h</li></ul>",
    "train-title": "Additional Training",
    "train-cisco": "<ul><li>Cybersecurity Basics 1.1 & Cyber Security Essentials 1.1</li><li>Network Defense, Ethical Hacker, Cybersecurity EOC</li><li>Cisco Networking Essentials & CCNAv7: Bridging</li><li>Introduction to IoT, Introduction to Packet Tracer</li><li>JavaScript Essentials, PCAP: Programming Essentials in Python</li></ul>",
    "train-linkedin": "<ul><li>Programming Fundamentals: Databases, Relational Database Design</li><li>PostgreSQL, MySQL & SQL Server (Essentials & Advanced)</li><li>Networking and Security, Security Risk Management, Practical Cybersecurity</li><li>Windows Server Administration & Network Fundamentals</li></ul>",
    "train-coursera-title": "Coursera & Other Providers",
    "train-coursera-desc": "<ul><li>Introduction to Security Principles in Cloud Computing (Google Cloud)</li><li>Microsoft Certified: Azure Fundamentals (Simplilearn)</li><li>IBM Ethical Hacking Essentials (EC-Council)</li><li>Google Cybersecurity Professional content: Linux, SQL, risk management and automation with Python</li><li>Managing, Securing & Administering Linux in Cloud/DevOps contexts (LearnQuest)</li><li>Full-Stack Web Development (React, Angular, NodeJS, Bootstrap, MongoDB)</li><li>Data Analytics Essentials, Python for Data Science & Machine Learning (IBM/others)</li></ul>",
    "train-intern-title": "Internship & Technical Courses",
    "train-intern-desc": "<ul><li>Intelligent video surveillance and access control systems – Partizan Security Ltd, Kyiv, Ukraine (50h)</li><li>GSM maintenance course – mobile hardware & software repair, GEI Sétif, Algeria (100h)</li></ul>",
    "footer-update": "Last update · 2026",
    "footer-top": "Back to top ↑"
  },
  es: {
    "scroll-hint": "Más información abajo ↓",
    "topbar-role": "Especialista en IT y Ciberseguridad",
    "nav-about": "Sobre mí",
    "nav-exp": "Experiencia",
    "nav-projects": "Proyectos",
    "nav-edu": "Educación",
    "nav-contact": "Contacto",
    "hero-role-full": "Especialista en IT y Ciberseguridad · Administración de Sistemas y Redes",
    "hero-tagline": "Especialista en IT con más de 9 años de experiencia profesional en seguridad de redes, administración de sistemas y entornos CCTV. Amplia experiencia en servidores Linux y Windows, administración de bases de datos y análisis de vulnerabilidades, enfocado en ofrecer infraestructuras seguras, estables y de alta disponibilidad.",
    "hero-exp": "💼 +9 años de experiencia",
    "summary-title": "Resumen Profesional",
    "summary-desc": "Especialista en IT con más de 9 años de experiencia en seguridad de redes, administración de sistemas y soporte técnico. Sólida formación en la configuración y gestión de entornos Linux y Windows, sistemas CCTV y bases de datos. Experto en identificación de vulnerabilidades, diseño de arquitecturas seguras e implementación de controles de seguridad para redes complejas.",
    "exp-title": "Experiencia Profesional",
    "job1-title": "Especialista en Soporte IT",
    "job1-sub": "Admira Digital Signage · Barcelona, España",
    "job1-date": "2018 – Actualidad",
    "job1-desc": "<ul><li>Supervisión y soporte remoto para la configuración y mantenimiento de sistemas basados en Windows y Linux, asegurando un 99% de tiempo de actividad.</li><li>Colaboración con técnicos in-situ para resolver problemas de conectividad de red y visualización, logrando una resolución un 15% más rápida.</li><li>Desarrollo de guías de resolución de problemas y documentación que mejoró la eficiencia del soporte, aumentando un 25% la resolución en la primera llamada.</li><li>Auditorías regulares del sistema para identificar problemas potenciales, contribuyendo a una disminución del 30% en problemas técnicos recurrentes.</li></ul>",
    "job2-title": "Ingeniero de Soporte Técnico CCTV y QA Tester",
    "job2-sub": "Data Link & Partizan-CCTV · Ivano-Frankivsk, Ucrania",
    "job2-desc": "<ul><li>Pruebas de software e integración para sistemas de seguridad y CCTV, garantizando estabilidad y compatibilidad.</li><li>Guía remota a técnicos en más de 140 países para la instalación y configuración de cámaras CCTV, DVRs y NVRs.</li><li>Integración fluida con sistemas de terceros manteniendo protocolos de seguridad estrictos, logrando cero brechas de seguridad durante las pruebas.</li></ul>",
    "job3-title": "CEO y Fundador",
    "job3-sub": "Cyber Network Café Lounge & Tienda de Reparación GSM · Argelia",
    "job3-desc": "<ul><li>Gestión de operaciones diarias incluyendo configuración de red, mantenimiento de ordenadores y soporte al cliente en un entorno de alto tráfico.</li><li>Ampliación del catálogo de servicios para incluir reparación, flasheo y liberación de teléfonos móviles/GSM.</li><li>Mantenimiento de una tasa de satisfacción del cliente del 90% liderando un equipo de 5 técnicos.</li></ul>",
    "job4-title": "Pasante de IT – Departamento Municipal",
    "job4-sub": "Ayuntamiento · Argelia",
    "job4-desc": "<ul><li>Prácticas de final de carrera de 6 meses enfocadas en infraestructura de red y desarrollo de software.</li><li>Instalación y configuración de una red cableada RJ45 para 40 estaciones de trabajo, mejorando la velocidad en un 25%.</li><li>Gestión de Windows Server para asegurar un tiempo de actividad del 99.9% para más de 30 usuarios.</li><li>Desarrollo de una aplicación de gestión administrativa usando Delphi 5 (Pascal), reduciendo el tiempo de procesamiento de documentos en un 40%.</li><li>Formación a 10 empleados sobre el nuevo sistema, mejorando la productividad y disminuyendo el tiempo de recuperación de documentos en un 30%.</li></ul>",
    "projects-title": "Proyectos y Trabajo Práctico",
    "proj1-title": "Laboratorio Doméstico de Redes y Ciberseguridad",
    "proj1-sub": "Entorno auto-alojado",
    "proj1-desc": "Diseño y mantenimiento de un laboratorio usando Linux, Windows Server, máquinas virtuales y dispositivos de red para practicar evaluación de vulnerabilidades, respuesta a incidentes y configuraciones seguras. Incluye experimentos con firewalls, VPNs, IDS/IPS y análisis de logs.",
    "proj2-title": "Soluciones de CCTV y Videovigilancia",
    "proj2-sub": "Proyectos Partizan y clientes",
    "proj2-desc": "Participación en el despliegue y soporte de soluciones de videovigilancia y control de acceso para clientes internacionales, con enfoque en acceso remoto seguro, integración ONVIF/RTSP y optimización de rendimiento.",
    "proj3-title": "Automatización y Scripting",
    "proj3-sub": "Python · Bash · Web",
    "proj3-desc": "Desarrollo de pequeñas herramientas y scripts (Python, Bash, JavaScript) para automatizar tareas rutinarias como análisis de logs, copias de seguridad, monitorización simple y extracción de datos, publicados en GitHub.",
    "contact-title": "Contacto",
    "contact-loc": "Ubicación",
    "contact-phone": "Teléfono",
    "skills-title": "Habilidades Técnicas",
    "skill-cat1": "Redes y Seguridad",
    "skill-cat2": "Sistemas y Virtualización",
    "skill-cat3": "Programación y Bases de Datos",
    "skill-cat4": "Ciberseguridad",
    "lang-title": "Idiomas",
    "lang-list": "<li><strong>Árabe:</strong> Nativo</li><li><strong>Francés:</strong> B2</li><li><strong>Español:</strong> B2</li><li><strong>Inglés:</strong> B1</li><li><strong>Ucraniano:</strong> B1</li><li><strong>Catalán:</strong> A2</li><li><strong>Ruso:</strong> A2</li>",
    "extra-title": "Información Adicional",
    "extra-list": "<li>Servicio militar completado en Argelia (2011–2012).</li><li>Carné de conducir: Argelia, Ucrania, España (Categoría B).</li>",
    "edu-title": "Educación",
    "edu1-title": "Ciberseguridad y Hackeo Ético – IFCD072PO (300h)",
    "edu1-desc": "Programa oficial de 300 horas certificado por el <strong>SEPE</strong>. Enfocado en <strong>actividades de hacker ético</strong>, incluyendo técnicas avanzadas de escaneo, <strong>explotación de sistemas</strong> y auditoría de redes. Cubre seguridad Linux/Windows, <strong>evaluación de vulnerabilidades</strong> y auditoría inalámbrica.",
    "edu2-title": "Máster en Seguridad Informática y Auditor de Seguridad",
    "edu3-title": "Certificado Profesional Nivel 3 – IFCD0111",
    "edu3-sub": "Programación en Lenguajes Estructurados para Aplicaciones de Gestión (700 horas)",
    "edu4-title": "Certificado Profesional Nivel 3 · Diploma Internacional (DQ-CLEA)",
    "edu4-sub": "(IFCT0310) Administración de Bases de Datos (570 horas)",
    "edu5-title": "Grado Superior en Administración de Sistemas y Redes",
    "edu6-title": "Licenciatura en Gestión Informática",
    "cert-title": "Certificaciones y Diplomas Oficiales",
    "cert-cisco": "Cisco Certified Support Technician (CCST) – Ciberseguridad",
    "cert-spain": "Diplomas Oficiales España (SEPE / Generalitat de Catalunya)",
    "cert-list": "<ul><li>(IFCT100PO) Seguridad de Sistemas Informáticos y de Comunicación – 150h</li><li>IFCD0153 – Programador Junior JavaScript con IA – 160h</li><li>Ciberseguridad en Logística y Transporte – 150h</li><li>(IFCT083PO) Programación de Dispositivos Móviles – 150h</li><li>(ADGN018PO) Banca Electrónica y Pagos Electrónicos – 120h</li><li>(IFCT0050) Ciberseguridad en Industria Avanzada 4.0 (OT) – 120h</li><li>(IFCT185PO) Administración de Servidores Linux – 100h</li><li>(FCT0109_3_MF0488) Gestión de Incidentes de Seguridad – 90h</li><li>(FCT0109_3_MF0489) Acceso y Transmisión de Datos Seguros – 60h</li><li>(FCT0109_3_MF0490) Gestión de Servicios en el Sistema Informático – 90h</li><li>(IFCT101PO) Planificación de la Seguridad Informática – 80h</li><li>ADGD387PO – Delegado de Protección de Datos (DPO) – 60h</li><li>(UC0959_262) Prevención y Protección en Ciberseguridad – 60h</li><li>Big Data – 60h</li><li>IFCD042PO Cloud Computing (Azure, Linux) – 30h</li><li>IFCM002PO Cloud Computing – 30h</li></ul>",
    "train-title": "Formación Adicional",
    "train-cisco": "<ul><li>Conceptos Básicos de Ciberseguridad 1.1 y Essentials 1.1</li><li>Defensa de Red, Hacker Ético, Evaluación EOC</li><li>Networking Essentials y CCNAv7: Bridging</li><li>Introducción a IoT, Packet Tracer</li><li>JavaScript Essentials, PCAP: Essentials en Python</li></ul>",
    "train-linkedin": "<ul><li>Fundamentos de Programación: Bases de Datos, Diseño Relacional</li><li>PostgreSQL, MySQL y SQL Server (Esencial y Avanzado)</li><li>Redes y Seguridad, Gestión de Riesgos, Ciberseguridad Práctica</li><li>Administración de Windows Server y Fundamentos de Red</li></ul>",
    "train-coursera-title": "Coursera y Otros Proveedores",
    "train-coursera-desc": "<ul><li>Introducción a Principios de Seguridad en Cloud (Google Cloud)</li><li>Microsoft Certified: Azure Fundamentals (Simplilearn)</li><li>IBM Ethical Hacking Essentials (EC-Council)</li><li>Contenido Google Cybersecurity Professional: Linux, SQL, riesgos y Python</li><li>Gestión y Administración de Linux en Cloud/DevOps (LearnQuest)</li><li>Desarrollo Web Full-Stack (React, Angular, NodeJS, MongoDB)</li><li>Data Analytics Essentials, Python para Data Science (IBM)</li></ul>",
    "train-intern-title": "Prácticas y Cursos Técnicos",
    "train-intern-desc": "<ul><li>Sistemas inteligentes de videovigilancia y control de acceso – Partizan Security Ltd, Kiev (50h)</li><li>Curso mantenimiento GSM – reparación hardware y software móvil, Argelia (100h)</li></ul>",
    "footer-update": "Última actualización · 2026",
    "footer-top": "Volver arriba ↑"
  }
};

/* ---------- UTILIDADES SEGURIDAD E IDIOMA ---------- */
const SAFE_ID_REGEX = /^[A-Za-z0-9_-]+$/;
function getSafeTargetId(fromHref) {
  if (typeof fromHref !== "string" || !fromHref.startsWith("#")) return null;
  const id = fromHref.slice(1);
  return SAFE_ID_REGEX.test(id) ? id : null;
}

let currentLang = localStorage.getItem("cv-lang") || "en";
function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  localStorage.setItem("cv-lang", lang);
}

/* ---------- TEMA OSCURO/CLARO ---------- */
function applyTheme(theme) {
  const safeTheme = theme === "light" ? "light" : "dark";
  if (safeTheme === "light") root.classList.add("light");
  else root.classList.remove("light");
  localStorage.setItem("cv-theme", safeTheme);
}

/* ---------- EVENTOS PRINCIPALES ---------- */
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = root.classList.contains("light");
    applyTheme(isLight ? "dark" : "light");
  });
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    applyLanguage(currentLang);
  });
}

if (printBtn) {
  printBtn.addEventListener("click", () => window.print());
}

/* ---------- EFECTOS VISUALES (RIPPLE) ---------- */
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.button !== 0) return;
    const rect = btn.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;
    const ripple = document.createElement("span");
    ripple.classList.add("btn-ripple");
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - rect.left - radius}px`;
    ripple.style.top = `${e.clientY - rect.top - radius}px`;
    const oldRipple = btn.querySelector(".btn-ripple");
    if (oldRipple) oldRipple.remove();
    btn.appendChild(ripple);
  });
});

/* ---------- FONDO DINÁMICO (RATÓN) ---------- */
(() => {
  let pmTicking = false;
  let pmLast = { x: 50, y: 50 };
  function pmUpdate() {
    root.style.setProperty("--mouse-x", `${pmLast.x}%`);
    root.style.setProperty("--mouse-y", `${pmLast.y}%`);
    pmTicking = false;
  }
  window.addEventListener("pointermove", (e) => {
    pmLast.x = (e.clientX / window.innerWidth) * 100;
    pmLast.y = (e.clientY / window.innerHeight) * 100;
    if (!pmTicking) {
      pmTicking = true;
      window.requestAnimationFrame(pmUpdate);
    }
  }, { passive: true });
})();

/* ---------- REVEAL ON SCROLL ---------- */
(function revealOnScroll() {
  const elements = document.querySelectorAll(".hero, .section, .column-side .card, .layout-full .card");
  if (!("IntersectionObserver" in window) || !elements.length) return;
  elements.forEach((el) => el.classList.add("reveal"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -10% 0px" });
  elements.forEach((el) => observer.observe(el));
})();

/* ---------- NAVEGACIÓN Y ACTIVE LINKS ---------- */
const navLinks = document.querySelectorAll('.topbar-nav a[href^="#"]');
if (navLinks.length) {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (e.button !== 0 || e.ctrlKey || e.metaKey) return;
      const safeId = getSafeTargetId(link.getAttribute("href"));
      if (!safeId) return;
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      if (safeId === "sobre-mi") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(safeId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ---------- PARALLAX / TILT CARDS ---------- */
(function cardParallax() {
  const cards = document.querySelectorAll(".card");
  const intensity = 20;
  cards.forEach((card) => {
    let ticking = false;
    let lastEvent = null;
    const isExperience = card.id === "experiencia";
    const localIntensity = isExperience ? 50 : intensity;
    const maxRotate = isExperience ? 6 : 12;
    const translateY = isExperience ? -2 : -4;

    function update() {
      if (!lastEvent) return;
      const rect = card.getBoundingClientRect();
      const x = lastEvent.clientX - rect.left;
      const y = lastEvent.clientY - rect.top;
      let rotateX = Math.max(Math.min(((y - rect.height/2) / localIntensity) * -1, maxRotate), -maxRotate);
      let rotateY = Math.max(Math.min((x - rect.width/2) / localIntensity, maxRotate), -maxRotate);
      card.style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      ticking = false;
    }
    card.addEventListener("mousemove", (e) => {
      lastEvent = e;
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    });
    card.addEventListener("mouseleave", () => {
      lastEvent = null;
      card.style.transform = "translateY(0) rotateX(0deg) rotateY(0deg)";
    }, { passive: true });
  });
})();

/* ---------- BARRA DE PROGRESO DE SCROLL ---------- */
(function scrollProgress() {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  let ticking = false;
  function update() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    bar.style.width = progress + "%";
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();

/* ---------- INICIALIZACIÓN FINAL ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("cv-theme") || "dark");
  applyLanguage(currentLang);
  window.scrollTo(0, 0);
  if (navLinks.length) {
    navLinks.forEach(l => l.classList.remove("active"));
    navLinks[0].classList.add("active");
  }
});