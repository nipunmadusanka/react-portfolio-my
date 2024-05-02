import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import HireMeModal from '../HireMeModal';
import logoLight from '../../public/images/logo-light.svg';
import logoDark from '../../public/images/logo-dark.svg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { mydata } from '../../data/myData';
import Logo from '../Logo';
function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	const [isToggleOpen, setIsToggleOpen] = useState(false)

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}
	console.log(mydata.data.hello);

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		// <motion.nav
		// 	initial={{ opacity: 0 }}
		// 	animate={{ opacity: 1 }}
		// 	id="nav"
		// 	className="sm:container sm:mx-auto"
		// >
		// 	{/* Header */}
		// 	<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
		// 		{/* Header menu links and small screen hamburger menu */}
		// 		<div className="flex justify-between items-center px-4 sm:px-0">
		// 			<div>
		// 				<Link href="/">
		// 					{activeTheme === 'dark' ? (
		// 						<Image
		// 							src={logoDark}
		// 							className="w-36 cursor-pointer"
		// 							alt="Dark Logo"
		// 							width={150}
		// 							height={120}
		// 						/>
		// 					) : (
		// 						<Image
		// 							src={logoLight}
		// 							className="w-36 cursor-pointer"
		// 							alt="Dark Logo"
		// 							width={150}
		// 							height={120}
		// 						/>
		// 					)}
		// 				</Link>
		// 			</div>

		// 			{/* Theme switcher small screen */}
		// 			<div
		// 				onClick={() => setTheme(activeTheme)}
		// 				aria-label="Theme Switcher"
		// 				className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
		// 			>
		// 				{activeTheme === 'dark' ? (
		// 					<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
		// 				) : (
		// 					<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
		// 				)}
		// 			</div>

		// 			{/* Small screen hamburger menu */}
		// 			<div className="sm:hidden">
		// 				<button
		// 					onClick={toggleMenu}
		// 					type="button"
		// 					className="focus:outline-none"
		// 					aria-label="Hamburger Menu"
		// 				>
		// 					<svg
		// 						xmlns="http://www.w3.org/2000/svg"
		// 						viewBox="0 0 24 24"
		// 						className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
		// 					>
		// 						{showMenu ? (
		// 							<FiX className="text-3xl" />
		// 						) : (
		// 							<FiMenu className="text-3xl" />
		// 						)}
		// 					</svg>
		// 				</button>
		// 			</div>
		// 		</div>

		// 		{/* Header links small screen */}
		// 		<div
		// 			className={
		// 				showMenu
		// 					? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
		// 					: 'hidden'
		// 			}
		// 		>
		// 			<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
		// 				<Link href="/projects" aria-label="Projects">
		// 					Projects
		// 				</Link>
		// 			</div>
		// 			<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
		// 				<Link href="/about" aria-label="About Me">
		// 					About Me
		// 				</Link>
		// 			</div>
		// 			<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
		// 				<Link href="/contact" aria-label="Contact">
		// 					Contact
		// 				</Link>
		// 			</div>
		// 			<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
		// 				<button
		// 					onClick={showHireMeModal}
		// 					className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
		// 					aria-label="Hire Me Button"
		// 				>
		// 					Hire Me
		// 				</button>
		// 			</div>
		// 		</div>

		// 		{/* Header links large screen */}
		// 		<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
		// 			<div
		// 				className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
		// 				aria-label="Projects"
		// 			>
		// 				<Link href="/projects">Projects</Link>
		// 			</div>
		// 			<div
		// 				className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
		// 				aria-label="About Me"
		// 			>
		// 				<Link href="/about1">About Me</Link>
		// 			</div>

		// 			<div
		// 				className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
		// 				aria-label="Contact"
		// 			>
		// 				<Link href="/contact">Contact</Link>
		// 			</div>
		// 		</div>

		// 		{/* Header right section buttons */}
		// 		<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
		// 			<div className="hidden md:flex">
		// 				<button
		// 					onClick={showHireMeModal}
		// 					className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
		// 					aria-label="Hire Me Button"
		// 				>
		// 					Hire Me
		// 				</button>
		// 			</div>

		// 			{/* Theme switcher large screen */}
		// 			<div
		// 				onClick={() => setTheme(activeTheme)}
		// 				aria-label="Theme Switcher"
		// 				className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
		// 			>
		// 				{activeTheme === 'dark' ? (
		// 					<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
		// 				) : (
		// 					<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
		// 				)}
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div>
		// 		{showModal ? (
		// 			<HireMeModal
		// 				onClose={showHireMeModal}
		// 				onRequest={showHireMeModal}
		// 			/>
		// 		) : null}
		// 		{showModal ? showHireMeModal : null}
		// 	</div>
		// </motion.nav>
		<header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
			<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
				<nav
					aria-label="main navigation"
					className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
					role="navigation"
				>
					{/*      <!-- Brand logo --> */}
					<Link
						id="WindUI"
						aria-label="WindUI logo"
						aria-current="page"
						className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
						href="/"
					>
						{/* <svg
							width="300"
							height="300"
							viewBox="0 0 300 300"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12 bg-emerald-500"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
								fill="rgba(255,255,255,.2)"
							/>
						</svg> */}

						<Logo width={60} />
						
					</Link>
					{/*      <!-- Mobile trigger --> */}
					<button
						className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
								? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
								: ""
							}
            `}
						onClick={() => setIsToggleOpen(!isToggleOpen)}
						aria-expanded={isToggleOpen ? "true" : "false"}
						aria-label="Toggle navigation"
					>
						<div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
							<span
								aria-hidden="true"
								className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
							></span>
							<span
								aria-hidden="true"
								className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
							></span>
							<span
								aria-hidden="true"
								className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
							></span>
						</div>
					</button>
					{/*      <!-- Navigation links --> */}
					<ul
						role="menubar"
						aria-label="Select page"
						className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
							? "visible opacity-100 backdrop-blur-sm"
							: "invisible opacity-0"
							}`}
					>
						<li role="none" className="flex items-stretch">
							<Link
								role="menuitem"
								aria-haspopup="false"
								className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none lg:px-8"
								href="/"
							>Home
							</Link>
						</li>
						<li role="none" className="flex items-stretch">
							<Link
								role="menuitem"
								aria-haspopup="false"
								className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none lg:px-8"
								href="/projects"
							>Project
							</Link>
						</li>
						<li role="none" className="flex items-stretch">
							<Link role="menuitem"
								aria-current="page"
								aria-haspopup="false"
								className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-600 focus:text-sky-600 focus:outline-none focus-visible:outline-none lg:px-8"
								href="/experience">Experience</Link>
						</li>
						<li role="none" className="flex items-stretch">
							<Link role="menuitem"
								aria-current="page"
								aria-haspopup="false"
								className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-600 focus:text-sky-600 focus:outline-none focus-visible:outline-none lg:px-8"
								href="/about">About</Link>
						</li>
						<li role="none" className="flex items-stretch">
							<Link
								role="menuitem"
								aria-haspopup="false"
								className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none lg:px-8"
								href="/contact"
							>Contact
							</Link>
						</li>
					</ul>
					<div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
						<Link href='https://www.getin4u.com/' target='_blank'>
							<button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-800 hover:shadow-sm hover:shadow-sky-300 focus:bg-sky-900 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
								<span>Read my Blog</span>
							</button>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default AppHeader;
