import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
	return (
		<div name="home" className=" w-full h-screen bg-[#20262E] font-poppins">
			{/* container */}
			<div className="text-center max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<h1 className="text-5xl font-medium font-poppins text-purple-200">
					Bijaya Shrestha
				</h1>
				<h2 className="text-2xl py-2 font-bold text-white">
					React Developer
				</h2>
				<p className="text-med py-5 leading-8 text-center text-white text-w-[700px] font-poppins sm:text-center">
					I am a beginner React developer, eager to build dynamic and
					interactive web applications.
					{/* With a solid understanding of
					HTML, CSS, and JavaScript and ReactJS, I am dedicated to
					honing my skills and collaborating with other developers to
					create innovative and user-friendly applications using
					React. */}
				</p>
				<div className="py-10 grid grid-flow-col auto-cols-2 gap-5">
					<button className=" text-white group border-2 px-4 py-4 my-2 items-center hover:bg-pink-600 hover:border-pink-600">
						View Work
						<span className="group-hover:rotate-90 duration-300"></span>
					</button>
					<button className=" text-white group border-2 px-4 py-4 my-2 items-center hover:bg-pink-600 hover:border-pink-600">
						My Resume
						<span className="group-hover:rotate-90 duration-300"></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
