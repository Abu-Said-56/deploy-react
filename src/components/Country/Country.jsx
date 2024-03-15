import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handlevisitedflag}) => {
    //console.log(country)
    const{name,flags,languages,population,region,area,capital,cca3} = country;

    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }


    //const passCountry = () =>handleVisitedCountry(country);
    


    //console.log(handleVisitedCountry);
    return (
        <div className={`country${visited ? 'visited' : 'non visited'}`}>
            <h3 style={{color: visited ? 'yellowgreen' :'purple'}}>Country : {name.common}</h3>
            <h3>Capital:{capital}</h3>
            <h3>Population:{population}</h3>
            <h3>Religion:{region}</h3>
            <h3>Area:{area}</h3>
            <img src={flags.png} />
            <h4>Code:{cca3}</h4>
            <button onClick={() =>handleVisitedCountry(country)}>Mark visited</button> <br />
            <button onClick={() =>handlevisitedflag(country.flags.png)}>Add visited Flag</button> <br />
            <button onClick={handleVisited}>Visited</button>
            {visited ? 'I have visited this country' : 'I want to visit this country' }        
        </div>
    );
};

export default Country;