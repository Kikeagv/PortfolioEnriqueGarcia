import { motion } from 'motion/react';
import { Music, Play, Pause } from 'lucide-react';
import { useState } from 'react';

export function SpotifyBox() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder song data
  const currentSong = {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumArt: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    duration: '3:20',
    progress: 65, // percentage
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-neutral-900 backdrop-blur-sm rounded-2xl border border-neutral-800 p-4 shadow-lg w-80"
    >
      <div className="flex items-center gap-2 mb-3">
        <Music className="w-4 h-4 text-green-500" />
        <span className="text-xs text-neutral-400">Recently played on Spotify</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Album Art */}
        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-neutral-800">
          <img
            src={currentSong.albumArt}
            alt={currentSong.album}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Song Info */}
        <div className="flex-1 min-w-0">
          <div className="text-sm text-white truncate mb-1">
            {currentSong.title}
          </div>
          <div className="text-xs text-neutral-400 truncate">
            {currentSong.artist}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-3">
      </div>
    </motion.div>
  );
}