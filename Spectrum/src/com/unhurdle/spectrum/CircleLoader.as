package com.unhurdle.spectrum
{
	COMPILE::JS{
		import org.apache.royale.core.WrappedHTMLElement;
	}
	public class CircleLoader extends SpectrumBase
	{
		public function CircleLoader()
		{
			super();
			drawCircleLoader();
		}
		COMPILE::JS
		override protected function createElement():WrappedHTMLElement{
			var elem:WrappedHTMLElement = super.createElement();
			return elem;
		}
		private var actualSize:Number = 42;
		private var strokeWidth:Number = 4;
		private var stopAnimate:Boolean;
		private function drawCircleLoader():void {
			var trackColor:String = '#ccc';
			var fillColor:String  = '#00f';
			var speed:Number = 120;

			// SVG namespace helper
			var SVG_NS:String = 'http://www.w3.org/2000/svg';
			var svg:* = document.createElementNS(SVG_NS, 'svg');
			svg.setAttribute('width', actualSize);
			svg.setAttribute('height', actualSize);
			svg.setAttribute('viewBox', "0 0 " + actualSize + " " + actualSize);
			COMPILE::JS{
				element.innerHTML = '';
				element.appendChild(svg);
			}

			var cx:Number = actualSize / 2;
			var cy:Number = actualSize / 2;
			var r :Number = (actualSize - strokeWidth) / 2;

			// Helper: full-circle track path
			// M (cx-r, cy) a r,r 0 1,0 (2r),0 a r,r 0 1,0 (-2r),0
			var track:* = document.createElementNS(SVG_NS, 'path');
			track.setAttribute('d',
				"M " + (cx - r) + " " + cy +
				" a " + r + " " + r + " 0 1 0 " + (2 * r) + " 0" +
				" a " + r + " " + r + " 0 1 0 " + (-2 * r) + " 0"
			);
			track.setAttribute('fill', 'none');
			track.setAttribute('stroke', trackColor);
			track.setAttribute('stroke-width', strokeWidth);
			svg.appendChild(track);

			// Quarter-circle fill (animated)
			var fill:* = document.createElementNS(SVG_NS, 'path');
			fill.setAttribute('fill', 'none');
			fill.setAttribute('stroke', fillColor);
			fill.setAttribute('stroke-width', strokeWidth);
			fill.setAttribute('stroke-linecap', 'round');
			svg.appendChild(fill);

			// Animation loop
			var lastTime:Number;
			function animate(time:*):void {
				if(stopAnimate){
					stopAnimate = false;
					return;
				}
				if (isNaN(lastTime)) lastTime = time;
				var delta:* = time - lastTime;
				lastTime = time;

				// Compute cumulative rotation angle (degrees)
				var angle:Number = ((time * speed) / 1000) % 360;

				// Start/end angles, offset so 0° is at 12 o'clock
				var startDeg:Number = angle - 90;
				var endDeg  :Number = startDeg + 90;

				function toRad(d:Number):Number {
					return (d * Math.PI) / 180;
				}
				var x1:Number = cx + r * Math.cos(toRad(startDeg));
				var y1:Number = cy + r * Math.sin(toRad(startDeg));
				var x2:Number = cx + r * Math.cos(toRad(endDeg));
				var y2:Number = cy + r * Math.sin(toRad(endDeg));

				// Build raw arc path: small-arc, sweep-flag=1 (clockwise)
				fill.setAttribute('d',
				"M " + x1.toFixed(3) + " " + y1.toFixed(3) +
				" A " + r + " " + r + " 0 0 1 " + x2.toFixed(3) + " " + y2.toFixed(3)
				);
				requestAnimationFrame(animate);
			}
			requestAnimationFrame(animate);
		}

		private var _max:Number = 100;
		public function get max():Number{
			return _max;
		}
		public function set max(value:Number):void{
			_max = value;
		}

		private var _min:Number = 0;
		public function get min():Number{
			return _min;
		}
		public function set min(value:Number):void{
			_min = value;
		}

		private var _value:Number = 0;
		public function get value():Number{
			return _value;
		}
		public function set value(value:Number):void{
			_value = value;
		}

		private var _indeterminate:Boolean;
		public function get indeterminate():Boolean{
			return _indeterminate;
		}
		public function set indeterminate(value:Boolean):void{
			_indeterminate = value;
		}

		private var _size:String;
		public function get size():String{
			return _size;
		}
		[Inspectable(category="General", enumeration="small,large,normal", defaultValue="normal")]
		public function set size(value:String):void{
			if(value != _size){
				switch (value){
				case "small":
					strokeWidth = 2;
					actualSize = 18;
					// setStyle('padding-left','calc(50% - 64px)');
					// setStyle('padding-top','calc(50% - 64px)');
					break;
				case "large":
					// setStyle('padding-left','calc(50% - 40px)');
					// setStyle('padding-top','calc(50% - 40px)');
					strokeWidth = 4;
					actualSize = 80;
					break;
				case "normal":
					setStyle('padding-left','calc(50% - 40px)');
					setStyle('padding-top','calc(50% - 40px)');
					strokeWidth = 4;
					actualSize = 42;
					break;
				default:
					throw new Error("Invalid size: " + value);
				}
				stopAnimate = true;
				drawCircleLoader();
				// var oldSize:String = valueToSelector(_size);
				// if(value != "normal"){
				// 	var newSize:String = valueToSelector(value);
				// 	toggle(newSize, true);
				// }
				// toggle(oldSize, false);
				_size = value;
			}
		}

		private var _overBackground:Boolean;
		public function get overBackground():Boolean{
			return overBackground;
		}
		public function set overBackground(value:Boolean):void{
			// if(value != !!_overBackground){
			// 	toggle(valueToSelector("overBackground"),value);
			// }
			_overBackground = value;
		}
	}
}
