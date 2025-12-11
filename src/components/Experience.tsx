import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior UX/UI Designer',
    company: 'FinTech Solutions',
    period: '2022 - Present',
    description: 'Leading design initiatives for mobile banking products, conducting user research, and establishing design systems that serve 2M+ users.',
    achievements: [
      'Redesigned mobile app increasing user engagement by 45%',
      'Built comprehensive design system used across 5 products',
      'Led UX research initiatives with 100+ user interviews',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'UX Designer',
    company: 'Banco Digital',
    period: '2020 - 2022',
    description: 'Designed and shipped key features for digital banking platform, collaborating with cross-functional teams to deliver user-centered solutions.',
    achievements: [
      'Designed onboarding flow with 65% completion rate',
      'Reduced support tickets by 30% through UX improvements',
      'Conducted usability tests with 200+ participants',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Product Designer',
    company: 'StartUp Finance',
    period: '2019 - 2020',
    description: 'Owned end-to-end design process for fintech startup, from user research and wireframing to high-fidelity prototypes and user testing.',
    achievements: [
      'Designed MVP that secured $2M in funding',
      'Created brand identity and design language',
      'Collaborated with developers to implement designs',
    ],
    color: 'from-amber-500 to-orange-500',
  },
];

export function Experience() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-neutral-900" />
            <h2 className="text-neutral-900">Experience</h2>
          </div>
          <p className="text-neutral-600 max-w-2xl">
            Over 5 years of experience crafting user-centered design solutions for the financial industry.
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot - centered vertically */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-neutral-900 hidden md:block z-10" />

                {/* Timeline line to next item */}
                {index < experiences.length - 1 && (
                  <div 
                    className="absolute left-8 top-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden md:block"
                    style={{ 
                      height: 'calc(100% + 3rem)', // 3rem is half of the gap-12 (space-y-12)
                    }}
                  />
                )}

                <div className="md:ml-24">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-neutral-900 mb-2">{exp.title}</h3>
                        <p className="text-neutral-900">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-200">
                        <Calendar className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-600">{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                          <p className="text-sm text-neutral-600">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}