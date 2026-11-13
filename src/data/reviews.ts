// Reviews from the live CMS (/api/v1/reviews): "Test Reviewer" removed and the two duplicates merged,
// so the count and the average are computed from what is actually shown.
// PENDING: the manager confirms these are real reviews with permission to publish.
export type Review = { name: string; role: string; group: 'drivers' | 'owners' | 'partners'; rating: number; text: string; source: string };
export const reviews: Review[] = [
  {
    "name": "John Smith",
    "role": "Fleet Manager",
    "group": "partners",
    "rating": 5,
    "text": "GFS Group has been an excellent partner for our transportation needs. Their reliability and professionalism are unmatched.",
    "source": "Website"
  },
  {
    "name": "Sarah Johnson",
    "role": "Logistics Director",
    "group": "partners",
    "rating": 5,
    "text": "We have been working with GFS Group for over 3 years. Their commitment to on-time delivery has helped us maintain our customer satisfaction.",
    "source": "Google"
  },
  {
    "name": "Michael Brown",
    "role": "Operations Manager",
    "group": "partners",
    "rating": 4,
    "text": "Great service and competitive pricing. The team is always responsive and helpful.",
    "source": "Website"
  },
  {
    "name": "Diego Ramirez",
    "role": "OTR Driver",
    "group": "drivers",
    "rating": 5,
    "text": "Switched to GFS six months ago and my paychecks have been the most consistent of my career. Loads are pre-planned, detention pay is real, and home time is respected. Couldn't ask for more.",
    "source": "Website"
  },
  {
    "name": "Anthony Caruso",
    "role": "Owner-Operator",
    "group": "owners",
    "rating": 5,
    "text": "As an owner-operator the rates matter, and GFS keeps me loaded with the right lanes. No forced dispatch, transparent settlements, and they actually negotiate on my behalf. Highly recommended.",
    "source": "Google"
  },
  {
    "name": "Tyrell Jackson",
    "role": "Regional Driver",
    "group": "drivers",
    "rating": 5,
    "text": "Regional runs that get me home every weekend, modern equipment, and a recruiter who didn't sugarcoat anything during the hire. What you're told is what you get. Rare in this industry.",
    "source": "Website"
  },
  {
    "name": "Brent Walker",
    "role": "Team Driver",
    "group": "drivers",
    "rating": 5,
    "text": "Running team with GFS has been smooth from day one. Plenty of miles, good fuel network discounts, and 24/7 dispatch when something comes up at 2am. They have your back.",
    "source": "Facebook"
  },
  {
    "name": "Hassan Mahmoud",
    "role": "Flatbed Driver",
    "group": "drivers",
    "rating": 4,
    "text": "Solid company for flatbed work. Loads are well-secured at origin and the customers know what they're doing. Pay shows up like clockwork every Friday.",
    "source": "Google"
  },
  {
    "name": "Linda Patel",
    "role": "Fleet Operations Manager",
    "group": "partners",
    "rating": 5,
    "text": "We onboarded six trucks with GFS earlier this year and the experience has been seamless. Compliance support, ELD integration, and proactive load planning. They feel like an extension of our team.",
    "source": "Website"
  },
  {
    "name": "Robert Chen",
    "role": "Director of Logistics",
    "group": "partners",
    "rating": 5,
    "text": "Reliable execution week after week. When weather or breakdowns disrupt a lane, GFS finds alternatives without the usual chaos. That's the difference between a vendor and a partner.",
    "source": "Google"
  },
  {
    "name": "Amanda Rivers",
    "role": "Transportation Coordinator",
    "group": "partners",
    "rating": 5,
    "text": "Communication is what sets them apart. Updates before I have to ask, accurate ETAs, and proactive flagging when something might run late. Makes my job so much easier.",
    "source": "Website"
  },
  {
    "name": "Kevin O’Brien",
    "role": "Senior Dispatcher",
    "group": "partners",
    "rating": 5,
    "text": "I've worked with a lot of carriers over 15 years. GFS dispatch is responsive, drivers are professional, and the paperwork is always in order. No drama, just results.",
    "source": "Google"
  },
  {
    "name": "Olivia Bennett",
    "role": "Freight Broker",
    "group": "partners",
    "rating": 5,
    "text": "When I need a load covered fast, GFS is one of my first calls. They commit and they deliver. POD comes through quickly which keeps my customers paying me on time.",
    "source": "Website"
  },
  {
    "name": "Marcus Lee",
    "role": "Carrier Sales Representative",
    "group": "partners",
    "rating": 5,
    "text": "Negotiations are straightforward, no games, no last-minute renegotiations. They bid what makes sense for both sides and stick to it. That builds long-term partnerships.",
    "source": "Google"
  },
  {
    "name": "Jessica Nguyen",
    "role": "Driver Recruiter",
    "group": "partners",
    "rating": 4,
    "text": "Referred several drivers to GFS over the past year. Every one of them is still there and happy. That tells you everything you need to know about the company culture.",
    "source": "Website"
  },
  {
    "name": "Daniel Foster",
    "role": "Warehouse Operations",
    "group": "partners",
    "rating": 5,
    "text": "Drivers show up on time, dressed professionally, and respect our facility safety rules. We've made GFS a preferred carrier across our distribution centers.",
    "source": "Google"
  },
  {
    "name": "Priya Sharma",
    "role": "Supply Chain Analyst",
    "group": "partners",
    "rating": 5,
    "text": "On-time pickup rate has been above 98% across the lanes we run with GFS. Consistency like that is gold when you're trying to keep customers happy.",
    "source": "Website"
  },
  {
    "name": "Thomas Reed",
    "role": "Owner-Operator",
    "group": "owners",
    "rating": 5,
    "text": "Been with GFS for almost two years. Settlements are clean, deductions are explained line by line, and they fight for me when a shipper tries detention games. That loyalty earns mine.",
    "source": "Facebook"
  }
];

export const reviewCount = reviews.length;
export const ratingAverage = Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10;
export const ratingText = `${ratingAverage.toFixed(1)} out of 5 from ${reviewCount} reviews`;
