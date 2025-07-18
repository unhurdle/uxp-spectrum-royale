package com.unhurdle.spectrum{
	import com.unhurdle.spectrum.const.IconType;
	import com.unhurdle.spectrum.data.MenuItem;
	import com.unhurdle.spectrum.includes.InputGroupInclude;
	import com.unhurdle.spectrum.utils.getExplicitZIndex;
	import com.unhurdle.spectrum.utils.getKeyFromKeyCode;

	import org.apache.royale.collections.ICollectionView;
	import org.apache.royale.core.BeadViewBase;
	import org.apache.royale.core.IChild;
	import org.apache.royale.core.IPopUpHost;
	import org.apache.royale.core.IStrand;
	import org.apache.royale.events.Event;
	import org.apache.royale.events.IEventDispatcher;
	import org.apache.royale.events.KeyboardEvent;
	import org.apache.royale.events.MouseEvent;
	import org.apache.royale.events.utils.NavigationKeys;
	import org.apache.royale.events.utils.UIKeys;
	import org.apache.royale.events.utils.WhitespaceKeys;
	import org.apache.royale.geom.Point;
	import org.apache.royale.geom.Rectangle;
	import org.apache.royale.html.beads.IComboBoxView;
	import org.apache.royale.html.util.getLabelFromData;
	import org.apache.royale.utils.DisplayUtils;
	import org.apache.royale.utils.PointUtils;
	import org.apache.royale.utils.UIUtils;
	import org.apache.royale.utils.callLater;
	import org.apache.royale.utils.loadBeadFromValuesManager;
	import org.apache.royale.utils.sendStrandEvent;
	
	/**
	 *  The ComboBoxView class creates the visual elements of the ComboBox component.
	 *  
	 */
	public class ComboBoxView extends BeadViewBase implements IComboBoxView
	{
		public function ComboBoxView()
		{
			super();
		}
		private function appendSelector(value:String):String{
			return InputGroupInclude.getSelector() + value;
		}
		private var textfield:TextField;
		
		/**
		 *  The TextInput component of the ComboBox.
		 * 
		 *  @copy org.apache.royale.html.beads.IComboBoxView#text
		 *
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion Royale 0.0
		 */
		public function get textInputField():TextField
		{
			return textfield;
		}
		
		private var button:FieldButton;
		
		/**
		 *  The FieldButton component of the ComboBox.
		 * 
		 *  @copy org.apache.royale.html.beads.IComboBoxView#text
		 *
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion Royale 0.0
		 */
		public function get popupButton():FieldButton
		{
			return button;
		}
		
		private var list:Menu;
		private var _popup:ComboBoxList;
		
		/**
		 *  The pop-up list component of the ComboBox.
		 * 
		 *  @copy org.apache.royale.html.beads.IComboBoxView#text
		 *
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion Royale 0.0
		 */
		public function get popUp():Menu
		{
			return list;
		}
		
		private var comboHost:ComboBox;
		private var model:IComboBoxModel;
		private var _currentText:String;
		/**
		 * @private
		 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
		 * @royaleignorecoercion org.apache.royale.core.UIBase
		 */
		override public function set strand(value:IStrand):void
		{
			super.strand = value;
			
			comboHost = value as ComboBox;
			var text:String = comboHost.text;
			textfield = new TextField();
			textfield.tabFocusable = false;
			textfield.className = appendSelector("-textfield") + " spectrum-Textfield";
			textfield.inputClass = appendSelector('-input');
			COMPILE::JS
			{
                textfield.focusElement.addEventListener('focus',function():void{
					comboHost.toggle("is-focused",true);
				});

                textfield.focusElement.addEventListener('blur', function():void{
					comboHost.toggle("is-focused",false);
				});
			}
			textfield.addEventListener(KeyboardEvent.KEY_UP,inputHandler);
			textfield.addEventListener(KeyboardEvent.KEY_DOWN,handleKeyDown);
			if(text){
				updateText(text);
			}

			button = new FieldButton();
			button.className = appendSelector("-button");
			var type:String = IconType.CHEVRON_DOWN_MEDIUM;
			button.icon = type;//Icon.getCSSTypeSelector(type);
			button.iconType = type;
			button.iconClass = appendSelector("-icon");
			button.style = {"max-width":"32px"};

			// if (isNaN(host.width)) input.width = 100;
			
			// COMPILE::JS 
			// {
				// inner components are absolutely positioned so we want to make sure the host is the offset parent
				// if (!host.element.style.position)
				// {
				// 	host.element.style.position = "relative";
				// }
			// }
            model = comboHost.model as IComboBoxModel;
			
			_popup = loadBeadFromValuesManager(ComboBoxList,"iPopUp",_strand) as ComboBoxList;
			_popup.autoFocusList = false;
			_popup.position = "bottom";
			list = _popup.list;
			// list.dataProvider = model.dataProvider;
			// _popup.style = {
			// 	"position": "absolute",
			// 	"top": "100%",
			// 	"left": "0",
			// 	"width": "100%"
			// };

			comboHost.addElement(textfield as IChild);
			comboHost.addElement(button as IChild);
			// host.addElement(_popup);
			list.model.addEventListener("selectedIndexChanged", handleItemChange);
			list.model.addEventListener("selectedItemChanged", handleItemChange);
			model.addEventListener("selectedIndexChanged", handleItemChange);
			model.addEventListener("selectedItemChanged", handleItemChange);
			model.addEventListener("dataProviderChanged", dataProviderChangeHandler);
			model.addEventListener("placeholderChange",handlePlaceholderChange);
			model.addEventListener("patternChange",handlePatternChange);
			model.addEventListener("requiredChange",handleRequiredChange);
			model.addEventListener("disabledChange",handleDisabledChange);
			model.addEventListener("quietChange",handleQuietChange);
			model.addEventListener("invalidChange",handleInvalidChange);
			model.addEventListener("focusChange",focusChangeHandler);
			(_strand as IEventDispatcher).addEventListener("sizeChanged",handleSizeChange);
			
			// set initial value and positions using default sizes
			handlePlaceholderChange(null);
			handlePatternChange(null);
			handleRequiredChange(null);
			handleDisabledChange(null);
			handleQuietChange(null);
			handleInvalidChange(null);

			itemChangeAction();
			// sizeChangeAction();
		}
		private function handleKeyDown(event:*):void
		{
			if(!event.key){
				event.key = getKeyFromKeyCode(event.keyCode);
			}
			if(popUpVisible){
				// forward relevent keys to the list
				switch(event.key){
					case WhitespaceKeys.ENTER:
					case NavigationKeys.DOWN:
					case NavigationKeys.UP:
					case UIKeys.ESCAPE:
						COMPILE::JS
						{
							var newEvent:KeyboardEvent = new KeyboardEvent(
								event.type,
								event.key,
								event.code,
								event.shiftKey,
								event.altKey,
								event.ctrlKey,
								event.metaKey,
								false);
							list.focusParent.dispatchEvent(newEvent);
						}
						break;
				}
			} else {
				if(event.key == WhitespaceKeys.ENTER){
					if (checkLimitToList()){
						sendStrandEvent(_strand,"change");
					}

				} else if(event.key == NavigationKeys.DOWN){
					openPopup();
				}

			}
            // prevent default behavior for these keys to keep the cursor position from changing
			if(event.key == NavigationKeys.UP || event.key == NavigationKeys.DOWN){
				event.preventDefault();
				event.stopImmediatePropagation();
			}
		}
		private function updateText(value:String):void {
			textfield.text = _currentText = value;
		}

		private function inputHandler(ev:KeyboardEvent):void{
			if (textfield.text == _currentText || ev.key == NavigationKeys.DOWN || ev.key == NavigationKeys.UP) {
				// if the text hasn't changed or the up/down arrow key is pressed, ignore
				// this event.  The down arrow key is handled in the handleKeyDown function.
				return;
			}
			_currentText = textfield.text;
			var dataProvider:Object = model.dataProvider;
			if(textfield.text && model.dataProvider){
				dataProvider = comboHost.filterFunction(textfield.text,model.dataProvider);
			}
			list.dataProvider = dataProvider;
			var selectedIndex:int = -1;
			var text:String = textfield.text.toLowerCase();
			// find the selected index in the unfiltered list
			for (var i:int = 0; i < model.dataProvider.length; i++) {
				var item:MenuItem = model.dataProvider[i] as MenuItem;
				var label:String = item.label ? item.label.toLowerCase() : "";
				if (label == text) {
					selectedIndex = i;
					break;
				}
			}
			model.selectedIndex = selectedIndex;
			// if(dataProvider && model.selectedItem && dataProvider.indexOf(model.selectedItem) == -1){
			// 	model.selectedItem = null;
			// }
			// show the popup while typing
			var storedIsListEmpty:Boolean = isListEmpty;
			if(!popUpVisible && !storedIsListEmpty){
				popUpVisible = true;
			} else if (storedIsListEmpty)
			{
				popUpVisible = false;
			}
			list.selectedItem = model.selectedItem;
		}
		/**
		 *  Returns whether or not the pop-up is visible.
		 * 
		 *  @copy org.apache.royale.html.beads.IComboBoxView#text
		 *
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion Royale 0.0
		 */
		public function get popUpVisible():Boolean
		{
			return _popup.open;
		}
		/**
		 * @royaleignorecoercion org.apache.royale.core.IComboBoxModel
		 * @royaleignorecoercion org.apache.royale.core.IUIBase
		 */
		public function set popUpVisible(value:Boolean):void
		{
			if(value){
				var origin:Point = new Point(0, comboHost.height - 6);
				var relocated:Point = PointUtils.localToGlobal(origin,comboHost);
				_popup.x = relocated.x
				_popup.y = relocated.y;
                _popup.width = comboHost.popupWidth > 0 ? comboHost.popupWidth : comboHost.width;
				list.selectedIndex = -1;
				var popupHost:IPopUpHost = UIUtils.findPopUpHost(comboHost);
				callLater(openPopup);
			} else {
				closePopup();
			}
			// _popup.open = value;
		}
		private var indexSet:Boolean = false;
		private function openPopup():void{
			if(_popup.open){
				return;
			}
			list.dataProvider = model.dataProvider;
			if(list.dataProvider){				if(!indexSet){
					var zIndex:Number = getExplicitZIndex(comboHost);
					if(zIndex > 2){
						_popup.setStyle("z-index",zIndex);
					}
					indexSet = true;
				}
				_popup.addEventListener(MouseEvent.MOUSE_DOWN, handleControlMouseDown);
				comboHost.addEventListener(MouseEvent.MOUSE_DOWN, handleControlMouseDown);
                comboHost.topMostEventDispatcher.addEventListener(MouseEvent.MOUSE_DOWN, handleTopMostEventDispatcherMouseDown);				_popup.open = true;
                positionPopup();
			}
			//TODO how to handle keyboard and mouse focus?
			textfield.focus();
		}
		private function positionPopup():void{
			var componentBounds:Rectangle = DisplayUtils.getScreenBoundingRect(comboHost);
			_popup.positionPopup(componentBounds,comboHost.width);
		}

		protected function handleControlMouseDown(event:MouseEvent):void
		{			
			event.stopImmediatePropagation();
		}
		
		protected function handleTopMostEventDispatcherMouseDown(event:MouseEvent):void
		{
			closePopup();
		}

		private function closePopup():void{
			if(_popup){
				_popup.removeEventListener(MouseEvent.MOUSE_DOWN, handleControlMouseDown);
				comboHost.removeEventListener(MouseEvent.MOUSE_DOWN, handleControlMouseDown);
				comboHost.topMostEventDispatcher.removeEventListener(MouseEvent.MOUSE_DOWN, handleTopMostEventDispatcherMouseDown);
				_popup.open = false;
			}
			textfield.focus();
		}
		/**
		 * @private
		 */
		protected function handleSizeChange(event:Event):void
		{
			// sizeChangeAction();
		}
		private var respondToItemChange:Boolean = true;
		/**
		 * @private
		 */
		protected function handleItemChange(event:Event):void
		{
			if(!respondToItemChange){
				return;
			}
			// If the model and the list are synced up, it's not a real change
			if(model.selectedItem == list.selectedItem){
				return;
			}
			respondToItemChange = false;
			if(event.target == list.model){
				model.selectedItem = list.selectedItem;
			} else {
				list.selectedItem = model.selectedItem;
			}
			itemChangeAction();
			respondToItemChange = true;
			textfield.focus();
		}
		protected function dataProviderChangeHandler(event:Event):void{
			list.dataProvider = model.dataProvider;
		}
		protected function get isListEmpty():Boolean{
			var itemsLength:int = -1;
			if (list.dataProvider is Array){
				itemsLength = (list.dataProvider as Array).length;
			} else if (list.dataProvider is ICollectionView){
				itemsLength = (list.dataProvider as ICollectionView).length;
			}
			return itemsLength == 0;
		}
		protected function handlePlaceholderChange(event:Event):void{
			textfield.placeholder = model.placeholder;
		}
		protected function handlePatternChange(event:Event):void{
			textfield.pattern = model.pattern;
		}
		protected function handleRequiredChange(event:Event):void{
			textfield.required = model.required;
		}
		protected function handleDisabledChange(event:Event):void{
			button.disabled = textfield.disabled = model.disabled;
		}
		protected function handleQuietChange(event:Event):void{
			button.quiet = textfield.quiet = model.quiet;
			comboHost.toggle(InputGroupInclude.getSelector()+ "--quiet",model.quiet);
		}
		protected function handleInvalidChange(event:Event):void{
			button.invalid = textfield.invalid = model.invalid;
			comboHost.toggle("is-invalid",model.invalid);
		}

		private function checkLimitToList():Boolean{
			if(!model.limitToList || !textfield || !textfield.text){
				return true;
			}
			var exist:Boolean = false;
			for each(var item:MenuItem in model.dataProvider){
				if(item.text && item.text.toLowerCase() == textfield.text.toLowerCase()){
					exist = true;
					updateText(item.text);
					break;
				}
			}
			if(!exist){
				updateText("");
				return false
			}
			return true;
		}

		private function focusChangeHandler(event:Event):void{
			comboHost.toggle("is-keyboardFocused",model.keyboardFocused);
			comboHost.toggle("is-focused",model.focused);
			if(!model.focused){
				checkLimitToList();
			}
		}
		/**
		 * @private
		 * @royaleignorecoercion org.apache.royale.core.IComboBoxModel
		 */
		protected function itemChangeAction():void
		{
			if(model.selectedItem != list.selectedItem){
				list.selectedItem = model.selectedItem;
			}
			var item:Object = model.selectedItem;
			var text:String = getLabelFromData(list,item);
			if(text){
				updateText(text);
			}
		}
		
		/**
		 * @private
		 * @royaleignorecoercion org.apache.royale.core.UIBase
		 */
		// protected function sizeChangeAction():void
		// {
		// 	var host:ComboBox = _strand as ComboBox;
			
		// 	input.x = 0;
		// 	input.y = 0;
		// 	if (host.isWidthSizedToContent()) {
		// 		input.width = 100;
		// 	} else {
		// 		input.width = host.width - 20;
		// 	}
			
		// 	button.x = input.width;
		// 	button.y = 0;
		// 	button.width = 20;
		// 	button.height = input.height;
			
		// 	COMPILE::JS {
		// 		input.element.style.position = "absolute";
		// 		button.element.style.position = "absolute";
		// 	}
				
		// 	if (host.isHeightSizedToContent()) {
		// 		host.height = input.height;
		// 	}
		// 	if (host.isWidthSizedToContent()) {
		// 		host.width = input.width + button.width;
		// 	}
		// }
	}
}

/**
<h4>Default</h4>
<div class="spectrum-InputGroup">
  <input type="text" placeholder="Type here" name="field" value="" class="spectrum-Textfield spectrum-InputGroup-field">
  <button class="spectrum-FieldButton spectrum-InputGroup-button" aria-haspopup="true">
    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-InputGroup-icon" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
    </svg>
  </button>
</div>

Properties:
placeholder
public var pattern:String;
public var required:Boolean;
public var disabled:Boolean;

When open, the button is selected...

<h4>Open</h4>
<div class="spectrum-InputGroup is-open">
  <input type="text" placeholder="Type here" name="field" value="" class="spectrum-Textfield spectrum-InputGroup-field">
  <button class="spectrum-FieldButton spectrum-InputGroup-button is-selected" aria-haspopup="true">
    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-InputGroup-icon" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
    </svg>
  </button>
  <div class="spectrum-Popover spectrum-Popover--bottom is-open" style="position: absolute; top: 100%; left: 0; width: 100%">
    <ul class="spectrum-Menu" role="listbox">
      <li class="spectrum-Menu-item is-selected" role="option" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Ballard</span>
      </li>
      <li class="spectrum-Menu-item" role="option" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Fremont</span>
      </li>
      <li class="spectrum-Menu-item" role="option" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Greenwood</span>
      </li>
      <li class="spectrum-Menu-divider" role="separator"></li>
      <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">
        <span class="spectrum-Menu-itemLabel">United States of America</span>
      </li>
    </ul>
  </div>
</div>

<div class="dummy-spacing"></div>

<h4>Disabled</h4>
<div class="spectrum-InputGroup is-disabled">
  <input type="text" placeholder="Type here" name="field" value="" class="spectrum-Textfield spectrum-InputGroup-field" disabled>
  <button class="spectrum-FieldButton spectrum-InputGroup-button" aria-haspopup="true" disabled>
    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-InputGroup-icon" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
    </svg>
  </button>
</div>

<h4>Invalid</h4>
<div class="spectrum-InputGroup is-invalid">
  <input type="text" placeholder="Type here" name="field" value="" class="spectrum-Textfield spectrum-InputGroup-field is-invalid">
  <button class="spectrum-FieldButton spectrum-InputGroup-button is-invalid" aria-haspopup="true">
    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-InputGroup-icon" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
    </svg>
  </button>
</div>
 */