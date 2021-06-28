/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/TextField.as
 * com.unhurdle.spectrum.TextField
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.TextField');
/* Royale Dependency List: com.unhurdle.spectrum.Icon,com.unhurdle.spectrum.const.IconType,com.unhurdle.spectrum.newElement,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.accessories.RestrictTextInputBead,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.TextFieldBase');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.TextFieldBase}
 */
com.unhurdle.spectrum.TextField = function() {
  com.unhurdle.spectrum.TextField.base(this, 'constructor');
  this._input.addEventListener("input", org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_TextField_checkValidation, this, 'com_unhurdle_spectrum_TextField_checkValidation'));
};
goog.inherits(com.unhurdle.spectrum.TextField, com.unhurdle.spectrum.TextFieldBase);


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.com_unhurdle_spectrum_TextField__pattern = null;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.com_unhurdle_spectrum_TextField__restrict = null;


/**
 * @private
 * @type {org.apache.royale.html.accessories.RestrictTextInputBead}
 */
com.unhurdle.spectrum.TextField.prototype.com_unhurdle_spectrum_TextField_restrictBead = null;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.TextField.prototype.com_unhurdle_spectrum_TextField__required = false;


/**
 * @private
 * @type {com.unhurdle.spectrum.Icon}
 */
com.unhurdle.spectrum.TextField.prototype.com_unhurdle_spectrum_TextField_validIcon = null;


/**
 * @private
 * @type {com.unhurdle.spectrum.Icon}
 */
com.unhurdle.spectrum.TextField.prototype.com_unhurdle_spectrum_TextField_invalidIcon = null;


/**
 * @private
 */
com.unhurdle.spectrum.TextField.prototype.com_unhurdle_spectrum_TextField_checkValidation = function() {
  if (this.pattern) {
    var /** @type {RegExp} */ patt = new RegExp(this.pattern);
    if (patt.test(this._input.value)) {
      this.valid = true;
    } else {
      this.invalid = true;
    }
  }
};


/**
 * @protected
 * @type {HTMLInputElement}
 */
com.unhurdle.spectrum.TextField.prototype._input = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.TextField.prototype.createElement = function() {
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ elem = com.unhurdle.spectrum.TextField.superClass_.createElement.apply(this);
  this._input = com.unhurdle.spectrum.newElement("input", this.appendSelector("-input"));
  elem.appendChild(this.input);
  return elem;
};


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.com_unhurdle_spectrum_TextField__inputClass = null;


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.TextField.prototype.readonly;


com.unhurdle.spectrum.TextField.prototype.get__readonly = function() {
  return this.input.readOnly;
};


com.unhurdle.spectrum.TextField.prototype.set__readonly = function(value) {
  this.input.readOnly = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.placeholder;


com.unhurdle.spectrum.TextField.prototype.get__placeholder = function() {
  return this.input.placeholder;
};


com.unhurdle.spectrum.TextField.prototype.set__placeholder = function(value) {
  if (value) {
    this.input.placeholder = value;
  } else {
    this.input.removeAttribute("placeholder");
  }
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.name;


com.unhurdle.spectrum.TextField.prototype.get__name = function() {
  return this.input.name;
};


com.unhurdle.spectrum.TextField.prototype.set__name = function(value) {
  this.input.name = this.name;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.text;


com.unhurdle.spectrum.TextField.prototype.get__text = function() {
  return this.input.value;
};


com.unhurdle.spectrum.TextField.prototype.set__text = function(value) {
  if (value) {
    this.input.value = value;
  } else {
    this.input.value = "";
  }
  this.com_unhurdle_spectrum_TextField_checkValidation();
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.pattern;


com.unhurdle.spectrum.TextField.prototype.get__pattern = function() {
  return this.com_unhurdle_spectrum_TextField__pattern;
};


com.unhurdle.spectrum.TextField.prototype.set__pattern = function(value) {
  this.com_unhurdle_spectrum_TextField__pattern = value;
  if (this.text) {
    this.com_unhurdle_spectrum_TextField_checkValidation();
  }
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.restrict;


com.unhurdle.spectrum.TextField.prototype.get__restrict = function() {
  return this.com_unhurdle_spectrum_TextField__restrict;
};


com.unhurdle.spectrum.TextField.prototype.set__restrict = function(value) {
  if (this.com_unhurdle_spectrum_TextField__restrict == value) {
    return;
  }
  if (value && !this.com_unhurdle_spectrum_TextField_restrictBead) {
    this.com_unhurdle_spectrum_TextField_restrictBead = new org.apache.royale.html.accessories.RestrictTextInputBead();
    this.addBead(this.com_unhurdle_spectrum_TextField_restrictBead);
  }
  if (this.com_unhurdle_spectrum_TextField_restrictBead) {
    this.com_unhurdle_spectrum_TextField_restrictBead.restrict = value;
  }
  this.com_unhurdle_spectrum_TextField__restrict = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.TextField.prototype.required;


com.unhurdle.spectrum.TextField.prototype.get__required = function() {
  return this.input.required;
};


com.unhurdle.spectrum.TextField.prototype.set__required = function(value) {
  if (!!value != !!this.com_unhurdle_spectrum_TextField__required) {
    this.input.required = value;
  }
  this.com_unhurdle_spectrum_TextField__required = value;
};


com.unhurdle.spectrum.TextField.prototype.get__disabled = function() {
  return com.unhurdle.spectrum.TextField.superClass_.get__disabled.apply(this);
};


com.unhurdle.spectrum.TextField.prototype.set__disabled = function(value) {
  if (value != com.unhurdle.spectrum.TextField.superClass_.get__disabled.apply(this)) {
    this.input.disabled = value;
  }
  com.unhurdle.spectrum.TextField.superClass_.set__disabled.apply(this, [ value] );
};


com.unhurdle.spectrum.TextField.prototype.get__valid = function() {
  return com.unhurdle.spectrum.TextField.superClass_.get__valid.apply(this);
};


com.unhurdle.spectrum.TextField.prototype.set__valid = function(value) {
  com.unhurdle.spectrum.TextField.superClass_.set__valid.apply(this, [ value] );
  if (value) {
    if (!this.com_unhurdle_spectrum_TextField_validIcon) {
      var /** @type {string} */ type = com.unhurdle.spectrum.const.IconType.CHECKMARK_MEDIUM;
      this.com_unhurdle_spectrum_TextField_validIcon = new com.unhurdle.spectrum.Icon(com.unhurdle.spectrum.Icon.getCSSTypeSelector(type));
      this.com_unhurdle_spectrum_TextField_validIcon.className = this.appendSelector("-validationIcon");
      this.com_unhurdle_spectrum_TextField_validIcon.type = type;
    }
    if (this.getElementIndex(this.com_unhurdle_spectrum_TextField_validIcon) == -1) {
      this.addElementAt(this.com_unhurdle_spectrum_TextField_validIcon, 0);
    }
  } else {
    if (this.com_unhurdle_spectrum_TextField_validIcon && this.getElementIndex(this.com_unhurdle_spectrum_TextField_validIcon) != -1) {
      this.removeElement(this.com_unhurdle_spectrum_TextField_validIcon);
    }
  }
};


com.unhurdle.spectrum.TextField.prototype.get__invalid = function() {
  return com.unhurdle.spectrum.TextField.superClass_.get__invalid.apply(this);
};


com.unhurdle.spectrum.TextField.prototype.set__invalid = function(value) {
  com.unhurdle.spectrum.TextField.superClass_.set__invalid.apply(this, [ value] );
  if (value) {
    if (!this.com_unhurdle_spectrum_TextField_invalidIcon) {
      var /** @type {string} */ type = com.unhurdle.spectrum.const.IconType.ALERT_MEDIUM;
      this.com_unhurdle_spectrum_TextField_invalidIcon = new com.unhurdle.spectrum.Icon(com.unhurdle.spectrum.Icon.getCSSTypeSelector(type));
      this.com_unhurdle_spectrum_TextField_invalidIcon.className = this.appendSelector("-validationIcon");
      this.com_unhurdle_spectrum_TextField_invalidIcon.type = type;
      this.com_unhurdle_spectrum_TextField_invalidIcon.style = {'box-sizing':'content-box'};
    }
    if (this.getElementIndex(this.com_unhurdle_spectrum_TextField_invalidIcon) == -1) {
      this.addElementAt(this.com_unhurdle_spectrum_TextField_invalidIcon, 0);
    }
  } else {
    if (this.com_unhurdle_spectrum_TextField_invalidIcon && this.getElementIndex(this.com_unhurdle_spectrum_TextField_invalidIcon) != -1) {
      this.removeElement(this.com_unhurdle_spectrum_TextField_invalidIcon);
    }
  }
};


com.unhurdle.spectrum.TextField.prototype.get__focusElement = function() {
  return this._input;
};


/**
 * @nocollapse
 * @export
 * @type {HTMLInputElement}
 */
com.unhurdle.spectrum.TextField.prototype.input;


com.unhurdle.spectrum.TextField.prototype.get__input = function() {
  return this._input;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.TextField.prototype.inputClass;


com.unhurdle.spectrum.TextField.prototype.get__inputClass = function() {
  return this.com_unhurdle_spectrum_TextField__inputClass;
};


com.unhurdle.spectrum.TextField.prototype.set__inputClass = function(value) {
  this.com_unhurdle_spectrum_TextField__inputClass = value;
  this.input.className = this.appendSelector("-input") + " " + value;
};


Object.defineProperties(com.unhurdle.spectrum.TextField.prototype, /** @lends {com.unhurdle.spectrum.TextField.prototype} */ {
/**
 * @type {boolean}
 */
readonly: {
get: com.unhurdle.spectrum.TextField.prototype.get__readonly,
set: com.unhurdle.spectrum.TextField.prototype.set__readonly},
/**
 * @type {string}
 */
placeholder: {
get: com.unhurdle.spectrum.TextField.prototype.get__placeholder,
set: com.unhurdle.spectrum.TextField.prototype.set__placeholder},
/**
 * @type {string}
 */
name: {
get: com.unhurdle.spectrum.TextField.prototype.get__name,
set: com.unhurdle.spectrum.TextField.prototype.set__name},
/**
 * @type {string}
 */
text: {
get: com.unhurdle.spectrum.TextField.prototype.get__text,
set: com.unhurdle.spectrum.TextField.prototype.set__text},
/**
 * @type {string}
 */
pattern: {
get: com.unhurdle.spectrum.TextField.prototype.get__pattern,
set: com.unhurdle.spectrum.TextField.prototype.set__pattern},
/**
 * @type {string}
 */
restrict: {
get: com.unhurdle.spectrum.TextField.prototype.get__restrict,
set: com.unhurdle.spectrum.TextField.prototype.set__restrict},
/**
 * @type {boolean}
 */
required: {
get: com.unhurdle.spectrum.TextField.prototype.get__required,
set: com.unhurdle.spectrum.TextField.prototype.set__required},
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.TextField.prototype.get__disabled,
set: com.unhurdle.spectrum.TextField.prototype.set__disabled},
/**
 * @type {boolean}
 */
valid: {
get: com.unhurdle.spectrum.TextField.prototype.get__valid,
set: com.unhurdle.spectrum.TextField.prototype.set__valid},
/**
 * @type {boolean}
 */
invalid: {
get: com.unhurdle.spectrum.TextField.prototype.get__invalid,
set: com.unhurdle.spectrum.TextField.prototype.set__invalid},
/**
 * @type {HTMLElement}
 */
focusElement: {
get: com.unhurdle.spectrum.TextField.prototype.get__focusElement},
/**
 * @type {HTMLInputElement}
 */
input: {
get: com.unhurdle.spectrum.TextField.prototype.get__input},
/**
 * @type {string}
 */
inputClass: {
get: com.unhurdle.spectrum.TextField.prototype.get__inputClass,
set: com.unhurdle.spectrum.TextField.prototype.set__inputClass}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.TextField.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextField', qName: 'com.unhurdle.spectrum.TextField', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.TextField.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'readonly': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'placeholder': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'name': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'text': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'pattern': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'restrict': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'required': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'valid': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'invalid': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'focusElement': { type: 'HTMLElement', access: 'readonly', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'input': { type: 'HTMLInputElement', access: 'readonly', declaredBy: 'com.unhurdle.spectrum.TextField'},
        'inputClass': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.TextField'}
      };
    },
    methods: function () {
      return {
        'TextField': { type: '', declaredBy: 'com.unhurdle.spectrum.TextField'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.TextField.prototype.ROYALE_COMPILE_FLAGS = 11;