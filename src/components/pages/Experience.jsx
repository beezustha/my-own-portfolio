import React from "react";
import CodeHimalaya from "../../assets/codehimalaya.jpeg";
import Hamrobazar from "../../assets/hamrobazar.png";
import Infodev from "../../assets/infodev.png";
const Experience = () => {
	return (
		<>
			<div
				name="experience"
				className="w-full h-[800px] bg-white font-poppins"
			>
				<div className="flex flex-col justify-center items-center w-full h-[800px]">
					<div className=" text-center max-w-[1000px] w-full grid grid-cols-1">
						<div className="text-xl text-center sm:pb-8 pl-4 font-poppins">
							My Working Journey
						</div>
						<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
							{/* <div>
					<p className="py-4">
						// These are the technologies I've worked with
					</p>
				</div> */}

							<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
								<div className=" hover:scale-110 duration-200">
									<img
										className="w-20 mx-auto"
										src={CodeHimalaya}
										alt="Company icon"
									/>
									<p className="my-4">CodeHimalaya</p>
								</div>
								<div className="hover:scale-110 duration-200">
									<img
										className="w-20 mx-auto"
										src={Infodev}
										alt="Company icon"
									/>
									<p className="my-4">Info Developers</p>
								</div>
								<div className="hover:scale-110 duration-200">
									<img
										className="w-20 mx-auto"
										src={Hamrobazar}
										alt="Company icon"
									/>
									<p className="my-4">Hamrobazar</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Container */}
		</>
	);
};

export default Experience;
