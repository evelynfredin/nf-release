import Bannerlg from '../assets/images/nf-promo.jpg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Banner = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <section className="wrapper flex flex-col h-screen lg:flex-row justify-center items-center">
            <div className="w-full"></div>
            <div className="lg:mr-10">
                <motion.img src={Bannerlg}
                    alt="NF standing in the dark"
                    loading="lazy"
                    ref={ref}
                    animate={{
                        filter: inView ? 'grayscale(' + 0 + ')' : 'grayscale(' + 100 + '%)',
                        opacity: inView ? 1 : 0,
                        x: inView ? 0 : -10
                    }}
                    transition={{ delay: 0.2, duration: 1}}
                />
            </div>
        </section>
    )
}

export default Banner
