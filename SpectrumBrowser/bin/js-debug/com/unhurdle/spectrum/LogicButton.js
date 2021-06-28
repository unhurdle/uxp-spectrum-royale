/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/LogicButton.as
 * com.unhurdle.spectrum.LogicButton
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.LogicButton');
/* Royale Dependency List: com.unhurdle.spectrum.TextNode,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.SpectrumBase');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 */
com.unhurdle.spectrum.LogicButton = function() {
  com.unhurdle.spectrum.LogicButton.base(this, 'constructor');
  this.type = "and";
};
goog.inherits(com.unhurdle.spectrum.LogicButton, com.unhurdle.spectrum.SpectrumBase);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.LogicButton.prototype.getSelector = function() {
  return "spectrum-LogicButton";
};


/**
 * @private
 * @type {com.unhurdle.spectrum.TextNode}
 */
com.unhurdle.spectrum.LogicButton.prototype.com_unhurdle_spectrum_LogicButton_textNode = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.LogicButton.prototype.getTag = function() {
  return "button";
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.LogicButton.prototype.createElement = function() {
  com.unhurdle.spectrum.LogicButton.superClass_.createElement.apply(this);
  this.com_unhurdle_spectrum_LogicButton_textNode = new com.unhurdle.spectrum.TextNode("");
  this.com_unhurdle_spectrum_LogicButton_textNode.element = this.element;
  this.addEventListener('click', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_LogicButton_clickHandler, this, 'com_unhurdle_spectrum_LogicButton_clickHandler'));
  return this.element;
};


/**
 * @private
 */
com.unhurdle.spectrum.LogicButton.prototype.com_unhurdle_spectrum_LogicButton_clickHandler = function() {
  if (!this.com_unhurdle_spectrum_LogicButton__disabled) {
    this.type = this.type == 'and' ? 'or' : 'and';
  }
};


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.LogicButton.prototype.com_unhurdle_spectrum_LogicButton__type = null;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.LogicButton.prototype.com_unhurdle_spectrum_LogicButton__disabled = false;


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.LogicButton.prototype.type;


com.unhurdle.spectrum.LogicButton.prototype.get__type = function() {
  return this.com_unhurdle_spectrum_LogicButton__type || "";
};


com.unhurdle.spectrum.LogicButton.prototype.set__type = function(value) {
  if (value != this.com_unhurdle_spectrum_LogicButton__type) {
    switch (value) {
      case "and":
        this.com_unhurdle_spectrum_LogicButton_textNode.text = 'And';
        break;
      case "or":
        this.com_unhurdle_spectrum_LogicButton_textNode.text = 'Or';
        break;
      default:
        throw new Error("Invalid type: " + value);
    }
    if (this.com_unhurdle_spectrum_LogicButton__type) {
      this.toggle(this.valueToSelector(this.com_unhurdle_spectrum_LogicButton__type), false);
    }
    if (value) {
      this.toggle(this.valueToSelector(value), true);
    }
    this.com_unhurdle_spectrum_LogicButton__type = value;
  }
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.LogicButton.prototype.disabled;


com.unhurdle.spectrum.LogicButton.prototype.get__disabled = function() {
  return this.com_unhurdle_spectrum_LogicButton__disabled;
};


com.unhurdle.spectrum.LogicButton.prototype.set__disabled = function(value) {
  if (!!value != !!this.com_unhurdle_spectrum_LogicButton__disabled) {
    this.toggle("is-disabled", value);
  }
  this.com_unhurdle_spectrum_LogicButton__disabled = value;
};


Object.defineProperties(com.unhurdle.spectrum.LogicButton.prototype, /** @lends {com.unhurdle.spectrum.LogicButton.prototype} */ {
/**
 * @type {string}
 */
type: {
get: com.unhurdle.spectrum.LogicButton.prototype.get__type,
set: com.unhurdle.spectrum.LogicButton.prototype.set__type},
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.LogicButton.prototype.get__disabled,
set: com.unhurdle.spectrum.LogicButton.prototype.set__disabled}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.LogicButton.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'LogicButton', qName: 'com.unhurdle.spectrum.LogicButton', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.LogicButton.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'type': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.LogicButton'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.LogicButton'}
      };
    },
    methods: function () {
      return {
        'LogicButton': { type: '', declaredBy: 'com.unhurdle.spectrum.LogicButton'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.LogicButton.prototype.ROYALE_COMPILE_FLAGS = 11;