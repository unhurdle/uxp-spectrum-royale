package com.unhurdle.spectrum
{
	COMPILE::JS{
		import org.apache.royale.core.WrappedHTMLElement;
	}

    public class Radio extends SpectrumBase implements ITextContent
	{
	/**
	 * <inject_html>
	 * <link rel="stylesheet" href="assets/css/components/radio/dist.css">
	 * </inject_html>
	 * 
	 */
		public function Radio()
		{
			super();
		}
		override protected function getTag():String{
      return "sp-radio";
    }

		COMPILE::JS
		override protected function createElement():WrappedHTMLElement{
			var elem:WrappedHTMLElement = super.createElement();
			setAttribute("emphasized","");
			return elem;
		}
		private var _value:String;

		public function get value():String
		{
			return _value;
		}

		public function set value(val:String):void
		{
			if(_value != val){
				setAttribute('value',val);
			}
			_value = val;
		}
		private var _checked:Boolean;

		public function get checked():Boolean
		{
			return _checked;
		}

		public function set checked(value:Boolean):void
		{
			if(value != !!_checked){
				if(value){
					setAttribute('checked',true);
				} else {
					removeAttribute('checked');
				}
			}
			_checked = value;
		}
		private var _labelBelow:Boolean;

		public function get labelBelow():Boolean
		{
			return _labelBelow;
		}

		public function set labelBelow(value:Boolean):void
		{
			if(value != !!_labelBelow){
				//TODO
				// toggle(valueToSelector("labelBelow"),value);
			}
			_labelBelow = value;
		}

		private var _disabled:Boolean;

		public function get disabled():Boolean
		{
			return _disabled;
		}

		public function set disabled(value:Boolean):void
		{
			if(value != !!_disabled){
				if(value){
					setAttribute('disabled',true);
				} else {
					removeAttribute('disabled');
				}
			}
			_disabled = value;
		}
		private var _invalid:Boolean;
		public function get invalid():Boolean
		{
			return _invalid;
		}
		public function set invalid(value:Boolean):void
		{
			if(value != !!_invalid){
				if(value){
					setAttribute('invalid',true);
				} else {
					removeAttribute('invalid');
				}
			}
			_invalid = value;
		}
		private var _text:String;
		public function get text():String
		{
			return _text;
		}

		public function set text(value:String):void
		{
			_text = value;
			COMPILE::JS{
				element.innerHTML = text;
			}
		}

		private var _quiet:Boolean;
		public function get quiet():Boolean
		{
			return _quiet;
		}

		public function set quiet(value:Boolean):void
		{
				//TODO
				// toggle(valueToSelector("quiet"),value);
			if(value != !!_quiet){
				if(value){
					removeAttribute("emphasized");
				}else{
					setAttribute("emphasized","");
				}
			}
			_quiet = value
		}

		// <sp-radio-group selected="first" name="example">
    //         <sp-radio value="first">Option 1</sp-radio>
    //         <sp-radio value="second">Option 2</sp-radio>
    //         <sp-radio value="third">Option 3</sp-radio>
    //         <sp-radio value="fourth">Option 4</sp-radio>
    //     </sp-radio-group>
    //     <sp-detail>STATES</sp-detail>
    //     <sp-radio-group name="example2">
    //       <sp-radio checked>Checked radio button</sp-radio>
    //       <sp-radio invalid>Invalid radio button</sp-radio>
    //       <sp-radio disabled>Disabled radio button</sp-radio>
    //     <sp-radio-group>
	}
}