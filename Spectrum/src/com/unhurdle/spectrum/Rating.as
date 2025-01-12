package com.unhurdle.spectrum
{

  COMPILE::JS{
    import org.apache.royale.core.WrappedHTMLElement;
  }
  import com.unhurdle.spectrum.const.IconType;
  import org.apache.royale.html.elements.Span;
  import org.apache.royale.core.UIBase;
  import com.unhurdle.spectrum.utils.generateIcon;

  [Event(name="change", type="org.apache.royale.events.Event")]
  public class Rating extends SpectrumBase
  {
    /**
     * <inject_html>
     * <link rel="stylesheet" href="assets/css/components/rating/dist.css">
     * </inject_html>
     * 
     */
    public function Rating()
    {
      super();
    }
    override protected function getSelector():String{
      return "spectrum-Rating";
    }

    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
      super.createElement();
      max = 5;
      value = 0;
      // element.addEventListener("click",handleClick);
      return element;
    }
    override public function addedToParent():void{
      super.addedToParent();
      value = value;
    }
    private function handleClick(ev:*):void
    {
      if(_readOnly){
        return;
      }
      if(ev.target){
        var index:Number = this.getElementIndex(ev.target);// Number(ev.target.id);
        // var index:Number = Number((ev.target as HTMLElement).getAttribute("data-index"));
        if(!isNaN(index)){
          if(value == index + 1){
            value = 0;
          }else{
            value = index + 1;
          }
        }
      }
      // console.log(ev.target);
    }
    private var _max:Number;
    public function get max():Number
    {
    	return _max;
    }

    public function set max(val:Number):void
    {
      _max = val;
      if(!parent){//wait until addedToParent
        return;
      }
      validateIconElements();
    }
    private function validateIconElements():void{
      while(numElements > max){
        var elem:UIBase = getElementAt(numElements) as UIBase;
        elem.removeEventListener("click",handleClick);
        removeElement(elem);
      }
      while(numElements < max){
        var span:Span = new Span();
        span.className = appendSelector("-icon");
        var type:String = IconType.STAR;
        icon1 = generateIcon(type);
        icon1.type = type;
        icon1.className = appendSelector("-starActive");
        span.addElement(icon1);

        type = IconType.STAR_OUTLINE;
        icon2 = generateIcon(type);
        icon2.type = type;
        icon2.className = appendSelector("-starInactive");
        span.addElement(icon2);
        addElement(span);
        span.addEventListener("click",handleClick);

      }
    }
    private var _value:Number;
    public function get value():Number
    {
    	return _value;
    }
    private var icon1:Icon;
    private var icon2:Icon;
    private var span:Span;
    COMPILE::SWF
    public function set value(val:Number):void{}

    COMPILE::JS
    public function set value(val:Number):void
    {
      _value = val;
      if(!parent){
        return;
      }
      validateIconElements();
      var len:int = numElements;
      for(var i:int=0;i<len;i++){
        if(val == 0 || i > val-1){
          (element.children[i] as Element).classList.remove("is-selected");
          (element.children[i] as Element).classList.remove("is-currentValue");
        } else {
          (element.children[i] as Element).classList.add("is-selected");

        }
        if(i==val){
          (element.children[i] as Element).classList.add("is-currentValue");
        }
      }
      dispatchEvent(new Event("change"));
    }
    private var _disabled:Boolean;

    public function get disabled():Boolean
    {
    	return _disabled;
    }

    public function set disabled(value:Boolean):void
    {
      if(value != !!_disabled){
        toggle("is-disabled",value);
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
        toggle(valueToSelector("quiet"),value);
      }
    	_quiet = value;
    }
    private var _readOnly:Boolean;

    public function get readOnly():Boolean
    {
    	return _readOnly;
    }

    public function set readOnly(value:Boolean):void
    {
      if(value != !!_readOnly){
        toggle("is-readOnly",value);
      }
    	_readOnly = value;
    }
  }
}