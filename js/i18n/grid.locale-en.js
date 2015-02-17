/**
 * jqGrid English Translation
 * Tony Tomov tony@trirand.com
 * modified by Oleg Kiriljuk oleg.kiriljuk@ok-soft-gmbh.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/

/*global jQuery */
(function ($) {
    "use strict";
    var locInfo = {
        defaults: {
            recordtext: "View {0} - {1} of {2}",
            emptyrecords: "No records to view",
            loadtext: "Loading...",
            pgtext: "Page {0} of {1}",
            pgfirst: "First Page",
            pglast: "Last Page",
            pgnext: "Next Page",
            pgprev: "Previous Page",
            pgrecs: "Records per Page",
            showhide: "Toggle Expand Collapse Grid",
			savetext: "Saving..."
        },
        search: {
            caption: "Search...",
            Find: "Find",
            Reset: "Reset",
            odata: [
                { oper: "eq", text: "equal" },
                { oper: "ne", text: "not equal" },
                { oper: "lt", text: "less" },
                { oper: "le", text: "less or equal" },
                { oper: "gt", text: "greater" },
                { oper: "ge", text: "greater or equal" },
                { oper: "bw", text: "begins with" },
                { oper: "bn", text: "does not begin with" },
                { oper: "in", text: "is in" },
                { oper: "ni", text: "is not in" },
                { oper: "ew", text: "ends with" },
                { oper: "en", text: "does not end with" },
                { oper: "cn", text: "contains" },
                { oper: "nc", text: "does not contain" },
                { oper: "nu", text: "is null" },
                { oper: "nn", text: "is not null" }
            ],
            groupOps: [
                { op: "AND", text: "all" },
                { op: "OR", text: "any" }
            ],
            operandTitle: "Click to select search operation.",
            resetTitle: "Reset Search Value"
        },
        edit: {
            addCaption: "Add Record",
            editCaption: "Edit Record",
            bSubmit: "Submit",
            bCancel: "Cancel",
            bClose: "Close",
            saveData: "Data has been changed! Save changes?",
            bYes: "Yes",
            bNo: "No",
            bExit: "Cancel",
            msg: {
                required: "Field is required",
                number: "Please, enter valid number",
                minValue: "value must be greater than or equal to ",
                maxValue: "value must be less than or equal to",
                email: "is not a valid e-mail",
                integer: "Please, enter valid integer value",
                date: "Please, enter valid date value",
                url: "is not a valid URL. Prefix required ('http://' or 'https://')",
                nodefined: " is not defined!",
                novalue: " return value is required!",
                customarray: "Custom function should return array!",
                customfcheck: "Custom function should be present in case of custom checking!"
            }
        },
        view: {
            caption: "View Record",
            bClose: "Close"
        },
        del: {
            caption: "Delete",
            msg: "Delete selected record(s)?",
            bSubmit: "Delete",
            bCancel: "Cancel"
        },
        nav: {
            edittext: "",
            edittitle: "Edit selected row",
            addtext: "",
            addtitle: "Add new row",
            deltext: "",
            deltitle: "Delete selected row",
            searchtext: "",
            searchtitle: "Find records",
            refreshtext: "",
            refreshtitle: "Reload Grid",
            alertcap: "Warning",
            alerttext: "Please, select row",
            viewtext: "",
            viewtitle: "View selected row"
        },
        col: {
            caption: "Select columns",
            bSubmit: "Ok",
            bCancel: "Cancel"
        },
        errors: {
            errcap: "Error",
            nourl: "No url is set",
            norecords: "No records to process",
            model: "Length of colNames <> colModel!"
        },
        formatter: {
            integer: {
                thousandsSeparator: ",",
                defaultValue: "0"
            },
            number: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2,
                defaultValue: "0.00"
            },
            currency: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2,
                prefix: "",
                suffix: "",
                defaultValue: "0.00"
            },
            date: {
                dayNames: [
                    "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
                    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                ],
                monthNames: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                ],
                AmPm: ["am", "pm", "AM", "PM"],
                S: function (j) {
                    var ending = ["st", "nd", "rd", "th"];
                    return j < 11 || j > 13 ? ending[Math.min((j - 1) % 10, 3)] : "th";
                },
                srcformat: "Y-m-d",
                newformat: "n/j/Y",
                masks: {
                    // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
                    // and see http://docs.jquery.com/UI/Datepicker/formatDate
                    // and https://github.com/jquery/globalize#dates for alternative formats used frequently
                    // one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
                    // information about date, time, numbers and currency formats used in different countries
                    // one should just convert the information in PHP format
                    // short date:
                    //    n - Numeric representation of a month, without leading zeros
                    //    j - Day of the month without leading zeros
                    //    Y - A full numeric representation of a year, 4 digits
                    // example: 3/1/2012 which means 1 March 2012
                    ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
                    // long date:
                    //    l - A full textual representation of the day of the week
                    //    F - A full textual representation of a month
                    //    d - Day of the month, 2 digits with leading zeros
                    //    Y - A full numeric representation of a year, 4 digits
                    LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
                    // long date with long time:
                    //    l - A full textual representation of the day of the week
                    //    F - A full textual representation of a month
                    //    d - Day of the month, 2 digits with leading zeros
                    //    Y - A full numeric representation of a year, 4 digits
                    //    g - 12-hour format of an hour without leading zeros
                    //    i - Minutes with leading zeros
                    //    s - Seconds, with leading zeros
                    //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                    FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
                    // month day:
                    //    F - A full textual representation of a month
                    //    d - Day of the month, 2 digits with leading zeros
                    MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
                    // short time (without seconds)
                    //    g - 12-hour format of an hour without leading zeros
                    //    i - Minutes with leading zeros
                    //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                    ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
                    // long time (with seconds)
                    //    g - 12-hour format of an hour without leading zeros
                    //    i - Minutes with leading zeros
                    //    s - Seconds, with leading zeros
                    //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                    LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
                    // month with year
                    //    Y - A full numeric representation of a year, 4 digits
                    //    F - A full textual representation of a month
                    YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
                }
            }
        }
    };
    $.jgrid = $.jgrid || {};
    $.jgrid.locales = $.jgrid.locales || {};
    $.jgrid.locales.en = $.jgrid.locales["en-US"] = locInfo;
    // we set locInfo under $.jgrid only to have more compatibility with the previous
    // version of jqGrid. All new code should get string resources only regional part directly
    // using getRes function.
    $.extend(true, $.jgrid, {
        defaults: {
            //direction: "ltr",
            locale: "en-US",
            localeName: "English (United States)",
            localeNameEnglish: "English (United States)",
        },
        locales: {
            // In general the property name is free, but it's recommended to use the names based on
            // http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
            // http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
            // One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
            // if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
            en: locInfo,        // set default locale for English
            "en-US": locInfo    // and for English US
        }
    });
}(jQuery));
