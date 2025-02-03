package com.unhurdle.spectrum.utils
{
    public class svgLookup
    {
        private function svgLookup(){}
        private static var lookup:Object = {
            "#spectrum-css-icon-AlertMedium":'<path d="M10.563 2.206l-9.249 16.55a.5.5 0 00.436.744h18.5a.5.5 0 00.436-.744l-9.251-16.55a.5.5 0 00-.872 0zm1.436 15.044a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-1.5a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm0-3.5a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-6a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25z"/>',
            // BreadCrumbs
            "#spectrum-css-icon-ChevronRightSmall":'<path d="M7 5a.747.747 0 00-.22-.53L2.54.23a.75.75 0 10-1.06 1.06L5.19 5 1.48 8.71a.75.75 0 101.06 1.06l4.24-4.24A.747.747 0 007 5z" />'
        }
        public static function getSvg(id:String):String{
            return lookup[id];
        }
    }
}