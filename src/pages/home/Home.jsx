import { Outlet } from "react-router-dom";
import FirstDiv from "./homeComponent/FirstDiv";
import NavBar from "./homeComponent/NavBar";

const Home = () => {
	return (
		<div className="bg-[#fdc270] p-2 md:p-4 h-screen flex justify-center items-center noise1 overflow-hidden max-w-[1440px] mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-black inner-box md:h-[96vh] h-[99vh] w-[99vw] md:w-[98vw] overflow-auto lg:overflow-hidden">
				<div className="col-span-1">
					<FirstDiv />
				</div>

				<div className="w-full lg:overflow-y-auto lg:col-span-2">
					<NavBar />
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Home;

/*
<div className="col-span-1 lg:fixed lg:top-12">
	<FirstDiv />
</div>
<div className="hidden lg:block lg:col-span-1"></div>
*/
