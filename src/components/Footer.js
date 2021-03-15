import Button from './Reusables/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import GetParams from './Reusables/GetParams';

const Footer = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <section className="w-screen h-screen items-center flex flex-col justify-center my-33 relative">
            <motion.p
                ref={ref}
                animate={{ y: inView ? 30 : 100, opacity: inView ? 1 : 0}}
                transition={{ delay: 0.3, duration: 1}}
                className="text-white text-4xl md:text-6xl lg:text-8xl font-bold my-10">
                    I'll be there
            </motion.p>
            <Link to={ GetParams.isLocationSet() ? '/rsvp' : '' }>
                <Button
                    btnStyle="btn btn--bigger"
                    btnText={GetParams.isNameSet() && GetParams.isLocationSet() ? 'RSVP' : 'Tickets'}
                />
            </Link>
            <div className="my-10 bottom-0 px-10 absolute">
                <p className="text-center">Disclaimer: This is a fake event. This website is a school project and NF has no affiliation to it.</p>
            </div>
        </section>
    )
}

export default Footer
