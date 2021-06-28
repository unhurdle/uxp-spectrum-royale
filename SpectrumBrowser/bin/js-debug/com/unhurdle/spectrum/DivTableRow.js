/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/DivTableRow.as
 * com.unhurdle.spectrum.DivTableRow
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.DivTableRow');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement*/

goog.require('com.unhurdle.spectrum.TableRow');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.TableRow}
 */
com.unhurdle.spectrum.DivTableRow = function() {
  com.unhurdle.spectrum.DivTableRow.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.DivTableRow, com.unhurdle.spectrum.TableRow);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.DivTableRow.prototype.getTag = function() {
  return "div";
};


/**
 * @private
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
com.unhurdle.spectrum.DivTableRow.prototype.com_unhurdle_spectrum_DivTableRow_elem = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.DivTableRow.prototype.createElement = function() {
  this.com_unhurdle_spectrum_DivTableRow_elem = com.unhurdle.spectrum.DivTableRow.superClass_.createElement.apply(this);
  this.com_unhurdle_spectrum_DivTableRow_elem.style.display = "flex";
  this.com_unhurdle_spectrum_DivTableRow_elem.setAttribute("role", "row");
  return this.com_unhurdle_spectrum_DivTableRow_elem;
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.DivTableRow.prototype.com_unhurdle_spectrum_DivTableRow__isDropTarget = false;


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.DivTableRow.prototype.isDropTarget;


com.unhurdle.spectrum.DivTableRow.prototype.get__isDropTarget = function() {
  return this.com_unhurdle_spectrum_DivTableRow__isDropTarget;
};


com.unhurdle.spectrum.DivTableRow.prototype.set__isDropTarget = function(value) {
  if (value != this.com_unhurdle_spectrum_DivTableRow__isDropTarget) {
    this.toggle("is-drop-target", value);
  }
  this.com_unhurdle_spectrum_DivTableRow__isDropTarget = value;
};


Object.defineProperties(com.unhurdle.spectrum.DivTableRow.prototype, /** @lends {com.unhurdle.spectrum.DivTableRow.prototype} */ {
/**
 * @type {boolean}
 */
isDropTarget: {
get: com.unhurdle.spectrum.DivTableRow.prototype.get__isDropTarget,
set: com.unhurdle.spectrum.DivTableRow.prototype.set__isDropTarget}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.DivTableRow.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DivTableRow', qName: 'com.unhurdle.spectrum.DivTableRow', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.DivTableRow.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'isDropTarget': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.DivTableRow'}
      };
    },
    methods: function () {
      return {
        'DivTableRow': { type: '', declaredBy: 'com.unhurdle.spectrum.DivTableRow'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.DivTableRow.prototype.ROYALE_COMPILE_FLAGS = 11;