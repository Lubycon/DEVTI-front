export type QueryParamValue = string | number | boolean | undefined;
export type QueryParam = Record<string, QueryParamValue>;

function stringifyQueryParams(params: QueryParam = {}) {
  const queryString = Object.entries(params)
    .filter(([, value]) => value != null)
    .map(([key, value]) => {
      const encodedValue = encodeURIComponent(value as NonNullable<QueryParamValue>);
      return `${key}=${encodedValue}`;
    });

  if (queryString.length === 0) {
    return '';
  }

  return `?${queryString.join('&')}`;
}

export default stringifyQueryParams;
