/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ContainerBaseStrandChildren.as
 * org.apache.royale.core.ContainerBaseStrandChildren
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ContainerBaseStrandChildren');
/* Royale Dependency List: org.apache.royale.core.IChild,org.apache.royale.core.IContainerBaseStrandChildrenHost,org.apache.royale.core.IParent,org.apache.royale.core.IPopUpHost,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IPopUpHostParent');



/**
 *  Constructor.
 *  
 *  @royaleignorecoercion org.apache.royale.core.ContainerBase
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * 	@royaleignorecoercion org.apache.royale.core.IContainerBaseStrandChildrenHost
 * @constructor
 * @implements {org.apache.royale.core.IPopUpHostParent}
 * @param {org.apache.royale.core.IParent} owner
 */
org.apache.royale.core.ContainerBaseStrandChildren = function(owner) {
  ;
  this.owner = owner;
};


/**
 * @type {org.apache.royale.core.IContainerBaseStrandChildrenHost}
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.owner;


/**
 *  @asprivate
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  this.owner.$addElement(c, dispatchEvent);
};


/**
 *  @asprivate
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  this.owner.$addElementAt(c, index, dispatchEvent);
};


/**
 *  @asprivate
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  this.owner.$removeElement(c, dispatchEvent);
};


/**
 *  @asprivate
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.getElementIndex = function(c) {
  return this.owner.$getElementIndex(c);
};


/**
 *  @asprivate
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.getElementAt = function(index) {
  return this.owner.$getElementAt(index);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.numElements;


org.apache.royale.core.ContainerBaseStrandChildren.prototype.get__numElements = function() {
  return this.owner.$numElements;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IPopUpHost}
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.popUpHost;


org.apache.royale.core.ContainerBaseStrandChildren.prototype.get__popUpHost = function() {
  return org.apache.royale.utils.Language.as(this.owner, org.apache.royale.core.IPopUpHost);
};


Object.defineProperties(org.apache.royale.core.ContainerBaseStrandChildren.prototype, /** @lends {org.apache.royale.core.ContainerBaseStrandChildren.prototype} */ {
/**
 * @type {number}
 */
numElements: {
get: org.apache.royale.core.ContainerBaseStrandChildren.prototype.get__numElements},
/**
 * @type {org.apache.royale.core.IPopUpHost}
 */
popUpHost: {
get: org.apache.royale.core.ContainerBaseStrandChildren.prototype.get__popUpHost}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ContainerBaseStrandChildren', qName: 'org.apache.royale.core.ContainerBaseStrandChildren', kind: 'class' }], interfaces: [org.apache.royale.core.IPopUpHostParent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'owner': { type: 'org.apache.royale.core.IContainerBaseStrandChildrenHost', get_set: function (/** org.apache.royale.core.ContainerBaseStrandChildren */ inst, /** * */ v) {return v !== undefined ? inst.owner = v : inst.owner;}}
      };
    },
    accessors: function () {
      return {
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.ContainerBaseStrandChildren'},
        'popUpHost': { type: 'org.apache.royale.core.IPopUpHost', access: 'readonly', declaredBy: 'org.apache.royale.core.ContainerBaseStrandChildren'}
      };
    },
    methods: function () {
      return {
        'ContainerBaseStrandChildren': { type: '', declaredBy: 'org.apache.royale.core.ContainerBaseStrandChildren', parameters: function () { return [ 'org.apache.royale.core.IParent', false ]; }},
        'addElement': { type: 'void', declaredBy: 'org.apache.royale.core.ContainerBaseStrandChildren', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.ContainerBaseStrandChildren', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'int', false ,'Boolean', true ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.ContainerBaseStrandChildren', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.core.ContainerBaseStrandChildren', parameters: function () { return [ 'org.apache.royale.core.IChild', false ]; }},
        'getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.ContainerBaseStrandChildren', parameters: function () { return [ 'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ContainerBaseStrandChildren.prototype.ROYALE_COMPILE_FLAGS = 10;