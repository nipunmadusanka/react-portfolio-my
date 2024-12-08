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
			className="flex flex-col sm:justify-between items-center gap-4 md:flex-row mt-5 md:mt-2 my-8"
		>
			<div className="w-full md:w-1/3 text-left p-4">
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
					Hi, I am Nipun Madusanka
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
					Passionate Web Developer & Design Enthusiast
				</motion.p>
				<motion.div
					className='md:text-left pt-6 text-center'>
					<motion.p>
						I am a passionate web developer and technology enthusiast with a Bachelor&apos;s degree in Information and Communication Technology from South Eastern University of Sri Lanka. With a deep curiosity for learning and a drive to explore innovative solutions, I am committed to leveraging technology to create meaningful societal impact.
						<br /><br />
						For me, software engineering is more than a career it&apos;s a lifelong passion and hobby. I thrive on embracing new challenges, mastering cutting edge technologies, and building solutions that inspire change. My mission is to go beyond coding and use technology as a tool to empower communities and shape a better world.
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
				className="w-full sm:w-2/3 flex justify-center mt-8 sm:mt-0 p-4"
			>
				<Image
					layout="responsive"
					width={699}
					height={699}
					src={
						activeTheme === 'dark'
							? '/images/Nipun working desk.webp'
							: '/images/developer-dark.svg'
					}
					alt="Developer"
				/>

			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
