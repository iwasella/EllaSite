import React from 'react';
import './CaseStudies.css';
import NavigationBar from './NavigationBar';

function CaseStudies() {


  return (
    <div className="CaseStudiesPage">
      <header className="case-studies-header">
        <h1>Case Studies</h1>
        
        <NavigationBar />
        
        <p className="header-subtitle">A portfolio of product strategy, UX research, and interactive design.</p>
      </header>
        
      <div className="case-study-container">
        
        {/* PROJECT 1: AMAZON NEXT */}
        <section className="case-study-card">
          <div className="case-study-content">
            <div className="meta-tags">
              <span className="tag gold">2nd Place Finalist</span>
              <span className="tag">Lead UI/UX Designer</span>
            </div>
            <h2>AmazonNext: AI-Driven Accessibility in Retail</h2>
            <p className="description">
              As the Lead UI/UX Designer, I collaborated with a cross-functional team in a one-month design sprint to solve for grocery freshness—a major pain point for the visually impaired community. Our solution, "Freshness Scanner," leverages computer vision to provide real-time haptic and audio feedback. By prioritizing WCAG accessibility standards, our team successfully pitched to Amazon design leaders, securing 2nd Place out of 40+ teams.
            </p>
          </div>
          <div className="case-study-visuals">
             <div className="canva-wrapper">
                <iframe 
                  loading="lazy" 
                  src="https://www.canva.com/design/DAGx1hI89Y4/RBBpqzrPd8QajnhJJGZhLw/view?embed" 
                  title="AmazonNext Design Presentation" 
                  allowFullScreen
                ></iframe>
             </div>
             <div className="figma-wrapper">
                <iframe 
                  src="https://embed.figma.com/proto/7pgSh1fFonI5NaQT7PLNFr/Walmart-App-Redesign--Freshness-Scanner?node-id=1-663&starting-point-node-id=1%3A661&embed-host=share" 
                  title="Interactive Figma Prototype" 
                  allowFullScreen
                ></iframe>
             </div>
          </div>
        </section>

        {/* PROJECT 2: PSYCH RESEARCH */}
        <section className="case-study-card reversed">
          <div className="case-study-content">
            <div className="meta-tags">
              <span className="tag honors">Honors Research</span>
              <span className="tag">UX Research</span>
            </div>
            <h2>Parasocial Relations & Streamer Wellness</h2>
            <p className="description">
              This project bridges Cognitive Psychology and Interaction Design to address the mental health crisis within the creator economy. I proposed a gamified Ecological Momentary Assessment (EMA) study utilizing a "Duolingo-style" engagement model to lower the barrier for research participation. By mapping relationship dynamics like reciprocity and responsibility, I created a data-driven framework for tracking streamer wellness.
            </p>
            <div className="project-links">
              <a href="https://github.com/iwasella/Parasocial-Relations-Study/tree/main" target="_blank" rel="noopener noreferrer" className="btn-primary">View GitHub Repo</a>
            </div>
          </div>
          <div className="case-study-visuals">
             <iframe 
               src="https://docs.google.com/presentation/d/e/2PACX-1vRCQtQUseIeQog2ACEOflhhwbtVer716xNzFqHoLWoKeNSZcVYRddyAIPypkKtR2abFL6quMOxnhxet/pubembed?start=false&loop=false&delayms=3000" 
               title="Psychology Research Slide Deck" 
               allowFullScreen
             ></iframe>
          </div>
        </section>

        {/* PROJECT 3: JOBPULSE */}
        <section className="case-study-card">
          <div className="case-study-content">
            <div className="meta-tags">
              <span className="tag fellowship">Product 101 Fellowship</span>
              <span className="tag">Strategy</span>
            </div>
            <h2>JobPulse: Product Discovery & Growth Strategy</h2>
            <p className="description">
              During the Product 101 Fellowship, I acted as a consultant for the founding team at JobPulse to identify growth opportunities. I conducted a Heuristic Evaluation of the existing platform to uncover friction points in the user onboarding funnel. By synthesizing raw data into validated User Personas, I delivered a strategic roadmap focused on enhancing product-market fit and streamlining the core user experience.
            </p>
          </div>
          <div className="case-study-visuals">
            <iframe 
              src="https://docs.google.com/presentation/d/e/2PACX-1vQrsPEcWi-IwgtwQTkdXOhethUNccIHgcO628lnIlTqB9HTlS7e7ywbWk3KLSQ5_W_eB_rPii92zBzB/pubembed?start=false&loop=false&delayms=3000" 
              title="JobPulse Fellowship Presentation" 
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CaseStudies;