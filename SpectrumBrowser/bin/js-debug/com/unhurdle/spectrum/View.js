/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/View.as
 * com.unhurdle.spectrum.View
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.View');
/* Royale Dependency List: org.apache.royale.binding.ViewDataBinding,org.apache.royale.html.beads.layouts.NoLayout*/

goog.require('org.apache.royale.core.View');



/**
 * @constructor
 * @extends {org.apache.royale.core.View}
 */
com.unhurdle.spectrum.View = function() {
  com.unhurdle.spectrum.View.base(this, 'constructor');
  this.addBead(new org.apache.royale.html.beads.layouts.NoLayout());
  this.addBead(new org.apache.royale.binding.ViewDataBinding());
};
goog.inherits(com.unhurdle.spectrum.View, org.apache.royale.core.View);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.View.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'View', qName: 'com.unhurdle.spectrum.View', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.View.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'View': { type: '', declaredBy: 'com.unhurdle.spectrum.View'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.View.prototype.ROYALE_COMPILE_FLAGS = 11;