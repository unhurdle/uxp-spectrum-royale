package com.unhurdle.spectrum
{
  COMPILE::JS
  {
		import org.apache.royale.core.WrappedHTMLElement;
		import org.apache.royale.html.util.addElementToWrapper;
  }

  public class UiIcon extends Icon 
  {
    public function UiIcon(type:String)
    {
      super(type);
			this.type = type;
    }

    override protected function getSelector():String{
      return "";
    }
    override protected function getTag():String{
      return "sp-icon";
    }

    private var _size:String;

    override public function get size():String
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
    override public function set size(value:String):void
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
      // if(_size){
      //   toggle(valueToSelector("size" + _size),false);
      // }
    	_size = value;
			setAttribute("size",value);
      // toggle(valueToSelector("size" + value),true);
    }

    private var _type:String;

    override public function get type():String
    {
    	return _type;
    }

    override public function set type(value:String):void
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

    override public function set x(value:Number):void{
      super.x = value;
      setAttribute("x",value);
    }
    override public function set y(value:Number):void{
      super.y = value;
      setAttribute("y",value);
    }

    /**
     * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
     */
    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
			var elem:WrappedHTMLElement = addElementToWrapper(this,getTag());
			return elem;
		}

    private var useElement:SVGUseElement;

    // <div slot="icon" class="icon">
    //  <svg id="spectrum-icon-18-Edit" viewBox="0 0 36 36">
    //    <path
    //    d="M33.567 8.2L27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"
    //    ></path>
    //  </svg>
    //</div>

    // <sp-icon slot="icon" size="s" name="ui:HelpMedium"></sp-icon>

    // <sp-icon size="xxs" name="ui:Magnifier"></sp-icon>


  }
}