;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-radio" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448S759.04 960 512 960zM512 128c-211.744 0-384 172.256-384 384s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128z"  ></path>' +
    '' +
    '<path d="M512 512m-250 0a250 250 0 1 0 500 0 250 250 0 1 0-500 0Z"  ></path>' +
    '' +
    '<path d="M552.5 114.5A0.5 1 0 1 1 552.5 115.5Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tn-radio" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.668322 1024c-68.901549 0-135.753419-13.544863-198.698215-40.255131C251.188521 957.951024 196.607112 921.030201 149.741663 874.011333 53.357635 777.310239 0.277689 648.745018 0.277689 511.999489c0-136.744506 53.079947-265.308705 149.463974-362.010821 46.86545-47.018869 101.446858-83.939691 162.228445-109.733536 62.944796-26.711291 129.796666-40.255131 198.698215-40.255131 68.900526 0 135.753419 13.544863 198.697192 40.255131 60.781587 25.793845 115.362995 62.713645 162.228445 109.733536 96.384027 96.701093 149.463974 225.266315 149.463974 362.010821 0 136.745529-53.079947 265.308705-149.463974 362.011844-46.86545 47.018869-101.446858 83.939691-162.228445 109.733536C646.421741 1010.455137 579.568848 1024 510.668322 1024zM510.668322 45.369102c-256.413465 0-465.021532 209.329137-465.021532 466.629364 0 257.30125 208.608067 466.63141 465.021532 466.63141S975.688831 769.300738 975.688831 511.999489C975.688831 254.699262 767.081787 45.369102 510.668322 45.369102z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)