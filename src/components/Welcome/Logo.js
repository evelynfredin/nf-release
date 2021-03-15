import { motion, useViewportScroll, useTransform } from "framer-motion";

const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 2, delay: 1},
    },
};

const Logo = () => {
    const { scrollYProgress } = useViewportScroll();
    const Anim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -280, 50]);

    return (
        <div className="my-8">
            <motion.svg width="149" height="101" fill="#000" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                style={{
                y: Anim}}
            >
                <motion.path
                    fill="#000"
                    d="M84.0323 17.5369v66.536c0 .2811-.2268.5079-.5079.5079H68.8849c-.281 0-.5078-.2268-.5078-.5079V42.9946L39.7662 84.3589c-.1171.1701-.3193.2453-.5104.2108-.0345.0074-.0714.0111-.1084.0111H24.5079c-.2811 0-.5079-.2268-.5079-.5079v-66.536c0-.281.2268-.5078.5079-.5078h14.6395c.281 0 .5078.2268.5078.5078v40.8997l28.5086-41.2177c.1393-.2009.3969-.2712.6139-.1787.0345-.0074.0702-.0111.1072-.0111h14.6395c.2811 0 .5079.2268.5079.5078zM116.611 44.4134v14.0231c0 .2811-.227.5079-.508.5079H87.0413c-.281 0-.5079-.2268-.5079-.5079V44.4134c0-.2811.2269-.5079.5079-.5079h29.0617c.281 0 .508.2268.508.5079zM124 17.8759v14.0232c0 .281-.227.5078-.508.5078H86.7874c-.2811 0-.5079-.2268-.5079-.5078V17.8759c0-.281.2268-.5079.5079-.5079h36.7046c.281 0 .508.2269.508.5079z"
                />
            </motion.svg>
        </div>
    )
}

export default Logo
