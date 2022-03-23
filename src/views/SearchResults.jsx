import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCards from '../components/Cards';
import CookbookService from '../api/recipeService';
import './css/results.css';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResults() {
  const query = useQuery();
  const [searchResult, setSearchResult] = useState();
  useEffect(() => {
    console.log('query', query.get('query'));

    CookbookService.searchRecipes(
      query.get('query') ? query.get('query') : '%'
    ).then((recipes) => {
      // console.log('recipe Postegres', recipe);
      recipes.length = 100;
      setSearchResult(recipes);
    });

    return;
  }, [query]);
  // console.log('cmsData', cmsData);

  return (
    <>
      {/* <div className="results-div">Results for: {query.get('query')}</div> */}
      <div>
        <RecipeCards
          title="Search Results"
          description="Some representative placeholder content for the description"
          recipes={searchResult}
        />
      </div>
    </>
  );
}
