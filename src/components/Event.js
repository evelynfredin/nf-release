import TextBlock from './Reusables/TextBlock';

const Event = () => {
    return (
        <section className="wrapper h-screen lg:grid lg:grid-cols-2">
            <TextBlock subtitle="(The Launch Night)">
                <p className="text-block--body">Join <span className="text-white font-bold">NF</span> and some fantastic guests for a night of great music and fun where <span className="text-white font-bold uppercase">Clouds</span> will be performed in its entirety for the first time ever</p>
            </TextBlock>
        </section>
    )
}

export default Event
