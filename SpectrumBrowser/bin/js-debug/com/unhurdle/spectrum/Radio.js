/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/Radio.as
 * com.unhurdle.spectrum.Radio
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.Radio');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement*/

goog.require('com.unhurdle.spectrum.SpectrumBase');



/**
 * <inject_html>
 * <link rel="stylesheet" href="assets/css/components/radio/dist.css">
 * </inject_html>
 * 
 * @constructor
 * @extends {com.unhurdle.spectrum.SpectrumBase}
 */
com.unhurdle.spectrum.Radio = function() {
  com.unhurdle.spectrum.Radio.base(this, 'constructor');
};
goog.inherits(com.unhurdle.spectrum.Radio, com.unhurdle.spectrum.SpectrumBase);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Radio.prototype.getSelector = function() {
  return "";
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Radio.prototype.getTag = function() {
  return "sp-radio";
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Radio.prototype.createElement = function() {
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ elem = com.unhurdle.spectrum.Radio.superClass_.createElement.apply(this);
  return elem;
};


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.Radio.prototype.com_unhurdle_spectrum_Radio__value = null;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Radio.prototype.com_unhurdle_spectrum_Radio__checked = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Radio.prototype.com_unhurdle_spectrum_Radio__labelBelow = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Radio.prototype.com_unhurdle_spectrum_Radio__disabled = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Radio.prototype.com_unhurdle_spectrum_Radio__invalid = false;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.Radio.prototype.com_unhurdle_spectrum_Radio__text = null;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.Radio.prototype.com_unhurdle_spectrum_Radio__quiet = null;


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Radio.prototype.value;


com.unhurdle.spectrum.Radio.prototype.get__value = function() {
  return this.com_unhurdle_spectrum_Radio__value;
};


com.unhurdle.spectrum.Radio.prototype.set__value = function(val) {
  if (this.com_unhurdle_spectrum_Radio__value != val) {
    this.setAttribute('value', val);
  }
  this.com_unhurdle_spectrum_Radio__value = val;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Radio.prototype.checked;


com.unhurdle.spectrum.Radio.prototype.get__checked = function() {
  return this.com_unhurdle_spectrum_Radio__checked;
};


com.unhurdle.spectrum.Radio.prototype.set__checked = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Radio__checked) {
    if (value) {
      this.setAttribute('checked', true);
    } else {
      this.removeAttribute('checked');
    }
  }
  this.com_unhurdle_spectrum_Radio__checked = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Radio.prototype.labelBelow;


com.unhurdle.spectrum.Radio.prototype.get__labelBelow = function() {
  return this.com_unhurdle_spectrum_Radio__labelBelow;
};


com.unhurdle.spectrum.Radio.prototype.set__labelBelow = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Radio__labelBelow) {
  }{}
  
  this.com_unhurdle_spectrum_Radio__labelBelow = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Radio.prototype.disabled;


com.unhurdle.spectrum.Radio.prototype.get__disabled = function() {
  return this.com_unhurdle_spectrum_Radio__disabled;
};


com.unhurdle.spectrum.Radio.prototype.set__disabled = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Radio__disabled) {
    if (value) {
      this.setAttribute('disabled', true);
    } else {
      this.removeAttribute('disabled');
    }
  }
  this.com_unhurdle_spectrum_Radio__disabled = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Radio.prototype.invalid;


com.unhurdle.spectrum.Radio.prototype.get__invalid = function() {
  return this.com_unhurdle_spectrum_Radio__invalid;
};


com.unhurdle.spectrum.Radio.prototype.set__invalid = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Radio__invalid) {
    if (value) {
      this.setAttribute('invalid', true);
    } else {
      this.removeAttribute('invalid');
    }
  }
  this.com_unhurdle_spectrum_Radio__invalid = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Radio.prototype.text;


com.unhurdle.spectrum.Radio.prototype.get__text = function() {
  return this.com_unhurdle_spectrum_Radio__text;
};


com.unhurdle.spectrum.Radio.prototype.set__text = function(value) {
  this.com_unhurdle_spectrum_Radio__text = value;
  this.element.innerHTML = this.text;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Radio.prototype.quiet;


com.unhurdle.spectrum.Radio.prototype.get__quiet = function() {
  return this.com_unhurdle_spectrum_Radio__quiet;
};


com.unhurdle.spectrum.Radio.prototype.set__quiet = function(value) {
  if (this.com_unhurdle_spectrum_Radio__quiet != value) {
  }{}
  
  this.com_unhurdle_spectrum_Radio__quiet = value;
};


Object.defineProperties(com.unhurdle.spectrum.Radio.prototype, /** @lends {com.unhurdle.spectrum.Radio.prototype} */ {
/**
 * @type {string}
 */
value: {
get: com.unhurdle.spectrum.Radio.prototype.get__value,
set: com.unhurdle.spectrum.Radio.prototype.set__value},
/**
 * @type {boolean}
 */
checked: {
get: com.unhurdle.spectrum.Radio.prototype.get__checked,
set: com.unhurdle.spectrum.Radio.prototype.set__checked},
/**
 * @type {boolean}
 */
labelBelow: {
get: com.unhurdle.spectrum.Radio.prototype.get__labelBelow,
set: com.unhurdle.spectrum.Radio.prototype.set__labelBelow},
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.Radio.prototype.get__disabled,
set: com.unhurdle.spectrum.Radio.prototype.set__disabled},
/**
 * @type {boolean}
 */
invalid: {
get: com.unhurdle.spectrum.Radio.prototype.get__invalid,
set: com.unhurdle.spectrum.Radio.prototype.set__invalid},
/**
 * @type {string}
 */
text: {
get: com.unhurdle.spectrum.Radio.prototype.get__text,
set: com.unhurdle.spectrum.Radio.prototype.set__text},
/**
 * @type {string}
 */
quiet: {
get: com.unhurdle.spectrum.Radio.prototype.get__quiet,
set: com.unhurdle.spectrum.Radio.prototype.set__quiet}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.Radio.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Radio', qName: 'com.unhurdle.spectrum.Radio', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.Radio.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'value': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Radio'},
        'checked': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Radio'},
        'labelBelow': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Radio'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Radio'},
        'invalid': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Radio'},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Radio'},
        'quiet': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Radio'}
      };
    },
    methods: function () {
      return {
        'Radio': { type: '', declaredBy: 'com.unhurdle.spectrum.Radio'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Radio.prototype.ROYALE_COMPILE_FLAGS = 11;