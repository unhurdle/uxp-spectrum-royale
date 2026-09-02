package com.unhurdle.spectrum.utils
{


  public class OutsidePointerTracker
  {
    public function OutsidePointerTracker(elements:Array, outsideHandler:Function)
    {
      this.elements = elements;
      this.outsideHandler = outsideHandler;
    }

    private var elements:Array;
    private var outsideHandler:Function;
    private var tracking:Boolean;

    public function start():void
    {
      COMPILE::JS
      {
        if(tracking){
          return;
        }
        tracking = true;
        document.addEventListener("mousedown", handleMouseDown, true);
      }
    }

    public function stop():void
    {
      COMPILE::JS
      {
        if(!tracking){
          return;
        }
        tracking = false;
        document.removeEventListener("mousedown", handleMouseDown, true);
      }
    }

    COMPILE::JS
    private function handleMouseDown(event:MouseEvent):void
    {
      if(event.button != 0){
        return;
      }
      handleDown(event);
    }

    COMPILE::JS
    private function handleDown(event:Event):void
    {
      var target:Node = event.target as Node;
      for each(var element:HTMLElement in elements){
        if(element && element.contains(target)){
          return;
        }
      }
      stop();
      outsideHandler();
    }
  }
}