/**
 * Generated by Apache Royale Compiler from org/apache/royale/routing/Router.as
 * org.apache.royale.routing.Router
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.routing.Router');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ValueEvent,org.apache.royale.routing.IPathRouteBead,org.apache.royale.routing.RouteState,org.apache.royale.utils.MXMLDataInterpreter,org.apache.royale.utils.callLater,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.sendStrandEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.Strand');
goog.require('org.apache.royale.core.IMXMLDocument');
goog.require('org.apache.royale.routing.IRouter');



/**
 * @constructor
 * @extends {org.apache.royale.core.Strand}
 * @implements {org.apache.royale.routing.IRouter}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IMXMLDocument}
 */
org.apache.royale.routing.Router = function() {
  org.apache.royale.routing.Router.base(this, 'constructor');

this.org_apache_royale_routing_Router__mxmlDocument = this;
};
goog.inherits(org.apache.royale.routing.Router, org.apache.royale.core.Strand);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.routing.Router.prototype.org_apache_royale_routing_Router__strand;


/**
 * Helper function to attach event listener without the need for casting
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @protected
 * @param {string} eventType
 * @param {Function} handler
 * @param {boolean=} capture
 */
org.apache.royale.routing.Router.prototype.listenOnStrand = function(eventType, handler, capture) {
  capture = typeof capture !== 'undefined' ? capture : false;
  this.org_apache_royale_routing_Router__strand.addEventListener(eventType, handler, capture);
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.routing.Router.prototype.onInit = function(event) {
  if (this.beads) {
    var foreachiter0_target = this.beads;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var bead = foreachiter0_target[foreachiter0];
    
      this.addBead(bead);}
    
  }
  this.dispatchEvent(new org.apache.royale.events.Event("initBindings"));
  if (location.hash) {
    this.org_apache_royale_routing_Router_hashChangeHandler();
  } else {
    this.dispatchEvent(new org.apache.royale.events.Event("stateChange"));
  }
};


/**
 * @private
 */
org.apache.royale.routing.Router.prototype.org_apache_royale_routing_Router_hashChangeHandler = function() {
  this.org_apache_royale_routing_Router_parseHash();
  this.dispatchEvent(new org.apache.royale.events.Event("stateChange"));
};


/**
 * @private
 */
org.apache.royale.routing.Router.prototype.org_apache_royale_routing_Router_parseHash = function() {
  var /** @type {string} */ hash = location.hash;
  var /** @type {number} */ index = 0;
  if (hash.indexOf("!") == 1) {
    index = 1;
  }
  hash = hash.slice(index + 1);
  var /** @type {org.apache.royale.events.ValueEvent} */ ev = new org.apache.royale.events.ValueEvent("urlReceived", hash);
  this.dispatchEvent(ev);
};


/**
 * @private
 * @type {org.apache.royale.routing.RouteState}
 */
org.apache.royale.routing.Router.prototype.org_apache_royale_routing_Router__routeState;


/**
 * Commits the current state to the browsing history
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 */
org.apache.royale.routing.Router.prototype.setState = function() {
  var /** @type {string} */ hash = "#!";
  var /** @type {org.apache.royale.events.ValueEvent} */ ev = new org.apache.royale.events.ValueEvent("urlNeeded", "");
  this.dispatchEvent(ev);
  var /** @type {org.apache.royale.events.ValueEvent} */ stateEv = new org.apache.royale.events.ValueEvent("stateNeeded", {});
  this.dispatchEvent(stateEv);
  if (!ev.defaultPrevented) {
    hash += org.apache.royale.utils.Language.string(ev.value);
    window.history.pushState(stateEv.value, this.org_apache_royale_routing_Router__routeState.title, hash);
    org.apache.royale.utils.sendStrandEvent(this, "stateSet");
  }
};


/**
 * Same as setState, but also notifies of the state change
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 */
org.apache.royale.routing.Router.prototype.renderState = function() {
  this.setState();
  this.dispatchEvent(new org.apache.royale.events.Event("stateChange"));
};


/**
 * @private
 * @type {Array}
 */
org.apache.royale.routing.Router.prototype.org_apache_royale_routing_Router__mxmlDescriptor;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.routing.Router.prototype.org_apache_royale_routing_Router__mxmlDocument;


/**
 *  @asprivate
 * @param {Object} document
 * @param {Array} value
 */
org.apache.royale.routing.Router.prototype.setMXMLDescriptor = function(document, value) {
  this.org_apache_royale_routing_Router__mxmlDocument = document;
  this.org_apache_royale_routing_Router__mxmlDescriptor = value;
};


/**
 *  @copy org.apache.royale.core.Application#generateMXMLAttributes()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @param {Array} data
 */
org.apache.royale.routing.Router.prototype.generateMXMLAttributes = function(data) {
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.routing.Router.prototype.host;


org.apache.royale.routing.Router.prototype.get__host = function() {
  return this.org_apache_royale_routing_Router__strand;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.routing.Router.prototype.strand;


org.apache.royale.routing.Router.prototype.set__strand = function(value) {
  this.org_apache_royale_routing_Router__strand = value;
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.routing.IPathRouteBead, "iPathRouteBead", this);
  window.addEventListener("hashchange", org.apache.royale.utils.Language.closure(this.org_apache_royale_routing_Router_hashChangeHandler, this, 'org_apache_royale_routing_Router_hashChangeHandler'));
  org.apache.royale.utils.callLater(org.apache.royale.utils.Language.closure(this.onInit, this, 'onInit'));
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.routing.RouteState}
 */
org.apache.royale.routing.Router.prototype.routeState;


org.apache.royale.routing.Router.prototype.get__routeState = function() {
  if (!this.org_apache_royale_routing_Router__routeState) {
    this.org_apache_royale_routing_Router__routeState = new org.apache.royale.routing.RouteState();
  }
  return this.org_apache_royale_routing_Router__routeState;
};


org.apache.royale.routing.Router.prototype.set__routeState = function(value) {
  this.org_apache_royale_routing_Router__routeState = value;
};


/**
 * @nocollapse
 * @export
 * @type {Array}
 */
org.apache.royale.routing.Router.prototype.MXMLDescriptor;


org.apache.royale.routing.Router.prototype.get__MXMLDescriptor = function() {
  return this.org_apache_royale_routing_Router__mxmlDescriptor;
};


Object.defineProperties(org.apache.royale.routing.Router.prototype, /** @lends {org.apache.royale.routing.Router.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
host: {
get: org.apache.royale.routing.Router.prototype.get__host},
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.routing.Router.prototype.set__strand},
/**
 * @type {org.apache.royale.routing.RouteState}
 */
routeState: {
get: org.apache.royale.routing.Router.prototype.get__routeState,
set: org.apache.royale.routing.Router.prototype.set__routeState},
/**
 * @type {Array}
 */
MXMLDescriptor: {
get: org.apache.royale.routing.Router.prototype.get__MXMLDescriptor}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.routing.Router.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Router', qName: 'org.apache.royale.routing.Router', kind: 'class' }], interfaces: [org.apache.royale.routing.IRouter, org.apache.royale.core.IBead, org.apache.royale.core.IMXMLDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.routing.Router.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'host': { type: 'org.apache.royale.core.IStrand', access: 'readonly', declaredBy: 'org.apache.royale.routing.Router'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.routing.Router'},
        'routeState': { type: 'org.apache.royale.routing.RouteState', access: 'readwrite', declaredBy: 'org.apache.royale.routing.Router'},
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.routing.Router'}
      };
    },
    methods: function () {
      return {
        'Router': { type: '', declaredBy: 'org.apache.royale.routing.Router'},
        'setState': { type: 'void', declaredBy: 'org.apache.royale.routing.Router'},
        'renderState': { type: 'void', declaredBy: 'org.apache.royale.routing.Router'},
        'setMXMLDescriptor': { type: 'void', declaredBy: 'org.apache.royale.routing.Router', parameters: function () { return [ 'Object', false ,'Array', false ]; }},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.royale.routing.Router', parameters: function () { return [ 'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.routing.Router.prototype.ROYALE_COMPILE_FLAGS = 10;