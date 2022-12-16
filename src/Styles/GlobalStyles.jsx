import { createGlobalStyle } from "styled-components";
import Macherie from "../fonts/macherie.ttf";
import Doky from "../fonts/DokyRegular.ttf";

export const GlobalStyle = createGlobalStyle`

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

    // global config

    @font-face {
        font-family: 'macherie';
        src: url(${Macherie}) format('truetype');
    }
    @font-face {
        font-family: 'Doky';
        src: url(${Doky}) format('truetype');
    }

    :root {
        --font-Macherie: 'macherie', sans-serif;
        --font-Doky: 'Doky', sans-serif;
        --color-white: #ecfbff;
        --shadow-gray: #797979
    }

    body {
        font-family: var(--font-Macherie);
        background-color: #B8A0EE;
        color: var(--color-white);
        text-shadow: 1px 1px 2px var(--shadow-gray);
        overflow-x: hidden;
        background-color: #B8A0EE;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23B8A0EE' width='11' height='11'/%3E%3Crect fill='%23b59eeb' x='10' width='11' height='11'/%3E%3Crect fill='%23b39ce9' y='10' width='11' height='11'/%3E%3Crect fill='%23b09ae6' x='20' width='11' height='11'/%3E%3Crect fill='%23ad98e3' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23ab96e1' y='20' width='11' height='11'/%3E%3Crect fill='%23a894de' x='30' width='11' height='11'/%3E%3Crect fill='%23a592dc' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23a390d9' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23a08ed6' y='30' width='11' height='11'/%3E%3Crect fill='%239d8cd4' x='40' width='11' height='11'/%3E%3Crect fill='%239b8ad1' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%239888cf' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%239686cc' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%239384c9' y='40' width='11' height='11'/%3E%3Crect fill='%239182c7' x='50' width='11' height='11'/%3E%3Crect fill='%238e80c4' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%238c7ec2' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23897cbf' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23877abc' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%238478ba' y='50' width='11' height='11'/%3E%3Crect fill='%238276b7' x='60' width='11' height='11'/%3E%3Crect fill='%237f74b5' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%237d72b2' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%237a70b0' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23786ead' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23756cab' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23736aa8' x='70' width='11' height='11'/%3E%3Crect fill='%237068a5' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%236e67a3' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%236c65a0' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%2369639e' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%2367619b' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23655f99' x='80' width='11' height='11'/%3E%3Crect fill='%23625d96' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23605b94' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%235e5991' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%235b578f' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%2359568c' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%2357548a' x='90' width='11' height='11'/%3E%3Crect fill='%23545288' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23525085' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23504e83' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%234e4c80' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%234b4b7e' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%2349497b' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23474779' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23454576' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23424374' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23404172' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%233e406f' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%233c3e6d' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%233a3c6a' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23383a68' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23363966' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23333763' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23313561' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%232f335f' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%232d325c' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%232B305A' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        min-height: 110vh;
    }

    h1{
        font-size: 3.5rem;
    }

    h2{
        font-size: 3rem;
    }

    h3{
        font-size: 2.5rem;
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
    li{
        width: 100%;
    }

`;
