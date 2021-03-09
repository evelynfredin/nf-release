import TextBlock from './Reusables/TextBlock';

const Event = () => {

    const search = window.location.search;
    const location = new URLSearchParams(search).get('location');

    return (
        <section className="wrapper h-screen lg:grid lg:grid-cols-2">
            <TextBlock subtitle={location ? '(The Launch Night)' : '(The Livestream)'}>
                <p className="text-block--body">Join <span className="text-white font-bold">NF</span> and some fantastic guests for a night of great music and fun where <span className="text-white font-bold uppercase">Clouds</span> will be performed in its entirety for the first time ever</p>
            </TextBlock>
        </section>
    )
}

export default Event
