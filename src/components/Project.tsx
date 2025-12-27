import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/c-meghana/Route-Optimzation-using-Reinforcement-Learning" target="_blank" rel="noreferrer"></a>
                <a href="https://github.com/c-meghana/Route-Optimzation-using-Reinforcement-Learning" target="_blank" rel="noreferrer"><h2>Route Optimization Using Reinforcement Learning</h2></a>
                <p>Develop an AI agent that uses Reinforcement Learning (DQN) for route optimization on a customized FrozenLake map. The agent must travel from Start (S) to Goal (G) without falling into Holes (H), learning from the consequences of its actions.</p>
            </div>
            <div className="project">
                <a href="https://github.com/c-meghana/GenAI-Text-To-SQL-Database" target="_blank" rel="noreferrer"></a>
                <a href="https://github.com/c-meghana/GenAI-Text-To-SQL-Database" target="_blank" rel="noreferrer"><h2>GenAI based Text To SQL Full Stack Web APP</h2></a>
                <p>Developed a full stack web application that takes Natural English as input and uses GEMINI LLM to convert into SQL queries and fetch relevant information from Database</p>
            </div>
            <div className="project">
                <a href="https://github.com/c-meghana/Inventory_ForeCast" target="_blank" rel="noreferrer"></a>
                <a href="https://github.com/c-meghana/Inventory_ForeCast" target="_blank" rel="noreferrer"><h2>Inventory Demand Forecast and Restocking System</h2></a>
                <p>Predict inventory demand using an LSTM neural network and provides restocking urgency recommendations using fuzzy logic. It is designed for e-commerce businesses to make intelligent, data-driven inventory decisions based on historical sales data.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;