import React from 'react';

interface VisualThumbnailProps {
  type: 'agent-cubes' | 'wave-purple' | 'layers-diagram' | 'network-mesh' | 'security-shield' | 'code-terminal';
  className?: string;
}

export const VisualThumbnail: React.FC<VisualThumbnailProps> = ({ type, className = "" }) => {
  return (
    <div className={`relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-bg-card border border-border flex items-center justify-center ${className}`}>
      {/* Background subtle mesh */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {type === 'agent-cubes' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/10 via-transparent to-accent-purple/10" />
          {/* Isometric Glowing Cubes */}
          <svg viewBox="0 0 200 120" className="w-48 h-32 text-accent-orange drop-shadow-[0_0_15px_rgba(255,155,56,0.4)]">
            <defs>
              <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFAE5C" />
                <stop offset="100%" stopColor="#FF831E" />
              </linearGradient>
              <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D96E14" />
                <stop offset="100%" stopColor="#964305" />
              </linearGradient>
              <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF9B38" />
                <stop offset="100%" stopColor="#C45E0B" />
              </linearGradient>
            </defs>
            {/* Base layer cubes */}
            <g transform="translate(60, 45)">
              <polygon points="20,0 40,10 20,20 0,10" fill="url(#cubeTop)" />
              <polygon points="0,10 20,20 20,40 0,30" fill="url(#cubeLeft)" />
              <polygon points="20,20 40,10 40,30 20,40" fill="url(#cubeRight)" />
            </g>
            <g transform="translate(90, 45)">
              <polygon points="20,0 40,10 20,20 0,10" fill="url(#cubeTop)" />
              <polygon points="0,10 20,20 20,40 0,30" fill="url(#cubeLeft)" />
              <polygon points="20,20 40,10 40,30 20,40" fill="url(#cubeRight)" />
            </g>
            <g transform="translate(75, 20)">
              <polygon points="20,0 40,10 20,20 0,10" fill="url(#cubeTop)" />
              <polygon points="0,10 20,20 20,40 0,30" fill="url(#cubeLeft)" />
              <polygon points="20,20 40,10 40,30 20,40" fill="url(#cubeRight)" />
            </g>
            <g transform="translate(105, 20)">
              <polygon points="20,0 40,10 20,20 0,10" fill="url(#cubeTop)" />
              <polygon points="0,10 20,20 20,40 0,30" fill="url(#cubeLeft)" />
              <polygon points="20,20 40,10 40,30 20,40" fill="url(#cubeRight)" />
            </g>
            {/* Top Elevated Cube (Apex with Purple Glow) */}
            <g transform="translate(90, -5)" className="filter drop-shadow-[0_0_8px_rgba(168,121,255,0.7)]">
              <polygon points="20,0 40,10 20,20 0,10" fill="#E0CFFF" />
              <polygon points="0,10 20,20 20,40 0,30" fill="#A879FF" />
              <polygon points="20,20 40,10 40,30 20,40" fill="#804EEB" />
            </g>
          </svg>
        </div>
      )}

      {type === 'wave-purple' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-purple/15 to-transparent" />
          {/* Mathematical Sine Waves */}
          <svg viewBox="0 0 240 120" className="w-56 h-32">
            <path
              d="M0,60 C40,20 80,100 120,60 C160,20 200,100 240,60"
              fill="none"
              stroke="#A879FF"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_10px_rgba(168,121,255,0.6)]"
            />
            <path
              d="M0,60 C50,90 90,30 140,70 C190,110 210,40 240,60"
              fill="none"
              stroke="#A879FF"
              strokeWidth="1.2"
              strokeDasharray="4 2"
              opacity="0.6"
            />
            <path
              d="M0,60 C30,40 70,80 110,60 C150,40 190,80 240,60"
              fill="none"
              stroke="#C4A8FF"
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M0,60 C60,10 100,110 160,50 C200,10 220,90 240,60"
              fill="none"
              stroke="#FF9B38"
              strokeWidth="1.2"
              opacity="0.7"
              className="drop-shadow-[0_0_6px_rgba(255,155,56,0.4)]"
            />
          </svg>
        </div>
      )}

      {type === 'layers-diagram' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 to-transparent" />
          {/* Stacked Architecture Layers */}
          <div className="flex flex-col items-center gap-2 transform -rotate-6">
            <div className="w-40 h-7 rounded bg-gradient-to-r from-accent-purple/60 to-accent-purple/20 border border-accent-purple/40 shadow-glow-subtle flex items-center justify-between px-3">
              <span className="text-[10px] font-mono text-text-primary">Agent Graph Layer</span>
              <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
            </div>
            <div className="w-36 h-7 rounded bg-gradient-to-r from-accent-purple/40 to-bg-card border border-border flex items-center justify-between px-3">
              <span className="text-[10px] font-mono text-text-secondary">Retrieval & RRF</span>
              <span className="text-[9px] font-mono text-text-muted">k=60</span>
            </div>
            <div className="w-32 h-7 rounded bg-gradient-to-r from-bg-card to-accent-orange/20 border border-border flex items-center justify-between px-3">
              <span className="text-[10px] font-mono text-accent-orange">Vector & SQL Store</span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
            </div>
          </div>
        </div>
      )}

      {type === 'network-mesh' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 200 120" className="w-48 h-28 opacity-80">
            <line x1="30" y1="60" x2="80" y2="30" stroke="#282B38" strokeWidth="1.5" />
            <line x1="30" y1="60" x2="80" y2="90" stroke="#282B38" strokeWidth="1.5" />
            <line x1="80" y1="30" x2="140" y2="40" stroke="#A879FF" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="80" y1="90" x2="140" y2="80" stroke="#282B38" strokeWidth="1.5" />
            <line x1="140" y1="40" x2="180" y2="60" stroke="#FF9B38" strokeWidth="1.5" />
            <line x1="140" y1="80" x2="180" y2="60" stroke="#282B38" strokeWidth="1.5" />
            
            <circle cx="30" cy="60" r="6" fill="#A879FF" />
            <circle cx="80" cy="30" r="5" fill="#393E52" />
            <circle cx="80" cy="90" r="5" fill="#393E52" />
            <circle cx="140" cy="40" r="7" fill="#A879FF" className="drop-shadow-[0_0_8px_rgba(168,121,255,0.7)]" />
            <circle cx="140" cy="80" r="5" fill="#393E52" />
            <circle cx="180" cy="60" r="8" fill="#FF9B38" className="drop-shadow-[0_0_10px_rgba(255,155,56,0.8)]" />
          </svg>
        </div>
      )}

      {type === 'security-shield' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl border border-accent-purple/30 transform rotate-45 bg-accent-purple/5" />
            <div className="absolute inset-2 rounded-xl border border-accent-orange/40 transform rotate-12 bg-accent-orange/5" />
            <svg className="w-10 h-10 text-accent-purple drop-shadow-[0_0_10px_rgba(168,121,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
        </div>
      )}

      {type === 'code-terminal' && (
        <div className="w-5/6 h-28 rounded-lg bg-bg-primary border border-border p-3 font-mono text-[10px] text-text-secondary flex flex-col justify-between">
          <div className="flex items-center gap-1.5 pb-2 border-b border-border/60">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <span className="text-[9px] text-text-muted ml-2">spec_contract.yaml</span>
          </div>
          <div className="text-accent-purple">contracts:</div>
          <div className="pl-2 text-text-primary">intent: "route_support"</div>
          <div className="pl-4 text-accent-orange">confidence_gate: &gt;= 0.94</div>
        </div>
      )}
    </div>
  );
};

