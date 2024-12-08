import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0 text-center sm:text-left">
				<Image
					src="/images/profile.jpg"
					width={200}
					height={200}
					className="rounded-lg mx-auto"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-center sm:text-left">
				{/* {aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))} */}
				<div className='mb-4'>
					<p className="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-2">
						Who We Are
					</p>
					<span className="font-general-regular block text-md text-ternary-dark dark:text-ternary-light">
						Welcome to Nipun Madusanka&apos;s Portfolio, where technology meets creativity. I am a dedicated web developer and design enthusiast passionate about crafting innovative solutions that bring ideas to life. With a strong foundation in Information and Communication Technology, I graduated from South Eastern University of Sri Lanka and have since embarked on a mission to use technology for the greater good.
					</span>
				</div>
				<div className='mb-4'>
					<p className="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-2">
						What We Do
					</p>
					<span className="font-general-regular block text-md text-ternary-dark dark:text-ternary-light">
						At the core of my work is the desire to create seamless and impactful digital experiences. Whether it&apos;s developing dynamic websites, designing intuitive user interfaces, or collaborating on cutting-edge projects, I thrive on building solutions that not only look great but perform exceptionally well. My expertise spans a range of modern technologies, including React, Next.js, Laravel, Node js, Tailwind, JavaScript, and more.
					</span>
				</div>
				<div className='mb-4'>
					<p className="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-2">
						Our Vision
					</p>
					<span className="font-general-regular block text-md text-ternary-dark dark:text-ternary-light">
						I believe in the power of technology to transform lives and communities. My vision extends beyond just coding; it&apos;s about making a difference. By combining technical skills with creativity, I aim to help individuals and businesses thrive in the digital world, one project at a time.
					</span>
				</div>
				<div className='mb-4'>
					<p className="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-2">Why Choose Me?</p>
					<ol className="list-disc list-inside font-general-regular block text-md text-ternary-dark dark:text-ternary-light text-left">
						<li><b>Passion for Excellence:</b> Each project is a reflection of my dedication to quality and innovation.</li>
						<li><b>Technical Expertise:</b> With hands-on experience in modern web technologies, I deliver scalable and robust solutions.</li>
						<li><b>Client-Centered Approach:</b> I prioritize understanding your unique needs to create tailored solutions.</li>
						<li><b>Ongoing Learning:</b> I continuously explore the latest trends and tools to stay ahead in the industry.</li>
					</ol>
				</div>
				<div className='mb-4'>
					<p className="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mb-2">
						Let&apos;s Connect
					</p>
					<span className="font-general-regular block text-md text-ternary-dark dark:text-ternary-light">
						Have an idea or project in mind? Let&apos;s collaborate and bring it to life! Whether you&apos;re looking for a stunning portfolio website, an e-commerce platform, or innovative digital solutions, I&apos;m here to help.
					</span>
				</div>
			</div>
		</div>
	);
}

export default AboutMeBio;
