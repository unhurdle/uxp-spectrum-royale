package com.unhurdle.spectrum
{
	COMPILE::JS
	{
		import org.apache.royale.core.WrappedHTMLElement;
	}


	public class TextArea extends TextFieldBase
	{
		public function TextArea()
		{
			super();
			toggle(valueToSelector("multiline"),true);
			textarea.addEventListener("input",checkValidation);
		}
		override protected function getTag():String{
			return "sp-textarea";
		}

		private var textarea:HTMLTextAreaElement;

			
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
		
		public function get placeholder():String
		{
			return getAttribute("placeholder");
		}

		public function set placeholder(value:String):void
		{
			//set the content in the textArea
			setAttribute("placeholder",value);
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

		COMPILE::JS
		override protected function createElement():WrappedHTMLElement{
			var elem:WrappedHTMLElement = super.createElement();
			textarea = elem as HTMLTextAreaElement;
			return elem;
		}
	}
}