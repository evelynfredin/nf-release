import TextBlock from './Reusables/TextBlock';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Event = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <section className="content-box lg:grid lg:grid-cols-2">

            <TextBlock
                subtitle="(The Launch Night)"
                body="Join NF and some fantastic guests for a night of great music and fun where CLOUDS will be performed in its entirety for the first time ever!"
            />

            <motion.div ref={ref} className="flex flex-col justify-center mx-10 h-auto"
                animate={{ x: inView ? -10 : 50, opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className="bg-gray-800 self-center">
                    <div className="bg-gray-900 p-10 pt-36 md:p-20 md:pt-52 clip">
                        <h2 className="text-2xl">Hi Mike!</h2>
                        <p className="text-gray-500 text-lg">Your incredible support through the years has awarded you a special place in the Launch Party. These places
                            are reserved to 10 of my most loyal fans and it would be an honor if you joined me in one of the most
                            important nights of my career. Thank you and see you there.
                        </p>
                        <p className="text-right text-gray-400 font-bold">Nathan</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Event
