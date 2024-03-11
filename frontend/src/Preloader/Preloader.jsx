import React from 'react'
import './preloader.css'
import $ from 'jquery'
import "jquery-ui-dist/jquery-ui"
import { useEffect } from 'react'

const Preloader = () => {
    useEffect(()=>{
            if ($('.loader-wrap').length) {
              $('.loader-wrap').delay(1400).fadeOut(450);
            }
          
        
          if ($(".preloader-close").length) {
            $(".preloader-close").on("click", function () {
              $('.loader-wrap').delay(200).fadeOut(500);
            })
          }
    },[])
  return (
    <>
     {/* Start preloader */}
    <div class="loader-wrap">
        <div class="preloader">
            <div class="preloader-close">x</div>
            <div id="handle-preloader" class="handle-preloader">
                <div class="animation-preloader">
                    <div class="spinner"></div>
                    <div class="txt-loading">
                        <span data-text-preloader="B" class="letters-loading">
                            B
                        </span> 
                        <span data-text-preloader="T" class="letters-loading">
                            T
                        </span> 
                        <span data-text-preloader="S" class="letters-loading">
                            S 
                        </span>&nbsp;&nbsp;&nbsp;
                        <span data-text-preloader="b" class="letters-loading">
                            b 
                        </span>
                        <span data-text-preloader="a" class="letters-loading">
                            a
                        </span>
                        <span data-text-preloader="n" class="letters-loading">
                            N
                        </span>
                        <span data-text-preloader="k" class="letters-loading">
                            k
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End preloader */}
    </>
  )
}

export default Preloader