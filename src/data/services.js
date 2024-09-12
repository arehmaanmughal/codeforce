import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaChartLine,
  FaDatabase,
  FaLock,
} from "react-icons/fa";
import webImage from "../assets/images/web-dev.jpg"; // Example image paths
import mobileImage from "../assets/images/mobile-dev.jpg"; // Add actual paths
import cloudImage from "../assets/images/cloud.jpg";
import databaseImage from "../assets/images/database.jpg"; // Add actual paths
import marketingImage from "../assets/images/marketing.jpg";
import cybersecurityImage from "../assets/images/cybersecurity.jpg";

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    description: "We develop scalable web applications with modern technology.",
    details:
      "Our web development services include building responsive, scalable web applications using modern frameworks like React, Angular, and Vue. We ensure a great user experience across all devices.",
    image: webImage,
    icon: FaLaptopCode,
    link: "/services/web-development",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description:
      "We create mobile applications for both iOS and Android platforms.",
    details:
      "We build native and cross-platform mobile applications with a focus on performance, security, and usability. Whether you're looking for an iOS, Android, or hybrid app, we've got you covered.",
    image: mobileImage,
    icon: FaMobileAlt,
    link: "/services/mobile-development",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "We offer cloud-based services and solutions to scale your business.",
    details:
      "Our cloud solutions include cloud infrastructure setup, management, and cloud-native application development. We work with major cloud providers like AWS, Google Cloud, and Azure.",
    image: cloudImage,
    icon: FaCloud,
    link: "/services/cloud-solutions",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Grow your business with our targeted digital marketing strategies.",
    details:
      "Our digital marketing services include SEO, SEM, content marketing, social media marketing, and paid advertising. We help businesses increase visibility and reach their target audience effectively.",
    image: marketingImage,
    icon: FaChartLine,
    link: "/services/digital-marketing",
  },
  {
    id: "database-management",
    title: "Database Management",
    description:
      "We provide robust database solutions for your business needs.",
    details:
      "Our database management services include database design, setup, optimization, and maintenance. We work with relational and NoSQL databases to ensure data integrity, scalability, and security.",
    image: databaseImage,
    icon: FaDatabase,
    link: "/services/database-management",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Protect your business with our comprehensive cybersecurity solutions.",
    details:
      "We offer cybersecurity services such as vulnerability assessments, security audits, threat detection, and incident response to safeguard your digital assets from cyber threats and data breaches.",
    image: cybersecurityImage,
    icon: FaLock,
    link: "/services/cybersecurity",
  },
  // Add more services as needed
];

export default servicesData;
