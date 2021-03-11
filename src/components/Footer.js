import Button from './Reusables/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const search = window.location.search;
    const location = new URLSearchParams(search).get('location');

    return (
        <section className="w-screen h-screen items-center flex flex-col justify-center my-33">
            <motion.p
                ref={ref}
                animate={{ y: inView ? 30 : 100, opacity: inView ? 1 : 0}}
                transition={{ delay: 0.3, duration: 1}}
                className="text-white text-4xl md:text-6xl lg:text-8xl font-bold my-10">
                    I'll be there
            </motion.p>
            <Button
                btnStyle="btn btn--bigger"
                btnText={location ? 'RSVP' : 'Tickets'}
            />
        </section>
    )
}

export default Footer
