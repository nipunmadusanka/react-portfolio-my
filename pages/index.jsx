import Link from 'next/link';
import { motion } from 'framer-motion';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';
import AboutSupport from '../components/about/AboutSupport';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />
			<AppBanner />
		</div>
	);
}
