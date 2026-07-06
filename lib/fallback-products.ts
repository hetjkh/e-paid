import type { Product } from "./products-api";

const IMG_A = "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201.png";
const IMG_B =
  "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201%20(1).png";
const IMG_C =
  "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201.jpg";

const fallbackCatalog: Product[] = [
  {
    _id: "f20",
    title: "F20 Smart Payment Terminal",
    description:
      "FEITIAN F20 smart payment terminal with MSR, IC, NFC, and QR support. Features a 5.5\" HD display, 8MP + 2MP cameras, built-in thermal printer, and Android 14 — ideal for retail, supermarkets, restaurants, hotels, parking, and gas stations.",
    price: "SAR 199.00",
    mainImage: { url: IMG_A, publicId: "fallback-f20-main" },
    galleryImages: [
      { url: IMG_A, publicId: "fallback-f20-1" },
      { url: IMG_B, publicId: "fallback-f20-2" },
      { url: IMG_C, publicId: "fallback-f20-3" },
      { url: IMG_A, publicId: "fallback-f20-4" },
    ],
    specifications: [
      { label: "Operating System", value: "Android 14" },
      { label: "Processor", value: "Quad-Core 4×A53 @ 2.0GHz" },
      { label: "Memory", value: "2GB RAM + 16GB ROM" },
      { label: "Display", value: "5.5\" HD IPS LCD, 1440×720, multi-touch" },
      { label: "Camera", value: "Rear 8MP AF + Front 2MP, 1D/2D barcode" },
      { label: "Communications", value: "4G + 3G + 2G, Wi-Fi 5 (2.4 & 5GHz), Bluetooth 5.0" },
      { label: "Payments", value: "MSR + IC + NFC + QR" },
      { label: "Printer", value: "58mm thermal printer" },
      { label: "Battery", value: "7.6V/2500mAh (equiv. 3.8V/5000mAh)" },
      { label: "Physical", value: "212.6 × 79.1 × 51.9 mm · 427g" },
    ],
    createdAt: "2025-06-23T00:00:00.000Z",
    updatedAt: "2025-06-23T00:00:00.000Z",
  },
  {
    _id: "f300",
    title: "F300 Smart Payment Terminal",
    description:
      "Compact FEITIAN F300 smart payment terminal with MSR, IC, NFC, and QR. Lightweight design with 4.0\" IPS display, 2MP camera, 4G connectivity, and Android 14 — built for mobile merchants and high-volume retail environments.",
    price: "SAR 149.00",
    mainImage: { url: IMG_B, publicId: "fallback-f300-main" },
    galleryImages: [
      { url: IMG_B, publicId: "fallback-f300-1" },
      { url: IMG_A, publicId: "fallback-f300-2" },
      { url: IMG_C, publicId: "fallback-f300-3" },
      { url: IMG_B, publicId: "fallback-f300-4" },
    ],
    specifications: [
      { label: "Operating System", value: "Android 14" },
      { label: "Processor", value: "Quad-Core 4×A53 @ 2.0GHz" },
      { label: "Memory", value: "2GB RAM + 8GB ROM (16GB optional)" },
      { label: "Display", value: "4.0\" IPS LCD, 800×480, multi-touch" },
      { label: "Camera", value: "Rear 2MP FF with flash, 1D/2D barcode" },
      { label: "Communications", value: "4G + 3G + 2G, Wi-Fi 5 (2.4GHz), Bluetooth 5.0" },
      { label: "Payments", value: "MSR + IC + NFC + QR" },
      { label: "Battery", value: "3.8V/2800mAh (built-in)" },
      { label: "Physical", value: "135.5 × 65 × 16.5 mm · 174g" },
      { label: "Certifications", value: "PCI, EMV L1&L2, Paypass, PayWave, CE, FCC" },
    ],
    createdAt: "2025-06-24T00:00:00.000Z",
    updatedAt: "2025-06-24T00:00:00.000Z",
  },
  {
    _id: "f210",
    title: "F210 Smart Payment Terminal",
    description:
      "FEITIAN F210 smart payment terminal with 5.0\" HD display, thermal printer, and full payment acceptance (MSR, IC, NFC, QR). Runs Android 12 with long battery life — suited for retail, hospitality, and field payment operations.",
    price: "SAR 249.00",
    mainImage: { url: IMG_C, publicId: "fallback-f210-main" },
    galleryImages: [
      { url: IMG_C, publicId: "fallback-f210-1" },
      { url: IMG_A, publicId: "fallback-f210-2" },
      { url: IMG_B, publicId: "fallback-f210-3" },
      { url: IMG_C, publicId: "fallback-f210-4" },
    ],
    specifications: [
      { label: "Operating System", value: "Android 12" },
      { label: "Processor", value: "Quad-Core 4×A53 @ 1.4GHz" },
      { label: "Memory", value: "1GB RAM + 8GB ROM (2GB + 16GB optional)" },
      { label: "Display", value: "5.0\" IPS LCD, 480×854, multi-touch" },
      { label: "Camera", value: "Front 2MP FF, Rear 8MP AF, 1D/2D barcode" },
      { label: "Communications", value: "4G + 3G + 2G, Wi-Fi 5 (2.4GHz), Bluetooth 4.2" },
      { label: "Payments", value: "MSR + IC + NFC + QR" },
      { label: "Printer", value: "58mm thermal printer" },
      { label: "Battery", value: "3.7V/5200mAh" },
      { label: "Physical", value: "197 × 82.1 × 52.5 mm · 410g" },
    ],
    createdAt: "2025-09-01T00:00:00.000Z",
    updatedAt: "2025-09-01T00:00:00.000Z",
  },
  {
    _id: "f100",
    title: "F100 Non-Payment Terminal",
    description:
      "FEITIAN F100 versatile non-payment terminal with NFC and QR support. Ideal for mobile top-up, order booking, food ordering, soft POS, and voucher sales — featuring 5.0\" HD display, 8MP camera, and built-in thermal printer on Android 11.",
    price: "SAR 179.00",
    mainImage: { url: IMG_A, publicId: "fallback-f100-main" },
    galleryImages: [
      { url: IMG_B, publicId: "fallback-f100-1" },
      { url: IMG_C, publicId: "fallback-f100-2" },
      { url: IMG_A, publicId: "fallback-f100-3" },
      { url: IMG_B, publicId: "fallback-f100-4" },
    ],
    specifications: [
      { label: "Operating System", value: "Android 11" },
      { label: "Processor", value: "Quad-Core 4×A53 @ 2.0GHz" },
      { label: "Memory", value: "2GB RAM + 16GB ROM" },
      { label: "Display", value: "5.0\" HD IPS LCD, 1280×720, multi-touch" },
      { label: "Camera", value: "Rear 8MP AF with flash, 1D/2D barcode" },
      { label: "Communications", value: "4G + 3G + 2G, Wi-Fi 5 (2.4 & 5GHz), Bluetooth 5.0" },
      { label: "Payments", value: "NFC + QR (soft POS)" },
      { label: "Printer", value: "58mm thermal printer" },
      { label: "Battery", value: "3.8V/4000mAh" },
      { label: "Physical", value: "197 × 77 × 52.6 mm · 323g" },
    ],
    createdAt: "2025-06-24T00:00:00.000Z",
    updatedAt: "2025-06-24T00:00:00.000Z",
  },
  {
    _id: "m500",
    title: "M500 Android ECR / Cash Register",
    description:
      "FEITIAN M500 Android electronic cash register with dual 15.6\" Full HD touch displays, built-in high-speed 80mm printer, and rich connectivity. A complete countertop solution for supermarkets, restaurants, hotels, and high-volume retail.",
    price: "SAR 2,499.00",
    mainImage: { url: IMG_B, publicId: "fallback-m500-main" },
    galleryImages: [
      { url: IMG_C, publicId: "fallback-m500-1" },
      { url: IMG_A, publicId: "fallback-m500-2" },
      { url: IMG_B, publicId: "fallback-m500-3" },
      { url: IMG_C, publicId: "fallback-m500-4" },
    ],
    specifications: [
      { label: "Operating System", value: "Android 11" },
      { label: "Processor", value: "Quad-Core 4×A55 @ 2.0GHz" },
      { label: "Memory", value: "2GB RAM + 16GB ROM (4GB + 64GB optional)" },
      { label: "Display", value: "Dual 15.6\" FHD (1920×1080) multi-touch" },
      { label: "Communications", value: "Ethernet 100M, Wi-Fi 2.4 & 5GHz, Bluetooth 4.2" },
      { label: "Printer", value: "Built-in, up to 200mm/s, 80mm paper" },
      { label: "Ports", value: "Type A×5, RJ45, RJ11, RJ12, DC, 3.5mm audio" },
      { label: "Audio", value: "3W speaker" },
      { label: "Physical", value: "382 × 190 × 400 mm · 9.225 kg" },
      { label: "Certifications", value: "CE, RoHS, WEEE, NTRA-VOC, ANRT" },
    ],
    createdAt: "2025-06-25T00:00:00.000Z",
    updatedAt: "2025-06-25T00:00:00.000Z",
  },
];

export function getFallbackProduct(id: string): Product | null {
  return fallbackCatalog.find((p) => p._id === id) ?? null;
}

export function getAllFallbackProducts(): Product[] {
  return fallbackCatalog;
}

export function isFallbackProductId(id: string): boolean {
  return fallbackCatalog.some((p) => p._id === id);
}

export function getFallbackProductIds(): string[] {
  return fallbackCatalog.map((p) => p._id);
}
