package com.unhurdle.spectrum.utils
{
  import com.unhurdle.spectrum.ISpectrumElement;
  import org.apache.royale.core.IChild;
  import org.apache.royale.events.KeyboardEvent;
  
  public function getFocusableElements(element:ISpectrumElement,elements:Array,listener:Function):void{
    var numElements:Number = element.numElements;
    var i:int = 0;
    while(i < numElements){
      var child:IChild = element.getElementAt(i);
      i++;
      if(child is ISpectrumElement){
        var childElem:ISpectrumElement = child as ISpectrumElement;
        // Add all elements to the array, regardless of their state
        if (elements.indexOf(childElem) == -1) {
          elements.push(childElem);
            childElem["element"].addEventListener(KeyboardEvent.KEY_DOWN, listener);
        }
        getFocusableElements(childElem,elements,listener);
      }
    }
  }
}