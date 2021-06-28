/**
 * Generated by Apache Royale Compiler from view/panes/TreeViewPane.mxml
 * view.panes.TreeViewPane
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.panes.TreeViewPane');
/* Royale Dependency List: view.components.Variant,com.unhurdle.spectrum.Tree,view.components.Markup,view.components.StyledCode,com.unhurdle.spectrum.const.IconPrefix,org.apache.royale.collections.HierarchicalData,org.apache.royale.collections.TreeData,org.apache.royale.events.Event,org.apache.royale.events.ValueChangeEvent*/

goog.require('view.DemoPane');



/**
 * @constructor
 * @extends {view.DemoPane}
 */
view.panes.TreeViewPane = function() {
  view.panes.TreeViewPane.base(this, 'constructor');
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_1;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Tree}
   */
  this.$ID_12_0;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_3;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_2;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_5;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Tree}
   */
  this.$ID_12_4;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_7;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_6;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_9;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Tree}
   */
  this.$ID_12_8;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_11;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_10;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_13;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Tree}
   */
  this.$ID_12_12;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_15;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_14;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_17;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Tree}
   */
  this.$ID_12_16;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_19;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_18;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_21;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.Tree}
   */
  this.$ID_12_20;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_23;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_22;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;

  this.generateMXMLAttributes([
    1,
    'title',
    true,
    'Tree View',
    0,
    1,
    'initComplete',
    this.$EH_12_0
  ]);
  
};
goog.inherits(view.panes.TreeViewPane, view.DemoPane);




/**
 * @type {org.apache.royale.collections.TreeData}
 */
view.panes.TreeViewPane.prototype.provider1_ = null;


/**
 * @type {org.apache.royale.collections.TreeData}
 */
view.panes.TreeViewPane.prototype.provider2_ = null;


/**
 * @type {org.apache.royale.collections.TreeData}
 */
view.panes.TreeViewPane.prototype.provider3_ = null;


/**
 * @type {org.apache.royale.collections.TreeData}
 */
view.panes.TreeViewPane.prototype.provider4_ = null;


/**
 * @private
 */
view.panes.TreeViewPane.prototype.view_panes_TreeViewPane_initComplete = function() {
  var /** @type {Array} */ arr1 = [];
  arr1.push({label:'Layer 1'});
  arr1.push({label:'Group 1', children:[{label:'Layer 2'}, {label:'Layer 3'}]});
  arr1.push({label:'Layer 4'});
  arr1.push({label:'Layer 5'});
  arr1.push({label:'Group 2', children:[{label:'Group 3', children:[{label:'Group 4', children:[{label:'Layer 6'}, {label:'Group 5', children:[]}]}]}]});
  var /** @type {org.apache.royale.collections.HierarchicalData} */ hierarchicalData1 = new org.apache.royale.collections.HierarchicalData({'children':arr1});
  var /** @type {org.apache.royale.collections.TreeData} */ treeData = new org.apache.royale.collections.TreeData(hierarchicalData1);
  treeData.openNode(arr1[1]);
  this.provider1 = treeData;
  var /** @type {Array} */ arr3 = [];
  arr3.push({label:'Layer 1', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Layers"});
  arr3.push({label:'Group 1', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Folder", children:[{label:'Layer 2', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Layers"}, {label:'Layer 3', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Layers"}]});
  arr3.push({label:'Layer 4', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Layers"});
  arr3.push({label:'Layer 5', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Layers"});
  arr3.push({label:'Group 2', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Folder", children:[{label:'Group 3', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Folder", children:[{label:'Group 4', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Folder", children:[{label:'Layer 6', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Layers"}, {label:'Group 5', icon:com.unhurdle.spectrum.const.IconPrefix._18 + "Folder", children:[]}]}]}]});
  var /** @type {org.apache.royale.collections.HierarchicalData} */ hierarchicalData3 = new org.apache.royale.collections.HierarchicalData({'children':arr3});
  this.provider3 = new org.apache.royale.collections.TreeData(hierarchicalData3);
  var /** @type {Array} */ arr4 = [];
  arr4.push({label:'Layer 1'});
  arr4.push({label:'Group 1', disabled:true, children:[{label:'Layer 2'}, {label:'Layer 3'}]});
  arr4.push({label:'Layer 4'});
  arr4.push({label:'Layer 5'});
  arr4.push({label:'Group 2', children:[{label:'Group 3', children:[{label:'Group 4', children:[{label:'Layer 6'}, {label:'Group 5', children:[]}]}]}]});
  var /** @type {org.apache.royale.collections.HierarchicalData} */ hierarchicalData4 = new org.apache.royale.collections.HierarchicalData({'children':arr4});
  this.provider4 = new org.apache.royale.collections.TreeData(hierarchicalData4);
  var /** @type {Array} */ arr2 = [];
  arr2.push({label:'Layer 1'});
  arr2.push({label:'Layer 2'});
  var /** @type {org.apache.royale.collections.HierarchicalData} */ hierarchicalData2 = new org.apache.royale.collections.HierarchicalData({'children':arr2});
  this.provider2 = new org.apache.royale.collections.TreeData(hierarchicalData2);
};


/**
 * @private
 * @type {string}
 */
view.panes.TreeViewPane.prototype.view_panes_TreeViewPane_notes_ = 'Standalone treeviews are meant to be used outside of a panel.\nItems in standalone treeviews have rounded corners.';


/**
 * @type {string}
 */
view.panes.TreeViewPane.prototype.codeString1_ = '<sp:Tree dataProvider="{provider1}"/>';


/**
 * @type {string}
 */
view.panes.TreeViewPane.prototype.codeString3_ = '<sp:Tree dataProvider="{provider3}"/>';


/**
 * @type {string}
 */
view.panes.TreeViewPane.prototype.codeString4_ = '<sp:Tree dataProvider="{provider4}"/>';


/**
 * @type {string}
 */
view.panes.TreeViewPane.prototype.codeStringQuiet_ = '<sp:Tree dataProvider="{provider2}" quiet="true"/>';


/**
 * @type {string}
 */
view.panes.TreeViewPane.prototype.codeStringStandalone_ = '<sp:Tree dataProvider="{provider2}" standalone="true"/>';


/**
 * @type {string}
 */
view.panes.TreeViewPane.prototype.codeStringStandaloneQuiet_ = '<sp:Tree dataProvider="{provider2}" standalone="true" quiet="true"/>';


Object.defineProperties(view.panes.TreeViewPane.prototype, /** @lends {view.panes.TreeViewPane.prototype} */ {
/**
 * @type {string}
 */
codeString1: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.codeString1_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.codeString1_) {
    var oldValue = this.codeString1_;
    this.codeString1_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeString1", oldValue, value));
}
}},/**
 * @type {string}
 */
codeString3: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.codeString3_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.codeString3_) {
    var oldValue = this.codeString3_;
    this.codeString3_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeString3", oldValue, value));
}
}},/**
 * @type {string}
 */
codeString4: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.codeString4_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.codeString4_) {
    var oldValue = this.codeString4_;
    this.codeString4_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeString4", oldValue, value));
}
}},/**
 * @type {string}
 */
codeStringQuiet: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.codeStringQuiet_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.codeStringQuiet_) {
    var oldValue = this.codeStringQuiet_;
    this.codeStringQuiet_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeStringQuiet", oldValue, value));
}
}},/**
 * @type {string}
 */
codeStringStandalone: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.codeStringStandalone_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.codeStringStandalone_) {
    var oldValue = this.codeStringStandalone_;
    this.codeStringStandalone_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeStringStandalone", oldValue, value));
}
}},/**
 * @type {string}
 */
codeStringStandaloneQuiet: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.codeStringStandaloneQuiet_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.codeStringStandaloneQuiet_) {
    var oldValue = this.codeStringStandaloneQuiet_;
    this.codeStringStandaloneQuiet_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "codeStringStandaloneQuiet", oldValue, value));
}
}},/**
 * @private
 * @type {string}
 */
view_panes_TreeViewPane_notes: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.view_panes_TreeViewPane_notes_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.view_panes_TreeViewPane_notes_) {
    var oldValue = this.view_panes_TreeViewPane_notes_;
    this.view_panes_TreeViewPane_notes_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "notes", oldValue, value));
}
}},/**
 * @type {org.apache.royale.collections.TreeData}
 */
provider1: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.provider1_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.provider1_) {
    var oldValue = this.provider1_;
    this.provider1_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "provider1", oldValue, value));
}
}},/**
 * @type {org.apache.royale.collections.TreeData}
 */
provider2: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.provider2_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.provider2_) {
    var oldValue = this.provider2_;
    this.provider2_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "provider2", oldValue, value));
}
}},/**
 * @type {org.apache.royale.collections.TreeData}
 */
provider3: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.provider3_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.provider3_) {
    var oldValue = this.provider3_;
    this.provider3_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "provider3", oldValue, value));
}
}},/**
 * @type {org.apache.royale.collections.TreeData}
 */
provider4: {
/** @this {view.panes.TreeViewPane} */
  get: function() {
  return this.provider4_;
  },

/** @this {view.panes.TreeViewPane} */
set: function(value) {
if (value != this.provider4_) {
    var oldValue = this.provider4_;
    this.provider4_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "provider4", oldValue, value));
}
}}}
);/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
view.panes.TreeViewPane.prototype.$EH_12_0 = function(event)
{
  this.view_panes_TreeViewPane_initComplete();
};


Object.defineProperties(view.panes.TreeViewPane.prototype, /** @lends {view.panes.TreeViewPane.prototype} */ {
  'MXMLDescriptor': {
    /** @this {view.panes.TreeViewPane} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = view.panes.TreeViewPane.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          view.components.Variant,
          1,
          '_id',
          true,
          '$ID_12_1',
          0,
          0,
          [
            com.unhurdle.spectrum.Tree,
            1,
            '_id',
            true,
            '$ID_12_0',
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_3',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_2',
            0,
            0,
            null
          ],
          view.components.Variant,
          3,
          '_id',
          true,
          '$ID_12_5',
          'header',
          true,
          'Quiet',
          'notes',
          true,
          'A Spectrum tree view quiet selection.',
          0,
          0,
          [
            com.unhurdle.spectrum.Tree,
            2,
            '_id',
            true,
            '$ID_12_4',
            'quiet',
            true,
            true,
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_7',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_6',
            0,
            0,
            null
          ],
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_9',
          'header',
          true,
          'Standalone',
          0,
          0,
          [
            com.unhurdle.spectrum.Tree,
            2,
            '_id',
            true,
            '$ID_12_8',
            'standalone',
            true,
            true,
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_11',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_10',
            0,
            0,
            null
          ],
          view.components.Variant,
          3,
          '_id',
          true,
          '$ID_12_13',
          'header',
          true,
          'Standalone (quiet)',
          'notes',
          true,
          'A standalone, quiet treeview.',
          0,
          0,
          [
            com.unhurdle.spectrum.Tree,
            3,
            '_id',
            true,
            '$ID_12_12',
            'standalone',
            true,
            true,
            'quiet',
            true,
            true,
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_15',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_14',
            0,
            0,
            null
          ],
          view.components.Variant,
          3,
          '_id',
          true,
          '$ID_12_17',
          'header',
          true,
          'Icons',
          'notes',
          true,
          'A Spectrum tree view with icons.',
          0,
          0,
          [
            com.unhurdle.spectrum.Tree,
            1,
            '_id',
            true,
            '$ID_12_16',
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_19',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_18',
            0,
            0,
            null
          ],
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_21',
          'header',
          true,
          'Disabled',
          0,
          0,
          [
            com.unhurdle.spectrum.Tree,
            1,
            '_id',
            true,
            '$ID_12_20',
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_23',
          0,
          0,
          [
            view.components.StyledCode,
            1,
            '_id',
            true,
            '$ID_12_22',
            0,
            0,
            null
          ]
        ];
        if (arr)
          this.mxmldd = arr.concat(data);
        else
          this.mxmldd = data;
      }
      return this.mxmldd;
    }
  }
});
/**
 * @export
 */
view.panes.TreeViewPane.prototype._bindings = [
13,
"provider1",
null,
["$ID_12_0", "dataProvider"],
"codeString1",
null,
["$ID_12_2", "text"],
"provider2",
null,
["$ID_12_4", "dataProvider"],
"codeStringQuiet",
null,
["$ID_12_6", "text"],
/** @this {view.panes.TreeViewPane} */
function() { return this.view_panes_TreeViewPane_notes; },
null,
["$ID_12_9", "notes"],
"provider2",
null,
["$ID_12_8", "dataProvider"],
"codeStringStandalone",
null,
["$ID_12_10", "text"],
"provider2",
null,
["$ID_12_12", "dataProvider"],
"codeStringStandaloneQuiet",
null,
["$ID_12_14", "text"],
"provider3",
null,
["$ID_12_16", "dataProvider"],
"codeString3",
null,
["$ID_12_18", "text"],
"provider4",
null,
["$ID_12_20", "dataProvider"],
"codeString4",
null,
["$ID_12_22", "text"],
0,
2,
"provider1",
"valueChange",
0,
null,
null,
1,
2,
"codeString1",
"valueChange",
1,
null,
null,
2,
2,
"provider2",
"valueChange",
[2,5,7],
null,
null,
3,
2,
"codeStringQuiet",
"valueChange",
3,
null,
null,
4,
2,
"notes",
"valueChange",
4,
function() { return this.view_panes_TreeViewPane_notes; },
null,
5,
2,
"codeStringStandalone",
"valueChange",
6,
null,
null,
6,
2,
"codeStringStandaloneQuiet",
"valueChange",
8,
null,
null,
7,
2,
"provider3",
"valueChange",
9,
null,
null,
8,
2,
"codeString3",
"valueChange",
10,
null,
null,
9,
2,
"provider4",
"valueChange",
11,
null,
null,
10,
2,
"codeString4",
"valueChange",
12,
null,
null];
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.panes.TreeViewPane.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TreeViewPane', qName: 'view.panes.TreeViewPane', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.panes.TreeViewPane.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'codeString1': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'codeStringStandaloneQuiet': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'codeStringStandalone': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'provider1': { type: 'org.apache.royale.collections.TreeData', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'codeString4': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'provider2': { type: 'org.apache.royale.collections.TreeData', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'provider3': { type: 'org.apache.royale.collections.TreeData', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'codeStringQuiet': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'provider4': { type: 'org.apache.royale.collections.TreeData', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'},
        'codeString3': { type: 'String', access: 'readwrite', declaredBy: 'view.panes.TreeViewPane'}
      };
    },
    methods: function () {
      return {
        'TreeViewPane': { type: '', declaredBy: 'view.panes.TreeViewPane'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.panes.TreeViewPane.prototype.ROYALE_COMPILE_FLAGS = 9;