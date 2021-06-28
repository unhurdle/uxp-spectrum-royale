/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/Dial.as
 * com.unhurdle.spectrum.Dial
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.Dial');
/* Royale Dependency List: com.unhurdle.spectrum.TextNode,com.unhurdle.spectrum.includes.SliderInclude,com.unhurdle.spectrum.newElement,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.utils.number.getPercent,org.apache.royale.utils.number.pinValue,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.SpectrumBase');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 */
com.unhurdle.spectrum.Dial = function() {
  com.unhurdle.spectrum.Dial.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.Dial, com.unhurdle.spectrum.SpectrumBase);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Dial.prototype.getSelector = function() {
  return com.unhurdle.spectrum.includes.SliderInclude.getDialSelector();
};


/**
 * @private
 * @type {HTMLInputElement}
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial_input = null;


/**
 * @private
 * @type {HTMLDivElement}
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial_handle = null;


/**
 * @private
 * @type {HTMLElement}
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial_labelContainer = null;


/**
 * @private
 * @type {HTMLElement}
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial_controlsContainer = null;


/**
 * @protected
 * @type {com.unhurdle.spectrum.TextNode}
 */
com.unhurdle.spectrum.Dial.prototype.labelNode = null;


/**
 * @protected
 * @type {com.unhurdle.spectrum.TextNode}
 */
com.unhurdle.spectrum.Dial.prototype.valueNode = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Dial.prototype.createElement = function() {
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ elem = com.unhurdle.spectrum.Dial.superClass_.createElement.apply(this);
  this.com_unhurdle_spectrum_Dial_controlsContainer = com.unhurdle.spectrum.newElement("div", this.appendSelector("-controls"));
  this.com_unhurdle_spectrum_Dial_handle = com.unhurdle.spectrum.newElement("div");
  this.com_unhurdle_spectrum_Dial_handle.className = this.appendSelector("-handle");
  this.com_unhurdle_spectrum_Dial_handle.tabIndex = 0;
  this.com_unhurdle_spectrum_Dial_input = com.unhurdle.spectrum.newElement("input");
  this.com_unhurdle_spectrum_Dial_input.className = this.appendSelector("-input");
  this.com_unhurdle_spectrum_Dial_input.type = "range";
  this.value = 0;
  this.min = 0;
  this.max = 100;
  this.com_unhurdle_spectrum_Dial_handle.appendChild(this.com_unhurdle_spectrum_Dial_input);
  this.com_unhurdle_spectrum_Dial_controlsContainer.appendChild(this.com_unhurdle_spectrum_Dial_handle);
  elem.appendChild(this.com_unhurdle_spectrum_Dial_controlsContainer);
  return elem;
};


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial__size = null;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial__displayValue = false;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial__label = null;


/**
 * @private
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial_setLabel = function() {
  if (this.com_unhurdle_spectrum_Dial__label && !this.com_unhurdle_spectrum_Dial_labelContainer) {
    this.com_unhurdle_spectrum_Dial_labelContainer = com.unhurdle.spectrum.newElement("div", this.appendSelector("-labelContainer"));
    this.element.insertBefore(this.com_unhurdle_spectrum_Dial_labelContainer, this.com_unhurdle_spectrum_Dial_controlsContainer);
  }
  if (this.com_unhurdle_spectrum_Dial__label && !this.labelNode) {
    this.labelNode = new com.unhurdle.spectrum.TextNode("label");
    this.labelNode.className = this.appendSelector("-label");
    this.com_unhurdle_spectrum_Dial_labelContainer.insertBefore(this.labelNode.element, this.com_unhurdle_spectrum_Dial_labelContainer.childNodes[0] || null);
  }
  if (this.com_unhurdle_spectrum_Dial__displayValue && !this.valueNode) {
    this.valueNode = new com.unhurdle.spectrum.TextNode("div");
    this.valueNode.className = this.appendSelector("-value");
    this.com_unhurdle_spectrum_Dial_labelContainer.appendChild(this.valueNode.element);
  }
  if (this.labelNode) {
    this.labelNode.text = this.com_unhurdle_spectrum_Dial__label;
  }
  if (this.valueNode) {
    this.valueNode.text = "" + Math.round(this.value);
  }
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial__disabled = false;


/**
 * @protected
 */
com.unhurdle.spectrum.Dial.prototype.positionElements = function() {
  var /** @type {number} */ percent = this.value / (this.max - this.min) * 100;
  this.com_unhurdle_spectrum_Dial_handle.tabIndex = Number(percent + "%");
  this.com_unhurdle_spectrum_Dial_setLabel();
  var /** @type {number} */ deg = percent * 0.01 * 260 - 40;
  this.com_unhurdle_spectrum_Dial_handle.style.transform = 'rotate(' + deg + 'deg' + ')';
};


/**
 * @override
 */
com.unhurdle.spectrum.Dial.prototype.addedToParent = function() {
  com.unhurdle.spectrum.Dial.superClass_.addedToParent.apply(this);
  if (!this.disabled) {
    this.addEventListener('mousedown', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dial_onMouseDown, this, 'com_unhurdle_spectrum_Dial_onMouseDown'));
  }
};


/**
 * @private
 * @param {MouseEvent} e
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial_onMouseDown = function(e) {
  window.addEventListener('mouseup', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dial_onMouseUp, this, 'com_unhurdle_spectrum_Dial_onMouseUp'));
  window.addEventListener('mousemove', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dial_onMouseMove, this, 'com_unhurdle_spectrum_Dial_onMouseMove'));
};


/**
 * @private
 * @param {MouseEvent} e
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial_onMouseUp = function(e) {
  window.removeEventListener('mouseup', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dial_onMouseUp, this, 'com_unhurdle_spectrum_Dial_onMouseUp'));
  window.removeEventListener('mousemove', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dial_onMouseMove, this, 'com_unhurdle_spectrum_Dial_onMouseMove'));
};


/**
 * @private
 * @param {MouseEvent} e
 */
com.unhurdle.spectrum.Dial.prototype.com_unhurdle_spectrum_Dial_onMouseMove = function(e) {
  var /** @type {HTMLElement} */ elem = this.element;
  var /** @type {number} */ dialOffsetWidth = elem.offsetWidth;
  var /** @type {number} */ dialOffsetLeft = elem.offsetLeft + elem.offsetParent.offsetLeft;
  var /** @type {number} */ x = org.apache.royale.utils.number.pinValue(e.x - dialOffsetLeft, 0, dialOffsetWidth);
  var /** @type {number} */ percent = org.apache.royale.utils.number.getPercent(x, dialOffsetWidth);
  var /** @type {number} */ val = (this.max - this.min) / (100 / percent);
  this.value = val;
  this.dispatchEvent(new org.apache.royale.events.Event("change"));
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.Dial.prototype.min;


com.unhurdle.spectrum.Dial.prototype.get__min = function() {
  return Number(this.com_unhurdle_spectrum_Dial_input.min);
};


com.unhurdle.spectrum.Dial.prototype.set__min = function(val) {
  this.com_unhurdle_spectrum_Dial_input.min = "" + val;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.Dial.prototype.max;


com.unhurdle.spectrum.Dial.prototype.get__max = function() {
  return Number(this.com_unhurdle_spectrum_Dial_input.max);
};


com.unhurdle.spectrum.Dial.prototype.set__max = function(val) {
  this.com_unhurdle_spectrum_Dial_input.max = "" + val;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Dial.prototype.size;


com.unhurdle.spectrum.Dial.prototype.get__size = function() {
  return this.com_unhurdle_spectrum_Dial__size;
};


com.unhurdle.spectrum.Dial.prototype.set__size = function(val) {
  if (val != this.com_unhurdle_spectrum_Dial__size) {
    switch (val) {
      case "small":
      
      case "large":
      
      case "normal":
        break;
      default:
        throw new Error("Invalid size: " + val);
    }
    var /** @type {string} */ oldSize = this.valueToSelector(this.com_unhurdle_spectrum_Dial__size);
    if (val != "normal") {
      var /** @type {string} */ newSize = this.valueToSelector(val);
      this.toggle(newSize, true);
    }
    this.toggle(oldSize, false);
    this.com_unhurdle_spectrum_Dial__size = val;
  }
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Dial.prototype.displayValue;


com.unhurdle.spectrum.Dial.prototype.get__displayValue = function() {
  return this.com_unhurdle_spectrum_Dial__displayValue;
};


com.unhurdle.spectrum.Dial.prototype.set__displayValue = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Dial__displayValue) {
    this.com_unhurdle_spectrum_Dial__displayValue = value;
    this.com_unhurdle_spectrum_Dial_setLabel();
  }
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Dial.prototype.label;


com.unhurdle.spectrum.Dial.prototype.get__label = function() {
  return this.com_unhurdle_spectrum_Dial__label;
};


com.unhurdle.spectrum.Dial.prototype.set__label = function(value) {
  this.com_unhurdle_spectrum_Dial__label = value;
  this.com_unhurdle_spectrum_Dial_setLabel();
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Dial.prototype.disabled;


com.unhurdle.spectrum.Dial.prototype.get__disabled = function() {
  return this.com_unhurdle_spectrum_Dial__disabled;
};


com.unhurdle.spectrum.Dial.prototype.set__disabled = function(val) {
  if (val != !!this.com_unhurdle_spectrum_Dial__disabled) {
    this.toggle("is-disabled", val);
  }
  this.com_unhurdle_spectrum_Dial__disabled = val;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.Dial.prototype.value;


com.unhurdle.spectrum.Dial.prototype.get__value = function() {
  return Number(this.com_unhurdle_spectrum_Dial_input.value);
};


com.unhurdle.spectrum.Dial.prototype.set__value = function(val) {
  this.com_unhurdle_spectrum_Dial_input.value = "" + val;
  this.positionElements();
};


Object.defineProperties(com.unhurdle.spectrum.Dial.prototype, /** @lends {com.unhurdle.spectrum.Dial.prototype} */ {
/**
 * @type {number}
 */
min: {
get: com.unhurdle.spectrum.Dial.prototype.get__min,
set: com.unhurdle.spectrum.Dial.prototype.set__min},
/**
 * @type {number}
 */
max: {
get: com.unhurdle.spectrum.Dial.prototype.get__max,
set: com.unhurdle.spectrum.Dial.prototype.set__max},
/**
 * @type {string}
 */
size: {
get: com.unhurdle.spectrum.Dial.prototype.get__size,
set: com.unhurdle.spectrum.Dial.prototype.set__size},
/**
 * @type {boolean}
 */
displayValue: {
get: com.unhurdle.spectrum.Dial.prototype.get__displayValue,
set: com.unhurdle.spectrum.Dial.prototype.set__displayValue},
/**
 * @type {string}
 */
label: {
get: com.unhurdle.spectrum.Dial.prototype.get__label,
set: com.unhurdle.spectrum.Dial.prototype.set__label},
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.Dial.prototype.get__disabled,
set: com.unhurdle.spectrum.Dial.prototype.set__disabled},
/**
 * @type {number}
 */
value: {
get: com.unhurdle.spectrum.Dial.prototype.get__value,
set: com.unhurdle.spectrum.Dial.prototype.set__value}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.Dial.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Dial', qName: 'com.unhurdle.spectrum.Dial', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.Dial.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'min': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dial'},
        'max': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dial'},
        'size': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dial'},
        'displayValue': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dial'},
        'label': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dial'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dial'},
        'value': { type: 'Number', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dial'}
      };
    },
    methods: function () {
      return {
        'Dial': { type: '', declaredBy: 'com.unhurdle.spectrum.Dial'},
        'addedToParent': { type: 'void', declaredBy: 'com.unhurdle.spectrum.Dial'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dial.prototype.ROYALE_COMPILE_FLAGS = 11;