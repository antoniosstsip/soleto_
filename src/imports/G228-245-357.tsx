import svgPaths from "./svg-69ias3ua23";

function G2() {
  return (
    <div className="absolute contents inset-0" data-name="g236">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.536 31.7228">
        <g id="g238">
          <path d={svgPaths.p51da00} fill="url(#paint0_linear_245_365)" id="path248" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_245_365" x1="43.1048" x2="142.44" y1="-33.8036" y2="65.5321">
            <stop stopColor="#F8DA57" />
            <stop offset="0.260981" stopColor="#BC7725" />
            <stop offset="1" stopColor="#F8DA57" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function G1() {
  return (
    <div className="absolute contents inset-0" data-name="g230">
      <G2 />
    </div>
  );
}

export default function G() {
  return (
    <div className="relative size-full" data-name="g228">
      <G1 />
    </div>
  );
}