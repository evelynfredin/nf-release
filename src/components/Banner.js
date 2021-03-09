import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Banner = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const small = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg';
const large = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_1280.jpg';


    return (
        <section className="wrapper flex flex-col h-screen lg:flex-row justify-center items-center">
            <div className="lg:mr-10">
                <motion.img src={small}
                    srcSet={`${small} 768w, ${large} 1280w`}
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
