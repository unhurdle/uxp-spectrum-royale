/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/TreeController.as
 * com.unhurdle.spectrum.TreeController
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.TreeController');
/* Royale Dependency List: com.unhurdle.spectrum.interfaces.IKeyboardHandler,org.apache.royale.collections.ITreeData,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ItemAddedEvent,org.apache.royale.events.ItemClickedEvent,org.apache.royale.events.ItemRemovedEvent,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController');



/**
 * @constructor
 * @extends {org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController}
 */
com.unhurdle.spectrum.TreeController = function() {
  com.unhurdle.spectrum.TreeController.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.TreeController, org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController);


/**
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @override
 */
com.unhurdle.spectrum.TreeController.prototype.handleItemAdded = function(event) {
  com.unhurdle.spectrum.TreeController.superClass_.handleItemAdded.apply(this, [ event] );
  event.item.addEventListener("itemExpanded", org.apache.royale.utils.Language.closure(this.expandedHandler, this, 'expandedHandler'));
};


/**
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @override
 */
com.unhurdle.spectrum.TreeController.prototype.handleItemRemoved = function(event) {
  com.unhurdle.spectrum.TreeController.superClass_.handleItemRemoved.apply(this, [ event] );
  event.item.removeEventListener("itemExpanded", org.apache.royale.utils.Language.closure(this.expandedHandler, this, 'expandedHandler'));
};


/**
 * @protected
 * @param {org.apache.royale.events.ItemClickedEvent} event
 */
com.unhurdle.spectrum.TreeController.prototype.expandedHandler = function(event) {
  var /** @type {org.apache.royale.collections.ITreeData} */ treeData = this.listModel.dataProvider;
  if (treeData == null)
    return;
  var /** @type {Object} */ node = event.data;
  if (treeData.hasChildren(node)) {
    if (treeData.isOpen(node)) {
      treeData.closeNode(node);
    } else {
      treeData.openNode(node);
    }
  }
  event.currentTarget["dispatchEvent"](new org.apache.royale.events.Event('expanded'));
};


com.unhurdle.spectrum.TreeController.prototype.set__strand = function(value) {
  com.unhurdle.spectrum.TreeController.superClass_.set__strand.apply(this, [ value] );
  org.apache.royale.utils.loadBeadFromValuesManager(com.unhurdle.spectrum.interfaces.IKeyboardHandler, "iKeyboardHandler", this._strand);
};


Object.defineProperties(com.unhurdle.spectrum.TreeController.prototype, /** @lends {com.unhurdle.spectrum.TreeController.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: com.unhurdle.spectrum.TreeController.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.TreeController.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TreeController', qName: 'com.unhurdle.spectrum.TreeController', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.TreeController.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'com.unhurdle.spectrum.TreeController'}
      };
    },
    methods: function () {
      return {
        'TreeController': { type: '', declaredBy: 'com.unhurdle.spectrum.TreeController'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.TreeController.prototype.ROYALE_COMPILE_FLAGS = 11;