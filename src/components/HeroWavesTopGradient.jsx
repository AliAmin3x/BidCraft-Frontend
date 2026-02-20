const HeroWavesTopGradient = () => {
    return (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none h-full">
            <svg
                viewBox="0 0 1440 260"
                className="w-full h-full min-h-[120px] sm:min-h-[160px] md:min-h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="waveDark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0a4290" stopOpacity="1"/>
                        <stop offset="100%" stopColor="#0a4290" stopOpacity="1"/>
                    </linearGradient>
                    <linearGradient id="waveBlue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0a4290" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0a4290" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="waveLight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0a4290" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#0a4290" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="waveExtra" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0a4290" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#0a4290" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#waveDark)"
                    d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,149.3C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224V0H0Z"
                />
                <path
                    fill="url(#waveBlue)"
                    d="M0,160L60,170.7C120,181,240,203,360,213.3C480,224,600,224,720,208C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192V0H0Z"
                />
                <path
                    fill="url(#waveLight)"
                    d="M0,192L60,197.3C120,203,240,213,360,224C480,235,600,245,720,229.3C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224V0H0Z"
                />
                <path
                    fill="url(#waveExtra)"
                    d="M0,220L60,213.3C120,207,240,197,360,186.7C480,176,600,165,720,170.7C840,176,960,192,1080,197.3C1200,203,1320,213,1380,218.7L1440,224V0H0Z"
                />
            </svg>
        </div>
    );
};

export default HeroWavesTopGradient;