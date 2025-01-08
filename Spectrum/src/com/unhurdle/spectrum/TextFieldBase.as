package com.unhurdle.spectrum
{
  import com.unhurdle.spectrum.beads.KeyboardFocusHandler;
  import com.unhurdle.spectrum.interfaces.IKeyboardFocusable;
  import com.unhurdle.spectrum.utils.generateIcon;
  import com.unhurdle.spectrum.utils.getKeyFromKeyCode;

  import org.apache.royale.debugging.assert;
  import org.apache.royale.events.KeyboardEvent;
  import org.apache.royale.events.ValueEvent;

  COMPILE::JS
  {}

  [Event(name="change", type="org.apache.royale.events.ValueEvent")]
  // These event names are generating programmatically
  [Event(name="onEnter", type="org.apache.royale.events.ValueEvent")]
  [Event(name="onBackspace", type="org.apache.royale.events.ValueEvent")]
  [Event(name="onArrowDown", type="org.apache.royale.events.ValueEvent")]
  [Event(name="onArrowUp", type="org.apache.royale.events.ValueEvent")]
  [Event(name="onTab", type="org.apache.royale.events.ValueEvent")]
/**
 * <input type="text" placeholder="Enter your name" name="field" value="Not a valid input" class="spectrum-Textfield" pattern="[\d]+" required>
 * <input type="text" placeholder="Enter your name" name="field" value="A valid input" class="spectrum-Textfield spectrum-Textfield--quiet is-valid" pattern="[\w\s]+" required disabled>
 */
  abstract public class TextFieldBase extends SpectrumBase implements IKeyboardFocusable, ITextContent
  {
    /**
     * <inject_html>
     * <link rel="stylesheet" href="assets/css/components/textfield/dist.css">
     * </inject_html>
     * 
     */
    public function TextFieldBase()
    {
      super();
      addEventListener(KeyboardEvent.KEY_DOWN,handleKeyDown);
      _tabFocusable = true;
    }
    public function get text():String{
      throw new Error("Must override text getter!");
    }
    public function set text(value:String):void{
      // override in subclass
    }

    override public function set tabFocusable(value:Boolean):void
    {
    	_tabFocusable = value;
      if(value){
        focusElement.removeAttribute("tabindex");
      } else {
        focusElement.setAttribute("tabindex",-1);
      }
    }

    private function handleKeyDown(event:*):void{
      var eventName:String;
      var key:String = getKeyFromKeyCode(event.keyCode);
      eventName = "on" + key;
      dispatchEvent(new ValueEvent(eventName,event));
    }

    override protected function getSelector():String{
      return "";
    }
    public function get focusElement():HTMLElement{
      assert(false,"Must override focusElement getter!");
      return null;
    }

    private var _quiet:Boolean;

    public function get quiet():Boolean
    {
    	return _quiet;
    }

    public function set quiet(value:Boolean):void
    {
      if(value != !!_quiet){
        if(value){
          setAttribute("quiet",true);
        } else {
          removeAttribute("quiet")
        }
      }
    	_quiet = value;
    }
    
    //TODO
    public function validate():Boolean{
      return true;
    }

    public function setValidity(value:Boolean):void{
      valid = value;
      invalid = !value;
    }
    private var _valid:Boolean;

    public function get valid():Boolean
    {
    	return _valid;
    }

    public function set valid(value:Boolean):void
    {
      if(value != _valid){
        if(value){
          setAttribute("valid",true);
        } else {
          removeAttribute("valid");
        }
      }
      if(value){
        invalid = false;
      }
    	_valid = value;
    }

    private var _invalid:Boolean;

    public function get invalid():Boolean
    {
    	return _invalid;
    }

    public function set invalid(value:Boolean):void
    {
      if(value != _invalid){
        if(value){
          setAttribute("invalid",true);
        } else {
          removeAttribute("invalid");
        }
      }
      if(value){
        valid = false;
      }
    	_invalid = value;
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
          setAttribute("disabled",true);
        } else {
          removeAttribute("disabled");
        }
      }
      _disabled = value;
    }
    COMPILE::JS
    override public function focus():void{
      focusElement.focus();
    }

    private var _focused:Boolean;

    public function get focused():Boolean
    {
    	return _focused;
    }

    public function set focused(value:Boolean):void
    {
      if(value != _focused){
        //TOOD
        // toggle("is-focused",value);
        if(value){
          focus();
          //TODO
          // toggle("is-keyboardFocused",false);
        }
      }
    	_focused = value;
    }

    private var _keyboardFocused:Boolean;

    public function get keyboardFocused():Boolean
    {
    	return _keyboardFocused;
    }

    public function set keyboardFocused(value:Boolean):void
    {
      if(value != _keyboardFocused){
        //TODO
        // toggle("is-keyboardFocused",value);
        if(value){
          focus();
          //TODO
          // toggle("is-focused",false);
        }
      }
    	_keyboardFocused = value;
    }

    private var _icon:String;

    /**
     * Icon selector name
     */
    public function get icon():String
    {
    	return _icon;
    }

    public function set icon(value:String):void
    {
    	_icon = value;
      createIcon(value);
    }

    private var _iconClass:String = "";

    public function get iconClass():String
    {
    	return _iconClass;
    }

    public function set iconClass(value:String):void
    {
    	_iconClass = value;
      if(iconElement){
        iconElement.className = value;
      }
    }
    private var _iconSize:String; "S"

    public function get iconSize():String
    {
    	return _iconSize;
    }

    public function set iconSize(value:String):void
    {
      if(!Icon.validateSize(value)){
        return;
      }
    	_iconSize = value;
      if(iconElement){
        iconElement.size = value;
      }
    }
    private var _iconType:String;

    public function get iconType():String
    {
    	return _iconType;
    }

    public function set iconType(value:String):void
    {
    	_iconType = value;
      if(iconElement){
        iconElement.type = value;
      }
    }
    private var _iconElement:Icon;

    public function get iconElement():Icon
    {
    	return _iconElement;
    }

    public function set iconElement(value:Icon):void
    {
      if(_iconElement){
        removeElement(_iconElement);
      }
    	_iconElement = value;
      if(_iconElement){
        addElementAt(_iconElement,0);
      }
    }

    protected function createIcon(selector:String):void{
      if(_iconElement){
        _iconElement.selector = selector;
        setIconProps();
      } else {
        _iconElement = generateIcon(selector);
        setIconProps();
        addElementAt(_iconElement,0);
      }
    }
    protected function setIconProps():void{
      if(iconClass){
        _iconElement.className = iconClass;
      }
      _iconElement.size = iconSize;
      _iconElement.type = iconType;
      // _iconElement.toggle(appendSelector("-icon"),true);
    }
    override public function addedToParent():void{
      super.addedToParent();
      if(tabFocusable){
        addBead(new KeyboardFocusHandler());
      }
    }
  }
}