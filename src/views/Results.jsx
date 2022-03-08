import React from 'react';
import { useLocation } from 'react-router-dom';
import './css/results.css';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Results() {
  const query = useQuery();
  // console.log('query', query);

  return <div className="results-div">Results for: {query.get('query')} </div>;
}
