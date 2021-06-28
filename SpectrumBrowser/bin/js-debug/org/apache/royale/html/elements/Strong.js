/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/elements/Strong.as
 * org.apache.royale.html.elements.Strong
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.elements.Strong');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.addElementToWrapper*/

goog.require('org.apache.royale.html.TextNodeContainerBase');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 * @constructor
 * @extends {org.apache.royale.html.TextNodeContainerBase}
 */
org.apache.royale.html.elements.Strong = function() {
  org.apache.royale.html.elements.Strong.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.elements.Strong, org.apache.royale.html.TextNodeContainerBase);


/**
 * @protected
 * @override
 */
org.apache.royale.html.elements.Strong.prototype.createElement = function() {
  return org.apache.royale.html.util.addElementToWrapper(this, 'strong');
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.elements.Strong.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Strong', qName: 'org.apache.royale.html.elements.Strong', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.elements.Strong.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'Strong': { type: '', declaredBy: 'org.apache.royale.html.elements.Strong'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.elements.Strong.prototype.ROYALE_COMPILE_FLAGS = 10;