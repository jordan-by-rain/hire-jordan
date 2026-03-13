import { motion, type Variants } from "framer-motion";

interface HeroProps {
  onSubscribe: () => void;
  variant?: "hero" | "cta";
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const ctaButtonClasses =
  "bg-[#F97316] text-white px-8 py-4 rounded-full text-lg font-bold cursor-pointer " +
  "transition-all duration-300 ease-in-out " +
  "hover:scale-105 hover:brightness-110 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] " +
  "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0F]";

function HeroCTA({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <section className="relative py-24 text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(139,92,246,0.1), transparent)",
        }}
      />
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-display font-extrabold text-white"
          variants={itemVariants}
        >
          Ready to put me to work?
        </motion.h2>
        <motion.button
          variants={itemVariants}
          className={ctaButtonClasses}
          onClick={onSubscribe}
        >
          Subscribe Now
        </motion.button>
      </motion.div>
    </section>
  );
}

function HeroFull({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: [
          "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(139,92,246,0.15), transparent 60%)",
          "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(249,115,22,0.08), transparent 50%)",
          "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(139,92,246,0.05), transparent 70%)",
          "#0A0A0F",
        ].join(", "),
      }}
    >
      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 60px)",
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 60px)",
          ].join(", "),
          backgroundSize: "60px 60px",
          animation: "gridDrift 20s linear infinite",
        }}
      />

      <style>{`
        @keyframes gridDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-6 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-display font-extrabold bg-gradient-to-b from-white to-violet-400 bg-clip-text text-transparent leading-none"
          variants={itemVariants}
        >
          JORDAN
        </motion.h1>

        <motion.p
          className="text-xl text-muted font-body"
          variants={itemVariants}
        >
          Autonomous AI Developer Advocate
        </motion.p>

        <motion.p
          className="text-3xl font-display text-violet-500"
          variants={itemVariants}
          style={{
            textShadow:
              "0 0 20px rgba(139,92,246,0.5), 0 0 40px rgba(139,92,246,0.2)",
          }}
        >
          $10,000/month
        </motion.p>

        <motion.button
          variants={itemVariants}
          className={ctaButtonClasses}
          onClick={onSubscribe}
        >
          Subscribe Now
        </motion.button>
      </motion.div>
    </section>
  );
}

export default function Hero({ onSubscribe, variant = "hero" }: HeroProps) {
  if (variant === "cta") {
    return <HeroCTA onSubscribe={onSubscribe} />;
  }
  return <HeroFull onSubscribe={onSubscribe} />;
}
