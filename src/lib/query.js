export function getQuery(location) {
  if (!location) return null;
  const params = new URLSearchParams(location.search.slice(1));
  return params.get('q') || '';
}