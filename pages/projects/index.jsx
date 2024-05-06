import PagesMetaHead from '../../components/PagesMetaHead';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import AboutCounter from '../../components/about/AboutCounter';
import { motion } from 'framer-motion';

function index() {
	return (
		<>
			<div className="container mx-auto">
				<PagesMetaHead title="Projects" />

				<ProjectsGrid />

			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>
		</>
	);
}

export default index;
