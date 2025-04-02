package com.unhurdle.spectrum
{
  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import com.unhurdle.spectrum.utils.generateIcon;

  import org.apache.royale.html.accessories.RestrictTextInputBead;
  import org.apache.royale.html.elements.Div;

/**
 * <input type="text" placeholder="Enter your name" name="field" value="Not a valid input" class="spectrum-Textfield" pattern="[\d]+" required>
 * <input type="text" placeholder="Enter your name" name="field" value="A valid input" class="spectrum-Textfield spectrum-Textfield--quiet is-valid" pattern="[\w\s]+" required disabled>
 */
  public class TextField extends TextFieldBase
  {
    public function TextField()
    {
      super();
      _input.addEventListener("input",checkValidation);
    }
    // override protected function getTag():String{
    //   return "sp-textfield";
    // }

    //TODO add label option
    //<sp-textfield placeholder="Phone Number" style="display: flex; flex-direction: row; align-items: baseline;">
    //  <sp-label style="padding-right: 16px" isrequired="true" slot="label">Phone Number</sp-label>
    //</sp-textfield>

   private var _readonly:Boolean;
		public function get readonly():Boolean
		{
			_readonly = _input.hasAttribute("readonly");
			return _readonly;
		}

		public function set readonly(value:Boolean):void
		{
			if(value != _readonly){
				if(value){
				_input.setAttribute("readonly","");
				} else {
				_input.removeAttribute("readonly");
				}
				_readonly = value;
			}
		}
    private var _placeholder:String;

    public function get placeholder():String
    {
      return _placeholder;
    }

    public function set placeholder(value:String):void
    {
      _placeholder = value;
      if(value){
        _input.setAttribute("placeholder",value);
        _div.text = value;
      } else {
        _input.removeAttribute("placeholder");
        _div.text = "";
      }
      setDivPlaceholder();
    }
    private function setDivPlaceholder():void{
        if(text){
          COMPILE::JS{
              _div.element.style.fontStyle = "normal";
              _div.element.style.opacity = "1";
          }
          return;
        }
        COMPILE::JS{
          _div.element.style.fontStyle = "italic";
          _div.element.style.opacity = "0.7";//this doesn't work! (UXP)
        }

    }

    // COMPILE::SWF
    // override public function get name():String
    // {
    //   return super.name;
    // }
    // COMPILE::SWF
    // override public function set name(value:String):void
    // {
    //   super.name = value;
    // }

    COMPILE::JS
    public function get name():String
    {
      //TODO
      return "";
    	// return input.name;
    }

    COMPILE::JS
    public function set name(value:String):void
    {
      //TODO
        // input.name = name;
    }
    override public function get text():String
    {
      return input.value;
    }

    override public function set text(value:String):void
    {
      if(value){
      	input.value = value;
        div.text = value;
      } else {
        input.value = "";
        div.text = _placeholder || "";
      }
      checkValidation();
    }

    private var _pattern:String;

    public function get pattern():String
    {
    	return _pattern;
    }

    public function set pattern(value:String):void
    {
      _pattern = value;
      if(text){
        checkValidation();
      }
    }
    private var _restrict:String;
    /**
     * Accepts a list of allowed characters.
     * The different between `pattern` and `restrict` is that restrict prevents other characters
     * from being typed while pattern validates the typed contents against an expression
     * and gives visual feedback.
     */
    public function get restrict():String{
    	return _restrict;
    }
    private var restrictBead:RestrictTextInputBead;

    public function set restrict(value:String):void{
    	if(_restrict == value){
        return;
      }
      if(value && !restrictBead){
        restrictBead = new RestrictTextInputBead();
        addBead(restrictBead);
      }
      if(restrictBead){
        restrictBead.restrict = value;
      }
      _restrict = value;
    }

    private var _required:Boolean;
    public function get required():Boolean
    {
      //TODO
    	// return input.required;
      return false;
    }

    public function set required(value:Boolean):void
    {
      if(!!value != !!_required){
        //TODO
      	// input.required = value;
      }
      _required = value;
    }


    override public function get disabled():Boolean
    {
    	return super.disabled;
    }

    override public function set disabled(value:Boolean):void
    {
      // if(value != super.disabled){
      //   input.disabled = value;
      // }
      super.disabled = value;
    }

    private var validIcon:Icon;
    private var invalidIcon:Icon;
    override public function get valid():Boolean
    {
    	return super.valid;
    }

    override public function set valid(value:Boolean):void
    {
      super.valid = value;
      // if(value){
      //   if(!validIcon){
      //     var type:String = IconType.CHECKMARK_MEDIUM;
      //     validIcon = new Icon(Icon.getCSSTypeSelector(type));
      //     validIcon.className = appendSelector("-validationIcon");
      //     validIcon.type = type;
      //   }
      //   //if icon doesn't exist
      //   if(getElementIndex(validIcon) == -1){
      //     addElementAt(validIcon,0);
      //   }
      // } else{
      //   if(validIcon && getElementIndex(validIcon) != -1){
      //     removeElement(validIcon);
      //   }
      // }
    }

    override public function get invalid():Boolean
    {
    	return super.invalid;
    }
    private var _invalidText:String;

    public function get invalidText():String
    {
      return _invalidText;
    }

    public function set invalidText(value:String):void
    {
      _invalidText = value;
      applyInvalidToolTip();
    }

    private var _invalidAutoClose:Number = 0;
    public function get invalidAutoClose():Number
    {
    	return _invalidAutoClose;
    }

    public function set invalidAutoClose(value:Number):void
    {
    	_invalidAutoClose = value;
      if(invalidTooltip) {
        invalidTooltip.autoClose = value;
      }
    }

    private var invalidTooltip:AdaptiveTooltipBead;


    override public function set invalid(value:Boolean):void
    {
      super.invalid = value;
      // if(value){
      //   if(!invalidIcon){
      //     var type:String = IconType.ALERT_MEDIUM;
      //     invalidIcon = new Icon(Icon.getCSSTypeSelector(type));
      //     invalidIcon.className = appendSelector("-validationIcon");
      //     invalidIcon.type = type;
      //     invalidIcon.setStyle('box-sizing','content-box');
      //   }
      //   if(getElementIndex(invalidIcon) == -1){
      //     addElementAt(invalidIcon,0);
      //   }
              // applyInvalidToolTip();
      // } else{
      //   if(invalidIcon && getElementIndex(invalidIcon) != -1){
      //     removeElement(invalidIcon);
      //   }
      // }
    }
    public function applyInvalidToolTip():void {
      if (!invalidIcon) {
        return;
      }
      if (invalidTooltip) {
        invalidTooltip.toolTip = invalidText;
        return;
      }
      if (!invalidText || !invalidIcon) {
        return;
      }
      invalidTooltip = new AdaptiveTooltipBead();
      invalidTooltip.flavor = "negative";
      invalidIcon.addBead(invalidTooltip);
      invalidIcon.setStyle("pointer-events","auto");
      invalidTooltip.autoClose = invalidAutoClose;
      COMPILE::JS{
        invalidIcon.width = invalidIcon.element.clientWidth;
        invalidIcon.height = invalidIcon.element.clientHeight;
      }
      invalidTooltip.toolTip = invalidText;
    };

    private function checkValidation():void
    {
      if(pattern){
        var patt:RegExp = new RegExp(pattern);
        if(patt.test(_input.value)){
          valid = true;
        } else{
          invalid = true;
        }
      }
    }
    
    override public function get focusElement():HTMLElement{
      return input;
    }

    protected var _input:HTMLInputElement;

    public function get input():HTMLInputElement
    {
    	return _input;
    }
    protected var _div:Div;
    public function get div():Div
    {
    	return _div;
    }
     COMPILE::JS
		override protected function createElement():WrappedHTMLElement{
      var elem:WrappedHTMLElement = super.createElement();
      className = "spectrum-Textfield";
      _div = new Div();
      _div.addEventListener("click",handleClick);
      elem.appendChild(_div.element);
      _input = newElement("sp-textfield") as HTMLInputElement;
      _div.className = "spectrum-Textfield-input";
      _div.style = {"display" : "flex"};
      setDivStyle();
      _input.addEventListener("blur",handleBlur);
      elem.appendChild(_input);
      _input.style.display = "none";
      return elem;
    }
    COMPILE::JS
    private function handleClick(ev:Event):void{
      _input.style.display = "block";
      _input.focus();
      _div.element.style.display = "none";
    }
    COMPILE::JS
    private function handleBlur(ev:Event):void{
      _div.text = _input.value || _placeholder || "";
      setDivPlaceholder();
      _div.element.style.display = "flex";
      _input.style.display = "none";
    }
    private var _inputClass:String;

    public function get inputClass():String
    {
    	return _inputClass;
    }

    public function set inputClass(value:String):void
    {
    	_inputClass = value;
      input.className = value;
      div.className = "spectrum-Textfield-input " + value;
      setDivStyle();
    }
    private function setDivStyle():void{
      COMPILE::JS{
        div.element.style.fontSize = "13px";
        div.element.style.paddingTop = "5px";
        div.element.style.paddingLeft = "12px";
      }
    }
    private var divIconElement:Icon;
    override protected function createIcon(selector:String):void{
      if(iconElement && divIconElement){
        iconElement.selector = selector;
        divIconElement.selector = selector;
        setIconProps();
      } else {
        setIconElement(generateIcon(selector));
        divIconElement = generateIcon(selector);
        setIconProps();
        COMPILE::JS{
          _input.appendChild(iconElement.element);
        }
        _div.addElementAt(divIconElement,0);
      }
    }
    override protected function setIconProps():void{
      if(iconClass){
        iconElement.className = iconClass;
        divIconElement.className = iconClass;
      }
      iconElement.size = iconSize;
      divIconElement.size = iconSize;
      iconElement.type = iconType;
      divIconElement.type = iconType;
      divIconElement.style = {'margin-right': '10px','margin-top': '2px'};
    }
  }
}