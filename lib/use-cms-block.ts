"use client";

import { useEffect, useState } from "react";
import {
  getCmsBlock,
  type CmsStore,
  CMS_STORAGE_KEY,
} from "./cms";

/** Subscribe to localStorage CMS updates for live public-site preview. */
export function useCmsBlock<K extends keyof CmsStore>(
  key: K,
  fallback: CmsStore[K]
): CmsStore[K] {
  const [value, setValue] = useState<CmsStore[K]>(fallback);

  useEffect(() => {
    const sync = () => {
      try {
        setValue(getCmsBlock(key));
      } catch {
        setValue(fallback);
      }
    };

    sync();

    const onStorage = (e: StorageEvent) => {
      if (e.key === CMS_STORAGE_KEY) sync();
    };

    window.addEventListener("epaid-cms-updated", sync);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("epaid-cms-updated", sync);
      window.removeEventListener("storage", onStorage);
    };
  }, [key, fallback]);

  return value;
}
