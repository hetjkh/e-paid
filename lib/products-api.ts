const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type ProductImage = {
  url: string;
  publicId: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: string;
  mainImage: ProductImage;
  galleryImages: ProductImage[];
  specifications: ProductSpecification[];
  createdAt: string;
  updatedAt: string;
};

export async function fetchProducts(): Promise<Product[]> {
  const { getAllFallbackProducts } = await import("./fallback-products");

  try {
    const res = await fetch(`${API_URL}/api/products`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return getAllFallbackProducts();

    const data = await res.json();
    const products: Product[] = data.products ?? [];
    return products.length > 0 ? products : getAllFallbackProducts();
  } catch {
    return getAllFallbackProducts();
  }
}

export async function fetchProductsClient(): Promise<Product[]> {
  const { getAllFallbackProducts } = await import("./fallback-products");

  try {
    const res = await fetch(`${API_URL}/api/products`);

    if (!res.ok) return getAllFallbackProducts();

    const data = await res.json();
    const products: Product[] = data.products ?? [];
    return products.length > 0 ? products : getAllFallbackProducts();
  } catch {
    return getAllFallbackProducts();
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_URL}/api/products/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.product ?? null;
  } catch {
    return null;
  }
}

export async function fetchProductByIdClient(id: string): Promise<Product | null> {
  const res = await fetch(`${API_URL}/api/products/${id}`);

  if (!res.ok) return null;

  const data = await res.json();
  return data.product ?? null;
}

export async function loadProduct(id: string): Promise<Product | null> {
  const { getFallbackProduct } = await import("./fallback-products");
  const apiProduct = await fetchProductById(id);
  if (apiProduct) return apiProduct;
  return getFallbackProduct(id);
}

export async function createProduct(
  token: string,
  formData: FormData
): Promise<Product> {
  const res = await fetch(`${API_URL}/api/products`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to create product");
  }

  return data.product;
}

/** Strip SAR prefix for form inputs */
export function priceInputValue(price: string): string {
  return price.replace(/^SAR\s*/i, "").trim();
}

export async function updateProduct(
  token: string,
  id: string,
  formData: FormData
): Promise<Product> {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to update product");
  }

  return data.product;
}

export async function deleteProduct(token: string, id: string): Promise<void> {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to delete product");
  }
}

/** Label only — used on product cards (listing pages) */
export function specToTag(spec: ProductSpecification): string {
  return spec.label;
}

/** Format any stored price as `SAR 199.00` */
export function formatPrice(price: string): string {
  const trimmed = price.trim();
  if (!trimmed) return "SAR 0.00";

  if (/^SAR\s/i.test(trimmed)) {
    const amount = trimmed.replace(/^SAR\s*/i, "").trim();
    const num = parseFloat(amount.replace(/,/g, ""));
    if (!Number.isNaN(num)) {
      return `SAR ${num.toFixed(2)}`;
    }
    return `SAR ${amount}`;
  }

  const numeric = trimmed.replace(/[^0-9.]/g, "");
  const num = parseFloat(numeric);
  if (!Number.isNaN(num)) {
    return `SAR ${num.toFixed(2)}`;
  }

  return `SAR ${trimmed}`;
}

/** Normalize price before saving to the API */
export function normalizePriceInput(price: string): string {
  return formatPrice(price);
}
