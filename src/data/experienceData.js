// Experience data for the portfolio.
// `description` is the one-line lead; `achievements` carries the specifics and
// `tech` the tooling, so each card is scannable rather than a wall of prose.
//
// BASE_URL rather than a bare path: files in public/ are served from the site
// root, and this site deploys under a subpath (see `base` in vite.config.js).
// A path without the prefix would 404 in production and only work in dev.
export const EXPERIENCE_DATA = [
 {
  period: 'March 2026 - June 2026',
  title: 'Java Full Stack Developer Intern',
  company: 'Satish IT Service',
  location: 'Pune, India',
  logo: `${import.meta.env.BASE_URL}satish.jpeg`,
  description:
    'Java full stack development training focused on backend programming, web development, SQL databases, and software development practices.',
  achievements: [
    'Applied Core and Advanced Java concepts including OOP, Collections, Exception Handling, Multithreading, and JDBC through hands-on assignments, debugging, and code refinement based on mentor feedback.',
    'Built responsive and user-friendly web interfaces using HTML, CSS, and JavaScript while applying UX and usability best practices.',
    'Gained hands-on experience in SQL database design and developed optimized queries for real-world application scenarios.',
    'Applied SDLC and Agile practices including requirements analysis, coding, and testing through structured, project-based training.',
  ],
  tech: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'JDBC', 'Agile', 'SDLC'],
  experience: '4 months',
  delay: 0.1,
}
];
