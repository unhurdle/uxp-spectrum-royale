package com.unhurdle.spectrum
{
  COMPILE::JS{
		import org.apache.royale.core.WrappedHTMLElement;
	}
  
  public class LogicButton extends SpectrumBase
  {
    public function LogicButton()
    {
      super();
			type = "and";
    }
    
		private var textNode:TextNode;
		
		override protected function getTag():String{
			return "sp-button";
		}
		COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
			super.createElement();
			textNode = new TextNode("");
      textNode.element = element;
			addEventListener('click',clickHandler)
			return element;
    }

		private function clickHandler():void
		{
			if(!_disabled){
				type = type == 'and' ? 'or' : 'and';
			}
		}
			private var _type:String;

			public function get type():String
			{
				return _type || "";
			}

			[Inspectable(category="General", enumeration="and,or", defaultValue="and")]
			public function set type(value:String):void
			{
				if(value != _type){
					switch (value){
						// check that values are valid
						case "and":
							textNode.text = 'And';
							break;
						case "or":
							textNode.text = 'Or';
							break;
						default:
							throw new Error("Invalid type: " + value);
						}
						if(_type){
							// toggle(valueToSelector(_type), false);
							removeAttribute(_type);
						}
						if(value){
							// toggle(valueToSelector(value), true);
							setAttribute(value,true);
						}
						_type = value;
				}
			}
        private var _disabled:Boolean;

        public function get disabled():Boolean
        {
        	return getAttribute("disabled");//_disabled;
        }

        public function set disabled(value:Boolean):void
        {
					if(!!value != !!_disabled){
              // toggle("is-disabled",value);
						if(value){
							setAttribute("disabled",true);
						}else{
							removeAttribute("disabled");
						}
					}
        	_disabled = value;
        }
  }
}