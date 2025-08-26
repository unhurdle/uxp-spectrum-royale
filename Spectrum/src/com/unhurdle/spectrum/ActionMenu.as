package com.unhurdle.spectrum
{
  COMPILE::JS
  {
    import org.apache.royale.core.WrappedHTMLElement;
  }
  // import org.apache.royale.html.List;
  import com.unhurdle.spectrum.const.IconPrefix;
  import com.unhurdle.spectrum.data.MenuItem;

  import org.apache.royale.collections.IArrayList;
  import org.apache.royale.core.IParentIUIBase;
  import org.apache.royale.core.IPopUpHost;
  import org.apache.royale.events.MouseEvent;
  import org.apache.royale.geom.Point;
  import org.apache.royale.html.util.getLabelFromData;
  import org.apache.royale.utils.PointUtils;
  import org.apache.royale.utils.UIUtils;

  [Event(name="change", type="org.apache.royale.events.Event")]
  [Event(name="beforeShow", type="org.apache.royale.events.Event")]
  public class ActionMenu extends ActionButton
  {
    public static const BEFORE_SHOW:String = "beforeShow";
    public static var _openMenu:ActionMenu;
    public function ActionMenu()
    {
      super();
    }
    override protected function getTag():String{
      return "div";
    }

    override protected function createFlyoutIcon():void{
      // do nothing because we don't want the icon
    }
 
    COMPILE::JS
    override protected function createElement():WrappedHTMLElement{
      
      var elem:WrappedHTMLElement = super.createElement();
      elem.style.padding = "0 6px";
      elem.style.marginBottom = "5px";
      // button.className = //??
      icon = IconPrefix._18 + "More";
      addEventListener(MouseEvent.MOUSE_DOWN,toggleMenu);
      
      return elem;
    }

    override public function set dataProvider(value:Object):void{
      if(value is Array){
        convertArray(value);
      } else if(value is IArrayList){
        convertArray(value.source);
      }
      super.dataProvider = value;
      if(!popover){
        createPopover();
      }
    }

    private function convertArray(value:Object):void{
      var len:int = value.length;
      for(var i:int = 0;i<len;i++){
        if(value[i] is MenuItem){
          continue;
        }

        var item:MenuItem = new MenuItem(getLabelFromData(this,value[i]));
        value[i] = item;
      }
    }

    private function toggleMenu(event:MouseEvent):void{
      // For now button is only available in the JS version
      COMPILE::JS
      {
        if(event.button != 0){
          //only handle left click
          return;
        }
      }
      event.preventDefault();
      //mouseEvent
      if(!showEmptyMenu && (!dataProvider || !dataProvider.length)){
        return;
      }
      if(_openMenu && _openMenu != this){
        _openMenu.closePopup();
      }
      event.stopImmediatePropagation();
      var shown:Boolean = popover && popover.open;
      if(shown){// close it
        closePopup();

      } else {//open it
        showMenu();
      }
    }

    override public function showMenu():void{
      super.showMenu();
      popover.setStyle('max-height','');
      selected = true;
      _openMenu = this;
    }
    override protected function positionPopup():void{
      var isMac:Boolean = require('os').platform() == "darwin";
        popover.setStyle("pointer-events","");
        var popoverWidth:Number = popover.width;
        var dataProvider:Array = popover.list?.dataProvider as Array;
        if(!popoverWidth){
          var labelLength:int = 0;
          if(dataProvider && dataProvider.length){
            for(var i:int=0;i<dataProvider.length;i++){
              var item:MenuItem = dataProvider[i] as MenuItem;
              if(item && item.label.length > labelLength){//find the longest text
                labelLength = item.label.length;
              }
            }
            if(labelLength){
              var averageCharWidth:Number = labelLength > 7 ? 6.2 : 7; // rough estimate for 14px Adobe Clean or similar fonts
              var paddingW:Number = isMac ? 24 : 28;
              popoverWidth = (labelLength * averageCharWidth) + paddingW;
            }
          }
        }
        if(dataProvider && dataProvider.length){
          var h:Number = 0;
          for(i = 0;i<dataProvider.length;i++){
            var menuItem:MenuItem = dataProvider[i] as MenuItem;
            if(menuItem.isDivider){
              h += isMac ? 7 : 9; // divider height
            } else if(menuItem.imageIcon){
              h += isMac ? 32.3 : 33.9; // menu item with imageIcon height
            } else {
              h += 32.2; // menu item height
            }
          }
          var paddingH:Number = isMac ? 3 : 6; // padding
          popover.height = h + paddingH;
        }
        popoverWidth++;//added +1 cuz the browser was rounding it down
  			var popupHost:IPopUpHost = UIUtils.findPopUpHost(this);
        var offset:Point = PointUtils.localToGlobal(new Point(),popupHost);
				var origin:Point = new Point(0, height - 6);
				var relocated:Point = PointUtils.localToGlobal(origin,this);
        relocated.x -= offset.x;
        relocated.y -= offset.y;
				popover.y = determinePosition(relocated.y);
        popover.x = relocated.x;
        if(_alignTofit){
					if(_alignRight){
						popover.x = Math.max(0,popover.x - (popoverWidth - width));
					} else {
						popover.x = Math.min(popover.x,(popupHost as IParentIUIBase).width - popoverWidth);
					}
					return;
				}
        if(_alignRight && popoverWidth>width){
          popover.x -= popoverWidth-width;
        }
    }
    override protected function closePopup():void{
      super.closePopup();
      selected = false;
      _openMenu = null;
    }
    private var _alignRight:Boolean;

		public function get alignRight():Boolean
		{
			return _alignRight;
		}

		public function set alignRight(value:Boolean):void
		{
			_alignRight = value;
     
      // menu.alignRight = value;
		}
    private var _alignTofit:Boolean;

		public function get alignTofit():Boolean
		{
			return _alignTofit;
		}

		public function set alignTofit(value:Boolean):void
		{
			_alignTofit = value;
		}

    public function determinePosition(ptY:Number):Number
		{
			var screenHeight:Number = (UIUtils.findPopUpHost(this).popUpParent as IParentIUIBase).height;
			var h:Number = popover.height;
			if(ptY + h <= screenHeight){
				popover.position = "bottom";
				return ptY;
			}
      var topSpace:Number = ptY - this.height + 7;
			var bottomSpace:Number = screenHeight - ptY - 7;
			var avaliableSpace:Number;
			if(topSpace > bottomSpace){
        if(ptY -  h > 0){
					ptY -= h + 20;
				} else {
					ptY = 5;
				}
				popover.position = "top";
				avaliableSpace = topSpace;
			} else {
				popover.position = "bottom";
				avaliableSpace = bottomSpace;
			}
			if(avaliableSpace < popover.height){
				popover.setStyle('max-height',avaliableSpace + 'px');
			}
      return ptY;
		}
  }
}