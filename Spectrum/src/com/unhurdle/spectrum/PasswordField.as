package com.unhurdle.spectrum
{
  //TODO minlength, maxlength, size
  public class PasswordField extends TextField
  {
    public function PasswordField()
    {
      super();
      input.setAttribute('type','password');
    }

     public function get minlength():Number
    {
      //TODO
      return 1;//Number(input.min);
    }

    public function set minlength(value:Number):void
    {
      //TODO
      // input.min = ""+value;
    }
    public function get maxlength():Number
    {
      //TODO
      return 1//Number(input.max);
    }

    public function set maxlength(value:Number):void
    {
      // input.max = "" + value;
    }
     public function get size():Number
    {
      //TODO
      return 1; //input.size;
    }

    public function set size(value:Number):void
    {
      //TODO
      // input.size = value;
    }
    override public function set text(value:String):void
    {
      super.text = value;
      setDivAsPassword();
    }
    COMPILE::JS
    override protected function handleBlur(ev:Event):void
    {
      super.handleBlur(ev);
      setDivAsPassword();
    }
    private function setDivAsPassword():void
    {
      //need to test this on Windows
      var isMac:Boolean = require('os').platform() == "darwin";
      var maskValue:String = isMac ? "●" : "*";
      if(input.value){
        var masked:String = maskValue.repeat(input.value.length);
        div.text = masked;
      }
    }
  }
}