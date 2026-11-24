package com.unhurdle.spectrum
{
	COMPILE::JS
	{
		import org.apache.royale.core.WrappedHTMLElement;
	}
	import org.apache.royale.html.elements.Div;
	import com.unhurdle.spectrum.const.IconType;

	public class TextArea extends TextFieldBase
	{
		public function TextArea()
		{
			super();
			// textarea.setAttribute("multiline","");
			textarea.addEventListener("input",checkValidation);
		}
		// override protected function getTag():String{
		// 	return "sp-textarea";
		// }

			
		private var _readonly:Boolean;
		public function get readonly():Boolean
		{
			_readonly = textarea.hasAttribute("readonly");
			return _readonly;
		}

		public function set readonly(value:Boolean):void
		{
			if(value != _readonly){
				if(value){
				textarea.setAttribute("readonly","");
				} else {
				textarea.removeAttribute("readonly");
				}
				_readonly = value;
			}
		}
		
		private var _placeholder:String;

		public function get placeholder():String
		{
			return _placeholder;
		}

		public function set placeholder(value:String):void
		{
			_placeholder = value;
			if(value){
				_textarea.setAttribute("placeholder",value);
				_div.text = value;
			} else {
				_textarea.removeAttribute("placeholder");
				_div.text = "";
			}
			setDivPlaceholder();
		}
		private function setDivPlaceholder():void{
			if(text){
				COMPILE::JS{
					_div.element.style.fontStyle = "normal";
					_div.element.style.opacity = "1";
				}
				return;
			}
			COMPILE::JS{
				_div.element.style.fontStyle = "italic";
				_div.element.style.opacity = "0.7";//this doesn't work! (UXP)
			}

		}
		// private var _multiline:Boolean;
		// public function get multiline():Boolean
		// {
		//     return _multiline;
		// }
		// public function set multiline(value:Boolean):void
		// {
		//     if(value != !!_multiline){
		//         toggle(valueToSelector("multiline"),value);
		//     }
		//     _multiline = value;
		// }

		// COMPILE::SWF
		// override public function get name():String
		// {
		// 	return super.name;
		// }
		// COMPILE::SWF
		// override public function set name(value:String):void
		// {
		// 	super.name = value;
		// }

		COMPILE::JS
		public function get name():String
		{
			return textarea.name;
		}
		
		COMPILE::JS
		public function set name(value:String):void
		{
			textarea.name = value;
		}

        override public function get text():String
		{
			return textarea.value;
		}
		
        override public function set text(value:String):void
		{
			textarea.value = value;
			div.text = value || _placeholder || "";
			setDivPlaceholder();
			checkValidation();
		}
		private var _maxLength:Number = Number.MAX_VALUE;

		public function get maxLength():Number
		{
			return _maxLength;
		}
		
		public function set maxLength(value:Number):void
		{
			_maxLength = value;
			if(text){
				checkValidation();
			}
		}
		private var _minLength:Number = Number.MIN_VALUE;

		public function get minLength():Number
		{
			return _minLength;
		}
		
		public function set minLength(value:Number):void
		{
			_minLength = value;
			if(text){
				checkValidation();
			}
		}

		//name???
		//lang?????

		override public function get disabled():Boolean
		{
			return super.disabled;
		}
		override public function set disabled(value:Boolean):void
		{
			if(value != !!super.disabled){
				textarea.disabled = value;
			}
			super.disabled = value;
		}

		private var _required:Boolean;

		public function get required():Boolean
		{
			return _required;
		}
		
		public function set required(value:Boolean):void
		{
			if(value != !!_required){
				textarea.required = value;
			}
			_required = value;
		}

		public var showValidIcon:Boolean = true;
		public var showInvalidIcon:Boolean = true;
		private var validIcon:Icon;
		private var invalidIcon:Icon;
		override public function get valid():Boolean
		{
			return super.valid;
		}

		override public function set valid(value:Boolean):void
		{
			super.valid = value;
			if (!showValidIcon){
				return;
			}
			if(value){
				if(!validIcon){
					var type:String = IconType.CHECKMARK_MEDIUM;
					validIcon = new Icon(Icon.getCSSTypeSelector(type));
					validIcon.className = appendSelector("-validationIcon");
					validIcon.setStyle("right","-3px");
					validIcon.setStyle("top","7px");
					validIcon.setStyle('position','absolute');
					validIcon.setStyle("color","green");
				}
				COMPILE::JS{
					element.style.border = "0px";
				}
				//if icon doesn't exist
				if(getElementIndex(validIcon) == -1){
					addElement(validIcon);
				}
				if(invalidTooltip){
					invalidTooltip.toolTip = '';
				}
			} else{
				if(validIcon && getElementIndex(validIcon) != -1){
					removeElement(validIcon);
				}
			}
		}

		override public function get invalid():Boolean
		{
			return super.invalid;
		}
		private var _invalidText:String;

		public function get invalidText():String
		{
			return _invalidText;
		}

		public function set invalidText(value:String):void
		{
			_invalidText = value;
			applyInvalidToolTip();
		}

		private var _invalidAutoClose:Number = 0;
		public function get invalidAutoClose():Number
		{
			return _invalidAutoClose;
		}

		public function set invalidAutoClose(value:Number):void
		{
			_invalidAutoClose = value;
			if(invalidTooltip) {
				invalidTooltip.autoClose = value;
			}
		}

		protected var invalidTooltip:AdaptiveTooltipBead;
		override public function set invalid(value:Boolean):void
		{
			super.invalid = value;
			if (!showInvalidIcon){
				return;
			}
			if(value){
				if(!invalidIcon){
					var type:String = IconType.ALERT_MEDIUM;
					invalidIcon = new Icon(Icon.getCSSTypeSelector(type));
					invalidIcon.className = appendSelector("-validationIcon");
					COMPILE::JS{
						invalidIcon.setSvgViewBox("0 0 24 24");
					}
					invalidIcon.setStyle("right","12px");
					invalidIcon.setStyle("top","7px");
					invalidIcon.setStyle('position','absolute');
					invalidIcon.setStyle("color","red");
				}
				COMPILE::JS{
					element.style.border = "1px solid red";
				}
				if(getElementIndex(invalidIcon) == -1){
					addElement(invalidIcon);
				}
				applyInvalidToolTip();
			} else{
				COMPILE::JS{
					element.style.border = "0px";
				}
				if(invalidIcon && getElementIndex(invalidIcon) != -1){
					removeElement(invalidIcon);
				}
				if(invalidTooltip){
					invalidTooltip.toolTip = '';
				}
			}
		}
		
		public function applyInvalidToolTip():void {
			if (!invalidIcon) {
				return;
			}
			if (invalidTooltip) {
				invalidTooltip.toolTip = invalidText;
				return;
			}
			if (!invalidText || !invalidIcon) {
				return;
			}
			invalidTooltip = new AdaptiveTooltipBead();
			invalidTooltip.flavor = "negative";
			invalidIcon.addBead(invalidTooltip);
			invalidIcon.setStyle("pointer-events","auto");
			invalidTooltip.autoClose = invalidAutoClose;
			invalidTooltip.toolTip = invalidText;
		}
		
		private function checkValidation():void
		{
			if(maxLength != Number.MAX_VALUE || minLength != Number.MIN_VALUE){
				var len:Number = textarea.value.length;
				if(len <= maxLength && len >= minLength){
					valid = true;
				} else{
					invalid = true;
				}
			}
		}
		override public function get focusElement():HTMLElement{
			return textarea;
		}
		protected var _textarea:HTMLTextAreaElement;

		public function get textarea():HTMLTextAreaElement
		{
			return _textarea;
		}
		protected var _div:Div;
		public function get div():Div
		{
			return _div;
		}

		// COMPILE::JS
		// override protected function createElement():WrappedHTMLElement{
		// 	var elem:WrappedHTMLElement = super.createElement();
		// 	textarea = elem as HTMLTextAreaElement;
		// 	return elem;
		// }
		 COMPILE::JS
		override protected function createElement():WrappedHTMLElement{
			var elem:WrappedHTMLElement = super.createElement();
			className = "spectrum-Textfield--multiline spectrum-Textfield";
			_div = new Div();
			_div.addEventListener("click",handleClick);
			elem.appendChild(_div.element);
			_textarea = newElement("sp-textarea") as HTMLTextAreaElement;
			_div.className = "spectrum-Textfield-input";
			_div.style = {"display" : "inline-block","white-space": "pre-line","overflow-x": "hidden"};
			setDivStyle();
			_textarea.addEventListener("blur",handleBlur);
			elem.appendChild(_textarea);
			_textarea.style.display = "none";
			_textarea.style.width = "100%";
			_textarea.style.height = "100%";
			return elem;
		}
		COMPILE::JS
		private function handleClick(ev:Event):void{
			_textarea.style.display = "inline-block";
			_textarea.focus();
			_div.element.style.display = "none";
		}
		COMPILE::JS
		private function handleBlur(ev:Event):void{
			_div.text = _textarea.value || _placeholder || "";
			setDivPlaceholder();
			_div.element.style.display = "inline-block";
			_textarea.style.display = "none";
			_div.width = _textarea.offsetWidth;
			_div.height = _textarea.offsetHeight;
		}
		private function setDivStyle():void{
			COMPILE::JS{
				div.element.style.fontSize = "13px";
				div.element.style.paddingTop = "5px";
				div.element.style.paddingLeft = "12px";
			}
		}
	}
}