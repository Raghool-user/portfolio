import React, { useEffect, useRef, useState } from 'react';
import './style.css';

/**
 * Portfolio — React version of Raghool M's portfolio.
 * Drop this file + style.css into a React project (e.g. Vite/CRA).
 * Put Raghool_resume.pdf in your `public/` folder so the download
 * button below can find it at "/Raghool_resume.pdf".
 */

const TABS = [
  { id: 'hero', label: 'index.html' },
  { id: 'about', label: 'about.md' },
  { id: 'skills', label: 'skills.json' },
  { id: 'experience', label: 'experience.log' },
  { id: 'projects', label: 'projects/' },
  { id: 'certifications', label: 'certs.yml' },
  { id: 'contact', label: 'contact.sh' },
];

const SKILL_GROUPS = [
  { title: 'Languages', tags: ['Python', 'Java', 'C', 'C++ (Basics)'] },
  { title: 'Web Technologies', tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'PHP'] },
  { title: 'Database', tags: ['MySQL', 'SQL (DDL/DML/Joins)', 'RDBMS'] },
  { title: 'Tools & Platforms', tags: ['Git', 'GitHub', 'VS Code', 'Google Cloud Platform'] },
  { title: 'Concepts', tags: ['Data Structures & Algorithms', 'OOP', 'ML Fundamentals'] },
];

const PROJECTS = [
  {
    name: 'multimodal-deepfake-detection',
    desc: 'Real-time deepfake detection system combining video, audio, and lip-sync analysis. Features extracted with ViT, WavLM, and SyncNet, classified through a multimodal fusion and ensemble pipeline for improved accuracy and fewer false positives.',
    stack: ['Python · PyTorch · Scikit-learn', 'Flask · OpenCV · Transformers'],
    link: 'https://github.com/Raghool-user',
  },
  {
    name: 'expense-tracker-app',
    desc: "Web application (built as part of Naan Mudhalvan) to track daily expenses and manage monthly budgets, with alerts when spending exceeds limits and interactive pie/bar chart visualizations for expense analysis.",
    stack: ['HTML · CSS · JavaScript', 'React.js'],
    link: 'https://github.com/Raghool-user',
  },
];

const CERTS = [
  { name: 'Web Development Intern', issuer: 'Rail Infotech Services, Southern Railways', link: 'https://drive.google.com/file/d/1MISNt9DlH9hVT7BsPmfspUeJs3iGlFIi/view?usp=drivesdk' },
  { name: 'Java, Python, C++', issuer: 'Cybernaut Edu-Tech', link: 'https://drive.google.com/drive/folders/14pVPoB01VUjm4phO3xTOur6jFaJNzLk6' },
  { name: 'Data Analytics', issuer: 'Google', link: 'https://drive.google.com/file/d/183qHWYaWw6d-NwttHHcPaXCz5t5FjgdD/view?usp=drivesdk' },
  { name: 'Google Cloud Engineering', issuer: 'Google', link: 'https://drive.google.com/file/d/1qUI9AIGEchuUkNd2U8DLud6oK-Q4GS2Y/view?usp=drivesdk' },
  { name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', link: 'https://learn.nvidia.com/certificates?id=i-TSqtoxSNCw6MYWUJHLWQ' },
];

function useScrollReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      if (el) el.classList.add('in');
      return;
    }
    const obs = new IntersectionObserver(
      ([entry], o) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          o.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function Reveal({ id, children }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <section id={id} ref={ref} className="section reveal">
      <div className="wrap">{children}</div>
    </section>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('hero');
  const sectionRefs = useRef({});

  useEffect(() => {
    const targets = TABS.map(t => document.getElementById(t.id)).filter(Boolean);
    if (!('IntersectionObserver' in window) || targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className="tabbar">
        <div className="tabbar-inner">
          <div className="tab-dots"><span /><span /><span /></div>
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab ${active === tab.id ? 'active' : ''}`}
              onClick={() => scrollTo(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <header className="hero" id="hero">
        <div className="wrap">
          <div className="terminal">
            <div className="terminal-titlebar">
              <div className="dots"><span /><span /><span /></div>
              raghool@portfolio: ~
            </div>
            <div className="terminal-body">
              <p className="term-line"><span className="prompt">$</span> whoami</p>
              <h1 className="hero-name">Raghool M<span className="cursor">&nbsp;</span></h1>
              <p className="hero-role">// Computer Science &amp; Engineering Graduate — Full-Stack Web Developer</p>
              <p className="hero-summary">
                BE Computer Science graduate with hands-on experience building responsive full-stack
                applications, a strong foundation in data structures and algorithms, and applied exposure
                to cloud platforms and machine learning. I like turning real-world problems into working
                software.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="/Raghool_resume.pdf" download>&#8595; Download Resume</a>
                <a className="btn btn-ghost" href="https://github.com/Raghool-user" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                <a className="btn btn-ghost" href="https://linkedin.com/in/raghool-m-45a39a38a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="btn btn-ghost" href="mailto:raghoolbecse@gmail.com">Email Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Reveal id="about">
        <span className="file-tab">about<span className="ext">.md</span></span>
        <h2 className="section-title">Professional Summary</h2>
        <p className="section-sub">// a short read on who I am</p>
        <p style={{ color: 'var(--text-dim)', maxWidth: '68ch', fontSize: '15.5px' }}>
          BE Computer Science and Engineering graduate with hands-on experience in full-stack web
          development, strong knowledge of data structures and algorithms, and exposure to cloud
          platforms and machine learning fundamentals. Skilled at building responsive web applications
          and applying analytical thinking to solve real-world technical problems.
        </p>

        <div style={{ marginTop: 28 }}>
          <div className="edu-item">
            <p className="edu-degree">Bachelor of Engineering, Computer Science and Engineering</p>
            <p className="edu-school">Government College of Engineering, Dharmapuri</p>
            <p className="edu-meta">2022 – 2026 · CGPA 7.6 / 10.0</p>
          </div>
          <div className="edu-item">
            <p className="edu-degree">Class 12th — State Board</p>
            <p className="edu-school">St. Francis Xavier's Higher Secondary School, Thoothukudi</p>
            <p className="edu-meta">2022 · 88.3%</p>
          </div>
          <div className="edu-item">
            <p className="edu-degree">Class 10th — State Board</p>
            <p className="edu-school">Bell Matriculation Higher Secondary School, Thoothukudi</p>
            <p className="edu-meta">2020 · 87.8%</p>
          </div>
        </div>
      </Reveal>

      <Reveal id="skills">
        <span className="file-tab">skills<span className="ext">.json</span></span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-sub">// $ ls -la skills/</p>
        <div className="skills-grid">
          {SKILL_GROUPS.map(group => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal id="experience">
        <span className="file-tab">experience<span className="ext">.log</span></span>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">// $ git log --oneline --graph</p>
        <div className="gitlog">
          <div className="commit">
            <p className="commit-hash">commit 8f3a1c2</p>
            <p className="commit-meta">Web Developer Intern · Rail Infotech Services (Southern Railway) · Jun 2025 – Aug 2025</p>
            <p className="commit-title">Streamlined the Quarters Management System</p>
            <p className="commit-body">
              Spearheaded development of responsive internal web interfaces using HTML5 and Bootstrap.
              Collaborated with cross-functional railway departments to translate complex user
              requirements into functional UI components. Integrated Python-based backend logic with
              relational databases to automate training schedule workflows, and improved platform
              reliability through unit testing, debugging, and technical documentation for
              mission-critical intranet applications.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal id="projects">
        <span className="file-tab">projects<span className="ext">/</span></span>
        <h2 className="section-title">Key Projects</h2>
        <p className="section-sub">// $ ls projects/</p>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div className="project-card" key={p.name}>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              {p.stack.map(s => <span className="diff-add" key={s}>{s}</span>)}
              <div className="project-links">
                <a href={p.link} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', marginTop: 16 }}>
          note: project links point to my GitHub profile — add the individual repo URLs once they're pushed.
        </p>
      </Reveal>

      <Reveal id="certifications">
        <span className="file-tab">certs<span className="ext">.yml</span></span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-sub">// verified credentials</p>
        <ul className="cert-list">
          {CERTS.map(c => (
            <li className="cert-item" key={c.name}>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
              <a className="cert-link" href={c.link} target="_blank" rel="noopener noreferrer">View →</a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal id="contact">
        <span className="file-tab">contact<span className="ext">.sh</span></span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">// $ ./contact.sh --send</p>
        <div className="contact-block">
          <div className="contact-row"><span className="k">email</span> → <a className="v" href="mailto:raghoolbecse@gmail.com">raghoolbecse@gmail.com</a></div>
          <div className="contact-row"><span className="k">phone</span> → <span className="v">+91 8608383248</span></div>
          <div className="contact-row"><span className="k">linkedin</span> → <a className="v" href="https://linkedin.com/in/raghool-m-45a39a38a" target="_blank" rel="noopener noreferrer">linkedin.com/in/raghool-m-45a39a38a</a></div>
          <div className="contact-row"><span className="k">github</span> → <a className="v" href="https://github.com/Raghool-user" target="_blank" rel="noopener noreferrer">github.com/Raghool-user</a></div>
          <div className="contact-row"><span className="k">location</span> → <span className="v">Thoothukudi, Tamil Nadu, India</span></div>
        </div>
      </Reveal>

      <footer>built by Raghool M · deployed via GitHub Pages</footer>
    </>
  );
}
