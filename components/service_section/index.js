
import Service_card from "../service_card"
import { Container } from "./style"
export default function Service_section() {

    return (
        <Container id="Serviços">I
            {/* PONTO "." É O SEPARADOR */}
            <h1>A consultoria é para você que deseja:</h1>
            <Service_card title={"HIPERTROFIA"} key={"HIPERTROFRIA"}
                text={"Texto genérico sobre hipertrofia.Outro texto genérico sobre hipertrofia um pouco maior dessa vez.Texto diferente sobre hipertrofia"}
                icon={<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_145_35)">
                        <path d="M48.125 32.7297L48.0031 32.1766C46.9914 27.3977 45.3301 22.7798 43.0656 18.4516C40.8482 14.2258 38.0734 10.3169 34.8156 6.82974C31.5789 4.3041 27.9733 2.29101 24.125 0.860991L23.7781 0.731304C21.5406 -0.104634 20.1843 -0.612446 17.9328 1.40474C16.7312 2.47818 12.9328 6.2938 14.4109 10.3922C15.1 12.3001 17.4265 14.7672 19.6015 14.4547C20.0855 14.3749 20.5411 14.1727 20.925 13.8672C21.2138 13.6232 21.5715 13.4752 21.9484 13.4438C22.3158 13.4199 22.6841 13.4732 23.0296 13.6001C23.5944 13.7812 24.1834 13.8755 24.7765 13.8797C25.2457 13.8882 25.7117 13.7999 26.1453 13.6204C26.3115 13.5403 26.4956 13.5048 26.6796 13.5172C27.5467 13.6469 28.3288 14.11 28.8593 14.8079C29.1809 15.2611 29.3999 15.7789 29.5011 16.3253C29.6022 16.8717 29.5832 17.4336 29.4453 17.9719C29.429 18.0358 29.4206 18.1014 29.4203 18.1672V26.5626C27.6963 25.9768 25.8464 25.866 24.0648 26.2419C22.2833 26.6177 20.6357 27.4663 19.2953 28.6985C16.4817 27.1651 13.1805 26.7912 10.0953 27.6563C8.5386 28.0789 7.08612 28.8188 5.82906 29.8296C4.572 30.8403 3.53752 32.1001 2.79058 33.5297C1.9243 35.314 1.51663 37.2862 1.60448 39.2677C1.69233 41.2492 2.27292 43.1776 3.29371 44.8782C4.29263 46.6518 5.74965 48.1244 7.51246 49.1422C8.83989 49.7731 10.3021 50.0677 11.7703 50.0001C12.5953 50.0001 13.4406 49.9438 14.2703 49.8672C15.0968 49.7645 15.9132 49.5925 16.7109 49.3532C17.8077 48.9446 18.9852 48.7996 20.1484 48.9297C22.3126 49.4399 24.5575 49.5074 26.7484 49.1282C31.8225 48.0628 36.6264 45.9751 40.8671 42.9922C43.333 41.3836 45.5547 39.4287 47.464 37.1876C47.9468 36.5634 48.2611 35.8256 48.3769 35.045C48.4926 34.2644 48.4059 33.4672 48.125 32.7297ZM46.2265 36.236C44.4109 38.3469 42.3038 40.1883 39.9687 41.7047C35.9109 44.5616 31.3139 46.5621 26.4578 47.5844C24.4834 47.9249 22.4606 47.8628 20.5109 47.4016C19.0956 47.1952 17.6513 47.3439 16.3078 47.8344C15.5971 48.051 14.8696 48.2078 14.1328 48.3032C12.1588 48.6588 10.1253 48.4687 8.25152 47.7532C6.74164 46.8742 5.49478 45.6069 4.64058 44.0829C3.75262 42.6093 3.24565 40.9377 3.16545 39.2191C3.08525 37.5005 3.43434 35.789 4.18121 34.2391C4.82963 33.001 5.72707 31.9104 6.81715 31.0357C7.90723 30.161 9.1664 29.5211 10.5156 29.1563C13.095 28.4284 15.8546 28.7077 18.2359 29.9376C17.8842 30.4168 17.5886 30.9348 17.3546 31.4813C16.8061 32.8083 16.6263 34.2589 16.8343 35.6797C16.861 35.8656 16.9537 36.0356 17.0954 36.1587C17.2372 36.2818 17.4185 36.3497 17.6062 36.3501C17.6437 36.3523 17.6812 36.3523 17.7187 36.3501C17.9236 36.3203 18.1082 36.2104 18.2322 36.0446C18.3561 35.8788 18.4091 35.6706 18.3796 35.4657C18.2125 34.3243 18.356 33.1589 18.7953 32.0922C19.1223 31.3077 19.605 30.5976 20.214 30.0047L20.225 29.9891C21.4848 28.7815 23.0825 27.9861 24.8054 27.7086C26.5284 27.4312 28.295 27.6849 29.8703 28.436C29.9893 28.4927 30.1208 28.5183 30.2524 28.5105C30.384 28.5028 30.5115 28.4618 30.623 28.3914C30.7345 28.3211 30.8264 28.2237 30.8901 28.1083C30.9539 27.9928 30.9874 27.8631 30.9875 27.7313V18.2579C31.1641 17.5028 31.1765 16.7186 31.0236 15.9584C30.8708 15.1982 30.5563 14.4797 30.1015 13.8516C29.7038 13.3278 29.2045 12.8896 28.6334 12.5634C28.0624 12.2372 27.4313 12.0296 26.7781 11.9532C26.3704 11.9243 25.9617 11.9951 25.5875 12.1594C25.3369 12.2857 25.0561 12.3398 24.7765 12.3157C24.3298 12.3117 23.8864 12.2379 23.4625 12.0969C22.9322 11.9161 22.3717 11.8407 21.8125 11.8751C21.161 11.9287 20.5396 12.172 20.025 12.5751C19.8403 12.7339 19.6173 12.8416 19.3781 12.8876C18.1656 13.0438 16.4093 11.3251 15.8781 9.84693C14.9671 7.32349 16.8796 4.42505 18.9718 2.5563C20.5265 1.16724 21.0984 1.38443 23.2296 2.1813L23.5796 2.31255C25.5609 3.05381 27.4782 3.95577 29.3125 5.00943C30.8609 5.89855 32.3481 6.89035 33.764 7.97818C36.8874 11.3453 39.5503 15.1121 41.6828 19.1797C43.8808 23.3802 45.4932 27.862 46.475 32.5001L46.6031 33.0751C46.914 34.4532 47.0703 35.1422 46.2265 36.236ZM34.4046 38.6032C34.2227 38.5042 34.0089 38.4815 33.8103 38.5401C33.6116 38.5987 33.4444 38.7338 33.3453 38.9157C32.4176 40.628 30.9575 41.9915 29.1859 42.8001C27.9944 43.3002 26.7112 43.5447 25.4193 43.5178C24.1274 43.4909 22.8555 43.1931 21.6859 42.6438C21.5924 42.5884 21.4883 42.5532 21.3804 42.5403C21.2725 42.5274 21.1631 42.5372 21.0592 42.569C20.9553 42.6009 20.8591 42.654 20.7769 42.7251C20.6947 42.7962 20.6282 42.8836 20.5817 42.9818C20.5353 43.0801 20.5098 43.1869 20.5069 43.2955C20.5041 43.4042 20.5239 43.5122 20.5652 43.6128C20.6064 43.7133 20.6682 43.8041 20.7466 43.8794C20.825 43.9547 20.9182 44.0128 21.0203 44.0501C22.4918 44.7229 24.0897 45.075 25.7078 45.0829C27.1224 45.0867 28.5218 44.7911 29.814 44.2157C31.8985 43.266 33.6169 41.6633 34.7093 39.6501C34.805 39.4703 34.8267 39.2602 34.7698 39.0647C34.7129 38.8691 34.5819 38.7035 34.4046 38.6032Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_145_35">
                            <rect width="50" height="50" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                } />



            <Service_card title={"EMAGRECIMENTO"} key={"EMAGRECIMENTO"}
                text="Texto genérico sobre emagrecimento.Outro texto genérico sobre emagrecimento um pouco maior dessa vez "
                icon={<svg width="74" height="70" viewBox="0 0 74 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1108 10.9375C32.4383 10.9375 37.036 19.6875 37.036 19.6875C37.036 19.6875 41.6337 10.9375 50.9612 10.9375C58.5416 10.9375 64.5445 16.9723 64.6221 24.1732C64.7801 39.1207 52.1609 49.7506 38.3291 58.6838C37.9478 58.9307 37.4972 59.0627 37.036 59.0627C36.5748 59.0627 36.1242 58.9307 35.7429 58.6838C21.9125 49.7506 9.2933 39.1207 9.44991 24.1732C9.5275 16.9723 15.5303 10.9375 23.1108 10.9375Z" stroke="#F8F8F8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M66.9209 35H50.829L43.9325 21.875L37.036 43.75L30.1395 30.625L25.5418 39.375H7.15106" stroke="#DAA520" strokeOpacity="0.75" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                } />





            <Service_card title={"PERFORMANCE COGNITIVA"} key={"PERFORMANCE COGNITIVA"}
                text="Texto genérico sobre performance Cognitiva.Outro texto genérico sobre performance Cognitiva um pouco maior dessa vez "
                icon={<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_145_73)">
                        <path d="M17.961 11.3844C18.1059 11.5296 18.2781 11.6448 18.4677 11.7235C18.6572 11.8021 18.8604 11.8425 19.0656 11.8425C19.2708 11.8425 19.474 11.8021 19.6636 11.7235C19.8532 11.6448 20.0253 11.5296 20.1703 11.3844C20.5987 10.9546 21.108 10.6139 21.6688 10.3819C22.2295 10.15 22.8307 10.0313 23.4375 10.0328C24.7188 10.0328 25.8641 10.5469 26.7047 11.3844C26.8498 11.5295 27.022 11.6445 27.2115 11.7231C27.4011 11.8016 27.6042 11.842 27.8094 11.842C28.2237 11.842 28.6211 11.6774 28.9141 11.3844C29.0591 11.2393 29.1742 11.0671 29.2527 10.8776C29.3312 10.688 29.3717 10.4849 29.3717 10.2797C29.3717 9.86538 29.2071 9.46801 28.9141 9.17503C28.1953 8.45532 27.3416 7.88457 26.4018 7.49552C25.462 7.10646 24.4547 6.90675 23.4375 6.90784C22.4204 6.90675 21.413 7.10646 20.4732 7.49552C19.5334 7.88457 18.6797 8.45532 17.961 9.17503C17.668 9.46804 17.5035 9.8654 17.5035 10.2797C17.5035 10.694 17.668 11.0914 17.961 11.3844ZM36.1031 9.89222C37.483 10.6992 38.7313 11.7125 39.8047 12.8969L39.8063 12.8985C40.8825 14.0881 41.7694 15.4361 42.436 16.8953C43.1197 18.393 43.5602 19.9902 43.7406 21.6266C43.7632 21.8305 43.7454 22.037 43.6882 22.234C43.631 22.4311 43.5355 22.615 43.4073 22.7752C43.279 22.9353 43.1205 23.0687 42.9407 23.1676C42.7609 23.2665 42.5634 23.329 42.3594 23.3516C42.1554 23.3742 41.949 23.3563 41.752 23.2991C41.5549 23.2419 41.371 23.1465 41.2108 23.0182C41.0506 22.89 40.9173 22.7314 40.8184 22.5516C40.7195 22.3718 40.657 22.1743 40.6344 21.9703C40.4897 20.6636 40.1379 19.3883 39.5922 18.1922C38.5211 15.8477 36.7519 13.8914 34.5266 12.5907C34.3494 12.4871 34.1943 12.3497 34.0703 12.1863C33.9462 12.0228 33.8555 11.8366 33.8034 11.6381C33.7513 11.4396 33.7388 11.2328 33.7667 11.0295C33.7945 10.8262 33.8621 10.6303 33.9656 10.4532C34.0692 10.276 34.2066 10.1209 34.37 9.99683C34.5334 9.87275 34.7197 9.78208 34.9182 9.72999C35.3191 9.6248 35.7453 9.68315 36.1031 9.89222ZM12.5 27.3438C12.5 26.9294 12.3354 26.5319 12.0424 26.2389C11.7493 25.9459 11.3519 25.7813 10.9375 25.7813C10.5231 25.7813 10.1257 25.9459 9.83266 26.2389C9.53963 26.5319 9.37502 26.9294 9.37502 27.3438C9.37717 28.7535 9.92453 30.1077 10.9025 31.1229C11.8805 32.1382 13.2133 32.7358 14.6219 32.7907C14.2735 33.5078 14.0625 34.3047 14.0625 35.1563C14.0625 35.5707 14.2271 35.9681 14.5202 36.2611C14.8132 36.5542 15.2106 36.7188 15.625 36.7188C16.0394 36.7188 16.4368 36.5542 16.7299 36.2611C17.0229 35.9681 17.1875 35.5707 17.1875 35.1563C17.1883 34.5349 17.4355 33.9393 17.8749 33.4999C18.3143 33.0606 18.9099 32.8134 19.5313 32.8125H29.1906C29.605 32.8125 30.0025 32.6479 30.2955 32.3549C30.5885 32.0619 30.7531 31.6644 30.7531 31.25C30.7531 30.8356 30.5885 30.4382 30.2955 30.1452C30.0025 29.8521 29.605 29.6875 29.1906 29.6875H25.7813C25.16 29.6863 24.5646 29.439 24.1254 28.9997C23.6861 28.5604 23.4388 27.965 23.4375 27.3438C23.4375 26.9294 23.2729 26.5319 22.9799 26.2389C22.6868 25.9459 22.2894 25.7813 21.875 25.7813C21.4606 25.7813 21.0632 25.9459 20.7702 26.2389C20.4771 26.5319 20.3125 26.9294 20.3125 27.3438C20.3125 28.186 20.5188 28.975 20.8594 29.6875H14.8438C14.2225 29.6863 13.6271 29.439 13.1879 28.9997C12.7486 28.5604 12.5013 27.965 12.5 27.3438Z" fill="#F8F8F8" />
                        <path d="M0 26.1109C0 25.1297 0.0703125 24.1797 0.178127 23.2578C1.59531 11.0422 11.9562 1.56562 24.5484 1.5625H26.4734C39.4688 1.56406 49.9984 12.0937 50 25.0891C50 26.3085 49.7598 27.516 49.2932 28.6426C48.8265 29.7693 48.1425 30.7929 47.2802 31.6552C45.5388 33.3967 43.1768 34.375 40.7141 34.375H38.775C38.2495 36.5979 36.9893 38.5786 35.1984 39.9963C33.4074 41.4141 31.1905 42.1862 28.9062 42.1875H17.8063L12.9375 47.0562C12.7736 47.2199 12.5649 47.3314 12.3377 47.3765C12.1105 47.4216 11.8751 47.3984 11.6611 47.3098C11.4471 47.2212 11.2641 47.0712 11.1353 46.8786C11.0065 46.6861 10.9377 46.4597 10.9375 46.2281V42.0578C8.53571 41.7588 6.27268 40.7678 4.42397 39.2057C2.57525 37.6436 1.22062 35.5776 0.525002 33.2594C0.301563 32.5125 0.173439 31.725 0.092186 30.9234L0.0875015 30.9109C0.0437508 30.7672 0 30.625 0 30.4687C0 30.3734 0.00624847 30.2781 0.0125008 30.1844L0.0234375 30.0047C0.0234375 29.9547 0.0171852 29.9062 0.0125008 29.8594C0.00624847 29.8016 0 29.7453 0 29.6875V26.1109ZM3.51875 32.3672C4.09564 34.3013 5.28128 35.9975 6.8994 37.2038C8.51752 38.4101 10.4817 39.0619 12.5 39.0625H28.9062C30.6597 39.0623 32.3498 38.4067 33.6447 37.2243C34.9395 36.0419 35.7456 34.4181 35.9047 32.6719L35.9141 32.5719C35.8618 30.5425 35.0177 28.6142 33.5621 27.1992C32.1065 25.7842 30.155 24.9948 28.125 25C27.7106 25 27.3132 24.8354 27.0201 24.5424C26.7271 24.2493 26.5625 23.8519 26.5625 23.4375C26.5625 23.0231 26.7271 22.6257 27.0201 22.3326C27.3132 22.0396 27.7106 21.875 28.125 21.875C29.9602 21.8726 31.7662 22.3343 33.375 23.2172C33.6828 22.5271 34.1126 21.8983 34.6438 21.3609C34.9367 21.068 35.3341 20.9034 35.7484 20.9034C36.1628 20.9034 36.5601 21.068 36.8531 21.3609C37.1461 21.6539 37.3107 22.0513 37.3107 22.4656C37.3107 22.88 37.1461 23.2773 36.8531 23.5703C36.4094 24.0156 36.1078 24.5859 35.9938 25.225C37.5832 26.8745 38.6131 28.9824 38.9375 31.25H40.7141C41.5235 31.2512 42.3252 31.0923 43.0731 30.7826C43.821 30.4729 44.5002 30.0184 45.0719 29.4453C45.6447 28.8739 46.099 28.1948 46.4084 27.4472C46.7179 26.6996 46.8764 25.8982 46.875 25.0891C46.875 19.45 44.5938 14.3594 40.9 10.6625C39.0078 8.76488 36.7591 7.26009 34.2833 6.23467C31.8074 5.20925 29.1532 4.68345 26.4734 4.6875H24.5484C14.0953 4.68437 5.41406 12.1875 3.53125 22.0922C5.25303 20.4102 7.45214 19.3008 9.82812 18.9156C9.04219 17.475 8.59375 15.8203 8.59375 14.0625C8.59375 13.6481 8.75837 13.2507 9.0514 12.9576C9.34442 12.6646 9.74185 12.5 10.1562 12.5C10.5707 12.5 10.9681 12.6646 11.2611 12.9576C11.5541 13.2507 11.7188 13.6481 11.7188 14.0625C11.7171 14.9861 11.8982 15.9009 12.2517 16.7542C12.6051 17.6075 13.1239 18.3824 13.7781 19.0344C14.4301 19.6886 15.205 20.2074 16.0583 20.5608C16.9116 20.9143 17.8264 21.0954 18.75 21.0937C19.1644 21.0937 19.5618 21.2584 19.8549 21.5514C20.1479 21.8444 20.3125 22.2418 20.3125 22.6562C20.3125 23.0706 20.1479 23.4681 19.8549 23.7611C19.5618 24.0541 19.1644 24.2187 18.75 24.2187C16.3343 24.2202 13.998 23.3566 12.1641 21.7844L12.1391 21.7922C12.0039 21.8409 11.8622 21.8688 11.7188 21.875C9.34063 21.875 7.20156 22.8344 5.64219 24.3922C4.14501 25.8899 3.25647 27.8897 3.14844 30.0047C3.17062 30.8048 3.29507 31.5987 3.51875 32.3672Z" fill="#F8F8F8" />
                    </g>
                    <defs>
                        <clipPath id="clip0_145_73">
                            <rect width="50" height="50" fill="white" transform="matrix(-1 0 0 1 50 0)" />
                        </clipPath>
                    </defs>
                </svg>
                } />


            <Service_card title={"PERFORMANCE FÍSICA"}
                key={"PERFORMANCE FÍSICA"}
                text="Outro texto genérico sobre Performance física. Outro texto genérico"
                icon={<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_144_27)">
                        <path d="M5.52383 50C5.31393 50 5.10446 49.9837 4.89798 49.9511C3.69616 49.7555 2.63947 49.0082 1.92065 47.8344C1.90705 47.8122 1.89458 47.7897 1.88324 47.7669C1.00002 46.0131 2.21204 44.4021 2.75399 43.9287C2.78599 43.9011 2.81968 43.8749 2.85489 43.8504L12.2245 37.4269C12.6531 37.0474 13.0873 36.6581 13.5068 36.2805C14.5862 35.3112 15.703 34.3086 16.864 33.3627C17.2347 33.0614 17.3356 32.857 17.2041 32.2418C17.0386 31.4592 15.9252 26.1244 15.754 25.1013C14.7234 22.4407 13.6826 19.1678 12.6746 16.0045C11.6667 12.8412 10.6191 9.54872 9.59752 6.92141C9.54034 6.77433 9.52453 6.61762 9.55139 6.46422C9.57826 6.31083 9.64703 6.16515 9.75203 6.0392C9.85703 5.91326 9.99525 5.81067 10.1553 5.73991C10.3153 5.66914 10.4925 5.63222 10.6724 5.63221H15.0794C15.2268 5.63195 15.3729 5.65689 15.5091 5.70557C16.4671 6.04401 16.771 6.78153 16.9524 7.21388C17.8061 9.26799 18.6395 11.998 19.4467 14.6331C20.008 16.4681 20.5408 18.2112 21.0601 19.6725C22.7483 19.8682 28.0896 19.9288 29.8549 19.7792C30.3889 18.2738 30.9365 16.4809 31.5136 14.595C32.3538 11.8356 33.22 8.98432 34.127 6.83729C34.2533 6.54475 34.4491 6.27822 34.7018 6.05477C34.773 5.99005 34.8538 5.9338 34.9422 5.88751C35.2616 5.72013 35.6275 5.63024 36.0012 5.62732H40.2676C40.4457 5.62716 40.6214 5.6632 40.7803 5.73253C40.9393 5.80186 41.0771 5.90253 41.1825 6.02637C41.288 6.15021 41.3581 6.29375 41.3873 6.44534C41.4164 6.59693 41.4038 6.75232 41.3504 6.89891C41.3288 6.95956 41.1962 7.38114 41.0431 7.87021C40.0941 10.8829 37.5748 18.8851 36.203 22.1795C35.7925 23.1665 34.2937 29.0755 34.0771 30.4214C34.0435 30.5676 34.0351 30.7172 34.0522 30.8655C34.1449 30.9284 34.2476 30.9795 34.3572 31.0171C35.4048 31.427 36.4184 31.8974 37.3991 32.3572C37.7993 32.543 38.2132 32.7367 38.6202 32.9206C39.0272 33.1045 39.4671 33.2796 39.8912 33.4576C40.8855 33.8772 41.9138 34.3115 42.9218 34.7527C44.3447 35.3757 45.1508 36.529 45.025 37.7634C44.8186 39.7647 43.5794 46.7418 43.5272 47.0382C43.3503 47.9381 42.7752 48.7436 41.9232 49.2849C41.0713 49.8261 40.009 50.0608 38.9603 49.9394C37.9399 49.7985 36.9717 49.2606 36.3163 48.4643C35.6746 47.6818 35.4093 46.7408 35.5896 45.8781C35.6905 45.3959 36.3912 41.8061 36.7234 40.0973C35.2438 39.8038 33.5114 39.5016 31.8254 39.2111C29.5522 38.8198 27.2018 38.4129 25.3628 37.9991C24.9592 37.9082 24.7687 37.9316 24.3662 38.2554C22.9411 39.4067 21.4524 40.5286 20.0125 41.6124C19.4486 42.0369 18.8859 42.4624 18.3243 42.8889C15.1225 45.3949 9.07031 48.614 8.26306 49.0375C7.23585 49.7878 6.27553 50 5.52383 50ZM3.94786 46.956C4.33222 47.5684 4.81408 47.9479 5.30841 48.0271C5.89004 48.1191 6.466 47.7963 6.84582 47.5087C6.8958 47.4722 6.94928 47.4395 7.00569 47.4109C7.07145 47.3766 13.6066 43.9453 16.8073 41.4373L16.8186 41.4275C17.3847 40.9972 17.9516 40.5681 18.5193 40.1403C19.9456 39.0643 21.4195 37.9561 22.8163 36.8283C23.7574 36.0683 24.7438 35.8404 25.9354 36.1074C27.7041 36.5065 30.017 36.9065 32.2631 37.2939C34.3798 37.6587 36.5714 38.0373 38.2891 38.4139C38.565 38.4743 38.8044 38.622 38.9598 38.8277C39.1152 39.0334 39.1753 39.2819 39.1281 39.5241C39.0805 39.7706 37.949 45.5817 37.8141 46.2263C37.7415 46.5755 37.8674 46.9785 38.1542 47.3326C38.4411 47.6867 38.8844 47.9508 39.305 48.0075C39.7519 48.057 40.2033 47.9515 40.5601 47.7141C40.7484 47.6001 40.9085 47.4549 41.0312 47.2869C41.1538 47.119 41.2365 46.9317 41.2744 46.736C41.7166 44.2505 42.5953 39.1377 42.7483 37.5854C42.7925 37.1589 42.4671 36.75 41.8787 36.4928C40.8855 36.0575 39.8651 35.6271 38.8776 35.2104L37.5885 34.6656L37.5635 34.6539C37.1395 34.4582 36.7154 34.2626 36.3039 34.0728C35.3572 33.6317 34.3764 33.1759 33.4025 32.7934C31.7336 32.139 31.6633 31.0885 31.8152 30.1475C32.042 28.7547 33.5431 22.74 34.0533 21.5134C35.3742 18.3814 37.8606 10.4965 38.7755 7.58362H36.2211C35.3685 9.63773 34.5204 12.4098 33.7041 15.088C33.0522 17.2223 32.4354 19.2383 31.8243 20.8894C31.5442 21.6455 30.6021 21.6934 29.5125 21.7492C28.7472 21.7893 27.7211 21.8098 26.5465 21.8098H26.5374C24.9966 21.8098 23.4218 21.7736 22.2177 21.712C20.2971 21.6142 19.3617 21.5291 19.0748 20.7544C18.4819 19.1532 17.8844 17.1978 17.2517 15.1281C16.4581 12.533 15.6372 9.84607 14.8163 7.86924C14.7846 7.79196 14.7336 7.67361 14.6882 7.58459H12.2347C13.1168 9.99671 14.0023 12.7786 14.8628 15.4831C15.873 18.6582 16.9173 21.9389 17.9388 24.5662C17.9671 24.6381 17.9854 24.7126 17.9932 24.7883C18.0442 25.1737 18.915 29.4188 19.4365 31.8926C19.61 32.7132 19.6508 33.7833 18.4161 34.7859C17.2948 35.6995 16.1973 36.6845 15.1361 37.6372C14.6973 38.0285 14.2438 38.4393 13.7914 38.8384C13.7584 38.8678 13.7232 38.8952 13.686 38.9205L4.34242 45.3294C4.2109 45.4732 3.59752 46.2058 3.94786 46.956Z" fill="#D9D9D9" />
                        <path d="M25.3878 17.3886C24.864 17.3871 24.3444 17.3066 23.8527 17.1509C22.4026 16.7176 21.3663 15.8157 20.8549 14.5412C20.8447 14.5162 20.836 14.4907 20.8289 14.4649C20.6222 13.7424 20.6087 12.9888 20.7892 12.2611C20.7897 12.2553 20.7897 12.2494 20.7892 12.2435C21.1679 10.7655 22.3062 9.77663 24.1735 9.30223L24.2416 9.28658C24.9952 9.13858 25.778 9.14059 26.5307 9.29245C26.5529 9.2963 26.5748 9.3012 26.5964 9.30712C28.4626 9.77761 29.601 10.7675 29.9808 12.2494V12.265C30.1621 12.9933 30.1489 13.7476 29.9422 14.4708C29.9343 14.4962 29.9252 14.5206 29.915 14.5461C29.3878 15.8695 28.3742 16.7489 26.9048 17.1597C26.4182 17.3107 25.905 17.3881 25.3878 17.3886ZM23.0159 13.9387C23.3062 14.6351 23.8096 15.0684 24.6032 15.3032L24.6214 15.309C25.1163 15.4709 25.6628 15.4709 26.1577 15.309L26.1996 15.2963C26.9706 15.0841 27.4683 14.6527 27.7631 13.9406C27.8727 13.5184 27.8727 13.0805 27.7631 12.6583C27.5647 11.8982 27.0341 11.4571 25.991 11.191C25.593 11.1147 25.1804 11.1147 24.7824 11.191C23.7382 11.463 23.2064 11.9041 23.0091 12.6583C22.9026 13.0803 22.9049 13.5174 23.0159 13.9387ZM44.3198 7.58362H5.6792C5.3785 7.58362 5.09011 7.48057 4.87749 7.29713C4.66486 7.11369 4.54541 6.8649 4.54541 6.60547V3.66418C4.54541 3.40476 4.66486 3.15597 4.87749 2.97253C5.09011 2.78909 5.3785 2.68604 5.6792 2.68604H44.3198C44.6205 2.68604 44.9089 2.78909 45.1215 2.97253C45.3341 3.15597 45.4536 3.40476 45.4536 3.66418V6.60547C45.4536 6.8649 45.3341 7.11369 45.1215 7.29713C44.9089 7.48057 44.6205 7.58362 44.3198 7.58362ZM6.81298 5.62733H43.186V4.64233H6.81298V5.62733Z" fill="#D9D9D9" />
                        <path d="M48.8662 9.80007H44.3197C44.019 9.80007 43.7306 9.69701 43.518 9.51357C43.3054 9.33014 43.1859 9.08134 43.1859 8.82192V0.978148C43.1859 0.718727 43.3054 0.469931 43.518 0.286493C43.7306 0.103055 44.019 0 44.3197 0L48.8662 0C49.1669 0 49.4553 0.103055 49.6679 0.286493C49.8805 0.469931 50 0.718727 50 0.978148V8.82192C50 9.08134 49.8805 9.33014 49.6679 9.51357C49.4553 9.69701 49.1669 9.80007 48.8662 9.80007ZM45.4535 7.84377H47.7324V1.9563H45.4535V7.84377ZM5.67914 9.80007H1.13379C0.833088 9.80007 0.544705 9.69701 0.332078 9.51357C0.119452 9.33014 0 9.08134 0 8.82192L0 0.978148C0 0.718727 0.119452 0.469931 0.332078 0.286493C0.544705 0.103055 0.833088 0 1.13379 0L5.67914 0C5.97984 0 6.26822 0.103055 6.48085 0.286493C6.69347 0.469931 6.81292 0.718727 6.81292 0.978148V8.82192C6.81292 9.08134 6.69347 9.33014 6.48085 9.51357C6.26822 9.69701 5.97984 9.80007 5.67914 9.80007ZM2.26757 7.84377H4.54535V1.9563H2.26757V7.84377ZM17.0442 25.4876C16.7435 25.4876 16.4551 25.3846 16.2425 25.2011C16.0299 25.0177 15.9104 24.7689 15.9104 24.5095C15.9104 24.25 16.0299 24.0012 16.2425 23.8178C16.4551 23.6344 16.7435 23.5313 17.0442 23.5313C17.6475 23.5308 18.226 23.3238 18.6526 22.9557C19.0792 22.5877 19.3191 22.0887 19.3197 21.5682V20.59C19.3197 20.3306 19.4392 20.0818 19.6518 19.8984C19.8644 19.7149 20.1528 19.6119 20.4535 19.6119C20.7542 19.6119 21.0426 19.7149 21.2552 19.8984C21.4678 20.0818 21.5873 20.3306 21.5873 20.59V21.5682C21.5861 22.6073 21.1071 23.6037 20.2553 24.3385C19.4036 25.0733 18.2487 25.4866 17.0442 25.4876ZM34.0918 25.4876C32.8873 25.4866 31.7324 25.0733 30.8807 24.3385C30.029 23.6037 29.55 22.6073 29.5488 21.5682V20.59C29.5488 20.3306 29.6682 20.0818 29.8808 19.8984C30.0935 19.7149 30.3818 19.6119 30.6825 19.6119C30.9832 19.6119 31.2716 19.7149 31.4842 19.8984C31.6969 20.0818 31.8163 20.3306 31.8163 20.59V21.5682C31.8169 22.0887 32.0569 22.5877 32.4835 22.9557C32.9101 23.3238 33.4885 23.5308 34.0918 23.5313C34.3925 23.5313 34.6809 23.6344 34.8935 23.8178C35.1062 24.0012 35.2256 24.25 35.2256 24.5095C35.2256 24.7689 35.1062 25.0177 34.8935 25.2011C34.6809 25.3846 34.3925 25.4876 34.0918 25.4876Z" fill="#D9D9D9" />
                    </g>
                    <defs>
                        <clipPath id="clip0_144_27">
                            <rect width="50" height="50" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                }
            />

            <Service_card title={"SUBIR EM PALCO"}
                text="Texto genérico sobre subir nos palcos. voltado ao fisioculturismo"
                icon={<svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.145 0.000195205C46.824 3.96426 52.4666 17.5648 39.2921 22.1376H39.399C39.337 22.146 39.2746 22.1558 39.2129 22.1649C38.3354 22.4654 37.374 22.7248 36.3289 22.9403C31.4171 24.8695 27.8643 29.5443 27.5762 34.1127C30.8491 36.3682 33.3839 40.2498 33.3839 40.2498L30.8175 44.0277L34.8428 46.3197H26.838C30.7857 42.371 27.9864 37.9305 23.3101 37.9305C18.5699 37.9305 16.0889 42.6289 19.7793 46.3197H11.8568L15.7997 44.0277L13.233 40.2498C13.233 40.2498 15.8088 36.3045 19.1199 34.0578C18.807 29.5068 15.2625 24.8618 10.3704 22.9402C9.32488 22.7247 8.36394 22.4656 7.4866 22.165C7.42478 22.1558 7.36228 22.146 7.30027 22.1377H7.41013C-5.76633 17.5654 -0.125318 3.96445 14.5544 0C18.5311 3.84473 13.9157 9.92998 10.294 5.55439C6.6905 12.3005 9.45388 18.0141 17.3526 13.6995C18.5128 16.0913 20.6937 17.7399 23.2792 17.7399C25.8869 17.7399 28.0807 16.0635 29.2333 13.6384C37.219 18.07 40.0255 12.3325 36.4049 5.55439C32.7828 9.92988 28.1676 3.84463 32.1445 9.76026e-05L32.145 0.000195205ZM23.2788 3.50801C25.9534 3.50801 28.2915 6.19902 28.2915 9.71992C28.2915 13.241 25.9534 15.8718 23.2788 15.8718C20.6043 15.8718 18.2664 13.2409 18.2664 9.72002C18.2664 6.19873 20.6043 3.50811 23.2789 3.50811L23.2788 3.50801Z" fill="#F8F8F8" />
                </svg>
                } />

            <Service_card title={"SAÚDE E BEM ESTAR"}
                text="Texto sobre saúde e bem estar. Descrição sobre o serviço voltado a saúde e bem estar"
                icon={<svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 17.4375L19.8281 14.8281C19.6406 14.25 18.8281 14.25 18.6406 14.8281L17.8281 17.4375C17.6562 17.9688 18.0625 18.5156 18.625 18.5156H19.8281C20.3906 18.5156 20.7969 17.9688 20.625 17.4375ZM19.2344 19.9844C20.0625 19.9844 20.8437 19.7812 21.5 19.4375C21.7187 19.3281 21.9531 19.5781 21.8281 19.7813C21.2812 20.625 20.3281 21.1875 19.25 21.1875C18.1719 21.1875 17.2187 20.625 16.6719 19.7813C16.5312 19.5625 16.7656 19.3125 17 19.4375C17.625 19.7969 18.4062 19.9844 19.2344 19.9844ZM25.0781 14.7813C24.8437 13.8281 23.9844 13.125 22.9687 13.125C21.9062 13.125 21.0312 13.8906 20.8281 14.8906C20.7812 15.1094 20.9687 15.3125 21.1875 15.3125H21.3125L21.3047 15.2781C21.2765 15.1672 21.25 15.0656 21.25 14.9375C21.25 14.1719 21.875 13.5469 22.6562 13.5469C22.871 13.5468 23.0829 13.5964 23.2754 13.6917C23.4679 13.7871 23.6358 13.9256 23.7658 14.0965C23.8959 14.2675 23.9847 14.4662 24.0254 14.6771C24.066 14.888 24.0573 15.1055 24 15.3125H24.6719C24.9531 15.3125 25.1562 15.0469 25.0781 14.7813ZM13.3906 14.7813C13.5096 14.2997 13.7895 13.8733 14.184 13.5726C14.5784 13.2719 15.0637 13.115 15.5596 13.1277C16.0554 13.1405 16.532 13.3222 16.9104 13.6428C17.2889 13.9634 17.5465 14.4036 17.6406 14.8906C17.6875 15.1094 17.5 15.3125 17.2812 15.3125H17.1719C17.2292 15.1055 17.2379 14.888 17.1972 14.6771C17.1566 14.4662 17.0678 14.2675 16.9377 14.0965C16.8076 13.9256 16.6398 13.7871 16.4473 13.6917C16.2548 13.5964 16.0429 13.5468 15.8281 13.5469C15.6133 13.5468 15.4014 13.5964 15.2089 13.6917C15.0164 13.7871 14.8486 13.9256 14.7185 14.0965C14.5884 14.2675 14.4996 14.4662 14.459 14.6771C14.4184 14.888 14.427 15.1055 14.4844 15.3125H13.8125C13.5312 15.3125 13.3281 15.0469 13.3906 14.7813Z" fill="#F8F8F8" />
                    <path d="M21.8594 14.9375C21.8605 14.8069 21.8935 14.6786 21.9556 14.5637C22.0177 14.4488 22.107 14.3509 22.2156 14.2785C22.3243 14.206 22.449 14.1613 22.5789 14.1481C22.7088 14.135 22.84 14.1539 22.961 14.2031C22.923 14.2366 22.896 14.2809 22.8838 14.3301C22.8715 14.3792 22.8744 14.431 22.8922 14.4784C22.91 14.5258 22.9418 14.5668 22.9834 14.5957C23.025 14.6247 23.0743 14.6404 23.125 14.6406C23.1672 14.6405 23.2087 14.6296 23.2456 14.6092C23.2824 14.5887 23.3135 14.5592 23.336 14.5234C23.4088 14.6413 23.4493 14.7763 23.4534 14.9148C23.4576 15.0533 23.4251 15.1905 23.3594 15.3125H21.9531C21.8906 15.2031 21.8594 15.0781 21.8594 14.9375ZM16.1016 14.1891C15.9502 14.1355 15.7862 14.1287 15.6309 14.1696C15.4756 14.2105 15.3363 14.2972 15.2309 14.4184C15.1256 14.5396 15.0591 14.6897 15.0402 14.8491C15.0214 15.0086 15.0509 15.17 15.125 15.3125H16.5313C16.6005 15.1834 16.6324 15.0376 16.6236 14.8913C16.6148 14.7451 16.5655 14.6042 16.4813 14.4844C16.4668 14.5202 16.4442 14.5522 16.4152 14.5778C16.3863 14.6034 16.3518 14.622 16.3144 14.632C16.2771 14.642 16.2379 14.6433 16.2001 14.6356C16.1622 14.628 16.1266 14.6116 16.096 14.5879C16.0655 14.5642 16.0409 14.5337 16.0242 14.4989C16.0074 14.464 15.999 14.4258 15.9996 14.3871C16.0001 14.3485 16.0096 14.3105 16.0273 14.2761C16.045 14.2417 16.0704 14.2119 16.1016 14.1891ZM22.0469 11.4344C23.4891 11.2594 24.3016 11.7141 24.6094 11.9703C24.6478 12.0082 24.6937 12.0378 24.7441 12.0571C24.7945 12.0765 24.8484 12.0851 24.9023 12.0826C24.9562 12.0801 25.0091 12.0664 25.0574 12.0424C25.1058 12.0184 25.1487 11.9846 25.1834 11.9432C25.218 11.9019 25.2437 11.8537 25.2589 11.8019C25.274 11.7501 25.2782 11.6957 25.2713 11.6421C25.2643 11.5886 25.2464 11.5371 25.2185 11.4908C25.1906 11.4446 25.1535 11.4046 25.1094 11.3734C24.636 10.9734 23.6047 10.4594 21.9531 10.6594C21.8535 10.6754 21.7639 10.7294 21.7032 10.8101C21.6424 10.8907 21.6153 10.9917 21.6274 11.0919C21.6395 11.1922 21.69 11.2838 21.7682 11.3476C21.8464 11.4115 21.9463 11.4426 22.0469 11.4344ZM13.5922 11.8797C13.5648 11.8363 13.5462 11.7879 13.5375 11.7373C13.5288 11.6868 13.5301 11.635 13.5414 11.5849C13.5528 11.5348 13.5738 11.4875 13.6034 11.4456C13.6331 11.4037 13.6707 11.368 13.7141 11.3406L13.7203 11.3375L13.736 11.3281C13.8078 11.2842 13.8818 11.244 13.9578 11.2078C14.1605 11.1076 14.3699 11.0215 14.5844 10.95C15.2651 10.7182 15.9887 10.6403 16.7031 10.7219C16.8028 10.7379 16.8924 10.7919 16.9531 10.8726C17.0138 10.9532 17.041 11.0542 17.0289 11.1544C17.0167 11.2547 16.9663 11.3463 16.8881 11.4101C16.8099 11.474 16.71 11.5051 16.6094 11.4969C15.9094 11.4125 15.286 11.5391 14.8328 11.6906C14.6035 11.7675 14.3813 11.8642 14.1688 11.9797L14.1453 11.9937C14.1422 11.9953 14.1391 11.9968 14.136 11.9984L14.1297 12.0031C14.042 12.0578 13.9362 12.0756 13.8355 12.0525C13.7347 12.0293 13.6472 11.9672 13.5922 11.8797Z" fill="#F8F8F8" />
                    <path d="M0.249973 45.9C0.249973 46.3144 0.414593 46.7118 0.707619 47.0049C1.00064 47.2979 1.39807 47.4625 1.81247 47.4625H36.1625C36.5769 47.4625 36.9743 47.2979 37.2673 47.0049C37.5604 46.7118 37.725 46.3144 37.725 45.9C37.725 43.0953 37.725 37.2594 36.1531 33.2438C34.6564 29.1736 31.7979 25.7465 28.0625 23.5438C28.4154 22.9029 28.6743 22.2146 28.8312 21.5C29.4432 20.6854 29.7763 19.6954 29.7812 18.6766V18.0234C30.4747 17.2663 30.8594 16.2768 30.8594 15.25C30.8594 14.2232 30.4747 13.2337 29.7812 12.4766V12.3906C29.7857 12.2224 29.8401 12.0592 29.9375 11.9219C30.4747 11.1392 30.7891 10.2252 30.8472 9.27769C30.9052 8.33015 30.7048 7.38464 30.2672 6.5422C29.6492 5.3643 28.6019 4.46918 27.3422 4.0422C26.7953 3.85001 26.3265 3.4797 26.0156 2.9922C25.3582 1.94481 24.349 1.16606 23.1691 0.795774C21.9893 0.425493 20.7161 0.487934 19.5781 0.971886C19.4749 1.01598 19.3638 1.03872 19.2515 1.03872C19.1393 1.03872 19.0282 1.01598 18.925 0.971886C17.7727 0.498769 16.4904 0.447149 15.3038 0.826109C14.1172 1.20507 13.1023 1.99033 12.4375 3.04376C12.1453 3.52501 11.6875 3.88282 11.15 4.05157H11.1328C10.3729 4.31608 9.68453 4.75281 9.1215 5.32759C8.55847 5.90238 8.13606 6.59963 7.8873 7.36481C7.63855 8.12999 7.57019 8.94235 7.6876 9.73833C7.805 10.5343 8.10496 11.2924 8.56404 11.9531C8.66546 12.0884 8.72029 12.2528 8.72029 12.4219V12.4938C8.03648 13.2489 7.65778 14.2313 7.65778 15.25C7.65778 16.2688 8.03648 17.2511 8.72029 18.0063V18.6219C8.72437 19.6009 9.0233 20.5559 9.5781 21.3625C9.72944 22.1399 10.002 22.8886 10.3859 23.5813C6.62021 25.7492 3.73607 29.1715 2.23747 33.25C0.736698 37.2916 0.0609016 41.5929 0.249973 45.9ZM18.6094 44.3375H3.37497C3.33283 40.9365 3.93291 37.5581 5.14372 34.3797C5.81473 32.506 6.84919 30.7832 8.18773 29.3104C9.52627 27.8375 11.1425 26.6435 12.9437 25.7969C12.8062 26.3281 12.7344 26.8813 12.7344 27.4531V36.7422C12.3143 36.9155 11.9672 37.2287 11.7518 37.6287C11.5364 38.0287 11.4659 38.4909 11.5524 38.937C11.6389 39.383 11.877 39.7854 12.2264 40.0759C12.5757 40.3664 13.0148 40.5271 13.4691 40.5308C13.9234 40.5345 14.3651 40.381 14.7191 40.0962C15.0731 39.8115 15.3178 39.413 15.4115 38.9685C15.5053 38.5239 15.4424 38.0606 15.2336 37.6571C15.0247 37.2536 14.6827 36.9348 14.2656 36.7547V27.4531C14.2656 26.7063 14.4281 25.9984 14.7187 25.3609C14.8328 25.4184 14.9485 25.4726 15.0656 25.5234L18.5625 33.6563L18.5703 33.6875C18.5845 33.7331 18.5924 33.7804 18.5937 33.8281H18.6094V44.3375ZM16.1781 25.8922C16.6982 26.016 17.231 26.0784 17.7656 26.0781H20.6719C21.2406 26.0781 21.7969 26.0078 22.3281 25.875C22.0962 26.5028 21.6778 27.0446 21.1292 27.4279C20.5805 27.8111 19.9278 28.0174 19.2585 28.0191C18.5893 28.0208 17.9355 27.8178 17.3849 27.4374C16.8343 27.0569 16.4132 26.5172 16.1781 25.8906V25.8922ZM23.3906 25.5172C23.5625 25.4422 23.7312 25.3609 23.8968 25.2719C24.2227 25.9528 24.3914 26.6982 24.3906 27.4531V29.8969C23.4251 30.0764 22.5529 30.588 21.925 31.3431C21.2972 32.0982 20.9533 33.0492 20.9531 34.0313V39.7031C20.9531 40.2656 21.4062 40.7188 21.9687 40.7188H23.4219C23.6249 40.7188 23.8196 40.6381 23.9632 40.4945C24.1068 40.3509 24.1875 40.1562 24.1875 39.9531C24.1875 39.7501 24.1068 39.5553 23.9632 39.4118C23.8196 39.2682 23.6249 39.1875 23.4219 39.1875H22.4843V34.0313C22.4843 33.3226 22.7659 32.643 23.2669 32.142C23.768 31.6409 24.4476 31.3594 25.1562 31.3594C25.8649 31.3594 26.5445 31.6409 27.0455 32.142C27.5466 32.643 27.8281 33.3226 27.8281 34.0313V39.1875H26.7812C26.5782 39.1875 26.3834 39.2682 26.2398 39.4118C26.0963 39.5553 26.0156 39.7501 26.0156 39.9531C26.0156 40.1562 26.0963 40.3509 26.2398 40.4945C26.3834 40.6381 26.5782 40.7188 26.7812 40.7188H28.3437C28.4772 40.7192 28.6095 40.6932 28.7329 40.6423C28.8563 40.5914 28.9684 40.5166 29.0628 40.4222C29.1572 40.3278 29.232 40.2157 29.2829 40.0923C29.3338 39.9689 29.3598 39.8366 29.3594 39.7031V34.0313C29.3597 33.0491 29.0161 32.0978 28.3882 31.3425C27.7602 30.5873 26.8876 30.0758 25.9219 29.8969V27.4531C25.9219 26.9078 25.8562 26.3781 25.7312 25.8703C29.2429 27.6319 31.9359 30.685 33.2453 34.3891C34.2262 37.6113 34.6815 40.9705 34.5937 44.3375H19.8437V39.4375H19.8594V33.8281C19.8608 33.7696 19.8713 33.7116 19.8906 33.6563L23.3906 25.5156V25.5172ZM21.9375 7.04689C22.5182 7.04668 23.0933 7.16092 23.6299 7.38306C24.1665 7.60521 24.654 7.93092 25.0647 8.34157C25.4753 8.75222 25.801 9.23976 26.0232 9.77634C26.2453 10.3129 26.3596 10.888 26.3594 11.4688V12.7344C26.3594 12.7578 26.3594 12.7813 26.3625 12.8031L25.8937 19.9688C25.7197 21.2297 25.0949 22.3849 24.1349 23.2208C23.1749 24.0567 21.9447 24.5166 20.6719 24.5156H17.7656C16.4929 24.516 15.2631 24.0558 14.3032 23.22C13.3434 22.3843 12.7184 21.2294 12.5437 19.9688L12.075 12.8203C12.0774 12.785 12.0774 12.7494 12.075 12.7141L11.9844 11.3422C11.9953 10.974 12.1444 10.6235 12.4021 10.3603C12.6598 10.0971 13.0071 9.94057 13.375 9.92189H15.5469C16.4329 9.92431 17.3004 9.66845 18.0432 9.18559C18.7861 8.70273 19.3722 8.01382 19.7297 7.20314C19.7453 7.15664 19.7755 7.11639 19.8157 7.08827C19.8559 7.06015 19.9041 7.04565 19.9531 7.04689H21.9375Z" fill="#F8F8F8" />
                </svg>
                } />

            <Service_card title={"EFICIÊNCIA METABÓLICA"}
            text="Texto sobre eficiência metabólica. Descrição sobre esse serviço"
            icon={<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.825 8.46875C35.825 9.4716 35.4266 10.4334 34.7175 11.1425C34.0084 11.8516 33.0466 12.25 32.0437 12.25C31.0409 12.25 30.0791 11.8516 29.37 11.1425C28.6609 10.4334 28.2625 9.4716 28.2625 8.46875C28.2625 7.4659 28.6609 6.50412 29.37 5.795C30.0791 5.08588 31.0409 4.6875 32.0437 4.6875C33.0466 4.6875 34.0084 5.08588 34.7175 5.795C35.4266 6.50412 35.825 7.4659 35.825 8.46875ZM11.5 44.8167C12.5156 43.9 22.2062 30.5833 22.0864 30.2698C22.0031 30.0521 17.1781 27.6865 17.1364 27.7521L8.76665 40.8156C5.93749 45.2302 10.1958 45.9948 11.5 44.8177V44.8167ZM23.8781 39.6865L32.9271 28.4687C33.6937 27.5167 32.3479 26.2479 31.3739 25.7896C28.8094 24.5812 21.5458 21.8562 20.8927 21.8562C19.8 21.8562 18.6625 23.0417 18.6625 24.1792C18.6625 25.6167 19.3698 26.1917 22.9156 27.6396C24.7052 28.3698 26.2114 29.0458 26.1698 29.1125L20.4167 38.4177C19.4625 39.9604 22.6854 41.1656 23.8781 39.6865ZM15.2833 22.6427C15.8333 22.1406 17.4917 20.5635 18.9667 19.1365C20.4771 17.676 21.7927 16.5969 21.9771 16.6677C22.1573 16.7365 24.7219 18.1708 27.6771 19.8552C33.201 23.0042 34.4917 23.4927 35.6521 22.8708C35.9531 22.7104 37.5458 20.8917 39.1917 18.8292C41.7177 15.6656 42.1844 14.9458 42.1844 14.2146C42.1844 13.0833 41.4531 12.3469 40.3302 12.3469C39.6198 12.3469 39.0177 12.7302 36.7635 14.6177C35.2719 15.8667 33.9125 16.9479 33.7427 17.0208C33.4167 17.1594 33.151 17.0177 27.5448 13.7104C23.4687 11.3062 22.3844 10.9323 20.6698 11.3438C19.2208 11.6917 18.2969 12.601 14.4344 17.4771C13.1729 19.175 10.9031 20.9771 12.0927 23.1615C13.1219 24.0573 13.8604 23.9375 15.2833 22.6427Z" stroke="#F8F8F8" stroke-width="1.04167" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            } />

        </Container>



    )
}