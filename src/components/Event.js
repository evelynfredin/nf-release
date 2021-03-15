import TextBlock from './Reusables/TextBlock';
import GetParams from './Reusables/GetParams';

const Event = () => {

    return (
        <section className="wrapper h-full my-40 lg:my-0 lg:h-screen grid lg:grid-cols-2">
            <TextBlock subtitle={GetParams.isLocationSet() ? '(The Launch Night)' : '(The Livestream)'}>
                <p className="text-block--body">Join <span className="text-white font-bold">NF</span> and some fantastic guests for a night of great music and fun where <span className="text-white font-bold uppercase">Clouds</span> will be performed in its entirety for the first time ever</p>
            </TextBlock>
        </section>
    )
}

export default Event
