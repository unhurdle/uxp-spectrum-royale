/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/SliderBase.as
 * com.unhurdle.spectrum.SliderBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.SliderBase');
/* Royale Dependency List: com.unhurdle.spectrum.TextNode,com.unhurdle.spectrum.includes.SliderInclude,com.unhurdle.spectrum.newElement,org.apache.royale.events.MouseEvent,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.SpectrumBase');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 */
com.unhurdle.spectrum.SliderBase = function() {
  com.unhurdle.spectrum.SliderBase.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.SliderBase, com.unhurdle.spectrum.SpectrumBase);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.SliderBase.prototype.getSelector = function() {
  return com.unhurdle.spectrum.includes.SliderInclude.getSliderSelector();
};


/**
 * @override
 */
com.unhurdle.spectrum.SliderBase.prototype.addedToParent = function() {
  com.unhurdle.spectrum.SliderBase.superClass_.addedToParent.apply(this);
  this.positionElements();
};


/**
 * @protected
 */
com.unhurdle.spectrum.SliderBase.prototype.positionElements = function() {
};


/**
 * @protected
 * @type {HTMLInputElement}
 */
com.unhurdle.spectrum.SliderBase.prototype.input = null;


/**
 * @protected
 * @type {HTMLElement}
 */
com.unhurdle.spectrum.SliderBase.prototype.labelContainer = null;


/**
 * @protected
 * @type {HTMLElement}
 */
com.unhurdle.spectrum.SliderBase.prototype.controlsContainer = null;


/**
 * @protected
 * @type {com.unhurdle.spectrum.TextNode}
 */
com.unhurdle.spectrum.SliderBase.prototype.labelNode = null;


/**
 * @protected
 * @type {HTMLElement}
 */
com.unhurdle.spectrum.SliderBase.prototype.handle = null;


/**
 * @protected
 * @type {com.unhurdle.spectrum.TextNode}
 */
com.unhurdle.spectrum.SliderBase.prototype.valueNode = null;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.SliderBase.prototype.com_unhurdle_spectrum_SliderBase__disabled = false;


/**
 * @protected
 * @param {boolean} value
 */
com.unhurdle.spectrum.SliderBase.prototype.enableDisableInput = function(value) {
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.SliderBase.prototype.com_unhurdle_spectrum_SliderBase__displayValue = false;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.SliderBase.prototype.com_unhurdle_spectrum_SliderBase__label = null;


/**
 * @private
 */
com.unhurdle.spectrum.SliderBase.prototype.com_unhurdle_spectrum_SliderBase_setLabel = function() {
  if (!this.labelContainer) {
    this.labelContainer = com.unhurdle.spectrum.newElement("div", this.appendSelector("-labelContainer"));
    this.element.insertBefore(this.labelContainer, this.controlsContainer || null);
  }
  if (this.com_unhurdle_spectrum_SliderBase__label && !this.labelNode) {
    this.labelNode = new com.unhurdle.spectrum.TextNode("label");
    this.labelNode.className = this.appendSelector("-label");
    this.labelContainer.insertBefore(this.labelNode.element, this.labelContainer.childNodes[0] || null);
  }
  if (this.com_unhurdle_spectrum_SliderBase__displayValue && !this.valueNode) {
    this.valueNode = new com.unhurdle.spectrum.TextNode("div");
    this.valueNode.className = this.appendSelector("-value");
    this.labelContainer.appendChild(this.valueNode.element);
  }
  if (this.labelNode) {
    this.labelNode.text = this.com_unhurdle_spectrum_SliderBase__label;
    if (this.valueNode) {
      this.valueNode.text = this.getValue();
    }
  }
};


/**
 * @protected
 * @return {string}
 */
com.unhurdle.spectrum.SliderBase.prototype.getValue = function() {
  return "";
};


/**
 * @protected
 * @param {org.apache.royale.events.MouseEvent} e
 */
com.unhurdle.spectrum.SliderBase.prototype.onMouseDown = function(e) {
  if (this.handle) {
    this.handle.classList.add("is-dragged");
  }
  this.onMouseMove(e);
  window.addEventListener('mouseup', org.apache.royale.utils.Language.closure(this.onMouseUp, this, 'onMouseUp'));
  window.addEventListener('mousemove', org.apache.royale.utils.Language.closure(this.onMouseMove, this, 'onMouseMove'));
};


/**
 * @protected
 */
com.unhurdle.spectrum.SliderBase.prototype.onMouseUp = function() {
  if (this.handle) {
    this.handle.classList.remove("is-dragged");
  }
  window.removeEventListener('mouseup', org.apache.royale.utils.Language.closure(this.onMouseUp, this, 'onMouseUp'));
  window.removeEventListener('mousemove', org.apache.royale.utils.Language.closure(this.onMouseMove, this, 'onMouseMove'));
};


/**
 * @protected
 * @param {org.apache.royale.events.MouseEvent} e
 */
com.unhurdle.spectrum.SliderBase.prototype.onMouseMove = function(e) {
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.SliderBase.prototype.disabled;


com.unhurdle.spectrum.SliderBase.prototype.get__disabled = function() {
  return this.com_unhurdle_spectrum_SliderBase__disabled;
};


com.unhurdle.spectrum.SliderBase.prototype.set__disabled = function(value) {
  if (value != !!this.com_unhurdle_spectrum_SliderBase__disabled) {
    this.toggle("is-disabled", value);
    this.enableDisableInput(value);
    if (value) {
      this.element.addEventListener('mousedown', org.apache.royale.utils.Language.closure(this.onMouseDown, this, 'onMouseDown'));
    } else {
      this.element.removeEventListener('mousedown', org.apache.royale.utils.Language.closure(this.onMouseDown, this, 'onMouseDown'));
    }
  }
  this.com_unhurdle_spectrum_SliderBase__disabled = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.SliderBase.prototype.step;


com.unhurdle.spectrum.SliderBase.prototype.get__step = function() {
  return Number(this.input.step);
};


com.unhurdle.spectrum.SliderBase.prototype.set__step = function(value) {
  this.input.step = "" + value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.SliderBase.prototype.min;


com.unhurdle.spectrum.SliderBase.prototype.get__min = function() {
  return Number(this.input.min);
};


com.unhurdle.spectrum.SliderBase.prototype.set__min = function(value) {
  this.input.min = "" + value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.SliderBase.prototype.max;


com.unhurdle.spectrum.SliderBase.prototype.get__max = function() {
  return Number(this.input.max);
};


com.unhurdle.spectrum.SliderBase.prototype.set__max = function(value) {
  this.input.max = "" + value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.SliderBase.prototype.displayValue;


com.unhurdle.spectrum.SliderBase.prototype.get__displayValue = function() {
  return this.com_unhurdle_spectrum_SliderBase__displayValue;
};


com.unhurdle.spectrum.SliderBase.prototype.set__displayValue = function(value) {
  if (value != !!this.com_unhurdle_spectrum_SliderBase__displayValue) {
    this.com_unhurdle_spectrum_SliderBase__displayValue = value;
    this.com_unhurdle_spectrum_SliderBase_setLabel();
  }
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.SliderBase.prototype.label;


com.unhurdle.spectrum.SliderBase.prototype.get__label = function() {
  return this.com_unhurdle_spectrum_SliderBase__label;
};


com.unhurdle.spectrum.SliderBase.prototype.set__label = function(value) {
  this.com_unhurdle_spectrum_SliderBase__label = value;
  this.com_unhurdle_spectrum_SliderBase_setLabel();
};


Object.defineProperties(com.unhurdle.spectrum.SliderBase.prototype, /** @lends {com.unhurdle.spectrum.SliderBase.prototype} */ {
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.SliderBase.prototype.get__disabled,
set: com.unhurdle.spectrum.SliderBase.prototype.set__disabled},
/**
 * @type {number}
 */
step: {
get: com.unhurdle.spectrum.SliderBase.prototype.get__step,
set: com.unhurdle.spectrum.SliderBase.prototype.set__step},
/**
 * @type {number}
 */
min: {
get: com.unhurdle.spectrum.SliderBase.prototype.get__min,
set: com.unhurdle.spectrum.SliderBase.prototype.set__min},
/**
 * @type {number}
 */
max: {
get: com.unhurdle.spectrum.SliderBase.prototype.get__max,
set: com.unhurdle.spectrum.SliderBase.prototype.set__max},
/**
 * @type {boolean}
 */
displayValue: {
get: com.unhurdle.spectrum.SliderBase.prototype.get__displayValue,
set: com.unhurdle.spectrum.SliderBase.prototype.set__displayValue},
/**
 * @type {string}
 */
label: {
get: com.unhurdle.spectrum.SliderBase.prototype.get__label,
set: com.unhurdle.spectrum.SliderBase.prototype.set__label}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.SliderBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SliderBase', qName: 'com.unhurdle.spectrum.SliderBase', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.SliderBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SliderBase'},
        'step': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SliderBase'},
        'min': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SliderBase'},
        'max': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SliderBase'},
        'displayValue': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SliderBase'},
        'label': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SliderBase'}
      };
    },
    methods: function () {
      return {
        'SliderBase': { type: '', declaredBy: 'com.unhurdle.spectrum.SliderBase'},
        'addedToParent': { type: 'void', declaredBy: 'com.unhurdle.spectrum.SliderBase'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.SliderBase.prototype.ROYALE_COMPILE_FLAGS = 11;