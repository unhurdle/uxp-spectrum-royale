package com.unhurdle.spectrum.utils
{
	import com.unhurdle.spectrum.Icon;
	import com.unhurdle.spectrum.UiIcon;
	import com.unhurdle.spectrum.const.IconType;

	public function generateIcon(selector:String):Icon
	{
		if(IconType.hasType(selector)){
			return new UiIcon(selector);
		}
		return new Icon(selector);
	}
}