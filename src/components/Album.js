import TextBlock from './Reusables/TextBlock';
import AlbumCover from '../assets/images/clouds-cover.jpg'

const Album = () => {
    return (
        <section className="content-box lg:grid lg:grid-cols-2 mt-32 lg:mt-0">
            <div className="lg:mr-10">
                    <img src={AlbumCover} alt="Clouds (The Mixtape) Album Art" className="w-full h-full object-contain"/>
            </div>
            <TextBlock
                title="Clouds"
                subtitle="(The Mixtape)"
                body="Clouds drops March 26. Preorder now!"
            />
        </section>
    )
}

export default Album
