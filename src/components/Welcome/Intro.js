import Logo from './Logo';
import Button from '../Reusables/Button';
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Intro = () => {
    const { scrollYProgress } = useViewportScroll();
    const Anim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -280, 50]);

    const search = window.location.search;
    const name = new URLSearchParams(search).get('name');
    const location = new URLSearchParams(search).get('location');

    return (

        <div className="intro">

            <motion.h1
            style={{
                y: Anim}}
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <span className="block text-2xl md:text-4xl">{name ? 'Hi ' + name + '!': '' }</span>
                <span className="block text-lg md:text-2xl">Join us in celebration during</span>
                Clouds
                <span className="block text-lg md:text-2xl">{location ? '(The Launch Night)' : '(The Livestream)'}</span>
            </motion.h1>
            <Logo />
            <Button
                btnStyle="btn btn--big"
                btnText={location ? 'RSVP' : 'Tickets'}
                btnAnim={{
                    y: Anim}}
            />
        </div>
    )
}

export default Intro
