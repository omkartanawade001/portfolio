import {
  BookOpen,
  Building2,
  GraduationCap,
} from 'lucide-react';

// Accent per *kind* of thing, not per project. The card grid is easier to scan
// when the visual signal groups similar work together.
export const PROJECT_KINDS = {
  web: {
    tile: 'border-brand-500/20 bg-brand-500/10 text-brand-300',
    edge: 'via-brand-400/60',
    chip: 'border-brand-500/20 bg-brand-500/10 text-brand-300',
  },
  enterprise: {
    tile: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-300',
    edge: 'via-cyan-400/60',
    chip: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-300',
  },
  data: {
    tile: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-300',
    edge: 'via-indigo-400/60',
    chip: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-300',
  },
  mobile: {
    tile: 'border-sky-500/20 bg-sky-500/10 text-sky-300',
    edge: 'via-sky-400/60',
    chip: 'border-sky-500/20 bg-sky-500/10 text-sky-300',
  },
  automation: {
    tile: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
    edge: 'via-emerald-400/60',
    chip: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  },
};

export const featuredProjects = [
  {
    id: 'library-management',
    kind: 'data',
    title: 'Library Management System',
    domain: 'SQL',
    description:
      'A relational database system designed to manage book records, issue and return processing, and fine calculation with a focus on data integrity, normalization, and query performance.',
    technologies: [
      'SQL',
      'MySQL',
      'Joins',
      'Constraints',
      'Aggregate Functions',
    ],
    features: [
      'Designed a normalized relational database schema for book records, issue and return processing, and fine calculation',
      'Implemented CRUD operations and optimized SQL queries using Joins, Constraints, and aggregate functions',
      'Indexed frequently queried columns to improve lookup performance',
      'Ensured data integrity through primary key and foreign key constraints',
    ],
    icon: <BookOpen size={48} />,
    metric: 'Database',
  },

  {
    id: 'hospital-management',
    kind: 'enterprise',
    title: 'Hospital Management System',
    domain: 'Core Java + JDBC',
    description:
      'A Java and JDBC-based application for managing patient records, appointments, and billing through a structured and normalized relational SQL database.',
    technologies: [
      'Core Java',
      'OOP',
      'JDBC',
      'SQL',
      'Exception Handling',
    ],
    features: [
      'Developed a Java/JDBC application to manage patient records, appointments, and billing',
      'Implemented registration, scheduling, and billing modules using Core Java OOP principles',
      'Applied exception handling to improve application reliability and error management',
      'Designed a normalized database schema to reduce redundancy and support efficient record retrieval',
    ],
    icon: <Building2 size={48} />,
    metric: 'Java + JDBC',
  },

  {
    id: 'online-examination',
    kind: 'web',
    title: 'Online Examination Platform',
    domain: 'Core Java + JDBC',
    description:
      'A web-based examination platform for conducting timed multiple-choice tests with automated evaluation, result generation, and a responsive frontend experience.',
    technologies: [
      'Core Java',
      'SQL',
      'JavaScript',
      'PHP',
      'React JS'
    ],
    features: [
      'Built a web-based platform for timed multiple-choice tests with automatic evaluation',
      'Developed backend logic using Core Java and JDBC for test-session management and scoring',
      'Implemented automated result generation for completed examinations',
      'Designed an intuitive and mobile-responsive UI using HTML, CSS, and JavaScript',
    ],
    icon: <GraduationCap size={48} />,
    metric: 'Full Stack',
  },
];

export const additionalProjects = [];

export const allProjects = [...featuredProjects, ...additionalProjects];