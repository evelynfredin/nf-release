import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const TextBlock = props => {
    return (
        <motion.div className="text-block"
            initial={{ y: 250, opacity: 0}}
            animate={{ y: -10, opacity: 1}}
            transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 120 }}
        >
            <div className="text-block--container">
                <div className="md:px-10 lg:px-0">
                    <h2 className="uppercase font-bold text-5xl md:text-8xl mb-10">{props.title}<span className="block text-4xl md:text-6xl">{props.subtitle}</span></h2>
                    <p className="text-block--body">{props.body}</p>
                </div>
            </div>
        </motion.div>
    )
}

TextBlock.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.string
}

export default TextBlock
