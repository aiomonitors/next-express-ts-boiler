import React from 'react';
import App from 'next/app';
import Head from 'next/head'

export default class AppConfig extends App {
    render() {

        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Boilerplate</title>
                </Head>
                <Component {...pageProps} />
                <style jsx global>{`
                    body {
                        min-height: 100vh;
                        height: auto;
                        margin: 0 auto;
                        font-family: Avenir, --apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
                    }

                    .hover-shadow-box-animation {
                        display: inline-block;
                        vertical-align: middle;
                        transform: perspective(1px) translateZ(0);
                        box-shadow: 0 0 1px transparent;
                        margin: 10px;
                        transition-duration: 0.3s;
                        transition-property: box-shadow, transform;
                    }
                    
                    .hover-shadow-box-animation:hover,
                    .hover-shadow-box-animation:focus,
                    .hover-shadow-box-animation:active {
                        box-shadow: 1px 10px 10px -10px rgba(0, 0, 24, 0.5);
                        transform: scale(1.2);
                        z-index: 100;
                    }
    
                    .dynamic-shadow {
                        position: relative;
                        width: 10rem;
                        height: 10rem;
                        background: linear-gradient(75deg, #6d78ff, #00ffb8);
                        z-index: 1;
                    }
                    
                    .dynamic-shadow::after {
                        content: '';
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        background: inherit;
                        top: 0.5rem;
                        filter: blur(0.4rem);
                        opacity: 0.7;
                        z-index: -1;
                    }
    
                    @keyframes donut-spin {
                        0% {
                        transform: rotate(0deg);
                        }
                        100% {
                        transform: rotate(360deg);
                        }
                    }
                    
                    .donut {
                        display: inline-block;
                        border: 4px solid rgba(0, 0, 0, 0.1);
                        border-left-color: #7983ff;
                        border-radius: 50%;
                        animation: donut-spin 1.2s linear infinite;
                        margin-top: 10px;
                    }

                    .cd-popup {
                        position: fixed;
                        left: 0;
                        top: 0;
                        min-height: 100px;
                        max-height: 200px;
                        width: 100%;
                        background-color: rgba(94, 110, 141, 0.9);
                        opacity: 0;
                        visibility: hidden;
                        -webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s;
                        -moz-transition: opacity 0.3s 0s, visibility 0s 0.3s;
                        transition: opacity 0.3s 0s, visibility 0s 0.3s;
                      }
                      .cd-popup.is-visible {
                        opacity: 1;
                        visibility: visible;
                        -webkit-transition: opacity 0.3s 0s, visibility 0s 0s;
                        -moz-transition: opacity 0.3s 0s, visibility 0s 0s;
                        transition: opacity 0.3s 0s, visibility 0s 0s;
                      }
                      
                      .cd-popup-container {
                        position: relative;
                        width: 90%;
                        max-width: 400px;
                        margin: 4em auto;
                        background: #FFF;
                        border-radius: .25em .25em .4em .4em;
                        text-align: center;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
                        -webkit-transform: translateY(-40px);
                        -moz-transform: translateY(-40px);
                        -ms-transform: translateY(-40px);
                        -o-transform: translateY(-40px);
                        transform: translateY(-40px);
                        /* Force Hardware Acceleration in WebKit */
                        -webkit-backface-visibility: hidden;
                        -webkit-transition-property: -webkit-transform;
                        -moz-transition-property: -moz-transform;
                        transition-property: transform;
                        -webkit-transition-duration: 0.3s;
                        -moz-transition-duration: 0.3s;
                        transition-duration: 0.3s;
                      }
                      .cd-popup-container .text {
                        padding: 3em 1em;
                        height: 100px;
                      }
                      .cd-popup-container .cd-buttons:after {
                        content: "";
                        clear: both;
                      }

                      .cd-popup-container .cd-buttons {
                          display: flex;
                          flex-direction: row;
                          justify-content: space-between;
                      }
                      
                      .cd-popup-container .cd-buttons a {
                        width: 50%;
                        list-style: none;
                      }
                      .cd-popup-container .cd-buttons a {
                        display: block;
                        height: 60px;
                        line-height: 60px;
                        text-transform: uppercase;
                        color: white;
                        background-color: black;
                        -webkit-transition: background-color 0.2s;
                        -moz-transition: background-color 0.2s;
                        transition: background-color 0.2s;
                      }
                      .cd-popup-container .cd-buttons .confirm {
                        background: #fc7169;
                        border-radius: 0 0 0 .25em;
                      }
                      .no-touch .cd-popup-container .cd-buttons .confirm:hover {
                        background-color: #fc8982;
                      }
                      .cd-popup-container .cd-buttons .cancel {
                        background: #b6bece;
                        border-radius: 0 0 .25em 0;
                      }
                      .no-touch .cd-popup-container .cd-buttons .cancel:hover {
                        background-color: #c5ccd8;
                      }
                      .cd-popup-container .cd-popup-close {
                        position: absolute;
                        top: 8px;
                        right: 8px;
                        width: 30px;
                        height: 30px;
                      }
                      .cd-popup-container .cd-popup-close::before, .cd-popup-container .cd-popup-close::after {
                        content: '';
                        position: absolute;
                        top: 12px;
                        width: 14px;
                        height: 3px;
                        background-color: #8f9cb5;
                      }
                      .cd-popup-container .cd-popup-close::before {
                        -webkit-transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                        left: 8px;
                      }
                      .cd-popup-container .cd-popup-close::after {
                        -webkit-transform: rotate(-45deg);
                        -moz-transform: rotate(-45deg);
                        -ms-transform: rotate(-45deg);
                        -o-transform: rotate(-45deg);
                        transform: rotate(-45deg);
                        right: 8px;
                      }
                      .is-visible .cd-popup-container {
                        -webkit-transform: translateY(0);
                        -moz-transform: translateY(0);
                        -ms-transform: translateY(0);
                        -o-transform: translateY(0);
                        transform: translateY(0);
                      }
                      @media only screen and (min-width: 1170px) {
                        .cd-popup-container {
                          margin: 8em auto;
                        }
                      }

                      .alert {
                        padding: 10px;
                        color: white;
                        margin-bottom: 15px;
                        width: 280px;
                        border-radius: 10px;
                      }

                      .success {
                        background-color: #58D68D
                      }

                      .danger {
                        background-color: #f44336; /* Red */
                      }
                      
                      /* The close button */
                      .closebtn {
                        margin-left: 15px;
                        color: white;
                        font-weight: bold;
                        float: right;
                        font-size: 22px;
                        line-height: 20px;
                        cursor: pointer;
                        transition: 0.3s;
                      }
                      
                      /* When moving the mouse over the close button */
                      .closebtn:hover {
                        color: black;
                      }

                      .fade-right {
                        height: auto;
                      }
                      /**
                       * Tooltip Styles
                       */
                      
                      /* Add this attribute to the element that needs a tooltip */
                      [data-tooltip] {
                        position: relative;
                        z-index: 2;
                        cursor: pointer;
                      }
                      
                      /* Hide the tooltip content by default */
                      [data-tooltip]:before,
                      [data-tooltip]:after {
                        visibility: hidden;
                        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                        filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
                        opacity: 0;
                        pointer-events: none;
                      }
                      
                      /* Position tooltip above the element */
                      [data-tooltip]:before {
                        position: absolute;
                        bottom: 120%;
                        left: 50%;
                        margin-bottom: 5px;
                        margin-left: -40px;
                        padding: 7px;
                        width: 100px;
                        -webkit-border-radius: 3px;
                        -moz-border-radius: 3px;
                        border-radius: 3px;
                        background-color: #000;
                        background-color: hsla(0, 0%, 20%, 0.9);
                        color: #fff;
                        content: attr(data-tooltip);
                        text-align: center;
                        font-size: 14px;
                        line-height: 1.2;
                      }
                      
                      /* Triangle hack to make tooltip look like a speech bubble */
                      [data-tooltip]:after {
                        position: absolute;
                        bottom: 120%;
                        left: 50%;
                        margin-left: -5px;
                        width: 0;
                        border-top: 5px solid #000;
                        border-top: 5px solid hsla(0, 0%, 20%, 0.9);
                        border-right: 5px solid transparent;
                        border-left: 5px solid transparent;
                        content: " ";
                        font-size: 0;
                        line-height: 0;
                      }
                      
                      /* Show tooltip content on hover */
                      [data-tooltip]:hover:before,
                      [data-tooltip]:hover:after {
                        visibility: visible;
                        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                        filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
                        opacity: 1;
                      }

                      @media screen and (min-width: 768px) {
                        .alert {
                          width: 700px;
                        }
                      }

                      

                `}</style>
            </>
        )
    }
}