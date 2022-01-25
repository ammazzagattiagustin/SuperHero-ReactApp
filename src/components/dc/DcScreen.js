import { HeroList } from '../hero/HeroList';

export const DcScreen = () => {
    return (
        <div className='mt-3'>
            <h1>DC Characters: </h1>
            <hr />

            <HeroList publisher="DC Comics" />

        </div>
    )
}
