/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// const { DOMParser } = require('./dom-parser');
// UMD pattern via umdjs
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  }
  else if (typeof module === 'object' && module.exports) {
    // CommonJS-like
    module.exports = factory();
  }
  else {
    // Browser
    root.loadIcons = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  function handleError(string) {
    string = 'loadIcons: '+string;
    var error = new Error(string);

    console.error(error.toString());

    if (typeof callback === 'function') {
      callback(error);
    }
  }

  

  function loadIcons(svgURL, callback) {
    // Request the SVG sprite
    // var req = new XMLHttpRequest();
    // req.open('GET', svgURL, true);
    // req.addEventListener('load', injectSVG.bind(req, svgURL, callback));
    // req.addEventListener('error', function(event) {
    //   handleError('Request failed');
    // });
    // req.send();
    var xhr = new XMLHttpRequest();

    // xhr.open("GET",svgURL,false);
    xhr.open("GET",svgURL,true);
    // Following line is just to be on the safe side;
    // not needed if your server delivers SVG with correct MIME type
    xhr.overrideMimeType("image/svg+xml");
    xhr.onload = function(e) {
      // You might also want to check for xhr.readyState/xhr.status here
      var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
      svg.innerHTML = xhr.responseText;

      document.getElementById("svgContainer")
        .appendChild(svg);
    };
    xhr.onerror = function (e) {
      handleError('Request failed');
    }
    xhr.send("");

  }

  return loadIcons;
}));
loadIcons('assets/icons/spectrum-css-icons.svg');
// add this in once the icons are available
// https://github.com/adobe/spectrum-css/issues/60
loadIcons('assets/icons/spectrum-icons.svg');
