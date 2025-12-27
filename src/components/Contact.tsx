import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            I'd love to connect!
          </p>

          <Box className="contact-links">
            {/* Email */}
            <a
              href="mailto:meghanachada9@gmail.com"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
              <span>meghanachada9@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/meghana-chada-a935a7181/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
