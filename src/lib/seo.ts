// Production origin for canonical, og:url, sitemap.xml and robots.txt.
export const ORIGIN = import.meta.env.PUBLIC_CANONICAL_ORIGIN || 'https://gfs-groupllc.com';
// The ten pages of the live site, at the same URLs, so links in profiles and ads keep working.
export const PUBLIC_PAGES = [
  '',
  'why-us/',
  'services/',
  'services/trucking-services/',
  'services/logistics-solutions/',
  'partners/',
  'reviews/',
  'contact-us/',
  'privacy-policy/',
  'terms-of-service/',
];
