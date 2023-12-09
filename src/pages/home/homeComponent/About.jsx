import React from "react";

const About = () => {
	return (
		<div className="mb-8">
			<div className="text-[#ffc8a9] text-sm lg:max-w-[70ch] md:max-w-[55ch] mt-12 mb-4 md:mt-10 lg:mt-6 w-full">
				<p className="text-sm md:text-base">
					As a MERN stack web developer, I'm on a mission to create
					digital experiences that leave a lasting impact.
					<br />
					My focus is on building applications that not only meet
					functional requirements but also provide a delightful user
					experience.
				</p>
				<p className="mt-2 text-sm md:text-base">
					Take a look at my portfolio to explore some of my projects
					and see the potential we have to create something
					extraordinary!
				</p>
			</div>
			<ul className="text-[#ffc8a9] mt-8 text-xs md:text-base space-y-3">
				<h5 className="text-xl font-semibold">I have</h5>
				<li>
					Proficient skill in HTML, CSS, JavaScript, ReactJS, NodeJS,
					ExpressJS, and MongoDB.
				</li>
				<li>
					Front-end proficiency in crafting responsive and elegant
					user interfaces.
				</li>
				<li>
					Familiar with various libraries and frameworks like React
					Bootstrap, Tailwind CSS, MaterialUI and Git.
				</li>
				<li>
					Committed to staying updated with the latest trends and
					technologies in the web development landscape.
				</li>
			</ul>
			<ul className="text-[#ffc8a9] mt-8 text-xs md:text-base space-y-3">
				<h5 className="text-xl font-semibold">I am</h5>
				<li>
					Open for any <strong>job</strong> or <strong>intern</strong>{" "}
					opportunities.
				</li>
				<li>
					Open to <strong>freelance</strong> opportunities and
					collaborations on projects related to MERN stack
					development.
				</li>

				<li>
					Available for connecting and discussing potential projects
					through my email address or LinkedIn profile.{" "}
				</li>

				<li>
					Highly motivated to contribute to open-source projects and{" "}
					<strong>collaborate</strong> with other developers.
				</li>
			</ul>
		</div>
	);
};

export default About;
