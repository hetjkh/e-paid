import type { Product } from "./products-api";

const IMG_A = "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201.png";
const IMG_B =
  "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201%20(1).png";
const IMG_C =
  "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201.jpg";

const fallbackCatalog: Product[] = [
  {
    _id: "f20",
    title: "F20 POS Terminal",
    description:
      "Simple POS terminal with 4G connectivity and industrial-grade design — a reliable digital payment solution for modern retail, cafés, and quick-service stores.",
    price: "SAR 199.00",
    mainImage: { url: IMG_A, publicId: "fallback-f20-main" },
    galleryImages: [
      { url: IMG_A, publicId: "fallback-f20-1" },
      { url: IMG_B, publicId: "fallback-f20-2" },
      { url: IMG_C, publicId: "fallback-f20-3" },
      { url: IMG_A, publicId: "fallback-f20-4" },
    ],
    specifications: [
      { label: "Security OS", value: "Android 14" },
      { label: "Memory", value: "2GB RAM + 32GB ROM" },
      { label: "Wifi", value: "Wi-Fi 5: 2.4 & 5GHz" },
      { label: "Physical", value: "212.6mm (L) × 79.1mm (W)" },
      { label: "Processor", value: "Quad-Core 4×A53 @ 2.0GHz" },
      { label: "Bluetooth", value: "Bluetooth 5.0 / BLE" },
    ],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    _id: "f310",
    title: "F310 POS Terminal",
    description:
      "Desktop cashier register built for high-volume checkout with multi-point touch display, 3D camera, and enterprise-grade payment security for supermarkets and chains.",
    price: "SAR 749.00",
    mainImage: { url: IMG_B, publicId: "fallback-f310-main" },
    galleryImages: [
      { url: IMG_B, publicId: "fallback-f310-1" },
      { url: IMG_A, publicId: "fallback-f310-2" },
      { url: IMG_C, publicId: "fallback-f310-3" },
      { url: IMG_B, publicId: "fallback-f310-4" },
    ],
    specifications: [
      { label: "Security OS", value: "Android 11" },
      { label: "Memory", value: "2GB + 16GB (4GB + 64GB optional)" },
      { label: "Display", value: "Multi-point touch panel" },
      { label: "Camera", value: "3D Camera" },
      { label: "Processor", value: "Quad-Core × 2.0G A55" },
      { label: "Connectivity", value: "Ethernet · Wi-Fi · 4G" },
    ],
    createdAt: "2024-02-10T00:00:00.000Z",
    updatedAt: "2024-02-10T00:00:00.000Z",
  },
  {
    _id: "f600",
    title: "F600 Portable Printer",
    description:
      "Portable thermal printer delivering exceptional performance for mobile merchants, delivery drivers, and pop-up retail with long battery life and fast Bluetooth pairing.",
    price: "SAR 729.00",
    mainImage: { url: IMG_C, publicId: "fallback-f600-main" },
    galleryImages: [
      { url: IMG_C, publicId: "fallback-f600-1" },
      { url: IMG_A, publicId: "fallback-f600-2" },
      { url: IMG_B, publicId: "fallback-f600-3" },
      { url: IMG_C, publicId: "fallback-f600-4" },
    ],
    specifications: [
      { label: "Compatibility", value: "Android · iOS · Windows" },
      { label: "Print speed", value: "Max 90mm/s" },
      { label: "Connection", value: "Bluetooth + USB" },
      { label: "Battery", value: "1800mAh" },
      { label: "Physical", value: "Compact handheld form" },
      { label: "Use case", value: "Mobile & pop-up retail" },
    ],
    createdAt: "2024-03-05T00:00:00.000Z",
    updatedAt: "2024-03-05T00:00:00.000Z",
  },
  {
    _id: "f700",
    title: "F700 Smart POS",
    description:
      "All-in-one smart POS with contactless NFC, EMV chip, and QR payments — ideal for boutiques, salons, and mid-size retailers that need speed at checkout.",
    price: "SAR 899.00",
    mainImage: { url: IMG_A, publicId: "fallback-f700-main" },
    galleryImages: [
      { url: IMG_B, publicId: "fallback-f700-1" },
      { url: IMG_C, publicId: "fallback-f700-2" },
      { url: IMG_A, publicId: "fallback-f700-3" },
      { url: IMG_B, publicId: "fallback-f700-4" },
    ],
    specifications: [
      { label: "Security OS", value: "Android 13" },
      { label: "Memory", value: "3GB RAM + 64GB ROM" },
      { label: "Display", value: "5.5\" HD capacitive touch" },
      { label: "Payments", value: "NFC · Chip · Magstripe · QR" },
      { label: "Processor", value: "Octa-Core 2.4GHz" },
      { label: "Connectivity", value: "4G LTE · Wi-Fi 6 · Bluetooth 5.2" },
    ],
    createdAt: "2024-04-12T00:00:00.000Z",
    updatedAt: "2024-04-12T00:00:00.000Z",
  },
  {
    _id: "f800",
    title: "F800 Payment Tablet",
    description:
      "Versatile payment tablet for table-side ordering and pay-at-table workflows — built for restaurants, hotels, and hospitality with splash-resistant housing.",
    price: "SAR 1,199.00",
    mainImage: { url: IMG_B, publicId: "fallback-f800-main" },
    galleryImages: [
      { url: IMG_C, publicId: "fallback-f800-1" },
      { url: IMG_A, publicId: "fallback-f800-2" },
      { url: IMG_B, publicId: "fallback-f800-3" },
      { url: IMG_C, publicId: "fallback-f800-4" },
    ],
    specifications: [
      { label: "Security OS", value: "Android 14" },
      { label: "Memory", value: "4GB RAM + 128GB ROM" },
      { label: "Display", value: "10.1\" FHD IPS touch" },
      { label: "Durability", value: "IP54 splash resistant" },
      { label: "Processor", value: "Octa-Core 2.0GHz" },
      { label: "Connectivity", value: "Wi-Fi 6 · 4G · USB-C" },
    ],
    createdAt: "2024-05-20T00:00:00.000Z",
    updatedAt: "2024-05-20T00:00:00.000Z",
  },
  {
    _id: "f900",
    title: "F900 Mobile POS",
    description:
      "Lightweight mobile POS for field sales and on-the-go payments — long battery, built-in printer option, and SAMA-ready security for Saudi merchants.",
    price: "SAR 649.00",
    mainImage: { url: IMG_C, publicId: "fallback-f900-main" },
    galleryImages: [
      { url: IMG_A, publicId: "fallback-f900-1" },
      { url: IMG_C, publicId: "fallback-f900-2" },
      { url: IMG_B, publicId: "fallback-f900-3" },
      { url: IMG_A, publicId: "fallback-f900-4" },
    ],
    specifications: [
      { label: "Security OS", value: "Android 12" },
      { label: "Memory", value: "2GB RAM + 32GB ROM" },
      { label: "Battery", value: "5000mAh · 12hr typical use" },
      { label: "Printer", value: "Built-in 58mm thermal (optional)" },
      { label: "Processor", value: "Quad-Core Cortex-A53" },
      { label: "Connectivity", value: "4G · Wi-Fi · GPS" },
    ],
    createdAt: "2024-06-08T00:00:00.000Z",
    updatedAt: "2024-06-08T00:00:00.000Z",
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
