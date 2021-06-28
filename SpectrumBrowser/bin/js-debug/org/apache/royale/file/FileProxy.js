/**
 * Generated by Apache Royale Compiler from org/apache/royale/file/FileProxy.as
 * org.apache.royale.file.FileProxy
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.file.FileProxy');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.utils.BinaryData*/

goog.require('org.apache.royale.core.StrandWithModel');
goog.require('org.apache.royale.file.IFileModel');
goog.require('org.apache.royale.core.IDocument');



/**
 * @constructor
 * @extends {org.apache.royale.core.StrandWithModel}
 * @implements {org.apache.royale.core.IDocument}
 * @implements {org.apache.royale.file.IFileModel}
 */
org.apache.royale.file.FileProxy = function() {
  org.apache.royale.file.FileProxy.base(this, 'constructor');
};
goog.inherits(org.apache.royale.file.FileProxy, org.apache.royale.core.StrandWithModel);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.file.FileProxy.prototype.org_apache_royale_file_FileProxy__document;


/**
 * @asprivate
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.file.FileProxy.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.org_apache_royale_file_FileProxy__document = document;
  var foreachiter0_target = this.beads;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var bead = foreachiter0_target[foreachiter0];
  {
    this.addBead(bead);
  }}
  
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.file.FileProxy.prototype.lastModified;


org.apache.royale.file.FileProxy.prototype.get__lastModified = function() {
  return this.model.lastModified;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.file.FileProxy.prototype.name;


org.apache.royale.file.FileProxy.prototype.get__name = function() {
  return this.model.name;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.file.FileProxy.prototype.type;


org.apache.royale.file.FileProxy.prototype.get__type = function() {
  return this.model.type;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.file.FileProxy.prototype.size;


org.apache.royale.file.FileProxy.prototype.get__size = function() {
  return this.model.size;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.file.FileProxy.prototype.blob;


org.apache.royale.file.FileProxy.prototype.get__blob = function() {
  return this.model.blob;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.utils.BinaryData}
 */
org.apache.royale.file.FileProxy.prototype.fileContent;


org.apache.royale.file.FileProxy.prototype.set__fileContent = function(value) {
  this.model.fileContent = value;
};


/**
 * @nocollapse
 * @export
 * @type {File}
 */
org.apache.royale.file.FileProxy.prototype.fileReference;


org.apache.royale.file.FileProxy.prototype.get__fileReference = function() {
  return this.model.fileReference;
};


org.apache.royale.file.FileProxy.prototype.set__fileReference = function(value) {
  this.model.fileReference = value;
};


Object.defineProperties(org.apache.royale.file.FileProxy.prototype, /** @lends {org.apache.royale.file.FileProxy.prototype} */ {
/**
 * @type {number}
 */
lastModified: {
get: org.apache.royale.file.FileProxy.prototype.get__lastModified},
/**
 * @type {string}
 */
name: {
get: org.apache.royale.file.FileProxy.prototype.get__name},
/**
 * @type {string}
 */
type: {
get: org.apache.royale.file.FileProxy.prototype.get__type},
/**
 * @type {number}
 */
size: {
get: org.apache.royale.file.FileProxy.prototype.get__size},
/**
 * @type {Object}
 */
blob: {
get: org.apache.royale.file.FileProxy.prototype.get__blob},
/**
 * @type {org.apache.royale.utils.BinaryData}
 */
fileContent: {
set: org.apache.royale.file.FileProxy.prototype.set__fileContent},
/**
 * @type {File}
 */
fileReference: {
get: org.apache.royale.file.FileProxy.prototype.get__fileReference,
set: org.apache.royale.file.FileProxy.prototype.set__fileReference}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.file.FileProxy.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FileProxy', qName: 'org.apache.royale.file.FileProxy', kind: 'class' }], interfaces: [org.apache.royale.core.IDocument, org.apache.royale.file.IFileModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.file.FileProxy.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'lastModified': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.file.FileProxy'},
        'name': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.file.FileProxy'},
        'type': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.file.FileProxy'},
        'size': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.file.FileProxy'},
        'blob': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.file.FileProxy'},
        'fileContent': { type: 'org.apache.royale.utils.BinaryData', access: 'writeonly', declaredBy: 'org.apache.royale.file.FileProxy'},
        'fileReference': { type: 'File', access: 'readwrite', declaredBy: 'org.apache.royale.file.FileProxy'}
      };
    },
    methods: function () {
      return {
        'FileProxy': { type: '', declaredBy: 'org.apache.royale.file.FileProxy'},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.file.FileProxy', parameters: function () { return [ 'Object', false ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.file.FileProxy.prototype.ROYALE_COMPILE_FLAGS = 10;