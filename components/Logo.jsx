import { motion } from 'framer-motion';
import { mydata } from '../data/myData';
import Link from 'next/link';
const Logo = (props) => {
    const { width } = props;
    console.log(props);
    const imge = (
        <img src={mydata.data.logo} alt='logo' className='flex items-center ' width={width} />
    );
  return (
    <motion.div>
        {imge}
    </motion.div>
  )
}

export default Logo