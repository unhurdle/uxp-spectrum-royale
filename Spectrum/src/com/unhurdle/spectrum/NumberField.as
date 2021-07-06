package com.unhurdle.spectrum
{
  //TODO min, max, value, step
  import org.apache.royale.html.elements.Span;
  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }

  public class NumberField extends TextField
  {
    public function NumberField()
    {
      super();
      setAttribute('type','number');
      // input.step = "1";
      // _input.addEventListener("input",handleInput);
    }

    private var _value:Number;

    public function get value():Number{
      //TODO
    	return 1;//Number(input.value);
    }

    public function set value(value:Number):void{
      //TODO
    	// input.value = ""+value;
    }
     public function get min():Number{
       //TODO
      return 1;//Number(input.min);
    }

    public function set min(value:Number):void{
      // TODO
      // input.min = ""+value;
    }
    public function get max():Number{
      // TODO
      return 1;//Number(input.max);
    }

    public function set max(value:Number):void{
      // TODO
      // input.max = "" + value;
    }
     public function get step():Number{
       // TODO
      return 1;//Number(input.step);
    }

    public function set step(value:Number):void{
      // TODO
      // input.step = "" + value;
    }

    private var _suffix:String;
    /**
     * A suffix is some text attached to the value such as px or %
     */
    public function get suffix():String{
    	return _suffix;
    }
    public function set suffix(value:String):void{
    	_suffix = value;
    }
    private function handleInput(ev:Event):void{
      COMPILE::JS
      {
        if(suffix && !isNaN(value)){
          requestAnimationFrame(positionSuffix);
        } else if(suffixSpan){
          suffixSpan.visible = false;
        }
      }
    }
    COMPILE::JS
    private var suffixSpan:Span;
    COMPILE::JS
    private function positionSuffix():void{
      if(!suffixSpan){
        suffixSpan = new Span();
        var style:CSSStyleDeclaration = suffixSpan.element.style;
        style.pointerEvents = "none";
				style.position = "absolute";
        style.userSelect = "none";
        style.webkitUserSelect = "none";
        style.MsUserSelect = "none";
        style.whiteSpace = "pre-wrap";
        style.lineHeight = 1;
        suffixSpan.y = quiet ? 7 : 8;
        element.appendChild(suffixSpan.element);
      }
      suffixSpan.text = suffix;
      //TODO
      // var computed:CSSStyleDeclaration = getComputedStyle(_input);
      // var fontString:String = computed.fontStyle + " " + computed.fontWeight + " " + computed.fontSize + " " + computed.fontFamily;
      // var width:Number = getTextWidth(this.text,fontString);
      // trace(width);
			// var paddingVal:Number;
      // if(quiet){
			// 	paddingVal = 0;
      // } else{

      //   var paddingStr:Object = computed.direction == "ltr" ? computed.paddingLeft : computed.paddingRight;
      //   paddingVal = parseFloat(paddingStr) + 1;// It's probably the border which requires an extra pixel
      // }
      // trace(computed.direction);
      // trace(computed.paddingLeft);
      suffixSpan.visible = true;
      // suffixSpan.x = width + paddingVal;
    }
    COMPILE::JS
    private static var canvas:HTMLCanvasElement;
    COMPILE::JS
    private static function getTextWidth(text:String, font:String):Number{
      // re-use canvas object for better performance
      if(!canvas){
        canvas = newElement('canvas') as HTMLCanvasElement;
      }
      var context:CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
      context.font = font;
      var metrics:TextMetrics = context.measureText(text);
      return metrics.width;
    }
  }
}