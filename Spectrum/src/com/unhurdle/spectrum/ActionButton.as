package com.unhurdle.spectrum
{
  COMPILE::JS
  {
  }
  import org.apache.royale.events.MouseEvent;
  import org.apache.royale.utils.Timer;
  import org.apache.royale.utils.UIUtils;
  import org.apache.royale.core.IPopUpHost;
  import org.apache.royale.geom.Point;
  import org.apache.royale.utils.PointUtils;
  import org.apache.royale.events.Event;
  import org.apache.royale.utils.callLater;
  import com.unhurdle.spectrum.const.IconType;
  import com.unhurdle.spectrum.includes.ActionButtonInclude;
  import com.unhurdle.spectrum.interfaces.IKeyboardNavigateable;
  import com.unhurdle.spectrum.utils.generateIcon;
  import com.unhurdle.spectrum.utils.getExplicitZIndex;

	[Event(name="change", type="org.apache.royale.events.Event")]
	[Event(name="selectionChanged", type="org.apache.royale.events.Event")]
  public class ActionButton extends Button implements IKeyboardNavigateable
  {
    public function ActionButton()
    {
      super()
      toggle(valueToSelector("primary"),false);
      addEventListener('click',elementClickedForMenu,true);
      addEventListener('click',elementClicked);
      addEventListener(MouseEvent.MOUSE_DOWN,handleMouseDown);
    }
    override protected function getSelector():String{
      return "";//ActionButtonInclude.getSelector();
    }
    override protected function getTag():String{
      return "sp-action-button";
    }

    override public function set flavor(value:String):void{
      // do nothing
    }


    protected var flyOutIconHolder:Icon;

    protected function createFlyoutIcon():void{
      if(!flyOutIconHolder){
        var type:String = IconType.CORNER_TRIANGLE;
        flyOutIconHolder = generateIcon(type);
        flyOutIconHolder.type = type;
        flyOutIconHolder.className = appendSelector("-hold");
        addElement(flyOutIconHolder);
        timer = new Timer(1000,1);
        timer.addEventListener(Timer.TIMER,onTimer);

      }
    }

    private var _selectable:Boolean;

    public function get selectable():Boolean
    {
    	return _selectable;
    }

    public function set selectable(value:Boolean):void
    {
    	_selectable = value;
    }

    private var _emphasized:Boolean;

    public function get emphasized():Boolean
    {
    	return _emphasized;
    }

    public function set emphasized(value:Boolean):void
    {
      if(_emphasized != value){
        toggle(valueToSelector("emphasized"),value);
      }
    	_emphasized = value;
    }
    override public function addedToParent():void{
      super.addedToParent();
      addEventListener(MouseEvent.MOUSE_DOWN,elementMouseDown);
      if(dataProvider){
        createFlyoutIcon();
      }
    }

    // private var _selected:Boolean = false;

    // public  function get selected():Boolean
    // {
    //   return _selected;
    // }

    // public  function set selected(value:Boolean):void
    // {
    //   if(!!value != _selected){
    //   	_selected = value;
    //     toggle("is-selected",value);
    //   }
    // }

    private function elementClicked(ev:Event):void{
      if(selectable){
        selected = !selected;
        dispatchEvent(new Event("selectionChanged"));
      }

    }
    private function elementClickedForMenu(ev:Event):void{
      if(popover && popover.open){
        ev.stopImmediatePropagation();
      }
    }
    private function elementMouseDown(ev:Event):void{
      closePopup();
    }

    private var _selectedIndex:int;

    public function get selectedIndex():int
    {
      if(menu){
        return menu.selectedIndex;
      }
    	return _selectedIndex;
    }

    public function set selectedIndex(value:int):void
    {
      if(menu){
        menu.selectedIndex = value;
      }
    	_selectedIndex = value;
    }
    private var _selectedItem:Object;

    public function get selectedItem():Object
    {
      if(menu){
        return menu.selectedItem;
      }
      if(_selectedIndex >=0 && dataProvider && _selectedIndex < dataProvider["length"]){
        if(dataProvider is Array){
          return dataProvider[_selectedIndex];
        }
        return dataProvider["source"][_selectedIndex];
      }
    	return null;
    }

    public function set selectedItem(value:Object):void
    {
      if(menu){
        menu.selectedItem = value;
      }
      if(dataProvider is Array){
        _selectedIndex = (dataProvider as Array).indexOf(value);
      }
      if(dataProvider.hasOwnProperty("source")){
        _selectedIndex = dataProvider["source"]["indexOf"](value);
      }
    	_selectedIndex = -1;
    }
    private var _keyboardFocusedIndex:int;

    private var _dataProvider:Object;

    public function get dataProvider():Object
    {
    	return _dataProvider;
    }

    public function set dataProvider(value:Object):void
    {
    	_dataProvider = value;
      createFlyoutIcon();
      if(menu){
        menu.dataProvider = value;
      }
    }

    private function handleMouseDown(ev:*):void{
      if(!dataProvider || !dataProvider.length){
        return;
      }
  		window.addEventListener('mouseup', handleMouseUp);
      if(timer){
        timer.start();
      }
    }

    private function handleMouseUp(ev:*):void{
  		window.removeEventListener('mouseup', handleMouseUp);
      if(timer){
        timer.reset();
      }
    }

    private var timer:Timer;

    private function onTimer(ev:*):void{
      timer.reset();
      showMenu();
    }
    public function createPopover():void{
      popover = new ComboBoxList();
      var zIndex:Number = getExplicitZIndex(this);
      if(zIndex > 2){
        popover.setStyle("z-index",zIndex);
      }
      popover.setStyle("white-space","nowrap");
      popover.setStyle("width","auto");
      menu = popover.list;
      menu.dataProvider = dataProvider;
      menu.addEventListener("change",handleMenuChange);
    }
    public var showEmptyMenu:Boolean;
    public function showMenu():void{
      if(!showEmptyMenu && (!dataProvider || !dataProvider.length)){
        return;
      }
      // construct if necessary and show the menu.
      if(!popover){
        createPopover();
      }
      
      var style:CSSStyleDeclaration =  window["getComputedStyle"](element);
			if(Number(style.zIndex) > 2){
        popover.setStyle("z-index",style.zIndex);
      }
      dispatchEvent(new Event("beforeShow"));
      popover.x = popover.y = 0;
      popover.open = true;
      popover.list.focus();
      COMPILE::JS
      {
        requestAnimationFrame(positionPopup);
      }
			popover.addEventListener(MouseEvent.MOUSE_DOWN, handleControlMouseDown);
			this.addEventListener(MouseEvent.MOUSE_DOWN, handleControlMouseDown);
			callLater(function():void {
				popover.topMostEventDispatcher.addEventListener(MouseEvent.MOUSE_DOWN, handleTopMostEventDispatcherMouseDown);
			});
    }
    protected function positionPopup():void{
      popover.setStyle("pointer-events","");
      var origin:Point = new Point(width, height);
      var relocated:Point = PointUtils.localToGlobal(origin,this);
      popover.x = relocated.x
      popover.y = relocated.y;

    }
    public var menu:Menu;
    public var popover:ComboBoxList;

    private function handleMenuChange(ev:Event):void{
      closePopup();
      dispatchEvent(new Event("change"));
      menu.setStyle("margin-right","19px");
    }
		protected function handleControlMouseDown(event:MouseEvent):void
		{			
			event.stopImmediatePropagation();
		}
		
		protected function handleTopMostEventDispatcherMouseDown(event:MouseEvent):void
		{
      closePopup();
		}
    protected function closePopup():void{
      if(popover && popover.open){
  			popover.removeEventListener(MouseEvent.MOUSE_DOWN, handleControlMouseDown);
	  		this.removeEventListener(MouseEvent.MOUSE_DOWN, handleControlMouseDown);
		  	popover.topMostEventDispatcher.removeEventListener(MouseEvent.MOUSE_DOWN, handleTopMostEventDispatcherMouseDown);
        popover.open = false;
        popover.list.blur();
      }
    }

    public function get focusParent():ISpectrumElement{
    	return popover.list;
    }
  }
}

/***
 * <sp-action-button label="Edit">
 *    <div slot="icon" class="icon">
 *        <svg viewBox="0 0 36 36" id="spectrum-icon-18-Edit" class="spectrum-Icon--sizeS spectrum-Icon">
 *            <path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"></path>
 *        </svg>
 *    </div>
 * </sp-action-button>
 */



/***
 * <sp-action-button>
 *    <div slot="icon" class="icon">
 *        <svg viewBox="0 0 36 36" id="spectrum-icon-18-Edit" class="spectrum-Icon--sizeS spectrum-Icon">
 *            <path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"></path>
 *        </svg>
 *    </div>
 *    This is an action button
 * </sp-action-button>
 */
