import Image from 'next/image';
import Link from 'next/link';

function AboutClientSingle({ title, image, link }) {
	return (
		<div className="py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
			<Link href={link} target="_blank" rel="noopener noreferrer"> 
				<Image
					src={image}
					alt={title}
					layout="responsive"
					width={100}
					height={50}
				/>
			</Link>
		</div>
	);
}

export default AboutClientSingle;
