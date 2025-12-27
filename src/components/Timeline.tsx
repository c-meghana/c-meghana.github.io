import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          {/* GSU Research */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Graduate Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Georgia State University · Atlanta, GA
            </h4>
            <p>
              Conducted data analysis and automation using Python and GenAI frameworks, developed
              research tools, and supported academic projects focused on data
              processing and insights.
            </p>
          </VerticalTimelineElement>   
          {/* Global Payments */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 – 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Global Payments Inc.
            </h4>
            <p>
              Built and enhanced backend microservices using Java and Spring Boot,
              improved API performance, and collaborated with cross-functional teams
              to deliver scalable enterprise solutions.
            </p>
          </VerticalTimelineElement>

          {/* Hitachi Vantara */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cloud IAAS Associate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hitachi Vantara 
            </h4>
            <p>
              Developed REST APIs and backend services, supported customer-facing
              integrations, and worked closely with stakeholders to troubleshoot
              production issues and deliver reliable solutions.
            </p>
          </VerticalTimelineElement>

          {/* Pushmycart */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 – 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Technical Solutions Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pushmycart.com
            </h4>
            <p>
              Led full-stack feature development using React and backend services,
              collaborated directly with business stakeholders, and delivered
              customer-driven solutions end-to-end.
            </p>
          </VerticalTimelineElement>

                 
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
