"use client";

import { useEffect, useState } from "react";
import AdminCmsShell from "../AdminCmsShell";
import EpaidButton from "@/app/components/EpaidButton";
import {
  getCmsBlock,
  updateCmsBlock,
  type AboutHeroContent,
  type AboutMissionVisionContent,
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

export default function AdminAboutContentPage() {
  const [hero, setHero] = useState<AboutHeroContent | null>(null);
  const [mission, setMission] = useState<AboutMissionVisionContent | null>(
    null
  );
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setHero(getCmsBlock("about.hero"));
    setMission(getCmsBlock("about.missionVision"));
  }, []);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!hero || !mission) return;
    updateCmsBlock("about.hero", hero);
    updateCmsBlock("about.missionVision", mission);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  if (!hero || !mission) {
    return (
      <AdminCmsShell title="About page" description="Loading content…">
        <p className="text-muted-foreground">Loading…</p>
      </AdminCmsShell>
    );
  }

  return (
    <AdminCmsShell
      title="About page"
      description="Manage About hero, mission, and vision messaging."
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
          title="About hero"
          subtitle="Top-of-page headline and supporting description."
        >
          <label className={labelClass}>
            Page title
            <input
              className={fieldClass}
              value={hero.title}
              onChange={(e) => setHero({ ...hero, title: e.target.value })}
            />
          </label>
          <label className={labelClass}>
            Description lines
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
              CTA button label
              <input
                className={fieldClass}
                value={hero.ctaLabel}
                onChange={(e) =>
                  setHero({ ...hero, ctaLabel: e.target.value })
                }
              />
            </label>
            <label className={labelClass}>
              CTA button link
              <input
                className={fieldClass}
                value={hero.ctaHref}
                onChange={(e) => setHero({ ...hero, ctaHref: e.target.value })}
              />
            </label>
          </div>
        </SectionCard>

        <SectionCard
          title="Mission"
          subtitle="Left column on the Mission & Vision section."
        >
          <label className={labelClass}>
            Section label
            <input
              className={fieldClass}
              value={mission.missionLabel}
              onChange={(e) =>
                setMission({ ...mission, missionLabel: e.target.value })
              }
            />
          </label>
          <label className={labelClass}>
            Headline
            <input
              className={fieldClass}
              value={mission.missionHeadline}
              onChange={(e) =>
                setMission({ ...mission, missionHeadline: e.target.value })
              }
            />
          </label>
          <label className={labelClass}>
            Body
            <textarea
              rows={4}
              className={fieldClass}
              value={mission.missionBody}
              onChange={(e) =>
                setMission({ ...mission, missionBody: e.target.value })
              }
            />
          </label>
        </SectionCard>

        <SectionCard
          title="Vision"
          subtitle="Right column on the Mission & Vision section."
        >
          <label className={labelClass}>
            Section label
            <input
              className={fieldClass}
              value={mission.visionLabel}
              onChange={(e) =>
                setMission({ ...mission, visionLabel: e.target.value })
              }
            />
          </label>
          <label className={labelClass}>
            Headline
            <input
              className={fieldClass}
              value={mission.visionHeadline}
              onChange={(e) =>
                setMission({ ...mission, visionHeadline: e.target.value })
              }
            />
          </label>
          <label className={labelClass}>
            Body
            <textarea
              rows={4}
              className={fieldClass}
              value={mission.visionBody}
              onChange={(e) =>
                setMission({ ...mission, visionBody: e.target.value })
              }
            />
          </label>
        </SectionCard>

        <div className="sticky bottom-4 z-10 flex justify-end">
          <EpaidButton
            type="submit"
            className="px-8 py-3 text-sm normal-case shadow-lg"
          >
            Save about page
          </EpaidButton>
        </div>
      </form>
    </AdminCmsShell>
  );
}
