/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/DropZone.as
 * com.unhurdle.spectrum.DropZone
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.DropZone');
/* Royale Dependency List: com.unhurdle.spectrum.IllustratedMessage,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.events.ValueEvent,org.apache.royale.file.FileProxy,org.apache.royale.file.beads.FileBrowser,org.apache.royale.file.beads.FileLoader,org.apache.royale.file.beads.FileModel,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.SpectrumBase');



/**
 * <inject_html>
 * <link rel="stylesheet" href="assets/css/components/dropzone/dist.css">
 * </inject_html>
 * 
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 */
com.unhurdle.spectrum.DropZone = function() {
  com.unhurdle.spectrum.DropZone.base(this, 'constructor');
  this.com_unhurdle_spectrum_DropZone_fileProxy = new org.apache.royale.file.FileProxy();
  this.com_unhurdle_spectrum_DropZone_browser = new org.apache.royale.file.beads.FileBrowser();
  this.com_unhurdle_spectrum_DropZone_loader = new org.apache.royale.file.beads.FileLoader();
  this.com_unhurdle_spectrum_DropZone_fileProxy.addBead(this.com_unhurdle_spectrum_DropZone_loader);
  this.com_unhurdle_spectrum_DropZone_fileProxy.addBead(this.com_unhurdle_spectrum_DropZone_browser);
};
goog.inherits(com.unhurdle.spectrum.DropZone, com.unhurdle.spectrum.SpectrumBase);


/**
 * @private
 * @type {org.apache.royale.file.beads.FileBrowser}
 */
com.unhurdle.spectrum.DropZone.prototype.com_unhurdle_spectrum_DropZone_browser = null;


/**
 * @private
 * @type {org.apache.royale.file.beads.FileLoader}
 */
com.unhurdle.spectrum.DropZone.prototype.com_unhurdle_spectrum_DropZone_loader = null;


/**
 * @private
 * @type {org.apache.royale.file.FileProxy}
 */
com.unhurdle.spectrum.DropZone.prototype.com_unhurdle_spectrum_DropZone_fileProxy = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.DropZone.prototype.getSelector = function() {
  return "spectrum-Dropzone";
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.DropZone.prototype.com_unhurdle_spectrum_DropZone_elementDragged = function(ev) {
  ev.preventDefault();
  this.toggle("is-dragged", true);
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.DropZone.prototype.com_unhurdle_spectrum_DropZone_elementNotDragged = function(ev) {
  this.toggle("is-dragged", false);
};


/**
 * @private
 * @param {DragEvent} ev
 */
com.unhurdle.spectrum.DropZone.prototype.com_unhurdle_spectrum_DropZone_dropped = function(ev) {
  ev.preventDefault();
  this.toggle("is-dragged", false);
  var /** @type {FileList} */ fileList = ev.dataTransfer.files;
  this.dispatchEvent(new org.apache.royale.events.ValueEvent("filesAvailable", fileList));
};


/**
 * @private
 */
com.unhurdle.spectrum.DropZone.prototype.com_unhurdle_spectrum_DropZone_uploadFile = function() {
  this.com_unhurdle_spectrum_DropZone_fileProxy.addEventListener("modelChanged", org.apache.royale.utils.Language.closure(this.modelChangedHandler, this, 'modelChangedHandler'));
  this.com_unhurdle_spectrum_DropZone_browser.browse();
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
com.unhurdle.spectrum.DropZone.prototype.modelChangedHandler = function(event) {
  this.dispatchEvent(new org.apache.royale.events.ValueEvent("filesAvailable", [this.com_unhurdle_spectrum_DropZone_fileProxy.model.fileReference]));
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.DropZone.prototype.createElement = function() {
  com.unhurdle.spectrum.DropZone.superClass_.createElement.apply(this);
  this.element.setAttribute("role", "region");
  this.element.tabIndex = 0;
  this.element.style.width = "300px";
  this.element.addEventListener('dragenter', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_DropZone_elementDragged, this, 'com_unhurdle_spectrum_DropZone_elementDragged'));
  this.element.addEventListener('dragleave', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_DropZone_elementNotDragged, this, 'com_unhurdle_spectrum_DropZone_elementNotDragged'));
  this.element.addEventListener('dragover', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_DropZone_elementDragged, this, 'com_unhurdle_spectrum_DropZone_elementDragged'));
  this.element.addEventListener('drop', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_DropZone_dropped, this, 'com_unhurdle_spectrum_DropZone_dropped'));
  var /** @type {com.unhurdle.spectrum.IllustratedMessage} */ illustratedMessage = new com.unhurdle.spectrum.IllustratedMessage();
  illustratedMessage.type = "cta";
  illustratedMessage.hyperlink.element.addEventListener('click', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_DropZone_uploadFile, this, 'com_unhurdle_spectrum_DropZone_uploadFile'));
  this.element.appendChild(illustratedMessage.element);
  return this.element;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.DropZone.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DropZone', qName: 'com.unhurdle.spectrum.DropZone', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.DropZone.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'DropZone': { type: '', declaredBy: 'com.unhurdle.spectrum.DropZone'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.DropZone.prototype.ROYALE_COMPILE_FLAGS = 11;