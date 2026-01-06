import SoletoText from "../imports/G192-40-1786";
import DotsComponent from "../imports/G228-40-1790";
import TaglineText from "../imports/G250-84-2465";

interface SoletoLogoProps {
  className?: string;
  showTagline?: boolean;
  showDots?: boolean;
  style?: React.CSSProperties;
}

export function SoletoLogo({ className = "", showTagline = true, showDots = true, style }: SoletoLogoProps) {
  return (
    <div className={className} style={style}>
      <div className="flex flex-col items-center gap-2">
        {/* soleto text - viewBox 732x269 - mirrored */}
        <div style={{ width: '100%', aspectRatio: '732/269', transform: 'scaleY(-1)' }}>
          <SoletoText />
        </div>
        
        {showTagline && (
          <div className="flex items-start justify-between w-full">
            {/* dots - viewBox 186x32 - aligned with S on left */}
            {showDots && (
              <div style={{ width: '18%', aspectRatio: '186/32', marginTop: '2px' }}>
                <DotsComponent />
              </div>
            )}
            
            {/* tagline - viewBox 463x158 - aligned with O on right */}
            <div style={{ width: '48%', aspectRatio: '463/158', '--fill-0': '#FFFFFF', transform: 'scaleY(-1)' } as React.CSSProperties}>
              <TaglineText />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}