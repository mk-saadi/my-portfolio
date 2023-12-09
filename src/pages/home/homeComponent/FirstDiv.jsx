import mkSaadi from "../../../assets/mk-saadi.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import Button from "../../../reuse/Button";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const FirstDiv = () => {
	return (
		<div>
			<div className="flex text-[#ffc8a9]  flex-col items-center justify-center max-w-[400px] mx-auto">
				<div className="">
					<img
						src={mkSaadi}
						alt=""
						className="md:h-56 lg:h-72 sepia-[2]"
					/>
				</div>
				<h1 className="mt-2 text-xl font-bold md:text-3xl">
					Muhiuddin Khaled <span className="opacity-70">Saadi</span>
				</h1>
				<p className="text-sm font-semibold md:text-base">
					WEB DEVELOPER
				</p>
				<p className="text-sm md:text-base">
					👨‍💻 Junior React Developer | HTML, CSS, JavaScript, React 🚀
					Crafting interactive and responsive web experiences. 📚
					Continuous learner, exploring React
				</p>
			</div>

			<div className="flex items-center justify-center gap-3 mt-3 md:mt-5 md:mb-8 lg:mb-0">
				<Button>
					<a
						href="https://github.com/mk-saadi"
						target="_blank"
					>
						<FaGithubSquare className="text-2xl" />
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
