// SPDX-License-Identifier: GPL-3.0+

export default function getQuery(location) {
  if (!location) return null;
  const params = new URLSearchParams(location.search.slice(1));
  return params.get('q') || '';
}
