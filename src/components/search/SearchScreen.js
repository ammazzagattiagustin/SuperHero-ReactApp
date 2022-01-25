import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const heroesFileted = useMemo( () => getHeroesByName(q), [q] );


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`)
    }


    return (
        <>      
            <div className="row mt-3">

                <div className="col-12 col-md-6 mt-2">
                    <h1>Search: </h1>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="e.g: Batman"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />


                        <button 
                            className="btn btn-primary mt-3"
                            type="submit">
                            Search
                        </button>

                    </form>


                </div>

                <div className="col-12 col-md-6 mt-2">
                    <h1>Results: </h1>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info text-center"> Search a Hero </div>
                            : ( heroesFileted.length === 0 ) 
                                && <div className="alert alert-danger"> No results: { q } </div>
                    }


                    {
                        heroesFileted.map(hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }


                </div>

            </div>

        </>
    )
}
