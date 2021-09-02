import { useEffect, useState } from 'react';
import RenderList from './RenderList.component';

import {capitalize} from '../../helpers/utils';

const CountryListWithSearch = ({countries}) => {
  const [list, setList] = useState(countries);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const filteredList = countries.filter((country) => country.name.includes(query) || country.name.includes(capitalize(query)));
    setList(filteredList);
  }, [query, countries])

  return(
    <div className='card'>
      <header className="card-header">
        <p className="card-header-title">
          Countries
        </p>
        <input
          type='text'
          value={query}
          className='m2'
          placeholder='Search...'
          onChange={e => setQuery(e.target.value)}
        />

      </header>
      <RenderList list={list} />
    </div>
  )
}

export default CountryListWithSearch;