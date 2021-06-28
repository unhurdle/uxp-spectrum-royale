/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/ListItemRendererInitializer.as
 * org.apache.royale.html.beads.ListItemRendererInitializer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.ListItemRendererInitializer');
/* Royale Dependency List: org.apache.royale.core.IIndexedItemRenderer,org.apache.royale.core.IStrand,org.apache.royale.core.IStrandWithPresentationModel,org.apache.royale.core.SimpleCSSStyles,org.apache.royale.core.UIBase,org.apache.royale.html.IListPresentationModel,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.IndexedItemRendererInitializer');
goog.require('org.apache.royale.core.IIndexedItemRendererInitializer');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 * @constructor
 * @extends {org.apache.royale.html.beads.IndexedItemRendererInitializer}
 * @implements {org.apache.royale.core.IIndexedItemRendererInitializer}
 */
org.apache.royale.html.beads.ListItemRendererInitializer = function() {
  org.apache.royale.html.beads.ListItemRendererInitializer.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.ListItemRendererInitializer, org.apache.royale.html.beads.IndexedItemRendererInitializer);


/**
 * @protected
 * @type {org.apache.royale.html.IListPresentationModel}
 */
org.apache.royale.html.beads.ListItemRendererInitializer.prototype.presentationModel;


/**
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @protected
 * @override
 */
org.apache.royale.html.beads.ListItemRendererInitializer.prototype.setupVisualsForItemRenderer = function(ir) {
  var /** @type {org.apache.royale.core.SimpleCSSStyles} */ style = new org.apache.royale.core.SimpleCSSStyles();
  style.marginBottom = this.presentationModel.separatorThickness;
  ir.style = style;
  ir.height = this.presentationModel.rowHeight;
  ir.percentWidth = 100;
};


org.apache.royale.html.beads.ListItemRendererInitializer.prototype.set__strand = function(value) {
  org.apache.royale.html.beads.ListItemRendererInitializer.superClass_.set__strand.apply(this, [ value] );
  this.presentationModel = org.apache.royale.utils.Language.as(this._strand.presentationModel, org.apache.royale.html.IListPresentationModel);
};


Object.defineProperties(org.apache.royale.html.beads.ListItemRendererInitializer.prototype, /** @lends {org.apache.royale.html.beads.ListItemRendererInitializer.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.html.beads.ListItemRendererInitializer.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.ListItemRendererInitializer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListItemRendererInitializer', qName: 'org.apache.royale.html.beads.ListItemRendererInitializer', kind: 'class' }], interfaces: [org.apache.royale.core.IIndexedItemRendererInitializer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.ListItemRendererInitializer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.ListItemRendererInitializer'}
      };
    },
    methods: function () {
      return {
        'ListItemRendererInitializer': { type: '', declaredBy: 'org.apache.royale.html.beads.ListItemRendererInitializer'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.ListItemRendererInitializer.prototype.ROYALE_COMPILE_FLAGS = 10;