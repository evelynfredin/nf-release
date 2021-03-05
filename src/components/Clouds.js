import { motion, useViewportScroll, useTransform } from "framer-motion"
import Stripe from '../assets/images/strip.svg'

const Clouds = () => {
    const { scrollYProgress } = useViewportScroll();
    const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -550, -100]);
    const xPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [-200, 500, -200]);

    return (
        <div className="flex flex-col items-center">
            <motion.img src={Stripe} alt="" className="w-3/4 md:w-auto" style={{
            x: yPosAnim}}/>

            <h2 className="uppercase text-3xl md:text-7xl my-5">Clouds (The Mixtape)</h2>
            <motion.img src={Stripe} alt="" className="w-3/4 md:w-auto" style={{
            x: xPosAnim}}/>
        </div>
    )
}

export default Clouds
