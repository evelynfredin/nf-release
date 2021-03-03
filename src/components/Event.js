import TextBlock from './Reusables/TextBlock';
import { motion } from 'framer-motion';

const Event = () => {
    return (
        <section className="content-box lg:grid lg:grid-cols-2">

            <TextBlock
                title="Clouds"
                subtitle="(The Launch Night)"
                body="Join NF and some fantastic guests for a night of great music and fun where CLOUDS will be performed in its entirety for the first time ever!"
            />

            <motion.div className="flex flex-col justify-center mx-10 h-auto"
                initial={{ x: 250, opacity: 0}}
                animate={{ x: -10, opacity: 1}}
                transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 120 }}
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
