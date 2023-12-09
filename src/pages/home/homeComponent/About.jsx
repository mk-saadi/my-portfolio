import React from "react";

const About = () => {
	return (
		<div>
			<div className="text-[#ffc8a9] text-sm lg:max-w-[70ch] md:max-w-[55ch] md:mt-10 lg:mt-6 w-full">
				<p className="text-sm md:text-base">
					As a MERN stack web developer, I'm on a mission to create
					digital experiences that leave a lasting impact.
					<br />
					My focus is on building applications that not only meet
					functional requirements but also provide a delightful user
					experience.
				</p>
				<p className="mt-2">
					Take a look at my portfolio to explore some of my projects
					and see the potential we have to create something
					extraordinary!
				</p>
			</div>
			<ul className="text-[#ffc8a9] mt-8">
				<h5 className="text-xl font-semibold">I have</h5>
				<li>
					Skill in Javascript, React.js, MongoDB, Firebase,
					Express.js, and Node.js for end-to-end application
					development.
				</li>
				<li>
					Front-end proficiency in crafting responsive and elegant
					user interfaces.
				</li>
				<li>
					Experience in designing and implementing scalable back-end
					solutions.
				</li>
				<li>
					Committed to staying updated with the latest trends and
					technologies in the web development landscape.
				</li>
			</ul>
			<ul className="text-[#ffc8a9] mt-8">
				<h5 className="text-xl font-semibold">I am</h5>
				<li>
					Open to freelance opportunities and collaborations on
					projects related to MERN stack development.
				</li>

				<li>
					Available for connecting and discussing potential projects
					through my email address or LinkedIn profile.{" "}
				</li>

				<li>
					Highly motivated to contribute to open-source projects and
					collaborate with other developers.
				</li>
			</ul>
		</div>
	);
};

export default About;
