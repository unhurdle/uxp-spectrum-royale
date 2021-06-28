/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/CSSClassList.as
 * org.apache.royale.core.CSSClassList
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.CSSClassList');
/* Royale Dependency List: */



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.2
 * @constructor
 */
org.apache.royale.core.CSSClassList = function() {
};


/**
 * @private
 * @type {Array}
 */
org.apache.royale.core.CSSClassList.prototype.org_apache_royale_core_CSSClassList__list;


/**
 *  Adds a className to the list of classes.
 *  It only adds a name once.
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.2
 * @param {string} className
 */
org.apache.royale.core.CSSClassList.prototype.add = function(className) {
  if (!this.org_apache_royale_core_CSSClassList__list)
    this.org_apache_royale_core_CSSClassList__list = [];
  if (this.org_apache_royale_core_CSSClassList__list.indexOf(className) == -1)
    this.org_apache_royale_core_CSSClassList__list.push(className);
};


/**
 *  Removes a className to the list of classes
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.2
 * @param {string} className
 */
org.apache.royale.core.CSSClassList.prototype.remove = function(className) {
  if (this.org_apache_royale_core_CSSClassList__list) {
    var /** @type {number} */ idx = (this.org_apache_royale_core_CSSClassList__list.indexOf(className)) >> 0;
    if (idx != -1)
      this.org_apache_royale_core_CSSClassList__list.splice(idx, 1);
  }
};


/**
 *  returns the concatenated string of the class list
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 0.9.2
 * @return {string}
 */
org.apache.royale.core.CSSClassList.prototype.compute = function() {
  return this.org_apache_royale_core_CSSClassList__list ? this.org_apache_royale_core_CSSClassList__list.join(" ") + " " : "";
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.CSSClassList.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CSSClassList', qName: 'org.apache.royale.core.CSSClassList', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.CSSClassList.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'CSSClassList': { type: '', declaredBy: 'org.apache.royale.core.CSSClassList'},
        'add': { type: 'void', declaredBy: 'org.apache.royale.core.CSSClassList', parameters: function () { return [ 'String', false ]; }},
        'remove': { type: 'void', declaredBy: 'org.apache.royale.core.CSSClassList', parameters: function () { return [ 'String', false ]; }},
        'compute': { type: 'String', declaredBy: 'org.apache.royale.core.CSSClassList'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.CSSClassList.prototype.ROYALE_COMPILE_FLAGS = 10;