import Logo from './Logo';
import Button from '../Reusables/Button';
import GetParams from '../Reusables/GetParams';
import { motion } from "framer-motion";

const Intro = () => {

    return (

        <div className="intro">

            <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <span className="block text-2xl md:text-4xl">{GetParams.isNameSet() ? 'Hi ' + GetParams.isNameSet() + '!': '' }</span>
                <span className="block text-lg md:text-2xl">Join us in celebration during</span>
                Clouds
                <span className="block text-lg md:text-2xl">{GetParams.isLocationSet() ? '(The Launch Night)' : '(The Livestream)'}</span>
            </motion.h1>
            <Logo />
                <Button
                    btnStyle="btn btn--big"
                    btnText={GetParams.isLocationSet() ? 'RSVP' : 'Tickets'}
                />
        </div>
    )
}



export default Intro
