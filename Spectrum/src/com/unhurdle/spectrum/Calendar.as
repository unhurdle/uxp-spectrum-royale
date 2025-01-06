package com.unhurdle.spectrum
{
    COMPILE::JS {
    import org.apache.royale.core.WrappedHTMLElement;
    }

    import org.apache.royale.events.Event;
    import org.apache.royale.events.MouseEvent;
  
    import org.apache.royale.html.elements.Td;
    import org.apache.royale.html.elements.Tr;
    import org.apache.royale.html.elements.Table;
    import org.apache.royale.html.elements.Tbody;
    import org.apache.royale.html.elements.Div;
    import com.unhurdle.spectrum.model.DatePickerModel;
    import com.unhurdle.spectrum.utils.DateUtil;
    import org.apache.royale.events.ValueEvent;
    import com.unhurdle.spectrum.utils.generateIcon;
 
    [Event(name="change", type="org.apache.royale.events.Event")]
	[Event(name="selectedDateChanged", type="org.apache.royale.events.ValueEvent")]
    public class Calendar extends Group
    {
    /**
     * <inject_html>
     * <link rel="stylesheet" href="assets/css/components/calendar/dist.css">
     * </inject_html>
     * 
     */

        public function Calendar()
        {
            super();
            model = datePickerModel = new DatePickerModel();
            model.addEventListener("selectedDateChanged",function(ev:Event):void{
                dispatchEvent(new ValueEvent("selectedDateChanged",selectedDate));
                dispatchEvent(new Event("change"));
            });
            addEventListener("displayedMonthChanged",handleModelChange);
        }

        override protected function getSelector():String{
        return "spectrum-Calendar";
        }
        
        private var datePickerModel:DatePickerModel;
        
        private var title:TextNode;
        private var _text:String;
        private var prev:ActionButton;
        private var next:ActionButton;
        private var _disabled:Boolean;
        private var table:FlexContainer;
        private var calenderBody:org.apache.royale.html.elements.Tbody;
        private var _startDate:Date;
        private var _endDate:Date;
        private var displayedDates:Vector.<CalendarDay>;

        private var _useNarrowHeaders:Boolean = false;

        public function get useNarrowHeaders():Boolean
        {
        	return _useNarrowHeaders;
        }

        public function set useNarrowHeaders(value:Boolean):void
        {
        	_useNarrowHeaders = value;
        }

        private function getWeekdays(i:int):String
        {
            if(useNarrowHeaders){
                return datePickerModel.narrowDayNames[i]; 
            }
            return datePickerModel.shortDayNames[i]; 
        }

        public function get disabled():Boolean
        {
            return _disabled;
        }
        
        public function set disabled(value:Boolean):void
        {
            _disabled = value;
            prev.disabled = value;
            next.disabled = value;
        }

        public function get dayNames():Array
        {
            return datePickerModel.dayNames;
        }
        public function get monthNames():Array
        {
            return datePickerModel.monthNames;
        }
        

        public function get displayedYear():Number
        {
            return datePickerModel.displayedYear;
        }
        

        public function get displayedMonth():Number
        {
            return datePickerModel.displayedMonth;
        }
        
        public function get firstDayOfWeek():Number
        {
            return datePickerModel.firstDayOfWeek;
        }
        
        
        public function get days():Array
        {
            return datePickerModel.days;
        }
        

        private var _today:Date;

        public function get today():Date
        {
            if(!_today){
                _today = new Date();
            }
        	return _today;
        }

        
        public function get selectedDate():Date
        {
            return datePickerModel.selectedDate;
        }
		public function set selectedDate(value:Date):void
		{
			datePickerModel.selectedDate = value;
		}
        

        public function get startDate():Date
        {
        	return _startDate;
        }

        public function set startDate(value:Date):void
        {
        	_startDate = value;
            updateDisplay();
        }

        public function get endDate():Date
        {
        	return _endDate;
        }

        public function set endDate(value:Date):void
        {
        	_endDate = value;
            updateDisplay();
        }
        private function updateCalendar():void
        {   
            datePickerModel.updateCalendar();
            updateDisplay();
        }
        
        public function getIndexForSelectedDate():Number
        {
            return datePickerModel.getIndexForSelectedDate();
        }
        
        private function updateDisplay():void
        {
            title.text = datePickerModel.monthNames[displayedMonth] + " " + String(displayedYear);
            setDates();
        }
        
        private function handleModelChange(event:Event):void{   
          updateDisplay();
        }

        public function selectRange(start:Date,end:Date):void{   
            for each(var day:CalendarDay in displayedDates){
                day.setRange(start,end);
            }
        }

        private function prevMonthClickHandler(event:MouseEvent):void
        {
            event.preventDefault();
            var month:Number = displayedMonth - 1;
            var year:Number  = displayedYear;
            if (month < 0) {
                month = 11;
                year--;
            }
            datePickerModel.displayedMonth = month;
            datePickerModel.displayedYear = year;
            updateDisplay();
        }

        
        private function nextMonthClickHandler(event:MouseEvent):void
        {
            event.preventDefault();
            var month:Number = displayedMonth + 1;
            var year:Number  = displayedYear;
            if (month >= 12) {
                month = 0;
                year++;
            }
            datePickerModel.displayedMonth = month;
            datePickerModel.displayedYear = year;
            updateDisplay();
        }
        COMPILE::JS
        override public function addedToParent():void{
            super.addedToParent();
            if(!displayedYear){
                datePickerModel.displayedYear = today.getFullYear();
            }
            if(!displayedMonth){
                datePickerModel.displayedMonth = today.getMonth();
            }
            var body:FlexContainer = new FlexContainer();
            body.className = appendSelector("-body");
            body.setAttribute("role","grid");
            // body.tabIndex = 0;

            table = new FlexContainer();
            table.vertical = true;
            table.className = appendSelector("-table");
            table.setAttribute("role","presentation");

            var daysOfTheWeekHeader:FlexContainer = new FlexContainer();
            daysOfTheWeekHeader.setAttribute("role","presentation");

            var daysOfTheWeek:FlexContainer = new FlexContainer()
            daysOfTheWeek.setAttribute("role","row");

            for(var i:int = 0 ; i <7; i++){
                var dayOfWeek:FlexContainer = new FlexContainer(); 
                dayOfWeek.className = appendSelector("-tableCell"); 
                dayOfWeek.setAttribute("role","columnheader");
                dayOfWeek.setAttribute("scope","col");

                var d:TextNode = new TextNode('abbr');  
                d.className = appendSelector("-dayOfWeek");
                d.text = getWeekdays(i); // need to fix text-transform: uppercase;
                d.element.title = datePickerModel.dayNames[i];
                dayOfWeek.element.appendChild(d.element); 
                daysOfTheWeek.addElement(dayOfWeek); 
            }
            
            daysOfTheWeekHeader.addElement(daysOfTheWeek); 
            table.addElement(daysOfTheWeekHeader);
            body.addElement(table);
            table.addedToParent();
            addElement(body);
            
            updateCalendar();
        }
        COMPILE::JS
        override protected function createElement():WrappedHTMLElement{
            super.createElement();
            var styleStr:String = "z-index:1;"; // TODO check the width
            setAttribute("style",styleStr);

            var header:Div = new Div();
            header.className = appendSelector("-header");
            
            title = new TextNode('div');   
            title.className = appendSelector("-title");
            title.setAttribute("role","heading");
            header.element.appendChild(title.element);
    
            prev = new ActionButton();
            prev.quiet = true;
            prev.className = appendSelector("-prevMonth");
            prev.element.title = "Previous";
            prev.addEventListener("click",prevMonthClickHandler);
            var type:String = "ChevronLeftLarge";
            var prevIcon:Icon = generateIcon(type);
            prevIcon.type = type;
            prev.addElement(prevIcon);
            header.addElement(prev);

            next = new ActionButton();
            next.quiet = true;
            next.className = appendSelector("-nextMonth");
            next.element.title = "Next";
            next.addEventListener("click",nextMonthClickHandler);
            type = "ChevronRightLarge";
            var nextIcon:Icon = generateIcon(type);
            nextIcon.type = type;
            next.addElement(nextIcon);
            header.addElement(next);
            addElement(header);

            return element
        }

        COMPILE::SWF
        private function setDates():void{}

        COMPILE::JS
        private function setDates():void{
            displayedDates = new Vector.<CalendarDay>();
            if(table.numElements && calenderBody){
                table.removeElement(calenderBody);
            }
            calenderBody = new org.apache.royale.html.elements.Tbody();
            calenderBody.setAttribute("role","presentation");
            var l:int = 0;
            for (var k:int = 0; k<6;k++,l--){
                var calenderRow:FlexContainer = new FlexContainer();
                calenderRow.setAttribute("role","row");
                var addRow:Boolean = true;
               for(var j:int = 0; j<7; j++,l++){
                    var cell:FlexContainer = new FlexContainer();  
                    cell.setAttribute("role", "gridcell");
                    cell.className = appendSelector("-tableCell");
                    //TODO is this correct?
                    // cell.tabIndex = -1;
                    var span:CalendarDay = new CalendarDay();
                    if(j == 0){
                        span.firstInWeek = true;
                    } else if (j == 6){
                        span.lastInWeek = true;
                    }
                    if(days[k+l] && days[k + l].getDate() == 1){
                        span.firstInMonth = true;
                    } else if(days[k + l] && new Date(days[k + l].getTime() + 86400000).getDate() === 1){
                        span.lastInMonth = true;
                    }
                    span.disabled = disabled;
                    if(span.firstInWeek && k+l > 7 && !days[k+l]){
                        // only need 5 rows.
                        addRow = false;
                        break;
                    }
                    displayedDates.push(span);
                    if(days[k+l]){
                        span.isToday = days[k+l].toDateString() == today.toDateString();
                        cell.element.title = DateUtil.getDateString(days[k + l]);
                        span.date = days[k+l] as Date;
                        
                        span.addEventListener(MouseEvent.CLICK,handleSelectedDay);
                    }else{
                        span.isOutsideMonth = true;
                    }
                    cell.addElement(span);
                    calenderRow.addElement(cell); 
                }
                if(addRow){
                    calenderBody.addElement(calenderRow);
                }
            }
            table.addElement(calenderBody);
            var start:Date = selectedDate;
            var end:Date = selectedDate;
            if(startDate){
                start = startDate;
            }
            if(endDate){
                end = endDate;
            }
            selectRange(start,end);
        }

        private function handleSelectedDay(ev:*):void{
            var clickedDay:CalendarDay = ev.target as CalendarDay;
            var date:Date = clickedDay.date;
            var start:Date = date;
            var end:Date = date;
            if(startDate){
                if(!endDate && date>startDate){
                    start = startDate;
                }
                else{
                    return;
                }
            }
            else{
                if(endDate){
                    if(date <endDate){
                        end = endDate;
                    }
                    else{
                        return;
                    }
                }
            }
            datePickerModel.selectedDate = date;
            if(elementSelected){//remove selected from last selected element
                elementSelected.selected = false;
            }
            selectRange(start,end);
            elementSelected = clickedDay;
        }
        private var elementSelected:CalendarDay;

        //TODO add is-focused!! we need a lits of event dates
        ///////////////////////////////////////////how to do???
    }
}