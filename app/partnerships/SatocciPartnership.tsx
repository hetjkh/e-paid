import Image from "next/image";

export default function SatocciPartnership() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f3fa] via-background to-[#fef8eb] py-16 dark:from-[#0f1a2e] dark:via-[#0c1424] dark:to-[#121a28] lg:py-24">
      <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-[#0471AD]/10 blur-3xl"/>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Satocci <span className="text-epaid">x</span> ePaid
            </h2>

            <p className="mt-5 text-xl font-bold text-foreground sm:text-2xl lg:mt-6">
              ePaid 💜 Satocci™
            </p>

            <p className="mt-5 text-lg font-bold leading-snug text-foreground sm:text-xl lg:mt-6 lg:text-[1.375rem] lg:leading-[1.45]">
              A Game-Changing Joint Venture to Accelerate Cashless Retail
              Transformation Across Saudi Arabia and the MENA Region
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:mt-8 lg:text-lg lg:leading-[1.75]">
              <span className="font-semibold">#Riyadh, #Saudi Arabia —</span>{""}
              ePaid and Satocci™ today announce a landmark Joint Venture that
              will redefine the future of retail in Saudi Arabia and the wider
              MENA region. Built to accelerate Saudi Vision 2030, the
              partnership brings together ePaid&apos;s SAMA-certified MSP POS
              infrastructure and technical delivery expertise with
              Satocci&apos;s award-winning Scan &amp; Pay technology — this
              partnership ignites the next wave of digital transformation in
              retail.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/satocc.png" alt="Satocci logo" width={822}
              height={190}
              className="h-auto w-full max-w-[420px] object-contain sm:max-w-[480px] lg:max-w-[560px]" sizes="(max-width: 1024px) 90vw, 560px"/>
          </div>
        </div>
      </div>
    </section>
  );
}
