import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PromoImg from '../assets/images/nf-promo.jpeg';
import TextBlock from './Reusables/TextBlock';

const Banner = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <section className="wrapper grid lg:grid-cols-2">
            <div className="z-40 flex order-2 lg:order-1 mx-10 md:mx-20 lg:mx-10 -mt-28 lg:mt-0 flex-col h-auto justify-center items-center mb-40 lg:my-0 bg-gray-700 lg:bg-transparent">
                <TextBlock>
                    <p className="text-block--body mb-10 text-center lg:text-left">It's been 2 years without new music, it's time for more. Over the years we've kept beating the odds and raising bars, join me to do it yet again.</p>
                    <div className="flex justify-center mb-5">
                        <svg className="w-16 h-16" viewBox="0 0 80 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M48.9146.88518V54.114c0 .2248-.1814.4063-.4063.4063H36.7967c-.2248 0-.4063-.1815-.4063-.4063V21.2513L13.5017 54.3428c-.0936.1361-.2554.1962-.4082.1686-.0276.0059-.0572.0089-.0868.0089H1.29509c-.22484 0-.406296-.1815-.406296-.4063V.88518c0-.224843.181456-.406297.406296-.406297H13.0067c.2248 0 .4063.181454.4063.406297V33.6049L36.2198.630752c.1115-.160744.3176-.216954.4911-.142993.0277-.005917.0563-.008876.0858-.008876h11.7116c.2249 0 .4063.181454.4063.406297zM78.0201 22.7926v11.2186c0 .2248-.1814.4063-.4063.4063H54.3642c-.2249 0-.4063-.1815-.4063-.4063V22.7926c0-.2248.1814-.4062.4063-.4062h23.2496c.2249 0 .4063.1814.4063.4062zM80.8887 1.15636V12.3749c0 .2248-.1814.4063-.4063.4063H51.1186c-.2248 0-.4063-.1815-.4063-.4063V1.15636c0-.224845.1815-.406299.4063-.406299h29.3638c.2249 0 .4063.181454.4063.406299z"/></svg>
                    </div>
                </TextBlock>
            </div>

            <div className="lg:m-14 m-5 lg:order-2 z-10">
                <motion.img src={PromoImg}
                    alt="NF promo"
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
        </section>
    )
}

export default Banner
