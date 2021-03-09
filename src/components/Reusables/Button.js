import PropTypes from 'prop-types'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Button = props => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <motion.button
            ref={ref}
            className={props.btnStyle}
            whileHover={{ scale: .95 }}
            transition={{ ease: "easeOut", duration: .5, type: "spring", stiffness: 120}}
            animate={{ y: inView ? 0 : -30, opacity: inView ? 1 : 0}}
        >
            {props.btnText}
        </motion.button>
    )
}

Button.propTypes = {
    btnText: PropTypes.string,
    btnStyle: PropTypes.string
}

export default Button
