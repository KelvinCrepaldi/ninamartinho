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
        --font-title: 'Asap Condensed';
        --font-text: 'Mulish';
        --text-color: #f5eaf5;

        --menu-bg: #53357a;
        --nav-color: #ffff;
        --nav-color-hover:#bfb1ff; 
        --nav-color-hover-shadow: #8280ff;
        --nav-color-hover-transparent:#4c41a299;
        --nav-link-fontsize: 1.5rem;

        --content-BackgroundColor: linear-gradient(180deg, #eddef3 30%, #756fb7ae 95.47%);
        --content-header-color:linear-gradient(180deg, #382255d5 20%, transparent 100%);
        --content-p-size: 1.5rem;
        --content-h3-size: 2.2rem;
        --content-h3-color: rgb(245, 166, 255);
        --content-h3-shadow: 2px 2px 2px #a7338a;

        --social-font-size: calc(2rem + 1vw);
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

        --portfolio-card-background: linear-gradient(88.8deg, rgba(10, 10, 10, 0.11) 24.19%, rgba(217, 217, 217, 0) 50.58%);
     
        --portfolio-card-font-size: 1.4rem;
        --portfolio-card-textshadow: 1px 1px 2px black;
        --portfolio-card-h1-size: 1.5rem;
        --portfolio-card-p-size: 1rem;
        --portfolio-card-hover-color:#370d4b75;

        --contact-color: #f3dcf3;
        --contact-color-hover: #f3dcf3;
        --contact-font-size:  calc(1rem + 0.5vw);
        --contact-icon-size: 2rem;
        --contact-icon-color: #f3dcf3;

        --card-backgroundColor: linear-gradient(
            104deg,
            #5b1e9195 31%,
            rgba(160, 131, 196, 0) 100%
        );

        --about-star-color: #412758;
        --about-star-color-hover: white;
        --about-card-backgroundColor:linear-gradient(90deg, #4f3b61 0%, rgba(0,0,0,0) 100%) ;
    }

    body {
        font-family: var(--font-text);
        font-display: swap;
        color: var(--text-color);
        text-shadow: 1px 1px 2px var(--shadow-gray);
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
        
        //background: url(${bgcolor}) repeat-x top, #2a013d;
        background-color: #271631;


    }

   h1,h2,h3{
    font-family: var(--font-title);
    text-shadow:1px 1px 3px rgb(0,0,0,0.7);
   }

   h1{
    font-size: 2.5rem;
   }
   h2{
    font-size: 1.5rem;
   }

    p, li {
        font-size: 1rem;
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
