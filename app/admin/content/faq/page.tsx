"use client";

import { useEffect, useState } from "react";
import AdminCmsShell from "../AdminCmsShell";
import EpaidButton from "@/app/components/EpaidButton";
import {
  getCmsBlock,
  updateCmsBlock,
  type FaqItem,
  type HomeFaqIntroContent,
} from "@/lib/cms";
import {
  formFieldBorderClassName,
  formFieldTextClassName,
} from "@/app/components/form-styles";

const fieldClass = `mt-1.5 w-full rounded-xl bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-epaid/25 ${formFieldBorderClassName} ${formFieldTextClassName}`;
const labelClass = "block text-sm font-medium text-foreground";

export default function AdminFaqContentPage() {
  const [intro, setIntro] = useState<HomeFaqIntroContent | null>(null);
  const [items, setItems] = useState<FaqItem[] | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setIntro(getCmsBlock("home.faqIntro"));
    setItems(getCmsBlock("faq.items").items.map((item) => ({ ...item })));
  }, []);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!items || !intro) return;
    updateCmsBlock("home.faqIntro", intro);
    updateCmsBlock("faq.items", { items });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function updateItem(index: number, patch: Partial<FaqItem>) {
    if (!items) return;
    const next = [...items];
    next[index] = { ...next[index], ...patch };
    setItems(next);
  }

  function addItem() {
    if (!items) return;
    setItems([
      ...items,
      { question: "NEW QUESTION", answer: ["Add your answer here."] },
    ]);
  }

  function removeItem(index: number) {
    if (!items) return;
    setItems(items.filter((_, i) => i !== index));
  }

  if (!items || !intro) {
    return (
      <AdminCmsShell title="FAQ" description="Loading content…">
        <p className="text-muted-foreground">Loading…</p>
      </AdminCmsShell>
    );
  }

  return (
    <AdminCmsShell
      title="FAQ"
      description="Edit FAQ section intro and individual questions & answers."
      actions={
        saved ? (
          <span className="rounded-full bg-epaid/10 px-3 py-1 text-xs font-semibold text-epaid">
            Saved
          </span>
        ) : null
      }
    >
      <form onSubmit={handleSave} className="space-y-6">
        <section className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 sm:p-8">
          <div className="border-b border-border-soft pb-4">
            <h2 className="text-lg font-bold text-foreground">Section intro</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Heading and short paragraph above the accordion.
            </p>
          </div>
          <div className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                Title line 1
                <input
                  className={fieldClass}
                  value={intro.titleLine1}
                  onChange={(e) =>
                    setIntro({ ...intro, titleLine1: e.target.value })
                  }
                />
              </label>
              <label className={labelClass}>
                Title line 2
                <input
                  className={fieldClass}
                  value={intro.titleLine2}
                  onChange={(e) =>
                    setIntro({ ...intro, titleLine2: e.target.value })
                  }
                />
              </label>
            </div>
            <label className={labelClass}>
              Intro paragraph
              <textarea
                rows={3}
                className={fieldClass}
                value={intro.intro}
                onChange={(e) =>
                  setIntro({ ...intro, intro: e.target.value })
                }
              />
            </label>
          </div>
        </section>

        {items.map((item, index) => (
          <section
            key={index}
            className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border-soft pb-4">
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Question {index + 1}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Accordion item shown on the homepage FAQ.
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="rounded-lg px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                Remove
              </button>
            </div>
            <div className="mt-6 space-y-5">
              <label className={labelClass}>
                Question
                <input
                  className={fieldClass}
                  value={item.question}
                  onChange={(e) =>
                    updateItem(index, { question: e.target.value })
                  }
                />
              </label>
              <label className={labelClass}>
                Answer paragraphs (one per line)
                <textarea
                  rows={5}
                  className={fieldClass}
                  value={item.answer.join("\n")}
                  onChange={(e) =>
                    updateItem(index, {
                      answer: e.target.value.split("\n").filter(Boolean),
                    })
                  }
                />
              </label>
            </div>
          </section>
        ))}

        <div className="sticky bottom-4 z-10 flex flex-wrap justify-end gap-3">
          <EpaidButton
            type="button"
            onClick={addItem}
            className="px-6 py-3 text-sm normal-case"
          >
            Add question
          </EpaidButton>
          <EpaidButton
            type="submit"
            className="px-8 py-3 text-sm normal-case shadow-lg"
          >
            Save FAQ
          </EpaidButton>
        </div>
      </form>
    </AdminCmsShell>
  );
}
