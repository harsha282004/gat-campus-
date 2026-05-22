import type {
  AIFeature,
  CampusLocation,
  Course,
  Department,
  Event,
  Facility,
  NavLink,
  Scholarship,
  Stat,
  Testimonial,
} from "./types";

export const SITE = {
  name: "GAT Campus Compass AI",
  tagline: "Navigate. Explore. Discover.",
  description:
    "Your AI-powered campus companion for GAT — navigate facilities, explore academics, and discover campus life.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "Virtual Tour", href: "/virtual-tour" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const STATS: Stat[] = [
  { label: "Students", value: 5000, suffix: "+", icon: "Users" },
  { label: "Programs", value: 30, suffix: "+", icon: "BookOpen" },
  { label: "Years Excellence", value: 20, suffix: "+", icon: "Award" },
  { label: "Placement", value: 100, suffix: "%", icon: "TrendingUp" },
];

export const WHY_CHOOSE = [
 {
  title: "AI-Powered Guidance",
  description:
    "Get instant answers about campus, courses, and facilities with our intelligent assistant.",
  icon: "Brain",
  image: "/images/ai-guidance.jpg",
},
  {
    title: "Smart Navigation",
    description:
      "Find any building, lab, or facility with turn-by-turn campus navigation.",
    icon: "Navigation",
    image: "/images/navigation-support.jpg",
  },
  {
    title: "24/7 Assistant",
    description:
      "Round-the-clock support for admissions, academics, and campus queries.",
    icon: "Clock",
    image:
      "/images/assistance.jpeg",
  },
  {
    title: "Immersive Tour",
    description:
      "Explore every corner of campus virtually before you even visit.",
    icon: "Map",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
  },
];

export const AI_FEATURES: AIFeature[] = [
  {
    title: "Multi-Agent AI System",
    description: "Coordinated AI agents handle complex campus queries seamlessly.",
    icon: "Brain",
  },
  {
    title: "RAG-Based Answers",
    description: "Retrieval-augmented generation for accurate, sourced responses.",
    icon: "Database",
  },
  {
    title: "Smart Navigation",
    description: "Real-time pathfinding across campus buildings and floors.",
    icon: "Navigation",
  },
  {
    title: "Virtual Campus Tour",
    description: "360° immersive exploration of every campus location.",
    icon: "Map",
  },
  {
    title: "Campus Query Assistant",
    description: "Ask anything about academics, events, or facilities.",
    icon: "MessageCircle",
  },
  {
    title: "Voice Assistance",
    description: "Hands-free voice commands for navigation and queries.",
    icon: "Mic",
  },
  
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "B.Tech CSE, Final Year",
    content:
      "Campus Compass AI helped me find labs and register for events in seconds. It's like having a senior student guide you 24/7.",
    rating: 5,
    initials: "PS",
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    role: "Parent",
    content:
      "The virtual tour gave our family complete confidence before admission. The AI assistant answered every question patiently.",
    rating: 5,
    initials: "RK",
  },
  {
    id: "3",
    name: "Dr. Ananya Menon",
    role: "Faculty, AIML Dept",
    content:
      "Students navigate to research labs effortlessly now. This platform bridges the gap between technology and campus life.",
    rating: 5,
    initials: "AM",
  },
  {
    id: "4",
    name: "Arjun Patel",
    role: "B.Tech ECE, 2nd Year",
    content:
      "I used the AI assistant during TechFest to find seminar halls. Saved me 20 minutes of wandering around campus!",
    rating: 4,
    initials: "AP",
  },
  {
    id: "5",
    name: "Sneha Reddy",
    role: "MBA Student",
    content:
      "Admission process guidance was spot-on. Fee structure, scholarships — everything in one place. Highly recommended!",
    rating: 5,
    initials: "SR",
  },
];

export const DEPARTMENTS: Department[] = [
  {
    name: "Computer Science & Engineering",
    code: "CSE",
    intake: 180,
    hod: "Dr. R. Venkatesh",
    established: 1998,
    facultyCount: 42,
    accreditation: "NBA",
  },
  {
    name: "AI & Machine Learning",
    code: "AIML",
    intake: 120,
    hod: "Dr. S. Priya",
    established: 2020,
    facultyCount: 28,
    accreditation: "NBA",
  },
  {
    name: "Information Science",
    code: "ISE",
    intake: 120,
    hod: "Dr. K. Mohan",
    established: 2005,
    facultyCount: 35,
    accreditation: "NBA",
  },
  {
    name: "Electronics & Communication",
    code: "ECE",
    intake: 120,
    hod: "Dr. P. Lakshmi",
    established: 2000,
    facultyCount: 38,
    accreditation: "NBA",
  },
  {
    name: "Electrical & Electronics",
    code: "EEE",
    intake: 60,
    hod: "Dr. V. Suresh",
    established: 2002,
    facultyCount: 25,
    accreditation: "NAAC A+",
  },
  {
    name: "Civil Engineering",
    code: "CIVIL",
    intake: 60,
    hod: "Dr. N. Ramesh",
    established: 2008,
    facultyCount: 22,
    accreditation: "NAAC A+",
  },
  {
    name: "Mechanical Engineering",
    code: "MECH",
    intake: 60,
    hod: "Dr. H. Karthik",
    established: 2010,
    facultyCount: 24,
    accreditation: "NAAC A+",
  },
  {
  name: "Aeronautical Engineering",
  code: "AERO",
  intake: 60,
  hod: "Dr. A. Prakash",
  established: 2015,
  facultyCount: 20,
  accreditation: "NBA",
},
];

export const FACILITIES: Facility[] = [
  {
  name: "Central Library",
  description: "State-of-the-art library with digital and physical resources.",
  image: "/images/central-library.jpeg",
  features: ["50,000+ books", "Digital access", "24/7 study zones"],
},

{
  name: "Computer Labs",
  description: "High-performance computing labs for all departments.",
  image: "/images/gat-campus.jpeg",
  features: ["500+ systems", "24/7 access", "GPU clusters"],
},
  {
    name: "Boys/Girls Hostel",
    description: "Comfortable residential facilities with modern amenities.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
    features: ["AC rooms", "Mess & gym", "WiFi enabled"],
  },
  {
    name: "Cafeteria",
    description: "Multi-cuisine dining with spacious seating.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    features: ["500 seating", "Multiple cuisines", "Hygienic kitchen"],
  },
  {
    name: "Sports Complex",
    description: "World-class sports facilities for all disciplines.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    features: ["Cricket", "Football", "Basketball", "Swimming"],
  },
  {
    name: "WiFi Campus",
    description: "High-speed connectivity across entire campus.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    features: ["1 Gbps", "Full coverage", "Eduroam support"],
  },
  {
    name: "Innovation Center",
    description: "Startup incubator with maker space and mentorship.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: ["Startup incubator", "3D printing", "Mentorship"],
  },
  {
    name: "Medical Center",
    description: "24/7 healthcare with ambulance and pharmacy.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    features: ["24/7 doctor", "Ambulance", "Pharmacy"],
  },
];

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "TechFest 2025",
    date: "March 15-17, 2025",
    time: "9:00 AM",
    type: "technical",
    venue: "Main Auditorium",
    seats: 500,
    registered: 412,
  },
  {
    id: "2",
    title: "Placement Drive: TCS, Infosys",
    date: "Feb 28, 2025",
    time: "10:00 AM",
    type: "placement",
    venue: "Placement Cell",
    seats: 200,
    registered: 185,
  },
  {
    id: "3",
    title: "AI/ML Workshop",
    date: "March 5, 2025",
    time: "2:00 PM",
    type: "technical",
    venue: "Innovation Lab",
    seats: 80,
    registered: 72,
  },
  {
    id: "4",
    title: "Cultural Fest UTSAV",
    date: "April 10-12, 2025",
    time: "5:00 PM",
    type: "cultural",
    venue: "Open Air Theatre",
    seats: 1000,
    registered: 890,
  },
  {
    id: "5",
    title: "Hackathon 48hrs",
    date: "March 20, 2025",
    time: "8:00 AM",
    type: "technical",
    venue: "CSE Block",
    seats: 150,
    registered: 148,
  },
  {
    id: "6",
    title: "Seminar: Industry 4.0",
    date: "Feb 25, 2025",
    time: "11:00 AM",
    type: "academic",
    venue: "Seminar Hall",
    seats: 120,
    registered: 95,
  },
  {
    id: "7",
    title: "Sports Day",
    date: "March 8, 2025",
    time: "7:00 AM",
    type: "cultural",
    venue: "Sports Complex",
    seats: 300,
    registered: 267,
  },
  {
    id: "8",
    title: "Alumni Meet 2025",
    date: "April 5, 2025",
    time: "4:00 PM",
    type: "cultural",
    venue: "Admin Block",
    seats: 250,
    registered: 198,
  },
  {
    id: "9",
    title: "Research Paper Presentation",
    date: "March 12, 2025",
    time: "10:00 AM",
    type: "academic",
    venue: "Conference Room",
    seats: 60,
    registered: 45,
  },
  {
    id: "10",
    title: "Startup Pitch Day",
    date: "April 18, 2025",
    time: "2:00 PM",
    type: "technical",
    venue: "Innovation Center",
    seats: 100,
    registered: 78,
  },
];

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: "library",
    name: "Central Library",
    floor: 0,
    type: "academic",
    image:
      "/images/central-library.jpeg",
    coordinates: { x: 45, y: 30 },
    nearbyFacilities: ["CSE Block", "Seminar Hall", "Cafeteria"],
  },
  {
    id: "cse",
    name: "CSE Block",
    floor: 1,
    type: "academic",
    image:
      "/images/gat-campus.jpeg",
    coordinates: { x: 60, y: 45 },
    nearbyFacilities: ["Innovation Lab", "Library", "Admin Office"],
  },
  {
    id: "auditorium",
    name: "Main Auditorium",
    floor: 0,
    type: "events",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    coordinates: { x: 30, y: 55 },
    nearbyFacilities: ["Admin Block", "Cafeteria", "Sports Complex"],
  },
  {
    id: "cafeteria",
    name: "Cafeteria",
    floor: 0,
    type: "amenity",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    coordinates: { x: 50, y: 60 },
    nearbyFacilities: ["Library", "Hostel", "Auditorium"],
  },
  {
    id: "sports",
    name: "Sports Complex",
    floor: 0,
    type: "sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
    coordinates: { x: 75, y: 70 },
    nearbyFacilities: ["Hostel", "Medical Center", "Parking"],
  },
  {
    id: "innovation",
    name: "Innovation Lab",
    floor: 2,
    type: "research",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    coordinates: { x: 65, y: 40 },
    nearbyFacilities: ["CSE Block", "Library", "Seminar Hall"],
  },
  {
    id: "seminar",
    name: "Seminar Hall",
    floor: 1,
    type: "academic",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    coordinates: { x: 40, y: 42 },
    nearbyFacilities: ["Library", "CSE Block", "Admin Office"],
  },
  {
    id: "admin",
    name: "Admin Office",
    floor: 0,
    type: "admin",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    coordinates: { x: 25, y: 35 },
    nearbyFacilities: ["Main Gate", "Auditorium", "Parking"],
  },
];

export const SUGGESTED_PROMPTS = [
  "How do I reach the library?",
  "Tell me about admissions",
  "Show computer science department",
  "Where is the seminar hall?",
  "What are placement statistics?",
  "What events are happening this week?",
];

export const AI_RESPONSES: Record<string, string> = {
  "How do I reach the library?":
    "From the Main Gate, walk straight 200m past Admin Block. Turn right at the fountain — Central Library is on your left. Estimated walk: 4 minutes. I can start navigation on the Virtual Tour if you'd like!",
  "Tell me about admissions":
    "GAT admissions for 2025-26 are open! B.Tech programs require 45%+ in PCM (12th). Application deadline: June 30, 2025. Management quota seats available. Visit the Admissions page for eligibility checker and online application.",
  "Show computer science department":
    "CSE Department — Established 1998, NBA accredited. Intake: 180 students/year. HOD: Dr. R. Venkatesh. Specializations: Cloud, Cybersecurity, Full Stack. 42 faculty members, 15+ research labs. Located in CSE Block, Floors 1-3.",
  "Where is the seminar hall?":
    "Seminar Hall is on the 1st floor of the Academic Block, next to Central Library. Capacity: 120 seats. Currently hosting 'Industry 4.0' seminar on Feb 25. Registration still open — 25 seats left!",
  "What are placement statistics?":
    "GAT Placement Highlights 2024: 100% placement rate, Average package ₹8.5 LPA, Highest ₹42 LPA (Microsoft). Top recruiters: TCS, Infosys, Wipro, Amazon, Microsoft. 45+ companies visited campus. Next drive: Feb 28 — TCS & Infosys.",
  "What events are happening this week?":
    "This week's events: Feb 25 — Industry 4.0 Seminar; Feb 28 — TCS/Infosys Placement Drive; March 5 — AI/ML Workshop; March 8 — Sports Day. TechFest 2025 registration opens March 1. Want me to register you for any event?",
};

export const COURSES: Course[] = [
  {
    name: "B.Tech Computer Science",
    code: "CSE",
    duration: "4 Years",
    seats: 180,
    fees: "₹1,20,000/yr",
    category: "Engineering",
  },
  {
    name: "B.Tech AI & ML",
    code: "AIML",
    duration: "4 Years",
    seats: 120,
    fees: "₹1,35,000/yr",
    category: "Engineering",
  },
  {
    name: "B.Tech Information Science",
    code: "ISE",
    duration: "4 Years",
    seats: 120,
    fees: "₹1,15,000/yr",
    category: "Engineering",
  },
  {
    name: "B.Tech ECE",
    code: "ECE",
    duration: "4 Years",
    seats: 120,
    fees: "₹1,10,000/yr",
    category: "Engineering",
  },
  {
    name: "B.Tech EEE",
    code: "EEE",
    duration: "4 Years",
    seats: 60,
    fees: "₹1,05,000/yr",
    category: "Engineering",
  },
  {
    name: "B.Tech Civil",
    code: "CIVIL",
    duration: "4 Years",
    seats: 60,
    fees: "₹95,000/yr",
    category: "Engineering",
  },
  {
    name: "B.Tech Mechanical",
    code: "MECH",
    duration: "4 Years",
    seats: 60,
    fees: "₹1,00,000/yr",
    category: "Engineering",
  },
  {
    name: "MBA",
    code: "MBA",
    duration: "2 Years",
    seats: 60,
    fees: "₹1,50,000/yr",
    category: "Management",
  },
  {
    name: "MCA",
    code: "MCA",
    duration: "2 Years",
    seats: 60,
    fees: "₹1,25,000/yr",
    category: "Computer Applications",
  },
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    name: "Merit Scholarship",
    amount: "Up to 50% tuition",
    criteria: "12th score ≥ 90% or KCET rank < 5000",
    type: "merit",
  },
  {
    name: "Sports Excellence",
    amount: "Up to ₹50,000/yr",
    criteria: "State/National level sports achievement",
    type: "sports",
  },
  {
    name: "EWS Scholarship",
    amount: "Up to 75% tuition",
    criteria: "Family income < ₹2.5 LPA, valid EWS certificate",
    type: "ews",
  },
  {
    name: "Management Quota Aid",
    amount: "Flexible payment plans",
    criteria: "Management quota admission with installment option",
    type: "management",
  },
];

export const FACULTY = [
  {
    name: "Dr. R. Rajkumar",
    designation: "Professor & Head of CSE",
    initials: "RR",
  },
  {
    name: "Dr. Girish Rao Salanke N S",
    designation: "Professor & Head of AIDS",
    initials: "GR",
  },
  {
    name: "Dr. Seema B Hegde",
    designation: "Professor",
    specialization: "Computer Science",
    initials: "SB",
  },
  {
    name: "Dr. Shruthi G",
    designation: "Associate Professor",
    specialization: "DBMS",
    initials: "SG",
  },
  {
    name: "Supriya H S",
    designation: "Associate Professor",
    specialization: "Devops",
    publications: 28,
    initials: "SU",
  },
  {
    name: "Dr. H. Karthik",
    designation: "Assistant Professor",
    specialization: "Robotics",
    publications: 22,
    initials: "HK",
  },
];

export const RESEARCH_LABS = [
  {
    name: "AI/ML Lab",
    equipment: ["NVIDIA DGX", "TensorFlow clusters", "Edge devices"],
    hours: "Mon-Sat 8AM-8PM",
  },
  {
    name: "Cybersecurity Lab",
    equipment: ["Pen-test suite", "Firewall simulators", "SIEM tools"],
    hours: "Mon-Fri 9AM-6PM",
  },
  {
    name: "VLSI Lab",
    equipment: ["Cadence tools", "FPGA boards", "Chip testers"],
    hours: "Mon-Sat 9AM-5PM",
  },
  {
    name: "Robotics Lab",
    equipment: ["UR5 arms", "ROS workstations", "3D printers"],
    hours: "Mon-Sat 10AM-7PM",
  },
];

export const CONTACT = {
  phone: "+91 80 1234 5678",
  email: "info@gat.edu.in",
  address: "GAT Campus, Bangalore, Karnataka 560001",
  hours: "Mon-Sat: 9:00 AM - 5:00 PM",
};
