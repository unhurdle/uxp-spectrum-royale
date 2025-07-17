package com.unhurdle.spectrum
{
  public class DialogContent extends TextGroup
  {
    public function DialogContent()
    {
      super();
      style = {"flex-grow": 0,"height": "100%"};
    }
    override protected function getSelector():String{
      return "spectrum-Dialog-content";
    }
  }
}