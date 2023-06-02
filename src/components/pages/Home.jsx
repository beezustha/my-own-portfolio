import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../../assets/profile.jpg";
const Home = () => {
	return (
		<div
			name="home"
			className=" w-full h-[800px] bg-[#29303A] font-poppins"
		>
			{/* container */}
			<div className="text-center max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[900px]">
				<div className="flex justify-center items-center py-4">
					<img
						className="rounded-full w-24 h-24"
						src={profile}
						alt="Profile Image"
					/>
				</div>
				<h1 className="text-4xl font-medium font-poppins text-[#D499E2]">
					Bijaya Shrestha
				</h1>
				<h2 className="text-2xl py-2 font-bold text-white">
					React Developer
				</h2>
				<p className="text-md py-5 leading-8 text-center text-[#F5F6FB] text-w-[700px] font-poppins sm:text-center">
					I am a beginner React developer, eager to build dynamic and
					interactive web applications. With a solid understanding of
					HTML, CSS, and JavaScript and ReactJS, I am dedicated to
					honing my skills and collaborating with other developers to
					create innovative and user-friendly applications using
					React.
				</p>
				<div className="py-10 flex justify-center items-center gap-5">
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
