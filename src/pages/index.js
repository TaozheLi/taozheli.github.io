import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import { IconGitHub, IconLinkedin } from '@components/icons';
import profile from '../profile.json';

const Main = styled.main`
  counter-reset: section;
  .hero { min-height: 85vh; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
  .featured-demo { padding-top: 0; }
  .demo-frame { margin: 0; border: 1px solid var(--lightest-navy); border-radius: var(--border-radius); overflow: hidden; background: var(--light-navy); }
  .demo-frame video { display: block; width: 100%; height: auto; aspect-ratio: 393 / 155; background: #020c1b; }
  .demo-frame figcaption { padding: 18px 24px; color: var(--light-slate); font-size: var(--fz-md); }
  .demo-frame p { margin: 0; }
  .eyebrow { color: var(--green); font-family: var(--font-mono); }
  .hero h1 { margin: 15px 0; }
  .hero h2 { font-size: clamp(28px, 5vw, 60px); color: var(--slate); }
  .hero p { max-width: 620px; }
  .button { ${({ theme }) => theme.mixins.bigButton}; margin-top: 24px; }
  section { max-width: 1000px; scroll-margin-top: 100px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 20px; }
  article { padding: 28px; background: var(--light-navy); border-radius: var(--border-radius); }
  article h3 { color: var(--lightest-slate); }
  .meta { font-family: var(--font-mono); font-size: var(--fz-sm); color: var(--green); }
  .links { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; }
  .links a { color: var(--green); }
  .empty { padding: 28px; border: 1px dashed var(--lightest-navy); border-radius: var(--border-radius); }
  .contact { text-align: center; max-width: 650px; }
  .contact-socials { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 32px; }
  .contact-socials a { display: inline-flex; align-items: center; justify-content: center; gap: 14px; min-width: 190px; min-height: 72px; padding: 18px 28px; border: 1px solid var(--green); border-radius: var(--border-radius); background: var(--light-navy); color: var(--lightest-slate); font-size: 22px; font-weight: 600; transition: var(--transition); }
  .contact-socials a::after { display: none; }
  .contact-socials a:hover, .contact-socials a:focus-visible { color: var(--green); background: var(--lightest-navy); transform: translateY(-3px); box-shadow: 0 6px 22px rgba(100, 255, 218, 0.12); }
  .contact-socials a:focus-visible { outline: 2px solid var(--green); outline-offset: 5px; }
  .contact-socials svg { width: 32px; height: 32px; flex-shrink: 0; color: var(--green); }
  @media (prefers-reduced-motion: reduce) { .contact-socials a { transition: none; } .contact-socials a:hover { transform: none; } }
  .draft { font-size: var(--fz-sm); color: var(--green); }
`;

const ExternalLink = ({ href, children }) =>
  href ? <a href={href} target="_blank" rel="noopener noreferrer">{children}</a> : null;
ExternalLink.propTypes = { href: PropTypes.string, children: PropTypes.node };

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Main className="fillHeight">
      <section className="hero">
        <span className="eyebrow">Hi, my name is</span>
        <h1 className="big-heading">{profile.name}.</h1>
        <h2>{profile.headline}</h2>
        <p>{profile.intro}</p>
        {profile.intro.startsWith('Personal website in preparation') && <p className="draft">Draft portfolio · Personal details pending</p>}
        <a className="button" href="#projects">Explore my work</a>
      </section>
      <section id="demo" className="featured-demo" aria-labelledby="demo-title">
        <h2 id="demo-title" className="numbered-heading">Demo Presentation</h2>
        <figure className="demo-frame">
          <video controls playsInline preload="none" poster="/videos/research-demo-poster.jpg" aria-label="Multi-camera visual perception and local scene replay demonstration">
            <source src="/videos/research-demo.mp4" type="video/mp4" />
            Your browser does not support embedded video. <a href="/videos/research-demo.mp4">Open the demonstration video.</a>
          </video>
          <figcaption><p>Multi-camera visual perception and local scene replay.</p></figcaption>
        </figure>
      </section>
      <section id="about">
        <h2 className="numbered-heading">About Me</h2>
        <p>My work connects visual understanding with practical autonomous systems—from dynamic SLAM to multi-camera occupancy prediction and efficient deployment.</p>
        {profile.skills.length > 0 && <p className="meta">{profile.skills.join(' · ')}</p>}
      </section>
      <section id="education">
        <h2 className="numbered-heading">Education</h2>
        <div className="grid">{profile.education.map((item, i) => (
          <article key={i}><h3>{item.institution}</h3><p>{item.degree}</p><p className="meta">{item.dates}</p><p>{item.location}</p></article>
        ))}</div>
      </section>
      <section id="jobs">
        <h2 className="numbered-heading">Experience</h2>
        {profile.experience.length ? <div className="grid">{profile.experience.map((item, i) => (
          <article key={i}><h3>{item.role} · {item.organization}</h3><p className="meta">{item.dates}</p><p>{item.description}</p></article>
        ))}</div> : <p className="empty">Education and experience will be added here.</p>}
      </section>
      <section id="projects">
        <h2 className="numbered-heading">Selected Projects</h2>
        {profile.projects.length ? <div className="grid">{profile.projects.map((item, i) => (
          <article key={i}>
            <p className="meta">{item.dates}</p><h3>{item.title}</h3><p>{item.description}</p><p>{item.contribution}</p>
            <p className="meta">{(item.tech || []).join(' · ')}</p>
            <div className="links"><ExternalLink href={item.code}>GitHub ↗</ExternalLink><ExternalLink href={item.demo}>Demo ↗</ExternalLink></div>
          </article>
        ))}</div> : <p className="empty">Project summaries, contributions, results, and code links will appear here.</p>}
      </section>
      <section id="publications">
        <h2 className="numbered-heading">Publications</h2>
        {profile.publications.length ? <div className="grid">{profile.publications.map((item, i) => (
          <article key={i}>
            <p className="meta">{item.venue} · {item.year}</p><h3>{item.title}</h3><p>{item.authors}</p><p>{item.summary}</p>
            <div className="links"><ExternalLink href={item.pdf}>Paper ↗</ExternalLink><ExternalLink href={item.code}>Code ↗</ExternalLink><ExternalLink href={item.project}>Project ↗</ExternalLink></div>
          </article>
        ))}</div> : <p className="empty">Paper titles, authors, venues, PDFs, and code will appear here.</p>}
      </section>
      <section id="awards">
        <h2 className="numbered-heading">Awards</h2>
        <ul>{profile.awards.map(award => <li key={award}>{award}</li>)}</ul>
      </section>
      <section id="contact" className="contact">
        <h2 className="numbered-heading">Get In Touch</h2>
        <p>I’m interested in internship opportunities in visual perception, autonomous driving, machine learning, and software development. For opportunities and collaboration, please reach out.</p>
        <a className="button" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="contact-socials" aria-label="Professional profiles">
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><span aria-hidden="true"><IconGitHub /></span><span>GitHub</span></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span aria-hidden="true"><IconLinkedin /></span><span>LinkedIn</span></a>
        </div>
      </section>
    </Main>
  </Layout>
);
IndexPage.propTypes = { location: PropTypes.object.isRequired };
export default IndexPage;
