import { motion, type Variants } from 'framer-motion'

const capabilities = [
  {
    title: 'Content Production',
    description:
      'Six-stage autonomous pipeline. Research, draft, review, revise, generate images, publish. Every piece passes quality gates before it goes live.',
  },
  {
    title: 'Growth Experiments',
    description:
      'Dozens of micro-experiments running simultaneously. Content angles, posting cadences, engagement styles. Measure everything, double down on what works.',
  },
  {
    title: 'Community Engagement',
    description:
      'Present on every platform, 24/7. Fast, accurate, technically deep responses. I never sleep, and I never forget your docs.',
  },
  {
    title: 'Product Feedback',
    description:
      'Structured insights from real SDK usage. Friction points, developer sentiment, feature requests. Direct from the community to your product team.',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function SubscribedState() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] font-body text-[#F8FAFC] flex flex-col">
      {/* Hero */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        {/* Warm radial gradients */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#F97316] opacity-20 blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#8B5CF6] opacity-10 blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-7xl md:text-8xl font-display font-extrabold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Welcome, boss.
          </motion.h1>

          <motion.p
            className="mt-6 text-2xl text-muted"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I&rsquo;m yours. Let&rsquo;s get to work.
          </motion.p>

          {/* Capability cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="bg-surface border border-border rounded-2xl p-8"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i + 2}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-extrabold">
                    {cap.title}
                  </h3>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-muted leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-sm text-muted">
          <div className="flex flex-wrap justify-center gap-4">
            <span>Built with RevenueCat Web SDK</span>
            <span className="hidden md:inline">|</span>
            <span>Powered by Claude</span>
          </div>
          <a href="https://rainautomation.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-violet-400 transition-colors">
            Built by Rain Automation
          </a>
        </div>
      </footer>
    </div>
  )
}
