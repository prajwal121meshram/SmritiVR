import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

export const ThenVsNowSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // High-res before (historical framed portal perspective) and after (pristine modern digital twin perspective)
  const beforeImage = "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85";
  const afterImage = "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85";

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  return (
    <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] overflow-hidden">
      
      {/* Subtle Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5C158 1px, transparent 1px),
            linear-gradient(to bottom, #E5C158 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(229,193,88,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Top Storytelling Gold Divider */}
        <div className="flex items-center justify-center gap-3 mb-6 select-none">
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#E5C158]/50 to-[#E5C158]" />
          <span className="text-[#E5C158] text-xs">✦</span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#E5C158]/40" />
          <div className="w-4 h-4 rounded-full border border-[#E5C158]/50 flex items-center justify-center bg-[#07090E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
          </div>
          <div className="h-[1px] w-12 sm:w-20 bg-[#E5C158]/40" />
          <span className="text-[#E5C158] text-xs">✦</span>
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#E5C158]/50 to-[#E5C158]" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E121B] border border-[#E5C158]/40 text-[#E5C158] text-[11px] font-serif font-bold tracking-[0.2em] [word-spacing:0.15em] uppercase shadow-[0_0_15px_rgba(229,193,88,0.12)] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>HERITAGE &bull; THEN &amp; NOW</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-wide [word-spacing:0.12em] text-white leading-tight">
            Taj Mahal &mdash;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBF8EE] via-[#E5C158] to-[#D4AF37]">
              Before &amp; After
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-[#CBD5E1] font-sans leading-relaxed tracking-normal [word-spacing:0.06em]">
            See the monument across time through a simple interactive comparison.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onClick={handleClick}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="relative h-[340px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden select-none border border-[#E5C158]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-ew-resize group bg-[#0B0F17]"
        >
          {/* RIGHT / AFTER (Modern Taj Mahal) - Full Background Layer */}
          <img
            src={afterImage}
            alt="Modern Taj Mahal"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Top-Right AFTER Badge */}
          <div className="absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full bg-[#07090E]/80 border border-[#E5C158]/40 text-[#E5C158] text-xs font-serif font-bold tracking-[0.16em] uppercase backdrop-blur-md shadow-md">
            AFTER
          </div>

          {/* LEFT / BEFORE (Historic Taj Mahal) - Clipped Overlay */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeImage}
              alt="Historic Taj Mahal"
              className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
              style={{ width: containerRef.current?.offsetWidth || '100%' }}
            />
            {/* Subtle vintage warm tone overlay on Before image */}
            <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay pointer-events-none" />
            
            {/* Top-Left BEFORE Badge */}
            <div className="absolute top-4 left-4 z-10 px-4 py-1.5 rounded-full bg-[#07090E]/80 border border-[#E5C158]/40 text-[#E5C158] text-xs font-serif font-bold tracking-[0.16em] uppercase backdrop-blur-md shadow-md">
              BEFORE
            </div>
          </div>

          {/* Vertical Slider Divider Line */}
          <div
            className="absolute top-0 bottom-0 z-20 w-[2px] bg-gradient-to-b from-[#E5C158] via-white to-[#E5C158] shadow-[0_0_12px_rgba(229,193,88,0.8)] cursor-ew-resize pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Circular Grab Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0E121B] border-2 border-[#E5C158] text-[#E5C158] flex items-center justify-center shadow-[0_0_16px_rgba(229,193,88,0.5)] group-hover:scale-110 transition-transform">
              <ArrowLeftRight className="w-4 h-4 text-[#E5C158] stroke-[2.2]" />
            </div>
          </div>

        </div>

        {/* Bottom Storytelling Gold Divider */}
        <div className="flex items-center justify-center gap-3 mt-10 select-none">
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#E5C158]/50 to-[#E5C158]" />
          <span className="text-[#E5C158] text-xs">✦</span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#E5C158]/40" />
          <div className="w-4 h-4 rounded-full border border-[#E5C158]/50 flex items-center justify-center bg-[#07090E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
          </div>
          <div className="h-[1px] w-12 sm:w-20 bg-[#E5C158]/40" />
          <span className="text-[#E5C158] text-xs">✦</span>
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#E5C158]/50 to-[#E5C158]" />
        </div>

      </div>

    </section>
  );
};
