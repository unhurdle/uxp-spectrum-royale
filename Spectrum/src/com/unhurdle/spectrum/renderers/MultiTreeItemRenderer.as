package com.unhurdle.spectrum.renderers
{
  import org.apache.royale.events.MouseEvent;

  public class MultiTreeItemRenderer extends TreeItemRenderer
  {
    public function MultiTreeItemRenderer()
    {
      super();
    }
    override protected function handleChevronClick(ev:MouseEvent):void {
      // do nothing for multi select trees
    }
    override protected function setChevronStyle():void{
      chevronRightIcon.style = {"margin-right": "20px","margin-bottom": "0px"};
      if(isOpen){
          chevronRightIcon.setStyle("padding-bottom", "20px");
        } else {
          chevronRightIcon.setStyle("padding-bottom", "25px");
        }
    }
  }
}