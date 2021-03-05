import Logo from './Logo';
import Button from '../Reusables/Button';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <div className="intro">
            <motion.h1
                initial={{ y: -250}}
                animate={{ y: -10 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <span className="block text-2xl md:text-3xl">March 25th</span>
                Clouds
                <span className="block text-lg md:text-2xl">(The Launch Night)</span>
            </motion.h1>
            <Logo />
            <Button
                btnStyle="btn btn--big"
                btnText="Tickets"
            />
        </div>
    )
}

export default Intro
