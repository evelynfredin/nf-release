import Stripe from '../assets/images/stripe.svg'

const Clouds = () => {
    return (
        <section className="flex flex-col items-center h-auto mt-40 mb-32">
            <img src={Stripe} alt="" className="w-3/4 md:w-auto"/>
            <h2 className="uppercase text-3xl md:text-7xl my-5">Clouds (The Mixtape)</h2>
            <img src={Stripe} alt="" className="w-3/4 md:w-auto"/>
        </section>
    )
}

export default Clouds
