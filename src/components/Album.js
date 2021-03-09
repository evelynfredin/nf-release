import TextBlock from './Reusables/TextBlock';
import AlbumCover from '../assets/images/clouds-cover.jpeg'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Album = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <section className="wrapper flex flex-col h-screen lg:flex-row justify-center items-center">
            <div className="lg:mr-10">
                <motion.img src={AlbumCover}
                    alt="Clouds album cover"
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

            <TextBlock title="Clouds" subtitle="(The Mixtape)">
                <p className="text-block--body"><span className="text-white font-bold uppercase">Clouds</span> drops March 26. Preorder now!</p>
            </TextBlock>

        </section>
    )
}

export default Album
