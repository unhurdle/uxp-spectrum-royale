package com.unhurdle.spectrum
{
  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }

  public class DateField extends DatePicker
  {
    public function DateField()
    {
      super();
      // input.type = "date";
      // input.step = "1";
    }

    // private var _value:Date;

    public function get value():Date
    {
    	return new Date(text);
    }

    public function set value(value:Date):void
    {
    	text = value.toString();
    }
    override public function get text():String
    {
      var val:String = super.text;
      if(!val){
        return "";
      }
      //convert format
      var vaArr:Array = val.split("/");
      var month:String = vaArr[0];
      var day:String = vaArr[1];
      var year:String = vaArr[2];
      var formattedDate:String = year+"-"+month+"-"+day;
      return formattedDate;
    }
    //  public function get min():Date
    // {
    //   return new Date(input.min);
    // }

    // public function set min(value:Date):void
    // {
    //   input.min = ""+value;
    // }
    // public function get max():Date
    // {
    //   return new Date(input.max);
    // }

    // public function set max(value:Date):void
    // {
    //   input.max = "" + value;
    // }
    //  public function get step():Number
    // {
    //   return Number(input.step);
    // }

    // public function set step(value:Number):void
    // {
    //   input.step = "" + value;
    // }
    //  public function get disabled():Boolean
    // {
    //   return input.disabled;
    // }

    // public function set disabled(value:Boolean):void
    // {
    //   input.disabled = value;
    // }

    // private var input:HTMLInputElement;
    // COMPILE::JS
		// override protected function createElement():WrappedHTMLElement{
    //   var elem:WrappedHTMLElement = super.createElement();
    //   input = newElement("sp-date-picker") as HTMLInputElement;
    //   elem.appendChild(input);
    //   return elem;
    // }
  }
}