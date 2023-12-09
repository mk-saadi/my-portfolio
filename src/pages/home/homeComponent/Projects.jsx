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
			points: {
				0: "SocialLink's user authentication and authorization was done using MongoDB database.",
				1: "User will only see posts and stories from user they follow",
			},
		},
		{
			id: 2,
			screenShot: keiFly,
			name: "KeiFly",
			description: "It isan official website I made for my friend",
			liveWebsite: "http://localhost:5173/",
			points: {
				0: "SocialLink's user authentication and authorization was done using MongoDB database.",
				1: "User will only see posts and stories from user they follow",
			},
		},
		{
			id: 3,
			screenShot: animefig,
			name: "AnimeFig",
			description:
				"AnimeFig is a simple full-stack single page website with user authentication, authorization.",
			liveWebsite: "https://animefig-3626c.web.app/",
			points: {
				0: "SocialLink's user authentication and authorization was done using MongoDB database.",
				1: "User will only see posts and stories from user they follow",
			},
		},
	];

	return (
		<div className="mt-12 mb-4 md:mt-10 lg:mt-6">
			<h1 className="text-xl font-semibold text-[#ffc8a9] mb-8">
				My latest projects with beautiful user interfaces
			</h1>
			{projects.map((pr, index) => (
				<div
					key={pr.id}
					className="text-[#ffc8a9] my-4"
				>
					<p className="text-xl font-bold">0{index + 1}.</p>
					<div className="md:ml-10">
						<img
							src={pr.screenShot}
							alt="project screenShot"
							className="object-cover h-48 duration-200 cursor-pointer md:h-60 sepia hover:sepia-0 w-fit brightness-75 hover:brightness-100"
							onClick={() =>
								window.open(pr.liveWebsite, "_blank")
							}
						/>

						<p className="my-2 text-xl font-semibold">{pr.name}</p>
						<p className="lg:max-w-[70ch] md:max-w-[55ch] pl-4 text-sm">
							{pr.description}
						</p>
						{/*
						{pr?.points &&
							Object.entries(pr.points).map(([key, value]) => (
								<li key={key}>{value}</li>
						))} 
						*/}

						<ul>
							{Array.isArray(pr?.points)
								? pr?.points.map((point, index) => (
										<li key={index}>{point}</li>
								  ))
								: Object.values(pr?.points).map(
										(point, index) => (
											<li key={index}>{point}</li>
										)
								  )}
						</ul>

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
				</div>
			))}
		</div>
	);
};

export default Projects;
