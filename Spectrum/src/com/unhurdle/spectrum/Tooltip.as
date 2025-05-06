package com.unhurdle.spectrum
{
  COMPILE::JS{
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import com.unhurdle.spectrum.const.IconType;
  public class Tooltip extends SpectrumBase
  {
    /**
     * <inject_html>
     * <link rel="stylesheet" href="assets/css/components/tooltip/dist.css">
     * </inject_html>
     * 
     */
    public function Tooltip()
    {
      super();
      //TODO add types and open/close
      // className = "spectrum-Tooltip--top";
      direction = "top";
    }
    override protected function getSelector():String{
      return "spectrum-Tooltip";
    }
    private var span1:TextNode;
    override protected function getTag():String{
      return "span";
    }
    private var tipSpan:Icon;

    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
      super.createElement();
      element.style.pointerEvents = "none";
      // higher than popovers
      element.style.zIndex = 4;
      element.style.marginTop = "-10px";
      // direction = "top";
      span1 = new TextNode("span");
      span1.element.style.whiteSpace = "pre-wrap";
      span1.className = appendSelector("-label");
      element.appendChild(span1.element);
      tipSpan = new Icon('#spectrum-tooltip-top-tip');
      element.appendChild(tipSpan.element);
      tipSpan.element.style.position = "absolute";
      tipSpan.element.style.color = 'rgb(116, 116, 116)';
      return element;
    }
    private var _text:String;

    public function get text():String
    {
    	return _text;
    }

    public function set text(value:String):void
    {
      span1.text = value;
    	_text = value;
    }
    private var _info:Boolean;

    private var _flavor:String;

    /**
     * The flavor of the Tooltip
     * One of info, positive and negative, success and error.
     * To set the Tooltip to the default, specify an empty string
     */
    public function get flavor():String
    {
    	return _flavor;
    }

    [Inspectable(category="General", enumeration="info,positive,negative,success,error")]
    public function set flavor(value:String):void
    {
      if(value != _flavor){
        switch(value){
          case "info":
          case "positive":
          case "negative":
          case "success":
          case "error":
          case "":
            break;
          default:
            throw new Error("Unknown flavor: " + value);
        }
        if(_flavor){
          var oldFlavor:String = valueToSelector(_flavor);
          toggle(oldFlavor,false);
        }
        var newFlavor:String = valueToSelector(value);
        toggle(newFlavor,true);
      }
    	_flavor = value;
    }


    private var iconElem:Icon;
    private var _icon:String;
    /**
     * Icon to display. One of: info, success, alert, help
     * Default is no value.
     */
    public function get icon():String
    {
    	return _icon;
    }

    [Inspectable(category="General", enumeration="info,success,alert,help")]
    public function set icon(value:String):void
    {
      var type:String;
      if(value == _icon){return;}
      if(!value){
        if(iconElem){
          iconElem.setStyle("display","none");
        }
        return;
      }
      switch(value){
        case "info":
          type = IconType.INFO_SMALL;
          break;
        case "success":
          type = IconType.SUCCESS_SMALL;
          break;
        case "alert":
          type = IconType.ALERT_SMALL;
          break;
        case "help":
          type = IconType.HELP_SMALL;
          break;
        default:
          throw new Error("unknown type: " + value);
      }
      var selector:String = Icon.getCSSTypeSelector(type);

      if(!iconElem){
        iconElem = new Icon(selector);
        iconElem.type = type;
        iconElem.className = appendSelector("-typeIcon");
        addElementAt(iconElem,0);
      } else {
        iconElem.selector = selector;
        iconElem.type = type;
        iconElem.setStyle("display",null);
      }
    	_icon = value;
    }
    private var _direction:String;

    public function get direction():String
    {
    	return _direction;
    }

    [Inspectable(category="General", enumeration="left,right,bottom,top" defaultValue="top")]
    public function set direction(value:String):void
    {
      if(_direction){
        toggle(getSelector()+"--"+_direction,false);
      }
      if(value){
        switch(value){
          case "left":
            tipSpan.selector = "#spectrum-tooltip-left-tip";
            COMPILE::JS{
              element.style.marginLeft = "-10px";
              element.style.marginTop = "0px";
              tipSpan.element.style.left = "97%";
              if(_tipPosition == "center"){
                tipSpan.element.style.marginTop = "3px";
                tipSpan.element.style.top = "auto";
              }
            }
            setAttribute('placement',value);
            break;
          case "right":
            tipSpan.selector = "#spectrum-tooltip-right-tip";
            COMPILE::JS{
              element.style.marginRight = "10px";
              element.style.marginTop = "0px";
              tipSpan.element.style.left = "-6px";
              if(_tipPosition == "center"){
                tipSpan.element.style.marginTop = "3px";
                tipSpan.element.style.top = "auto";
              }
            }
            setAttribute('placement',value);
            break;
          case "bottom":
            tipSpan.selector = "#spectrum-tooltip-bottom-tip";
            COMPILE::JS{
              element.style.marginTop = "10px";
              tipSpan.element.style.top = "-7px";
              if(_tipPosition == "center"){
                tipSpan.element.style.left = "calc(50% - 4px)";
              }
            }
            setAttribute('placement',value);
            break;
          case "top":
            tipSpan.selector = "#spectrum-tooltip-top-tip";
            COMPILE::JS{
              element.style.marginTop = "-10px";
              tipSpan.element.style.top = "97%";
              if(_tipPosition == "center"){
                tipSpan.element.style.left = "calc(50% - 4px)";
              }
            }
            setAttribute('placement',value);
            break;
          default:
            throw new Error("Invalid direction: " + value);
        }
      }
    	_direction = value;
    }

    private var _tipPosition:String = "center";
    /**
     * The position of the tip within the tooltip
     */
    public function get tipPosition():String{
    	return _tipPosition;
    }

    [Inspectable(category="General", enumeration="start,end,center" defaultValue="center")]
    public function set tipPosition(value:String):void{
      if(value == _tipPosition){
        return;
      }
      switch(value){
        case "start":
          _tipPosition = value;
          break;
        case "end":
          _tipPosition = value;
          break;
        default:
          _tipPosition = "center";
          break;
      }
      positionTip();
    }

    private function positionTip():void{
      COMPILE::JS
      {
        if(_tipPosition == "center"){
          tipSpan.element.style.left = "";
          tipSpan.element.style.top = "";
          return;
        }
        if(_tipPosition == "start"){
          var stylStr:String = "calc(0% + 3px)";
        } else {
          stylStr = "calc(100% - 16px)";
        }
        switch(_direction){
          case "left":
            tipSpan.element.style.top = stylStr;
            tipSpan.element.style.left = "97%";
            break;
          case "right":
            tipSpan.element.style.top = stylStr;
            tipSpan.element.style.left = "-6px";
            break;
          case "bottom":
            tipSpan.element.style.top = "-7px";
            tipSpan.element.style.left = stylStr;
            break;
          default://top
            tipSpan.element.style.top = "97%";
            tipSpan.element.style.left = stylStr;
            break;
        }
      }
    }

    private var _isOpen:Boolean;

    public function get isOpen():Boolean
    {
    	return _isOpen;
    }

    public function set isOpen(value:Boolean):void
    {
      if(value != !!_isOpen){
        toggle("is-open",value);
      }
    	_isOpen = value;
    }
  }
}
