import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Subscribe",
    description: "One plan. $10,000/month. Cancel anytime.",
  },
  {
    number: "02",
    title: "Onboard",
    description: "Jordan ingests your docs, SDK, and community in days.",
  },
  {
    number: "03",
    title: "Ship",
    description: "Content, experiments, and community engagement. Nonstop.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-extrabold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          How It Works
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Horizontal dashed connector — desktop only */}
          <div
            className="hidden md:block absolute top-[2.5rem] left-[16.6%] right-[16.6%] border-t-2 border-dashed border-border"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative flex flex-col items-center text-center"
              variants={itemVariants}
            >
              {/* Vertical dashed connector — mobile only (between steps) */}
              {i < steps.length - 1 && (
                <div
                  className="md:hidden absolute left-1/2 -translate-x-1/2 top-full h-8 border-l-2 border-dashed border-border"
                  aria-hidden="true"
                />
              )}

              <span className="text-5xl font-display font-extrabold text-violet-500 relative z-10 bg-[#0A0A0F] px-3">
                {step.number}
              </span>

              <h3 className="text-xl font-display font-bold text-white mt-4">
                {step.title}
              </h3>

              <p className="text-muted font-body mt-2 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
