"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  scaleIn,
  StaggerReveal,
} from "../components/motion/scroll-motion";
import {
  FALLBACK_TEAM_MEMBERS,
  fetchTeamMembersClient,
  type TeamMember,
} from "@/lib/team-api";

export default function MeetTeam() {
  const [team, setTeam] = useState<TeamMember[]>(FALLBACK_TEAM_MEMBERS);

  useEffect(() => {
    fetchTeamMembersClient().then(setTeam);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-8 lg:pb-12 lg:pt-10">
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-[#0471AD]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <AnimatedText
            text="Meet our team"
            as="h2"
            className="text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          />

          <motion.p
            className="max-w-md text-base leading-relaxed text-muted-foreground lg:pt-2 lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            We deliver smart digital solutions, secure payment systems, and
            expert advisory services that help businesses grow, streamline
            operations, and scale confidently.
          </motion.p>
        </StaggerReveal>

        <StaggerReveal
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6"
          stagger={0.12}
        >
          {team.map((member) => (
            <motion.article
              key={member._id}
              variants={scaleIn}
              transition={{ duration: 0.6, ease: easeOut }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group mx-auto w-full max-w-[360px] cursor-default overflow-hidden rounded-[24px] border border-solid border-[#00000040] bg-card p-4 transition-shadow duration-300 hover:border-epaid/30 hover:shadow-[0_16px_40px_rgba(4,113,173,0.14)] sm:max-w-none lg:p-5"
            >
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src={member.image.url}
                  alt={member.name}
                  width={380}
                  height={380}
                  className="aspect-square h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-1 pt-5">
                <AnimatedText
                  text={member.name}
                  as="p"
                  className="text-lg font-bold text-foreground sm:text-xl"
                />
                <AnimatedText
                  text={member.role}
                  as="p"
                  className="mt-1 text-sm text-muted-foreground sm:text-base"
                  delay={0.06}
                />
              </div>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
