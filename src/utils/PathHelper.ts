// export default function generateLocalizedPath(path: string, locale: string) {
//   return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
// }
// export default function generateLocalizedPath(path: string, locale: string, queryParams?: Record<string, string>): string {
//   const basePath = `/${locale}${path.startsWith('/') ? path : `/${path}`}`;

//   if (queryParams && Object.keys(queryParams).length > 0) {
//     const queryString = Object.entries(queryParams)
//       .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
//       .join('&');
//     return `${basePath}?${queryString}`;
//   }

//   return basePath;
// }

// export default function generateLocalizedPath(path: string, locale: string, params: Record<string, string> = {}): string {
//   // Remove any existing locale query parameter
//   const filteredParams = Object.fromEntries(
//     Object.entries(params).filter(([key]) => key !== 'locale')
//   );

//   // Construct the new path with the locale
//   const queryString = new URLSearchParams(filteredParams).toString();
//   return `/${locale}${path}${queryString ? `?${queryString}` : ''}`;
// }

export default function generateLocalizedPath(path: string, locale: string, params: Record<string, string> = {}): string {
  // Remove any existing locale query parameter
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([key]) => key !== 'locale')
  );

  const basePath = `/${locale}${path.startsWith('/') ? path : `/${path}`}`;

  if (filteredParams && Object.keys(filteredParams).length > 0) {
    const queryString = Object.entries(filteredParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    return `${basePath}?${queryString}`;
  }

  return basePath;
}