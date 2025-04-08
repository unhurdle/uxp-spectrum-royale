package com.unhurdle.spectrum
{
	COMPILE::JS
	{
		import org.apache.royale.core.WrappedHTMLElement;
	}
	import org.apache.royale.html.elements.Div;

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
			_div.style = {"display" : "inline-block","white-space": "pre-line"};
			setDivStyle();
			_textarea.addEventListener("blur",handleBlur);
			elem.appendChild(_textarea);
			_textarea.style.display = "none";
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