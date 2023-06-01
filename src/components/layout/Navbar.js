import React, { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaLinkedin,
	FaInstagramSquare,
	FaFacebookSquare,
	FaGithubSquare,
} from "react-icons/fa";
import { Link } from "react-scroll";

const NavbarComponent = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<>
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-purple-600 text-gray-300">
				<div>
					<img src="" alt="" />
				</div>

				{/* menu */}
				<ul className="hidden md:flex space-x-4">
					<li>
						<Link to="/" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li>
						<Link to="experience" smooth={true} duration={500}>
							Experience
						</Link>
					</li>
					<li>
						<Link to="skills" smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="gallery" smooth={true} duration={500}>
							Gallery
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>

				{/* Hamburger icon */}
				<div onClick={handleClick} className="md:hidden z-10">
					{!nav ? <FaBars /> : <FaTimes />}
				</div>
				{/* mobile Menu */}
				<ul
					className={
						!nav
							? "hidden"
							: "absolute top-0 left-0 w-full h-screen bg-purple-600 flex flex-col justify-center items-center"
					}
				>
					<li className="py-6 text-4xl">
						<Link
							onClick={handleClick}
							to="home"
							smooth={true}
							duration={500}
						>
							Home
						</Link>
					</li>
					<li className="py-6 text-4xl">
						{" "}
						<Link
							onClick={handleClick}
							to="about"
							smooth={true}
							duration={500}
						>
							About
						</Link>
					</li>
					<li className="py-6 text-4xl">
						{" "}
						<Link
							onClick={handleClick}
							to="skills"
							smooth={true}
							duration={500}
						>
							Skills
						</Link>
					</li>
					<li className="py-6 text-4xl">
						{" "}
						<Link
							onClick={handleClick}
							to="work"
							smooth={true}
							duration={500}
						>
							Work
						</Link>
					</li>
					<li className="py-6 text-4xl">
						{" "}
						<Link
							onClick={handleClick}
							to="contact"
							smooth={true}
							duration={500}
						>
							Contact
						</Link>
					</li>
				</ul>
				{/* social icons */}
				<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
					<ul>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-500 bg-blue-600">
							<a
								className="flex justify-between items-center w-full text-gray-300"
								href="/"
							>
								Linkedin <FaLinkedin size={30} />
							</a>
						</li>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-500 bg-black-200">
							<a
								className="flex justify-between items-center w-full text-gray-300"
								href="/"
							>
								Github <FaGithubSquare size={30} />
							</a>
						</li>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-500 bg-red-600">
							<a
								className="flex justify-between items-center w-full text-gray-300"
								href="/"
							>
								Instagram
								<FaInstagramSquare size={30} />
							</a>
						</li>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-500 bg-blue-800">
							<a
								className="flex justify-between items-center w-full text-gray-300"
								href="/"
							>
								Facebook <FaFacebookSquare size={30} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default NavbarComponent;
