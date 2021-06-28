package com.unhurdle.spectrum
{
  public class PasswordField extends TextField
  {
    public function PasswordField()
    {
      super();
      //TODO
      // input.type = "password";
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
  }
}