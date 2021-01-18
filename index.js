import { useState, useEffect } from 'react';
import mediaQueries from './mediaQueries';

export default (query) => {
  if (typeof window !== 'object') return;
  if (!window.matchMedia) return;

  const queryToMatch = mediaQueries[query] || query;
  const [matches, setMatches] = useState(window.matchMedia(queryToMatch).matches);

  useEffect(() => {
    const media = window.matchMedia(queryToMatch);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, queryToMatch]);

  return matches;
};
