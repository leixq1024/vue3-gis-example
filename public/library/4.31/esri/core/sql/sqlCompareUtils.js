// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./errorSupport ./sqlDateParsingUtils ./SqlTimestampOffset ./UnknownTimeZone ../../chunks/datetime".split(" "),function(h,d,c,n,k,l){function p(b){return c.isDateTime(b)||c.isTimestampOffset(b)?!0:!1}function r(b){return c.isDateTime(b)||c.isDateOnly(b)||c.isTimestampOffset(b)||c.isTimeOnly(b)?!0:!1}function m(b){if(c.isDateTime(b))return b.toMillis();if(c.isDateOnly(b))return b.toNumber();if(c.isTimestampOffset(b))return b.toMilliseconds();throw new d.SqlError(d.SqlErrorCodes.InvalidDataType);
}function f(b,a,e){switch(e){case "\x3c\x3e":return b!==a;case "\x3d":return b===a;case "\x3e":return b>a;case "\x3c":return b<a;case "\x3e\x3d":return b>=a;case "\x3c\x3d":return b<=a}}function u(b,a,e){const g=parseFloat(a);if(!isNaN(g))return f(b,g,e);b=b.toString();switch(e){case "\x3c\x3e":return b!==a;case "\x3d":return b===a;case "\x3e":return b>a;case "\x3c":return b<a;case "\x3e\x3d":return b>=a;case "\x3c\x3d":return b<=a}}function v(b,a,e){const g=parseFloat(b);if(!isNaN(g))return f(g,
a,e);a=a.toString();switch(e){case "\x3c\x3e":return b!==a;case "\x3d":return b===a;case "\x3e":return b>a;case "\x3c":return b<a;case "\x3e\x3d":return b>=a;case "\x3c\x3d":return b<=a}}function w(b,a,e){switch(e){case "\x3c\x3e":return b!==a;case "\x3d":return b===a;case "\x3e":return b>a;case "\x3c":return b<a;case "\x3e\x3d":return b>=a;case "\x3c\x3d":return b<=a}}function q(b,a,e){b instanceof n.SqlTimeStampOffset&&(b=b.toDateTime());a instanceof n.SqlTimeStampOffset&&(a=a.toDateTime());b=t(b);
a=t(a);switch(e){case "\x3c\x3e":return b!==a;case "\x3d":return b===a;case "\x3e":return b>a;case "\x3c":return b<a;case "\x3e\x3d":return b>=a;case "\x3c\x3d":return b<=a}}function t(b){return 321408E5*b.year+26784E5*b.month+864E5*b.day+36E5*b.hour+6E4*b.minute+1E3*b.second+b.millisecond}h.dateValueInMilliseconds=m;h.isDateOrTimeValue=r;h.isDateTimeComparableValue=p;h.sqlCompare=function(b,a,e,g){if(null==b||null==a)return null;if(c.isNumber(b)){if(c.isNumber(a))return f(b,a,e);if(c.isString(a))return u(b,
a,e);if(r(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isDateOnly(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}else if(c.isString(b)){if(c.isNumber(a))return v(b,a,e);if(c.isString(a))return w(b,a,e);if(c.isDateTime(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isDateOnly(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isTimeOnly(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isTimestampOffset(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}else if(c.isDateTime(b)){if(p(a)){if(b instanceof l.DateTime&&k.isUnknownTimeZone(b.zone)){if(a instanceof l.DateTime&&!1===k.isUnknownTimeZone(a.zone)||a instanceof n.SqlTimeStampOffset)return q(b,a,e)}else if(a instanceof l.DateTime&&k.isUnknownTimeZone(a.zone)&&(b instanceof l.DateTime&&!1===k.isUnknownTimeZone(b.zone)||b instanceof n.SqlTimeStampOffset))return q(b,a,e);return f(m(b),m(a),e)}if(c.isString(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isDateOnly(a))return a=a.toDateTimeLuxon(b.zone),
b=b.startOf("day"),f(b.toMillis(),a.toMillis(),e);if(c.isTimeOnly(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isNumber(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}else if(c.isDateOnly(b)){if(c.isTimestampOffset(a))return b=b.toDateTimeLuxon(a.toDateTime().zone),a=a.startOfDay(),f(b.toMillis(),a.toMilliseconds(),e);if(c.isDateTime(a))return b=b.toDateTimeLuxon(a.zone),a=a.startOf("day"),f(b.toMillis(),a.toMillis(),e);if(c.isString(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
if(c.isDateOnly(a))return f(b.toNumber(),a.toNumber(),e);if(c.isTimeOnly(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isNumber(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}else if(c.isTimeOnly(b)){if(c.isTimeOnly(a))return f(b.toNumber(),a.toNumber(),e);if(c.isString(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isNumber(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isDateOnly(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(p(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}else if(c.isTimestampOffset(b)){if(p(a))return a instanceof l.DateTime&&k.isUnknownTimeZone(a.zone)?q(b,a,e):f(m(b),m(a),e);if(c.isString(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isDateOnly(a))return a=a.toDateTimeLuxon(b.toDateTime().zone),b=b.startOfDay(),f(b.toMilliseconds(),a.toMillis(),e);if(c.isTimeOnly(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);if(c.isNumber(a))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}switch(e){case "\x3c\x3e":return b!==a;
case "\x3d":return b===a;case "\x3e":return b>a;case "\x3c":return b<a;case "\x3e\x3d":return b>=a;case "\x3c\x3d":return b<=a}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});