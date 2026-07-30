/** Shared office address used on contact page, footer, and maps. */

export const OFFICE_ADDRESS = {
  line1: "3422 Al Tufail Ibn Amrou",
  line2: "7558 Al Faisaliyah Dist.",
  line3: "13712 AD DIRIYAH",
  buildingNo: "3422",
  additionalNo: "7558",
  zipCode: "13712",
  city: "AD DIRIYAH",
  country: "Saudi Arabia",
} as const;

export const OFFICE_ADDRESS_LINES = [
  OFFICE_ADDRESS.line1,
  OFFICE_ADDRESS.line2,
  OFFICE_ADDRESS.line3,
] as const;

export const OFFICE_ADDRESS_FULL = OFFICE_ADDRESS_LINES.join(", ");

const MAP_QUERY = encodeURIComponent(
  `${OFFICE_ADDRESS_FULL}, ${OFFICE_ADDRESS.country}`
);

export const OFFICE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=en&z=16&output=embed`;

export const OFFICE_MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
