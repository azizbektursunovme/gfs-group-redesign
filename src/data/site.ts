// All company data in one place. Text comes from the live site and its CMS (/api/v1/settings),
// with the review fixes applied. Values marked PENDING wait for the manager (docs/needs.md).
// Empty values hide their blocks: the site never shows an empty block or test data.

export const company = {
  name: 'GFS Group',
  legalName: 'GFS GROUP LLC',
  tagline: 'Where Drivers Come First',
  domain: 'gfs-groupllc.com',
  street: '13690 Riverport Dr Ste 210',
  city: 'Maryland Heights',
  state: 'MO',
  zip: '63043',
  // PENDING: the manager confirms one set. The site, footer and CMS use (636) 442-1334 and info@;
  // the old Privacy and Terms pages used +1-314-451-1111 and hr@. Every page reads these two values.
  phone: '(636) 442-1334',
  phoneHref: 'tel:+16364421334',
  email: 'info@gfs-groupllc.com',
  dot: '', // PENDING: USDOT number (the old site said "USDOT & MC Certified" without numbers)
  mc: '', // PENDING: MC number
};

export const fullAddress = `${company.street}, ${company.city}, ${company.state} ${company.zip}`;

// Office in the St. Louis area, so Central time.
export const hours = [
  { days: 'Mon–Fri', time: '9 AM – 6 PM CT' },
  { days: 'Sat', time: '9 AM – 3 PM CT' },
];
export const hoursText = 'Mon–Fri 9 AM – 6 PM, Sat 9 AM – 3 PM (Central)';

export const links = {
  // Driver application (Tenstreet IntelliApp). Every "Apply" button goes here, with the ?r=Noza referral kept.
  apply: 'https://intelliapp.driverapponline.com/c/2415900?r=Noza',
  // Map link and the address now point to the same place (the old home card pointed to St. Peters).
  maps: 'https://maps.google.com/?q=13690+Riverport+Dr+STE+210,+Maryland+Heights,+MO+63043',
  fmcsa: '', // PENDING: SAFER snapshot URL once the USDOT number is confirmed
};

export const social = [
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/gfsgroupllc' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/g-f-s-group-llc' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61563779612468' },
];

// PENDING: the manager confirms these figures. They are the ones the live site shows on Home and Why Us.
export const stats = [
  { value: '5+', label: 'Years of service', note: 'Steady, accountable work since day one' },
  { value: '48', label: 'States served', note: 'Every contiguous state' },
  { value: '250+', label: 'Drivers nationwide', note: 'A growing network of professionals' },
  { value: '24/7', label: 'Driver support', note: 'Dispatch that picks up at 2 a.m.' },
];

// The three people the site talks to. Drivers and owner-operators apply on Tenstreet.
export const paths = [
  {
    id: 'drivers',
    title: 'Company drivers',
    body: 'Steady miles, weekly direct deposit and home time planned around your life.',
    photo: 'path-drivers',
    cta: 'Apply on Tenstreet',
    href: links.apply,
    external: true,
  },
  {
    id: 'owners',
    title: 'Owner-operators',
    body: 'Your truck, our lanes: loads from top brokers and settlements explained line by line.',
    photo: 'path-owners',
    cta: 'Apply on Tenstreet',
    href: links.apply,
    external: true,
  },
  {
    id: 'partners',
    title: 'Fleet partners',
    body: 'Bring your fleet into our broker and shipper network, with one GFS contact for your account.',
    photo: 'path-partners',
    cta: 'Become a partner',
    href: 'partners/',
    external: false,
  },
];

// "We Deliver More Than Just Freight" (shown once per page, no repeats).
export const reasons = [
  { icon: 'users', title: 'Drivers first, always', body: 'We know what drivers deserve: real respect, steady miles and top pay that reflects your hard work.' },
  { icon: 'home', title: 'You are part of the team', body: 'You are not just a number. We value your time, your skills and your life on and off the road.' },
  { icon: 'route', title: 'Flexible routes, 24/7 support', body: 'Competitive rates, flexible routes and round-the-clock support keep you moving and earning every mile.' },
  { icon: 'award', title: 'Built for your success', body: 'Ready for a company that drives your success? That is the whole idea behind GFS Group.' },
];

// "Built on Four Pillars" without the repeated "Drivers first" card (it already leads the reasons).
export const pillars = [
  { icon: 'shield', title: 'Regulation-ready', body: 'Each operation is aligned with DOT and FMCSA expectations, which reduces avoidable risk.' },
  { icon: 'check', title: 'Protected', body: 'Load details, lane requirements and communication checkpoints are verified before a wheel turns.' },
  { icon: 'clock', title: 'Reliable', body: 'When conditions change, we respond fast with practical alternatives that protect the schedule.' },
];

export const benefits = [
  { icon: 'dollar', title: 'Weekly direct deposit', body: 'Paid every week, on time.' },
  { icon: 'route', title: 'Steady freight lanes', body: 'Consistent routes with our partners across 48 states.' },
  { icon: 'home', title: 'Home time that works', body: 'Schedules built around your life, not the other way around.' },
  { icon: 'award', title: 'Sign-on and safety bonuses', body: 'Bonus programs that reward your dedication.' },
  { icon: 'users', title: 'Career growth', body: 'Training, mentorship and clear paths to advance.' },
  { icon: 'wrench', title: 'Modern equipment', body: 'Well-maintained, late-model trucks with current safety tech.' },
];

// Internal driver survey from the live Why Us page. PENDING: the manager confirms the survey and its year.
export const survey = {
  source: 'Internal driver survey, 2024',
  items: [
    { label: 'Pay and compensation', pct: 96 },
    { label: 'Dispatch communication', pct: 97 },
    { label: 'Home time flexibility', pct: 94 },
    { label: 'Equipment quality', pct: 95 },
    { label: 'Company culture', pct: 98 },
  ],
};

// Programs listed in the old footer, and the two operations services that have their own pages.
export const programs = [
  { icon: 'user', title: 'CDL driver recruiting', body: 'We match qualified Class A drivers with routes that fit their schedule, pay goals and home time.', href: links.apply, cta: 'Apply on Tenstreet', external: true },
  { icon: 'truck', title: 'Owner-operator programs', body: 'Loads from top brokers, transparent settlements and a team that negotiates on your behalf.', href: links.apply, cta: 'Apply on Tenstreet', external: true },
  { icon: 'users', title: 'Fleet partnerships', body: 'Carriers join our network for steady freight, quick-pay options and one point of contact.', href: 'partners/', cta: 'Partner with us', external: false },
  { icon: 'building', title: 'Carrier and logistics', body: 'Trucking and logistics services for shippers and brokers who need freight moved right.', href: 'services/trucking-services/', cta: 'Trucking services', external: false },
];

export const services = [
  {
    slug: 'trucking-services',
    title: 'Trucking services',
    lead: 'Reliable trucking with well-maintained equipment and experienced drivers.',
    body: 'Our trucking division runs well-maintained trucks across the country, with drivers who know the lanes and dispatch that answers around the clock.',
    included: ['FTL and LTL shipping', 'Dedicated routes', 'Expedited shipping', 'Flatbed services'],
    photo: 'svc-trucking',
  },
  {
    slug: 'logistics-solutions',
    title: 'Logistics solutions',
    lead: 'End-to-end logistics management for businesses of all sizes.',
    body: 'We plan logistics around your supply chain: storage, inventory and distribution set up to keep freight moving on schedule.',
    included: ['Warehouse management', 'Inventory control', 'Distribution services', 'Route optimization'],
    photo: 'svc-logistics',
  },
];

// Partners page content from the CMS (/api/v1/partners/section).
export const partnerBenefits = [
  { icon: 'dollar', title: 'Premium load access', body: 'Our driver network gets priority access to well-paying loads from top-tier brokers.' },
  { icon: 'shield', title: 'Verified, safe loads', body: 'Loads from our partners are verified and insured before dispatch.' },
  { icon: 'bolt', title: 'Faster payments', body: 'Quick-pay options shorten the wait for your money.' },
  { icon: 'map', title: 'Nationwide coverage', body: 'Lanes in all 48 contiguous states through our partner network.' },
  { icon: 'user', title: 'Dedicated partner support', body: 'One GFS contact manages your account and solves issues before they grow.' },
  { icon: 'note', title: 'Performance reports', body: 'Monthly reports on lane performance, reliability and earnings.' },
];
export const partnerSteps = [
  { title: 'Apply to partner', body: 'Send your company information and fleet details through the partner form.' },
  { title: 'Qualification review', body: 'We review your DOT compliance, insurance and safety ratings within 48 hours.' },
  { title: 'Network integration', body: 'We connect your fleet with our broker and shipper network and match loads to your lanes.' },
  { title: 'Start earning', body: 'Receive verified loads with weekly settlements and dedicated support.' },
];
export const partnerRequirements = [
  { title: 'Active MC authority', body: 'Motor carrier authority in good standing with the FMCSA.' },
  { title: 'Good safety record', body: 'Satisfactory DOT safety rating and a clean compliance history.' },
  { title: 'Insurance coverage', body: 'Active auto liability ($1M) and cargo ($100k) policies.' },
  { title: 'Signed carrier agreement', body: 'A completed and executed GFS GROUP LLC carrier packet.' },
];
