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
    "exp0.title": "Team Developer Leader - Global Development Team",
    "exp0.date": "Enero 2026 – Presente",
    "exp0.desc1": "Liderazgo técnico del equipo de desarrollo global, reportando directamente a la Dirección de Desarrollo de Software.",
    "exp0.desc2": "Dirección y ejecución de la arquitectura para la integración del sistema \"Rocket\" (México) con el ecosistema global \"HUB\" de Fortidia.",
    "exp0.desc3": "[Placeholder para tecnologías/herramientas]",
    "exp1.title": "Director de TI",
    "exp1.date": "Oct 2021 – Presente",
    "exp1.desc1": "Liderando la implementación tecnológica en países de LATAM.",
    "exp1.desc2":
      "Gestionando equipos tecnológicos y proyectos de transformación digital a gran escala.",
    "exp1.desc3":
      "Definiendo y ejecutando estrategias tecnológicas alineadas con los objetivos corporativos.",
    "exp2.title": "Gerente de TI",
    "exp2.date": "Oct 2020 – Oct 2021",
    "exp2.desc1":
      "Supervisé las operaciones de TI y mejoré los procesos internos.",
    "exp2.desc2":
      "Lideré la adopción de nuevas tecnologías y mejores prácticas organizacionales.",
    "exp3.title": "Ingeniero de Software",
    "exp3.date": "Ago 2019 – Oct 2020",
    "exp3.desc1":
      "Desarrollé aplicaciones SPA utilizando arquitectura de microfrontends.",
    "exp3.desc2": "Refactoricé y optimicé componentes web.",
    "exp3.desc3":
      "Implementé pruebas unitarias y principios de diseño atómico.",
    "exp4.title": "Líder de Desarrollo",
    "exp4.date": "Nov 2018 – Ago 2019",
    "exp4.desc1":
      "Diseñé la arquitectura de software y estimé los plazos de entrega.",
    "exp4.desc2": "Implementé pipelines de CI/CD y gestioné repositorios.",
    "exp4.desc3":
      "Seleccioné e integré tecnologías clave incluyendo AWS, Azure, GCP.",
    "exp5.title": "Líder de Desarrollo",
    "exp5.date": "Nov 2017 – Nov 2018",
    "exp5.desc1": "Desarrollé aplicaciones web usando PHP y Laravel.",
    "exp5.desc2": "Implementé servicios RESTful para backends móviles.",
    "exp5.desc3": "Integré soluciones de hardware (biometría, escáneres QR).",
    "exp6.title": "Desarrollador Full Stack",
    "exp6.date": "Nov 2016 – Nov 2017",
    "exp6.desc1": "Desarrollé soluciones frontend/backend personalizadas.",
    "exp6.desc2": "Gestioné servidores AWS y optimicé bases de datos.",
    "exp7.title": "Desarrollador Full Stack",
    "exp7.date": "Jul 2015 – Jun 2016",
    "exp7.desc1":
      "Construí sistemas de software personalizados, gestioné bases de datos, manejé facturación electrónica.",
    "exp8.title": "Desarrollador de Software",
    "exp8.date": "Jun 2014 – Jun 2015",
    "exp8.desc1":
      "Desarrollé módulos internos y portales web utilizando Drupal y Symfony.",
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

    "project1.problem": "Desafío: Optimizar la plataforma de e-commerce para mejorar la experiencia de usuario y aumentar las conversiones en un mercado altamente competitivo.",
    "project1.role": "Lideré el rediseño de la interfaz de usuario (UI) y la experiencia de usuario (UX), coordinando un equipo de 3 diseñadores y 5 desarrolladores frontend. Definí la nueva arquitectura de componentes y supervisé la implementación.",
    "project1.result": "Resultado: Se incrementó la tasa de conversión en un 25%, se redujo la tasa de rebote en un 40% y se mejoró la satisfacción del cliente en un 30% según encuestas post-implementación. El nuevo diseño fue lanzado 2 semanas antes de lo previsto.",
    "project1.visualAlt": "Visual del Proyecto 1",

    "project2.problem": "Problema: Necesidad de desarrollar un sistema de gestión de inventario escalable y en tiempo real para una cadena de suministro con múltiples almacenes, reemplazando un sistema legado obsoleto.",
    "project2.role": "Diseñé la arquitectura de microservicios para el nuevo sistema de inventario y desarrollé los servicios core utilizando Java y Spring Boot. Implementé la base de datos NoSQL y configuré el pipeline de CI/CD.",
    "project2.result": "Logro: El nuevo sistema procesó un 50% más de transacciones diarias, redujo los errores de inventario en un 95% y proporcionó visibilidad en tiempo real, mejorando la eficiencia operativa en un 35%. Entregado a tiempo y dentro del presupuesto.",
    "project2.visualAlt": "Enlace al Proyecto 2 en vivo",

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
    "exp0.title": "Team Developer Leader - Global Development Team",
    "exp0.date": "Jan 2026 - Present",
    "exp0.desc1": "Technical leadership of the global development team, reporting directly to the Software Development Directorate.",
    "exp0.desc2": "Direction and execution of the architecture for the integration of the \"Rocket\" system (Mexico) with Fortidia's global \"HUB\" ecosystem.",
    "exp0.desc3": "[Placeholder for technologies/tools]",
    "exp1.title": "Director of IT",
    "exp1.date": "Oct 2021 - Present",
    "exp1.desc1": "Leading technology implementation across LATAM countries.",
    "exp1.desc2":
      "Managing tech teams and high-scale digital transformation projects.",
    "exp1.desc3":
      "Defining and executing tech strategies aligned with corporate goals.",
    "exp2.title": "IT Manager",
    "exp2.date": "Oct 2020 - Oct 2021",
    "exp2.desc1": "Oversaw IT operations and improved internal processes.",
    "exp2.desc2":
      "Led adoption of new technologies and organizational best practices.",
    "exp3.title": "Software Engineer",
    "exp3.date": "Aug 2019 - Oct 2020",
    "exp3.desc1":
      "Developed SPA applications using microfrontend architecture.",
    "exp3.desc2": "Refactored and optimized web components.",
    "exp3.desc3": "Implemented unit testing and atomic design principles.",
    "exp4.title": "Development Lead",
    "exp4.date": "Nov 2018 - Aug 2019",
    "exp4.desc1":
      "Designed software architecture and estimated delivery timelines.",
    "exp4.desc2": "Implemented CI/CD pipelines and managed repositories.",
    "exp4.desc3":
      "Selected and integrated key technologies including AWS, Azure, GCP.",
    "exp5.title": "Development Lead",
    "exp5.date": "Nov 2017 - Nov 2018",
    "exp5.desc1": "Developed web apps using PHP and Laravel.",
    "exp5.desc2": "Implemented RESTful services for mobile backends.",
    "exp5.desc3": "Integrated hardware solutions (biometrics, QR scanners).",
    "exp6.title": "Full Stack Developer",
    "exp6.date": "Nov 2016 - Nov 2017",
    "exp6.desc1": "Developed custom frontend/backend solutions.",
    "exp6.desc2": "Managed AWS servers and optimized databases.",
    "exp7.title": "Full Stack Developer",
    "exp7.date": "Jul 2015 - Jun 2016",
    "exp7.desc1":
      "Built custom software systems, managed databases, handled e-invoicing.",
    "exp8.title": "Software Developer",
    "exp8.date": "Jun 2014 - Jun 2015",
    "exp8.desc1":
      "Developed internal modules and web portals using Drupal and Symfony.",
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

    "project1.problem": "Challenge: Optimize the e-commerce platform to improve user experience and increase conversions in a highly competitive market.",
    "project1.role": "Led the UI/UX redesign, coordinating a team of 3 designers and 5 frontend developers. Defined the new component architecture and oversaw implementation.",
    "project1.result": "Result: Achieved a 25% increase in conversion rate, a 40% reduction in bounce rate, and a 30% improvement in customer satisfaction based on post-implementation surveys. The new design was launched 2 weeks ahead of schedule.",
    "project1.visualAlt": "Project 1 Visual",

    "project2.problem": "Problem: Need to develop a scalable, real-time inventory management system for a multi-warehouse supply chain, replacing an outdated legacy system.",
    "project2.role": "Designed the microservices architecture for the new inventory system and developed core services using Java and Spring Boot. Implemented the NoSQL database and configured the CI/CD pipeline.",
    "project2.result": "Achievement: The new system processed 50% more daily transactions, reduced inventory errors by 95%, and provided real-time visibility, improving operational efficiency by 35%. Delivered on time and within budget.",
    "project2.visualAlt": "Link to Live Project 2",

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
