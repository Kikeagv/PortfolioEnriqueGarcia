import { motion } from 'motion/react';
import { User, Bot } from 'lucide-react';

interface VersionSwitcherProps {
  selectedVersion: 'human' | 'ai';
  onSwitch: (version: 'human' | 'ai') => void;
}

export function VersionSwitcher({ selectedVersion, onSwitch }: VersionSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-lg">
      <button
        onClick={() => onSwitch('human')}
        className="relative px-6 py-3 rounded-full transition-colors"
      >
        {selectedVersion === 'human' && (
          <motion.div
            layoutId="active-version"
            className="absolute inset-0 bg-neutral-900 rounded-full"
            transition={{ type: 'spring', duration: 0.6 }}
          />
        )}
        <div className="relative flex items-center gap-2 z-10">
          <User className={`w-4 h-4 ${selectedVersion === 'human' ? 'text-white' : 'text-neutral-600'}`} />
          <span className={`text-sm ${selectedVersion === 'human' ? 'text-white' : 'text-neutral-600'}`}>
            For Humans
          </span>
        </div>
      </button>

      <button
        onClick={() => onSwitch('ai')}
        className="relative px-6 py-3 rounded-full transition-colors"
      >
        {selectedVersion === 'ai' && (
          <motion.div
            layoutId="active-version"
            className="absolute inset-0 bg-neutral-900 rounded-full"
            transition={{ type: 'spring', duration: 0.6 }}
          />
        )}
        <div className="relative flex items-center gap-2 z-10">
          <Bot className={`w-4 h-4 ${selectedVersion === 'ai' ? 'text-white' : 'text-neutral-600'}`} />
          <span className={`text-sm ${selectedVersion === 'ai' ? 'text-white' : 'text-neutral-600'}`}>
            For AI Agents
          </span>
        </div>
      </button>
    </div>
  );
}
