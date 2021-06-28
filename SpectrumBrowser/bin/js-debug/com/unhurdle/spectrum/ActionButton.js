/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/ActionButton.as
 * com.unhurdle.spectrum.ActionButton
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.ActionButton');
/* Royale Dependency List: com.unhurdle.spectrum.ComboBoxList,com.unhurdle.spectrum.ISpectrumElement,com.unhurdle.spectrum.Icon,com.unhurdle.spectrum.Menu,com.unhurdle.spectrum.const.IconType,org.apache.royale.events.Event,org.apache.royale.events.MouseEvent,org.apache.royale.geom.Point,org.apache.royale.utils.PointUtils,org.apache.royale.utils.Timer,org.apache.royale.utils.callLater,org.apache.royale.utils.Language*/

goog.require('com.unhurdle.spectrum.Button');
goog.require('com.unhurdle.spectrum.interfaces.IKeyboardNavigateable');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.Button}
 * @implements {com.unhurdle.spectrum.interfaces.IKeyboardNavigateable}
 */
com.unhurdle.spectrum.ActionButton = function() {
  com.unhurdle.spectrum.ActionButton.base(this, 'constructor');
  this.toggle(this.valueToSelector("primary"), false);
  this.addEventListener('click', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionButton_elementClickedForMenu, this, 'com_unhurdle_spectrum_ActionButton_elementClickedForMenu'), true);
  this.addEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionButton_handleMouseDown, this, 'com_unhurdle_spectrum_ActionButton_handleMouseDown'));
};
goog.inherits(com.unhurdle.spectrum.ActionButton, com.unhurdle.spectrum.Button);


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ActionButton.prototype.getSelector = function() {
  return "";
};


/**
 * @protected
 * @override
 */
com.unhurdle.spectrum.ActionButton.prototype.getTag = function() {
  return "sp-action-button";
};


/**
 * @protected
 * @type {com.unhurdle.spectrum.Icon}
 */
com.unhurdle.spectrum.ActionButton.prototype.flyOutIconHolder = null;


/**
 * @protected
 */
com.unhurdle.spectrum.ActionButton.prototype.createFlyoutIcon = function() {
  if (!this.flyOutIconHolder) {
    var /** @type {string} */ type = com.unhurdle.spectrum.const.IconType.CORNER_TRIANGLE;
    this.flyOutIconHolder = new com.unhurdle.spectrum.Icon(com.unhurdle.spectrum.Icon.getCSSTypeSelector(type));
    this.flyOutIconHolder.type = type;
    this.flyOutIconHolder.className = this.appendSelector("-hold");
    this.addElement(this.flyOutIconHolder);
    this.com_unhurdle_spectrum_ActionButton_timer = new org.apache.royale.utils.Timer(1000, 1);
    this.com_unhurdle_spectrum_ActionButton_timer.addEventListener(org.apache.royale.utils.Timer.TIMER, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionButton_onTimer, this, 'com_unhurdle_spectrum_ActionButton_onTimer'));
  }
};


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton__selectable = false;


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton__emphasized = false;


/**
 * @override
 */
com.unhurdle.spectrum.ActionButton.prototype.addedToParent = function() {
  com.unhurdle.spectrum.ActionButton.superClass_.addedToParent.apply(this);
  if (this.selectable) {
    this.addEventListener('click', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionButton_elementClicked, this, 'com_unhurdle_spectrum_ActionButton_elementClicked'));
  }
  this.addEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionButton_elementMouseDown, this, 'com_unhurdle_spectrum_ActionButton_elementMouseDown'));
  if (this.dataProvider) {
    this.createFlyoutIcon();
  }
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton_elementClicked = function(ev) {
  this.selected = !this.selected;
  this.dispatchEvent(new org.apache.royale.events.Event("selectionChanged"));
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton_elementClickedForMenu = function(ev) {
  if (this.popover && this.popover.open) {
    ev.stopImmediatePropagation();
  }
};


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton_elementMouseDown = function(ev) {
  this.closePopup();
};


/**
 * @private
 * @type {number}
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton__selectedIndex = 0;


/**
 * @private
 * @type {Object}
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton__selectedItem = null;


/**
 * @private
 * @type {number}
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton__keyboardFocusedIndex = 0;


/**
 * @private
 * @type {Object}
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton__dataProvider = null;


/**
 * @private
 * @param {*} ev
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton_handleMouseDown = function(ev) {
  if (!this.dataProvider || !this.dataProvider["length"]) {
    return;
  }
  window.addEventListener('mouseup', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionButton_handleMouseUp, this, 'com_unhurdle_spectrum_ActionButton_handleMouseUp'));
  if (this.com_unhurdle_spectrum_ActionButton_timer) {
    this.com_unhurdle_spectrum_ActionButton_timer.start();
  }
};


/**
 * @private
 * @param {*} ev
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton_handleMouseUp = function(ev) {
  window.removeEventListener('mouseup', org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionButton_handleMouseUp, this, 'com_unhurdle_spectrum_ActionButton_handleMouseUp'));
  if (this.com_unhurdle_spectrum_ActionButton_timer) {
    this.com_unhurdle_spectrum_ActionButton_timer.reset();
  }
};


/**
 * @private
 * @type {org.apache.royale.utils.Timer}
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton_timer = null;


/**
 * @private
 * @param {*} ev
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton_onTimer = function(ev) {
  this.com_unhurdle_spectrum_ActionButton_timer.reset();
  this.showMenu();
};


/**
 */
com.unhurdle.spectrum.ActionButton.prototype.createPopover = function() {
  this.popover = new com.unhurdle.spectrum.ComboBoxList();
  this.menu = this.popover.list;
  this.menu.dataProvider = this.dataProvider;
  this.menu.addEventListener("change", org.apache.royale.utils.Language.closure(this.com_unhurdle_spectrum_ActionButton_handleMenuChange, this, 'com_unhurdle_spectrum_ActionButton_handleMenuChange'));
};


/**
 * @type {boolean}
 */
com.unhurdle.spectrum.ActionButton.prototype.showEmptyMenu = false;


/**
 */
com.unhurdle.spectrum.ActionButton.prototype.showMenu = function() {
  var self = this;
  if (!this.showEmptyMenu && (!this.dataProvider || !this.dataProvider["length"])) {
    return;
  }
  if (!this.popover) {
    this.createPopover();
  }
  this.dispatchEvent(new org.apache.royale.events.Event("beforeShow"));
  this.popover.x = this.popover.y = 0;
  this.popover.open = true;
  this.popover.list.focus();
  requestAnimationFrame(org.apache.royale.utils.Language.closure(this.positionPopup, this, 'positionPopup'));
  this.popover.addEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(this.handleControlMouseDown, this, 'handleControlMouseDown'));
  this.addEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(this.handleControlMouseDown, this, 'handleControlMouseDown'));
  org.apache.royale.utils.callLater(function() {
    self.popover.topMostEventDispatcher.addEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(self.handleTopMostEventDispatcherMouseDown, self, 'handleTopMostEventDispatcherMouseDown'));
  });
};


/**
 * @protected
 */
com.unhurdle.spectrum.ActionButton.prototype.positionPopup = function() {
  var /** @type {org.apache.royale.geom.Point} */ origin = new org.apache.royale.geom.Point(this.width, this.height);
  var /** @type {org.apache.royale.geom.Point} */ relocated = org.apache.royale.utils.PointUtils.localToGlobal(origin, this);
  this.popover.x = relocated.x;
  this.popover.y = relocated.y;
};


/**
 * @type {com.unhurdle.spectrum.Menu}
 */
com.unhurdle.spectrum.ActionButton.prototype.menu = null;


/**
 * @type {com.unhurdle.spectrum.ComboBoxList}
 */
com.unhurdle.spectrum.ActionButton.prototype.popover = null;


/**
 * @private
 * @param {org.apache.royale.events.Event} ev
 */
com.unhurdle.spectrum.ActionButton.prototype.com_unhurdle_spectrum_ActionButton_handleMenuChange = function(ev) {
  this.closePopup();
  this.dispatchEvent(new org.apache.royale.events.Event("change"));
};


/**
 * @protected
 * @param {org.apache.royale.events.MouseEvent} event
 */
com.unhurdle.spectrum.ActionButton.prototype.handleControlMouseDown = function(event) {
  event.stopImmediatePropagation();
};


/**
 * @protected
 * @param {org.apache.royale.events.MouseEvent} event
 */
com.unhurdle.spectrum.ActionButton.prototype.handleTopMostEventDispatcherMouseDown = function(event) {
  this.closePopup();
};


/**
 * @protected
 */
com.unhurdle.spectrum.ActionButton.prototype.closePopup = function() {
  if (this.popover && this.popover.open) {
    this.popover.removeEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(this.handleControlMouseDown, this, 'handleControlMouseDown'));
    this.removeEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(this.handleControlMouseDown, this, 'handleControlMouseDown'));
    this.popover.topMostEventDispatcher.removeEventListener(org.apache.royale.events.MouseEvent.MOUSE_DOWN, org.apache.royale.utils.Language.closure(this.handleTopMostEventDispatcherMouseDown, this, 'handleTopMostEventDispatcherMouseDown'));
    this.popover.open = false;
    this.popover.list.blur();
  }
};


com.unhurdle.spectrum.ActionButton.prototype.set__flavor = function(value) {
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ActionButton.prototype.selectable;


com.unhurdle.spectrum.ActionButton.prototype.get__selectable = function() {
  return this.com_unhurdle_spectrum_ActionButton__selectable;
};


com.unhurdle.spectrum.ActionButton.prototype.set__selectable = function(value) {
  this.com_unhurdle_spectrum_ActionButton__selectable = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.ActionButton.prototype.emphasized;


com.unhurdle.spectrum.ActionButton.prototype.get__emphasized = function() {
  return this.com_unhurdle_spectrum_ActionButton__emphasized;
};


com.unhurdle.spectrum.ActionButton.prototype.set__emphasized = function(value) {
  if (this.com_unhurdle_spectrum_ActionButton__emphasized != value) {
    this.toggle(this.valueToSelector("emphasized"), value);
  }
  this.com_unhurdle_spectrum_ActionButton__emphasized = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
com.unhurdle.spectrum.ActionButton.prototype.selectedIndex;


com.unhurdle.spectrum.ActionButton.prototype.get__selectedIndex = function() {
  if (this.menu) {
    return this.menu.selectedIndex;
  }
  return this.com_unhurdle_spectrum_ActionButton__selectedIndex;
};


com.unhurdle.spectrum.ActionButton.prototype.set__selectedIndex = function(value) {
  if (this.menu) {
    this.menu.selectedIndex = value;
  }
  this.com_unhurdle_spectrum_ActionButton__selectedIndex = value;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
com.unhurdle.spectrum.ActionButton.prototype.selectedItem;


com.unhurdle.spectrum.ActionButton.prototype.get__selectedItem = function() {
  if (this.menu) {
    return this.menu.selectedItem;
  }
  if (this.com_unhurdle_spectrum_ActionButton__selectedIndex >= 0 && this.dataProvider && this.com_unhurdle_spectrum_ActionButton__selectedIndex < this.dataProvider["length"]) {
    if (org.apache.royale.utils.Language.is(this.dataProvider, Array)) {
      return this.dataProvider[this.com_unhurdle_spectrum_ActionButton__selectedIndex];
    }
    return this.dataProvider["source"][this.com_unhurdle_spectrum_ActionButton__selectedIndex];
  }
  return null;
};


com.unhurdle.spectrum.ActionButton.prototype.set__selectedItem = function(value) {
  if (this.menu) {
    this.menu.selectedItem = value;
  }
  if (org.apache.royale.utils.Language.is(this.dataProvider, Array)) {
    this.com_unhurdle_spectrum_ActionButton__selectedIndex = (this.dataProvider.indexOf(value)) >> 0;
  }
  if (this.dataProvider.hasOwnProperty("source")) {
    this.com_unhurdle_spectrum_ActionButton__selectedIndex = (this.dataProvider["source"]["indexOf"](value)) >> 0;
  }
  this.com_unhurdle_spectrum_ActionButton__selectedIndex = -1;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
com.unhurdle.spectrum.ActionButton.prototype.dataProvider;


com.unhurdle.spectrum.ActionButton.prototype.get__dataProvider = function() {
  return this.com_unhurdle_spectrum_ActionButton__dataProvider;
};


com.unhurdle.spectrum.ActionButton.prototype.set__dataProvider = function(value) {
  this.com_unhurdle_spectrum_ActionButton__dataProvider = value;
  this.createFlyoutIcon();
  if (this.menu) {
    this.menu.dataProvider = value;
  }
};


/**
 * @nocollapse
 * @export
 * @type {com.unhurdle.spectrum.ISpectrumElement}
 */
com.unhurdle.spectrum.ActionButton.prototype.focusParent;


com.unhurdle.spectrum.ActionButton.prototype.get__focusParent = function() {
  return this.popover.list;
};


Object.defineProperties(com.unhurdle.spectrum.ActionButton.prototype, /** @lends {com.unhurdle.spectrum.ActionButton.prototype} */ {
/**
 * @type {string}
 */
flavor: {
get: com.unhurdle.spectrum.Button.prototype.get__flavor,
set: com.unhurdle.spectrum.ActionButton.prototype.set__flavor},
/**
 * @type {boolean}
 */
selectable: {
get: com.unhurdle.spectrum.ActionButton.prototype.get__selectable,
set: com.unhurdle.spectrum.ActionButton.prototype.set__selectable},
/**
 * @type {boolean}
 */
emphasized: {
get: com.unhurdle.spectrum.ActionButton.prototype.get__emphasized,
set: com.unhurdle.spectrum.ActionButton.prototype.set__emphasized},
/**
 * @type {number}
 */
selectedIndex: {
get: com.unhurdle.spectrum.ActionButton.prototype.get__selectedIndex,
set: com.unhurdle.spectrum.ActionButton.prototype.set__selectedIndex},
/**
 * @type {Object}
 */
selectedItem: {
get: com.unhurdle.spectrum.ActionButton.prototype.get__selectedItem,
set: com.unhurdle.spectrum.ActionButton.prototype.set__selectedItem},
/**
 * @type {Object}
 */
dataProvider: {
get: com.unhurdle.spectrum.ActionButton.prototype.get__dataProvider,
set: com.unhurdle.spectrum.ActionButton.prototype.set__dataProvider},
/**
 * @type {com.unhurdle.spectrum.ISpectrumElement}
 */
focusParent: {
get: com.unhurdle.spectrum.ActionButton.prototype.get__focusParent}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.ActionButton.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ActionButton', qName: 'com.unhurdle.spectrum.ActionButton', kind: 'class' }], interfaces: [com.unhurdle.spectrum.interfaces.IKeyboardNavigateable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.ActionButton.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'showEmptyMenu': { type: 'Boolean', get_set: function (/** com.unhurdle.spectrum.ActionButton */ inst, /** * */ v) {return v !== undefined ? inst.showEmptyMenu = v : inst.showEmptyMenu;}},
        'menu': { type: 'com.unhurdle.spectrum.Menu', get_set: function (/** com.unhurdle.spectrum.ActionButton */ inst, /** * */ v) {return v !== undefined ? inst.menu = v : inst.menu;}},
        'popover': { type: 'com.unhurdle.spectrum.ComboBoxList', get_set: function (/** com.unhurdle.spectrum.ActionButton */ inst, /** * */ v) {return v !== undefined ? inst.popover = v : inst.popover;}}
      };
    },
    accessors: function () {
      return {
        'flavor': { type: 'String', access: 'writeonly', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'selectable': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'emphasized': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'focusParent': { type: 'com.unhurdle.spectrum.ISpectrumElement', access: 'readonly', declaredBy: 'com.unhurdle.spectrum.ActionButton'}
      };
    },
    methods: function () {
      return {
        'ActionButton': { type: '', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'addedToParent': { type: 'void', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'createPopover': { type: 'void', declaredBy: 'com.unhurdle.spectrum.ActionButton'},
        'showMenu': { type: 'void', declaredBy: 'com.unhurdle.spectrum.ActionButton'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.ActionButton.prototype.ROYALE_COMPILE_FLAGS = 11;