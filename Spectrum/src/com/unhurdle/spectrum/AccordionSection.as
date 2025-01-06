package com.unhurdle.spectrum
{
  import com.unhurdle.spectrum.const.IconType;

  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }
    import org.apache.royale.html.elements.H3;
    import org.apache.royale.core.IChild;
    import com.unhurdle.spectrum.utils.generateIcon;
    import org.apache.royale.events.Event;

	[Event(name="openChanged", type="org.apache.royale.events.Event")]
  public class AccordionSection extends Group
  {
    public function AccordionSection()
    {
      super();
    }

    private var _headerText:String;

    public function get headerText():String
    {
    	return headerButton.text;
    }

    public function set headerText(value:String):void
    {
    	headerButton.text = value;
    }
    private var _disabled:Boolean = false;

    public function get disabled():Boolean
    {
    	return _disabled;
    }

    public function set disabled(value:Boolean):void
    {
      if(value != _disabled){
      	_disabled = value;
        toggle("is-disabled",value);
      }
    }
    private var _open:Boolean = false;

    public function get open():Boolean
    {
    	return _open;
    }

    public function set open(value:Boolean):void
    {
      if(value != _open){
      	_open = value;
        toggle("is-open",value);
        dispatchEvent(new Event("openChanged"));
        var type:String = value ? IconType.CHEVRON_DOWN_MEDIUM:IconType.CHEVRON_RIGHT_MEDIUM;
        headerIcon.selector = Icon.getCSSTypeSelector(type);
        headerIcon.type = type;
      }
    }
    private function toggleSection():void{
      if(!disabled){
        open = !open;
      }
    }
    /**
     * modify the following methods to ignore the header element
     */
    override public function get numElements():int{
      return super.numElements -1;
    }
    override public function addElementAt(c:IChild, index:int, dispatchEvent:Boolean = true):void{
      super.addElementAt(c,index+1,dispatchEvent);
    }
    override public function getElementAt(index:int):IChild{
      return super.getElementAt(index+1);
    }
    override public function getElementIndex(c:IChild):int{
      return super.getElementIndex(c) + 1;
    }

    override protected function getSelector():String{
      return "spectrum-Accordion-item";
    }

    protected var headerElem:H3;
    
    protected var headerButton:TextNode;

    protected var headerIcon:Icon;

    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
      super.createElement();
			headerElem = new H3();
      headerElem.className = appendSelector("Heading");

			headerButton = new TextNode("button");
      (headerButton.element as HTMLButtonElement).type = "button";
      headerButton.className = appendSelector("Header");

      headerButton.element.addEventListener("click",toggleSection)

      headerElem.element.appendChild(headerButton.element);

      var type:String = IconType.CHEVRON_RIGHT_MEDIUM;
      headerIcon = new Icon(Icon.getCSSTypeSelector(type));
      headerIcon.className = appendSelector("Indicator");
      // headerIcon.type = type;
      headerElem.addElement(headerIcon);

      addElement(headerElem);

      return element;
    }

  }
}