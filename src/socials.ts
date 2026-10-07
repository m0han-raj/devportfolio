import { siteConfig } from "./config";

export type Social = {
  href: string;
  label: string;
  external: boolean;
  // Tabler icon path data, drawn on a 24x24 stroke grid.
  paths: string[];
};

// Shared by Hero and Footer so both rows always show the same icons in
// the same order. Any entry missing from the config is dropped.
export const socials = [
  siteConfig.social?.email && {
    href: `mailto:${siteConfig.social.email}`,
    label: "Email",
    external: false,
    paths: [
      "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
      "M3 7l9 6l9 -6",
    ],
  },
  siteConfig.social?.linkedin && {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    external: true,
    paths: [
      "M8 11v5",
      "M8 8v.01",
      "M12 16v-5",
      "M16 16v-3a2 2 0 1 0 -4 0",
      "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z",
    ],
  },
  siteConfig.social?.twitter && {
    href: siteConfig.social.twitter,
    label: "Twitter",
    external: true,
    paths: [
      "M4 4l11.733 16h4.267l-11.733 -16z",
      "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772",
    ],
  },
  siteConfig.social?.github && {
    href: siteConfig.social.github,
    label: "GitHub",
    external: true,
    paths: [
      "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
    ],
  },
  siteConfig.social?.resume && {
    href: siteConfig.social.resume,
    label: "Resume",
    external: true,
    paths: [
      "M14 3v4a1 1 0 0 0 1 1h4",
      "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
      "M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0",
      "M13 11l1.5 6l1.5 -6",
    ],
  },
].filter(Boolean) as Social[];
