package com.unhurdle.spectrum
{
	COMPILE::JS{
		import org.apache.royale.core.WrappedHTMLElement;
	}

	public class CircleLoader extends SpectrumBase
	{
	/**
	 * <inject_html>
	 * <link rel="stylesheet" href="assets/css/components/circleloader/dist.css">
	 * </inject_html>
	 * 
	 */
		public function CircleLoader()
		{
			super();
		}
		override protected function getSelector():String{
			return "spectrum-CircleLoader";
		}
		
		private var elem:Object;
		// private var fillSubMask1:HTMLDivElement;
		// private var fillSubMask2:HTMLDivElement;
		private var circleImage:ImageAsset;

		COMPILE::JS
		override protected function createElement():WrappedHTMLElement{
			// switch to a gif element
			var elem:WrappedHTMLElement = super.createElement();
			elem.style.display = "inline-flex";
			elem.style.alignItems = "center";
			elem.style.justifyContent = "space-around";			
			circleImage = new ImageAsset();
			// circleImage.src = './assets/loading-image.gif';
			circleImage.src = './assets/Circle Loader.gif';
			circleImage.width = circleImage.height = 42; // Medium by default
			elem.appendChild(circleImage.element);
			return elem;
		}

		private var _max:Number = 100;

		public function get max():Number
		{
			return _max;
		}

		public function set max(value:Number):void
		{
			_max = value;
			// if(_value){
			// 	calculatePosition();
			// }
		}

		private var _min:Number = 0;

		public function get min():Number
		{
			return _min;
		}

		public function set min(value:Number):void
		{
			_min = value;
			// if(_value){
			// 	calculatePosition();
			// }
		}

		private var _value:Number = 0;

		public function get value():Number
		{
			return _value;
		}

		public function set value(value:Number):void
		{
			_value = value;
			// calculatePosition();
		}
		override public function addedToParent():void{
			super.addedToParent();
			// calculatePosition();
		}
		// private function calculatePosition():void {
			// var angle:Number;
			// if(value){
			// 	var total:Number = _max - _min;
			// 	var percent:Number = value / total * 100;
			// } else {
			// 	percent = 0;
			// }
			// if(percent > 0 && percent <= 50) {
			// 	angle = -180 + (percent/50 * 180);
			// 	fillSubMask1.style.transform = 'rotate('+angle+'deg)';
			// 	fillSubMask2.style.transform = 'rotate(-180deg)';
			// }
			// else if (percent > 50) {
			// 	angle = -180 + (percent-50)/50 * 180;
			// 	fillSubMask1.style.transform = 'rotate(0deg)';
			// 	fillSubMask2.style.transform = 'rotate('+angle+'deg)';
			// }
		// }
		private var _indeterminate:Boolean;

		public function get indeterminate():Boolean
		{
			return _indeterminate;
		}

		public function set indeterminate(value:Boolean):void
		{
			// if(!value){
			// 	calculatePosition();
			// } else {
			// 	animationFrame = requestAnimationFrame(repeatOften);
			// }
			// if(value != !!_indeterminate){
			// 	toggle(valueToSelector("indeterminate"),value);
			// }
			_indeterminate = value;
		}
		private var counter:Number = 0;
		private var animationFrame:Number;
		private function repeatOften():void{
			// fill.style.transform = 'translate(' + counter + 'px)';
		
			counter ++ ;
			if(counter > 100){
				counter = 0;
			}
			animationFrame = requestAnimationFrame(repeatOften);
		}

		private var _size:String;

		public function get size():String
		{
			return _size;
		}

		[Inspectable(category="General", enumeration="small,large,normal", defaultValue="normal")]
		public function set size(value:String):void
		{
			if(value != _size){
				switch (value){
				case "small":
					circleImage.width = circleImage.height = 22;
					break;
				case "large":
					circleImage.width = circleImage.height = 80;
					break;
				case "normal":
					circleImage.width = circleImage.height = 42;
					break;
				default:
					throw new Error("Invalid size: " + value);
				}
				var oldSize:String = valueToSelector(_size);
				if(value != "normal"){
					var newSize:String = valueToSelector(value);
					toggle(newSize, true);
				}
				toggle(oldSize, false);
				_size = value;
			}
		}
		private var _overBackground:Boolean;

		public function get overBackground():Boolean
		{
			return overBackground;
		}

		public function set overBackground(value:Boolean):void
		{
			if(value != !!_overBackground){
				toggle(valueToSelector("overBackground"),value);
			}
			_overBackground = value;
		}
	}
}