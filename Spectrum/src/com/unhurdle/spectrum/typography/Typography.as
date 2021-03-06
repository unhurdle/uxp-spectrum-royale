package com.unhurdle.spectrum.typography
{

  // TODO
  //*italic
  //*serif
  //*secondary

  public class Typography extends TypographyBase
  {
    public static const STRONG:String = "strong;"
    public static const QUIET:String = "quiet;"
    public static const NORMAL:String = "normal;"

    public function Typography()
    {
      super();
    }
    // override protected function getSelector():String{
    //   // var retVal:String = '';
    //   // var suffix:Array = getSuffix();
    //   // if(!suffix.length){
    //   //   return getTypographySelector();
    //   // }
    //   // for(var i:int =0;i<suffix.length;i++){
    //   //   retVal += getTypographySelector() + suffix[i] + ' ';
    //   // }
    //   // return retVal.trim();
    //   return "";
    // }
    protected function getSuffix():Array{
      return [];
    }
    protected function getDefaultSize():Number{
      return 1;
    }

    protected var _size:String;

    public function get size():String
    {
    	return _size;
    }
    protected function getSizes():Array{
      return[
        "XXS",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ];
    }
    private var numLookup:Array = [
        "",
        "XL",
        "L",
        "M",
        "S",
        "XS",
        "XXS"
    ]

    public function validateSize(value:String):Boolean{
      if(getSizes().indexOf(value) != -1){
        return true;
      }
      return false;
    }
    [Inspectable(category="General", enumeration="XXS,XS,S,M,L,XL,XXL,XXXL", defaultValue="L")]
    public function set size(value:String):void
    {
      if(!value || value == _size){
        return;
      }
      var numVal:Number = Number(value);
      if(!isNaN(numVal)){
        value = numLookup[numVal];
      }
      if(!validateSize(value)){
          throw new Error("invalid size: " + value);
      }
      // if(_size){
      //   // toggle(valueToSelector(_size),false);
      //   removeAttribute(_size);
      // }
    	_size = value;
      // // toggle(valueToSelector(value),true);
      // setAttribute(value,true);
      setAttribute("size",value);
    }

    private var _italic:Boolean;

    public function get italic():Boolean
    {
        return _italic;
    }

    public function set italic(value:Boolean):void
    {
      if(value != !!_italic){
            // toggle(valueToSelector("italic"),value);
				if(value){
					setAttribute("italic",true);
				}else{
					removeAttribute("italic");
				}
      }
      _italic = value;
    }
    private var _serif:Boolean;

    public function get serif():Boolean
    {
    	return _serif;
    }

    public function set serif(value:Boolean):void
    {
      if(value != !!_serif){
        // toggle(valueToSelector("serif"),value);
				if(value){
					setAttribute("serif",true);
				}else{
					removeAttribute("serif");
				}
      }
      _serif = value;
    }
    private var _secondary:Boolean;

    public function get secondary():Boolean
    {
    	return _secondary;
    }

    public function set secondary(value:Boolean):void
    {
      if(value != !!_secondary){
        // toggle(valueToSelector("secondary"),value);
				if(value){
					setAttribute("secondary",true);
				}else{
					removeAttribute("secondary");
				}
      }
      _secondary = value;
    }

  }
}