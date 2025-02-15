import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			{/* Google Analytics Script */}
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-80GF7V7K7Z"
			></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-80GF7V7K7Z');
				`,
				}}
			></script>

			{/* SEO Meta Tags */}
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta name="author" content="Nipun Madusanka" />
			<meta name="robots" content="index, follow" />

			{/* Open Graph Meta Tags */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://nipunmadusanka.com" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="https://nipunmadusanka.com/images/profile.jpg" />

			<link rel="icon" href="/favicon.png" />
			<title>{title} | Nipun Madusanka</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Nipun Madusanka - Web Developer & Design Enthusiast in Sri Lanka',
	keywords: 'Web Developer, Frontend Developer, Full Stack Developer, React, Laravel, JavaScript, PHP, React Developer, JavaScript Developer, Freelance Developer, Web Design, Web Development Projects, Hire Web Developer, Web Developer Portfolio',
	description: 'Nipun is a passionate Web Developer & Design Enthusiast, leveraging technology to build a better world.',
};

export default PagesMetaHead;
