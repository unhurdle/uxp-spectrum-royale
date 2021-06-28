package com.unhurdle.spectrum
{
  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import com.unhurdle.spectrum.const.IconPrefix;
  import com.unhurdle.spectrum.includes.IconInclude;

  public class Icon extends SpectrumBase implements IAsset
  {
    public function Icon(selector:String="")
    {
      _selector = selector;
      super();
      size = "S";
    }

    public static function getCSSTypeSelector(type:String):String{
      return IconPrefix.SPECTRUM_CSS_ICON + type;
    }
    public static function getUIIconSelector(type:String):String{
      return IconPrefix.SPECTRUM_UI_ICON + type;
    }
    
    override protected function getSelector():String{
      return "";
    }
    override protected function getTag():String{
      return "sp-icon";
    }

    private var _size:String;

    public function get size():String
    {
    	return _size;
    }
    public static function validateSize(value:String):Boolean{
      if(value){
        value = value.toLowerCase();
      }
      switch(value){
        case "xxs":
        case "xs":
        case "s":
        case "m":
        case "l":
        case "xl":
        case "xxl":
          return true;
        default:
          return false;
      }

    }
    [Inspectable(category="General", enumeration="XXS,XS,S,M,L,XL,XXL" defaultValue="S")]
    public function set size(value:String):void
    {
      if(value){
        value = value.toLowerCase();
      }
      if(!value || value == _size){
        return;
      }
      if(!validateSize(value)){
          throw new Error("invalid size: " + value);
      }
      if(_size){
        toggle(valueToSelector("size" + _size),false);
      }
    	_size = value;
      toggle(valueToSelector("size" + value),true);
    }

    private var _type:String;

    public function get type():String
    {
    	return _type;
    }

    public function set type(value:String):void
    {
      if(value != _type){
        if(_type){
          COMPILE::JS{
            element.removeAttribute("name");
          }
        }
        if(value){
          COMPILE::JS{
            element.setAttribute("name","ui:"+value);
          }
        }
      }
    	_type = value;
    }

    private var _selector:String;

    public function get selector():String
    {
    	return _selector;
    }
    
    public function set selector(value:String):void
    {
    	_selector = value;
      useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value);
    }

    override public function set x(value:Number):void{
      super.x = value;
      setAttribute("x",value);
    }
    override public function set y(value:Number):void{
      super.y = value;
      setAttribute("y",value);
    }

    // public function setStyle(attribute:String,value:Object):void{
    //   (element as HTMLElement).style[attribute] = value;
    // }

		// COMPILE::JS
		// override protected function setClassName(value:String):void
		// {
		// 	element.setAttribute('class', value);
		// }
    /**
     * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
     */
    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
			var elem:WrappedHTMLElement = super.createElement();
			return elem;
		}

    private var useElement:SVGUseElement;

  }
}