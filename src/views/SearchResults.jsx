import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCards from '../components/Cards';
import './css/results.css';

import { createClient } from 'contentful';
const _client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResults() {
  const query = useQuery();
  const [cmsData, setCmsData] = useState();
  useEffect(() => {
    // _client.getEntry('17WMIvrpXN12XIKI7Q3rPh').then((data) => {
    //   console.log('data', data);
    //   console.log('image-url', data.fields.image[0].fields.file.url);

    //   setImages(data);
    // });

    _client
      .getEntries({
        content_type: 'recipe',
      })
      .then((recipes) => {
        setCmsData(recipes.items);
      });

    return;
  }, []);
  // console.log('query', query);

  return (
    <>
      {/* <div className="results-div">Results for: {query.get('query')}</div> */}
      <div>
        <RecipeCards
          title="Search Results"
          description="Some representative placeholder content for the description"
          recipes={cmsData}
        />
      </div>
    </>
  );
}
