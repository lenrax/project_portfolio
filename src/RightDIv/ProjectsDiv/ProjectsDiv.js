import './ProjectsDiv.css';

function ProjectsDiv()
{
    return (
        <div className = "projects_div" id = "projects_div">
				<div className = "projects_div_con">
					<div className = "project_card">
						<div className = "project_title_div">
							<b>Voice User Interface (VUI) Design</b>
						</div>
						<div className = "project_desc_div">
							<p>Design an interface that allows users to interact with a web application using voice commands. Pay attention to natural language processing, voice feedback, and error handling to create a seamless and intuitive voice-controlled experience.</p>
						</div>
						<div className = "project_btn_div">
							<button>View Project</button>
						</div>
					</div>
					<div className = "project_card">
						<div className = "project_title_div">
							<b>Adaptive User Interfaces</b>
						</div>
						<div className = "project_desc_div">
							<p>Develop a user interface that adapts and adjusts based on user preferences, such as color schemes, font sizes, or layout structures. Allow users to customize the interface to suit their individual needs and preferences.</p>
						</div>
						<div className = "project_btn_div">
							<button>View Project</button>
						</div>
					</div>
					<div className = "project_card">
						<div className = "project_title_div">
							<b>Data-Driven User Interfaces</b>
						</div>
						<div className = "project_desc_div">
							<p>Create a UI that dynamically adjusts and presents data based on user behavior, preferences, or real-time data updates. Utilize data visualization techniques to make the interface more informative and engaging.</p>
						</div>
						<div className = "project_btn_div">
							<button>View Project</button>
						</div>
					</div>
					<div className = "project_card">
						<div className = "project_title_div">
							<b>Gamified User Experience</b>
						</div>
						<div className = "project_desc_div">
							<p>Gamify a web application by incorporating game elements, such as achievements, badges, or progress tracking. Design an intuitive and enjoyable user experience that motivates users to engage with the application.</p>
						</div>
						<div className = "project_btn_div">
							<button>View Project</button>
						</div>
					</div>
					<div className = "project_card">
						<div className = "project_title_div">
							<b>Haptic Feedback Interface</b>
						</div>
						<div className = "project_desc_div">
							<p>Explore haptic feedback technologies, such as vibration or force feedback, and design an interface that leverages these capabilities to provide tactile feedback to users. Consider how haptic feedback can enhance user interactions and improve usability.</p>
						</div>
						<div className = "project_btn_div">
							<button>View Project</button>
						</div>
					</div>
				</div>
			</div>
    );
}

export default ProjectsDiv;