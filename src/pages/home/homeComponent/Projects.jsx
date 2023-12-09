import React from "react";
import social from "../../../assets/social-link-2nd.web.app_(my pc).png";
import keiFly from "../../../assets/keiFly.png";
import animefig from "../../../assets/rsz_animefig.png";
import Button from "../../../reuse/Button";

const Projects = () => {
	const projects = [
		{
			id: 1,
			screenShot: social,
			name: "SocialLink",
			description:
				"SocialLink is a group project I did with my friend. It is a social media website where a user can follow other users, make posts, share stories, link and comment etc.",
			liveWebsite: "https://social-link-2nd.web.app/",
		},
		{
			id: 2,
			screenShot: keiFly,
			name: "KeiFly",
			description: "It isan official website I made for my friend",
			liveWebsite: "http://localhost:5173/",
		},
		{
			id: 3,
			screenShot: animefig,
			name: "AnimeFig",
			description:
				"AnimeFig is a simple full-stack single page website with user authentication, authorization.",
			liveWebsite: "https://animefig-3626c.web.app/",
		},
	];

	return (
		<div className="md:mt-10 lg:mt-6">
			{projects.map((pr) => (
				<div
					key={pr.id}
					className="text-[#ffc8a9] my-4"
				>
					<img
						src={pr.screenShot}
						alt="project screenShot"
						className="object-cover duration-200 cursor-pointer h-60 sepia hover:sepia-0 w-fit brightness-75 hover:brightness-100"
						onClick={() => window.open(pr.liveWebsite, "_blank")}
					/>

					<p className="text-xl font-semibold">{pr.name}</p>
					<p className="lg:max-w-[70ch] md:max-w-[55ch]">
						{pr.description}
					</p>
					<div className="flex gap-3">
						<a
							href={pr.liveWebsite}
							className="text-[#c31b25]"
						>
							Live
						</a>
						<a
							href={pr.liveWebsite}
							className="text-[#c31b25]"
						>
							Github Client
						</a>
						<a
							href={pr.liveWebsite}
							className="text-[#c31b25]"
						>
							Github Server
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
