package com.unhurdle.spectrum
{
  import org.apache.royale.core.ValuesManager;
  import org.apache.royale.core.IValuesImpl;
  import org.apache.royale.events.Event;

	[Event(name="error", type="org.apache.royale.events.Event")]
  [Event(name="load", type="org.apache.royale.events.Event")]
  public class ImageAsset extends Asset
  {
    public function ImageAsset()
    {
      super();
    }

    protected var _imageElement:HTMLImageElement;
    protected var _pendingImageElement:HTMLImageElement;

    public function get imageElement():HTMLImageElement
    {
      if(!_imageElement){
        createImageElement();
      }
    	return _imageElement;
    }
    protected var _src:String;
    public function get src():String
    {
    	return _src;
    }
    override protected function getTag():String{
      return "sp-image";
    }
    public function set src(value:String):void
    {
      if(value == _src) return;
      if(!_imageElement) createImageElement();
      if(value == null) value = '';
      _pendingImageElement = newElement("img", appendSelector("-image")) as HTMLImageElement;
      _pendingImageElement.style.position = "absolute";
      _pendingImageElement.style.visibility = "hidden";
      _pendingImageElement.addEventListener('load', loadHandler);
      (element as HTMLElement).appendChild(_pendingImageElement);
      _pendingImageElement.src = value;
      _src = value;
    }
    private function loadHandler(ev:Event):void
    {
      _pendingImageElement.style.visibility = "visible";
      _imageElement = _pendingImageElement;
      _pendingImageElement = null;
      dispatchEvent(new Event("load"));
    }
    protected function createImageElement():void{
      _imageElement = newElement("img",appendSelector("-image")) as HTMLImageElement;
      // Avoid recursive error events from the current image.
      // _imageElement.addEventListener('error', errorHandler);
      (element as HTMLElement).appendChild(_imageElement);
      (element as HTMLElement).style.position = "relative";
      _imageElement.style.position = "absolute";
    }
    private function errorHandler(ev:Event):void{
      dispatchEvent(new Event("error"));
    }

    public function get imageStyle():CSSStyleDeclaration
    {
      if(!_imageElement){
        createImageElement();
      }
    	return _imageElement.style;
    }
    public function set imageStyleString(value:String):void{
      var valuesImpl:IValuesImpl = ValuesManager.valuesImpl;
      var styles:Object = valuesImpl.parseStyles(value);
      var imgStyles:CSSStyleDeclaration = imageStyle;
      for(var x:String in styles){
        imgStyles[x] = styles[x];
      }      
    }

  }
}