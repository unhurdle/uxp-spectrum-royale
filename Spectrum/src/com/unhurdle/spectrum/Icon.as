package com.unhurdle.spectrum
{
  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import com.unhurdle.spectrum.includes.IconInclude;
  import com.unhurdle.spectrum.const.IconPrefix;
  import com.unhurdle.spectrum.utils.svgLookup;

  public class Icon extends Group implements IAsset
  {
    public function Icon(selector:String = "")
    {
      _selector = selector;
      super();
      size = "S";
    }

    override protected function getSelector():String{
      return IconInclude.getSelector();
    }

    public static function getCSSTypeSelector(type:String):String{
      return IconPrefix.SPECTRUM_CSS_ICON + type;
    }
    public static function getUIIconSelector(type:String):String{
      return IconPrefix.SPECTRUM_UI_ICON + type;
    }

    private var _size:String;

    public function get size():String
    {
    	return _size;
    }
    public static function validateSize(value:String):Boolean{
      switch(value){
        case "XXS":
        case "XS":
        case "S":
        case "M":
        case "L":
        case "XL":
        case "XXL":
          return true;
        default:
          return false;
      }

    }
    [Inspectable(category="General", enumeration="XXS,XS,S,M,L,XL,XXL" defaultValue="S")]
    public function set size(value:String):void
    {
      if(!value || value == _size){
        return;
      }
      if(!validateSize(value)){
          throw new Error("invalid size: " + value);
      }
      if(_size){
        toggle(valueToSelector("size" + _size),false);
        // removeAttribute("size"+_size);
      }
    	_size = value;
      //TODO
      toggle(valueToSelector("size" + value),true);
      // setAttribute("size"+_size,true);
    }

    private var _type:String;

    public function get type():String
    {
    	return _type;
    }

    public function set type(value:String):void
    {
      // if(value != _type){
      //   if(_type){
      //     toggle(IconPrefix.SPECTRUM_UI_ICON + _type,false);
      //   }
      //   if(value){
      //     toggle(IconPrefix.SPECTRUM_UI_ICON + value,true);
      //   }
      // }
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
      createIcon();
      // useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value);
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

		COMPILE::JS
		override protected function setClassName(value:String):void
		{
			element.setAttribute('class', value);
		}
    /**
     * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
     */
    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
      var elem:WrappedHTMLElement = super.createElement();
      elem.className = "icon";
      elem.setAttribute('slot','icon');
      if(selector){
        createIcon();
      }
      return elem;
    }
    private var svgElem:SVGElement;
    private function createIcon():void
    {
      var svg:SVGElement = document.getElementById(selector.substring(1)) as SVGElement;
      if(!svg){
        return;
      }
      if(svgElem){
        COMPILE::JS{
          element.removeChild(svgElem);
        }
      }
      svgElem = newIconSVG("");
      svgElem.className = IconInclude.getSelector();
      svgElem.setAttribute("viewBox",svg.getAttribute("viewBox"));
      for(var i:int=0;i<svg.children.length;i++){
        svgElem.appendChild(svg.children[i].cloneNode(true));
      }
      COMPILE::JS{
        element.appendChild(svgElem);
        var path:String = svgLookup.getSvg(_selector);
        if(path) { svgElem.innerHTML = path }
      }
    }

    // private var useElement:SVGUseElement;
  }
}