package com.unhurdle.spectrum
{
//   import com.adobe.cep.CSInterface;
//   import com.adobe.cep.AppSkinInfo;
  import org.apache.royale.events.EventDispatcher;
//   import com.adobe.cep.CepColor;
  import org.apache.royale.events.Event;
  import org.apache.royale.test.async.Async;

  public class ThemeManager extends EventDispatcher
  {
		public static const THEME_CHANGED:String = "THEME_CHANGED";

		private static var _instance:ThemeManager;
		public static function get instance():ThemeManager{return getInstance()}
		public static function getInstance():ThemeManager {
			
			if (_instance == null){
				_instance = new ThemeManager(new SingletonEnforcer);
			}
			return _instance;
		}

    /**
     * ThemeManager is a singleton intialized by the application
     */
    public function ThemeManager(en:SingletonEnforcer)
    {
    }
		private var app:CEPApplication;
		public function init(application:CEPApplication):void {
			
			app = application;
			
			// Update the theme
			updateTheme();
			document['theme'].onUpdated.addListener(function (theme:*):void{
				app.colorstop = theme;
				_isLight = (theme == "darkest" || theme == "dark") ? false : true;
				dispatchEvent(new Event(THEME_CHANGED));
			});
			
			// Set the Event Listener for future theme changes
			// CSInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, onAppThemeColorChanged);
		}

		// public function getBackgroundColor(delta:Number):String{
		// 	return "#" + toHex(appSkinInfo.panelBackgroundColor.color as CepColor,delta);
		// }
		private var _backgroundColor:String;

		public function get backgroundColor():String
		{
			return _backgroundColor;
		}
		
		// Convert the Color object to string in hexadecimal format; 
		// private function toHex(color:CepColor, delta:Number=NaN):String {
			
		// 	function computeValue(value:Number, delta:Number):String {
		// 		var computedValue:Number = !isNaN(delta) ? value + delta : value;
		// 		if (computedValue < 0) {
		// 			computedValue = 0;
		// 		} else if (computedValue > 255) {
		// 			computedValue = 255;
		// 		}
				
		// 		computedValue = Math.floor(computedValue);
				
		// 		var computedStr:String = computedValue.toString(16);
		// 		return computedStr.length === 1 ? "0" + computedValue : computedStr;
		// 	}
			
		// 	var hex:String = "";
		// 	if (color) {
		// 		hex = computeValue(color.red, delta) + computeValue(color.green, delta) + computeValue(color.blue, delta);
		// 	}
		// 	return hex;
		// }


		// Callback for the CSInterface.THEME_COLOR_CHANGED_EVENT
		private function onAppThemeColorChanged(event:*):void {
			updateTheme();
		}
		// private var appSkinInfo:AppSkinInfo;
		private var _isLight:Boolean;

		public function get isLight():Boolean
		{
			return _isLight;
		}
		private function updateTheme():void
		{
			_isLight = false;
			//TODO changes this, this is getting the theme from Photoshop, but we need to get it from whichever app we are in
			var batchPlay:Function = require("photoshop").action.batchPlay;
			var arr:Array = [
				{
					"_obj": "get",
					"_target": [{"_property": "kuiBrightnessLevel"},{"_ref": "application","_enum": "ordinal","_value": "targetEnum"}],
					"_options": {"dialogOptions": "dontDisplay"}
				}
  			];
			var obj:Object = {"synchronousExecution": false};
			batchPlay(arr,obj).then(function(result:*):void{
				var val:String = result[0].kuiBrightnessLevel._value;
				if (val == "kPanelBrightnessDarkGray"){
					app.colorstop = "darkest";
					trace('darkest');
				}
				if (val == "kPanelBrightnessMediumGray"){
					app.colorstop = "dark";
					trace('dark');
				}
				if (val == "kPanelBrightnessLightGray"){
					app.colorstop = "light";
					trace('light');
					_isLight = true;
				}
				if (val == "kPanelBrightnessOriginal"){
					app.colorstop = "lightest";
					trace('lightest');
					_isLight = true;
				}
				dispatchEvent(new Event(THEME_CHANGED));
			}).catch(function(err:*):void{
				trace('err',err);
			});

		}

  }
}
class SingletonEnforcer{
}