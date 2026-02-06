const projects = [
  {
    name: 'School Management App',
    desc: 'Web application for managing classes, students and grades.',
    tech: 'React, Node.js, SQLite, Docker',
    github: '#',
    demo: '#',
  },
  {
    name: 'Network Monitoring Tool',
    desc: 'Python-based bandwidth monitoring and visualization.',
    tech: 'Python, SQLite',
    github: '#',
    demo: '#',
  },
  {
    name: 'Dashboard UI',
    desc: 'Modern admin dashboard built with React.',
    tech: 'React',
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
        {projects.map(p => (
          <div key={p.name} style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
            <h3>{p.name}</h3>
            <p style={{ color: 'var(--gray)', margin: '8px 0' }}>{p.desc}</p>
            <small>{p.tech}</small>
            <div style={{ marginTop: '12px' }}>
              <a href={p.github}>GitHub</a> · <a href={p.demo}>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
