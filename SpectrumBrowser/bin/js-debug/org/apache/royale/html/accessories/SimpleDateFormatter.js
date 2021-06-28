/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/accessories/SimpleDateFormatter.as
 * org.apache.royale.html.accessories.SimpleDateFormatter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.accessories.SimpleDateFormatter');
/* Royale Dependency List: org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.FormatBase');
goog.require('org.apache.royale.core.IDateFormatter');



/**
 * constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.core.FormatBase}
 * @implements {org.apache.royale.core.IDateFormatter}
 */
org.apache.royale.html.accessories.SimpleDateFormatter = function() {
  org.apache.royale.html.accessories.SimpleDateFormatter.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.accessories.SimpleDateFormatter, org.apache.royale.core.FormatBase);


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.accessories.SimpleDateFormatter.prototype.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat;


/**
 * @protected
 * @type {string}
 */
org.apache.royale.html.accessories.SimpleDateFormatter.prototype._separator;


/**
 *  The formatted date
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.6
 *  @royaleignorecoercion Date
 * @override
 */
org.apache.royale.html.accessories.SimpleDateFormatter.prototype.format = function(value) {
  var /** @type {Date} */ selectedDate = value;
  var /** @type {string} */ result = "";
  if (selectedDate != null) {
    var /** @type {string} */ month = String(selectedDate.getMonth() + 1);
    var /** @type {string} */ day = String(selectedDate.getDate());
    var /** @type {string} */ year = String(selectedDate.getFullYear());
    var /** @type {Array} */ tokens = this.dateFormat.split(this._separator);
    var /** @type {number} */ length = (tokens.length) >> 0;
    for (var /** @type {number} */ i = 0; i < length; i++) {
      switch (tokens[i]) {
        case "YYYY":
          result += year;
          break;
        case "YY":
          result += year.slice(2, 3);
          break;
        case "MM":
          if (Number(month) < 10)
            month = "0" + month;
        case "M":
          result += month;
          break;
        case "DD":
          if (Number(day) < 10)
            day = "0" + day;
        case "D":
          result += day;
          break;
      }
      if (i <= length - 2) {
        result += this._separator;
      }
    }
  }
  return result;
};


/**
 *  Returns a Date created from a date string
 *  
 *  @asparam str, the date formated string. Some examples of valid formats are MM/DD/YYYY, DD/MM/YYYY
 *  @asreturn the date object generated from the string or null
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.6
 * @param {string} str
 * @return {Date}
 */
org.apache.royale.html.accessories.SimpleDateFormatter.prototype.getDateFromString = function(str) {
  var /** @type {number} */ month = 0;
  var /** @type {number} */ day = 0;
  var /** @type {number} */ year = 0;
  if (str != null) {
    //var /** @type {number} */ month = 0;
    //var /** @type {number} */ day = 0;
    //var /** @type {number} */ year = 0;
    var /** @type {Array} */ tokens = this.dateFormat.split(this._separator);
    var /** @type {Array} */ strtokens = str.split(this._separator);
    var /** @type {number} */ length = (tokens.length) >> 0;
    for (var /** @type {number} */ i = 0; i < length; i++) {
      switch (tokens[i]) {
        case "YYYY":
          year = org.apache.royale.utils.Language._int(strtokens[i]);
          break;
        case "YY":
          year = (2000 + org.apache.royale.utils.Language._int(strtokens[i])) >> 0;
          break;
        case "MM" || "M":
          month = (org.apache.royale.utils.Language._int(strtokens[i]) - 1) >> 0;
          break;
        case "DD" || "D":
          day = org.apache.royale.utils.Language._int(strtokens[i]);
          break;
      }
    }
    return new Date(year, month, day);
  }
  return null;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.accessories.SimpleDateFormatter.prototype.dateFormat;


org.apache.royale.html.accessories.SimpleDateFormatter.prototype.get__dateFormat = function() {
  if (this.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat == null) {
    this.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat = "YYYY/MM/DD";
    this._separator = "/";
  }
  return this.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat;
};


org.apache.royale.html.accessories.SimpleDateFormatter.prototype.set__dateFormat = function(value) {
  if (this.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat != value) {
    this.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat = value;
    var /** @type {number} */ length = (this.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat.length) >> 0;
    for (var /** @type {number} */ i = 0; i < length; i++) {
      var /** @type {string} */ letter = this.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat.charAt(i);
      if (letter != 'M' && letter != 'Y' && letter != 'D') {
        this._separator = letter;
        break;
      }
    }
    this.org_apache_royale_html_accessories_SimpleDateFormatter__dateFormat = value;
  }
};


Object.defineProperties(org.apache.royale.html.accessories.SimpleDateFormatter.prototype, /** @lends {org.apache.royale.html.accessories.SimpleDateFormatter.prototype} */ {
/**
 * @type {string}
 */
dateFormat: {
get: org.apache.royale.html.accessories.SimpleDateFormatter.prototype.get__dateFormat,
set: org.apache.royale.html.accessories.SimpleDateFormatter.prototype.set__dateFormat}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.accessories.SimpleDateFormatter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SimpleDateFormatter', qName: 'org.apache.royale.html.accessories.SimpleDateFormatter', kind: 'class' }], interfaces: [org.apache.royale.core.IDateFormatter] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.accessories.SimpleDateFormatter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'dateFormat': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.accessories.SimpleDateFormatter'}
      };
    },
    methods: function () {
      return {
        'SimpleDateFormatter': { type: '', declaredBy: 'org.apache.royale.html.accessories.SimpleDateFormatter'},
        'format': { type: 'String', declaredBy: 'org.apache.royale.html.accessories.SimpleDateFormatter', parameters: function () { return [ 'Object', false ]; }},
        'getDateFromString': { type: 'Date', declaredBy: 'org.apache.royale.html.accessories.SimpleDateFormatter', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.accessories.SimpleDateFormatter.prototype.ROYALE_COMPILE_FLAGS = 10;