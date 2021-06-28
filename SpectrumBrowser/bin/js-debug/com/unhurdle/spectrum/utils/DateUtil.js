/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/utils/DateUtil.as
 * com.unhurdle.spectrum.utils.DateUtil
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.utils.DateUtil');
/* Royale Dependency List: */



/**
 * @constructor
 */
com.unhurdle.spectrum.utils.DateUtil = function() {
};


/**
 * @nocollapse
 * @return {Array}
 */
com.unhurdle.spectrum.utils.DateUtil.getShortWeekdays = function() {
  var /** @type {Object} */ options = {"weekday":'short'};
  return com.unhurdle.spectrum.utils.DateUtil.getWeekdays(options);
};


/**
 * @nocollapse
 * @return {Array}
 */
com.unhurdle.spectrum.utils.DateUtil.getLongWeekdays = function() {
  var /** @type {Object} */ options = {"weekday":'long'};
  return com.unhurdle.spectrum.utils.DateUtil.getWeekdays(options);
};


/**
 * @nocollapse
 * @return {Array}
 */
com.unhurdle.spectrum.utils.DateUtil.getNarrowWeekdays = function() {
  var /** @type {Object} */ options = {"weekday":'narrow'};
  return com.unhurdle.spectrum.utils.DateUtil.getWeekdays(options);
};


/**
 * @private
 * @param {Object} options
 * @return {Array}
 */
com.unhurdle.spectrum.utils.DateUtil.getWeekdays = function(options) {
  var /** @type {Array} */ weekdays = [];
  var /** @type {Date} */ d = new Date("1/1/2017");
  while (d.getDate() <= 7) {
    weekdays.push(new Intl.DateTimeFormat('en-US', options).format(d));
    d.setDate(d.getDate() + 1);
  }
  return weekdays;
};


/**
 * @nocollapse
 * @return {Array}
 */
com.unhurdle.spectrum.utils.DateUtil.getMonths = function() {
  var /** @type {Array} */ months = [];
  var /** @type {Object} */ options = {"month":'long'};
  var /** @type {Date} */ d = new Date("1/1/2017");
  while (d.getFullYear() == 2017) {
    months.push(new Intl.DateTimeFormat('en-US', options).format(d));
    d.setMonth(d.getMonth() + 1);
  }
  return months;
};


/**
 * @nocollapse
 * @param {Date} date
 * @return {string}
 */
com.unhurdle.spectrum.utils.DateUtil.getDateString = function(date) {
  var /** @type {Object} */ options = {"weekday":'long', "year":'numeric', "month":'long', "day":'numeric'};
  return new Intl.DateTimeFormat('en-US', options).format(date);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.utils.DateUtil.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DateUtil', qName: 'com.unhurdle.spectrum.utils.DateUtil', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.utils.DateUtil.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        '|getShortWeekdays': { type: 'Array', declaredBy: 'com.unhurdle.spectrum.utils.DateUtil'},
        '|getLongWeekdays': { type: 'Array', declaredBy: 'com.unhurdle.spectrum.utils.DateUtil'},
        '|getNarrowWeekdays': { type: 'Array', declaredBy: 'com.unhurdle.spectrum.utils.DateUtil'},
        '|getMonths': { type: 'Array', declaredBy: 'com.unhurdle.spectrum.utils.DateUtil'},
        '|getDateString': { type: 'String', declaredBy: 'com.unhurdle.spectrum.utils.DateUtil', parameters: function () { return [ 'Date', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.utils.DateUtil.prototype.ROYALE_COMPILE_FLAGS = 11;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
com.unhurdle.spectrum.utils.DateUtil.prototype.ROYALE_INITIAL_STATICS = Object.keys(com.unhurdle.spectrum.utils.DateUtil);