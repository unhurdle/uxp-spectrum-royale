/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IItemRenderer.as
 * org.apache.royale.core.IItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IItemRenderer');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IChild');
goog.require('org.apache.royale.core.IStrand');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 * @extends {org.apache.royale.core.IChild}
 * @extends {org.apache.royale.core.IStrand}
 */
org.apache.royale.core.IItemRenderer = function() {
};
/**  * @type {Object}
 */org.apache.royale.core.IItemRenderer.prototype.data;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IItemRenderer', qName: 'org.apache.royale.core.IItemRenderer', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IChild, org.apache.royale.core.IStrand] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'data': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.IItemRenderer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IItemRenderer.prototype.ROYALE_COMPILE_FLAGS = 10;