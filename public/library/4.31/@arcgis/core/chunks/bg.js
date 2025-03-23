/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{d as o}from"./calcite-input-time-picker.js";import"./componentsUtils.js";import"./assets.js";import"../config.js";import"../core/lang.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"./Logger.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./form.js";import"./dom.js";import"./interactive.js";import"./key.js";import"./label.js";import"./component.js";import"./loadable.js";import"./locale2.js";import"./observers.js";import"./focusTrapComponent.js";import"./t9n.js";import"./math.js";import"./icon.js";import"./Validation.js";import"./input3.js";import"./action.js";import"./loader.js";import"./input-message.js";import"./input-text.js";import"./progress.js";import"./popover.js";import"./floating-ui.js";import"./debounce.js";import"./openCloseComponent.js";import"./Heading2.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */
var r={name:"bg",weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekStart:1,ordinal:function(o){var r=o%100;if(r>10&&r<20)return o+"-ти";var t=o%10;return 1===t?o+"-ви":2===t?o+"-ри":7===t||8===t?o+"-ми":o+"-ти"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"}};o.locale(r,null,!0);export{r as default};
