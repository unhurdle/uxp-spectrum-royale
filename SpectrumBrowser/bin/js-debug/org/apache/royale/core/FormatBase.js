/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/FormatBase.as
 * org.apache.royale.core.FormatBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.FormatBase');
/* Royale Dependency List: org.apache.royale.core.IStrand*/

goog.require('org.apache.royale.core.IFormatter');



/**
 * @constructor
 * @implements {org.apache.royale.core.IFormatter}
 */
org.apache.royale.core.FormatBase = function() {
};


/**
 *  The resulting formatted value as a string.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.6
 * @param {Object} value
 * @return {string}
 */
org.apache.royale.core.FormatBase.prototype.format = function(value) {
  return null;
};


/**
 * @protected
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.FormatBase.prototype._strand;


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.FormatBase.prototype.strand;


org.apache.royale.core.FormatBase.prototype.set__strand = function(value) {
  this._strand = value;
};


Object.defineProperties(org.apache.royale.core.FormatBase.prototype, /** @lends {org.apache.royale.core.FormatBase.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.core.FormatBase.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.FormatBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FormatBase', qName: 'org.apache.royale.core.FormatBase', kind: 'class' }], interfaces: [org.apache.royale.core.IFormatter] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.FormatBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.core.FormatBase'}
      };
    },
    methods: function () {
      return {
        'FormatBase': { type: '', declaredBy: 'org.apache.royale.core.FormatBase'},
        'format': { type: 'String', declaredBy: 'org.apache.royale.core.FormatBase', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.FormatBase.prototype.ROYALE_COMPILE_FLAGS = 10;