import { useState } from 'react';
import { motion } from 'motion/react';

const affinityData = {
  "User Pain Points": {
    color: "#FF6B6B",
    bgColor: "#FFE5E5",
    items: [
      { text: "Navigation relies on word-of-mouth", quote: true, detail: "I've lived here 3 years and still don't know all the routes" },
      { text: "Exact change required for $0.25 fare", quote: false, detail: "Turned away from buses without exact change" },
      { text: "No real-time arrival information", quote: false, detail: "Pure speculation when waiting" },
      { text: "Data plans expensive & limited", quote: false, detail: "Apps requiring constant data are non-starters" },
      { text: "Safety concerns waiting at stops", quote: false, detail: "Women especially concerned waiting alone at night" },
      { text: "Information gets outdated/distorted", quote: false, detail: "As it passes person to person" },
      { text: "Multi-leg journey costs unknown", quote: false, detail: "Can't plan weekly travel expenses" },
      { text: "Missing stops due to uncertainty", quote: false, detail: "Distracted or unsure which stop is theirs" }
    ]
  },
  "Research Insights": {
    color: "#4ECDC4",
    bgColor: "#E0F7F5",
    items: [
      { text: "Community knowledge is primary info source", quote: false, detail: "Ask friends, family, strangers at stops" },
      { text: "Diverse user base: students to elderly", quote: false, detail: "Varying digital literacy levels" },
      { text: "Trust needs to be earned gradually", quote: false, detail: "Skepticism from past app failures" },
      { text: "Natural Spanish > formal Spanish", quote: false, detail: "Local terminology feels familiar" },
      { text: "Use local place names", quote: false, detail: "'El Centro' not 'Centro Histórico'" },
      { text: "First-time riders feel lost & anxious", quote: false, detail: "Often take wrong bus, waste money" },
      { text: "Some only have WiFi data access", quote: false, detail: "At home, school, or work only" },
      { text: "Cash is king in this context", quote: false, detail: "Not everyone has credit cards" }
    ]
  },
  "Core User Needs": {
    color: "#45B7D1",
    bgColor: "#E0F4F9",
    items: [
      { text: "Get from point A to point B", quote: false, detail: "Primary navigation need" },
      { text: "Understand total trip costs", quote: false, detail: "Budget planning essential" },
      { text: "Know when buses will arrive", quote: false, detail: "Reduce waiting uncertainty" },
      { text: "Reduce travel anxiety", quote: false, detail: "Confidence in unfamiliar routes" },
      { text: "Work offline reliably", quote: false, detail: "Core functionality without data" },
      { text: "Trust the information provided", quote: false, detail: "Transparency about data quality" }
    ]
  },
  "Design Principles": {
    color: "#96CEB4",
    bgColor: "#E8F5EF",
    items: [
      { text: "Offline first, not optional", quote: false, detail: "Download maps by region, plan offline" },
      { text: "Meet users where they are", quote: false, detail: "Support both digital tickets and cash" },
      { text: "Progressive complexity", quote: false, detail: "Simple start, features reveal gradually" },
      { text: "Visual over verbal", quote: false, detail: "Icons, colors, maps alongside text" },
      { text: "Build trust through transparency", quote: false, detail: "Clear about real-time vs scheduled" }
    ]
  },
  "Key Features": {
    color: "#DDA0DD",
    bgColor: "#F5E6F5",
    items: [
      { text: "Intelligent route planning", quote: false, detail: "3+ options showing trade-offs" },
      { text: "Transparent cost calculation", quote: false, detail: "Total upfront with segment breakdown" },
      { text: "Real-time bus tracking", quote: false, detail: "When GPS available, with confidence indicators" },
      { text: "Step-by-step navigation mode", quote: false, detail: "Large clear instructions during journey" },
      { text: "Stop countdown + vibrate alert", quote: false, detail: "Never miss your stop" },
      { text: "Comprehensive schedule database", quote: false, detail: "Searchable by route, destination, stop" },
      { text: "Saved routes as shortcuts", quote: false, detail: "One-tap access to regular commutes" },
      { text: "Regional offline map downloads", quote: false, detail: "Auto-sync on WiFi only" }
    ]
  },
  "Testing Insights": {
    color: "#F7DC6F",
    bgColor: "#FDF9E5",
    items: [
      { text: "Initial design too complicated", quote: false, detail: "Separate tabs confused users" },
      { text: "Map unusable in bright sunlight", quote: false, detail: "Increased contrast, added high-visibility mode" },
      { text: "GPS tracking drained battery", quote: false, detail: "Optimized to use only when navigating" },
      { text: "Users didn't trust tracking at first", quote: false, detail: "Added confidence indicators" },
      { text: "Users only planned outbound trips", quote: false, detail: "Added 'Return Trip' button" },
      { text: "Ticket purchases peak Monday AM", quote: false, detail: "Created 'Plan Your Week' feature" },
      { text: "Dynamic home screen worked best", quote: false, detail: "Adapts to context: planning, traveling, complete" }
    ]
  },
    "Future Opportunities": {
    color: "#85C1E9",
    bgColor: "#E8F4FC",
    items: [
      { text: "Regional expansion", quote: false, detail: "Santa Ana, San Miguel, other cities" },
      { text: "Accessibility features", quote: false, detail: "Voice nav, wheelchair-accessible routes" },
      { text: "Social/community features", quote: false, detail: "Report issues, share route tips" },
      { text: "Multimodal integration", quote: false, detail: "Inter-city buses, taxis, bike lanes" },
      { text: "SMS fallback for non-smartphones", quote: false, detail: "Route planning via text messages" }
    ]
  }
};

interface StickyNoteProps {
  item: any;
  color: string;
  bgColor: string;
  onClick: () => void;
}

function StickyNote({ item, color, bgColor, onClick }: StickyNoteProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -2,
        rotate: 0.5,
        transition: { duration: 0.2 }
      }}
      style={{
        backgroundColor: bgColor,
        borderLeft: `4px solid ${color}`,
        padding: '12px 14px',
        margin: '8px',
        borderRadius: '8px',
        cursor: 'pointer',
        minHeight: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'all 0.2s ease'
      }}
    >
      {item.quote && (
        <span style={{
          position: 'absolute',
          top: '6px',
          right: '10px',
          fontSize: '20px',
          opacity: 0.2,
          color: color
        }}>"</span>
      )}
      <p style={{
        margin: 0,
        fontSize: '13px',
        fontWeight: 600,
        color: '#333',
        lineHeight: 1.4,
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {item.text}
      </p>
    </motion.div>
  );
}

interface PriorityDotsProps {
  count: number;
  color: string;
}

function PriorityDots({ count, color }: PriorityDotsProps) {
  return (
    <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
          }}
        />
      ))}
    </div>
  );
}

interface ClusterProps {
  title: string;
  data: typeof affinityData[string];
  priority: number;
  onNoteClick: (item: any, category: string, color: string) => void;
}

function Cluster({ title, data, priority, onNoteClick }: ClusterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: '#FAFAFA',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #E5E5E5',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}
    >
      <div style={{
        backgroundColor: data.color,
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: 700,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-0.3px'
        }}>
          {title}
        </h3>
        <span style={{
          backgroundColor: 'rgba(255,255,255,0.25)',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 600
        }}>
          {data.items.length}
        </span>
      </div>
      <PriorityDots count={priority} color={data.color} />
      <div style={{ marginTop: '16px' }}>
        {data.items.map((item, idx) => (
          <StickyNote
            key={idx}
            item={item}
            color={data.color}
            bgColor={data.bgColor}
            onClick={() => onNoteClick(item, title, data.color)}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface DetailModalProps {
  item: any | null;
  category: string | null;
  color: string | null;
  onClose: () => void;
}

function DetailModal({ item, category, color, onClose }: DetailModalProps) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '20px',
        backdropFilter: 'blur(4px)'
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '420px',
          width: '100%',
          position: 'relative',
          borderTop: `4px solid ${color || '#000'}`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      >
        {category && color && (
          <span style={{
            display: 'inline-block',
            backgroundColor: color,
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '16px'
          }}>
            {category}
          </span>
        )}
        <h3 style={{
          margin: '0 0 16px 0',
          fontSize: '20px',
          color: '#1a1a1a',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          lineHeight: 1.3
        }}>
          {item.quote && '"'}{item.text}{item.quote && '"'}
        </h3>
        <p style={{
          margin: 0,
          fontSize: '15px',
          color: '#666',
          lineHeight: 1.6,
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          {item.detail}
        </p>
        <button
          onClick={onClose}
          style={{
            marginTop: '24px',
            padding: '10px 24px',
            backgroundColor: color || '#000',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

export function AffinityMapping() {
  const [selectedNote, setSelectedNote] = useState<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const priorities: Record<string, number> = {
    "User Pain Points": 5,
    "Research Insights": 4,
    "Core User Needs": 5,
    "Design Principles": 4,
    "Key Features": 5,
    "Testing Insights": 3,
    "Future Opportunities": 2
  };

  const handleNoteClick = (item: any, category: string, color: string) => {
    setSelectedNote(item);
    setSelectedCategory(category);
    setSelectedColor(color);
  };

  const totalNotes = Object.values(affinityData).reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9F9F9',
      padding: '40px 24px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#FF6B6B',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            UX Research Synthesis
          </div>
          <h1 style={{
            fontSize: '42px',
            fontWeight: 800,
            color: '#1a1a1a',
            margin: '0 0 12px 0',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic'
          }}>
            Affinity Mapping
          </h1>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#4ECDC4',
            margin: '0 0 24px 0'
          }}>
            Ruta SV: Digital Wayfinding for El Salvador's Bus System
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 800,
                color: '#FF6B6B',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}>
                {Object.keys(affinityData).length}
              </div>
              <div style={{ fontSize: '14px', color: '#888', fontWeight: 600 }}>Clusters</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 800,
                color: '#4ECDC4',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}>
                {totalNotes}
              </div>
              <div style={{ fontSize: '14px', color: '#888', fontWeight: 600 }}>Insights</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 800,
                color: '#96CEB4',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}>
                42
              </div>
              <div style={{ fontSize: '14px', color: '#888', fontWeight: 600 }}>Interviews</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 800,
                color: '#DDA0DD',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}>
                16
              </div>
              <div style={{ fontSize: '14px', color: '#888', fontWeight: 600 }}>Weeks</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '14px', color: '#666', fontWeight: 600, marginRight: '8px' }}>Priority:</span>
          {[1, 2, 3, 4, 5].map(n => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {[...Array(n)].map((_, i) => (
                <div key={i} style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#888'
                }} />
              ))}
              <span style={{ fontSize: '11px', color: '#999', marginLeft: '4px', marginRight: '16px' }}>
                {n === 1 ? 'Low' : n === 5 ? 'High' : ''}
              </span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {Object.entries(affinityData).map(([title, data], index) => (
            <Cluster
              key={title}
              title={title}
              data={data}
              priority={priorities[title]}
              onNoteClick={handleNoteClick}
            />
          ))}
        </div>
      </div>

      <DetailModal
        item={selectedNote}
        category={selectedCategory}
        color={selectedColor}
        onClose={() => {
          setSelectedNote(null);
          setSelectedCategory(null);
          setSelectedColor(null);
        }}
      />
    </div>
  );
}

