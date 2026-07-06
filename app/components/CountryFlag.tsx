import { cn } from "@/lib/utils";
import { countryFlagUrl } from "@/lib/country-codes";

type CountryFlagProps = {
  iso2: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClassName = {
  sm: "h-4 w-6",
  md: "h-5 w-7",
  lg: "h-6 w-9",
};

export default function CountryFlag({
  iso2,
  className,
  size = "md",
}: CountryFlagProps) {
  const code = iso2.toLowerCase();

  return (
    <img
      src={countryFlagUrl(code, 40)}
      srcSet={`${countryFlagUrl(code, 80)} 2x`}
      alt=""
      width={28}
      height={20}
      loading="lazy"
      decoding="async"
      className={cn(
        "shrink-0 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)]",
        sizeClassName[size],
        className
      )}
      aria-hidden="true"
    />
  );
}
