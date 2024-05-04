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
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
		>
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

			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
	);
}

export default AppHeader;
