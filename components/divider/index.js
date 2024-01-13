export default function Divider() {
    return (
        <div style={{ margin: '0 auto', width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 375 16" fill="none">
                <g filter="url(#filter0_d_62_179)">
                    <path d="M0.5 1C130.5 1 163 1 163 1L157 7H373" stroke="#CDB97A" strokeWidth="1" />
                </g>
                <defs>
                    <filter id="filter0_d_62_179" x="-3.5" y="0.850006" width="100%" height="80%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_179" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_179" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}