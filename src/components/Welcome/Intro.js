import Logo from './Logo';
import Button from '../Reusables/Button';
import GetParams from '../Reusables/GetParams';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';


const Intro = () => {
    const { scrollY } = useViewportScroll();
    const anim2 = useTransform(scrollY, [0, 300], [0, -50]);
    const anim3 = useTransform(scrollY, [0, 300], [0, -50]);

    function scrollToBottom () {
        scroll.scrollToBottom();
    }

    return (

        <div className="intro">

            <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                style={{
                    y: anim2 }}
            >
                <span className="block text-2xl md:text-4xl">{GetParams.isNameSet() ? 'Hi ' + GetParams.isNameSet() + '!': '' }</span>
                <span className="block text-xs mb-5">{GetParams.isNameSet() ? 'Join us in celebration during' : '' }</span>
                <span className="block text-2xl md:text-4xl">March 26th</span>
                Clouds
                <span className="block text-lg md:text-2xl">{GetParams.isLocationSet() ? '(The Launch Night)' : '(The Livestream)'}</span>
            </motion.h1>
            <Logo />
                <Button
                    btnStyle="btn btn--big"
                    btnText={GetParams.isLocationSet() ? 'RSVP' : 'Tickets'}
                    btnAnim={{
                        y: anim3}}
                    btnScroll={scrollToBottom}
                />
        </div>
    )
}



export default Intro
