import PropTypes from 'prop-types'
import { motion } from 'framer-motion';

const Button = props => {
    return (
        <motion.button
            className={props.btnStyle}
            whileHover={{ scale: .95 }}
            transition={{ ease: "easeOut", duration: .5, type: "spring", stiffness: 120}}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, }}
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
