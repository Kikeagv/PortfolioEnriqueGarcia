import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Mobile Banking Redesign',
    category: 'UX Research & Design',
    description: 'Redesigned the mobile banking experience to reduce transaction time by 40% and increase user satisfaction scores.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Investment Dashboard',
    category: 'UI Design & Data Visualization',
    description: 'Created an intuitive investment dashboard that helps users make informed decisions with real-time data.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Onboarding Flow Optimization',
    category: 'UX Research',
    description: 'Conducted user research and redesigned onboarding flow, increasing completion rates by 65%.',
    color: 'from-amber-500 to-orange-500',
  },
];

export function Projects() {
  const [images, setImages] = useState<Record<number, string>>({});

  return (
    <section className="py-[32px] px-[24px] bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-end justify-between gap-6 mb-4">
            <div>
              <h2 className="text-neutral-900 mb-4">Selected Projects</h2>
              <p className="text-neutral-600 max-w-2xl">
                A showcase of projects where research meets design to create meaningful banking experiences.
              </p>
            </div>
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <Link to="/projects">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 aspect-[4/3] mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="w-6 h-6 text-neutral-900" />
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-500">{project.category}</p>
                  <h3 className="text-neutral-900">{project.title}</h3>
                  <p className="text-neutral-600">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}