import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';
import { FiPhoneCall } from "react-icons/fi";
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import Link from 'next/link';
import { useRouter } from 'next/router';

function AppBanner() {
	const [activeTheme] = useThemeSwitcher();
	const router = useRouter();

	const openmodel = () => {
		window.location.href = 'https://www.linkedin.com/in/jm-nipun-madusanka/';
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hi, Iam Nipun
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Web Developer & Design Enthusiast
				</motion.p>
				<motion.div
					className='md:text-left pt-6 text-center'>
					<motion.p>
						I am passionate about learning and exploring new things. My ultimate goal is to leverage technology in ways that benefit society. I graduated from South Eastern University of Sri Lanka with a Bachelor&apos;s degree in Information and Communication Technology.
						<br /><br />
						Software engineering is not just a career path for me, it is my unwavering passion and hobby. I am excited about learning and exploring new horizons in the world of technology. My vision extends beyond lines of code. I am on a mission to leverage technology to build a better world.
					</motion.p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					
					<button
						onClick={openmodel}
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-6 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500">

						<span className="text-sm sm:text-lg duration-100">
							Contact me
						</span>
					</button>
					{/* </a> */}
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<Image
					layout="responsive"
					width="0"
					height="0"
					src={
						activeTheme === 'dark'
							? '/images/developer.svg'
							: '/images/developer-dark.svg'
					}
					alt="Developer"
				/>

			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
