import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL , geoApiOptions }from '../../api';
import Error from '../errorMessage/errorMessage';

const Search = ({onSearchChange}) => {

    const [error,setError] = useState(null);
    const [search,setSearch] = useState(null);

    
    
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,geoApiOptions)
        .then((response) => response.json())
        .then((response) => {
            return{
                options: response.data.map((city) => {
                    return{
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`, 
                    }
                })
            }
        })
        .catch((err) => setError(error.message));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }



    return(
        <div>
            <AsyncPaginate
                placeholder = "Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
            {error && <Error message={error} />}
        </div>
        
    )
}

export default Search;


