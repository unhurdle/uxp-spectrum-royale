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

    public function get imageElement():HTMLImageElement
    {
      if(!_imageElement){
        createImageElement();
      }
    	return _imageElement;
    }
    protected var _src:String;
    private var _pendingImage:HTMLImageElement;
    private var _pendingSrc:String;

    public function get src():String
    {
    	return _src;
    }
    override protected function getTag():String{
      return "sp-image";
    }
    public function set src(value:String):void
    {
      if(value != _src){
        if(!_imageElement){
          createImageElement();
        }
        if (value == null) value = ''; //null does not convert well
        _src = value;

        if (_pendingImage) {
          clearPendingImage();
        }

        if (value == '') {
          _pendingSrc = null;
          _imageElement.src = value;
          return;
        }

        _pendingSrc = value;
        _pendingImage = newElement("img") as HTMLImageElement;
        _pendingImage.className = _imageElement.className;
        _pendingImage.style.cssText = _imageElement.style.cssText;
        _pendingImage.style.position = "absolute";
        _pendingImage.style.visibility = "hidden";
        (element as HTMLElement).appendChild(_pendingImage);
        _pendingImage.addEventListener('load', pendingLoadHandler);
        _pendingImage.addEventListener('error', pendingErrorHandler);
        _pendingImage.src = value;
      }
    }
    protected function createImageElement():void{
      _imageElement = newElement("img",appendSelector("-image")) as HTMLImageElement;
      _imageElement.addEventListener('load', loadHandler);
      _imageElement.addEventListener('error', errorHandler);
      (element as HTMLElement).appendChild(_imageElement);

    }
    private function loadHandler(ev:Event):void{
      dispatchEvent(new Event("load"));
    }

    private function errorHandler(ev:Event):void{
      dispatchEvent(new Event("error"));
    }

    private function pendingLoadHandler(ev:Event):void{
      if(!_pendingImage){
        return;
      }

      preserveImageSize();
      commitPendingImage();
      }

    private function pendingErrorHandler(ev:Event):void{
      if(!_pendingImage){
        return;
      }

      preserveImageSize();
      _imageElement.src = _pendingSrc;
      clearPendingImage();
    }

    private function commitPendingImage():void{
      var oldImage:HTMLImageElement = _imageElement;
      var newImage:HTMLImageElement = _pendingImage;
      newImage.style.cssText = oldImage.style.cssText;
      newImage.removeEventListener('load', pendingLoadHandler);
      newImage.removeEventListener('error', pendingErrorHandler);
      newImage.addEventListener('load', loadHandler);
      newImage.addEventListener('error', errorHandler);
      oldImage.removeEventListener('load', loadHandler);
      oldImage.removeEventListener('error', errorHandler);
      (element as HTMLElement).replaceChild(newImage, oldImage);
      _imageElement = newImage;
      _pendingImage = null;
      _pendingSrc = null;
    }

    private function preserveImageSize():void{
      var width:Number = _imageElement.offsetWidth;
      var height:Number = _imageElement.offsetHeight;
      if(width > 0){
        _imageElement.style.width = width + "px";
      }
      if(height > 0){
        _imageElement.style.height = height + "px";
      }
    }

    private function clearPendingImage():void{
      if(_pendingImage){
        _pendingImage.removeEventListener('load', pendingLoadHandler);
        _pendingImage.removeEventListener('error', pendingErrorHandler);
        (element as HTMLElement).removeChild(_pendingImage);
        _pendingImage = null;
      }
      _pendingSrc = null;
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