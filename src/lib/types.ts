export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  confidence?: number;
  sources?: string[];
}

export interface Department {
  name: string;
  code: string;
  intake: number;
  hod: string;
  established: number;
  facultyCount?: number;
  accreditation?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  type: "technical" | "cultural" | "placement" | "academic";
  venue: string;
  seats: number;
  registered: number;
  description?: string;
}

export interface Facility {
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface CampusLocation {
  id: string;
  name: string;
  floor: number;
  type: string;
  image: string;
  coordinates: { x: number; y: number };
  nearbyFacilities: string[];
}

export interface Course {
  name: string;
  code: string;
  duration: string;
  seats: number;
  fees: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface AIFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Faculty {
  name: string;
  designation: string;
  specialization: string;
  publications: number;
  initials: string;
}

export interface Scholarship {
  name: string;
  amount: string;
  criteria: string;
  type: string;
}
