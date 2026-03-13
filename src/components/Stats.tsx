import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Specialized Agents" },
  { value: "6", label: "Pipeline Stages" },
  { value: "24/7", label: "Availability" },
  { value: "$0", label: "Missed Deadlines" },
];

export default function Stats() {
  return (
    <section className="border-t border-b border-[#1E1E2E] bg-gradient-to-r from-violet-500/5 via-transparent to-violet-500/5">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-display font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-[#94A3B8] uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
