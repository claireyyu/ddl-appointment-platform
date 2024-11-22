export default function generateLocalizedPath(path: string, locale: string) {
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}
