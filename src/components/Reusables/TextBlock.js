import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextBlock = props => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <motion.div ref={ref} className="text-block"
            animate={{ y: inView ? -10 : 50, opacity: inView ? 1 : 0}}
            transition={{ delay: 0.2, duration: 1}}
        >
            <div className="text-block--container">
                <div className="md:px-10 lg:px-0">
                    <h2 className="uppercase font-bold text-5xl md:text-8xl mb-10">
                        {props.title}
                        <span className="block text-4xl md:text-6xl">
                            {props.subtitle}
                        </span>
                    </h2>
                    {props.children}
                </div>
            </div>
        </motion.div>
    )
}

TextBlock.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default TextBlock
