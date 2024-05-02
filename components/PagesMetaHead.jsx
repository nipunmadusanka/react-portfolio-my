import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.png" />
			<title>{title} | Nipun Madusanka</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Optimized Web Development: Crafting User-Centric Experiences for Enhanced Online Presence',
	keywords: 'Web Development, react, web, JavaScript',
	keywords: 'SEO Optimization, Responsive Design, Frontend Development',
};

export default PagesMetaHead;
