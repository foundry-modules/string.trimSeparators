/**
* jquery.trimSeparators
* Trims whitespace and separators.
* https://github.com/jstonne/jquery.trimSeparators
*
* Turns this: ",df        ,,,  ,,,abc, sdasd sdfsdf    ,   asdsad, ,, , "
* into this : "df,abc,sdasd sdfsdf,asdsad"
*
* Requires jquery.distinct
* https://github.com/jstonne/jquery.distinct
*
* Copyright (c) 2012 Jensen Tonne
* www.jstonne.com
*
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/

$.trimSeparators = function(keyword, separator, removeDuplicates) {

	var s = separator;

	keyword = keyword
		.replace(new RegExp('^['+s+'\\s]+|['+s+',\\s]+$','g'), '') // /^[,\s]+|[,\s]+$/g
		.replace(new RegExp(s+'['+s+'\\s]*'+s,'g'), s)             // /,[,\s]*,/g
		.replace(new RegExp('[\\s]+'+s,'g'), s)                    // /[\s]+,/g
		.replace(new RegExp(s+'[\\s]+','g'), s);                   // /,[\s]+/g

	if (removeDuplicates) {
		keyword = $.distinct(keyword.split(s)).join(s);
	}

	return keyword;
};
