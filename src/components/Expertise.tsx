import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker, faPython, faJava, faIntercom, faSlack, faAws, faCodepen, faAngular } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsBackend = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "Microservices",
  "SQL",
  "PostgreSQL",
  "ReactJS",
  "Angular",
  "Redis",
  "Kafka",
];

const labelsIntegrations = [
  "Stakeholder Communication",
  "Requirements Gathering",
  "Leadership",
  "Project Management",
  "Documentation",
];

const labelsAutomationGenAI = [
  "Python",
  "Selenium",
  "Pandas",
  "GenAI",
  "LangChain",
  "LLMs",
  "Streamlit",
];

const labelsDevOps = [
  "AWS",
  "Terraform",
  "CI/CD",
  "Jenkins",
  "Docker",
  "Linux",
];

const labelsProgLang = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "GoLang",
  ];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {/* Backend & Microservices */}
          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Full Stack Development</h3>
            <p>
              Build scalable backend services and APIs with a focus on reliability, performance, and clean system design.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsBackend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Automation & GenAI */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Automation & GenAI</h3>
            <p>
              Automate workflows and build GenAI-enabled features that reduce manual effort and speed up decision-making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsAutomationGenAI.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* DevOps & Delivery */}
          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Cloud Infrastructure</h3>
            <p>
              Set up CI/CD and deployment automation to ship faster, reduce risk, and keep production releases dependable.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsDevOps.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="skill">
            <FontAwesomeIcon icon={faAngular} size="3x" />
            <h3>Programming Languages</h3>
            <p>Quick learner and adaptable to any programming language.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Core strengths:</span>
              {labelsProgLang.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Customer Integrations */}
          <div className="skill">
            <FontAwesomeIcon icon={faSlack} size="3x" />
            <h3>Customer Focus</h3>
            <p>
              Translate business needs into clear technical plans, work directly with stakeholders, lead and deliver solutions end-to-end.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Core strengths:</span>
              {labelsIntegrations.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
}

export default Expertise;
