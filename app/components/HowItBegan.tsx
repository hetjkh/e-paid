"use client";

import Image from "next/image";
import SectionTitleGlow from "./SectionTitleGlow";

type TimelineEvent = {
  year: string;
  title?: string;
  description: string;
  image?: string;
  logo?: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "1981",
    title: "The beginning",
    description: "ITS was established by Kuwait Finance House (KFH).",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1.png",
  },
  {
    year: "1987",
    description: "ITS opened its first office outside Kuwait in Bahrain.",
  },
  {
    year: "1988",
    description:
      "Before 1988, ITS was a small operation with around 60 employees and US$ 5 million of revenue, totally dependent on Tandem hardware sales. ITS management changed and a new era in ITS started by a group of young managers.",
  },
  {
    year: "1991",
    description:
      "ITS re-opened its HQ office in Kuwait after the country's liberation.",
  },
  {
    year: "2000",
    description: "ITS opened its Development Center in Cairo, Egypt.",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1 (1).png",
  },
  {
    year: "2001",
    description: "ITS revenues crossed 100$ million.",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1 (2).png",
  },
  {
    year: "2008",
    description: "ITS rebranded to 'ITS Group'.",
  },
  {
    year: "2019",
    description:
      "By March 2019, ITS Saudi Computer systems branch became an independent company with local experienced ownership.",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1 (3).png",
  },
  {
    year: "2024",
    description:
      "ePaid Company is spind off ITS Saudi computer systems in 2024",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1 (4).png",
    logo: "/Group.png",
  },
];

function TimelineCard({
  event,
  compact = false,
}: {
  event: TimelineEvent;
  compact?: boolean;
}) {
  return (
    <article
      className={`w-full rounded-2xl bg-card shadow-[0_10px_38px_rgba(0,0,0,0.10)] ${
        compact ? "p-2.5 sm:p-3" : "p-4 sm:p-5"
      }`}
    >
      {event.image && (
        <div
          className={`relative mb-3 overflow-hidden rounded-xl ${
            compact ? "aspect-[4/3]" : "mb-4 aspect-[4/3]"
          }`}
        >
          <Image
            src={event.image}
            alt={`${event.year} milestone`}
            fill
            className="object-cover"
            sizes={compact ? "(max-width: 640px) 44vw, 320px" : "(max-width: 640px) 100vw, 320px"}
          />
        </div>
      )}

      {event.logo && (
        <div className="mb-2 flex justify-center sm:mb-3">
          <Image
            src={event.logo}
            alt="ePAiD logo"
            width={120}
            height={40}
            className="h-6 w-auto object-contain sm:h-8"
          />
        </div>
      )}

      <p
        className={`font-bold leading-none text-foreground ${
          compact
            ? "text-lg sm:text-2xl"
            : "text-[1.75rem] sm:text-3xl"
        }`}
      >
        {event.year}
      </p>

      {event.title && (
        <p
          className={`font-bold text-foreground ${
            compact ? "mt-1 text-[11px] sm:text-sm" : "mt-1.5 text-sm"
          }`}
        >
          {event.title}
        </p>
      )}

      <p
        className={`leading-relaxed text-muted-foreground ${
          compact
            ? `text-[11px] leading-snug sm:text-xs ${event.title ? "mt-0.5" : "mt-1.5"}`
            : `text-sm ${event.title ? "mt-1" : "mt-2"}`
        }`}
      >
        {event.description}
      </p>
    </article>
  );
}

function MobileAlternatingTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative lg:hidden">
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 top-4 z-0 w-px -translate-x-1/2 bg-[#d1d5db] dark:bg-border"
        aria-hidden="true"
      />

      <div className="relative z-[1] flex flex-col gap-8">
        {events.map((event, index) => {
          const onLeft = index % 2 === 0;

          return (
            <div
              key={event.year}
              className="grid grid-cols-[minmax(0,1fr)_12px_minmax(0,1fr)] items-start gap-x-2 sm:gap-x-3"
            >
              <div
                className={
                  onLeft
                    ? "flex justify-end pr-1 sm:pr-2"
                    : "pointer-events-none invisible"
                }
                aria-hidden={!onLeft}
              >
                {onLeft ? (
                  <div className="w-full max-w-[168px] sm:max-w-[220px]">
                    <TimelineCard event={event} compact />
                  </div>
                ) : null}
              </div>

              <div className="flex justify-center pt-5">
                <div className="h-3 w-3 shrink-0 rounded-full border-2 border-[#c4c4c4] bg-background dark:border-muted-foreground/40" />
              </div>

              <div
                className={
                  !onLeft
                    ? "flex justify-start pl-1 sm:pl-2"
                    : "pointer-events-none invisible"
                }
                aria-hidden={onLeft}
              >
                {!onLeft ? (
                  <div className="w-full max-w-[168px] sm:max-w-[220px]">
                    <TimelineCard event={event} compact />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineColumn({
  top,
  bottom,
}: {
  top: TimelineEvent;
  bottom?: TimelineEvent;
}) {
  const connector = "h-6 w-px shrink-0 bg-[#d1d5db] dark:bg-border";

  return (
    <div className="grid min-w-0 grid-rows-[auto_12px_auto] lg:min-h-[640px] lg:grid-rows-[minmax(0,1fr)_12px_minmax(0,1fr)]">
      <div className="flex min-h-0 flex-col items-center lg:justify-end">
        <div className="w-full max-w-[300px]">
          <TimelineCard event={top} />
        </div>
        <div className={connector} aria-hidden="true" />
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <div className="h-3 w-3 rounded-full border-2 border-[#c4c4c4] bg-background dark:border-muted-foreground/40" />
      </div>

      <div className="flex min-h-0 flex-col items-center lg:justify-start">
        {bottom ? (
          <>
            <div className={connector} aria-hidden="true" />
            <div className="w-full max-w-[300px]">
              <TimelineCard event={bottom} />
            </div>
          </>
        ) : (
          <div className={connector} aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

function pairEvents(events: TimelineEvent[]) {
  const pairs: { top: TimelineEvent; bottom?: TimelineEvent }[] = [];
  for (let i = 0; i < events.length; i += 2) {
    pairs.push({
      top: events[i],
      bottom: events[i + 1],
    });
  }
  return pairs;
}

export default function HowItBegan() {
  const columns = pairEvents(timelineEvents);

  return (
    <section
      id="history"
      className="relative overflow-x-clip bg-background py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <SectionTitleGlow className="pb-2 lg:pb-0">
            <h2 className="sf-pro-display-semibold text-2xl font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[3.5rem]">
              HOW IT BEGAN
            </h2>
          </SectionTitleGlow>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:max-w-sm lg:text-lg">
            ePaid Company is a spind off ITS Saudi Computers Systems Co. W.L.L is a
            Leading MSP, providing POS services since 1992 in the Kingdom.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-14 lg:mt-16">
          <MobileAlternatingTimeline events={timelineEvents} />

          <div className="relative hidden lg:block lg:min-h-[640px]">
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 z-[1] h-px -translate-y-1/2 bg-[#d1d5db] dark:bg-border"
              aria-hidden="true"
            />

            <div className="grid grid-cols-3 gap-5 xl:grid-cols-5">
              {columns.map((column) => (
                <TimelineColumn
                  key={column.top.year}
                  top={column.top}
                  bottom={column.bottom}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
