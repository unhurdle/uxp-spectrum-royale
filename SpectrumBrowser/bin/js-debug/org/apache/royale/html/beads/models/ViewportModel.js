/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/models/ViewportModel.as
 * org.apache.royale.html.beads.models.ViewportModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.models.ViewportModel');
/* Royale Dependency List: org.apache.royale.core.layout.EdgeData*/

goog.require('org.apache.royale.core.DispatcherBead');
goog.require('org.apache.royale.core.IViewportModel');



/**
 * @constructor
 * @extends {org.apache.royale.core.DispatcherBead}
 * @implements {org.apache.royale.core.IViewportModel}
 */
org.apache.royale.html.beads.models.ViewportModel = function() {
  org.apache.royale.html.beads.models.ViewportModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.models.ViewportModel, org.apache.royale.core.DispatcherBead);


/**
 * @private
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.org_apache_royale_html_beads_models_ViewportModel__borderMetrics;


/**
 * @private
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.org_apache_royale_html_beads_models_ViewportModel__chromeMetrics;


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.borderMetrics;


org.apache.royale.html.beads.models.ViewportModel.prototype.get__borderMetrics = function() {
  return this.org_apache_royale_html_beads_models_ViewportModel__borderMetrics;
};


org.apache.royale.html.beads.models.ViewportModel.prototype.set__borderMetrics = function(value) {
  this.org_apache_royale_html_beads_models_ViewportModel__borderMetrics = value;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.chromeMetrics;


org.apache.royale.html.beads.models.ViewportModel.prototype.get__chromeMetrics = function() {
  return this.org_apache_royale_html_beads_models_ViewportModel__chromeMetrics;
};


org.apache.royale.html.beads.models.ViewportModel.prototype.set__chromeMetrics = function(value) {
  this.org_apache_royale_html_beads_models_ViewportModel__chromeMetrics = value;
};


Object.defineProperties(org.apache.royale.html.beads.models.ViewportModel.prototype, /** @lends {org.apache.royale.html.beads.models.ViewportModel.prototype} */ {
/**
 * @type {org.apache.royale.core.layout.EdgeData}
 */
borderMetrics: {
get: org.apache.royale.html.beads.models.ViewportModel.prototype.get__borderMetrics,
set: org.apache.royale.html.beads.models.ViewportModel.prototype.set__borderMetrics},
/**
 * @type {org.apache.royale.core.layout.EdgeData}
 */
chromeMetrics: {
get: org.apache.royale.html.beads.models.ViewportModel.prototype.get__chromeMetrics,
set: org.apache.royale.html.beads.models.ViewportModel.prototype.set__chromeMetrics}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ViewportModel', qName: 'org.apache.royale.html.beads.models.ViewportModel', kind: 'class' }], interfaces: [org.apache.royale.core.IViewportModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'borderMetrics': { type: 'org.apache.royale.core.layout.EdgeData', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.ViewportModel'},
        'chromeMetrics': { type: 'org.apache.royale.core.layout.EdgeData', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.ViewportModel'}
      };
    },
    methods: function () {
      return {
        'ViewportModel': { type: '', declaredBy: 'org.apache.royale.html.beads.models.ViewportModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.ROYALE_COMPILE_FLAGS = 10;