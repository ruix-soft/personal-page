export type Language = "es" | "en";

export const translations: Record<Language, Record<string, string>> = {
  es: {
    "page.title":
      "Luis Alberto Ruiz Arias - Director de TI | Experto en Tecnología LATAM",
    "nav.summary": "<RESUMEN/>",
    "nav.experience": "<EXPERIENCIA/>",
    "nav.skills": "<HABILIDADES/>",
    "nav.education": "<EDUCACIÓN/>",
    "nav.languages_etc": "<IDIOMAS_ETC/>",
    "hero.greeting": "Hola, mi nombre es",
    "hero.tagline": "Convierto desafíos de negocio en soluciones tecnológicas escalables.",
    "hero.description":
      "Soy un Director de TI y líder técnico global especializado en dirigir equipos y entregar proyectos innovadores a nivel internacional. Actualmente, como Team Developer Leader en Fortidia, estoy enfocado en impulsar la transformación digital y optimizar soluciones tecnológicas altamente escalables.",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Cuautitlán Izcalli, MEX",
    "title.summary": "Resumen Profesional",
    "summary.paragraph":
      "Profesional de TI experimentado con más de 10 años liderando equipos multidisciplinarios y entregando proyectos tecnológicos en LATAM. Experto en implementar y optimizar soluciones de software escalables con arquitecturas modernas y mejores prácticas de ingeniería (DDD, TDD, CI/CD). Capacidad comprobada para gestionar iniciativas a gran escala, impulsar la transformación digital y alinear la tecnología con los objetivos comerciales. Fuerte enfoque en la mejora continua y el liderazgo ético.",
    "title.experience": "Experiencia Profesional",
            "exp0.title": "Principal Software Architect",
    "exp0.date": "Ene 2026 – Presente",
    "exp0.desc1": "Arquitecto de soluciones empresariales globales escalables utilizando Domain-Driven Design (DDD), Arquitectura Hexagonal y Limpia.",
    "exp0.desc2": "Gestión, optimización y escalado de sistemas backend core y bases de datos en producción para LATAM y operaciones globales.",
    "exp0.desc3": "Aceleración del ciclo de vida de desarrollo de software y mejora de la calidad del código mediante la integración de herramientas de ingeniería asistida por IA (LLMs, GitHub Copilot, Ollama).",
    "exp1.title": "Lead Full Stack Engineer",
    "exp1.date": "2025 – 2026",
    "exp1.desc1": "Arquitectura e ingeniería de \"Falcon\", un sistema integral de seguimiento de envíos (PO Box) transfronterizos, gestionando el ciclo de vida completo de desarrollo de software.",
    "exp1.desc2": "Desarrollo de servicios backend de alta concurrencia utilizando Go, optimizando el rendimiento de datos y asegurando la precisión del seguimiento en tiempo real.",
    "exp1.desc3": "Construcción del ecosistema front-end (SPA con React) y aplicación móvil (React Native), además de diseño robusto de esquemas de bases de datos relacionales y contratos API.",
    "exp2.title": "Principal Software Architect / Head of Engineering",
    "exp2.date": "Oct 2021 – Abr 2026",
    "exp2.desc1": "Ingeniería y ejecución de la migración completa de infraestructura on-premise legada a un entorno AWS nativo en la nube de alta disponibilidad.",
    "exp2.desc2": "Arquitectura y despliegue de \"Rocket\", sistema propietario insignia para automatizar procesos logísticos core complejos.",
    "exp2.desc3": "Refactorización y reingeniería de APIs core, reduciendo deuda técnica, e implementación de Arquitectura Limpia y Hexagonal para mantenibilidad y escalabilidad a largo plazo en la región.",
    "exp3.title": "Senior Software Engineer",
    "exp3.date": "Ago 2019 – Oct 2020",
    "exp3.desc1": "Desarrollo de Aplicaciones de Página Única (SPAs) de alto rendimiento basadas en arquitectura de microfrontends avanzada.",
    "exp3.desc2": "Optimización de componentes web mediante metodologías estrictas de diseño atómico y pruebas unitarias visuales.",
    "exp3.desc3": "Construcción y mantenimiento de bibliotecas de código internas, utilizando la API nativa Fetch para integraciones ligeras y optimizadas.",
    "exp4.title": "Lead Software Engineer",
    "exp4.date": "Nov 2018 – Ago 2019",
    "exp4.desc1": "Definición de arquitectura de software core y selección estratégica de stacks tecnológicos para múltiples proyectos de clientes empresariales.",
    "exp4.desc2": "Ingeniería e implementación de pipelines CI/CD y gestión estandarizada de repositorios.",
    "exp4.desc3": "Traducción de requerimientos de negocio complejos en especificaciones técnicas precisas y modelos de bases de datos.",
    "exp5.title": "Senior Full Stack Developer",
    "exp5.date": "Nov 2016 – Nov 2018",
    "exp5.desc1": "Ejecución de migraciones complejas de bases de datos a AWS y configuración de infraestructura en la nube altamente escalable.",
    "exp5.desc2": "Mantenimiento y evolución de APIs backend RESTful para plataformas iOS y Android utilizando Python y Laravel.",
    "exp5.desc3": "Desarrollo de interfaces de integración de hardware para escáneres biométricos, lectores QR y sistemas de seguridad basados en RFID.",
    "exp6.title": "Full Stack Developer",
    "exp6.date": "Jul 2015 – Jun 2016",
    "exp6.desc1": "Ingeniería de soluciones de software personalizadas, enfocadas en arquitectura de bases de datos escalable e implementaciones backend robustas.",
    "exp6.desc2": "Desarrollo e integración de módulos complejos de facturación electrónica, asegurando cumplimiento normativo estricto.",
    "exp7.title": "Software Developer",
    "exp7.date": "Jun 2014 – Jun 2015",
    "exp7.desc1": "Desarrollo de aplicaciones web de alto tráfico utilizando los frameworks Laravel y Symfony.",
    "title.skills": "Habilidades Técnicas",
    "skills.cat_languages": "Lenguajes",
    "skills.cat_frameworks": "Frameworks",
    "skills.cat_databases": "Bases de Datos",
    "skills.cat_webdev": "Desarrollo Web",
    "skills.cat_devops": "DevOps",
    "skills.cat_tools": "Herramientas",
    "skills.cat_architectures": "Arquitecturas",
    "skills.cat_testing": "Pruebas",
    "title.education": "Educación y Certificaciones",
    "edu.master.degree": "Maestría en Ciencias de la Informática (Pendiente)",
    "edu.master.institution": "Instituto Leonardo Bravo",
    "edu.master.date": "2018 - 2019",
    "edu1.degree": "Licenciatura en Ciencias de la Informática",
    "edu1.institution": "Instituto Leonardo Bravo",
    "edu1.date": "2011 - 2015",
    "edu2.degree": "Certificaciones en HTML5, CSS3, PostgreSQL",
    "edu2.institution": "Open Intelligence",
    "edu2.date": "2014",
    "edu3.degree": "Certificación en Arquitectura Hexagonal",
    "edu3.institution": "Codely",
    "edu3.date": "2023 - 2024",
    "title.languages": "Idiomas",
    "lang.spanish": "Español: Nativo",
    "lang.english": "Inglés: Intermedio",
    "title.softskills": "Habilidades Blandas",
    softskill1: "Liderazgo y Gestión de Equipos",
    softskill2: "Pensamiento Estratégico",
    softskill3: "Comunicación Efectiva",
    softskill4: "Resolución de Problemas",
    softskill5: "Adaptabilidad",
    softskill6: "Proactividad",

    "nav.featuredProjects": "<PROYECTOS/>",
    "title.featuredProjects": "Proyectos Destacados",
    "project.problem": "El Problema",
    "project.role": "Tu Rol",
    "project.technologies": "Las Tecnologías",
    "project.result": "El Resultado",
    "project.viewLink": "Ver Proyecto",

    "project1.title": "Falcon – Sistema Agnóstico de Logística Cross-Border",
    "project1.problem": "Falta de trazabilidad, automatización y escalabilidad en la gestión de casilleros internacionales (PO Box), recepción de paquetería en frontera y despacho de envíos transfronterizos con múltiples transportistas.",
    "project1.role": "Diseñé la arquitectura e implementé la solución backend/database desde cero como consultor e ingeniero principal, definiendo los flujos de datos, integración de transportistas y contratos API.",
    "project1.result": "Se construyó un core logístico agnóstico capaz de procesar inventario en almacén, generación automatizada de guías, cálculo de tarifas de importación y rastreo en tiempo real, reduciendo la fricción operativa y errores manuales de registro.",
    "project1.visualAlt": "Visual del Proyecto Falcon",

    "project2.title": "Rocket – Middleware Core & Reingeniería de Plataforma Logística",
    "project2.problem": "Sistemas legados acoplados con alto costo de mantenimiento, baja escalabilidad y cuellos de botella en el procesamiento e integración de órdenes operativas masivas a nivel regional.",
    "project2.role": "Lideré la dirección de arquitectura y modernización del software core. Diseñé e implementé la transición hacia una arquitectura desacoplada y orientada a eventos para orquestar la operación logística end-to-end.",
    "project2.result": "Se logró la modernización completa de la infraestructura crítica de la plataforma, optimizando los tiempos de respuesta del API, mejorando la disponibilidad del sistema frente a picos de tráfico y facilitando la integración transparente con múltiples integradores y clientes.",
    "project2.visualAlt": "Enlace al Proyecto Rocket",

    "tech.node_ts": "Node.js / TypeScript",
    "tech.postgresql_multi": "PostgreSQL (Modelado de datos multitenant)",
    "tech.aws_serverless": "AWS (Servicios Serverless / Cloud Functions)",
    "tech.api_carriers": "Integración con APIs de transportistas (Shipping Carriers REST/SOAP)",
    "tech.node_go_ts": "Node.js / Go / TypeScript",
    "tech.event_driven": "Arquitectura Orientada a Eventos (Microservicios / Message Queue)",
    "tech.aws_infrastructure": "Amazon Web Services (AWS Infrastructure & Cloud-Native)",
    "tech.databases_rel_nosql": "Bases de Datos Relacionales y NoSQL",
    "tech.react": "React",
    "tech.nextjs": "Next.js",
    "tech.tailwind": "Tailwind CSS",
    "tech.node": "Node.js",
    "tech.aws": "AWS (S3, CloudFront)",
    "tech.java": "Java",
    "tech.springboot": "Spring Boot",
    "tech.kubernetes": "Kubernetes",
    "tech.mongodb": "MongoDB",
    "tech.kafka": "Apache Kafka",

    "footer.rights": "Todos los derechos reservados.",
    "footer.design": "Diseñado con Tailwind CSS y creado con Astro.",
  },
  en: {
    "page.title":
      "Luis Alberto Ruiz Arias - IT Director | LATAM Technology Expert",
    "nav.summary": "<SUMMARY/>",
    "nav.experience": "<EXPERIENCE/>",
    "nav.skills": "<SKILLS/>",
    "nav.education": "<EDUCATION/>",
    "nav.languages_etc": "<LANGUAGES_ETC/>",
    "hero.greeting": "Hi, my name is",
    "hero.tagline": "I build technology solutions.",
    "hero.description":
      "I am an IT Director and technology professional specializing in leading teams and delivering innovative projects across LATAM. Currently, I'm focused on driving digital transformation and optimizing scalable solutions at Mail Boxes Etc.",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Cuautitlán Izcalli, MEX",
    "title.summary": "Professional Summary",
    "summary.paragraph":
      "Experienced IT professional with over 10 years leading multidisciplinary teams and delivering technology projects across LATAM. Expert in implementing and optimizing scalable software solutions with modern architectures and best engineering practices (DDD, TDD, CI/CD). Proven ability to manage large-scale initiatives, drive digital transformation, and align technology with business goals. Strong focus on continuous improvement and ethical leadership.",
    "title.experience": "Professional Experience",
            "exp0.title": "Principal Software Architect",
    "exp0.date": "Jan 2026 - Present",
    "exp0.desc1": "Architect scalable global enterprise solutions utilizing Domain-Driven Design (DDD), Hexagonal, and Clean Architecture principles.",
    "exp0.desc2": "Manage, optimize, and scale core backend systems and production databases for LATAM and global operations.",
    "exp0.desc3": "Accelerate the software development lifecycle and enhance code quality by integrating AI-assisted engineering tools, including LLMs, GitHub Copilot, and Ollama.",
    "exp1.title": "Lead Full Stack Engineer",
    "exp1.date": "2025 - 2026",
    "exp1.desc1": "Architected and engineered \"Falcon,\" a comprehensive cross-border PO Box tracking system, managing the end-to-end software development lifecycle.",
    "exp1.desc2": "Developed highly concurrent backend services utilizing Go, optimizing data throughput and ensuring real-time tracking accuracy.",
    "exp1.desc3": "Built the front-end ecosystem (React SPA) and mobile application (React Native), and designed robust relational database schemas and API contracts.",
    "exp2.title": "Principal Software Architect / Head of Engineering",
    "exp2.date": "Oct 2021 - Apr 2026",
    "exp2.desc1": "Engineered and executed the end-to-end migration of legacy on-premise infrastructure to a highly available, cloud-native AWS environment.",
    "exp2.desc2": "Architected and deployed \"Rocket,\" a flagship proprietary system that automated complex core logistical processes.",
    "exp2.desc3": "Refactored APIs, significantly reducing technical debt, and implemented Clean and Hexagonal Architecture to ensure long-term maintainability and scalability.",
    "exp3.title": "Senior Software Engineer",
    "exp3.date": "Aug 2019 - Oct 2020",
    "exp3.desc1": "Developed high-performance Single Page Applications (SPAs) based on an advanced microfrontend architecture.",
    "exp3.desc2": "Optimized web components using strict atomic design methodologies and visual unit testing.",
    "exp3.desc3": "Built and maintained internal code libraries, utilizing the native Fetch API for highly optimized web service integrations.",
    "exp4.title": "Lead Software Engineer",
    "exp4.date": "Nov 2018 - Aug 2019",
    "exp4.desc1": "Defined the core software architecture and strategically selected technology stacks for multiple enterprise client projects.",
    "exp4.desc2": "Engineered and implemented CI/CD pipelines and standardized repository management.",
    "exp4.desc3": "Translated complex business requirements into precise technical specifications and database models.",
    "exp5.title": "Senior Full Stack Developer",
    "exp5.date": "Nov 2016 - Nov 2018",
    "exp5.desc1": "Executed complex database migrations to AWS and configured highly scalable cloud infrastructure.",
    "exp5.desc2": "Maintained and evolved RESTful backend APIs for iOS and Android platforms utilizing Python and Laravel.",
    "exp5.desc3": "Developed hardware integration interfaces for biometric scanners, QR code readers, and RFID-based security systems.",
    "exp6.title": "Full Stack Developer",
    "exp6.date": "Jul 2015 - Jun 2016",
    "exp6.desc1": "Engineered custom software solutions, focusing on scalable database architecture and robust backend implementations.",
    "exp6.desc2": "Developed and integrated complex electronic invoicing (e-invoicing) modules, ensuring strict regulatory compliance.",
    "exp7.title": "Software Developer",
    "exp7.date": "Jun 2014 - Jun 2015",
    "exp7.desc1": "Developed high-traffic web applications utilizing Laravel and Symfony frameworks.",
    "title.skills": "Technical Skills",
    "skills.cat_languages": "Languages",
    "skills.cat_frameworks": "Frameworks",
    "skills.cat_databases": "Databases",
    "skills.cat_webdev": "Web Dev",
    "skills.cat_devops": "DevOps",
    "skills.cat_tools": "Tooling",
    "skills.cat_architectures": "Architectures",
    "skills.cat_testing": "Testing",
    "title.education": "Education & Certifications",
    "edu.master.degree": "Master's in Information Science (Pending)",
    "edu.master.institution": "Instituto Leonardo Bravo",
    "edu.master.date": "2018 - 2019",
    "edu1.degree": "B.S. in Information Science",
    "edu1.institution": "Instituto Leonardo Bravo",
    "edu1.date": "2011 - 2015",
    "edu2.degree": "Certifications in HTML5, CSS3, PostgreSQL",
    "edu2.institution": "Open Intelligence",
    "edu2.date": "2014",
    "edu3.degree": "Hexagonal Architecture Certification",
    "edu3.institution": "Codely",
    "edu3.date": "2023 - 2024",
    "title.languages": "Languages",
    "lang.spanish": "Spanish: Native",
    "lang.english": "English: Intermediate",
    "title.softskills": "Soft Skills",
    softskill1: "Leadership & Team Management",
    softskill2: "Strategic Thinking",
    softskill3: "Communication",
    softskill4: "Problem Solving",
    softskill5: "Adaptability",
    softskill6: "Proactivity",

    "nav.featuredProjects": "<PROJECTS/>",
    "title.featuredProjects": "Featured Projects",
    "project.problem": "The Problem",
    "project.role": "Your Role",
    "project.technologies": "Technologies",
    "project.result": "The Result",
    "project.viewLink": "View Project",

    "project1.title": "Falcon – Agnostic Cross-Border Logistics System",
    "project1.problem": "Lack of traceability, automation, and scalability in international PO Box management, cross-border parcel reception, and cross-border shipping dispatch with multiple carriers.",
    "project1.role": "Designed the architecture and implemented the backend/database solution from scratch as a consultant and principal engineer, defining data flows, carrier integration, and API contracts.",
    "project1.result": "Built an agnostic logistics core capable of processing warehouse inventory, automated label generation, import tariff calculation, and real-time tracking, reducing operational friction and manual registration errors.",
    "project1.visualAlt": "Project Falcon Visual",

    "project2.title": "Rocket – Core Middleware & Logistics Platform Reengineering",
    "project2.problem": "Coupled legacy systems with high maintenance costs, low scalability, and bottlenecks in processing and integrating massive operational orders at a regional level.",
    "project2.role": "Led the architecture direction and core software modernization. Designed and implemented the transition towards a decoupled, event-driven architecture to orchestrate end-to-end logistics operations.",
    "project2.result": "Achieved full modernization of critical platform infrastructure, optimizing API response times, improving system availability during traffic spikes, and facilitating seamless integration with multiple integrators and clients.",
    "project2.visualAlt": "Link to Live Project Rocket",

    "tech.node_ts": "Node.js / TypeScript",
    "tech.postgresql_multi": "PostgreSQL (Multitenant Data Modeling)",
    "tech.aws_serverless": "AWS (Serverless Services / Cloud Functions)",
    "tech.api_carriers": "Carrier API Integration (Shipping Carriers REST/SOAP)",
    "tech.node_go_ts": "Node.js / Go / TypeScript",
    "tech.event_driven": "Event-Driven Architecture (Microservices / Message Queue)",
    "tech.aws_infrastructure": "Amazon Web Services (AWS Infrastructure & Cloud-Native)",
    "tech.databases_rel_nosql": "Relational and NoSQL Databases",
    "tech.react": "React",
    "tech.nextjs": "Next.js",
    "tech.tailwind": "Tailwind CSS",
    "tech.node": "Node.js",
    "tech.aws": "AWS (S3, CloudFront)",
    "tech.java": "Java",
    "tech.springboot": "Spring Boot",
    "tech.kubernetes": "Kubernetes",
    "tech.mongodb": "MongoDB",
    "tech.kafka": "Apache Kafka",

    "footer.rights": "All rights reserved.",
    "footer.design": "Designed with Tailwind CSS and built with Astro.",
  },
};

// Variable para almacenar el idioma actual
let currentLang: Language = "es";

// Función para obtener el idioma actual
export function getCurrentLanguage(): Language {
  return currentLang;
}

// Función para establecer el idioma
export function setLanguage(lang: Language): void {
  // Validate input
  if (!lang || !translations[lang]) {
    console.error(`Invalid language: ${lang}`);
    return;
  }

  currentLang = lang;

  // Safely update document properties
  try {
    document.documentElement.lang = lang;
    document.title = translations[lang]["page.title"];
  } catch (error) {
    console.error("Failed to update document properties:", error);
  }

  const elementsToTranslate = document.querySelectorAll("[data-translate-key]");
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate-key");
    if (key && translations[lang][key]) {
      // Use textContent for security, or implement proper sanitization
      element.textContent = translations[lang][key];
    }
  });
}

// Función para obtener una traducción específica
export function getTranslation(key: string, lang?: Language): string {
  const targetLang = lang ?? currentLang;
  return translations[targetLang][key] ?? key;
}
