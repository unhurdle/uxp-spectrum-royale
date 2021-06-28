/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/SideNavItem.as
 * com.unhurdle.spectrum.SideNavItem
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.SideNavItem');
/* Royale Dependency List: com.unhurdle.spectrum.Icon,com.unhurdle.spectrum.TextNode,com.unhurdle.spectrum.includes.SideNavInclude*/

goog.require('com.unhurdle.spectrum.Group');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.Group}
 * @param {string=} text
 */
com.unhurdle.spectrum.SideNavItem = function(text) {
  text = typeof text !== 'undefined' ? text : "";
  com.unhurdle.spectrum.SideNavItem.base(this, 'constructor');
  this.text = text;
};
goog.inherits(com.unhurdle.spectrum.SideNavItem, com.unhurdle.spectrum.Group);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.SideNavItem.prototype.getSelector = function() {
  return com.unhurdle.spectrum.includes.SideNavInclude.getSelector() + "-item";
};


/**
 * @private
 * @type {com.unhurdle.spectrum.TextNode}
 */
com.unhurdle.spectrum.SideNavItem.prototype.com_unhurdle_spectrum_SideNavItem__textNode = null;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.SideNavItem.prototype.com_unhurdle_spectrum_SideNavItem__text = null;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.SideNavItem.prototype.com_unhurdle_spectrum_SideNavItem__disabled = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.SideNavItem.prototype.com_unhurdle_spectrum_SideNavItem__selected = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.SideNavItem.prototype.com_unhurdle_spectrum_SideNavItem__heading = false;


/**
 * @private
 * @type {string}
 */
com.unhurdle.spectrum.SideNavItem.prototype.com_unhurdle_spectrum_SideNavItem__icon = null;


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.SideNavItem.prototype.text;


com.unhurdle.spectrum.SideNavItem.prototype.get__text = function() {
  return this.com_unhurdle_spectrum_SideNavItem__text;
};


com.unhurdle.spectrum.SideNavItem.prototype.set__text = function(value) {
  this.com_unhurdle_spectrum_SideNavItem__text = value;
  if (value && !this.com_unhurdle_spectrum_SideNavItem__textNode) {
    this.com_unhurdle_spectrum_SideNavItem__textNode = new com.unhurdle.spectrum.TextNode("span");
    this.com_unhurdle_spectrum_SideNavItem__textNode.className = this.appendSelector("Link");
    this.com_unhurdle_spectrum_SideNavItem__textNode.element.style.userSelect = "none";
    this.com_unhurdle_spectrum_SideNavItem__textNode.element.style.display = "inline-flex";
    this._element.appendChild(this.com_unhurdle_spectrum_SideNavItem__textNode.element);
    this.com_unhurdle_spectrum_SideNavItem__textNode.text = value;
  }
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.SideNavItem.prototype.disabled;


com.unhurdle.spectrum.SideNavItem.prototype.get__disabled = function() {
  return this.com_unhurdle_spectrum_SideNavItem__disabled;
};


com.unhurdle.spectrum.SideNavItem.prototype.set__disabled = function(value) {
  if (value != !!this.com_unhurdle_spectrum_SideNavItem__disabled) {
    this.toggle("is-disabled", value);
  }
  this.com_unhurdle_spectrum_SideNavItem__disabled = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.SideNavItem.prototype.selected;


com.unhurdle.spectrum.SideNavItem.prototype.get__selected = function() {
  return this.com_unhurdle_spectrum_SideNavItem__selected;
};


com.unhurdle.spectrum.SideNavItem.prototype.set__selected = function(value) {
  if (value != !!this.com_unhurdle_spectrum_SideNavItem__selected) {
    this.toggle("is-selected", value);
  }
  this.com_unhurdle_spectrum_SideNavItem__selected = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.SideNavItem.prototype.heading;


com.unhurdle.spectrum.SideNavItem.prototype.get__heading = function() {
  return this.com_unhurdle_spectrum_SideNavItem__heading;
};


com.unhurdle.spectrum.SideNavItem.prototype.set__heading = function(value) {
  if (value != !!this.com_unhurdle_spectrum_SideNavItem__heading) {
    this.toggle(this.appendSelector("-heading"), value);
  }
  this.com_unhurdle_spectrum_SideNavItem__heading = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
com.unhurdle.spectrum.SideNavItem.prototype.icon;


com.unhurdle.spectrum.SideNavItem.prototype.get__icon = function() {
  return this.com_unhurdle_spectrum_SideNavItem__icon;
};


com.unhurdle.spectrum.SideNavItem.prototype.set__icon = function(value) {
  if (value && !value != !this.com_unhurdle_spectrum_SideNavItem__icon) {
    var /** @type {string} */ type = value;
    var /** @type {com.unhurdle.spectrum.Icon} */ iconElement = new com.unhurdle.spectrum.Icon(com.unhurdle.spectrum.Icon.getCSSTypeSelector(type));
    iconElement.type = type;
    iconElement.toggle(com.unhurdle.spectrum.includes.SideNavInclude.getSelector() + "-itemIcon", true);
    this.com_unhurdle_spectrum_SideNavItem__textNode.element.insertBefore(iconElement.element, this.com_unhurdle_spectrum_SideNavItem__textNode.element.firstChild);
    this.com_unhurdle_spectrum_SideNavItem__textNode.element.style.width = '100%';
  }
  this.com_unhurdle_spectrum_SideNavItem__icon = value;
};


Object.defineProperties(com.unhurdle.spectrum.SideNavItem.prototype, /** @lends {com.unhurdle.spectrum.SideNavItem.prototype} */ {
/**
 * @type {string}
 */
text: {
get: com.unhurdle.spectrum.SideNavItem.prototype.get__text,
set: com.unhurdle.spectrum.SideNavItem.prototype.set__text},
/**
 * @type {boolean}
 */
disabled: {
get: com.unhurdle.spectrum.SideNavItem.prototype.get__disabled,
set: com.unhurdle.spectrum.SideNavItem.prototype.set__disabled},
/**
 * @type {boolean}
 */
selected: {
get: com.unhurdle.spectrum.SideNavItem.prototype.get__selected,
set: com.unhurdle.spectrum.SideNavItem.prototype.set__selected},
/**
 * @type {boolean}
 */
heading: {
get: com.unhurdle.spectrum.SideNavItem.prototype.get__heading,
set: com.unhurdle.spectrum.SideNavItem.prototype.set__heading},
/**
 * @type {string}
 */
icon: {
get: com.unhurdle.spectrum.SideNavItem.prototype.get__icon,
set: com.unhurdle.spectrum.SideNavItem.prototype.set__icon}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.SideNavItem.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SideNavItem', qName: 'com.unhurdle.spectrum.SideNavItem', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.SideNavItem.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SideNavItem'},
        'disabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SideNavItem'},
        'selected': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SideNavItem'},
        'heading': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SideNavItem'},
        'icon': { type: 'String', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.SideNavItem'}
      };
    },
    methods: function () {
      return {
        'SideNavItem': { type: '', declaredBy: 'com.unhurdle.spectrum.SideNavItem', parameters: function () { return [ 'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.SideNavItem.prototype.ROYALE_COMPILE_FLAGS = 11;