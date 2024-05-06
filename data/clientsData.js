import { v4 as uuidv4 } from 'uuid';

// Import images
import AmazonImage from '../public/images/brands/amazon_gray.png';
import SonyImage from '../public/images/brands/sony_gray.png';

export const clientsHeading = 'Some of the brands I worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Amazon',
		img: AmazonImage,
	},
	{
		id: uuidv4(),
		title: 'Sony',
		img: SonyImage,
	}
];
