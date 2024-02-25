import Router from "next/router"
import LongMenu from "../menu"
import { Container } from "./style"
export default function Header() {
    const options = [
        'Inicio',
        'Serviços',
        'Sobre mim',
        'Método Nathan',
        'Exames',
        'Perguntas Frequentes',
        'Depoimentos',
    ];

    function handleClick(selectedItem) {
        let anchorLink = selectedItem.split(" ")[0]
        Router.push(`/#${anchorLink}`)
    }
    return (

        <Container>

            <div id="logo" style={{ display: 'flex', alignItems: 'center', gap: '20px' }} onClick={() => Router.push("/#")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="51" viewBox="0 0 37 51" fill="none">
                    <mask id="mask0_62_181" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="16" y="7" width="21" height="37">
                        <path d="M16.4182 7.03107H36.505V43.5079H16.4182V7.03107Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_62_181)">
                        <path d="M36.4911 45.967C34.5898 44.4296 32.6885 42.8921 30.7825 41.36C30.3711 41.0292 30.2324 40.6845 30.2355 40.1356C30.2511 35.0729 30.2464 30.0084 30.2402 24.944C30.2402 24.6836 30.3461 24.3353 30.1217 24.177C29.8599 23.9923 29.6963 24.3459 29.5155 24.4901C26.3768 27.0127 23.2443 29.5458 20.1103 32.0754C19.0474 32.9338 17.9846 33.7905 16.822 34.7281C16.8048 34.3165 16.7861 34.0491 16.7861 33.7817C16.7846 31.4439 16.8048 29.1025 16.7737 26.7664C16.7659 26.1929 16.9498 25.871 17.3456 25.5544C19.9326 23.4892 22.5041 21.3976 25.0833 19.3148C28.85 16.2733 32.6183 13.2318 36.4256 10.1587C36.4537 10.2009 36.4739 10.2414 36.4911 10.2818V45.967Z" fill="#CDB97A" />
                    </g>
                    <mask id="mask1_62_181" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="9" y="0" width="18" height="51">
                        <path d="M9.63574 0H26.7911V51H9.63574V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_62_181)">
                        <path d="M26.7304 31.9759C26.7382 34.261 26.7164 36.5461 26.746 38.8294C26.7538 39.4468 26.587 39.8286 26.1351 40.1945C20.9564 44.3776 15.7932 48.5854 10.6239 52.7844C10.4338 52.9392 10.2468 53.2628 10.0114 53.1344C9.77143 53.0025 9.89922 52.6384 9.89922 52.3815C9.89299 44.0416 9.89455 35.7017 9.89455 27.3635C9.89455 19.05 9.90234 10.7365 9.88208 2.42292C9.88208 2.36311 9.88208 2.31034 9.88364 2.25757H16.2016C16.2047 2.36839 16.2047 2.49505 16.2047 2.64105C16.2031 14.6417 16.2016 26.6441 16.2031 38.6464C16.2031 38.8593 16.1127 39.1407 16.2842 39.2674C16.5288 39.4468 16.666 39.1267 16.8312 38.9947C19.8888 36.5267 22.9418 34.0534 26.001 31.5907C26.1849 31.4411 26.3657 31.1263 26.626 31.2899C26.8488 31.4253 26.7288 31.7419 26.7304 31.9759Z" fill="#CDB97A" />
                    </g>
                    <mask id="mask2_62_181" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="46">
                        <path d="M0 0H9.63584V45.3093H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask2_62_181)">
                        <path d="M0.0078125 5.75996C0.0078125 5.7195 0.0078126 5.68256 0.00937094 5.64386H6.36313C6.36469 5.67552 6.36469 5.70895 6.36469 5.74413C6.34132 13.588 6.34599 21.4318 6.34443 29.2739C6.34287 31.8581 6.34443 34.4439 6.34443 37.2268C7.24209 36.5056 7.98859 35.9005 8.74287 35.3094C8.86911 35.2109 8.97976 34.9682 9.17144 35.0948C9.35066 35.2109 9.26339 35.4484 9.26495 35.6278C9.2743 38.1064 9.27118 40.5815 9.28365 43.0583C9.28521 43.4136 9.21976 43.681 8.94391 43.9027C6.12157 46.1684 3.30391 48.4429 0.494046 50.7262C0.0826176 51.0587 0.00937094 50.8863 0.0156047 50.4254C0.0265135 49.6268 0.02028 48.8282 0.02028 48.0313C0.0218384 33.9408 0.024955 19.8504 0.0078125 5.75996Z" fill="#CDB97A" />
                    </g>
                </svg>


                <h3>Nathan Lorena</h3>
            </div>
            <div id="mobileMenu">
                <LongMenu />
            </div>

            <nav id="menu">
                {options.map((menu) => (
                    <li onClick={() => handleClick(menu)} key={menu}>{menu}</li>
                ))}
            </nav>


        </Container>



    )
}