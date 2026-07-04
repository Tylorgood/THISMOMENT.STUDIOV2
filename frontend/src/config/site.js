// Central configuration for This Moment Studio.
// Edit brand identity, contact info, social links & copy here.
// No design changes required to update these values.

export const SITE_CONFIG = {
  brand: {
    name: "This Moment Studio",
    shortName: "TMS",
    tagline: "Live shows. Private events. Unforgettable moments.",
    heroSubline:
      "Soundtracks for the moments that define you — a private show, a curated night, a memory in the making.",
    description:
      "This Moment Studio designs cinematic live shows, private events and creative productions for tastemakers, brands and unforgettable nights.",
  },
  contact: {
    phone: "(586) 339-4701",
    phoneHref: "tel:+15863394701",
    email: "hello@thismoment.studio",
    emailHref: "mailto:hello@thismoment.studio",
    location: "By appointment — Worldwide",
  },
  social: {
    instagram: {
      handle: "@thismoment.studio",
      url: "https://instagram.com/thismoment.studio",
    },
    tiktok: {
      handle: "@thismoment.studio",
      url: "https://tiktok.com/@thismoment.studio",
    },
    email: {
      handle: "hello@thismoment.studio",
      url: "mailto:hello@thismoment.studio",
    },
  },
  eventTypes: [
    "Live Show",
    "Private Event",
    "Brand Activation",
    "Wedding / Celebration",
    "Corporate Night",
    "Creative Production",
    "Other",
  ],
  upcomingShows: [
    { title: "Golden Hour — Vol. III", date: "Feb 14", city: "Detroit, MI", status: "By Invite" },
    { title: "Velvet Room Sessions", date: "Mar 08", city: "Miami, FL", status: "Limited" },
    { title: "Nocturne — After Dark", date: "Apr 20", city: "New York, NY", status: "Soon" },
  ],
};

export default SITE_CONFIG;
