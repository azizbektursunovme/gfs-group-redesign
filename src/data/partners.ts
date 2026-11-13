// Partner network from the live CMS (/api/v1/partners), without "Test Partner Co".
// Logos were copied from the live site, trimmed and set on one canvas size (public/partners/*.webp).
// PENDING: the manager confirms the list (Convoy, for example, closed its brokerage in 2023).
export type Partner = { name: string; type: 'broker' | 'carrier'; logo: string };
export const partners: Partner[] = [
  {
    "name": "TQL (Total Quality Logistics)",
    "type": "broker",
    "logo": "tql-total-quality-logistics"
  },
  {
    "name": "XPO Logistics",
    "type": "broker",
    "logo": "xpo-logistics"
  },
  {
    "name": "Echo Global Logistics",
    "type": "broker",
    "logo": "echo-global-logistics"
  },
  {
    "name": "Coyote Logistics",
    "type": "broker",
    "logo": "coyote-logistics"
  },
  {
    "name": "Landstar System",
    "type": "carrier",
    "logo": "landstar-system"
  },
  {
    "name": "Hub Group",
    "type": "carrier",
    "logo": "hub-group"
  },
  {
    "name": "GlobalTranz",
    "type": "broker",
    "logo": "globaltranz"
  },
  {
    "name": "Convoy",
    "type": "broker",
    "logo": "convoy"
  },
  {
    "name": "J.B. Hunt",
    "type": "carrier",
    "logo": "j-b-hunt"
  },
  {
    "name": "Schneider National",
    "type": "carrier",
    "logo": "schneider-national"
  },
  {
    "name": "Knight-Swift Transportation",
    "type": "carrier",
    "logo": "knight-swift-transportation"
  },
  {
    "name": "Arrive Logistics",
    "type": "broker",
    "logo": "arrive-logistics"
  },
  {
    "name": "Armstrong Transport Group",
    "type": "broker",
    "logo": "armstrong-transport-group"
  },
  {
    "name": "Circle Logistics",
    "type": "broker",
    "logo": "circle-logistics"
  },
  {
    "name": "WWEX Group",
    "type": "broker",
    "logo": "wwex-group"
  },
  {
    "name": "Worldwide Express",
    "type": "broker",
    "logo": "worldwide-express"
  },
  {
    "name": "Unishippers",
    "type": "broker",
    "logo": "unishippers"
  },
  {
    "name": "Axle Logistics",
    "type": "broker",
    "logo": "axle-logistics"
  },
  {
    "name": "Edge Logistics",
    "type": "broker",
    "logo": "edge-logistics"
  },
  {
    "name": "FLS Transportation",
    "type": "broker",
    "logo": "fls-transportation"
  },
  {
    "name": "FreightPlus",
    "type": "broker",
    "logo": "freightplus"
  },
  {
    "name": "Loadsmart",
    "type": "broker",
    "logo": "loadsmart"
  },
  {
    "name": "R2 Logistics",
    "type": "broker",
    "logo": "r2-logistics"
  },
  {
    "name": "SPI Logistics",
    "type": "broker",
    "logo": "spi-logistics"
  },
  {
    "name": "Transportation Insight",
    "type": "broker",
    "logo": "transportation-insight"
  },
  {
    "name": "Universal Logistics Holdings",
    "type": "carrier",
    "logo": "universal-logistics-holdings"
  },
  {
    "name": "AFN Logistics",
    "type": "broker",
    "logo": "afn-logistics"
  },
  {
    "name": "BNSF Logistics",
    "type": "carrier",
    "logo": "bnsf-logistics"
  },
  {
    "name": "Brokers Logistics Ltd",
    "type": "broker",
    "logo": "brokers-logistics-ltd"
  },
  {
    "name": "CRST The Transportation Solution",
    "type": "carrier",
    "logo": "crst-the-transportation-solution"
  },
  {
    "name": "DSV Road",
    "type": "broker",
    "logo": "dsv-road"
  },
  {
    "name": "EASE Logistics",
    "type": "broker",
    "logo": "ease-logistics"
  },
  {
    "name": "ExFreight",
    "type": "broker",
    "logo": "exfreight"
  },
  {
    "name": "ITS Logistics",
    "type": "broker",
    "logo": "its-logistics"
  },
  {
    "name": "MegaCorp Logistics",
    "type": "broker",
    "logo": "megacorp-logistics"
  },
  {
    "name": "NFI Logistics",
    "type": "carrier",
    "logo": "nfi-logistics"
  },
  {
    "name": "Xpress Global Systems",
    "type": "carrier",
    "logo": ""
  }
];
