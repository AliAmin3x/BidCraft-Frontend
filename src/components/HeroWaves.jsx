const HeroWaves = () => {
  return (
    <div className="bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full min-h-[150px] sm:min-h-[200px] md:min-h-[260px]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wave1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a4290" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0a4290" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="wave2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a4290" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0a4290" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="wave3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a4290" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0a4290" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="wave4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a4290" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0a4290" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="wave5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a4290" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0a4290" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Darkest Back Layer */}
        <path
          fill="url(#wave1)"
          d="M0,160L80,170C160,180,320,200,480,192C640,184,800,148,960,138C1120,128,1280,144,1360,152L1440,160V320H0Z"
        />

        <path
          fill="url(#wave2)"
          d="M0,180L60,176C120,172,240,164,360,170C480,176,600,196,720,200C840,204,960,192,1080,178C1200,164,1320,148,1380,140L1440,132V320H0Z"
        />

        <path
          fill="url(#wave3)"
          d="M0,210L70,220C140,230,280,250,420,242C560,234,700,198,840,188C980,178,1120,194,1260,206C1400,218,1440,224,1440,224V320H0Z"
        />

        <path
          fill="url(#wave4)"
          d="M0,240L60,250C120,260,240,280,360,270C480,260,600,220,720,210C840,200,960,220,1080,230C1200,240,1320,240,1380,236L1440,232V320H0Z"
        />

        {/* Lightest Front Layer */}
        <path
          fill="url(#wave5)"
          d="M0,270L80,280C160,290,320,300,480,292C640,284,800,248,960,238C1120,228,1280,244,1360,252L1440,260V320H0Z"
        />
      </svg>
    </div>
  );
};

export default HeroWaves;