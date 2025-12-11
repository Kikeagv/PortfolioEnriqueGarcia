import { motion } from 'motion/react';
import { Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const markdownContent = `# Enrique García - UX/UI Designer Portfolio

## Summary
UX/UI Designer specializing in banking and financial services. Making banking simpler through research and intentional design.

**Contact:** enrique@example.com  
**Location:** Mexico  
**Status:** Available for work

---

## Experience

### Senior UX/UI Designer | FinTech Solutions
**Period:** 2022 - Present

Leading design initiatives for mobile banking products, conducting user research, and establishing design systems that serve 2M+ users.

**Key Achievements:**
- Redesigned mobile app increasing user engagement by 45%
- Built comprehensive design system used across 5 products
- Led UX research initiatives with 100+ user interviews

---

### UX Designer | Banco Digital
**Period:** 2020 - 2022

Designed and shipped key features for digital banking platform, collaborating with cross-functional teams to deliver user-centered solutions.

**Key Achievements:**
- Designed onboarding flow with 65% completion rate
- Reduced support tickets by 30% through UX improvements
- Conducted usability tests with 200+ participants

---

### Product Designer | StartUp Finance
**Period:** 2019 - 2020

Owned end-to-end design process for fintech startup, from user research and wireframing to high-fidelity prototypes and user testing.

**Key Achievements:**
- Designed MVP that secured $2M in funding
- Created brand identity and design language
- Collaborated with developers to implement designs

---

## Selected Projects

### Mobile Banking Redesign
**Category:** UX Research & Design

Redesigned the mobile banking experience to reduce transaction time by 40% and increase user satisfaction scores.

---

### Investment Dashboard
**Category:** UI Design & Data Visualization

Created an intuitive investment dashboard that helps users make informed decisions with real-time data.

---

### Onboarding Flow Optimization
**Category:** UX Research

Conducted user research and redesigned onboarding flow, increasing completion rates by 65%.

---

## Skills & Expertise

- User Research
- UX/UI Design
- Prototyping
- Design Systems
- Usability Testing
- Information Architecture
- Interaction Design
- Visual Design

---

## Statistics

- **5+ Years** Experience
- **50+** Projects Delivered
- **100+** Research Sessions
- **40%** Average UX Improvement

---

## About

I'm a UX/UI designer specializing in financial services, with a passion for making complex banking systems accessible and delightful for everyday users.

My approach combines rigorous user research with intentional design decisions. I believe that great design isn't just about aesthetics—it's about understanding user needs and creating solutions that truly work.

Based in Mexico, I've worked with fintech startups and established banks to transform digital experiences that millions of users interact with daily.

---

## Contact Information

**Email:** enrique@example.com  
**LinkedIn:** linkedin.com/in/enriquegarcia  
**GitHub:** github.com/enriquegarcia  
**Twitter:** @enriquegarcia

---

*Last updated: December 2025*
`;

export function AIVersion() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'enrique-garcia-portfolio.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-neutral-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-white mb-2">AI-Optimized Portfolio</h2>
              <p className="text-neutral-400">
                Structured markdown format for AI agents and automated systems
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="px-4 py-2 bg-white/10 text-white rounded-lg flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="px-4 py-2 bg-white text-neutral-900 rounded-lg flex items-center gap-2 hover:bg-neutral-100 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden"
        >
          <div className="px-6 py-4 bg-neutral-900/50 border-b border-neutral-800 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-neutral-500 ml-4">portfolio.md</span>
          </div>
          <pre className="p-8 overflow-x-auto text-sm text-neutral-300 leading-relaxed max-h-[600px] overflow-y-auto">
            <code>{markdownContent}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
