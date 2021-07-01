package com.unhurdle.spectrum
{
	//TODO
	//* step
	//* onMouseDown
	//* onMouseUp

	COMPILE::JS{}
	import com.unhurdle.spectrum.includes.SliderInclude;
	import org.apache.royale.events.MouseEvent;
	
	[Event(name="change", type="org.apache.royale.events.Event")]

	public class SliderBase extends SpectrumBase
	{
		public function SliderBase()
		{
			super();
		}
		override protected function getSelector():String{
			return "";//SliderInclude.getSliderSelector();
		}
		override public function addedToParent():void{
			super.addedToParent();
			// positionElements();
		}

		// protected function positionElements():void{
		// 	// override in sub-class
		// }

		protected var input:HTMLInputElement;
		protected var labelContainer:HTMLElement;
		protected var controlsContainer:HTMLElement;
		protected var labelNode:TextNode;
		protected var handle:HTMLElement;
		
		protected var valueNode:TextNode;

		private var _disabled:Boolean;

		public function get disabled():Boolean
		{
			return _disabled;
		}

		public function set disabled(value:Boolean):void
		{
			if(value != !!_disabled){
				// toggle("is-disabled",value);
				// enableDisableInput(value);
				COMPILE::JS
				{
					if(value){
						setAttribute("disabled",true);
						element.addEventListener('mousedown', onMouseDown);
					} else {
						removeAttribute("disabled");
						element.removeEventListener('mousedown', onMouseDown);
					}
				}
			}
			_disabled = value;
		}
		// protected function enableDisableInput(value:Boolean):void{
			// override in sub-class
		// }

		public function get step():Number
		{
			return 0;//Number(input.step);
		}

		public function set step(value:Number):void
		{
			//TODO why is this a string?
			// input.step = "" + value;
		}
		
		public function get min():Number
		{
			// return Number(input.min);
			return getAttribute("min");
		}

		public function set min(value:Number):void
		{
			//TODO why is this a string?
			// input.min = "" + value;
			setAttribute("min",value);
		}
		
		public function get max():Number
		{
			// return Number(input.max);
			return getAttribute("max");
		}

		public function set max(value:Number):void
		{
				//TODO why is this a string?
				// input.max = "" + value;
				setAttribute("max",value);
		}

		private var _displayValue:Boolean;

		public function get displayValue():Boolean
		{
			return _displayValue;
		}

		public function set displayValue(value:Boolean):void
		{
			if(value != !!_displayValue){
				_displayValue = value;
				// setLabel();
				if(value){
					removeAttribute("show-value");
				} else {
					setAttribute("show-value",false);
				}
			}
		}
		private var _label:String;

		public function get label():String
		{
			return _label;
		}

		public function set label(value:String):void
		{
			_label = value;
			setLabel();
		}

		private function setLabel():void{
			COMPILE::JS
			{
				if(_label && !labelNode){
					labelNode = new TextNode("sp-label");
					labelNode.setAttribute('slot','label');
					element.appendChild(labelNode.element);
				}
			}
			if(labelNode){
				labelNode.text = _label;
			}
		}
		// protected function getValue():String{
		// 	// override in subclass
		// 	return "";
		// }

		COMPILE::SWF
		protected function onMouseDown():void {}

		// Element interaction
		COMPILE::JS
		protected function onMouseDown(e:MouseEvent):void {
			//TODO
			// if(handle){
			// 	handle.classList.add("is-dragged");
			// }
			// onMouseMove(e);
			// window.addEventListener('mouseup', onMouseUp);
			// window.addEventListener('mousemove', onMouseMove);
		}
		COMPILE::SWF
		protected function onMouseUp():void {}

		COMPILE::JS
		//TODO
		protected function onMouseUp():void {
			// if(handle){
			// 	handle.classList.remove("is-dragged");
			// }
			// window.removeEventListener('mouseup', onMouseUp);
			// window.removeEventListener('mousemove', onMouseMove);
		}

		protected function onMouseMove(e:MouseEvent):void {
			// override in sub-class

		}

	}
}