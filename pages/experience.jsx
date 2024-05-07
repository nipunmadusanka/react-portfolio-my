import { motion } from 'framer-motion';
import Head from 'next/head';
import AboutClients from '../components/about/AboutSupport';
import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';
import PagesMetaHead from '../components/PagesMetaHead';

function about() {
	return (
		<div>
			<PagesMetaHead title="Experience" />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto pt-16"
			>
				<ul aria-label="Alternative changelog feed" role="feed" class="relative flex flex-col gap-12 py-12 pl-6 lg:pl-0 before:absolute before:top-0 before:left-6 lg:before:left-[8.5rem] before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-6 lg:after:left-[8.5rem] after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200">

					<li role="article" class="relative pl-6 lg:pl-0 lg:flex lg:gap-12 before:absolute before:z-10 before:left-0 lg:before:left-[8.5rem] before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
						<h4 class="hidden text-lg font-medium leading-7 text-slate-500 lg:w-28 lg:text-right lg:block">Now</h4>
						<div class="flex flex-col flex-1 gap-4">
							<h4 class="text-lg font-medium text-emerald-500"><a href='https://byit.lk/' target="_blank" rel="noreferrer">Beyond IT</a> <span class="font-normal lg:hidden text-slate-500"> - 2023-01-21</span> </h4>
							<p class=" text-slate-500">As a Software Engineer at Beyond IT, I specialize in utilizing React to craft dynamic and engaging web applications that elevate user experiences.

							</p>
							<ul class="pl-5 list-disc text-slate-500 marker:text-emerald-500">
								<li>Leveraging React expertise to develop cutting-edge web solutions for diverse clients.</li>
								<li>Collaborating with cross-functional teams to ensure seamless integration and optimal performance of web applications.</li>
								<li>Employing best practices in web development to deliver high-quality, responsive, and user-friendly interfaces.</li>
								<li>Contributing to the innovative culture of Beyond IT, constantly exploring new technologies and methodologies to enhance development processes and outcomes.</li>
							</ul>
						</div>
					</li>
					<li role="article" class="relative pl-6 lg:pl-0 lg:flex lg:gap-12 before:absolute before:z-10 before:left-0 lg:before:left-[8.5rem] before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
						<h4 class="hidden text-lg font-medium leading-7 text-slate-500 lg:w-28 lg:text-right lg:block">2024-01-10</h4>
						<div class="flex flex-col flex-1 gap-4">
							<h4 class="text-lg font-medium text-emerald-500"><a href='https://zfrozen.com/' target="_blank" rel="noreferrer">Zfrozen</a> <span class="font-normal lg:hidden text-slate-500"> - 2024-01-10</span> </h4>
							<p class=" text-slate-500">In my capacity at Zfrozen, I&apos;ve cultivated a comprehensive skill set and experience that underscores my effectiveness in the realm of web development.</p>
							<ul class="pl-5 list-disc text-slate-500 marker:text-emerald-500">
								<li>Technology Proficiency</li>
								<li>Adaptability to New Technologies</li>
								<li>Client Relationship Management</li>
							</ul>
						</div>
					</li>
					<li role="article" class="relative pl-6 lg:pl-0 lg:flex lg:gap-12 before:absolute before:z-10 before:left-0 lg:before:left-[8.5rem] before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
						<h4 class="hidden text-lg font-medium leading-7 text-slate-500 lg:w-28 lg:text-right lg:block">2023-05-20</h4>
						<div class="flex flex-col flex-1 gap-4">
							<h4 class="text-lg font-medium text-emerald-500"><a href='https://abacuslk.com/' target="_blank" rel="noreferrer">Abacus Tecnologies</a> <span class="font-normal lg:hidden text-slate-500"> - 2023-01-18</span></h4>
							<p class=" text-slate-500">At Abacus Technologies, I excelled in React and Laravel, improved teamwork dynamics, and honed problem-solving abilities.</p>
							<ul class="pl-5 list-disc text-slate-500 marker:text-emerald-500">
								<li>Expertise in React and Laravel</li>
								<li>Collaborative Leadership</li>
								<li>Proactive Problem-Solving</li>
								<li>Continuous Skill Enhancement</li>
							</ul>
						</div>
					</li>
				</ul>
			</motion.div>
		</div>
	);
}

export default about;
