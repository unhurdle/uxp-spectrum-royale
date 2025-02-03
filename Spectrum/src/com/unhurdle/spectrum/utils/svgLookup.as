package com.unhurdle.spectrum.utils
{
    public class svgLookup
    {
        private function svgLookup(){}
        private static var lookup:Object = {
            "#spectrum-css-icon-AlertMedium":'<path d="M10.563 2.206l-9.249 16.55a.5.5 0 00.436.744h18.5a.5.5 0 00.436-.744l-9.251-16.55a.5.5 0 00-.872 0zm1.436 15.044a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-1.5a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm0-3.5a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-6a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25z"/>',
            // BreadCrumbs
            "#spectrum-css-icon-ChevronRightSmall":'<path d="M7 5a.747.747 0 00-.22-.53L2.54.23a.75.75 0 10-1.06 1.06L5.19 5 1.48 8.71a.75.75 0 101.06 1.06l4.24-4.24A.747.747 0 007 5z" />',
            "#spectrum-icon-24-ViewGrid":'<path d="M14 6H6a2 2 0 0 0-2 2v8h10zm4 0h10v10H18zm0 28h10v10H18zm0-14h10v10H18zM32 6v10h10V8a2 2 0 0 0-2-2zM4 20h10v10H4zm28 24h8a2 2 0 0 0 2-2v-8H32zm0-24h10v10H32zM14 34H4v8a2 2 0 0 0 2 2h8z" />',
            "#spectrum-icon-24-ViewList": '<rect height="10" rx="2" ry="2" width="10" x="4" y="6"></rect><rect height="10" rx="2" ry="2" width="10" x="4" y="20"></rect><rect height="10" rx="2" ry="2" width="10" x="4" y="34"></rect><rect height="6" rx="1" ry="1" width="24" x="18" y="8"></rect><rect height="6" rx="1" ry="1" width="24" x="18" y="22"></rect><rect height="6" rx="1" ry="1" width="24" x="18" y="36"></rect>',
            "#spectrum-icon-24-ViewDetail": '<path d="M45.7 42.3l-7.161-7.161a10.1 10.1 0 1 0-3.395 3.395L42.3 45.7c.469.469 2.5.89 3.394 0a2.444 2.444 0 0 0 .006-3.4zM23.8 30a6.2 6.2 0 1 1 6.2 6.2 6.2 6.2 0 0 1-6.2-6.2z"></path><path d="M17.365 36H8V8h28v9.365a14.024 14.024 0 0 1 4 2.846V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h14.211a14.024 14.024 0 0 1-2.846-4z"></path>',
            // we mostly use this prefix: spectrum-icon-18
            "#spectrum-icon-18-ViewList":'<rect height="8" rx="1" ry="1" width="8" x="2" y="2"></rect><rect height="4" rx=".5" ry=".5" width="22" x="12" y="4"></rect><rect height="4" rx=".5" ry=".5" width="22" x="12" y="16"></rect><rect height="4" rx=".5" ry=".5" width="22" x="12" y="28"></rect><rect height="8" rx="1" ry="1" width="8" x="2" y="14"></rect><rect height="8" rx="1" ry="1" width="8" x="2" y="26"></rect>',
            "#spectrum-icon-18-ViewGrid":'<path d="M10 10H2V3a1 1 0 0 1 1-1h7zm4-8h8v8h-8zm20 8h-8V2h7a1 1 0 0 1 1 1zM2 14h8v8H2zm12 0h8v8h-8zm12 0h8v8h-8zM10 34H3a1 1 0 0 1-1-1v-7h8zm4-8h8v8h-8zm19 8h-7v-8h8v7a1 1 0 0 1-1 1z" />',
            "#spectrum-css-icon-Magnifier": '<path d="M19.77 18.71l-5.464-5.464a7.503 7.503 0 10-1.06 1.06l5.463 5.464a.75.75 0 101.061-1.06zM2.5 8.5a6 6 0 116 6 6.007 6.007 0 01-6-6z" class="spectrum-UIIcon--large"/><path d="M15.77 14.71l-4.534-4.535a6.014 6.014 0 10-1.06 1.06l4.533 4.535a.75.75 0 101.061-1.06zM6.5 11A4.5 4.5 0 1111 6.5 4.505 4.505 0 016.5 11z" class="spectrum-UIIcon--medium"/>'
        }
        public static function getSvg(id:String):String{
            return lookup[id];
        }
    }
}