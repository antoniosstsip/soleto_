import svgPaths from "./svg-0uz2at1ulb";

function G2() {
  return (
    <div className="absolute contents inset-0" data-name="g200">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 731.407 268.021">
        <g id="g202">
          <path d={svgPaths.p34c92080} fill="url(#paint0_linear_156_144)" id="path226" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_156_144" x1="-0.0005925" x2="731.407" y1="134.011" y2="134.011">
            <stop stopColor="#BC7725" />
            <stop offset="0.060606" stopColor="#A86426" />
            <stop offset="0.139394" stopColor="#B78137" />
            <stop offset="0.278788" stopColor="#C58421" />
            <stop offset="0.442424" stopColor="#F8DA57" />
            <stop offset="0.563636" stopColor="#F2D34E" />
            <stop offset="0.618182" stopColor="#F8DA57" />
            <stop offset="0.763636" stopColor="#D7941D" />
            <stop offset="0.878788" stopColor="#D8AB42" />
            <stop offset="1" stopColor="#99532B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function G1() {
  return (
    <div className="absolute contents inset-0" data-name="g194">
      <G2 />
    </div>
  );
}

export default function G() {
  return (
    <div className="relative size-full" data-name="g192">
      <G1 />
    </div>
  );
}
