import { createGlobalStyle } from "styled-components";
import bgcolor from "../assets/bgcolor.webp";

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
        box-sizing: border-box;
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

    html{
        
        scroll-behavior: smooth;
    }

    :root{
        --font-Macherie: 'macherie';
        --font-Doky: 'Doky';

        --menu-bg: #f3dcf386;
        --nav-color: #ffff;
        --nav-color-hover:#bfb1ff; 
        --nav-color-hover-shadow: #8280ff;
        --nav-color-hover-transparent:#4c41a299;
        --nav-link-fontsize: 1.5rem;

        --content-color: linear-gradient(180deg, #92749e 30%, #756fb7ae 99.47%);
        --content-header-color:linear-gradient(180deg, #5a289ca2 10%, transparent 100%);
        --content-shadow:  0px 0px 0px 1px #db80ff3c;
        --content-p-size: 1.5rem;
        --content-h3-size: 2.2rem;
        --content-h3-color: rgb(245, 166, 255);
        --content-h3-shadow: 2px 2px 2px #a7338a;
        --subtitle-logo-color: #d1beff;
        --social-color: #bfb1ff;
        --social-shadow: -1px 2px 2px #210041b2;
        --download-cv-color:#d1beff;
        
        --color-white: #ecfbff;
        --shadow-gray: #797979;

        --purple-strong: #4c41a2;
        --purple-medium: #b8a0ee;
        --purple-light: #f3dcf3;
        --purple-light-transparent: #f3dcf386;
        --white: #ffff;
        --black: #080008;

        --portfolio-card-background: linear-gradient(88.8deg, rgba(217, 217, 217, 0.11) 24.19%, rgba(217, 217, 217, 0) 98.58%);
        --portfolio-card-shadow: 1px 1px 10px black;
        --portfolio-card-font-size: 1.4rem;
        --portfolio-card-textshadow: none;
        --portfolio-card-font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        --portfolio-card-h1-size: 1.5rem;
        --portfolio-card-p-size: 1rem;
        --portfolio-card-hover-color:#370d4b75;

        --contact-color: #f3dcf3;
        --contact-color-hover: #f3dcf3;
        --contact-font-size: 1.7rem;
        --contact-icon-size: 3rem;
        --contact-icon-color: #f3dcf3;
    }

    body {
        font-family: var(--font-Macherie);
        font-display: swap;
        color: var(--color-white);
        text-shadow: 1px 1px 2px var(--shadow-gray);
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
        

        background: url(${bgcolor}) repeat-x top, #2a013d;
        background-size: 100%;

    }

    //loading bar
    .loading-bar {
        height: 4px;
        width: 100%;
        background: #f2f2f2;
        position: relative;
    }

    .loading-bar-progress {
        height: 100%;
        background: #4caf50;
        position: absolute;
        top: 0;
        left: 0;
        transition: width 0.3s ease-in-out;
    }
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        text-align: center;
        font-size: 2rem;
        background-color: #392357;
        
    }

   h1,h2,h3{
    text-shadow:1px 1px 4px rgb(0,0,0,0.7);
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
