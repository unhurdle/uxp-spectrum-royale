/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/Background.as
 * com.unhurdle.spectrum.Background
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.Background');
/* Royale Dependency List: */

goog.require('org.apache.royale.html.elements.Div');



/**
 * Use this class for backgrounds behind "background elements" (such as Background Buttons).
 * Setting the color sets both the background color and the color value which
 * bleeds through to "background elements" which inherit the color.
 * @constructor
 * @extends {org.apache.royale.html.elements.Div}
 */
com.unhurdle.spectrum.Background = function() {
  com.unhurdle.spectrum.Background.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.Background, org.apache.royale.html.elements.Div);


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.Background.prototype.com_unhurdle_spectrum_Background__color = null;


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Background.prototype.color;


com.unhurdle.spectrum.Background.prototype.get__color = function() {
  return this.com_unhurdle_spectrum_Background__color;
};


com.unhurdle.spectrum.Background.prototype.set__color = function(value) {
  this.com_unhurdle_spectrum_Background__color = value;
  this.element.style.backgroundColor = value;
  this.element.style.color = value;
};


Object.defineProperties(com.unhurdle.spectrum.Background.prototype, /** @lends {com.unhurdle.spectrum.Background.prototype} */ {
/**
 * @type {string}
 */
color: {
get: com.unhurdle.spectrum.Background.prototype.get__color,
set: com.unhurdle.spectrum.Background.prototype.set__color}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.Background.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Background', qName: 'com.unhurdle.spectrum.Background', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.Background.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'color': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Background'}
      };
    },
    methods: function () {
      return {
        'Background': { type: '', declaredBy: 'com.unhurdle.spectrum.Background'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Background.prototype.ROYALE_COMPILE_FLAGS = 11;