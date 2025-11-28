import React from 'react';

// --- Reusable Bar Chart Component and Chart Data (No Changes) ---
const BarChart = ({ data, title }) => (
  <div style={{ width: '100%', maxWidth: '600px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
    <h4 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>{title}</h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {data.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: '0 0 150px', textAlign: 'right', fontSize: '1rem' }}>{item.label}</div>
          <div style={{ flex: '1 1 auto', background: '#e0e0e0', borderRadius: '4px' }}>
            <div style={{
              width: `${item.percentage}%`,
              background: '#134674',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '4px',
              textAlign: 'right',
              whiteSpace: 'nowrap'
            }}>
              {item.percentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
const serviceModelData = [{ label: 'SaaS', percentage: 86 }, { label: 'PaaS / IaaS', percentage: 14 }];
const supportModelData = [{ label: 'Third-Party', percentage: 86 }, { label: 'Vendor/Self', percentage: 14 }];
// --- End of Unchanged Section ---


// --- The Main Presentation Content ---
export const slidesData = [
  // Section 1: Title 
  [
     <>
      <div style={{ textAlign: 'center' }}>
        <h3>Master's Thesis Defense</h3>
        <h2>
          Decision Support System in the Adoption <br />
          of Cloud Based Solutions by SMEs
        </h2>
        <p style={{ marginTop: '30px', fontSize: '1.5rem' }}>
          Candidate: <strong>Bruno Manuel Sousa de Carvalho</strong>
        </p>

        <div style={{ 
          marginTop: '60px', 
          borderTop: '1px solid #ddd', 
          paddingTop: '30px', 
          display: 'inline-block',
          textAlign: 'left'
        }}>
          <h4 style={{textAlign: 'center', fontSize: '1.3rem', marginBottom: '20px'}}>Examination Committee</h4>
          <p style={{fontSize: '1.2rem', margin: '10px 0'}}><strong>Chairperson:</strong> Doctor Caroline Conti</p>
          <p style={{fontSize: '1.2rem', margin: '10px 0'}}><strong>Supervisor:</strong> Doctor Carlos Eduardo Dias Coutinho</p>
          <p style={{fontSize: '1.2rem', margin: '10px 0'}}><strong>Member:</strong> Doctor Ruben Duarte Dias da Costa</p>
        </div>
      </div>
    </>
  ],

  // Section 2: The Problem (UPDATED)
  [
    <><h2>1. The Problem</h2><p>Why is this research necessary?</p></>,
    <><h3>The SME Challenge</h3><ul><li>Cloud computing offers huge benefits, but for SMEs, adoption is complex and often "ad-hoc".</li><li>This leads to failures, unforeseen costs, and inefficiencies.</li></ul></>,
    <><h3>The Proposed Solution</h3><p>To design a <strong>Decision Support System (DSS)</strong> that provides SMEs with a structured, simplified, and evidence-based path to cloud adoption.</p></>,
    <>
      <h3>Research Questions</h3>
      <ol style={{textAlign: 'left', maxWidth: '800px'}}>
        <li><strong>RQ1:</strong> What are the essential and simplified components of a DSS that effectively guides SMEs through a successful cloud migration?</li>
        <li><strong>RQ2:</strong> Are there any alternatives to high market choices (AWS, Azure, etc.) with specific strengths or benefits?</li>
        <li><strong>RQ3:</strong> How can an SME maintain a stable post-adoption of Cloud Computing?</li>
      </ol>
    </>
  ],

  // Section 3: Methodology
  [
    <><h2>2. Methodology: A Dual Approach</h2><p>To build a relevant solution, we combined two research methodologies.</p></>,
    <><h3>Part 1: Systematic Literature Review (SLR)</h3><p>Using the PRISMA framework, we reviewed existing research, resulting in <strong>29 core papers</strong>.</p><table className="results-table slr-table"><thead><tr><th>Database</th><th>No Filter</th><th>F1</th><th>F2</th><th>F3</th><th>F4</th></tr></thead><tbody><tr><td>IEEE Xplore</td><td>14</td><td>14</td><td>6</td><td>6</td><td>6</td></tr><tr><td>Scopus</td><td>27</td><td>26</td><td>10</td><td>4</td><td>4</td></tr><tr><td>ACM Library</td><td>29</td><td>15</td><td>7</td><td>2</td><td>1</td></tr><tr><td>Google Scholar</td><td>4 320</td><td>372</td><td>260</td><td>22</td><td>15</td></tr><tr><td>EBC</td><td>1 099</td><td>155</td><td>103</td><td>9</td><td>5</td></tr></tbody></table></>,
    <><h3>Key Findings from the Literature (SLR)</h3><p>The review revealed a clear and actionable research gap:</p><ul><li>Numerous theoretical frameworks exist, but they are often too complex for direct application by SMEs.</li><li>Existing vendor tools are biased and lack a holistic, agnostic perspective.</li><li>There is a lack of a <strong>simplified, practical, and context-aware tool</strong> for SME decision-making.</li></ul><p style={{marginTop: '20px', fontWeight: 'bold', fontSize: '1.5rem'}}>This gap is precisely what our work aims to fill.</p></>,
    <><h3>Part 2: Design Science Research (DSR)</h3><p>To address the identified gap, we used DSR to <strong>build and evaluate an IT artifact</strong>.</p><figure><img src="./assets/dsr-model.png" alt="DSR Model" style={{ maxHeight: '45vh' }}/><figcaption>Figure 3.1: DSR Methodology Process Model [19]</figcaption></figure></>
  ],

  // Section 4: The Conceptual Artifact (UPDATED)
  [
    <><h2>3. The Conceptual Artifact</h2><p>Designing the "brain" of the Decision Support System.</p></>,
    <>
      <h3>Conceptual Foundations: TOE, TAM, DOI</h3>
      <p>The DSS logic is built upon well-established theories of technology adoption identified in the SLR.</p>
    </>,
    <> 
      <h3>TOE</h3>
      <p><strong>Technology-Organization-Environment (TOE)</strong></p>
      <figure>
        <img src="./assets/toe-model.png" alt="TOE Framework Diagram" style={{ maxHeight: '50vh' }}/>
        <figcaption>Influenced questions on internal capabilities and external pressures.</figcaption>
      </figure>
    </>,
    <>
      <h3>TAM</h3>
      <p><strong>Technology Acceptance Model (TAM)</strong></p>
      <figure>
        <img src="./assets/tam-model.png" alt="TAM Model Diagram" style={{ maxHeight: '45vh' }}/>
        <figcaption>Guided questions on the perceived usefulness of cloud tools.</figcaption>
      </figure>
    </>,
     <>
      <h3>DOI</h3>
      <p><strong>Diffusion of Innovations (DOI)</strong></p>
      <figure>
        <img src="./assets/doi-model.png" alt="DOI Curve Diagram" style={{ maxHeight: '50vh' }}/>
        <figcaption>Helped frame the SME's readiness on the adoption curve.</figcaption>
      </figure>
    </>,
    // --- UPDATED SLIDE ---
    <>
      <h3>The Weighted Scoring Model</h3>
      <p>We translated these theories into a questionnaire that provides recommendations across <strong>three core categories</strong>.</p>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', width: '90%'}}>
        <div className="scoring-category">
            <h4>1. Service Model</h4>
            <p>(SaaS, PaaS, IaaS)</p>
            <hr/>
            <p className="question-example">"Would automating tasks like customer service or accounting help you?"</p>
            <p className="scoring-example">→ +2 SaaS, +1 PaaS</p>
        </div>
        <div className="scoring-category">
            <h4>2. Deployment Model</h4>
            <p>(Public, Private, Hybrid)</p>
            <hr/>
            <p className="question-example">"Are you subject to data regulations like GDPR?"</p>
            <p className="scoring-example">→ +2 Private, +2 Hybrid</p>
        </div>
        <div className="scoring-category">
            <h4>3. Support Model</h4>
            <p>(Self, Vendor, Third-Party)</p>
            <hr/>
            <p className="question-example">"Do you need 24/7 support for critical services?"</p>
            <p className="scoring-example">→ +2 Vendor-managed</p>
        </div>
      </div>
    </>,
     <>
      <h3>Validation Personas</h3>
      <p>To test the model's logic before implementation, we created three reference personas with expected outcomes.</p>
      <table className="results-table persona-table">
        <thead><tr><th>Persona</th><th>Description</th><th>Expected Outcome</th></tr></thead>
        <tbody>
          <tr><td><strong>Bakery (Retail)</strong></td><td>Low tech, budget-focused</td><td>SaaS, Public, Vendor</td></tr>
          <tr><td><strong>Manufacturer</strong></td><td>Needs integration, security</td><td>PaaS, Hybrid, Third-party</td></tr>
          <tr><td><strong>IT Consultancy</strong></td><td>High tech, needs control</td><td>IaaS, Hybrid, Self-managed</td></tr>
        </tbody>
      </table>
    </>
  ],

  // Section 5: The Implemented Artifact
  [
    <><h2>4. The Implemented Artifact</h2><p>From a conceptual model to a working tool.</p></>,
    <>
      <h3>Application Architecture</h3>
      <p>The DSS was implemented using a modern, Serverless, Edge-First architecture for performance and scalability.</p>
      <figure>
        <img src="./assets/app-architecture.png" alt="Application Architecture" style={{ maxHeight: '50vh' }}/>
        <figcaption>Figure 4.8: Application Architecture</figcaption>
      </figure>
    </>,
    <>
      <h3>Application Workflow</h3>
      <p>The final tool guides users through a simple, step-by-step process.</p>
      <figure>
        <img src="./assets/app-workflow.png" alt="Application Workflow" style={{ maxHeight: '50vh' }}/>
        <figcaption>Application Workflow Diagram</figcaption>
      </figure>
      <p>Accessible at: <a href="https://brunomsc.pt" target="_blank" rel="noopener noreferrer">brunomsc.pt</a></p>
    </>
  ],

  // Section 6: Results & Key Findings 
  [
    <><h2>5. Results & Key Findings</h2><p>The application was evaluated with a pilot group of SMEs (N=7).</p></>,
    <>
      <h3>Summary of Findings</h3>
      <p>The evaluation provided three key insights into SME cloud adoption needs.</p>
      <table className="results-table findings-table">
        <thead>
          <tr>
            <th>Finding</th>
            <th>Observation</th>
            <th>Implication</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. SaaS Dominance</strong></td>
            <td>86% of recommendations were for SaaS.</td>
            <td>SMEs prioritize ready-to-use solutions over managing infrastructure.</td>
          </tr>
          <tr>
            <td><strong>2. Need for Support</strong></td>
            <td>86% of recommendations were for Third-Party Support.</td>
            <td>A critical success factor is access to external expertise, not just technology.</td>
          </tr>
          <tr>
            <td><strong>3. Persona Validation</strong></td>
            <td>The DSS correctly guided a technical persona (IT) towards a simpler SaaS solution, against expectations.</td>
            <td>The model successfully prioritizes practical business efficiency over assumed technical preferences.</td>
          </tr>
        </tbody>
      </table>
    </>,
    <>
      <h3>Visualizing the Key Findings</h3>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
        <BarChart data={serviceModelData} title="Finding 1: Service Model" />
        <BarChart data={supportModelData} title="Finding 2: Support Model" />
      </div>
    </>
  ],

  // Section 7: Analysis & Implications
  [
    <><h2>6. Analysis & Implications</h2><p>What do these findings mean?</p></>,
    <>
      <h3>Answering the Research Questions</h3>
      <ul>
        <li><strong>RQ1 (Components):</strong> An effective DSS must simplify complexity by focusing on <strong>Service, Deployment, and Support</strong>.</li>
        <li><strong>RQ2 (Alternatives):</strong> The DSS empowers SMEs to evaluate any provider by creating a <strong>clear profile of their own needs</strong> first.</li>
        <li><strong>RQ3 (Stability):</strong> Post-adoption stability is ensured by making the <strong>Support Model a primary decision point</strong>.</li>
      </ul>
    </>,
    <>
      <h3>Implications of the Research</h3>
      <div style={{display: 'flex', justifyContent: 'center', gap: '40px', textAlign: 'left', width: '100%'}}>
        <div style={{flex: 1}}>
          <h4>For Practice</h4>
          <p>This DSS is a practical tool to reduce migration risk. It shows the market that SMEs need guided expertise, not just technology.</p>
        </div>
        <div style={{flex: 1}}>
          <h4>For Theory</h4>
          <p>This work shows that for SMEs, organizational context and efficiency can be more dominant factors than purely technical preferences.</p>
        </div>
      </div>
    </>
  ],

  // Section 8: Conclusion
  [
    <><h2>7. Conclusion</h2><p>Limitations, Future Work, and Final Remarks.</p></>,
    <>
      <h3>Limitations & Future Work</h3>
      <div style={{display: 'flex', justifyContent: 'center', gap: '40px', textAlign: 'left', width: '100%'}}>
        <div style={{flex: 1}}>
          <h4>Limitations</h4>
          <ul>
            <li>Small pilot group (N=7).</li>
            <li>Sample bias (existing cloud users).</li>
            <li>Lack of regional (Portuguese) data.</li>
          </ul>
        </div>
        <div style={{flex: 1}}>
          <h4>Future Work</h4>
          <ul>
            <li>Evolve the Scoring Model (add Financials, ML).</li>
            <li>Evolve the App into a Continuous Platform.</li>
          </ul>
        </div>
      </div>
    </>,
    <>
      <h3>Final Remarks</h3>
      <p>"This dissertation proposes a structured approach and a pragmatic artifact that serves as a solid foundation for solving a relevant industry problem.</p>
      <p style={{fontSize: '1.5rem', marginTop: '30px'}}>The work's contribution is validated by the acceptance of a derived paper for publication at the</p>
      <p style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#134674', marginTop: '10px'}}>ICICT 2026 Conference.</p>
    </>
  ],

  // Section 9: Q&A
  [
    <><h2>Thank You</h2></>
  ],
];