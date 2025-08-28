package com.unhurdle.spectrum
{
  COMPILE::JS{
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import org.apache.royale.events.Event;
  import org.apache.royale.functional.decorator.debounceShort;
  [Event(name="change", type="org.apache.royale.events.Event")]
  public class Switch extends SpectrumBase
  {
    /**
     * <inject_html>
     * <link rel="stylesheet" href="assets/css/components/toggle/dist.css">
     * </inject_html>
     * 
     */
    public function Switch()
    {
      super();
      debouncedSetInput = debounceShort(handleInputChange,0);
    }
    override protected function getSelector():String{
      return "spectrum-ToggleSwitch";
    }
    protected var _rightLabelElem:TextNode;
    protected var _leftLabelElem:TextNode;
    protected var input:*;
    // only set label once even if called multiple times while creating element
    protected var debouncedSetInput:Function;
    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
      var elem:WrappedHTMLElement = super.createElement();
      input = newElement("sp-switch");
      input.className = appendSelector("-input");
      input.setAttribute("emphasized","");
      input.addEventListener("change",handleInputChange);
      elem.appendChild(input);
      return elem;
    }
    override public function addedToParent():void{
      super.addedToParent();
      COMPILE::JS
      {
        if(_leftLabel && !_leftLabelElem){
          _leftLabelElem = new TextNode("label");
          _leftLabelElem.className = appendSelector("-label");
          _leftLabelElem.text = _leftLabel;
          element.insertBefore(_leftLabelElem.element,input);
        }
        if(_rightLabel || !_leftLabelElem){
          _rightLabelElem = new TextNode("label");
          _rightLabelElem.className = appendSelector("-label");
          _rightLabelElem.text = _rightLabel;
          _rightLabelElem.element.style.marginLeft = "35px";
          _rightLabelElem.element.style.marginRight = "35px";
          element.appendChild(_rightLabelElem.element);
        }
        debouncedSetInput();
      }
    }
    protected function handleInputChange(ev:Event):void{
      var label:String = checked ? onLabel : offLabel;
      if(label){
        if(_rightLabelElem){
          _rightLabelElem.text = label;
        }
        if(_leftLabelElem){
          _leftLabelElem.text = label
        }
      } else {
        if(_rightLabelElem){
          _rightLabelElem.text = _rightLabel;
        }
        if(_leftLabelElem){
          _leftLabelElem.text = _leftLabel;
        }
      }
    }
    private var _onLabel:String;
    /**
     * Label when switch is on
     */
    public function get onLabel():String{
    	return _onLabel;
    }
    public function set onLabel(value:String):void{
    	_onLabel = value;
      debouncedSetInput();
    }
    private var _offLabel:String;
    /**
     * Label when switch is off
     */
    public function get offLabel():String{
    	return _offLabel;
    }
    public function set offLabel(value:String):void{
    	_offLabel = value;
      debouncedSetInput();
    }
    private var _rightLabel:String = "";
    public function get rightLabel():String
    {
      return _rightLabel;
    }

    public function set rightLabel(value:String):void
    {
      _rightLabel = value
      if(_rightLabelElem){
        _rightLabelElem.text = value;
      }
    }
    private var _leftLabel:String = "";
    public function get leftLabel():String
    {
      return _leftLabel;
    }

    public function set leftLabel(value:String):void
    {
      _leftLabel = value
      if(_leftLabelElem){
        _leftLabelElem.text = value;
      }
    }
    private var _checked:Boolean;
    public function get checked():Boolean
    {
      _checked = input.hasAttribute("checked");
      return _checked;
    }

    public function set checked(value:Boolean):void
    {
      if(value != _checked){
        if(value){
          input.setAttribute("checked","");
        } else {
          input.removeAttribute("checked");
        }
        _checked = value;
        debouncedSetInput();
      }
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
          input.setAttribute("disabled","");
        } else {
          input.removeAttribute("disabled");
        }
      }
    	_disabled = value;
    }

    private var _quiet:Boolean;

    public function get quiet():Boolean
    {
    	return _quiet;
    }

    public function set quiet(value:Boolean):void
    {
      if(value != !!_quiet){
        if(!value){
          input.setAttribute("emphasized","");
        } else {
          input.removeAttribute("emphasized");
        }
      }
    	_quiet = value;
    }

  }
}