"use client";

/** Site content CMS — stored in localStorage for the admin UI. */

export type FaqItem = {
  question: string;
  answer: string[];
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type HomeHeroContent = {
  titleLine1: string;
  titleLine2: string;
  descriptionLines: string[];
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

export type HomeWhatWeDoContent = {
  eyebrow: string;
  title: string;
  blurbLines: string[];
  highlightLines: string[];
  knowMoreLabel: string;
  knowMoreHref: string;
  services: ServiceItem[];
};

export type HomeFaqIntroContent = {
  titleLine1: string;
  titleLine2: string;
  intro: string;
};

export type AboutHeroContent = {
  title: string;
  descriptionLines: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type AboutMissionVisionContent = {
  missionLabel: string;
  missionHeadline: string;
  missionBody: string;
  visionLabel: string;
  visionHeadline: string;
  visionBody: string;
};

export type CmsStore = {
  "home.hero": HomeHeroContent;
  "home.whatWeDo": HomeWhatWeDoContent;
  "home.faqIntro": HomeFaqIntroContent;
  "about.hero": AboutHeroContent;
  "about.missionVision": AboutMissionVisionContent;
  "faq.items": { items: FaqItem[] };
  contentSeeded: boolean;
};

export const CMS_STORAGE_KEY = "epaid_cms_v1";

export const DEFAULT_CMS: CmsStore = {
  "home.hero": {
    titleLine1: "MSP POS service",
    titleLine2: "provider company",
    descriptionLines: [
      "We deliver smart digital solutions, secure payment systems",
      "and expert advisory services that help businesses grow,",
      "streamline operations, and scale confidently.",
    ],
    ctaPrimaryLabel: "VIEW PRODUCTS",
    ctaPrimaryHref: "/products/hardware",
    ctaSecondaryLabel: "CONTACT US",
    ctaSecondaryHref: "/contact",
  },
  "home.whatWeDo": {
    eyebrow: "About ePaid",
    title: "WHAT WE DO",
    blurbLines: [
      "A spin-off from Saudi Computer Systems (ITS),",
      "delivering smart digital, payment, and advisory",
      "solutions for modern enterprises.",
    ],
    highlightLines: [
      "We help businesses grow with secure payment systems,",
      "digital platforms, and hands-on",
      "expert support.",
    ],
    knowMoreLabel: "Know More",
    knowMoreHref: "/about",
    services: [
      {
        title: "Digital Solutions",
        description:
          "Modern platforms and software built to streamline operations and scale with your business.",
      },
      {
        title: "Payment Solutions",
        description:
          "Secure POS devices, terminals, and payment infrastructure for reliable in-store checkout.",
      },
      {
        title: "Advisory Services",
        description:
          "Expert guidance to help merchants adopt the right technology and grow with confidence.",
      },
    ],
  },
  "home.faqIntro": {
    titleLine1: "FREQUENTLY ASKED",
    titleLine2: "QUESTIONS",
    intro:
      "Got questions? We've got answers. Explore the most common queries about Satocci, how it works, and how it makes your shopping experience easier.",
  },
  "about.hero": {
    title: "More Than POS Systems",
    descriptionLines: [
      "We deliver smart digital solutions, secure payment systems",
      "and expert advisory services that help businesses grow,",
      "streamline operations, and scale confidently.",
    ],
    ctaLabel: "CONTACT US",
    ctaHref: "#contact",
  },
  "about.missionVision": {
    missionLabel: "Our Mission",
    missionHeadline: "Empower every merchant to grow with confidence.",
    missionBody:
      "We deliver secure, reliable POS and payment solutions that simplify daily operations, reduce friction at checkout, and help businesses across Saudi Arabia scale without compromise.",
    visionLabel: "Our Vision",
    visionHeadline: "Lead cashless retail transformation across the region.",
    visionBody:
      "To become the most trusted MSP POS partner — combining deep technical expertise, nationwide support, and innovative fintech to shape the future of in-store commerce.",
  },
  "faq.items": {
    items: [
      {
        question: "HOW DO I USE EPAID TO SCAN AND PAY FOR ITEMS IN-STORE?",
        answer: [
          "With ePaid, paying for your shopping is instantaneous — no waiting in lines or fumbling with cash. The moment you check out in the app, your payment is processed and a digital receipt is issued instantly, securely stored in your account.",
          "Unlike traditional paper receipts that fade, tear, or get lost, your Satocci receipts are always safe, accessible, and trackable. Need to share one? Do it in a single tap — no more awkwardly photographing long, oddly sized receipts that never fit properly in the camera frame.",
          "With Satocci, you enjoy a frictionless, eco-friendly, and clutter-free shopping experience, where your payments are faster and your receipts never disappear.",
        ],
      },
      {
        question: "HOW DOES PAYMENT WORK — WHICH PAYMENT METHODS ARE SUPPORTED?",
        answer: [
          "ePaid supports a wide range of secure payment methods including credit and debit cards, NFC contactless payments, magstripe and chip cards, as well as QR code payments.",
          "All transactions are processed through encrypted channels, ensuring your payment data remains protected at every step of the checkout process.",
        ],
      },
      {
        question:
          "WHEN I PAY WITH EPAID, HOW DO I SHOW PROOF OF PURCHASE IF ASKED BY STORE STAFF?",
        answer: [
          "Every ePaid transaction generates a digital receipt stored directly in your app. Simply open the receipt from your transaction history and show it to store staff if requested.",
          "Each receipt includes a unique transaction ID, timestamp, and item details, providing full proof of purchase without needing a paper copy.",
        ],
      },
      {
        question: "IS MY PAYMENT INFORMATION SECURE IN THE SATOCCI APP?",
        answer: [
          "Yes. ePaid uses industry-standard encryption and tokenization to protect your payment information. Your card details are never stored on your device or shared with merchants.",
          "All transactions comply with PCI DSS security standards, and multi-factor authentication adds an extra layer of protection to your account.",
        ],
      },
      {
        question:
          "CAN I STILL COLLECT LOYALTY POINTS, COUPONS, OR DISCOUNTS WHEN USING EPAID?",
        answer: [
          "Absolutely. ePaid integrates with store loyalty programs, allowing you to earn and redeem points, apply coupons, and access member discounts seamlessly at checkout.",
          "Simply link your loyalty account in the app settings, and your rewards will be automatically applied to every eligible purchase.",
        ],
      },
    ],
  },
  contentSeeded: false,
};

function isBrowser() {
  return typeof window !== "undefined";
}

export function readCmsStore(): CmsStore {
  if (!isBrowser()) return DEFAULT_CMS;
  try {
    const raw = localStorage.getItem(CMS_STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_CMS);
    const parsed = JSON.parse(raw) as Partial<CmsStore>;
    return {
      ...structuredClone(DEFAULT_CMS),
      ...parsed,
      "home.hero": {
        ...DEFAULT_CMS["home.hero"],
        ...parsed["home.hero"],
      },
      "home.whatWeDo": {
        ...DEFAULT_CMS["home.whatWeDo"],
        ...parsed["home.whatWeDo"],
        services:
          parsed["home.whatWeDo"]?.services ??
          DEFAULT_CMS["home.whatWeDo"].services,
      },
      "home.faqIntro": {
        ...DEFAULT_CMS["home.faqIntro"],
        ...parsed["home.faqIntro"],
      },
      "about.hero": {
        ...DEFAULT_CMS["about.hero"],
        ...parsed["about.hero"],
      },
      "about.missionVision": {
        ...DEFAULT_CMS["about.missionVision"],
        ...parsed["about.missionVision"],
      },
      "faq.items": {
        items: parsed["faq.items"]?.items ?? DEFAULT_CMS["faq.items"].items,
      },
      contentSeeded: parsed.contentSeeded ?? false,
    };
  } catch {
    return structuredClone(DEFAULT_CMS);
  }
}

export function writeCmsStore(store: CmsStore) {
  if (!isBrowser()) return;
  localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event("epaid-cms-updated"));
}

export function getCmsBlock<K extends keyof CmsStore>(key: K): CmsStore[K] {
  return readCmsStore()[key];
}

export function updateCmsBlock<K extends keyof CmsStore>(
  key: K,
  data: CmsStore[K]
) {
  const store = readCmsStore();
  store[key] = data;
  writeCmsStore(store);
}

export function seedCmsDefaults(): CmsStore {
  const seeded: CmsStore = {
    ...structuredClone(DEFAULT_CMS),
    contentSeeded: true,
  };
  writeCmsStore(seeded);
  return seeded;
}

export function resetCmsToDefaults(): CmsStore {
  const next = structuredClone(DEFAULT_CMS);
  writeCmsStore(next);
  return next;
}
