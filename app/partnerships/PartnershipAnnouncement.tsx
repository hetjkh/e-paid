import Image from "next/image";

export default function PartnershipAnnouncement() {
  return (
    <section className="bg-background py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-[20px] border border-border-soft bg-gradient-to-br from-[#e6f3fa] via-background to-[#fef8eb] p-4 shadow-[0_8px_40px_rgba(4,113,173,0.08)] dark:from-[#131e32] dark:via-[#111d32] dark:to-[#0f1a2e] dark:shadow-[0_8px_40px_rgba(4,113,173,0.15)] sm:rounded-[28px] sm:p-6 lg:p-10 xl:p-14">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
              <div className="overflow-hidden rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] sm:rounded-[24px]">
                <Image
                  src="/partner.png"
                  alt="ePaid and Satocci partnership signing ceremony in Riyadh, Saudi Arabia"
                  width={640}
                  height={640}
                  className="aspect-square h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center">
              <h2 className="text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-[2.5rem]">
                ePaid 💙 Satocci
              </h2>

              <p className="mt-4 text-base font-bold leading-snug text-foreground sm:mt-5 sm:text-lg lg:mt-6 lg:text-[1.375rem] lg:leading-[1.45]">
                ePaid 💜 Satocci™ A Game-Changing Joint Venture to Accelerate
                Cashless Retail Transformation Across Saudi Arabia and the MENA
                Region
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base lg:mt-8 lg:text-lg lg:leading-[1.75]">
                <span className="font-semibold">#Riyadh, #Saudi Arabia —</span>{" "}
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
          </div>
        </div>
      </div>
    </section>
  );
}
