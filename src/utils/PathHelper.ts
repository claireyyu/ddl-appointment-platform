// export default function generateLocalizedPath(path: string, locale: string) {
//   return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
// }
export default function generateLocalizedPath(path: string, locale: string, queryParams?: Record<string, string>): string {
  const basePath = `/${locale}${path.startsWith('/') ? path : `/${path}`}`;

  if (queryParams && Object.keys(queryParams).length > 0) {
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    return `${basePath}?${queryString}`;
  }

  return basePath;
}
