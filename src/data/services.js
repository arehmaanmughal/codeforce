import webImage from "../assets/images/web-dev.webp";
import mobileImage from "../assets/images/mobile-dev.webp";
import cloudImage from "../assets/images/cloud.webp";
import databaseImage from "../assets/images/database.webp";
import marketingImage from "../assets/images/marketing.webp";
import cybersecurityImage from "../assets/images/cybersecurity.webp";
import {
  IoCloudOutline,
  IoLaptopOutline,
  IoLockClosedOutline,
  IoPhonePortraitOutline,
  IoServerOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    description: "We develop scalable web applications with modern technology.",
    details:
      "Our web development services include building responsive, scalable web applications using modern frameworks like React, Angular, and Vue. We ensure a great user experience across all devices.",
    features: [
      "Responsive Design",
      "Modern Frameworks (React, Angular, Vue)",
      "Scalable Architecture",
      "Custom Web Applications",
    ],
    pricing: "Starting at $10,000 for custom projects.",
    technologies: ["React", "Angular", "Vue", "Node.js", "MongoDB", "AWS"],
    benefits: [
      "Improved performance and scalability",
      "Seamless user experience",
      "Highly customizable for unique business needs",
    ],
    caseStudies: [
      {
        client: "TechCorp",
        result: "Increased website traffic by 150% in 6 months.",
      },
      {
        client: "Innovate Inc.",
        result: "Reduced website load time by 50%, leading to higher conversions.",
      },
    ],
    testimonials: [
      {
        client: "TechCorp",
        feedback:
          "Their web development services transformed our online presence!",
      },
      {
        client: "Innovate Inc.",
        feedback:
          "We saw significant improvements in performance and user engagement.",
      },
    ],
    image: webImage,
    icon: IoLaptopOutline,
    link: "/services/web-development",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description:
      "We create mobile applications for both iOS and Android platforms.",
    details:
      "We build native and cross-platform mobile applications with a focus on performance, security, and usability. Whether you're looking for an iOS, Android, or hybrid app, we've got you covered.",
    features: [
      "Native and Cross-Platform Development",
      "iOS and Android Support",
      "Performance Optimized",
      "User-Centric Design",
    ],
    pricing: "Starting at $15,000 for full app development.",
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
    benefits: [
      "High performance across platforms",
      "Secure and scalable mobile apps",
      "User-friendly interfaces",
    ],
    caseStudies: [
      {
        client: "AppMaster",
        result: "Achieved 1M downloads in 3 months post-launch.",
      },
      {
        client: "ShopEase",
        result: "Increased mobile sales by 40% through app optimization.",
      },
    ],
    testimonials: [
      {
        client: "AppMaster",
        feedback:
          "Their mobile development expertise is unmatched. Our app skyrocketed in popularity.",
      },
      {
        client: "ShopEase",
        feedback:
          "The team was able to optimize our app and boost our revenue significantly.",
      },
    ],
    image: mobileImage,
    icon: IoPhonePortraitOutline,
    link: "/services/mobile-development",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "We offer cloud-based services and solutions to scale your business.",
    details:
      "Our cloud solutions include cloud infrastructure setup, management, and cloud-native application development. We work with major cloud providers like AWS, Google Cloud, and Azure.",
    features: [
      "Cloud Infrastructure Setup",
      "Cloud-Native App Development",
      "Scalable Solutions",
      "AWS, Google Cloud, Azure",
    ],
    pricing: "Custom pricing based on requirements.",
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    benefits: [
      "Reduced infrastructure costs",
      "Enhanced scalability and flexibility",
      "Improved security and compliance",
    ],
    caseStudies: [
      {
        client: "ScaleX",
        result: "Migrated to AWS with zero downtime, reducing costs by 20%.",
      },
      {
        client: "CloudGo",
        result: "Enabled 99.99% uptime for mission-critical applications.",
      },
    ],
    testimonials: [
      {
        client: "ScaleX",
        feedback:
          "Their cloud solutions helped us scale effortlessly while cutting costs.",
      },
      {
        client: "CloudGo",
        feedback:
          "We rely on their expertise for all our cloud infrastructure needs. They deliver results.",
      },
    ],
    image: cloudImage,
    icon: IoCloudOutline,
    link: "/services/cloud-solutions",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "We provide strategic digital marketing services to boost your online presence.",
    details:
      "Our digital marketing services include SEO, social media marketing, content creation, and pay-per-click advertising. We help businesses grow their audience and increase conversions through targeted campaigns.",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Pay-Per-Click Advertising",
      "Social Media Campaigns",
    ],
    pricing: "Starting at $5,000 per month for comprehensive campaigns.",
    technologies: ["Google Analytics", "SEO Tools", "Facebook Ads", "Google Ads"],
    benefits: [
      "Increased online visibility",
      "Higher engagement and conversions",
      "Data-driven strategies for maximum ROI",
    ],
    caseStudies: [
      {
        client: "MarketBoost",
        result: "Increased website traffic by 200% in 3 months.",
      },
      {
        client: "BrandWave",
        result: "Achieved 10x ROI on digital ad spend within 6 months.",
      },
    ],
    testimonials: [
      {
        client: "MarketBoost",
        feedback:
          "Their digital marketing expertise took our business to the next level.",
      },
      {
        client: "BrandWave",
        feedback:
          "We saw incredible results from their targeted marketing campaigns.",
      },
    ],
    image: marketingImage,
    icon: IoTrendingUpOutline,
    link: "/services/digital-marketing",
  },
  {
    id: "database-management",
    title: "Database Management",
    description:
      "We offer expert database management services to ensure data security and performance.",
    details:
      "Our database management services include database design, performance optimization, backup and recovery, and ongoing maintenance. We work with relational and NoSQL databases to suit your business needs.",
    features: [
      "Database Design and Optimization",
      "Data Security and Encryption",
      "Backup and Disaster Recovery",
      "Relational and NoSQL Databases",
    ],
    pricing: "Starting at $3,000 per month for managed services.",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS RDS"],
    benefits: [
      "Improved database performance and scalability",
      "Enhanced data security",
      "Minimized downtime with regular backups",
    ],
    caseStudies: [
      {
        client: "DataSecure",
        result: "Reduced database query times by 70%.",
      },
      {
        client: "SafeStore",
        result: "Ensured 100% data integrity after a system failure.",
      },
    ],
    testimonials: [
      {
        client: "DataSecure",
        feedback:
          "Their database management services drastically improved our system's performance.",
      },
      {
        client: "SafeStore",
        feedback:
          "We can always rely on their team for top-notch database security and reliability.",
      },
    ],
    image: databaseImage,
    icon: IoServerOutline,
    link: "/services/database-management",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "We provide comprehensive cybersecurity solutions to protect your business from threats.",
    details:
      "Our cybersecurity services include vulnerability assessments, threat monitoring, penetration testing, and incident response. We help secure your systems and data against evolving cyber threats.",
    features: [
      "Vulnerability Assessments",
      "Penetration Testing",
      "24/7 Threat Monitoring",
      "Incident Response",
    ],
    pricing: "Starting at $7,000 per month for managed security services.",
    technologies: [
      "Firewall Systems",
      "Intrusion Detection",
      "SIEM Tools",
      "Encryption Solutions",
    ],
    benefits: [
      "Proactive threat identification",
      "Minimized risk of data breaches",
      "Fast response to security incidents",
    ],
    caseStudies: [
      {
        client: "SecureNet",
        result: "Prevented 95% of attempted attacks through proactive monitoring.",
      },
      {
        client: "SafeTech",
        result: "Successfully mitigated a ransomware attack within hours.",
      },
    ],
    testimonials: [
      {
        client: "SecureNet",
        feedback:
          "Their cybersecurity solutions are vital to our business. We've never felt more secure.",
      },
      {
        client: "SafeTech",
        feedback:
          "Thanks to their quick response, we avoided a major security disaster.",
      },
    ],
    image: cybersecurityImage,
    icon: IoLockClosedOutline,
    link: "/services/cybersecurity",
  },
];

export default servicesData;
