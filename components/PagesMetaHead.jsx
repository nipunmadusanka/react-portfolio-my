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
    title: 'Nipun Madusanka | Web Developer Portfolio',
    keywords: 'Web Developer, Frontend Developer, Full Stack Developer, React, Laravel, JavaScript, PHP, React Developer, JavaScript Developer, Freelance Developer, Web Design, Web Development Projects, Hire Web Developer, Web Developer Portfolio',
    description: 'Welcome to my portfolio! I am a skilled Web Developer specializing in Frontend and Full Stack Development. Explore my projects and skills here.'
};

export default PagesMetaHead;
