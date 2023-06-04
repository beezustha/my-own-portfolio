import React from "react";
import CodeHimalaya from "../../assets/codehimalaya.jpeg";
import Hamrobazar from "../../assets/hamrobazar.png";
import Infodev from "../../assets/infodev.png";
const Experience = () => {
	return (
		<>
			<div
				name="experience"
				className="w-full h-[600px] bg-white font-poppins"
			>
				<div className="flex flex-col justify-center items-center w-full py-10">
					<div className=" text-center max-w-[1000px] w-full grid grid-cols-1">
						<div className="text-[28px] text-center sm:pb-8 pl-4">
							My Working Journey
						</div>
						<div className="max-w-[1000px] mx-auto p-4  justify-center w-full h-full">
							{/* <div>
					<p className="py-4">
						// These are the technologies I've worked with
					</p>
				</div> */}

							<div className="w-full flex justify-between text-center py-12 ">
								<div className=" hover:scale-110 duration-200 ">
									<div className="">
										<img
											className="w-40 mx-auto "
											src={CodeHimalaya}
											alt="Company icon"
										/>
										<p className="my-4">
											CodeHimalaya Pvt Ltd.
										</p>
										<p className="text-sm">
											Location: Lalitpur
										</p>
									</div>
								</div>
								<div className="hover:scale-110 duration-200">
									<img
										className="w-40 mx-auto"
										src={Infodev}
										alt="Company icon"
									/>
									<p className="my-4">
										Info Developers Pvt. Ltd.
									</p>
									<p className="text-sm">
										Location: Sanepa, Lalitpur
									</p>
								</div>
								<div className="hover:scale-110 duration-200">
									<img
										className="w-40 mx-auto"
										src={Hamrobazar}
										alt="Company icon"
									/>
									<p className="my-4">Hamrobazar</p>
									<p className="text-sm">
										Location: Thapathali
									</p>
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
