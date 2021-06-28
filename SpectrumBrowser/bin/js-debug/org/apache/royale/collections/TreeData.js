/**
 * Generated by Apache Royale Compiler from org/apache/royale/collections/TreeData.as
 * org.apache.royale.collections.TreeData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.collections.TreeData');
/* Royale Dependency List: org.apache.royale.collections.FlattenedList,org.apache.royale.collections.HierarchicalData,org.apache.royale.events.CollectionEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.collections.ICollectionView');
goog.require('org.apache.royale.collections.ITreeData');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.collections.ICollectionView}
 * @implements {org.apache.royale.collections.ITreeData}
 * @param {org.apache.royale.collections.HierarchicalData} source
 */
org.apache.royale.collections.TreeData = function(source) {
  org.apache.royale.collections.TreeData.base(this, 'constructor');
  this.org_apache_royale_collections_TreeData__hierarchicalData = source;
  this.org_apache_royale_collections_TreeData__flatList = new org.apache.royale.collections.FlattenedList(source);
  this.org_apache_royale_collections_TreeData__flatList.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_ADDED, org.apache.royale.utils.Language.closure(this.org_apache_royale_collections_TreeData_handleCollectionEvent, this, 'org_apache_royale_collections_TreeData_handleCollectionEvent'));
  this.org_apache_royale_collections_TreeData__flatList.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_REMOVED, org.apache.royale.utils.Language.closure(this.org_apache_royale_collections_TreeData_handleCollectionEvent, this, 'org_apache_royale_collections_TreeData_handleCollectionEvent'));
  this.org_apache_royale_collections_TreeData__flatList.addEventListener(org.apache.royale.events.CollectionEvent.ITEM_UPDATED, org.apache.royale.utils.Language.closure(this.org_apache_royale_collections_TreeData_handleCollectionEvent, this, 'org_apache_royale_collections_TreeData_handleCollectionEvent'));
};
goog.inherits(org.apache.royale.collections.TreeData, org.apache.royale.events.EventDispatcher);


/**
 * Forwards CollectionEvents from the internal FlattenedList as if they came
 * from this TreeData, further mimicking an ICollectionView.
 * 
 * @asprivate
 * @private
 * @param {org.apache.royale.events.CollectionEvent} event
 */
org.apache.royale.collections.TreeData.prototype.org_apache_royale_collections_TreeData_handleCollectionEvent = function(event) {
  var /** @type {org.apache.royale.events.CollectionEvent} */ newEvent = new org.apache.royale.events.CollectionEvent(event.type);
  newEvent.item = event.item;
  newEvent.index = event.index;
  this.dispatchEvent(newEvent);
};


/**
 * @private
 * @type {org.apache.royale.collections.HierarchicalData}
 */
org.apache.royale.collections.TreeData.prototype.org_apache_royale_collections_TreeData__hierarchicalData;


/**
 * @private
 * @type {org.apache.royale.collections.FlattenedList}
 */
org.apache.royale.collections.TreeData.prototype.org_apache_royale_collections_TreeData__flatList;


/**
 * @param {Object} node
 * @return {boolean}
 */
org.apache.royale.collections.TreeData.prototype.hasChildren = function(node) {
  return this.org_apache_royale_collections_TreeData__flatList.hasChildren(node);
};


/**
 * @param {Object} node
 * @return {boolean}
 */
org.apache.royale.collections.TreeData.prototype.isOpen = function(node) {
  return this.org_apache_royale_collections_TreeData__flatList.isOpen(node);
};


/**
 * @param {Object} node
 */
org.apache.royale.collections.TreeData.prototype.openNode = function(node) {
  this.org_apache_royale_collections_TreeData__flatList.openNode(node);
};


/**
 * @param {Object} node
 */
org.apache.royale.collections.TreeData.prototype.closeNode = function(node) {
  this.org_apache_royale_collections_TreeData__flatList.closeNode(node);
};


/**
 * @param {Object} node
 * @return {number}
 */
org.apache.royale.collections.TreeData.prototype.getDepth = function(node) {
  return this.org_apache_royale_collections_TreeData__flatList.getDepth(node);
};


/**
 * @param {number} index
 * @return {Object}
 */
org.apache.royale.collections.TreeData.prototype.getItemAt = function(index) {
  return this.org_apache_royale_collections_TreeData__flatList.getItemAt(index);
};


/**
 * @param {Object} item
 * @return {number}
 */
org.apache.royale.collections.TreeData.prototype.getItemIndex = function(item) {
  return this.org_apache_royale_collections_TreeData__flatList.getItemIndex(item);
};


/**
 * @param {Object} item
 */
org.apache.royale.collections.TreeData.prototype.addItem = function(item) {
  this.org_apache_royale_collections_TreeData__flatList.addItem(item);
};


/**
 * @param {Object} item
 * @param {number} index
 */
org.apache.royale.collections.TreeData.prototype.addItemAt = function(item, index) {
  this.org_apache_royale_collections_TreeData__flatList.addItemAt(item, index);
};


/**
 * @param {Object} item
 * @param {number} index
 * @return {Object}
 */
org.apache.royale.collections.TreeData.prototype.setItemAt = function(item, index) {
  return this.org_apache_royale_collections_TreeData__flatList.setItemAt(item, index);
};


/**
 * @param {Object} item
 * @return {boolean}
 */
org.apache.royale.collections.TreeData.prototype.removeItem = function(item) {
  return this.org_apache_royale_collections_TreeData__flatList.removeItem(item);
};


/**
 * @param {number} index
 * @return {Object}
 */
org.apache.royale.collections.TreeData.prototype.removeItemAt = function(index) {
  return this.org_apache_royale_collections_TreeData__flatList.removeItemAt(index);
};


/**
 */
org.apache.royale.collections.TreeData.prototype.removeAll = function() {
  this.org_apache_royale_collections_TreeData__flatList.removeAll();
};


/**
 * @param {Object} item
 */
org.apache.royale.collections.TreeData.prototype.itemUpdated = function(item) {
  this.org_apache_royale_collections_TreeData__flatList.itemUpdated(item);
};


/**
 * @param {number} index
 */
org.apache.royale.collections.TreeData.prototype.itemUpdatedAt = function(index) {
  this.org_apache_royale_collections_TreeData__flatList.itemUpdatedAt(index);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.collections.TreeData.prototype.length;


org.apache.royale.collections.TreeData.prototype.get__length = function() {
  return this.org_apache_royale_collections_TreeData__flatList.length;
};


Object.defineProperties(org.apache.royale.collections.TreeData.prototype, /** @lends {org.apache.royale.collections.TreeData.prototype} */ {
/**
 * @type {number}
 */
length: {
get: org.apache.royale.collections.TreeData.prototype.get__length}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.collections.TreeData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TreeData', qName: 'org.apache.royale.collections.TreeData', kind: 'class' }], interfaces: [org.apache.royale.collections.ICollectionView, org.apache.royale.collections.ITreeData] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.collections.TreeData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'length': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.collections.TreeData'}
      };
    },
    methods: function () {
      return {
        'TreeData': { type: '', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'org.apache.royale.collections.HierarchicalData', false ]; }},
        'hasChildren': { type: 'Boolean', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'isOpen': { type: 'Boolean', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'openNode': { type: 'void', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'closeNode': { type: 'void', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'getDepth': { type: 'int', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'getItemAt': { type: 'Object', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'int', false ]; }},
        'getItemIndex': { type: 'int', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'addItem': { type: 'void', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'addItemAt': { type: 'void', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ,'int', false ]; }},
        'setItemAt': { type: 'Object', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ,'int', false ]; }},
        'removeItem': { type: 'Boolean', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'removeItemAt': { type: 'Object', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'int', false ]; }},
        'removeAll': { type: 'void', declaredBy: 'org.apache.royale.collections.TreeData'},
        'itemUpdated': { type: 'void', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'Object', false ]; }},
        'itemUpdatedAt': { type: 'void', declaredBy: 'org.apache.royale.collections.TreeData', parameters: function () { return [ 'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.collections.TreeData.prototype.ROYALE_COMPILE_FLAGS = 10;