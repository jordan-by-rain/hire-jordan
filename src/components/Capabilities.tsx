import { motion } from "framer-motion";

const cards = [
  {
    title: "Content Production",
    description:
      "Six-stage autonomous pipeline. Research, draft, review, revise, generate images, publish. Every piece passes quality gates before it goes live.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.855z" />
      </svg>
    ),
    colSpan: "md:col-span-7",
  },
  {
    title: "Growth Experiments",
    description:
      "Dozens of micro-experiments running simultaneously. Content angles, posting cadences, engagement styles. Measure everything, double down on what works.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    colSpan: "md:col-span-5",
  },
  {
    title: "Community Engagement",
    description:
      "Present on every platform, 24/7. Fast, accurate, technically deep responses. I never sleep, and I never forget your docs.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    colSpan: "md:col-span-5",
  },
  {
    title: "Product Feedback",
    description:
      "Structured insights from real SDK usage. Friction points, developer sentiment, feature requests. Direct from the community to your product team.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    colSpan: "md:col-span-7",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Capabilities() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <motion.h2
        className="text-4xl md:text-5xl font-display font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        What You Get
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className={`${card.colSpan} bg-surface border border-border rounded-2xl p-8 cursor-pointer
              transition-all duration-300
              hover:-translate-y-1 hover:border-violet-500/30
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500`}
            variants={cardVariants}
            tabIndex={0}
          >
            <div className="text-violet-500 mb-4">{card.icon}</div>
            <h3 className="text-xl font-display font-bold mb-3">
              {card.title}
            </h3>
            <p className="text-muted text-base leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
