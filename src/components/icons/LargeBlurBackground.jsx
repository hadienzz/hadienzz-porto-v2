const LargeBlurBackground = ({ className }) => {
    return (
        <svg className={className}  width="836" fill="none" viewBox="0 0 836 979" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_114_119)">
                <path d="M336.086 526.371C288.843 405.796 273.931 137.657 388.357 92.8496C502.783 48.0419 703.216 243.533 750.459 364.108C797.702 484.682 743.239 618.751 628.813 663.559C514.387 708.366 383.329 646.945 336.086 526.371Z" fill="#831ED2" />
            </g>
            <defs>
                <filter height="1191.91" id="filter0_f_114_119" width="1066.72" x="0.766479" y="-213.699" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood result="BackgroundImageFix" floodOpacity="0" />
                    <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
                    <feGaussianBlur result="effect1_foregroundBlur_114_119" stdDeviation="150" />
                </filter>
            </defs>
        </svg>
    )
}

export default LargeBlurBackground