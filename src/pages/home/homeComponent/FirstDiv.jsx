import mkSaadi from "../../../assets/mk-saadi.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import Button from "../../../reuse/Button";
import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import pdf from "../../../assets/Resume of Muhiuddin Khaled.pdf";
import { FaDownload } from "react-icons/fa";

const FirstDiv = () => {
	return (
		<div>
			<div className="flex text-[#ffc8a9]  flex-col items-center justify-center max-w-[400px] mx-auto">
				<div className="">
					<img
						src={mkSaadi}
						alt=""
						className="h-48 duration-200 md:h-56 lg:h-72 sepia hover:sepia-0"
					/>
				</div>
				<h1 className="mt-2 text-xl font-bold text-center md:text-3xl md:text-start">
					Muhiuddin Khaled <span className="opacity-70">Saadi</span>
				</h1>
				<p className="text-sm font-semibold md:text-base">
					WEB DEVELOPER
				</p>
				<p className="text-xs text-center md:text-base">
					MERN stack Developer
					<br />
					HTML, CSS, JavaScript, React
					<br />
					Crafting interactive and responsive web experiences.
				</p>
			</div>

			<div className="flex items-center justify-center gap-3 mt-3 md:mt-5 md:mb-8 lg:mb-0">
				<a
					href={pdf}
					download="resume.pdf"
				>
					<button className="flex items-center justify-center gap-3 mr-6 text-xl navLink">
						Resume
					</button>
				</a>
				<Button>
					<a
						href="https://github.com/mk-saadi"
						target="_blank"
					>
						<ImGithub className="text-2xl" />
					</a>
				</Button>
				<Button>
					<a
						href="https://www.facebook.com/mk.saadi.7/"
						target="_blank"
					>
						<FaSquareFacebook className="text-2xl" />
					</a>
				</Button>
				<Button>
					<a
						href="https://www.linkedin.com/in/mk-saadi-46a0aa242/"
						target="_blank"
					>
						<GrLinkedin className="text-2xl" />
					</a>
				</Button>
			</div>
		</div>
	);
};

export default FirstDiv;
