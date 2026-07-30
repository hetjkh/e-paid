"use client";

import { useEffect, useState } from "react";
import AdminCmsShell from "../AdminCmsShell";
import EpaidButton from "@/app/components/EpaidButton";
import {
  getCmsBlock,
  updateCmsBlock,
  type HomeFaqIntroContent,
  type HomeHeroContent,
  type HomeWhatWeDoContent,
} from "@/lib/cms";
import {
  formFieldBorderClassName,
  formFieldTextClassName,
} from "@/app/components/form-styles";

const fieldClass = `mt-1.5 w-full rounded-xl bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-epaid/25 ${formFieldBorderClassName} ${formFieldTextClassName}`;
const labelClass = "block text-sm font-medium text-foreground";

function SectionCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-8">
      <div className="border-b border-border-soft pb-4">
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

export default function AdminHomeContentPage() {
  const [hero, setHero] = useState<HomeHeroContent | null>(null);
  const [whatWeDo, setWhatWeDo] = useState<HomeWhatWeDoContent | null>(null);
  const [faqIntro, setFaqIntro] = useState<HomeFaqIntroContent | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setHero(getCmsBlock("home.hero"));
    setWhatWeDo(getCmsBlock("home.whatWeDo"));
    setFaqIntro(getCmsBlock("home.faqIntro"));
  }, []);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!hero || !whatWeDo || !faqIntro) return;
    updateCmsBlock("home.hero", hero);
    updateCmsBlock("home.whatWeDo", whatWeDo);
    updateCmsBlock("home.faqIntro", faqIntro);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  if (!hero || !whatWeDo || !faqIntro) {
    return (
      <AdminCmsShell title="Home page" description="Loading content…">
        <p className="text-muted-foreground">Loading…</p>
      </AdminCmsShell>
    );
  }

  return (
    <AdminCmsShell
      title="Home page"
      description="Manage hero, What We Do, service cards, and FAQ intro on the homepage."
      actions={
        saved ? (
          <span className="rounded-full bg-epaid/10 px-3 py-1 text-xs font-semibold text-epaid">
            Saved
          </span>
        ) : null
      }
    >
      <form onSubmit={handleSave} className="space-y-6">
        <SectionCard
          title="Hero section"
          subtitle="Primary headline and call-to-action buttons visitors see first."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              Title line 1
              <input
                className={fieldClass}
                value={hero.titleLine1}
                onChange={(e) =>
                  setHero({ ...hero, titleLine1: e.target.value })
                }
              />
            </label>
            <label className={labelClass}>
              Title line 2
              <input
                className={fieldClass}
                value={hero.titleLine2}
                onChange={(e) =>
                  setHero({ ...hero, titleLine2: e.target.value })
                }
              />
            </label>
          </div>
          <label className={labelClass}>
            Description (one line per row)
            <textarea
              rows={4}
              className={fieldClass}
              value={hero.descriptionLines.join("\n")}
              onChange={(e) =>
                setHero({
                  ...hero,
                  descriptionLines: e.target.value.split("\n"),
                })
              }
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              Primary button label
              <input
                className={fieldClass}
                value={hero.ctaPrimaryLabel}
                onChange={(e) =>
                  setHero({ ...hero, ctaPrimaryLabel: e.target.value })
                }
              />
            </label>
            <label className={labelClass}>
              Primary button link
              <input
                className={fieldClass}
                value={hero.ctaPrimaryHref}
                onChange={(e) =>
                  setHero({ ...hero, ctaPrimaryHref: e.target.value })
                }
              />
            </label>
            <label className={labelClass}>
              Secondary button label
              <input
                className={fieldClass}
                value={hero.ctaSecondaryLabel}
                onChange={(e) =>
                  setHero({ ...hero, ctaSecondaryLabel: e.target.value })
                }
              />
            </label>
            <label className={labelClass}>
              Secondary button link
              <input
                className={fieldClass}
                value={hero.ctaSecondaryHref}
                onChange={(e) =>
                  setHero({ ...hero, ctaSecondaryHref: e.target.value })
                }
              />
            </label>
          </div>
        </SectionCard>

        <SectionCard
          title="What We Do"
          subtitle="Section headings, supporting copy, and CTA."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              Eyebrow
              <input
                className={fieldClass}
                value={whatWeDo.eyebrow}
                onChange={(e) =>
                  setWhatWeDo({ ...whatWeDo, eyebrow: e.target.value })
                }
              />
            </label>
            <label className={labelClass}>
              Section title
              <input
                className={fieldClass}
                value={whatWeDo.title}
                onChange={(e) =>
                  setWhatWeDo({ ...whatWeDo, title: e.target.value })
                }
              />
            </label>
          </div>
          <label className={labelClass}>
            Intro blurb lines
            <textarea
              rows={3}
              className={fieldClass}
              value={whatWeDo.blurbLines.join("\n")}
              onChange={(e) =>
                setWhatWeDo({
                  ...whatWeDo,
                  blurbLines: e.target.value.split("\n"),
                })
              }
            />
          </label>
          <label className={labelClass}>
            Highlight lines
            <textarea
              rows={3}
              className={fieldClass}
              value={whatWeDo.highlightLines.join("\n")}
              onChange={(e) =>
                setWhatWeDo({
                  ...whatWeDo,
                  highlightLines: e.target.value.split("\n"),
                })
              }
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              Know more button label
              <input
                className={fieldClass}
                value={whatWeDo.knowMoreLabel}
                onChange={(e) =>
                  setWhatWeDo({ ...whatWeDo, knowMoreLabel: e.target.value })
                }
              />
            </label>
            <label className={labelClass}>
              Know more button link
              <input
                className={fieldClass}
                value={whatWeDo.knowMoreHref}
                onChange={(e) =>
                  setWhatWeDo({ ...whatWeDo, knowMoreHref: e.target.value })
                }
              />
            </label>
          </div>
        </SectionCard>

        <SectionCard
          title="Service cards"
          subtitle="Three service offerings shown under What We Do."
        >
          {whatWeDo.services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-border-soft bg-background p-4"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-epaid">
                Service {index + 1}
              </p>
              <label className={labelClass}>
                Title
                <input
                  className={fieldClass}
                  value={service.title}
                  onChange={(e) => {
                    const services = [...whatWeDo.services];
                    services[index] = {
                      ...services[index],
                      title: e.target.value,
                    };
                    setWhatWeDo({ ...whatWeDo, services });
                  }}
                />
              </label>
              <label className={`${labelClass} mt-4`}>
                Description
                <textarea
                  rows={2}
                  className={fieldClass}
                  value={service.description}
                  onChange={(e) => {
                    const services = [...whatWeDo.services];
                    services[index] = {
                      ...services[index],
                      description: e.target.value,
                    };
                    setWhatWeDo({ ...whatWeDo, services });
                  }}
                />
              </label>
            </div>
          ))}
        </SectionCard>

        <SectionCard
          title="FAQ intro"
          subtitle="Heading and short intro above the FAQ accordion."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              Title line 1
              <input
                className={fieldClass}
                value={faqIntro.titleLine1}
                onChange={(e) =>
                  setFaqIntro({ ...faqIntro, titleLine1: e.target.value })
                }
              />
            </label>
            <label className={labelClass}>
              Title line 2
              <input
                className={fieldClass}
                value={faqIntro.titleLine2}
                onChange={(e) =>
                  setFaqIntro({ ...faqIntro, titleLine2: e.target.value })
                }
              />
            </label>
          </div>
          <label className={labelClass}>
            Intro paragraph
            <textarea
              rows={3}
              className={fieldClass}
              value={faqIntro.intro}
              onChange={(e) =>
                setFaqIntro({ ...faqIntro, intro: e.target.value })
              }
            />
          </label>
        </SectionCard>

        <div className="sticky bottom-4 z-10 flex justify-end">
          <EpaidButton
            type="submit"
            className="px-8 py-3 text-sm normal-case shadow-lg"
          >
            Save home page
          </EpaidButton>
        </div>
      </form>
    </AdminCmsShell>
  );
}
