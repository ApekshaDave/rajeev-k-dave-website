import React from 'react';

export const TechGridBackground: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => {
  return (
    <div className={`relative min-h-screen bg-bg-primary overflow-hidden ${className}`}>
      {/* Subtle Background Grid Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Atmospheric Ambient Purple Glow (Top Right) */}
      <div 
        className="pointer-events-none absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
        style={{ background: 'radial-gradient(circle, #A879FF 0%, transparent 70%)' }}
      />

      {/* Atmospheric Ambient Orange Glow (Bottom Left) */}
      <div 
        className="pointer-events-none absolute top-[40%] -left-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15"
        style={{ background: 'radial-gradient(circle, #FF9B38 0%, transparent 70%)' }}
      />

      {/* Atmospheric Ambient Purple Glow (Deep Bottom) */}
      <div 
        className="pointer-events-none absolute bottom-0 right-[20%] w-[550px] h-[400px] rounded-full blur-[160px] opacity-20"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

