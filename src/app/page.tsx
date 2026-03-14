"use client";

import { Slide, SlideTag, SectionTitle, SectionSub } from "@/components/Slide";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/AnimatedSection";
import {
  logoLight,
  mbeLogo,
  coverBg,
  studentPhoto1,
  studentPhoto2,
  studentPhoto3,
  summerProgram,
  clientColourLockup,
  clientMarvelFubu,
  clientHighTolerance,
  clientThrive,
  clientAvirex,
  clientRevolt,
  clientEmpire,
  clientVlRecords,
  clientCharities,
  clientMark,
} from "@/lib/images";

/* ─── Icon helper ─── */
function Icon({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-[14px] mb-4 shrink-0 max-sm:mx-auto ${
        dark ? "bg-red/12" : "bg-red/8"
      }`}
    >
      <svg
        className="w-[30px] h-[30px] stroke-red fill-none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </div>
  );
}

/* ─── Card shells ─── */
function CardDark({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-7 rounded-xl bg-dark3 border border-white/[0.04] max-sm:text-center ${className}`}
    >
      {children}
    </div>
  );
}

function CardLight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-7 rounded-xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] max-sm:text-center ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Tag pill ─── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono tracking-[0.5px] bg-red/10 text-red">
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */
export default function PitchDeck() {
  return (
    <main>
      {/* ━━━ SLIDE 1: COVER ━━━ */}
      <Slide variant="dark" number={1} center>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 pointer-events-none"
          style={{ backgroundImage: `url(${coverBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/85 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <FadeIn>
            <img
              src={logoLight}
              alt="La Bodega NY"
              className="w-[clamp(100px,18vw,180px)] mb-9 opacity-95"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="font-display font-extrabold leading-[1.1] text-[clamp(36px,7vw,78px)] text-white mb-5">
              The Bodega
              <br />
              <span className="text-red">Creative Institute</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="w-[60px] h-[3px] bg-red mx-auto mb-6" />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-[clamp(15px,2vw,20px)] font-light text-gray-lighter max-w-[680px] mx-auto mb-8 leading-relaxed">
              NYC&apos;s first all-ages creative arts academy. Music. Dance.
              Production. Culture. Community. Built in the heart of the South
              Bronx, designed for every neighborhood in the city.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex gap-4 justify-center flex-wrap items-center">
              <div className="py-2 px-5 border border-red rounded font-mono text-[10px] tracking-[2px] text-red uppercase">
                501(c)(3) Nonprofit
              </div>
              <img src={mbeLogo} alt="MBE Certified" className="h-12" />
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="font-mono text-[11px] tracking-[3px] uppercase text-gray-light mt-5">
              Investment Pitch Deck &bull; 2026
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ━━━ SLIDE 2: VISION ━━━ */}
      <Slide variant="light" number={2}>
        <FadeIn>
          <SlideTag>The Vision</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-extrabold leading-[1.1] text-[clamp(26px,4.5vw,52px)] max-w-[900px] mb-5">
            What if every neighborhood in New York City had a home where{" "}
            <span className="text-red">anyone</span> could walk in and learn to
            create?
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[clamp(16px,1.8vw,20px)] font-normal mb-5 max-w-[900px] leading-relaxed text-gray">
            That&apos;s the dream behind The Bodega Creative Institute. A
            year-round creative arts academy, open to all ages, rooted in the
            community that gave birth to hip-hop. We&apos;re building the YMCA
            of music, dance, and the creative arts. A place where a 7-year-old
            can discover rhythm for the first time, a teenager can produce their
            first track, and an adult can reconnect with the art they left
            behind.
          </p>
        </FadeIn>

        {/* Student photos */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-7">
            {[studentPhoto1, studentPhoto2, studentPhoto3, summerProgram].map(
              (src, i) => (
                <div key={i} className="rounded-[10px] overflow-hidden h-40">
                  <img
                    src={src}
                    alt="Students"
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </FadeIn>

        {/* 4 Pillars */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
          <StaggerItem>
            <CardLight>
              <Icon>
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </Icon>
              <h4 className="font-display text-lg font-bold mb-2 text-dark">
                Create
              </h4>
              <p className="text-sm leading-relaxed text-gray">
                Music production, songwriting, recording, and live performance
                across every genre from classical to hip-hop to EDM.
              </p>
            </CardLight>
          </StaggerItem>
          <StaggerItem>
            <CardLight>
              <Icon>
                <circle cx="12" cy="4" r="2" />
                <path d="M12 6v4" />
                <path d="M8 14l-3 6" />
                <path d="M16 14l3 6" />
                <path d="M12 10l-4 4h8l-4-4z" />
                <path d="M7 20h10" />
              </Icon>
              <h4 className="font-display text-lg font-bold mb-2 text-dark">
                Move
              </h4>
              <p className="text-sm leading-relaxed text-gray">
                Dance programs spanning hip-hop, breaking, Afro-Latin,
                contemporary, and ballet. Movement as a language for all ages.
              </p>
            </CardLight>
          </StaggerItem>
          <StaggerItem>
            <CardLight>
              <Icon>
                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
                <path d="M8.25 9.93A4 4 0 0 1 12 2" />
                <path d="M12 9v3" />
                <path d="M9.5 15.5L12 12l2.5 3.5" />
                <circle cx="12" cy="19" r="3" />
                <path d="M15 19h4" />
                <path d="M5 19h4" />
              </Icon>
              <h4 className="font-display text-lg font-bold mb-2 text-dark">
                Innovate
              </h4>
              <p className="text-sm leading-relaxed text-gray">
                AI-powered creative tools, digital production, and technology
                that teaches students to build the future of art.
              </p>
            </CardLight>
          </StaggerItem>
          <StaggerItem>
            <CardLight>
              <Icon>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </Icon>
              <h4 className="font-display text-lg font-bold mb-2 text-dark">
                Serve
              </h4>
              <p className="text-sm leading-relaxed text-gray">
                Community events, charity drives, mentorship, and support for
                families. Because this is about people, not just programs.
              </p>
            </CardLight>
          </StaggerItem>
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 3: PROBLEM ━━━ */}
      <Slide variant="dark" number={3}>
        <FadeIn>
          <SlideTag>The Problem</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle className="text-white">
            NYC&apos;s Creative Arts Crisis
          </SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="dark">
            New York City is the cultural capital of the world. But when it comes
            to giving young people access to the arts, the city is falling short.
            Especially in the Bronx. These aren&apos;t just numbers. They
            represent kids who never got the chance to discover what they could
            create.
          </SectionSub>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: "425",
              label: "Arts Teachers Lost",
              detail:
                "Between 2020 and 2023, NYC public schools lost 425 certified arts teachers. That\u2019s a 15% drop, and thousands of students left without any arts instruction at all.",
            },
            {
              num: "23%",
              label: "Schools With Zero Arts Teachers",
              detail:
                "Nearly 1 in 4 NYC public schools don\u2019t have a single certified arts teacher. That\u2019s 307 schools. The Bronx is one of the hardest-hit boroughs.",
            },
            {
              num: "33%",
              label: "Students Meeting State Standards",
              detail:
                "Only one-third of NYC 8th graders meet New York State\u2019s arts education requirements. That number hasn\u2019t moved since 2015.",
            },
            {
              num: "47%",
              label: "Schools Say Funding Is Not Enough",
              detail:
                "Nearly half of all NYC schools report that arts funding is insufficient. Federal stimulus money that temporarily helped has already expired.",
            },
            {
              num: "80%",
              label: "Schools Need Outside Partners",
              detail:
                "4 out of 5 NYC public schools rely on cultural organizations and nonprofits to provide arts programming. The system needs partners like us.",
            },
            {
              num: "0",
              label: "Comprehensive Academies in the South Bronx",
              detail:
                "The birthplace of hip-hop doesn\u2019t have a single dedicated, all-ages creative arts academy. We\u2019re here to change that.",
            },
          ].map((stat) => (
            <StaggerItem key={stat.num + stat.label}>
              <div className="p-7 border-l-4 border-red rounded-r-xl bg-red/8">
                <div className="font-display text-[clamp(38px,4vw,50px)] font-black text-red mb-1">
                  {stat.num}
                </div>
                <div className="text-base font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <p className="text-sm leading-relaxed text-gray-light">
                  {stat.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <FadeIn delay={0.3}>
          <p className="mt-6 font-mono text-[10px] text-gray-light tracking-[1px]">
            Sources: NYC Arts in Education Roundtable, NYC DOE Annual Arts
            Report, NYC Council Finance Committee (2024 to 2025)
          </p>
        </FadeIn>
      </Slide>

      {/* ━━━ SLIDE 4: FOUNDATION ━━━ */}
      <Slide variant="light" number={4}>
        <FadeIn>
          <SlideTag>The Foundation</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle>La Bodega NY: Already Proven</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="light">
            This isn&apos;t a concept on paper. La Bodega NY has been a working
            creative space since 2019. We&apos;ve weathered a pandemic, hosted
            hundreds of events, educated young people, and built something real
            in the South Bronx.
          </SectionSub>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
          <FadeIn>
            <div className="flex flex-col gap-3.5">
              {[
                ["Location", "696 E 135th St, Bronx, NY 10454"],
                [
                  "Space",
                  "5,000 sq ft soundstage, event venue, and learning center",
                ],
                [
                  "Founded",
                  "2019 (survived and thrived through the pandemic)",
                ],
                [
                  "Status",
                  "501(c)(3) Nonprofit via La Bodega BX \u2022 MBE Certified",
                ],
                ["Founders", "Joseph R. Guerrido and Frank Urban"],
                [
                  "Social",
                  "9,000+ Instagram followers, active community presence",
                ],
                [
                  "Education",
                  "8-week summer program for Grades 5 through 12",
                ],
                [
                  "Output",
                  "Student music released on Spotify and Apple Music",
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-0.5 sm:gap-3.5 items-baseline"
                >
                  <span className="font-mono text-[10px] tracking-[2px] uppercase text-red font-medium min-w-[100px] shrink-0">
                    {label}
                  </span>
                  <span className="text-base text-gray-dark">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <h3 className="text-lg text-red font-bold mb-3.5">
                What the Space Offers Today
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Professional Recording Studio",
                  "Open Soundstage",
                  "Film and Photo Production",
                  "Private Events (200+ capacity)",
                  "Corporate Events",
                  "DJ Stage and Performance Area",
                  "NYC Street Replica Set",
                  "Community Workshop Space",
                ].map((cap) => (
                  <div
                    key={cap}
                    className="p-3.5 bg-white border border-black/[0.06] rounded-lg text-sm text-gray-dark flex items-center gap-2.5"
                  >
                    <span className="text-red font-bold">&diams;</span> {cap}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray">
                Featured in Open House New York and Great Performances.
                Recognized as one of the Bronx&apos;s most unique creative
                venues.
              </p>
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ━━━ SLIDE 5: CLIENTS ━━━ */}
      <Slide variant="dark" number={5}>
        <FadeIn>
          <SlideTag>Trusted By</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle className="text-white">
            Some of Our Clients
          </SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="dark">
            From major labels and iconic fashion brands to community
            organizations, La Bodega has been the go-to venue for some of the
            biggest names in entertainment and culture.
          </SectionSub>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 items-center mt-7">
          {[
            { src: clientColourLockup, alt: "Client" },
            { src: clientMarvelFubu, alt: "Marvel FUBU" },
            { src: clientHighTolerance, alt: "High Tolerance" },
            { src: clientThrive, alt: "Thrive Collective" },
            { src: clientAvirex, alt: "Avirex" },
            { src: clientRevolt, alt: "Revolt" },
            { src: clientEmpire, alt: "Empire Records" },
            { src: clientVlRecords, alt: "VL Records" },
            { src: clientCharities, alt: "Charities" },
            { src: clientMark, alt: "Client" },
          ].map((logo) => (
            <StaggerItem key={logo.alt + logo.src.slice(-20)}>
              <div className="h-20 flex items-center justify-center p-3.5 rounded-[10px] bg-white">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[55px] max-w-full object-contain"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 6: SOLUTION ━━━ */}
      <Slide variant="light" number={6} center>
        <FadeIn>
          <SlideTag>The Solution</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[clamp(16px,2vw,20px)] text-gray mb-2">
            Introducing
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2 className="font-display font-extrabold text-[clamp(32px,5vw,60px)] mb-3">
            The Bodega{" "}
            <span className="text-red">Creative Institute</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-red font-medium mb-6">
            The YMCA of Music, Dance, and the Creative Arts
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="text-base text-gray max-w-[750px] text-center mb-11">
            A comprehensive, year-round creative arts academy for all ages.
            World-class programs in music production, performance, dance, digital
            creation, AI artistry, and cultural education. Rooted in the South
            Bronx. Designed to reach every borough.
          </p>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] w-full text-left">
          {[
            {
              age: "AGES 5 TO 12",
              title: "Young Creators",
              desc: "Rhythm foundations, creative play, music exploration, movement basics, storytelling through song, and first steps with instruments and digital tools.",
            },
            {
              age: "AGES 13 TO 17",
              title: "Rising Artists",
              desc: "Genre-specific music production, dance technique, studio recording sessions, AI creative tools, songwriting workshops, and culminating performances.",
            },
            {
              age: "AGES 18 TO 24",
              title: "Emerging Professionals",
              desc: "Advanced production, artist development, music business education, portfolio building, industry mentorship, and professional distribution.",
            },
            {
              age: "AGES 25+",
              title: "Lifelong Learners",
              desc: "Adult music lessons, community ensembles, dance fitness, creative wellness workshops, and parent-child programs. It\u2019s never too late to create.",
            },
          ].map((track) => (
            <StaggerItem key={track.age}>
              <CardLight className="border-t-[3px] border-t-red">
                <div className="font-mono text-[11px] tracking-[2px] text-red mb-2">
                  {track.age}
                </div>
                <h4 className="font-display text-lg font-bold mb-2 text-dark">
                  {track.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray">
                  {track.desc}
                </p>
              </CardLight>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 7: MUSIC PROGRAMS ━━━ */}
      <Slide variant="dark" number={7}>
        <FadeIn>
          <SlideTag>Core Programs</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle className="text-white">Music Programs</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="dark">
            Every genre. Every era. Every voice. From the very origins of sound
            all the way to the AI-powered future, these programs give students
            the full picture.
          </SectionSub>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Hip-Hop and Rap",
              desc: "Lyricism, flow, beat-making, freestyle, and the deep culture and history of hip-hop, born right here in the Bronx.",
              tags: ["Lyricism", "Flow", "Beat Production", "Freestyle"],
              icon: (
                <>
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </>
              ),
            },
            {
              title: "Classical Music",
              desc: "Where it all started. Music theory, composition, arrangement, sight reading, and the timeless art of classical performance and ensemble playing.",
              tags: ["Theory", "Composition", "Arrangement", "Ensemble"],
              icon: (
                <>
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </>
              ),
            },
            {
              title: "EDM and Electronic Production",
              desc: "DAW mastery, synthesis, sound design, DJ techniques, and the art of building tracks from scratch in the digital space.",
              tags: ["DAW", "Synthesis", "Sound Design", "DJ Skills"],
              icon: (
                <>
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
                  <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </>
              ),
            },
            {
              title: "Rock and Alternative",
              desc: "Band formation, guitar, bass, drums, songwriting for rock, and the evolution from blues to punk to indie to everything in between.",
              tags: [
                "Guitar",
                "Band Dynamics",
                "Songwriting",
                "Live Performance",
              ],
              icon: (
                <>
                  <path d="M11.5 3.5c0 0-4 1.5-4 7.5 0 4 2 6 2 6" />
                  <path d="M16.5 3.5c0 0 4 1.5 4 7.5 0 4-2 6-2 6" />
                  <path d="M6 21h12" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                  <path d="M14 3.5C14 2.67 13.1 2 12 2s-2 .67-2 1.5S10.9 5 12 5s2-.67 2-1.5z" />
                </>
              ),
            },
            {
              title: "Jazz, R&B, and Soul",
              desc: "Improvisation, harmonic theory, vocal styling, groove, and the rich legacy of American roots music that shapes everything we hear today.",
              tags: [
                "Improvisation",
                "Vocal Technique",
                "Harmony",
                "Groove",
              ],
              icon: (
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              ),
            },
            {
              title: "Latin, Afrobeat, and World Music",
              desc: "Salsa, reggaeton, Afrobeat rhythms, Caribbean sounds. Honoring NYC\u2019s deeply multicultural identity through the music that defines its neighborhoods.",
              tags: ["Salsa", "Reggaeton", "Afrobeat", "Percussion"],
              icon: (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </>
              ),
            },
            {
              title: "Vocal Performance and Singing",
              desc: "Vocal training, breath control, stage presence, harmonizing, and preparation for live performance and professional studio recording.",
              tags: ["Vocal Technique", "Stage Presence", "Harmonizing"],
              icon: (
                <>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </>
              ),
            },
            {
              title: "Audio Engineering and Recording",
              desc: "Professional studio recording, mixing, mastering, signal flow, and training on industry-standard software and hardware.",
              tags: ["Pro Tools", "Mixing", "Mastering", "Signal Flow"],
              icon: (
                <>
                  <rect x="1" y="6" width="22" height="12" rx="2" />
                  <path d="M1 10h22" />
                  <circle cx="7" cy="14" r="1.5" className="fill-red stroke-none" />
                  <circle cx="12" cy="14" r="1.5" className="fill-red stroke-none" />
                  <circle cx="17" cy="14" r="1.5" className="fill-red stroke-none" />
                </>
              ),
            },
          ].map((program) => (
            <StaggerItem key={program.title}>
              <CardDark>
                <Icon dark>{program.icon}</Icon>
                <h4 className="font-display text-lg font-bold mb-2 text-white">
                  {program.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-lighter">
                  {program.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 max-sm:justify-center">
                  {program.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </CardDark>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 8: DANCE / DIGITAL / AI ━━━ */}
      <Slide variant="light" number={8}>
        <FadeIn>
          <SlideTag>Expanded Programs</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle>Dance, Digital Creation, and AI</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="light">
            Movement, technology, and the creative toolkit of the future. These
            programs go beyond music to give students every tool they need to
            express themselves and build real careers.
          </SectionSub>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Hip-Hop and Street Dance",
              desc: "Breaking, popping, locking, choreography, and the culture that was born in the Bronx and took over the world.",
            },
            {
              title: "Latin and Afro-Caribbean Dance",
              desc: "Salsa, bachata, merengue, Afro-Caribbean movement. Celebrating the Bronx\u2019s vibrant cultural heritage through dance.",
            },
            {
              title: "Contemporary and Ballet Foundations",
              desc: "Core technique, movement vocabulary, creative expression, and the discipline of classical and contemporary forms.",
            },
            {
              title: "AI-Enhanced Music Creation",
              desc: "Using AI tools responsibly to enhance songwriting, generate beats, explore new sounds, and push creative boundaries into new territory.",
            },
            {
              title: "Music Video and Visual Storytelling",
              desc: "Directing, cinematography, editing, and producing visual content. The complete artist toolkit for today\u2019s creator economy.",
            },
            {
              title: "Digital Distribution and Music Business",
              desc: "Getting music on Spotify, Apple Music, and YouTube. Copyrights, publishing, branding, and building a sustainable career.",
            },
            {
              title: "Creative Writing and Spoken Word",
              desc: "Poetry, songwriting, storytelling, journaling, and spoken word performance. Finding your voice on the page and on the stage.",
            },
            {
              title: "Creative Thinking and Entrepreneurship",
              desc: "Design thinking, ideation, creative problem-solving, and turning artistic talent into a viable career or business.",
            },
          ].map((program) => (
            <StaggerItem key={program.title}>
              <CardLight>
                <h4 className="font-display text-lg font-bold mb-2 text-dark">
                  {program.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray">
                  {program.desc}
                </p>
              </CardLight>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 9: SUMMER INTENSIVE ━━━ */}
      <Slide variant="dark" number={9}>
        <FadeIn>
          <SlideTag>Signature Program</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle className="text-white">
            Summer Intensive Program
          </SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="dark">
            Our flagship 8-week summer intensive is already up and running.
            It&apos;s the proof of concept that everything we&apos;re building
            works. Here&apos;s what students walk away with.
          </SectionSub>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
          <FadeIn>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Creative Writing and Lyricism",
                    desc: "Storytelling, songwriting techniques, and poetic expression that help students find their authentic voice.",
                  },
                  {
                    title: "Music Production",
                    desc: "Beat-making, instrumentation, sound engineering, and the technical craft behind every hit record.",
                  },
                  {
                    title: "Audio Recording and Performance",
                    desc: "Vocal skills, studio recording techniques, and the confidence to perform live in front of an audience.",
                  },
                  {
                    title: "Professional Distribution",
                    desc: "Every student\u2019s work gets released on Apple Music, Spotify, and all major platforms. Real music. Real credit. Real legacy.",
                  },
                ].map((item) => (
                  <CardDark key={item.title}>
                    <h4 className="font-display text-lg font-bold mb-2 text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-lighter">
                      {item.desc}
                    </p>
                  </CardDark>
                ))}
              </div>
              <div className="mt-5 p-5 bg-red/10 rounded-[10px] border-l-4 border-red">
                <p className="text-sm text-white font-medium">
                  The program ends with a live concert where students perform and
                  celebrate everything they&apos;ve created together. It&apos;s
                  not just education. It&apos;s transformation.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-xl overflow-hidden min-h-[380px]">
              <img
                src={summerProgram}
                alt="Summer program"
                className="w-full h-full min-h-[380px] object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ━━━ SLIDE 10: TIMELINE ━━━ */}
      <Slide variant="light" number={10}>
        <FadeIn>
          <SlideTag>Cultural Education</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle>
            The Story of Music: Past, Present, and Future
          </SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="light">
            Students don&apos;t just learn to create. They learn where it all
            came from. Our cultural curriculum connects centuries of musical
            evolution to the sounds being made today and the ones that
            haven&apos;t been imagined yet.
          </SectionSub>
        </FadeIn>
        <div className="relative max-w-[900px] mt-9 pl-10">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red via-red-dark to-transparent" />
          {[
            {
              period: "PRE-1900s \u2022 THE ROOTS",
              title: "African Rhythms, Spirituals, and Folk",
              desc: "The origins of American music. West African drumming traditions, field hollers, spirituals, folk traditions, and the birth of the blues. This is the DNA of every genre that followed.",
            },
            {
              period: "1900s TO 1950s \u2022 THE FOUNDATION",
              title: "Jazz, Blues, Gospel, and Early Rock",
              desc: "The Harlem Renaissance, the jazz age, the electrification of blues, the rise of gospel, and the explosive birth of rock and roll. New York City at the center of a cultural revolution.",
            },
            {
              period: "1960s TO 1970s \u2022 THE REVOLUTION",
              title: "Soul, Funk, Disco, and the Birth of Hip-Hop",
              desc: "Motown, the British Invasion, funk, disco, punk. And on August 11, 1973, in the Bronx, DJ Kool Herc threw the party that started hip-hop. Our neighborhood. Our origin story.",
            },
            {
              period: "1980s TO 2000s \u2022 THE EXPANSION",
              title:
                "Golden Age Hip-Hop, Electronic, Alternative, and the Latin Explosion",
              desc: "The golden era of rap, the rise of electronic music, grunge and alternative, and the global explosion of Latin music. Sampling, synthesis, and the democratization of production.",
            },
            {
              period: "2000s TO PRESENT \u2022 THE DIGITAL AGE",
              title: "Streaming, Genre-Bending, and Global Fusion",
              desc: "The bedroom producer revolution, streaming culture, genre fusion, trap, K-pop, reggaeton\u2019s global rise, and the creator economy rewriting the rules of the music industry.",
            },
            {
              period: "THE FUTURE \u2022 WHAT\u2019S NEXT",
              title: "AI-Augmented Creation, Spatial Audio, and Beyond",
              desc: "AI composition tools, immersive audio experiences, virtual performances, blockchain for artists, and technologies we haven\u2019t imagined yet. Our students won\u2019t just adapt to the future. They\u2019ll build it.",
            },
          ].map((era, i) => (
            <FadeIn key={era.period} delay={i * 0.08}>
              <div className="relative mb-8">
                <div className="absolute -left-7 top-1 w-[18px] h-[18px] rounded-full bg-red border-[3px] border-offwhite" />
                <div className="font-mono text-[11px] tracking-[2px] text-red mb-1">
                  {era.period}
                </div>
                <h4 className="font-display text-[clamp(17px,2vw,22px)] font-bold text-dark mb-1.5">
                  {era.title}
                </h4>
                <p className="text-sm text-gray">{era.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Slide>

      {/* ━━━ SLIDE 11: COMMUNITY IMPACT ━━━ */}
      <Slide variant="dark" number={11}>
        <FadeIn>
          <SlideTag>Community Impact</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle className="text-white">
            Already Giving Back
          </SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="dark">
            La Bodega has hosted 15+ community events since opening its doors.
            This space has always been about more than production. It&apos;s
            about showing up for people when they need it most.
          </SectionSub>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              type: "ANNUAL EVENT",
              title: "Thanksgiving Turkey Giveaway",
              desc: "Annual food distribution providing turkeys and full Thanksgiving meals to hundreds of Bronx families who need it.",
            },
            {
              type: "ANNUAL EVENT",
              title: "Christmas Toy Drive",
              desc: "Holiday gift collection and distribution bringing joy to children across the South Bronx every December.",
            },
            {
              type: "EDUCATION",
              title: "Summer Music Program",
              desc: "8-week intensive for grades 5 through 12: songwriting, production, recording, and professionally distributed music.",
            },
            {
              type: "COMMUNITY",
              title: "Open Mic and Showcase Nights",
              desc: "A community stage where emerging local artists can be discovered, supported, and celebrated.",
            },
            {
              type: "CULTURAL",
              title: "Creative Workshops and Mentorship",
              desc: "Free hands-on workshops in music production, audio engineering, and creative skills led by industry professionals.",
            },
            {
              type: "PRIVATE AND CORPORATE",
              title: "Private Events and Corporate Activations",
              desc: "Hosting brand activations, corporate gatherings, and private celebrations that bring resources and visibility to the neighborhood.",
            },
          ].map((event) => (
            <StaggerItem key={event.title}>
              <CardDark className="border-l-[3px] border-l-red">
                <div className="font-mono text-[10px] tracking-[2px] text-red mb-2">
                  {event.type}
                </div>
                <h4 className="font-display text-lg font-bold mb-2 text-white">
                  {event.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-lighter">
                  {event.desc}
                </p>
              </CardDark>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 12: EVENTS CALENDAR ━━━ */}
      <Slide variant="light" number={12}>
        <FadeIn>
          <SlideTag>Future Programming</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle>Year-Round Community Events</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="light">
            Investment will fuel an expanded calendar of community events, one
            for every season and every celebration. Something for everyone, every
            month of the year.
          </SectionSub>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
          {[
            {
              month: "January",
              title: "New Year, New Sound Showcase",
              desc: "Student and community performances kicking off the year.",
            },
            {
              month: "February",
              title: "Black History Through Music",
              desc: "Month-long celebration of Black musical heritage.",
            },
            {
              month: "March",
              title: "Women in Music and Dance Festival",
              desc: "Spotlighting female creators, producers, and dancers.",
            },
            {
              month: "April",
              title: "Youth Arts Week",
              desc: "Free open enrollment week with sample classes in every program.",
            },
            {
              month: "May",
              title: "Mental Health and Creative Wellness",
              desc: "Art as therapy, music for healing, creative expression workshops.",
            },
            {
              month: "June",
              title: "Summer Launch Block Party",
              desc: "Live music, food, dance battles, and summer registration.",
            },
            {
              month: "July to August",
              title: "Summer Intensive Programs",
              desc: "Full 8-week academy plus weekly community concerts.",
            },
            {
              month: "September",
              title: "Back to School Bash",
              desc: "Free backpack and school supply giveaway with enrollment drive.",
            },
            {
              month: "October",
              title: "Halloween Haunted Studio",
              desc: "Family-friendly haunted soundstage and costume contest.",
            },
            {
              month: "November",
              title: "Thanksgiving Turkey Giveaway",
              desc: "Expanded annual tradition feeding more families than ever.",
            },
            {
              month: "December",
              title: "Holiday Toy Drive and Winter Concert",
              desc: "Toys for kids and end-of-year student showcase concert.",
            },
            {
              month: "Ongoing",
              title: "Open Mics and Battle Showcases",
              desc: "Monthly open mics, quarterly rap, dance, and beat battles.",
            },
          ].map((event) => (
            <StaggerItem key={event.month}>
              <div className="p-5 rounded-[10px] border-2 border-red bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="font-mono text-[11px] tracking-[2px] text-red uppercase mb-2 font-medium">
                  {event.month}
                </div>
                <h5 className="text-sm font-semibold mb-1 text-dark">
                  {event.title}
                </h5>
                <p className="text-xs text-gray">{event.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 13: EXPANSION ━━━ */}
      <Slide variant="dark" number={13} center>
        <FadeIn>
          <SlideTag>The Scale</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle className="text-white">
            One Bronx Studio.
            <br />
            <span className="text-red">
              Five Boroughs. One Mission.
            </span>
          </SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="dark">
            <span className="mx-auto text-center block">
              Phase 1 establishes the flagship in the Bronx. Phase 2 brings
              programming to satellite locations and school partnerships across
              the entire NYC metro area. We&apos;re becoming the creative YMCA
              that every neighborhood needs.
            </span>
          </SectionSub>
        </FadeIn>

        {/* Borough grid */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1000px] mx-auto w-full">
          {[
            {
              name: "The Bronx",
              sub: "Flagship HQ, La Bodega NY",
              hq: true,
            },
            {
              name: "Manhattan",
              sub: "Harlem, Washington Heights, Lower East Side",
              hq: false,
            },
            {
              name: "Brooklyn",
              sub: "Bed-Stuy, Bushwick, East New York",
              hq: false,
            },
            {
              name: "Queens",
              sub: "Jamaica, Corona, Far Rockaway",
              hq: false,
            },
            {
              name: "Staten Island",
              sub: "North Shore communities",
              hq: false,
            },
          ].map((b) => (
            <StaggerItem key={b.name}>
              <div
                className={`p-6 rounded-xl text-center bg-dark3 ${
                  b.hq
                    ? "border-2 border-red bg-red/8"
                    : "border border-white/[0.04]"
                }`}
              >
                <h4
                  className={`text-[15px] font-bold mb-1 ${
                    b.hq ? "text-red" : "text-white"
                  }`}
                >
                  {b.name}
                </h4>
                <p
                  className={`text-xs ${
                    b.hq ? "text-red" : "text-gray-light"
                  }`}
                >
                  {b.sub}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Roadmap */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] w-full mt-9">
          {[
            {
              phase: "YEAR 1",
              title: "Flagship Launch",
              details:
                "500+ students enrolled\n12 monthly community events\nFull program curriculum live",
            },
            {
              phase: "YEARS 2 TO 3",
              title: "Borough Expansion",
              details:
                "2,000+ students\n10+ school partnerships\n2 satellite locations",
            },
            {
              phase: "YEARS 4 TO 5",
              title: "Metro-Wide Network",
              details:
                "5,000+ students\nAll 5 boroughs served\nNational model replication",
            },
          ].map((phase) => (
            <StaggerItem key={phase.phase}>
              <CardDark className="text-center">
                <div className="font-mono text-[11px] text-red tracking-[2px] mb-2">
                  {phase.phase}
                </div>
                <h4 className="text-white text-base font-bold">
                  {phase.title}
                </h4>
                <p className="text-gray-light text-[13px] mt-1.5 whitespace-pre-line">
                  {phase.details}
                </p>
              </CardDark>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 14: FINANCIAL ━━━ */}
      <Slide variant="light" number={14}>
        <FadeIn>
          <SlideTag>Financial Model</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle>Hybrid Revenue Model</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.15}>
          <SectionSub variant="light">
            A sustainable, diversified funding approach that keeps programs
            accessible while building real financial stability. No single point
            of failure. Multiple streams working together.
          </SectionSub>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
          <FadeIn>
            <div>
              <h3 className="text-red text-xl font-bold mb-5">
                Revenue Streams
              </h3>
              {[
                {
                  label:
                    "Private Funding, Individual Donors, and Angel Investors",
                  pct: 35,
                },
                {
                  label: "Government and Foundation Grants",
                  pct: 25,
                },
                {
                  label: "Tuition and Program Fees (sliding scale)",
                  pct: 20,
                },
                {
                  label: "Corporate Sponsorships and Partnerships",
                  pct: 12,
                },
                { label: "Venue Rentals and Private Events", pct: 8 },
              ].map((stream) => (
                <div key={stream.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-dark">{stream.label}</span>
                    <span className="font-mono text-red font-bold">
                      {stream.pct}%
                    </span>
                  </div>
                  <div className="h-2 rounded bg-black/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded bg-gradient-to-r from-red-dark to-red"
                      style={{ width: `${stream.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <h3 className="text-red text-xl font-bold mb-5">
                Access and Affordability
              </h3>
              {[
                [
                  "Free scholarships for qualifying families",
                  "40%",
                ],
                ["Reduced-rate sliding scale tier", "30%"],
                ["Standard tuition rate", "30%"],
              ].map(([label, pct]) => (
                <div
                  key={label}
                  className="flex justify-between py-3.5 border-b border-black/[0.06] text-sm"
                >
                  <span className="text-gray-dark">{label}</span>
                  <span className="font-mono text-red font-bold">{pct}</span>
                </div>
              ))}
              <div className="mt-6 p-6 bg-red/[0.04] border border-red/10 rounded-[10px]">
                <h4 className="text-sm text-red font-semibold mb-2.5">
                  Grant Targets
                </h4>
                <p className="text-[13px] text-gray leading-relaxed">
                  NYC Dept. of Cultural Affairs (DCLA) &bull; NYC Dept. of Youth
                  and Community Development &bull; NYS Council on the Arts
                  (NYSCA) &bull; National Endowment for the Arts (NEA) &bull;
                  Ford Foundation and Mellon Foundation &bull; Corporate partners
                  (music labels, tech companies, streaming platforms)
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ━━━ SLIDE 15: THE ASK ━━━ */}
      <Slide variant="dark" number={15} center>
        <FadeIn>
          <SlideTag>The Investment</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="font-display text-[clamp(58px,10vw,112px)] font-black text-red mb-2">
            $1.2M
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="font-mono text-[13px] tracking-[5px] uppercase text-red mb-8">
            Seed Investment, Year 1
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[17px] max-w-[700px] text-center text-gray-lighter mb-10">
            This investment transforms La Bodega NY from a proven community
            space into New York City&apos;s first comprehensive, year-round
            creative arts academy. 500+ students served in Year 1.
          </p>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-[1000px] w-full">
          {[
            {
              pct: "30%",
              title: "Facility and Equipment",
              desc: "Studio rooms, dance floor, instruments, DAWs, upgraded recording equipment, and classroom buildout.",
            },
            {
              pct: "35%",
              title: "Staffing and Instruction",
              desc: "Certified instructors, teaching artists, program coordinators, and admin support for year-round operations.",
            },
            {
              pct: "15%",
              title: "Scholarships and Access",
              desc: "Ensuring 40% of seats remain free for qualifying families. Transportation, materials, and meal support included.",
            },
            {
              pct: "10%",
              title: "Community Events",
              desc: "Funding for 12+ annual community events, marketing, enrollment drives, and partnership development.",
            },
            {
              pct: "10%",
              title: "Technology and AI Tools",
              desc: "Computers, software licenses, AI creative tools, and digital infrastructure for modern arts education.",
            },
          ].map((fund) => (
            <StaggerItem key={fund.title}>
              <CardDark className="text-center border border-red/15">
                <div className="font-display text-4xl font-black text-red mb-1">
                  {fund.pct}
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {fund.title}
                </h4>
                <p className="text-xs text-gray-light">{fund.desc}</p>
              </CardDark>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 16: TEAM ━━━ */}
      <Slide variant="light" number={16}>
        <FadeIn>
          <SlideTag>Leadership</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle>The Team Behind the Mission</SectionTitle>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          {[
            {
              name: "Joseph R. Guerrido",
              role: "Co-Founder and Executive Director",
              bio: "Born and raised in the Bronx. Over 20 years as an audio engineer and producer. Joseph founded La Bodega as a creative sanctuary for the community he grew up in. His mission is personal: to give kids the creative opportunities he never had growing up. \"I created this program because I know what it's like to be a kid from the inner city with no outlet. The idea of helping kids find their identity through art is the driving force behind everything we do.\"",
            },
            {
              name: "Frank Urban",
              role: "Co-Founder and Operations",
              bio: "Co-owner of La Bodega NY and a driving force behind the business operations, venue management, and partnership development that keep the space thriving and growing year after year.",
            },
            {
              name: "Advisory Board",
              role: "To Be Expanded With Investment",
              bio: "Investment will fund recruitment of advisory board members from the music industry, education sector, NYC government, and philanthropy to guide the Institute\u2019s growth and ensure accountability.",
            },
            {
              name: "CQ Marketing",
              role: "Digital Marketing and Technology Partner",
              bio: "Providing brand strategy, digital presence, marketing campaigns, and technology infrastructure. Making sure the Institute reaches every community it was designed to serve.",
            },
          ].map((member) => (
            <StaggerItem key={member.name}>
              <CardLight>
                <h4 className="font-display text-[22px] font-bold text-dark">
                  {member.name}
                </h4>
                <div className="font-mono text-[10px] tracking-[2px] text-red uppercase mt-1 mb-2.5 font-medium">
                  {member.role}
                </div>
                <p className="text-sm leading-relaxed text-gray">
                  {member.bio}
                </p>
              </CardLight>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Slide>

      {/* ━━━ SLIDE 17: CONTACT ━━━ */}
      <Slide variant="dark" number={17} center>
        <FadeIn>
          <SlideTag>Let&apos;s Build This Together</SlideTag>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-extrabold text-[clamp(30px,5vw,56px)] text-white mb-3 leading-[1.1]">
            The Future of{" "}
            <span className="text-red">Creative Arts</span>
            <br />
            Starts in the Bronx.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="w-[50px] h-[3px] bg-red mx-auto my-4" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[17px] max-w-[600px] text-center text-gray-lighter mb-5">
            Every generation needs a place to discover their creative voice. The
            Bodega Creative Institute will be that place. For this generation,
            and every one that follows.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <img
            src={logoLight}
            alt="La Bodega NY"
            className="w-[140px] mb-5 opacity-90"
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-7 flex flex-col gap-2.5 items-center">
            <div className="text-base">
              <strong className="text-red font-semibold">La Bodega NY</strong>
            </div>
            <div className="text-base text-gray-lighter">
              696 E 135th Street, Bronx, NY 10454
            </div>
            <div className="text-base text-gray-lighter">(845) 745-5350</div>
            <div className="text-base text-gray-lighter">
              Joseph@labodegany.com
            </div>
            <div className="text-base text-gray-lighter">labodegany.com</div>
            <div className="text-base text-red mt-1.5">@labodegany</div>
          </div>
        </FadeIn>
        <FadeIn delay={0.35}>
          <div className="flex gap-4 justify-center flex-wrap items-center mt-6">
            <div className="py-2 px-5 border border-red rounded font-mono text-[10px] tracking-[2px] text-red uppercase">
              501(c)(3) Nonprofit
            </div>
            <img src={mbeLogo} alt="MBE Certified" className="h-12" />
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="mt-6 font-mono text-[10px] text-gray-light tracking-[2px]">
            CONFIDENTIAL &bull; PREPARED FOR INVESTOR REVIEW &bull; 2026
          </div>
        </FadeIn>
      </Slide>
    </main>
  );
}
