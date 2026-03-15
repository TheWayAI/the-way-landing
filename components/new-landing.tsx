"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, ArrowDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-[#1c1c1c]/[0.06]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 relative">
              <Image
                src="/thewaylogo.jpeg"
                alt="The Way"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-display text-[18px] font-semibold text-[#1c1c1c] tracking-[0.2em] uppercase leading-none">
              The Way
            </span>
          </Link>

          <a
            href="https://theway.masterymade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-[#1c1c1c] text-white px-6 py-2.5 text-xs font-display font-semibold tracking-[0.15em] uppercase hover:bg-[#333] transition-colors"
          >
            Request Early Access
          </a>

          <button
            className="md:hidden text-[#1c1c1c]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 pt-4 border-t border-[#1c1c1c]/[0.06]">
            <a
              href="https://theway.masterymade.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#1c1c1c] text-white px-6 py-3 text-xs font-display font-semibold tracking-[0.15em] uppercase hover:bg-[#333] transition-colors"
            >
              Request Early Access
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(".reveal")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}

export function NewLanding() {
  const scrollDown = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })
  }

  const mainRef = useReveal()

  return (
    <main ref={mainRef} className="min-h-screen overflow-hidden">
      <Nav />

      {/* ══════ HERO — WHITE ══════ */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-white">
        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center pt-24">
          <div className="mb-12 md:mb-16">
            <Image
              src="/thewaylogo.jpeg"
              alt="The Way"
              width={160}
              height={160}
              className="mx-auto object-contain w-32 h-32 md:w-48 md:h-48"
              priority
            />
          </div>

          <h1 className="font-serif text-[#1c1c1c] text-4xl sm:text-5xl md:text-[3.5rem] font-light leading-[1.15] mb-8 tracking-tight">
            You are not who
            <span className="block">the world made you.</span>
          </h1>

          <blockquote className="max-w-lg mx-auto mb-12">
            <p className="text-base sm:text-lg text-[#1c1c1c]/70 font-serif italic leading-relaxed">
              &ldquo;If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.&rdquo;
            </p>
            <cite className="block mt-3 text-[11px] tracking-[0.25em] uppercase text-[#1c1c1c]/50 not-italic font-display">
              2 Corinthians 5:17
            </cite>
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://theway.masterymade.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center bg-[#1c1c1c] text-white px-8 py-4 text-xs font-display font-semibold tracking-[0.15em] uppercase hover:bg-[#333] transition-colors w-full sm:w-auto"
            >
              Request Early Access
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollDown}
              className="inline-flex items-center justify-center text-[#1c1c1c]/60 hover:text-[#1c1c1c] px-8 py-4 text-xs font-display font-semibold tracking-[0.15em] uppercase transition-colors w-full sm:w-auto"
            >
              Explore the Vision
              <ArrowDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════ INTRO — LINEN ══════ */}
      <section id="intro" className="relative py-24 md:py-32 bg-linen">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-[1.85] mb-8">
            You have been formed. By algorithms, by trauma, by noise, by years of coping and surviving and performing. Scripture calls what that produces the <span className="text-[#1c1c1c] font-medium italic">old self</span>. And it doesn&apos;t die quietly. It resurfaces in the patterns you keep returning to, the shame that keeps you at a distance, the version of yourself you slip back into when no one&apos;s watching.
          </p>

          <p className="text-xl sm:text-2xl text-[#1c1c1c]/85 font-serif max-w-sm mx-auto leading-snug">
            Transformation is not a moment. It is a practice. <span className="text-[#1c1c1c] font-medium">The Way</span> was built for that practice.
          </p>
        </div>
      </section>

      {/* ══════ DISCIPLESHIP CRISIS — WHITE ══════ */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-display font-semibold tracking-[0.3em] uppercase text-[#c93a2d] mb-8 text-center">
            The Discipleship Crisis
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#1c1c1c] leading-tight mb-4 text-center">
            The Church has learned
            <span className="block text-[#4a7cbf]">to gather.</span>
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#1c1c1c]/60 text-center mb-14">
            Formation is the harder work.
          </p>

          <div className="space-y-6 text-base sm:text-lg text-[#1c1c1c]/75 leading-[1.85]">
            <p>
              You can fill a stadium. You can run a service that moves people. But then Monday comes, and they go back into the same patterns, the same identity loops, the same version of themselves the world built before they ever walked through your doors.
            </p>

            <p>
              This isn&apos;t a failure of faith. It&apos;s a failure of <span className="text-[#1c1c1c] font-medium">formation infrastructure</span>. The early Church didn&apos;t just preach at people. It walked with them. It disrupted the shame that kept them from the Father. It built new identity from the ground up, grounded in who they were <span className="text-[#1c1c1c] font-medium italic">in Christ</span>, before they ever did anything.
            </p>

            <p>
              Satan attacks identity first. Control the identity and the behavior follows. Make someone question who they are and you&apos;ve already won the fight before it started.
            </p>
          </div>

          <blockquote className="my-14 border-l-2 border-[#4a7cbf] pl-6">
            <p className="text-lg sm:text-xl text-[#1c1c1c]/75 font-serif italic leading-relaxed">
              &ldquo;Do not be conformed to this world, but be transformed by the renewing of your mind.&rdquo;
            </p>
            <cite className="block mt-3 text-[11px] tracking-[0.25em] uppercase text-[#1c1c1c]/50 not-italic font-display">
              Romans 12:2
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ══════ IDENTITY LAYER — LINEN ══════ */}
      <section className="relative py-24 md:py-32 bg-linen">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-display font-semibold tracking-[0.3em] uppercase text-[#c93a2d] mb-8 text-center">
            The Identity Layer
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#1c1c1c] leading-tight mb-4 text-center">
            Before Jesus did anything,
            <span className="block mt-1 text-[#1c1c1c]/60">
              the Father declared who he was.
            </span>
          </h2>

          <blockquote className="my-10 text-center">
            <p className="text-base sm:text-lg text-[#1c1c1c]/75 font-serif italic leading-relaxed max-w-md mx-auto">
              &ldquo;You are my Son, whom I love; with you I am well pleased.&rdquo;
            </p>
            <cite className="block mt-3 text-[11px] tracking-[0.25em] uppercase text-[#1c1c1c]/50 not-italic font-display">
              Matthew 3:17
            </cite>
          </blockquote>

          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-[1.8] text-center max-w-lg mx-auto mb-5">
            Before the ministry. Before the miracles. Before the cross. Identity first. Everything else flows from that.
          </p>

          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-[1.8] text-center max-w-lg mx-auto mb-16">
            The Way is built on the same sequence. The work begins at the level of identity: <span className="text-[#1c1c1c] font-medium">who you are in Christ</span>. Everything else is built from there. A new architecture for how you see yourself, reinforced daily, until the old self loses its grip.
          </p>

          <div className="grid sm:grid-cols-3 gap-px bg-[#1c1c1c]/[0.08]">
            <div className="bg-[#e8e3db] p-8">
              <span className="text-[11px] font-display font-semibold text-[#4a7cbf] tracking-[0.2em]">01</span>
              <h3 className="font-display font-semibold text-[#1c1c1c] mt-3 mb-2 uppercase tracking-wide text-sm">Identity before activity.</h3>
              <p className="text-[#1c1c1c]/70 leading-relaxed text-base">Know who you are in Christ before anything you do.</p>
            </div>
            <div className="bg-[#e8e3db] p-8">
              <span className="text-[11px] font-display font-semibold text-[#4a7cbf] tracking-[0.2em]">02</span>
              <h3 className="font-display font-semibold text-[#1c1c1c] mt-3 mb-2 uppercase tracking-wide text-sm">Formation over information.</h3>
              <p className="text-[#1c1c1c]/70 leading-relaxed text-base">Deeper than content. The work of becoming.</p>
            </div>
            <div className="bg-[#e8e3db] p-8">
              <span className="text-[11px] font-display font-semibold text-[#4a7cbf] tracking-[0.2em]">03</span>
              <h3 className="font-display font-semibold text-[#1c1c1c] mt-3 mb-2 uppercase tracking-wide text-sm">Renewal as practice.</h3>
              <p className="text-[#1c1c1c]/70 leading-relaxed text-base">Romans 12:2 is not a declaration. It is a daily discipline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ WHAT WE'RE BUILDING — WHITE ══════ */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-display font-semibold tracking-[0.3em] uppercase text-[#c93a2d] mb-8 text-center">
            What We&apos;re Building
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#1c1c1c] leading-tight mb-4 text-center">
            An AI lab for the
            <span className="block mt-1 text-[#4a7cbf]">Body of Christ.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-[1.8] text-center max-w-lg mx-auto mb-6">
            An AI built differently, from the ground up, aligned to the teachings of Christ, trained to walk with you through the real work of becoming new.
          </p>

          <div className="flex justify-center mb-14">
            <Image
              src="/waylogowhite.png"
              alt="The Way Symbol"
              width={40}
              height={40}
              className="opacity-[0.08]"
            />
          </div>

          <div className="space-y-px bg-[#1c1c1c]/[0.08]">
            <div className="bg-white p-8 md:p-10">
              <div className="flex items-start gap-6">
                <span className="font-serif text-xl text-[#4a7cbf] font-light leading-none pt-0.5 shrink-0 w-8">I</span>
                <div>
                  <h3 className="text-sm font-display font-semibold text-[#1c1c1c] mb-3 uppercase tracking-wide">Christ-Aligned AI</h3>
                  <p className="text-[#1c1c1c]/75 leading-relaxed text-base sm:text-lg">Wayfinder is trained on Scripture, doctrine, and the deep tradition of the Church. Aligned to Christ, built without the incentives of a platform pulling it sideways.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10">
              <div className="flex items-start gap-6">
                <span className="font-serif text-xl text-[#4a7cbf] font-light leading-none pt-0.5 shrink-0 w-8">II</span>
                <div>
                  <h3 className="text-sm font-display font-semibold text-[#1c1c1c] mb-3 uppercase tracking-wide">Identity Formation</h3>
                  <p className="text-[#1c1c1c]/75 leading-relaxed text-base sm:text-lg">The work begins at the level of who you are, deeper than behavior or habit. Daily practice, Scripture-rooted reflection, and a formation framework that reinforces your identity in Christ when no one else is around.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10">
              <div className="flex items-start gap-6">
                <span className="font-serif text-xl text-[#4a7cbf] font-light leading-none pt-0.5 shrink-0 w-8">III</span>
                <div>
                  <h3 className="text-sm font-display font-semibold text-[#1c1c1c] mb-3 uppercase tracking-wide">Sovereign Infrastructure</h3>
                  <p className="text-[#1c1c1c]/75 leading-relaxed text-base sm:text-lg">Built to be private, portable, and uncensorable. The AI that walks with persecuted believers in closed nations cannot be one that a government can simply switch off or redirect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ WAYFINDER — LINEN ══════ */}
      <section className="relative py-24 md:py-32 bg-linen">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="reveal">
            <p className="text-[11px] font-display font-semibold tracking-[0.3em] uppercase text-[#c93a2d] mb-8 text-center">
              Wayfinder
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#1c1c1c] leading-tight mb-4 text-center">
              Not a chatbot.
              <span className="block mt-1 text-[#4a7cbf] italic">A disciple-maker.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#1c1c1c]/75 leading-[1.85] mt-10">
              <p>
                Most AI gives you answers. Wayfinder gives you formation. It doesn&apos;t just respond to questions. It holds the thread of your growth over time, pressing deeper into who you are and who you&apos;re becoming in Christ.
              </p>
              <p>
                The difference is what it&apos;s built on. Wayfinder is trained on Scripture, the Church fathers, historical theology, and two thousand years of apostolic practice. When you bring it a question, it doesn&apos;t search the internet. It searches the tradition.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-[#1c1c1c]/[0.08]">
            <div className="reveal py-10 border-b border-[#1c1c1c]/[0.08]">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1c1c1c] mb-3 leading-tight">Scripture &amp; Doctrine</h3>
              <p className="text-[#1c1c1c]/70 leading-[1.85] text-base sm:text-lg">Deep reading, not verse-of-the-day consumption. Wayfinder can walk you through a passage with the rigor of a theologian and the patience of a pastor, tracing the original language, the historical context, what the fathers said, and what it means for you today.</p>
            </div>

            <div className="reveal [transition-delay:0.1s] py-10 border-b border-[#1c1c1c]/[0.08]">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1c1c1c] mb-3 leading-tight">Apologetics Training</h3>
              <p className="text-[#1c1c1c]/70 leading-[1.85] text-base sm:text-lg">The world will challenge what you believe. Wayfinder prepares you to answer, not with rage, but with clarity. Defend the Resurrection. Engage the problem of evil. Counter the arguments you actually encounter, grounded in logic and the tradition of the Church.</p>
            </div>

            <div className="reveal [transition-delay:0.22s] py-10 border-b border-[#1c1c1c]/[0.08]">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1c1c1c] mb-3 leading-tight">Spiritual Warfare</h3>
              <p className="text-[#1c1c1c]/70 leading-[1.85] text-base sm:text-lg">The enemy&apos;s tactics are ancient and they are patterned. Fear, accusation, division, confusion. Wayfinder helps you name what&apos;s happening, root it in Scripture, and pray with authority rather than anxiety. Awareness is the beginning of freedom.</p>
            </div>

            <div className="reveal py-10 border-b border-[#1c1c1c]/[0.08]">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1c1c1c] mb-3 leading-tight">Prayer &amp; Renewal</h3>
              <p className="text-[#1c1c1c]/70 leading-[1.85] text-base sm:text-lg">Not a prayer generator. A guide into deeper prayer: intercessory depth, liturgical rhythm, the kind of practiced silence that the desert fathers understood. Wayfinder builds a daily rhythm that gradually displaces the noise rather than competing with it.</p>
            </div>

            <div className="reveal [transition-delay:0.1s] py-10 border-b border-[#1c1c1c]/[0.08]">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1c1c1c] mb-3 leading-tight">Identity Reflection</h3>
              <p className="text-[#1c1c1c]/70 leading-[1.85] text-base sm:text-lg">The old self doesn&apos;t yield to information. It yields to repeated encounter with truth. Wayfinder surfaces what Scripture says about who you are, not as affirmation, but as formation. The kind of daily confrontation with your identity in Christ that slowly rewrites the story you&apos;ve been living from.</p>
            </div>

            <div className="reveal [transition-delay:0.22s] py-10 border-b border-[#1c1c1c]/[0.08]">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1c1c1c] mb-3 leading-tight">The Church Fathers</h3>
              <p className="text-[#1c1c1c]/70 leading-[1.85] text-base sm:text-lg">Origen on spiritual warfare. Augustine on the nature of sin. Athanasius on the Incarnation. Chrysostom on living radically. The desert fathers on renunciation. Their writings aren&apos;t relics. They&apos;re weapons. Wayfinder makes them accessible, contextualized, and actionable for your life today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ LARGER VISION — WHITE ══════ */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-display font-semibold tracking-[0.3em] uppercase text-[#c93a2d] mb-8 text-center">
            The Larger Vision
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#1c1c1c] leading-tight mb-4 text-center">
            The Body of Christ needs
            <span className="block mt-1 text-[#1c1c1c]/60">more than content.</span>
            <span className="block mt-1 text-[#4a7cbf]">It needs infrastructure.</span>
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-[#1c1c1c]/75 leading-[1.85] mt-14">
            <p>
              The early followers of The Way didn&apos;t have institutions. They had identity, community, and the Spirit. They also turned the world upside down. What they lacked was scale. The question is whether we build the technology right, or let someone else build it wrong.
            </p>

            <p>
              The Way is the identity layer. The place where someone discovers who they are in Christ, builds the habits of a new self, and carries that self into everything: their work, their community, the way they spend the resources God has placed in their hands.
            </p>

            <p>
              This is the foundation. What gets built on top of it is a question for the Spirit to answer over time.
            </p>

            <p>
              If the Church is going to be the trust anchor for a new kind of economy, a new kind of community, a new kind of world, it needs people who actually know who they are. The Way is where that work begins.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA — LINEN ══════ */}
      <section className="relative py-24 md:py-32 bg-linen">
        <div className="relative z-10 max-w-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#1c1c1c] leading-tight mb-3">
            The new has come.
          </h2>
          <p className="text-xl sm:text-2xl font-serif text-[#4a7cbf] mb-8">
            Begin the work.
          </p>

          <p className="text-base sm:text-lg text-[#1c1c1c]/65 mb-10 max-w-sm mx-auto">
            Request early access. We&apos;re building with a small group of believers first.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
              window.open("https://theway.masterymade.com/", "_blank")
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-[#e8e3db]/30 border border-[#1c1c1c]/10 px-5 py-4 text-base text-[#1c1c1c] placeholder:text-[#1c1c1c]/40 focus:outline-none focus:border-[#4a7cbf] transition-colors"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center bg-[#1c1c1c] text-white px-6 py-4 text-xs font-display font-semibold tracking-[0.15em] uppercase hover:bg-[#333] transition-colors shrink-0"
            >
              Request Access
              <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* ══════ FOOTER — LINEN ══════ */}
      <footer className="bg-linen border-t border-[#1c1c1c]/[0.06] py-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-6 h-6 relative">
                <Image
                  src="/thewaylogo.jpeg"
                  alt="The Way"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-sm text-[#1c1c1c]/60 tracking-[0.2em] uppercase leading-none font-semibold">
                The Way
              </span>
            </div>
            <p className="text-[#1c1c1c]/50 text-sm">
              &copy; {new Date().getFullYear()} The Way. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
