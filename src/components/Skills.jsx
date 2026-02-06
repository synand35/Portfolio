const skills = {
  Frontend: ['React', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Express', 'Python'],
  DevOps: ['Docker', 'Git'],
  Databases: ['SQLite', 'PostgreSQL'],
}

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '24px' }}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul style={{ marginTop: '8px', color: 'var(--gray)' }}>
              {items.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
