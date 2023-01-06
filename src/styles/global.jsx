import { createGlobalStyle } from "styled-components";
import Macherie from "../fonts/macherie.ttf";
import Doky from "../fonts/DokyRegular.ttf";
import bgcolor from "../assets/bgcolor.png";
import bgstars from "../assets/bgstars.png";

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
        font-display: swap;
        color: var(--color-white);
        text-shadow: 1px 1px 2px var(--shadow-gray);
        overflow-x: hidden;
        

        background: url(${bgcolor}) repeat-x top scroll;
        background-size: cover;

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
