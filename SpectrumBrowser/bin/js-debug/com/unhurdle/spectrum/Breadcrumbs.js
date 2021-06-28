/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/Breadcrumbs.as
 * com.unhurdle.spectrum.Breadcrumbs
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.Breadcrumbs');
/* Royale Dependency List: */

goog.require('com.unhurdle.spectrum.List');



/**
 * <inject_html>
 * <link rel="stylesheet" href="assets/css/components/breadcrumb/dist.css">
 * </inject_html>
 * 
 * @constructor
 * @extends {com.unhurdle.spectrum.List}
 */
com.unhurdle.spectrum.Breadcrumbs = function() {
  com.unhurdle.spectrum.Breadcrumbs.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.Breadcrumbs, com.unhurdle.spectrum.List);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.getSelector = function() {
  return "spectrum-Breadcrumbs";
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.getTag = function() {
  return "div";
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.com_unhurdle_spectrum_Breadcrumbs__isTitle = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.com_unhurdle_spectrum_Breadcrumbs__multiline = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.com_unhurdle_spectrum_Breadcrumbs__compact = false;


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.isTitle;


com.unhurdle.spectrum.Breadcrumbs.prototype.get__isTitle = function() {
  return this.com_unhurdle_spectrum_Breadcrumbs__isTitle;
};


com.unhurdle.spectrum.Breadcrumbs.prototype.set__isTitle = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Breadcrumbs__isTitle) {
    this.toggle(this.valueToSelector("title"), value);
  }
  this.com_unhurdle_spectrum_Breadcrumbs__isTitle = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.multiline;


com.unhurdle.spectrum.Breadcrumbs.prototype.get__multiline = function() {
  return this.com_unhurdle_spectrum_Breadcrumbs__multiline;
};


com.unhurdle.spectrum.Breadcrumbs.prototype.set__multiline = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Breadcrumbs__multiline) {
    this.toggle(this.valueToSelector("multiline"), value);
  }
  this.com_unhurdle_spectrum_Breadcrumbs__multiline = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.compact;


com.unhurdle.spectrum.Breadcrumbs.prototype.get__compact = function() {
  return this.com_unhurdle_spectrum_Breadcrumbs__compact;
};


com.unhurdle.spectrum.Breadcrumbs.prototype.set__compact = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Breadcrumbs__compact) {
    this.toggle(this.valueToSelector("compact"), value);
  }
  this.com_unhurdle_spectrum_Breadcrumbs__compact = value;
};


Object.defineProperties(com.unhurdle.spectrum.Breadcrumbs.prototype, /** @lends {com.unhurdle.spectrum.Breadcrumbs.prototype} */ {
/**
 * @type {boolean}
 */
isTitle: {
get: com.unhurdle.spectrum.Breadcrumbs.prototype.get__isTitle,
set: com.unhurdle.spectrum.Breadcrumbs.prototype.set__isTitle},
/**
 * @type {boolean}
 */
multiline: {
get: com.unhurdle.spectrum.Breadcrumbs.prototype.get__multiline,
set: com.unhurdle.spectrum.Breadcrumbs.prototype.set__multiline},
/**
 * @type {boolean}
 */
compact: {
get: com.unhurdle.spectrum.Breadcrumbs.prototype.get__compact,
set: com.unhurdle.spectrum.Breadcrumbs.prototype.set__compact}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Breadcrumbs', qName: 'com.unhurdle.spectrum.Breadcrumbs', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'isTitle': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Breadcrumbs'},
        'multiline': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Breadcrumbs'},
        'compact': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Breadcrumbs'}
      };
    },
    methods: function () {
      return {
        'Breadcrumbs': { type: '', declaredBy: 'com.unhurdle.spectrum.Breadcrumbs'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Breadcrumbs.prototype.ROYALE_COMPILE_FLAGS = 11;