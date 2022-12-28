import { createGlobalStyle } from "styled-components";
import Macherie from "../fonts/macherie.ttf";
import Doky from "../fonts/DokyRegular.ttf";

const GlobalStyle = createGlobalStyle`

    // Reset CSS     ===============================
    /* global reset 
    http://meyerweb.com/eric/tools/css/reset/ 
    (15/12/2022) v2.0 | 20110126 
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    // Reset CSS     ===============================
    // Global config ===============================

    @font-face {
        font-family: 'macherie';
        src: url(${Macherie}) format('truetype');
    }
    @font-face {
        font-family: 'Doky';
        src: url(${Doky}) format('truetype');
    }

    html{
        
        scroll-behavior: smooth;
    }

    :root{
        --font-Macherie: 'macherie', sans-serif;
        --font-Doky: 'Doky', sans-serif;

        --menu-bg: #f3dcf386;
        --nav-color: #ffff;
        --nav-color-hover:#bfb1ff; 
        --nav-color-hover-shadow: #8280ff;
        --nav-color-hover-transparent:#4c41a299;
        --nav-link-fontsize: 1.7rem;

        --color-white: #ecfbff;
        --shadow-gray: #797979;

        --purple-strong: #4c41a2;
        --purple-medium: #b8a0ee;
        --purple-light: #f3dcf3;
        --purple-light-transparent: #f3dcf386;
        --white: #ffff;
        --black: #080008;
    }

    body {
        font-family: var(--font-Macherie);
        color: var(--color-white);
        text-shadow: 1px 1px 2px var(--shadow-gray);
        overflow-x: hidden;
        

        background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='3000' height='560' preserveAspectRatio='none' viewBox='0 0 3000 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2488%26quot%3b)' fill='none'%3e%3crect width='3000' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient2489)'%3e%3c/rect%3e%3cpath d='M3100 560L0 560 L0 398.04Q116.44 264.48%2c 250 380.91Q311.73 292.64%2c 400 354.37Q495.82 300.19%2c 550 396.01Q665.75 261.76%2c 800 377.51Q915.3 242.81%2c 1050 358.11Q1196.44 254.55%2c 1300 400.99Q1367.71 318.7%2c 1450 386.41Q1556.86 243.26%2c 1700 350.12Q1851.12 251.24%2c 1950 402.36Q2058.34 260.69%2c 2200 369.03Q2282.93 301.95%2c 2350 384.88Q2432 316.88%2c 2500 398.88Q2559.05 307.93%2c 2650 366.97Q2713.72 280.7%2c 2800 344.42Q2891.59 286.01%2c 2950 377.61Q3034.82 312.43%2c 3100 397.24z' fill='rgba(42%2c 0%2c 40%2c 1)'%3e%3c/path%3e%3cpath d='M3200 560L0 560 L0 429.81Q126.41 306.22%2c 250 432.63Q308.89 341.52%2c 400 400.42Q546.81 297.23%2c 650 444.03Q711.2 355.23%2c 800 416.43Q916.6 283.03%2c 1050 399.64Q1118.74 318.38%2c 1200 387.11Q1288.28 325.38%2c 1350 413.66Q1481.13 294.8%2c 1600 425.93Q1662.99 338.92%2c 1750 401.91Q1844.5 346.41%2c 1900 440.91Q1949.25 340.16%2c 2050 389.41Q2180.1 269.51%2c 2300 399.61Q2442.45 292.06%2c 2550 434.51Q2663.94 298.45%2c 2800 412.39Q2869.32 331.72%2c 2950 401.04Q3094.78 295.83%2c 3200 440.61z' fill='rgba(75%2c 27%2c 73%2c 1)'%3e%3c/path%3e%3cpath d='M3100 560L0 560 L0 464.42Q124.92 339.34%2c 250 464.26Q366.52 330.78%2c 500 447.3Q644.65 341.96%2c 750 486.61Q860.5 347.11%2c 1000 457.61Q1083.34 390.95%2c 1150 474.29Q1282.86 357.15%2c 1400 490.01Q1506.57 346.57%2c 1650 453.14Q1734.01 387.15%2c 1800 471.17Q1934.37 355.53%2c 2050 489.9Q2149.36 339.26%2c 2300 438.63Q2395.55 384.18%2c 2450 479.73Q2512.6 392.33%2c 2600 454.92Q2719.11 324.03%2c 2850 443.14Q2969.01 312.14%2c 3100 431.15z' fill='rgba(82%2c 24%2c 93%2c 1)'%3e%3c/path%3e%3cpath d='M3100 560L0 560 L0 493.53Q71.07 414.6%2c 150 485.66Q285.38 371.05%2c 400 506.43Q458.65 415.08%2c 550 473.73Q635.63 409.36%2c 700 494.98Q841.45 386.44%2c 950 527.89Q1067.12 395%2c 1200 512.12Q1260.26 422.38%2c 1350 482.65Q1484.53 367.17%2c 1600 501.7Q1683.71 435.41%2c 1750 519.13Q1880.56 399.69%2c 2000 530.26Q2048.3 428.56%2c 2150 476.86Q2283.59 360.44%2c 2400 494.03Q2530.32 374.35%2c 2650 504.67Q2713.16 417.83%2c 2800 480.99Q2893.47 424.46%2c 2950 517.93Q3012.6 430.52%2c 3100 493.12z' fill='rgba(140%2c 96%2c 169%2c 1)'%3e%3c/path%3e%3cpath d='M3150 560L0 560 L0 557.6Q126.56 434.16%2c 250 560.72Q381.16 441.88%2c 500 573.04Q613.42 436.46%2c 750 549.89Q819.14 469.03%2c 900 538.17Q967.93 456.1%2c 1050 524.03Q1193.53 417.56%2c 1300 561.08Q1416.75 427.83%2c 1550 544.58Q1615.85 460.43%2c 1700 526.28Q1842.36 418.63%2c 1950 560.99Q2080.9 441.89%2c 2200 572.8Q2247.07 469.88%2c 2350 516.95Q2442.62 459.57%2c 2500 552.19Q2616.28 418.47%2c 2750 534.74Q2842.72 477.47%2c 2900 570.19Q3018.11 438.3%2c 3150 556.41z' fill='rgba(140%2c 96%2c 169%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2488'%3e%3crect width='3000' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='20.33%25' y1='-108.93%25' x2='79.67%25' y2='208.93%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2489'%3e%3cstop stop-color='rgba(104%2c 51%2c 200%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(2%2c 0%2c 41%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e") repeat-x center scroll,
        linear-gradient(to bottom, #8c60a9, #8c60a9, #8c60a9, #8c60a9, #8c60a9, #8452ab, #7a44ae, #6e35b0, #6026b3, #541dab, #4813a3, #3b089b, #330586, #2a0372, #22015f, #1a004c);
        background-repeat: no-repeat;
        background-size: auto 70vh, auto;
        background-position: 100% 0;
        animation: bgmve 40s infinite linear;
    }

    @keyframes bgmve {
        to {background-position: 0 0;
        }
    }


    h1{
        font-family: var(--font-Doky);
        font-size: 3.5rem;
    }

    h2{
        font-size: 3rem;
    }

    h3{
        font-size: 2.5rem;
    }

    h4{
        font-size: 2.0rem;
    }

    h5{
        font-size: 1.5rem;
    }
    p, li {
        font-size: 1.4rem;
    }
    span{
        font-size: 1.4rem;
        display: block;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
    }

    // Global config ===============================
    // SCROLLBAR ===================================

        /* width */
    ::-webkit-scrollbar {
    width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: transparent;
 
    
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #53357a;
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #392357;
    }
// SCROLLBAR ======================   

`;

export default GlobalStyle;
