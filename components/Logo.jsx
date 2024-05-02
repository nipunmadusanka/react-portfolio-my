import { motion } from 'framer-motion';
import { mydata } from '../data/myData';
import Link from 'next/link';
import Image from 'next/image';
const Logo = (props) => {
  const { width } = props;
  console.log(props);
  const imge = (
    <Image src={mydata.data.logo} alt='logo' className='flex items-center' width={width} height="0"/>
  );
  return (
    <motion.div>
      {imge}
    </motion.div>
  )
}

export default Logo