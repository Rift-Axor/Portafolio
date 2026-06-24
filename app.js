(function () {
  'use strict';

  // ═══════════════════════════════════════════
  //  DATA
  // ═══════════════════════════════════════════

  var DATA = {
    es: {
      nav: { home: 'Inicio', about: 'Sobre Mí', projects: 'Proyectos', contact: 'Contacto' },
      hero: {
        title: 'Diseñando y Desarrollando Páginas y Aplicaciones Web de Alto Impacto',
        subtitle: 'Hola, soy Samuel Figueroa',
        description: 'Desarrollador Web y Programador Full-Stack de Colombia especializado en la creación de sitios web corporativos modernos, landing pages de alta conversión, e-commerce rápidos y aplicaciones web interactivas y escalables con código limpio y optimización SEO.',
        tagline: 'Desarrollador Web Profesional & Especialista Frontend',
        ctaProjects: 'Ver Proyectos',
        ctaContact: 'Contactar Mí',
        badge: 'Disponible para proyectos'
      },
      about: {
        title: 'Sobre Mí',
        subtitle: 'Conoce más sobre mi trayectoria, mi enfoque de desarrollo web y lo que me apasiona construir para la web moderna.',
        journeyTitle: 'Mi Trayectoria',
        journeyText1: 'Mi interés por la tecnología comenzó a través del diseño y desarrollo de sitios web interactivos. Con el tiempo, me especialicé en la creación de soluciones para la web moderna, desde landing pages altamente optimizadas para captación de clientes hasta plataformas web empresariales más complejas y escalables.',
        journeyText2: 'Hoy en día, diseño sitios web modernos y funcionales utilizando las últimas tecnologías frontend, combinando mi educación en el último año de secundaria con un enfoque profesional de desarrollo de software para la web.',
        whatIDoTitle: 'Lo Que Hago',
        techTitle: 'Tecnologías & Herramientas',
        focusTitle: 'Foco de Atención Actual',
        approachTitle: 'Mi Enfoque',
        approachText: 'Me centro en construir experiencias web que no solo se vean increíbles, sino que también funcionen a la perfección, carguen rápido y estén totalmente optimizadas para motores de búsqueda (SEO). Diseño pensando en el usuario y en los objetivos del negocio.',
        philosophyTitle: 'Filosofía de Diseño y Desarrollo Web',
        focusOnTitle: 'En Qué Me Enfoco',
        avoidTitle: 'Qué Evito',
        principlesTitle: 'Principios de Diseño',
        portfolioTitle: 'Filosofía de este Portafolio',
        portfolioText: 'Tanto en el desarrollo web como en el diseño de interfaces, priorizo la claridad y la usabilidad sobre la complejidad excesiva. Prefiero sitios web limpios, con tipografías legibles, navegación intuitiva y una velocidad de carga excepcional, inspirados en los mejores estándares SaaS modernos.',
        beyondTitle: 'Más Allá del Código',
        beyondText1: 'Fuera de la creación de páginas web y aplicaciones, disfruto explorar la música, la programación creativa y la creación de contenido digital bajo la identidad de RiftAxor.',
        beyondText2: 'Me apasiona el emprendimiento digital y buscar formas innovadoras de ayudar a marcas y empresas a consolidar una presencia web profesional y robusta.',
        timelineTitle: 'Línea de Tiempo',
        ctaTitle: '¿Quieres llevar tu negocio a la web?'
      },
      projects: {
        title: 'Mis Proyectos',
        subtitle: 'Explora una selección de sitios web corporativos, landing pages de alta conversión y aplicaciones web construidas con tecnologías modernas.',
        filterAll: 'Todos',
        filterEdTech: 'Tecnología Educativa',
        filterResearch: 'Investigación de Mercados',
        filterWebDev: 'Desarrollo Web',
        filterCreative: 'Tecnología Creativa',
        viewCode: 'Ver Código',
        viewDemo: 'Ver Demo'
      },
      contact: {
        title: 'Contacto',
        subtitle: '¿Necesitas un sitio web corporativo, una landing page para tu producto o una aplicación a medida? Hablemos.',
        getInTouch: 'Ponte en Contacto',
        formName: 'Nombre Completo',
        formEmail: 'Correo Electrónico',
        formSubject: 'Asunto',
        formMessage: 'Mensaje',
        formSend: 'Enviar Mensaje',
        formSending: 'Enviando...',
        formSuccessTitle: '¡Mensaje Enviado!',
        formSuccessMsg: 'Gracias por ponerte en contacto. Me comunicaré contigo tan pronto como sea posible para hablar de tu proyecto web.',
        formSuccessClose: 'Cerrar',
        locationLabel: 'Ubicación',
        locationValue: 'Colombia 🇨🇴',
        languagesLabel: 'Idiomas',
        languagesValue: 'Español (Nativo) | Inglés (Fluido)'
      }
    },
    en: {
      nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
      hero: {
        title: 'Designing and Engineering High-Impact Websites and Web Apps',
        subtitle: "Hi, I'm Samuel Figueroa",
        description: "A Web Developer and Full-Stack Programmer from Colombia specializing in building modern corporate websites, high-converting landing pages, fast e-commerce stores, and interactive, scalable web applications with clean code and SEO optimization.",
        tagline: 'Professional Web Developer & Frontend Specialist',
        ctaProjects: 'View Projects',
        ctaContact: 'Contact Me',
        badge: 'Available for projects'
      },
      about: {
        title: 'About Me',
        subtitle: 'Learn about my background, web development approach, and what I love to build for the modern web.',
        journeyTitle: 'My Journey',
        journeyText1: 'My interest in technology began through designing and developing interactive websites. Over time, I specialized in modern web development, creating everything from highly optimized landing pages that drive leads to more complex and scalable enterprise web platforms.',
        journeyText2: 'Today, I craft modern, responsive, and functional websites utilizing the latest frontend tools, balancing my academic high school senior year with professional-grade web engineering.',
        whatIDoTitle: 'What I Do',
        techTitle: 'Technologies & Tools',
        focusTitle: 'Current Focus',
        approachTitle: 'My Approach',
        approachText: 'I focus on building web experiences that not only look incredible but also operate seamlessly, load fast, and are fully search engine optimized (SEO). I design with the user and business objectives in mind.',
        philosophyTitle: 'Web Design & Development Philosophy',
        focusOnTitle: 'What I Focus On',
        avoidTitle: 'What I Avoid',
        principlesTitle: 'Design Principles',
        portfolioTitle: 'Portfolio Philosophy',
        portfolioText: 'For both web development and user interface design, I prioritize clarity and usability over complex layouts. I prefer clean websites with crisp typography, simple navigation, and exceptional page speed, inspired by modern SaaS standards.',
        beyondTitle: 'Beyond Coding',
        beyondText1: 'Beyond building websites and applications, I enjoy exploring music, creative coding, and digital content creation under the RiftAxor identity.',
        beyondText2: "I'm highly interested in digital entrepreneurship and finding innovative ways to help brands and businesses build a robust and professional web presence.",
        timelineTitle: 'Timeline',
        ctaTitle: 'Ready to bring your business to the web?'
      },
      projects: {
        title: 'My Projects',
        subtitle: 'Explore a selection of corporate websites, high-converting landing pages, and interactive web applications built with modern stacks.',
        filterAll: 'All',
        filterEdTech: 'Educational Tech',
        filterResearch: 'Market Research',
        filterWebDev: 'Web Dev',
        filterCreative: 'Creative Tech',
        viewCode: 'View Code',
        viewDemo: 'View Demo'
      },
      contact: {
        title: 'Contact',
        subtitle: "Do you need a corporate website, a landing page for your product, or a custom web app? Let's talk.",
        getInTouch: 'Get in Touch',
        formName: 'Full Name',
        formEmail: 'Email Address',
        formSubject: 'Subject',
        formMessage: 'Message',
        formSend: 'Send Message',
        formSending: 'Sending...',
        formSuccessTitle: 'Message Sent!',
        formSuccessMsg: 'Thank you for reaching out. I will get back to you as soon as possible to discuss your web project.',
        formSuccessClose: 'Close',
        locationLabel: 'Location',
        locationValue: 'Colombia 🇨🇴',
        languagesLabel: 'Languages',
        languagesValue: 'Spanish (Native) | English (Fluent)'
      }
    }
  };

  var WHAT_I_DO = {
    es: [
      { icon: 'laptop', title: 'Desarrollo Web & Páginas Modernas', description: 'Diseño y desarrollo de sitios web corporativos de alto impacto, landing pages optimizadas para ventas, e-commerce rápidos y aplicaciones interactivas con SEO de primer nivel.' },
      { icon: 'graduation-cap', title: 'Tecnología Educativa', description: 'Sistemas de gestión académica personalizados, portales de calificaciones y plataformas web interactivas para el aprendizaje.' },
      { icon: 'bar-chart-3', title: 'Soluciones de Investigación', description: 'Plataformas de encuestas avanzadas en la web, captura segura de datos, tabulación automática e informes interactivos.' },
      { icon: 'music', title: 'Tecnología Creativa', description: 'Proyectos web de experimentación de audio, sintetizadores interactivos en el navegador y utilidades digitales.' }
    ],
    en: [
      { icon: 'laptop', title: 'Web Development & Modern Sites', description: 'Engineering high-impact corporate websites, high-converting landing pages, fast e-commerce stores, and highly interactive applications with advanced SEO.' },
      { icon: 'graduation-cap', title: 'Educational Technology', description: 'Custom academic portals, grading platforms, and supportive digital web tools for seamless teaching.' },
      { icon: 'bar-chart-3', title: 'Research Solutions', description: 'Web-based advanced survey platforms, secure data collection, automated statistical analysis, and interactive reporting.' },
      { icon: 'music', title: 'Creative Technology', description: 'Web-based audio experiments, interactive browser synthesizers, and artistic digital utilities.' }
    ]
  };

  var TECHNOLOGIES = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PHP', 'Python'] },
    { category: 'Database', items: ['MySQL', 'PostgreSQL', 'SQLite'] },
    { category: 'Ciberseguridad / Security', items: ['Nmap', 'Wireshark', 'Burp Suite', 'Kali Linux', 'Metasploit', 'OWASP Top 10'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'OBS Studio'] }
  ];

  var CURRENT_FOCUS = {
    es: ['Desarrollo Web Profesional', 'Optimización Frontend & SEO', 'Ciberseguridad & Pentesting Web', 'Tecnología Educativa', 'Diseño UI/UX Limpio y Moderno'],
    en: ['Professional Web Development', 'Frontend Optimization & SEO', 'Cybersecurity & Web Pentesting', 'Educational Technology', 'Clean & Modern UI/UX Design']
  };

  var CERTIFICATIONS = {
    es: [
      { title: 'Google Cybersecurity Professional Certificate', issuer: 'Google (Coursera)', date: '2025', skills: ['Análisis de Redes', 'Python para Seguridad', 'Linux para Seguridad', 'SQL', 'SIEM (Chronicle/Splunk)', 'Detección de Amenazas'], color: 'blue' },
      { title: 'Cisco Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: '2024', skills: ['Conceptos Básicos de Redes', 'Criptografía', 'Seguridad en la Nube', 'Análisis de Vulnerabilidades'], color: 'emerald' },
      { title: 'TryHackMe Pre-Security & Jr Penetration Tester Path', issuer: 'TryHackMe Academy', date: '2024', skills: ['Seguridad Web', 'Conceptos de Redes', 'Sistemas Operativos (Linux/Windows)', 'Escalada de Privilegios'], color: 'red' },
      { title: 'eLearnSecurity Junior Penetration Tester (eJPT) - En Progreso', issuer: 'INE Security', date: 'En Curso', skills: ['Metodología de Pentesting', 'Evaluación de Redes', 'Explotación', 'Ataques a Aplicaciones Web'], color: 'purple' }
    ],
    en: [
      { title: 'Google Cybersecurity Professional Certificate', issuer: 'Google (Coursera)', date: '2025', skills: ['Network Analysis', 'Python for Security', 'Linux for Security', 'SQL', 'SIEM (Chronicle/Splunk)', 'Threat Detection'], color: 'blue' },
      { title: 'Cisco Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: '2024', skills: ['Networking Basics', 'Cryptography', 'Cloud Security', 'Vulnerability Assessment'], color: 'emerald' },
      { title: 'TryHackMe Pre-Security & Jr Penetration Tester Path', issuer: 'TryHackMe Academy', date: '2024', skills: ['Web Security', 'Network Fundamentals', 'Operating Systems (Linux/Windows)', 'Privilege Escalation'], color: 'red' },
      { title: 'eLearnSecurity Junior Penetration Tester (eJPT) - In Progress', issuer: 'INE Security', date: 'In Progress', skills: ['Pentesting Methodology', 'Network Assessment', 'Exploitation', 'Web Application Attacks'], color: 'purple' }
    ]
  };

  var PHILOSOPHY = {
    es: {
      focusOn: ['Código limpio y mantenible', 'Soluciones prácticas para problemas reales', 'Interfaces intuitivas y amigables con el usuario', 'Sistemas escalables y bien organizados', 'Rendimiento y confiabilidad técnica', 'Aprendizaje continuo y mejora constante'],
      avoid: ['Complejidad innecesaria', 'Soluciones sobrediseñadas (overengineered)', 'Características superfluas sin propósito claro', 'Experiencias de usuario deficientes', 'Estructuras de código desorganizadas', 'Uso de tecnologías solo por moda o tendencia']
    },
    en: {
      focusOn: ['Clean and maintainable code', 'Practical solutions for real-world problems', 'User-friendly, intuitive interfaces', 'Scalable and organized systems', 'Performance and reliable engineering', 'Continuous learning and improvement'],
      avoid: ['Unnecessary complexity', 'Overengineered solutions', 'Features without a clear purpose', 'Poor user experience and friction', 'Disorganized and messy codebases', 'Technologies used only because they are trendy']
    }
  };

  var TIMELINE = {
    es: [
      { year: '2024', description: 'Desarrollo de proyectos de software académicos y experimentación técnica.' },
      { year: '2025', description: 'Especialización en plataformas de encuestas e investigación de mercados aplicadas.' },
      { year: '2026', description: 'Consolidación de portafolio, desarrollo profesional y diseño de arquitecturas Web full-stack.' }
    ],
    en: [
      { year: '2024', description: 'Academic and personal software projects, focusing on foundational structures.' },
      { year: '2025', description: 'Survey and market research platform development, handling real data sets.' },
      { year: '2026', description: 'Portfolio development, professional growth, and full-stack architecture design.' }
    ]
  };

  var PROJECTS = {
    es: [
      { id: 'p1', title: 'Stepwise', category: 'edtech', status: 'in-progress',
        description: 'Plataforma digital diseñada para ayudar a instituciones educativas a optimizar procesos académicos a través de tecnología moderna y accesible.',
        fullDescription: 'Stepwise proporciona herramientas para gestión estudiantil, registros académicos, calificaciones, seguimiento de asistencia y comunicación institucional, ayudando a las escuelas a mejorar la organización y la eficiencia.',
        features: ['Gestión estudiantil', 'Seguimiento de calificaciones', 'Monitoreo de asistencia', 'Reportes académicos', 'Herramientas administrativas', 'Comunicación institucional'],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
        image: 'images/StepWise.webp', demoUrl: 'https://stepwise-co.netlify.app', githubUrl: '' },
      { id: 'p2', title: 'Opiniona', category: 'research', status: 'in-progress',
        description: 'Plataforma de encuestas y feedback enfocada en recopilar opiniones, medir satisfacción y generar insights accionables.',
        fullDescription: 'Opiniona permite a las organizaciones crear encuestas, recopilar respuestas, analizar resultados y comprender mejor las perspectivas de sus audiencias a través de herramientas de reporte intuitivas.',
        features: ['Creación de encuestas', 'Recopilación de respuestas', 'Medición de satisfacción', 'Visualización de datos', 'Generación de reportes'],
        technologies: ['PHP', 'MySQL', 'JavaScript'],
        image: 'images/Opiniona.webp', demoUrl: '', githubUrl: '' },
      { id: 'p3', title: 'Canciones Terminal', category: 'creative', status: 'completed',
        description: 'Scripts Python que imprimen letras de canciones en la terminal con un efecto de máquina de escribir sincronizado al ritmo de la música.',
        fullDescription: 'Una colección de scripts en Python que replican un efecto estético de máquina de escribir en la terminal, letra por letra, sincronizado con fragmentos de canciones reales. Ideal para crear contenido visual atractivo para TikTok, Instagram Reels y YouTube Shorts.',
        features: ['Efecto de escritura letra por letra en terminal', 'Sincronización de tiempos con fragmentos de canciones', 'Códigos ANSI para resaltar texto sobre fondo oscuro', 'Estética limpia optimizada para grabaciones de pantalla', 'Scripts listos para ejecutar y personalizar'],
        technologies: ['Python', 'Terminal', 'ANSI'],
        image: 'images/CancionesTerminal.webp', demoUrl: 'https://www.tiktok.com/@riftaxor', githubUrl: 'https://github.com/RiftAxor/Canciones-Python' },
      { id: 'p4', title: 'FMI Landing Page', category: 'webdev', status: 'completed',
        description: 'Landing page corporativa de Figueroa Market Intelligence, empresa de inteligencia de mercado con sede en Bogotá.',
        fullDescription: 'Sitio web corporativo para Figueroa Market Intelligence (FMI), una firma de inteligencia de mercado que ayuda a organizaciones a comprender sus mercados y tomar decisiones estratégicas basadas en evidencia. El sitio presenta servicios de investigación, metodologías y generación de leads.',
        features: ['Diseño visual profesional con identidad de marca', 'Secciones de servicios y metodología', 'Integración de formularios de contacto', 'Optimización de rendimiento y SEO', 'Diseño responsivo para todos los dispositivos'],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'images/Fmi page.webp', demoUrl: 'https://figueroaintelligence.com', githubUrl: '' }
    ],
    en: [
      { id: 'p1', title: 'Stepwise', category: 'edtech', status: 'in-progress',
        description: 'Digital platform designed to help educational institutions streamline academic processes through modern and accessible technology.',
        fullDescription: 'Stepwise provides tools for student management, academic records, grading, attendance tracking, and institutional communication, helping schools improve organization and efficiency.',
        features: ['Student management', 'Grade tracking', 'Attendance monitoring', 'Academic reports', 'Administrative tools', 'Institutional communication'],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
        image: 'images/StepWise.webp', demoUrl: 'https://stepwise-co.netlify.app', githubUrl: '' },
      { id: 'p2', title: 'Opiniona', category: 'research', status: 'in-progress',
        description: 'A survey and feedback platform focused on collecting opinions, measuring satisfaction, and generating actionable insights.',
        fullDescription: 'Opiniona allows organizations to create surveys, gather responses, analyze results, and better understand the perspectives of their audiences through intuitive reporting tools.',
        features: ['Survey creation', 'Response collection', 'Satisfaction measurement', 'Data visualization', 'Report generation'],
        technologies: ['PHP', 'MySQL', 'JavaScript'],
        image: 'images/Opiniona.webp', demoUrl: '', githubUrl: '' },
      { id: 'p3', title: 'Canciones Terminal', category: 'creative', status: 'completed',
        description: 'Python scripts that print song lyrics in the terminal with a typewriter effect synchronized to the rhythm of the music.',
        fullDescription: 'A collection of Python scripts that replicate an aesthetic typewriter effect in the terminal, letter by letter, synchronized with real song snippets. Perfect for creating engaging visual content for TikTok, Instagram Reels, and YouTube Shorts.',
        features: ['Letter-by-letter typing effect in the terminal', 'Time synchronization with real song fragments', 'ANSI codes to highlight text on dark backgrounds', 'Clean aesthetic optimized for screen recordings', 'Ready-to-run and customizable scripts'],
        technologies: ['Python', 'Terminal', 'ANSI'],
        image: 'images/CancionesTerminal.webp', demoUrl: 'https://www.tiktok.com/@riftaxor', githubUrl: 'https://github.com/RiftAxor/Canciones-Python' },
      { id: 'p4', title: 'FMI Landing Page', category: 'webdev', status: 'completed',
        description: 'Corporate landing page for Figueroa Market Intelligence, a market research firm based in Bogotá.',
        fullDescription: 'Corporate website for Figueroa Market Intelligence (FMI), a market intelligence firm that helps organizations understand their markets and make strategic decisions based on evidence. The site presents research services, methodologies, and lead generation.',
        features: ['Professional visual design with brand identity', 'Services and methodology sections', 'Contact form integration', 'Performance and SEO optimization', 'Responsive design for all devices'],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'images/Fmi page.webp', demoUrl: 'https://figueroaintelligence.com', githubUrl: '' }
    ]
  };

  var PRINCIPLES = {
    es: [
      { title: 'Simple.', desc: 'Eliminar lo innecesario.', dotColor: 'var(--color-natural-muted)' },
      { title: 'Profesional.', desc: 'Estructura e ingeniería estable.', dotColor: 'var(--color-natural-primary)', pulse: true },
      { title: 'Orientado a Propósito.', desc: 'Aportar valor real y de uso.', dotColor: 'var(--color-natural-primary)' }
    ],
    en: [
      { title: 'Simple.', desc: 'Eliminating the unnecessary.', dotColor: 'var(--color-natural-muted)' },
      { title: 'Professional.', desc: 'Stable structure and engineering.', dotColor: 'var(--color-natural-primary)', pulse: true },
      { title: 'Purpose-Driven.', desc: 'Delivering real usable value.', dotColor: 'var(--color-natural-primary)' }
    ]
  };

  var CERT_COLORS = {
    blue: { bg: 'rgba(239,246,255,0.7)', border: 'rgba(191,219,254,0.6)', text: '#1e40af' },
    emerald: { bg: 'rgba(236,253,245,0.7)', border: 'rgba(167,243,208,0.6)', text: '#065f46' },
    red: { bg: 'rgba(254,242,242,0.7)', border: 'rgba(254,202,202,0.6)', text: '#991b1b' },
    purple: { bg: 'rgba(245,243,255,0.7)', border: 'rgba(221,214,254,0.6)', text: '#5b21b6' }
  };

  // ═══════════════════════════════════════════
  //  STATE
  // ═══════════════════════════════════════════

  var currentLang = 'es';
  var currentFilter = 'all';
  var selectedProject = null;

  // ═══════════════════════════════════════════
  //  HELPERS
  // ═══════════════════════════════════════════

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  function getCurrentPage() {
    var path = location.pathname.split('/').pop() || 'index.html';
    path = path.replace(/\.html$/, '');
    if (path === 'index' || path === '' || path === '/') return 'home';
    if (path === 'about') return 'about';
    if (path === 'projects') return 'projects';
    if (path === 'contact') return 'contact';
    return 'home';
  }

  function getCategoryLabel(cat, lang) {
    var c = DATA[lang].projects;
    switch (cat) {
      case 'edtech': return c.filterEdTech;
      case 'research': return c.filterResearch;
      case 'webdev': return c.filterWebDev;
      case 'creative': return c.filterCreative;
      default: return cat;
    }
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function setActiveNav() {
    var page = getCurrentPage();
    $$('[data-nav]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-nav') === page);
    });
  }

  // ═══════════════════════════════════════════
  //  MOBILE MENU
  // ═══════════════════════════════════════════

  function closeMobileMenu() {
    $('#mobile-menu').classList.remove('open');
    var openIcon = $('#menu-icon-open');
    var closeIcon = $('#menu-icon-close');
    if (openIcon) openIcon.style.display = '';
    if (closeIcon) closeIcon.style.display = 'none';
  }

  // ═══════════════════════════════════════════
  //  LANGUAGE
  // ═══════════════════════════════════════════

  function setLanguage(lang) {
    currentLang = lang;
    var c = DATA[lang];

    document.documentElement.lang = lang;
    localStorage.setItem('preferred-lang', lang);

    $('#lang-label-desktop').textContent = lang === 'es' ? 'ES ➔ EN' : 'EN ➔ ES';
    $('#lang-label-mobile').textContent = lang.toUpperCase();

    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var parts = key.split('.');
      var val = c;
      for (var i = 0; i < parts.length; i++) {
        if (val == null) break;
        val = val[parts[i]];
      }
      if (typeof val === 'string') el.textContent = val;
    });

    var page = getCurrentPage();
    if (page === 'home') renderHomeDynamic();
    else if (page === 'about') renderAboutDynamic();
    else if (page === 'projects') renderProjectsPage();
    else if (page === 'contact') renderContactDynamic();

    renderFooterDynamic();
    setActiveNav();

    lucide.createIcons();
    initScrollReveal();
  }

  // ═══════════════════════════════════════════
  //  RENDER: HOME
  // ═══════════════════════════════════════════

  function renderFocusCard(item, i) {
    var delay = i ? (' reveal reveal-delay-' + ((i % 8) + 1)) : ' reveal';
    return '<div class="focus-card' + delay + '">' +
      '<div class="focus-icon"><i data-lucide="' + item.icon + '" style="width:1.5rem;height:1.5rem;color:var(--color-natural-primary)"></i></div>' +
      '<h3><span class="bar"></span>' + escapeHtml(item.title) + '</h3>' +
      '<p>' + escapeHtml(item.description) + '</p>' +
      '</div>';
  }

  function renderProjectCard(project, lang, i) {
    var c = DATA[lang].projects;
    var techHtml = project.technologies.slice(0, 4).map(function (t) {
      return '<span>' + escapeHtml(t) + '</span>';
    }).join('');
    if (project.technologies.length > 4) {
      techHtml += '<span class="more">+' + (project.technologies.length - 4) + '</span>';
    }

    var detailsText = lang === 'es' ? 'Ver Proyecto' : 'View Project';
    var confidentialText = lang === 'es' ? 'Código confidencial' : 'Confidential code';
    var unavailableText = lang === 'es' ? 'Próximamente' : 'Coming soon';
    var statusLabel = project.status === 'in-progress'
      ? (lang === 'es' ? 'En Progreso' : 'In Progress')
      : (lang === 'es' ? 'Terminado' : 'Completed');
    var statusClass = project.status === 'in-progress' ? 'status-progress' : 'status-done';
    var delay = i ? (' reveal reveal-delay-' + ((i % 8) + 1)) : ' reveal';

    var ghIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
    var lockIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

    var demoIcon = project.demoUrl
      ? '<a href="' + project.demoUrl + '" class="icon-link" target="_blank" rel="noopener" title="' + detailsText + '"><i data-lucide="external-link" style="width:1rem;height:1rem"></i></a>'
      : '<span class="icon-link locked" title="' + unavailableText + '">' + lockIcon + '</span>';

    var ghBtn = project.githubUrl
      ? '<a href="' + project.githubUrl + '" class="icon-link" target="_blank" rel="noopener" title="' + escapeHtml(c.viewCode) + '">' + ghIcon + '</a>'
      : '<span class="icon-link locked" title="' + escapeHtml(confidentialText) + '">' + lockIcon + '</span>';

    return '<div class="project-card' + delay + '" data-project-id="' + project.id + '">' +
      '<div class="thumb">' +
        '<img src="' + project.image + '" alt="' + escapeHtml(project.title) + '" referrerpolicy="no-referrer" loading="lazy" />' +
        '<span class="cat-badge">' + escapeHtml(getCategoryLabel(project.category, lang)) + '</span>' +
      '</div>' +
      '<div class="body">' +
        '<h3><span class="bar"></span>' + escapeHtml(project.title) + ' <span class="status-badge ' + statusClass + '">' + statusLabel + '</span></h3>' +
        '<p class="desc">' + escapeHtml(project.description) + '</p>' +
        '<div class="tech-badges">' + techHtml + '</div>' +
        '<div class="project-footer">' +
          '<button class="details-link" data-project-id="' + project.id + '">' + detailsText + ' <i data-lucide="chevron-right" style="width:0.875rem;height:0.875rem"></i></button>' +
          '<div class="project-links">' +
            demoIcon +
            ghBtn +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderHomeDynamic() {
    var lang = currentLang;
    var c = DATA[lang];

    $('#home-focus-title').textContent = lang === 'es' ? 'Foco de Desarrollo' : 'Areas of Expertise';
    var homeFocusSubtitle = $('#home-focus-header').querySelector('.section-subtitle');
    if (homeFocusSubtitle) {
      homeFocusSubtitle.textContent =
        lang === 'es' ? 'Construyendo sistemas estables y con propósito real para múltiples necesidades técnicas.' : 'Building stable systems with real purpose across multiple domains.';
    }
    $('#home-featured-label').textContent = lang === 'es' ? 'TRABAJO DESTACADO' : 'FEATURED WORK';
    $('#home-featured-title').textContent = lang === 'es' ? 'Proyectos Recientes' : 'Recent Projects';
    $('#home-featured-desc').textContent =
      lang === 'es' ? 'Una selección de sistemas de software estables construidos para la educación, investigación y negocios.' : 'A curation of stable software systems engineered for education, research, and business.';
    $('#home-view-all-text').textContent = lang === 'es' ? 'Ver Todos los Proyectos' : 'View All Projects';
    $('#approach-banner-title').textContent = lang === 'es' ? 'Software útil que resuelve problemas tangibles' : 'Useful software solving tangible problems';
    var approachLinkText = lang === 'es' ? 'Leer filosofía completa ➔' : 'Read full philosophy ➔';
    $('#approach-link-text').textContent = approachLinkText;

    $('#home-focus-grid').innerHTML = WHAT_I_DO[lang].map(renderFocusCard).join('');

    $('#home-projects-grid').innerHTML = PROJECTS[lang].map(function (p, i) {
      return renderProjectCard(p, lang, i);
    }).join('');

    bindProjectCardClicks();
    lucide.createIcons();
  }

  // ═══════════════════════════════════════════
  //  RENDER: ABOUT
  // ═══════════════════════════════════════════

  function renderAboutDynamic() {
    var lang = currentLang;
    var c = DATA[lang];

    $('#about-status').textContent = lang === 'es' ? 'Creando Soluciones Reales' : 'Building Real Solutions';
    $('#about-label').textContent = lang === 'es' ? 'SOBRE SAMUEL FIGUEROA' : 'ABOUT SAMUEL FIGUEROA';
    $('#about-bio-1').textContent = lang === 'es'
      ? 'Soy Samuel Figueroa, un desarrollador Full-Stack de Colombia que disfruta creando cosas con la tecnología.'
      : "I'm Samuel Figueroa, a Full-Stack Developer from Colombia who enjoys building things with technology.";
    $('#about-bio-2').textContent = lang === 'es'
      ? 'Mi interés en la programación comenzó por curiosidad y proyectos personales. Lo que empezó como experimentar con sitios web y aprender cómo funcionaban las cosas evolucionó gradualmente hasta desarrollar aplicaciones web completas, plataformas educativas, sistemas de encuestas y soluciones empresariales.'
      : 'My interest in programming started through curiosity and personal projects. What began as experimenting with websites and learning how things worked gradually evolved into developing complete web applications, educational platforms, survey systems, and business solutions.';
    $('#about-bio-3').textContent = lang === 'es'
      ? 'Hoy paso la mayor parte de mi tiempo creando software, aprendiendo nuevas tecnologías y convirtiendo ideas en productos reales. Mientras curso mi último año de secundaria, sigo trabajando en proyectos enfocados en educación y desarrollo web.'
      : "Today, I spend most of my time creating software, learning new technologies, and turning ideas into real products. While completing my final year of high school, I continue working on projects focused on education and web development.";
    $('#about-bio-4').textContent = lang === 'es'
      ? 'Para mí, programar es más que escribir código—se trata de crear soluciones útiles, aprender continuamente y dar vida a las ideas.'
      : "For me, programming is more than writing code—it's about creating useful solutions, learning continuously, and bringing ideas to life.";
    $('#about-whatido-desc').textContent = lang === 'es'
      ? 'Campos de especialización técnica y áreas en las que desarrollo soluciones prácticas.'
      : 'Technical specialties and fields where I build practical, real-world solutions.';
    $('#about-tech-desc').textContent = lang === 'es'
      ? 'Mi conjunto de herramientas tecnológicas para el desarrollo full-stack.'
      : 'My modern technology stack for full-stack engineering.';
    $('#about-lang-en').textContent = lang === 'es' ? 'Inglés (Fluido)' : 'English (Fluent)';
    $('#about-lang-es').textContent = lang === 'es' ? 'Español (Nativo)' : 'Spanish (Native)';

    $('#about-focus-list').innerHTML = CURRENT_FOCUS[lang].map(function (f) {
      return '<li style="display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;font-weight:500;">' +
        '<span style="width:0.375rem;height:0.375rem;border-radius:9999px;background:var(--color-natural-primary);flex-shrink:0;"></span>' +
        escapeHtml(f) + '</li>';
    }).join('');

    $('#philosophy-focus-list').innerHTML = PHILOSOPHY[lang].focusOn.map(function (item) {
      return '<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>' + escapeHtml(item) + '</span></li>';
    }).join('');

    $('#philosophy-avoid-list').innerHTML = PHILOSOPHY[lang].avoid.map(function (item) {
      return '<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg><span>' + escapeHtml(item) + '</span></li>';
    }).join('');

    $('#about-philosophy-label').textContent = lang === 'es' ? 'VALORES Y METODOLOGÍA' : 'VALUES & METRICS';

    $('#about-principles-cards').innerHTML = PRINCIPLES[lang].map(function (p, i) {
      var delay = i ? (' reveal reveal-delay-' + ((i % 8) + 1)) : ' reveal';
      return '<div class="principle-card' + delay + '">' +
        '<div>' +
          '<h4>' + escapeHtml(p.title) + '</h4>' +
          '<p>' + escapeHtml(p.desc) + '</p>' +
        '</div>' +
        '<span class="principle-dot" style="background:' + p.dotColor + ';' + (p.pulse ? 'animation:pulse 2s infinite;' : '') + '"></span>' +
      '</div>';
    }).join('');

    $('#about-whatido-grid').innerHTML = WHAT_I_DO[lang].map(function (item, i) {
      var delay = i ? (' reveal reveal-delay-' + ((i % 8) + 1)) : ' reveal';
      return '<div class="focus-card' + delay + '" style="display:flex;gap:1rem;">' +
        '<div class="focus-icon" style="width:2.5rem;height:2.5rem;min-width:2.5rem;"><i data-lucide="' + item.icon + '" style="width:1.25rem;height:1.25rem;color:var(--color-natural-primary)"></i></div>' +
        '<div>' +
          '<h3 style="font-size:1rem;margin-top:0;"><span class="bar" style="width:0.375rem;height:0.375rem;"></span>' + escapeHtml(item.title) + '</h3>' +
          '<p style="font-size:0.75rem;margin-top:0.5rem;">' + escapeHtml(item.description) + '</p>' +
        '</div>' +
      '</div>';
    }).join('');

    $('#about-tech-grid').innerHTML = TECHNOLOGIES.map(function (tech, i) {
      var delay = i ? (' reveal reveal-delay-' + ((i % 8) + 1)) : ' reveal';
      return '<div class="tech-card' + delay + '">' +
        '<span class="cat-label">' + escapeHtml(tech.category) + '</span>' +
        '<div class="tech-badges">' + tech.items.map(function (item) {
          return '<span style="color:var(--color-natural-text);">' + escapeHtml(item) + '</span>';
        }).join('') + '</div>' +
      '</div>';
    }).join('');

    $('#about-cta-projects').textContent = lang === 'es' ? 'Ver Proyectos' : 'View Projects';
    $('#about-cta-contact').textContent = lang === 'es' ? 'Contactar' : 'Contact Me';
  }

  // ═══════════════════════════════════════════
  //  RENDER: PROJECTS PAGE
  // ═══════════════════════════════════════════

  function renderProjectsPage() {
    var lang = currentLang;
    var c = DATA[lang].projects;

    $('#projects-label').textContent = lang === 'es' ? 'PORTFOLIO DE PRODUCTOS' : 'PRODUCT PORTFOLIO';

    var categories = [
      { id: 'all', label: c.filterAll },
      { id: 'edtech', label: c.filterEdTech },
      { id: 'research', label: c.filterResearch },
      { id: 'webdev', label: c.filterWebDev },
      { id: 'creative', label: c.filterCreative }
    ];

    $('#filter-tabs').innerHTML = categories.map(function (cat) {
      return '<button class="filter-tab' + (currentFilter === cat.id ? ' active' : '') + '" data-filter="' + cat.id + '">' + escapeHtml(cat.label) + '</button>';
    }).join('');

    var projects = currentFilter === 'all'
      ? PROJECTS[lang]
      : PROJECTS[lang].filter(function (p) { return p.category === currentFilter; });

    $('#projects-grid').innerHTML = projects.map(function (p, i) {
      return renderProjectCard(p, lang, i);
    }).join('');

    $$('#filter-tabs .filter-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentFilter = btn.getAttribute('data-filter');
        renderProjectsPage();
        lucide.createIcons();
        initScrollReveal();
      });
    });

    bindProjectCardClicks();
    lucide.createIcons();
  }

  // ═══════════════════════════════════════════
  //  RENDER: CONTACT
  // ═══════════════════════════════════════════

  function renderContactDynamic() {
    var lang = currentLang;
    $('#contact-follow-label').textContent = lang === 'es' ? 'SÍGUEME' : 'FOLLOW ME';
    $('#contact-label').textContent = lang === 'es' ? 'COMUNICACIÓN DIRECTA' : 'DIRECT PIPELINE';
  }

  // ═══════════════════════════════════════════
  //  RENDER: FOOTER DYNAMIC TEXT
  // ═══════════════════════════════════════════

  function renderFooterDynamic() {
    var lang = currentLang;
    $('#footer-nav-label').textContent = lang === 'es' ? 'Navegación' : 'Navigation';
    $('#footer-social-label').textContent = lang === 'es' ? 'Redes & Contacto' : 'Social & Contact';
    $('#back-to-top-text').textContent = lang === 'es' ? 'Volver Arriba' : 'Back to Top';
  }

  // ═══════════════════════════════════════════
  //  PROJECT DRAWER
  // ═══════════════════════════════════════════

  function openDrawer(projectId) {
    var lang = currentLang;
    var project = PROJECTS[lang].find(function (p) { return p.id === projectId; });
    if (!project) return;
    selectedProject = project;

    var c = DATA[lang].projects;
    var featuresTitle = lang === 'es' ? 'Características Clave' : 'Key Features';
    var techTitle = lang === 'es' ? 'Tecnologías Aplicadas' : 'Applied Stack';
    var detailsLabel = lang === 'es' ? 'DETALLES DEL PROYECTO' : 'PROJECT DETAILS';

    $('#drawer-label').textContent = detailsLabel;

    $('#drawer-body').innerHTML =
      '<div class="hero-img"><img src="' + project.image + '" alt="' + escapeHtml(project.title) + '" referrerpolicy="no-referrer" /></div>' +
      '<div class="info">' +
        '<span class="badge badge-primary">' + escapeHtml(getCategoryLabel(project.category, lang)) + '</span>' +
        '<h2>' + escapeHtml(project.title) + '</h2>' +
        '<p class="full-desc">' + escapeHtml(project.fullDescription) + '</p>' +
      '</div>' +
      '<div style="margin-top:2rem;">' +
        '<p class="feat-title">' + featuresTitle + '</p>' +
        '<ul class="feat-list">' + project.features.map(function (f) {
          return '<li><span class="feat-check"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span>' + escapeHtml(f) + '</span></li>';
        }).join('') + '</ul>' +
      '</div>' +
      '<div style="margin-top:2rem;">' +
        '<p class="tech-title">' + techTitle + '</p>' +
        '<div class="tech-badges" style="margin-top:0.5rem;">' + project.technologies.map(function (t) {
          return '<span style="color:var(--color-natural-text);">' + escapeHtml(t) + '</span>';
        }).join('') + '</div>' +
      '</div>';

    $('#drawer-footer').innerHTML =
      (project.githubUrl ? '<a href="' + project.githubUrl + '" class="gh" target="_blank" rel="noopener"><i data-lucide="github"></i> ' + escapeHtml(c.viewCode) + '</a>' : '') +
      (project.demoUrl ? '<a href="' + project.demoUrl + '" class="demo" target="_blank" rel="noopener"><i data-lucide="external-link"></i> ' + escapeHtml(c.viewDemo) + '</a>' : '');

    var overlay = $('#project-drawer');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    lucide.createIcons();
  }

  function closeDrawer() {
    var overlay = $('#project-drawer');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    selectedProject = null;
  }

  function bindProjectCardClicks() {
    $$('.details-link[data-project-id]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openDrawer(btn.getAttribute('data-project-id'));
      });
    });
  }

  // ═══════════════════════════════════════════
  //  CONTACT FORM
  // ═══════════════════════════════════════════

  function initContactForm() {
    var form = $('#contact-form');
    if (!form) return;
    var successPanel = $('#contact-success');
    var submitBtn = $('#submit-btn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var lang = currentLang;
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var subject = form.querySelector('[name="subject"]');
      var message = form.querySelector('[name="message"]');

      var errors = {};
      if (!name.value.trim()) errors.name = lang === 'es' ? 'El nombre es obligatorio.' : 'Name is required.';
      if (!email.value.trim()) {
        errors.email = lang === 'es' ? 'El correo es obligatorio.' : 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors.email = lang === 'es' ? 'El correo no es válido.' : 'Invalid email address.';
      }
      if (!subject.value.trim()) errors.subject = lang === 'es' ? 'El asunto es obligatorio.' : 'Subject is required.';
      if (!message.value.trim()) errors.message = lang === 'es' ? 'El mensaje es obligatorio.' : 'Message is required.';

      var fields = ['name', 'email', 'subject', 'message'];
      fields.forEach(function (f) {
        var input = form.querySelector('[name="' + f + '"]');
        var errSpan = input.parentElement.querySelector('.form-error');
        if (errors[f]) {
          input.classList.add('error');
          errSpan.style.display = 'flex';
          errSpan.querySelector('span').textContent = errors[f];
        } else {
          input.classList.remove('error');
          errSpan.style.display = 'none';
        }
      });

      if (Object.keys(errors).length > 0) return;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span><span>' + DATA[lang].contact.formSending + '</span>';

      var formData = {
        access_key: 'c603edf7-d42e-49a4-ba09-a361b9f375e8',
        name: name.value.trim(),
        email: email.value.trim(),
        subject: subject.value.trim(),
        message: message.value.trim(),
        from_name: name.value.trim(),
        botcheck: form.querySelector('[name="botcheck"]') ? form.querySelector('[name="botcheck"]').value : ''
      };

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success) {
          form.style.display = 'none';
          successPanel.style.display = 'block';
          name.value = '';
          email.value = '';
          subject.value = '';
          message.value = '';
        } else {
          alert(lang === 'es' ? 'Hubo un error al enviar. Intenta de nuevo.' : 'There was an error sending. Please try again.');
        }
      })
      .catch(function () {
        alert(lang === 'es' ? 'Error de conexión. Intenta de nuevo.' : 'Connection error. Please try again.');
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>' + DATA[lang].contact.formSend + '</span><i data-lucide="send" style="width:1rem;height:1rem"></i>';
        lucide.createIcons();
      });
    });

    form.querySelectorAll('input, textarea').forEach(function (input) {
      input.addEventListener('input', function () {
        input.classList.remove('error');
        var errSpan = input.parentElement.querySelector('.form-error');
        if (errSpan) errSpan.style.display = 'none';
      });
    });

    var closeBtn = $('#close-success');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        $('#contact-success').style.display = 'none';
        $('#contact-form').style.display = '';
      });
    }
  }

  // ═══════════════════════════════════════════
  //  SCROLL REVEAL
  // ═══════════════════════════════════════════

  var revealObserver = null;

  function initScrollReveal() {
    if (!window.IntersectionObserver) return;
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // ═══════════════════════════════════════════
  //  EVENT BINDINGS
  // ═══════════════════════════════════════════

  function bindEvents() {
    $('#menu-toggle').addEventListener('click', function () {
      var menu = $('#mobile-menu');
      var isOpen = menu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        menu.classList.add('open');
        $('#menu-icon-open').style.display = 'none';
        $('#menu-icon-close').style.display = '';
      }
    });

    function toggleLang(e) {
      e.preventDefault();
      var newLang = currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('preferred-lang', newLang);
      currentLang = newLang;
      setLanguage(newLang);
    }

    var desktopToggle = $('#lang-toggle-desktop');
    var mobileToggle = $('#lang-toggle-mobile');
    if (desktopToggle) desktopToggle.addEventListener('click', toggleLang);
    if (mobileToggle) mobileToggle.addEventListener('click', toggleLang);

    var barrier = $('#drawer-barrier');
    var closeBtn = $('#drawer-close');
    if (barrier) barrier.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var overlay = $('#project-drawer');
        if (overlay && overlay.classList.contains('open')) closeDrawer();
      }
    });

    var backToTop = $('#back-to-top');
    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    initContactForm();
  }

  // ═══════════════════════════════════════════
  //  INIT
  // ═══════════════════════════════════════════

  function init() {
    $('#current-year').textContent = new Date().getFullYear();

    var savedLang = localStorage.getItem('preferred-lang');
    currentLang = (savedLang === 'en' || savedLang === 'es') ? savedLang : 'es';

    setLanguage(currentLang);
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
