"use client";

import { ChevronDown, Search } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  filterCountries,
  findCountryByDialCode,
  type CountryCode,
} from "@/lib/country-codes";
import CountryFlag from "./CountryFlag";
import {
  formFieldBorderClassName,
  formFieldTextClassName,
} from "./form-styles";
import { cn } from "@/lib/utils";

type CountryCodeSelectProps = {
  defaultDialCode?: string;
  onChange?: (country: CountryCode) => void;
  className?: string;
};

export default function CountryCodeSelect({
  defaultDialCode = "+966",
  onChange,
  className,
}: CountryCodeSelectProps) {
  const listboxId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<CountryCode>(
    () => findCountryByDialCode(defaultDialCode) ?? findCountryByDialCode("+966")!
  );

  const filteredCountries = useMemo(() => filterCountries(search), [search]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    searchRef.current?.focus();

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const selectCountry = (country: CountryCode) => {
    setSelected(country);
    onChange?.(country);
    setOpen(false);
    setSearch("");
  };

  return (
    <div ref={rootRef} className={cn("relative w-[7.25rem] shrink-0 overflow-visible sm:w-[7.75rem]", className)}>
      <button
        type="button"
        className={cn(
          "flex h-12 w-full shrink-0 items-center justify-between gap-1 rounded-full bg-card px-2.5 sm:px-3",
          formFieldBorderClassName,
          formFieldTextClassName
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={`Selected country: ${selected.name}, ${selected.dialCode}`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="flex min-w-0 items-center gap-1.5">
          <CountryFlag iso2={selected.iso2} size="sm" />
          <span className="truncate text-xs font-medium sm:text-sm">
            {selected.dialCode}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          className={cn(
            "absolute left-0 top-[calc(100%+0.5rem)] z-50 w-[min(100vw-2rem,18rem)] overflow-hidden rounded-2xl border border-border-soft bg-card shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
            "sm:w-[18rem]"
          )}
        >
          <div className="border-b border-border-soft p-3">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                ref={searchRef}
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search country or code"
                className={cn(
                  "min-h-10 w-full rounded-full bg-background py-2 pl-9 pr-3 text-sm",
                  formFieldBorderClassName,
                  formFieldTextClassName
                )}
                aria-label="Search country or dial code"
              />
            </div>
          </div>

          <ul
            id={listboxId}
            role="listbox"
            aria-label="Countries"
            className="max-h-60 overflow-y-auto p-2"
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => {
                const isSelected = country.iso2 === selected.iso2;

                return (
                  <li key={`${country.iso2}-${country.dialCode}`} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => selectCountry(country)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                        isSelected
                          ? "bg-epaid/10 text-epaid"
                          : "text-foreground hover:bg-epaid/5"
                      )}
                    >
                      <CountryFlag iso2={country.iso2} size="md" />
                      <span className="min-w-0 flex-1 truncate">{country.name}</span>
                      <span className="shrink-0 text-xs font-medium text-muted-foreground sm:text-sm">
                        {country.dialCode}
                      </span>
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="px-3 py-4 text-center text-sm text-muted-foreground">
                No countries found
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
