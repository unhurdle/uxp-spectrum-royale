/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/DialogTitle.as
 * com.unhurdle.spectrum.DialogTitle
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.DialogTitle');
/* Royale Dependency List: */

goog.require('com.unhurdle.spectrum.TextGroup');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.TextGroup}
 */
com.unhurdle.spectrum.DialogTitle = function() {
  com.unhurdle.spectrum.DialogTitle.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.DialogTitle, com.unhurdle.spectrum.TextGroup);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.DialogTitle.prototype.getSelector = function() {
  return "spectrum-Dialog-title";
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.DialogTitle.prototype.getTag = function() {
  return "h2";
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.DialogTitle.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DialogTitle', qName: 'com.unhurdle.spectrum.DialogTitle', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.DialogTitle.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'DialogTitle': { type: '', declaredBy: 'com.unhurdle.spectrum.DialogTitle'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.DialogTitle.prototype.ROYALE_COMPILE_FLAGS = 11;