import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const sections = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'background', label: 'Background' },
  { id: 'research', label: 'User Research' },
  { id: 'design', label: 'Design Process' },
  { id: 'solution', label: 'Final Solution' },
  { id: 'results', label: 'Results & Impact' },
];

export function CaseStudyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <header className="bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50 backdrop-blur-sm bg-neutral-900/95">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/projects">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-400 mb-4"
          >
            Mobile Banking Redesign
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl lg:text-6xl mb-12"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', lineHeight: '1.2' }}
          >
            Revamping the Banking Experience for better efficiency and faster decisions
          </motion.h1>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 p-12"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2NTM4MzkzMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mobile banking app"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32 space-y-12">
                {/* Timeline */}
                <div>
                  <h3 className="text-sm text-neutral-400 mb-3">Timeline</h3>
                  <p className="text-neutral-900">Jan - Jun 2023</p>
                </div>

                {/* Key Areas */}
                <div>
                  <h3 className="text-sm text-neutral-400 mb-3">Key areas</h3>
                  <p className="text-neutral-900 text-sm leading-relaxed">
                    UX Strategy, Interaction Design, IA, Visual Design, Usability Testing
                  </p>
                </div>

                {/* People Involved */}
                <div>
                  <h3 className="text-sm text-neutral-400 mb-3">People involved</h3>
                  <p className="text-neutral-900 text-sm">
                    1 Product Designer, 1 PM, 5 Engineers
                  </p>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:block pt-8 border-t border-neutral-200">
                  <div className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({
                            behavior: 'smooth',
                          });
                        }}
                        className={`block text-sm py-2 border-l-2 pl-4 transition-colors ${
                          activeSection === section.id
                            ? 'border-red-500 text-neutral-900'
                            : 'border-transparent text-neutral-400 hover:text-neutral-900'
                        }`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Next Case Study */}
                <div className="pt-8 border-t border-neutral-200">
                  <p className="text-sm text-neutral-400 mb-2">Next Case Study</p>
                  <Link
                    to="/projects"
                    className="text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    Investment Dashboard
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-20">
              {/* Overview */}
              <div id="overview" className="space-y-8">
                <p className="text-xl text-neutral-700 leading-relaxed">
                  Redesigned the mobile banking experience by improving navigation, surfacing key data, and
                  simplifying bulk actions.
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  My role as a Product designer was to research and uncover areas where user's banking speed
                  became slow and provide solutions by design and testing to improve efficiency
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <div className="border-l-2 border-neutral-900 pl-6">
                    <p className="text-4xl text-neutral-900 mb-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      1.2x faster
                    </p>
                    <p className="text-neutral-600">Bulk-exit actions</p>
                  </div>
                  <div className="border-l-2 border-neutral-900 pl-6">
                    <p className="text-4xl text-neutral-900 mb-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      1.5% more
                    </p>
                    <p className="text-neutral-600">Trades per day</p>
                  </div>
                </div>
              </div>

              {/* Background */}
              <div id="background" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Understanding the Problem
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Our mobile banking platform was showing signs of age. Users were struggling with basic tasks
                  that should have been simple - checking balances, transferring money, and managing accounts.
                  Through analytics and user feedback, we identified key pain points that were causing
                  frustration and abandonment.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  The navigation was confusing, important information was buried, and the visual design felt
                  outdated compared to modern fintech competitors. We needed to modernize while maintaining
                  the trust and security expectations of our 2M+ user base.
                </p>
              </div>

              {/* Research */}
              <div id="research" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  User Research & Discovery
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  We conducted extensive user research including 25 in-depth interviews, usability testing
                  sessions, and analysis of user behavior data. This helped us understand not just what users
                  were doing, but why they were struggling.
                </p>

                <div className="rounded-2xl overflow-hidden my-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1MzU3ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="User research workspace"
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <div className="bg-neutral-50 rounded-2xl p-8 space-y-4">
                  <h3 className="text-xl text-neutral-900">Key Findings</h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li className="flex gap-3">
                      <span className="text-red-500 flex-shrink-0">•</span>
                      <span>Users couldn't find their most-used features within 3 taps</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 flex-shrink-0">•</span>
                      <span>Account overview lacked critical information users needed daily</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 flex-shrink-0">•</span>
                      <span>Transaction history was difficult to parse and filter</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 flex-shrink-0">•</span>
                      <span>Security features felt intrusive rather than reassuring</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Design Process */}
              <div id="design" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Design Process
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Armed with research insights, we began an iterative design process. We started with low-fidelity
                  sketches to explore different navigation patterns and information architectures, then moved to
                  high-fidelity prototypes for usability testing.
                </p>

                <div className="rounded-2xl overflow-hidden my-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761746395515-5ad7e0bac0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwc2tldGNoZXN8ZW58MXx8fHwxNzY1MzgzOTMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Design process sketches"
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <p className="text-neutral-600 leading-relaxed">
                  Each iteration was tested with real users, and we refined the design based on their feedback.
                  This collaborative approach ensured that we were solving real problems, not just creating
                  something that looked good.
                </p>
              </div>

              {/* Solution */}
              <div id="solution" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  The Final Solution
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  The redesigned experience centers around three core principles: clarity, efficiency, and trust.
                  We reorganized the navigation to prioritize the most common tasks, redesigned the dashboard to
                  surface critical information at a glance, and streamlined transaction flows to reduce friction.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Simplified Navigation</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Reduced navigation depth from 4 levels to 2, making every feature accessible within 2 taps.
                      Most-used features are always visible on the main screen.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Smart Dashboard</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Redesigned dashboard shows account balances, recent transactions, and quick actions in an
                      intuitive layout that adapts to user behavior.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Streamlined Transfers</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Simplified money transfer flow from 7 steps to 3, with smart defaults and contextual
                      suggestions based on user history.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Enhanced Security</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Integrated biometric authentication and made security features feel helpful rather than
                      obstructive, increasing user confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div id="results" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Results & Impact
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  The redesign launched to our entire user base over a 3-month period. We monitored key metrics
                  closely and gathered feedback through in-app surveys and support channels.
                </p>

                <div className="rounded-2xl overflow-hidden my-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTMxNjk3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Data analytics dashboard"
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 space-y-6">
                  <h3 className="text-2xl text-neutral-900">Impact Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-4xl text-neutral-900 mb-2">40%</p>
                      <p className="text-sm text-neutral-600">Faster transaction completion</p>
                    </div>
                    <div>
                      <p className="text-4xl text-neutral-900 mb-2">65%</p>
                      <p className="text-sm text-neutral-600">Reduction in support tickets</p>
                    </div>
                    <div>
                      <p className="text-4xl text-neutral-900 mb-2">4.8/5</p>
                      <p className="text-sm text-neutral-600">App store rating (up from 3.9)</p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-600 leading-relaxed">
                  Beyond the numbers, user feedback has been overwhelmingly positive. Many users mentioned that
                  the app finally feels modern and easy to use. The redesign also positioned us better against
                  fintech competitors, with increased app usage and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}