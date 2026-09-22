/* Site configuration and the values that still need real data filled in.
   Everything marked TODO renders nothing (or is omitted) while empty, so the
   site never shows placeholder data to a visitor. */

/* Where the contact form POSTs its JSON payload.
   Set VITE_CONTACT_ENDPOINT in .env.local (dev) or in the host's build
   environment (production). While empty, the form falls back to opening the
   visitor's mail client with the message pre-filled. */
export const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "";

/* Fallback address used when CONTACT_ENDPOINT is not configured. */
export const CONTACT_EMAIL = "info@quantyx.com";

/* Company LinkedIn. An empty string hides the footer icon. */
export const LINKEDIN_URL = "https://www.linkedin.com/company/quantyx-advisors/";

export const OFFICES = {
  milan: {
    city: "Milan · IT",
    name: "Milan",
    address: ["Via E. De Amicis 53", "20123 Milano (MI), Italy"],
    contact: {
      name: "Paolo Orlandi",
      role: "Head of Business Development",
      email: "paolo.orlandi@quantyx.com",
      phone: "", // TODO: real number — the prototype had +39 02 0000 0000
    },
  },
  luxembourg: {
    city: "Luxembourg · LU",
    name: "Luxembourg",
    address: ["21 Rue Glesener", "L-1631 Luxembourg"],
    contact: {
      name: "Michel Lempicki",
      role: "Head of Business Development",
      email: "michel.lempicki@quantyx.com",
      phone: "", // TODO: real number — the prototype had +352 000 000 000
    },
  },
};
