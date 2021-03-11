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
        <section className="wrapper grid lg:grid-cols-2">
            <div className="lg:m-14 m-5">
                <motion.img src={AlbumCover}
                    alt="Clouds album cover"
                    loading="lazy"
                    ref={ref}
                    animate={{
                        filter: inView ? 'grayscale(' + 0 + ')' : 'grayscale(' + 100 + '%)',
                        opacity: inView ? 1 : 0,
                        y: inView ? 0 : -10
                    }}
                    transition={{ delay: 0.2, duration: 1}}
                />
            </div>

            <div className="flex flex-col h-auto justify-center items-center my-40 lg:my-0">
                <TextBlock title="Clouds" subtitle="(The Mixtape)">
                    <p className="text-block--body mb-10"><span className="text-white font-bold uppercase">Clouds</span> drops March 26.</p>
                </TextBlock>
                <iframe src="https://open.spotify.com/embed/track/5UMMPHPp6vRP6ghPpSUOzp" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </section>
    )
}

export default Album
