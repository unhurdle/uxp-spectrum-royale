/**
 * Generated by Apache Royale Compiler from view/panes/PaginationButtonStylePane.mxml
 * view.panes.PaginationButtonStylePane
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('view.panes.PaginationButtonStylePane');
/* Royale Dependency List: view.components.Variant,com.unhurdle.spectrum.SplitButtonPagination,view.components.Markup,view.components.StyledCode*/

goog.require('view.DemoPane');



/**
 * @constructor
 * @extends {view.DemoPane}
 */
view.panes.PaginationButtonStylePane = function() {
  view.panes.PaginationButtonStylePane.base(this, 'constructor');
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_1;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.SplitButtonPagination}
   */
  this.$ID_12_0;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_3;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_2;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_5;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.SplitButtonPagination}
   */
  this.$ID_12_4;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_7;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_6;
  
  /**
   * @private
   * @type {view.components.Variant}
   */
  this.$ID_12_9;
  
  /**
   * @private
   * @type {com.unhurdle.spectrum.SplitButtonPagination}
   */
  this.$ID_12_8;
  
  /**
   * @private
   * @type {view.components.Markup}
   */
  this.$ID_12_11;
  
  /**
   * @private
   * @type {view.components.StyledCode}
   */
  this.$ID_12_10;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;

  this.generateMXMLAttributes([
    1,
    'title',
    true,
    'Pagination - Button Style',
    0,
    0
  ]);
  
};
goog.inherits(view.panes.PaginationButtonStylePane, view.DemoPane);




Object.defineProperties(view.panes.PaginationButtonStylePane.prototype, /** @lends {view.panes.PaginationButtonStylePane.prototype} */ {
  'MXMLDescriptor': {
    /** @this {view.panes.PaginationButtonStylePane} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = view.panes.PaginationButtonStylePane.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var data = [
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_1',
          'header',
          true,
          'CTA',
          0,
          0,
          [
            com.unhurdle.spectrum.SplitButtonPagination,
            4,
            '_id',
            true,
            '$ID_12_0',
            'type',
            true,
            'cta',
            'pagesNum',
            true,
            7,
            'selectedPage',
            true,
            2,
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_3',
          0,
          0,
          [
            view.components.StyledCode,
            2,
            '_id',
            true,
            '$ID_12_2',
            'text',
            true,
            '<sp:SplitButtonPagination type="cta" pagesNum="7" selectedPage="2"/>',
            0,
            0,
            null
          ],
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_5',
          'header',
          true,
          'Primary',
          0,
          0,
          [
            com.unhurdle.spectrum.SplitButtonPagination,
            4,
            '_id',
            true,
            '$ID_12_4',
            'type',
            true,
            'primary',
            'pagesNum',
            true,
            15,
            'selectedPage',
            true,
            2,
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_7',
          0,
          0,
          [
            view.components.StyledCode,
            2,
            '_id',
            true,
            '$ID_12_6',
            'text',
            true,
            '<sp:SplitButtonPagination type="primary" pagesNum="15" selectedPage="2"/>',
            0,
            0,
            null
          ],
          view.components.Variant,
          2,
          '_id',
          true,
          '$ID_12_9',
          'header',
          true,
          'Secondary',
          0,
          0,
          [
            com.unhurdle.spectrum.SplitButtonPagination,
            4,
            '_id',
            true,
            '$ID_12_8',
            'type',
            true,
            'secondary',
            'pagesNum',
            true,
            13,
            'selectedPage',
            true,
            2,
            0,
            0,
            null
          ],
          view.components.Markup,
          1,
          '_id',
          true,
          '$ID_12_11',
          0,
          0,
          [
            view.components.StyledCode,
            2,
            '_id',
            true,
            '$ID_12_10',
            'text',
            true,
            '<sp:SplitButtonPagination type="secondary" pagesNum="13" selectedPage="2"/>',
            0,
            0,
            null
          ]
        ];
        if (arr)
          this.mxmldd = arr.concat(data);
        else
          this.mxmldd = data;
      }
      return this.mxmldd;
    }
  }
});
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
view.panes.PaginationButtonStylePane.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PaginationButtonStylePane', qName: 'view.panes.PaginationButtonStylePane', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
view.panes.PaginationButtonStylePane.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'PaginationButtonStylePane': { type: '', declaredBy: 'view.panes.PaginationButtonStylePane'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
view.panes.PaginationButtonStylePane.prototype.ROYALE_COMPILE_FLAGS = 9;