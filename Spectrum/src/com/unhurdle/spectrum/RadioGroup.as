package com.unhurdle.spectrum
{
	COMPILE::JS{
		import org.apache.royale.core.WrappedHTMLElement;
	}
	public class RadioGroup extends Group
	{
		public function RadioGroup()
		{
			super();
		}
		override protected function getTag():String{
			return "sp-radio-group";
		}
		COMPILE::JS
		override protected function createElement():WrappedHTMLElement{
			var elem:WrappedHTMLElement = super.createElement();
			return elem;
		}
		private var _selected:String;
		public function get selected():String
		{
			return _selected;
		}
		public function set selected(value:String):void
		{
			if(value != _selected){
				//doesn't work
				setAttribute('selected',value);
			}
			_selected = value;
		}
		private var _radioName:String;
		public function get radioName():String
		{
			return _radioName;
		}
		public function set radioName(value:String):void
		{
			if(value != _radioName){
				setAttribute('name',value);
			}
			_radioName = value;
		}
		public var vertical:Boolean;
	}
}