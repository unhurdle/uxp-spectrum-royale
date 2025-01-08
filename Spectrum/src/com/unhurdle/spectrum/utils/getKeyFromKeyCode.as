package com.unhurdle.spectrum.utils
{
  import org.apache.royale.events.utils.WhitespaceKeys;
  import org.apache.royale.events.utils.NavigationKeys;
  import org.apache.royale.events.utils.EditingKeys;

  public function getKeyFromKeyCode(keyCode:String):String{
    var key:String;
    switch(keyCode)
    {
      case "13":
        key = WhitespaceKeys.ENTER;
        break;
      case "8":
        key =  EditingKeys.BACKSPACE;
        break;
      case "40":
        key = NavigationKeys.DOWN;
        break;
      case "38":
        key = NavigationKeys.UP;
        break;
      case "9":
        key = WhitespaceKeys.TAB;
        break;
      default:
        return null;
    }
    return key;
  }
}