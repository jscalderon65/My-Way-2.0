import { useEffect, useState } from "react";

function useMediaQuery(
  query,
  defaultMatches = window.matchMedia(query).matches
) {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
}

export  {useMediaQuery};
