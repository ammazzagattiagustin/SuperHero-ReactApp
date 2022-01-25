import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
    return (
        <div className='mt-3'>
            <h1>Marvel Characters: </h1>
            <hr />

            <HeroList publisher="Marvel Comics" />

        </div>
    )
}
