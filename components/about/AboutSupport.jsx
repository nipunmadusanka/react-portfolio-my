import { useState } from 'react';
import { supportsData } from '../../data/mySupportData';
import { supportHeading } from '../../data/mySupportData';
import { supportContent } from '../../data/mySupportData';
import AboutClientSingle from './AboutClientSingle';

function AboutSupport() {
	const [supports, setsupports] = useState(supportsData);
	return (
		<div className="mt-10 sm:mt-20">
			{/* <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{supportHeading}
			</p> */}
			<div className='mt-5 flex justify-center'>
				<p className='w-2/4 text-center'>{supportContent}</p>
			</div>
			<div className='flex justify-center'>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-14 gap-2">
					{supports.map((support) => (
						<AboutClientSingle
							title={support.title}
							image={support.img}
							link={support.link}
							key={support.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default AboutSupport;
