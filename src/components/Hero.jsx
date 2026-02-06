export default function Hero() {
  return (
    <section>
      <h1>Andoniaina</h1>
      <h2 style={{ color: 'var(--green)' }}>Fullstack Developer</h2>
      <p>
        Building reliable and modern web applications.
      </p>

      <div style={{ marginTop: '24px' }}>
        <a href="#projects">
          <button style={{ background: 'var(--green)', color: '#fff', padding: '12px 20px' }}>
            View Projects
          </button>
        </a>

        <a href="#contact" style={{ marginLeft: '12px' }}>
          <button style={{ border: '1px solid var(--green)', color: 'var(--green)', padding: '12px 20px' }}>
            Contact Me
          </button>
        </a>
      </div>
    </section>
  )
}
