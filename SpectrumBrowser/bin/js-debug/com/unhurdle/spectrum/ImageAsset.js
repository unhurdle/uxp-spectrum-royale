/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/ImageAsset.as
 * com.unhurdle.spectrum.ImageAsset
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.ImageAsset');
/* Royale Dependency List: com.unhurdle.spectrum.newElement,org.apache.royale.core.IValuesImpl,org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.Asset');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.Asset}
 */
com.unhurdle.spectrum.ImageAsset = function() {
  com.unhurdle.spectrum.ImageAsset.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.ImageAsset, com.unhurdle.spectrum.Asset);


/**
 * @protected
 * @type {HTMLImageElement}
 */
com.unhurdle.spectrum.ImageAsset.prototype._imageElement = null;


/**
 * @protected
 * @type {string}
 */
com.unhurdle.spectrum.ImageAsset.prototype._src = null;


/**
 * @protected
 */
com.unhurdle.spectrum.ImageAsset.prototype.createImageElement = function() {
  this._imageElement = com.unhurdle.spectrum.newElement("img", this.appendSelector("-image"));
  this._imageElement.addEventListener('load', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ImageAsset_loadHandler, this, 'com_unhurdle_spectrum_ImageAsset_loadHandler'));
  this._imageElement.addEventListener('error', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ImageAsset_errorHandler, this, 'com_unhurdle_spectrum_ImageAsset_errorHandler'));
  this.element.appendChild(this._imageElement);
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.ImageAsset.prototype.com_unhurdle_spectrum_ImageAsset_loadHandler = function(ev) {
  this.dispatchEvent(new org.apache.royale.events.Event("load"));
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.ImageAsset.prototype.com_unhurdle_spectrum_ImageAsset_errorHandler = function(ev) {
  this.dispatchEvent(new org.apache.royale.events.Event("error"));
};


/**
 * @nocollapse
 * @export
 * @type {HTMLImageElement}
 */
com.unhurdle.spectrum.ImageAsset.prototype.imageElement;


com.unhurdle.spectrum.ImageAsset.prototype.get__imageElement = function() {
  return this._imageElement;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ImageAsset.prototype.src;


com.unhurdle.spectrum.ImageAsset.prototype.get__src = function() {
  return this._src;
};


com.unhurdle.spectrum.ImageAsset.prototype.set__src = function(value) {
  if (value != this._src) {
    if (!this._imageElement) {
      this.createImageElement();
    }
    this._imageElement.src = value;
    this._src = value;
  }
};


/**
 * @nocollapse
 * @export
 * @type {CSSStyleDeclaration}
 */
com.unhurdle.spectrum.ImageAsset.prototype.imageStyle;


com.unhurdle.spectrum.ImageAsset.prototype.get__imageStyle = function() {
  if (!this._imageElement) {
    this.createImageElement();
  }
  return this._imageElement.style;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.ImageAsset.prototype.imageStyleString;


com.unhurdle.spectrum.ImageAsset.prototype.set__imageStyleString = function(value) {
  var /** @type {org.apache.royale.core.IValuesImpl} */ valuesImpl = org.apache.royale.core.ValuesManager.valuesImpl;
  var /** @type {Object} */ styles = valuesImpl.parseStyles(value);
  var /** @type {CSSStyleDeclaration} */ imgStyles = this.imageStyle;
  for (var /** @type {string} */ x in styles) {
    imgStyles[x] = styles[x];
  }
};


Object.defineProperties(com.unhurdle.spectrum.ImageAsset.prototype, /** @lends {com.unhurdle.spectrum.ImageAsset.prototype} */ {
/**
 * @type {HTMLImageElement}
 */
imageElement: {
get: com.unhurdle.spectrum.ImageAsset.prototype.get__imageElement},
/**
 * @type {string}
 */
src: {
get: com.unhurdle.spectrum.ImageAsset.prototype.get__src,
set: com.unhurdle.spectrum.ImageAsset.prototype.set__src},
/**
 * @type {CSSStyleDeclaration}
 */
imageStyle: {
get: com.unhurdle.spectrum.ImageAsset.prototype.get__imageStyle},
/**
 * @type {string}
 */
imageStyleString: {
set: com.unhurdle.spectrum.ImageAsset.prototype.set__imageStyleString}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.ImageAsset.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ImageAsset', qName: 'com.unhurdle.spectrum.ImageAsset', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.ImageAsset.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'imageElement': { type: 'HTMLImageElement', access: 'readonly', declaredBy: 'com.unhurdle.spectrum.ImageAsset'},
        'src': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ImageAsset'},
        'imageStyle': { type: 'CSSStyleDeclaration', access: 'readonly', declaredBy: 'com.unhurdle.spectrum.ImageAsset'},
        'imageStyleString': { type: 'String', access: 'writeonly', declaredBy: 'com.unhurdle.spectrum.ImageAsset'}
      };
    },
    methods: function () {
      return {
        'ImageAsset': { type: '', declaredBy: 'com.unhurdle.spectrum.ImageAsset'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.ImageAsset.prototype.ROYALE_COMPILE_FLAGS = 11;