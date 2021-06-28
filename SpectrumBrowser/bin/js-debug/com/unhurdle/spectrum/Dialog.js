/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/Dialog.as
 * com.unhurdle.spectrum.Dialog
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.Dialog');
/* Royale Dependency List: com.unhurdle.spectrum.ActionButton,com.unhurdle.spectrum.Application,com.unhurdle.spectrum.DialogHeader,com.unhurdle.spectrum.ISpectrumElement,com.unhurdle.spectrum.Icon,com.unhurdle.spectrum.Underlay,com.unhurdle.spectrum.const.IconType,com.unhurdle.spectrum.utils.getFocusableElements,com.unhurdle.spectrum.utils.hasAutoFocus,org.apache.royale.core.IChild,org.apache.royale.events.Event,org.apache.royale.events.KeyboardEvent,org.apache.royale.events.utils.WhitespaceKeys,org.apache.royale.html.elements.Div,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.Group');



/**
 * <inject_html>
 * <link rel="stylesheet" href="assets/css/components/dialog/dist.css">
 * </inject_html>
 * 
 * @constructor
 * @extends {com.unhurdle.spectrum.Group}
 */
com.unhurdle.spectrum.Dialog = function() {
  
  this.com_unhurdle_spectrum_Dialog_styleLookup = ["", "alert", "", "fullscreen", "fullscreenTakeover", "small", "medium", "large"];
  this.com_unhurdle_spectrum_Dialog_elements = [];
  com.unhurdle.spectrum.Dialog.base(this, 'constructor');
  this.com_unhurdle_spectrum_Dialog_underlay = new com.unhurdle.spectrum.Underlay();
  this.com_unhurdle_spectrum_Dialog_underlay.hideOnClick = false;
  this.addBead(this.com_unhurdle_spectrum_Dialog_underlay);
  this.addEventListener("modalShown", org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dialog_handleModalShow, this, 'com_unhurdle_spectrum_Dialog_handleModalShow'));
  this.addEventListener("modalHidden", org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dialog_handleModalHidden, this, 'com_unhurdle_spectrum_Dialog_handleModalHidden'));
  this.visible = false;
};
goog.inherits(com.unhurdle.spectrum.Dialog, com.unhurdle.spectrum.Group);


/**
 * @nocollapse
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.ALERT = 1;


/**
 * @nocollapse
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.REGULAR = 2;


/**
 * @nocollapse
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.FULLSCREEN = 3;


/**
 * @nocollapse
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.FULLSCREEN_TAKEOVER = 4;


/**
 * @nocollapse
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.SMALL = 5;


/**
 * @nocollapse
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.MEDIUM = 6;


/**
 * @nocollapse
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.LARGE = 7;


/**
 * @private
 * @type {com.unhurdle.spectrum.Underlay}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_underlay = null;


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.Dialog.prototype.getSelector = function() {
  return "spectrum-Dialog";
};


/**
 * @private
 * @param {org.apache.royale.events.KeyboardEvent} event
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_handleKeyDown = function(event) {
  if (event.key == "Escape") {
    this.hide();
  }
  if (event.key == org.apache.royale.events.utils.WhitespaceKeys.TAB) {
    event.preventDefault();
    this.com_unhurdle_spectrum_Dialog_whenKey(event.shiftKey);
  }
};


/**
 * The HTMLElement used to position the component.
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @override
 */
com.unhurdle.spectrum.Dialog.prototype.addedToParent = function() {
  com.unhurdle.spectrum.Dialog.superClass_.addedToParent.apply(this);
  if (this.dismissible) {
    var /** @type {com.unhurdle.spectrum.DialogHeader} */ head = this.com_unhurdle_spectrum_Dialog_getHeaderElement();
    head.addElementAt(this.com_unhurdle_spectrum_Dialog_getCloseButton(), head.numElements);
  }
};


/**
 * @private
 * @type {com.unhurdle.spectrum.DialogHeader}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_headerElem = null;


/**
 * @private
 * @return {com.unhurdle.spectrum.DialogHeader}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_getHeaderElement = function() {
  if (!this.com_unhurdle_spectrum_Dialog_headerElem) {
    for (var /** @type {number} */ i = 0; i < this.numElements; i++) {
      var /** @type {org.apache.royale.core.IChild} */ elem = this.getElementAt(i);
      if (org.apache.royale.utils.Language.is(elem, com.unhurdle.spectrum.DialogHeader)) {
        this.com_unhurdle_spectrum_Dialog_headerElem = elem;
        break;
      }
    }
    if (!this.com_unhurdle_spectrum_Dialog_headerElem) {
      this.com_unhurdle_spectrum_Dialog_headerElem = new com.unhurdle.spectrum.DialogHeader();
      var /** @type {number} */ position = (this.hero ? 1 : 0) >> 0;
      this.addElementAt(this.com_unhurdle_spectrum_Dialog_headerElem, position);
    }
  }
  return this.com_unhurdle_spectrum_Dialog_headerElem;
};


/**
 * @private
 * @type {com.unhurdle.spectrum.ActionButton}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog__closeButton = null;


/**
 * @private
 * @return {com.unhurdle.spectrum.ActionButton}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_getCloseButton = function() {
  if (!this.com_unhurdle_spectrum_Dialog__closeButton) {
    this.com_unhurdle_spectrum_Dialog__closeButton = new com.unhurdle.spectrum.ActionButton();
    this.com_unhurdle_spectrum_Dialog__closeButton.tabFocusable = false;
    this.com_unhurdle_spectrum_Dialog__closeButton.quiet = true;
    this.com_unhurdle_spectrum_Dialog__closeButton.className = this.appendSelector("-closeButton");
    var /** @type {string} */ type = com.unhurdle.spectrum.const.IconType.CROSS_LARGE;
    this.com_unhurdle_spectrum_Dialog__closeButton.icon = com.unhurdle.spectrum.Icon.getCSSTypeSelector(type);
    this.com_unhurdle_spectrum_Dialog__closeButton.iconType = type;
    this.com_unhurdle_spectrum_Dialog__closeButton.addEventListener("click", org.apache.royale.utils.Language.closure(this.hide, this, 'hide'));
  }
  return this.com_unhurdle_spectrum_Dialog__closeButton;
};


/**
 * @private
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog__size = 0;


/**
 * @private
 * @type {Array}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_styleLookup = null;


/**
 * @private
 * @type {org.apache.royale.html.elements.Div}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_heroDiv = null;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog__hero = null;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog__dismissible = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog__noDivider = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog__error = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog__success = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_attachedToApp = false;


/**
 */
com.unhurdle.spectrum.Dialog.prototype.show = function() {
  com.unhurdle.spectrum.Application.current.popUpParent.addElement(this);
  window.addEventListener(org.apache.royale.events.KeyboardEvent.KEY_DOWN, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dialog_handleKeyDown, this, 'com_unhurdle_spectrum_Dialog_handleKeyDown'));
  this.addEventListener("onTab", org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dialog_handleKeyDown, this, 'com_unhurdle_spectrum_Dialog_handleKeyDown'));
  this.visible = true;
  if (this.com_unhurdle_spectrum_Dialog_alreadyShown) {
    requestAnimationFrame(org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dialog_dispatchShown, this, 'com_unhurdle_spectrum_Dialog_dispatchShown'));
  } else {
    requestAnimationFrame(org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dialog_delayShow, this, 'com_unhurdle_spectrum_Dialog_delayShow'));
  }
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog__focusFirst = true;


/**
 * @private
 * @type {Array}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_elements = null;


/**
 * @private
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_focusElement = function() {
  var /** @type {boolean} */ hasFocus = com.unhurdle.spectrum.utils.hasAutoFocus(this, this.com_unhurdle_spectrum_Dialog_elements);
  if (!hasFocus) {
    if (this.focusFirst && this.com_unhurdle_spectrum_Dialog_elements[0]) {
      this.com_unhurdle_spectrum_Dialog_elements[0].focus();
    } else {
      this.focus();
    }
  }
};


/**
 * @private
 * @param {boolean} backward
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_whenKey = function(backward) {
  var self = this;
  var /** @type {number} */ currentIndex = NaN;
  if (!this.com_unhurdle_spectrum_Dialog_elements) {
    com.unhurdle.spectrum.utils.getFocusableElements(this, this.com_unhurdle_spectrum_Dialog_elements);
  }
  if (this.com_unhurdle_spectrum_Dialog_elements.length <= 1) {
    return;
  }
  var /** @type {Object} */ first = this.com_unhurdle_spectrum_Dialog_elements[0];
  var /** @type {Object} */ last = this.com_unhurdle_spectrum_Dialog_elements[this.com_unhurdle_spectrum_Dialog_elements.length - 1];
  var /** @type {Object} */ source = backward ? first : last;
  var /** @type {Object} */ target = backward ? last : first;
  if (document.activeElement == source["element"]) {
    target.focus();
    return;
  }
  //var /** @type {number} */ currentIndex = NaN;
  var /** @type {boolean} */ found = this.com_unhurdle_spectrum_Dialog_elements.some(function(e, index) {
    if (document.activeElement != e["element"]) {
      return false;
    }
    currentIndex = index;
    return true;
  });
  if (!found) {
    first["focus"]();
    return;
  }
  var /** @type {number} */ offset = backward ? -1 : 1;
  this.com_unhurdle_spectrum_Dialog_elements[currentIndex + offset]["focus"]();
};


/**
 * @private
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_delayShow = function() {
  requestAnimationFrame(org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dialog_dispatchShown, this, 'com_unhurdle_spectrum_Dialog_dispatchShown'));
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_alreadyShown = false;


/**
 * @private
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_dispatchShown = function() {
  if (this.visible) {
    this.dispatchEvent(new org.apache.royale.events.Event("modalShown"));
    this.com_unhurdle_spectrum_Dialog_focusElement();
  }
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_handleModalShow = function(ev) {
  this.toggle("is-open", true);
};


/**
 */
com.unhurdle.spectrum.Dialog.prototype.hide = function() {
  window.removeEventListener(org.apache.royale.events.KeyboardEvent.KEY_DOWN, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_Dialog_handleKeyDown, this, 'com_unhurdle_spectrum_Dialog_handleKeyDown'));
  this.com_unhurdle_spectrum_Dialog_elements = [];
  this.visible = false;
  this.toggle("is-open", false);
  this.parent.removeElement(this);
  this.dispatchEvent(new org.apache.royale.events.Event("modalHidden"));
  this.dispatchEvent(new org.apache.royale.events.Event("hide"));
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.Dialog.prototype.com_unhurdle_spectrum_Dialog_handleModalHidden = function(ev) {
  this.toggle("is-open", false);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.prototype.size;


com.unhurdle.spectrum.Dialog.prototype.get__size = function() {
  return this.com_unhurdle_spectrum_Dialog__size;
};


com.unhurdle.spectrum.Dialog.prototype.set__size = function(value) {
  if (value != this.com_unhurdle_spectrum_Dialog__size) {
    var /** @type {string} */ oldSize = org.apache.royale.utils.Language.string(this.com_unhurdle_spectrum_Dialog_styleLookup[this.com_unhurdle_spectrum_Dialog__size]);
    if (oldSize) {
      this.toggle(this.valueToSelector(oldSize), false);
    }
    var /** @type {string} */ newSize = org.apache.royale.utils.Language.string(this.com_unhurdle_spectrum_Dialog_styleLookup[value]);
    if (newSize) {
      this.toggle(this.valueToSelector(newSize), true);
    }
  }
  this.com_unhurdle_spectrum_Dialog__size = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.Dialog.prototype.hero;


com.unhurdle.spectrum.Dialog.prototype.get__hero = function() {
  return this.com_unhurdle_spectrum_Dialog__hero;
};


com.unhurdle.spectrum.Dialog.prototype.set__hero = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Dialog__hero) {
    if (value) {
      if (!this.com_unhurdle_spectrum_Dialog_heroDiv) {
        this.com_unhurdle_spectrum_Dialog_heroDiv = new org.apache.royale.html.elements.Div();
        this.com_unhurdle_spectrum_Dialog_heroDiv.className = this.appendSelector("-hero");
        this.addElementAt(this.com_unhurdle_spectrum_Dialog_heroDiv, 0);
      }
      this.com_unhurdle_spectrum_Dialog_heroDiv.element.style.backgroundImage = "url(" + value + ")";
    } else {
      this.removeElement(this.com_unhurdle_spectrum_Dialog_heroDiv);
      this.com_unhurdle_spectrum_Dialog_heroDiv = null;
    }
  }
  this.com_unhurdle_spectrum_Dialog__hero = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.dismissible;


com.unhurdle.spectrum.Dialog.prototype.get__dismissible = function() {
  return this.com_unhurdle_spectrum_Dialog__dismissible;
};


com.unhurdle.spectrum.Dialog.prototype.set__dismissible = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Dialog__dismissible) {
    this.toggle(this.valueToSelector("dismissible"), value);
    if (this.parent) {
      if (value) {
        var /** @type {com.unhurdle.spectrum.DialogHeader} */ head = this.com_unhurdle_spectrum_Dialog_getHeaderElement();
        head.addElementAt(this.com_unhurdle_spectrum_Dialog_getCloseButton(), head.numElements);
      } else {
        if (this.com_unhurdle_spectrum_Dialog__closeButton && this.com_unhurdle_spectrum_Dialog__closeButton.parent) {
          this.com_unhurdle_spectrum_Dialog__closeButton.parent.removeElement(this.com_unhurdle_spectrum_Dialog__closeButton);
        }
      }
    }
  }
  this.com_unhurdle_spectrum_Dialog__dismissible = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.noDivider;


com.unhurdle.spectrum.Dialog.prototype.get__noDivider = function() {
  return this.com_unhurdle_spectrum_Dialog__noDivider;
};


com.unhurdle.spectrum.Dialog.prototype.set__noDivider = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Dialog__noDivider) {
    this.toggle(this.valueToSelector("noDivider"), value);
  }
  this.com_unhurdle_spectrum_Dialog__noDivider = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.easyDismiss;


com.unhurdle.spectrum.Dialog.prototype.get__easyDismiss = function() {
  return this.com_unhurdle_spectrum_Dialog_underlay.hideOnClick;
};


com.unhurdle.spectrum.Dialog.prototype.set__easyDismiss = function(value) {
  this.com_unhurdle_spectrum_Dialog_underlay.hideOnClick = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.error;


com.unhurdle.spectrum.Dialog.prototype.get__error = function() {
  return this.com_unhurdle_spectrum_Dialog__error;
};


com.unhurdle.spectrum.Dialog.prototype.set__error = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Dialog__error) {
    this.toggle(this.valueToSelector("error"), value);
  }
  this.com_unhurdle_spectrum_Dialog__error = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.success;


com.unhurdle.spectrum.Dialog.prototype.get__success = function() {
  return this.com_unhurdle_spectrum_Dialog__success;
};


com.unhurdle.spectrum.Dialog.prototype.set__success = function(value) {
  if (value != !!this.com_unhurdle_spectrum_Dialog__success) {
    this.toggle(this.valueToSelector("success"), value);
  }
  this.com_unhurdle_spectrum_Dialog__success = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.Dialog.prototype.focusFirst;


com.unhurdle.spectrum.Dialog.prototype.get__focusFirst = function() {
  return this.com_unhurdle_spectrum_Dialog__focusFirst;
};


com.unhurdle.spectrum.Dialog.prototype.set__focusFirst = function(value) {
  this.com_unhurdle_spectrum_Dialog__focusFirst = value;
};


Object.defineProperties(com.unhurdle.spectrum.Dialog.prototype, /** @lends {com.unhurdle.spectrum.Dialog.prototype} */ {
/**
 * @type {number}
 */
size: {
get: com.unhurdle.spectrum.Dialog.prototype.get__size,
set: com.unhurdle.spectrum.Dialog.prototype.set__size},
/**
 * @type {string}
 */
hero: {
get: com.unhurdle.spectrum.Dialog.prototype.get__hero,
set: com.unhurdle.spectrum.Dialog.prototype.set__hero},
/**
 * @type {boolean}
 */
dismissible: {
get: com.unhurdle.spectrum.Dialog.prototype.get__dismissible,
set: com.unhurdle.spectrum.Dialog.prototype.set__dismissible},
/**
 * @type {boolean}
 */
noDivider: {
get: com.unhurdle.spectrum.Dialog.prototype.get__noDivider,
set: com.unhurdle.spectrum.Dialog.prototype.set__noDivider},
/**
 * @type {boolean}
 */
easyDismiss: {
get: com.unhurdle.spectrum.Dialog.prototype.get__easyDismiss,
set: com.unhurdle.spectrum.Dialog.prototype.set__easyDismiss},
/**
 * @type {boolean}
 */
error: {
get: com.unhurdle.spectrum.Dialog.prototype.get__error,
set: com.unhurdle.spectrum.Dialog.prototype.set__error},
/**
 * @type {boolean}
 */
success: {
get: com.unhurdle.spectrum.Dialog.prototype.get__success,
set: com.unhurdle.spectrum.Dialog.prototype.set__success},
/**
 * @type {boolean}
 */
focusFirst: {
get: com.unhurdle.spectrum.Dialog.prototype.get__focusFirst,
set: com.unhurdle.spectrum.Dialog.prototype.set__focusFirst}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.Dialog.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Dialog', qName: 'com.unhurdle.spectrum.Dialog', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.Dialog.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'size': { type: 'int', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'hero': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'dismissible': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'noDivider': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'easyDismiss': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'error': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'success': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'focusFirst': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.Dialog'}
      };
    },
    methods: function () {
      return {
        'Dialog': { type: '', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'addedToParent': { type: 'void', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'show': { type: 'void', declaredBy: 'com.unhurdle.spectrum.Dialog'},
        'hide': { type: 'void', declaredBy: 'com.unhurdle.spectrum.Dialog'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.Dialog.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.unhurdle.spectrum.Dialog.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.unhurdle.spectrum.Dialog);