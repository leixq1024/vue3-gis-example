// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/arrayUtils","../../../core/Evented","./transitions/FadeTransition"],function(c,d,e,f){class g extends e{constructor(){super(...arguments);this._fadeTransition=this._clips=this._transitionables=null;this._isReady=!1;this._opacity=1;this._stage=this.parent=null;this._visible=!0}get computedOpacity(){return this._fadeTransition?.computedOpacity??this.opacity}get clips(){return this._clips}set clips(a){this._clips=a;this.requestRender()}get fadeTransitionEnabled(){return null!==
this._fadeTransition}set fadeTransitionEnabled(a){!this._fadeTransition&&a?(this._fadeTransition=new f.FadeTransition({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!a&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){return this._fadeTransition?.transitioning??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(a){this._opacity!==a&&(this._opacity=Math.min(1,
Math.max(a,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(a){if(this._stage!==a){var b=this._stage;(this._stage=a)?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):b?.trashDisplayObject(this)}}get transforms(){null==this._transforms&&(this._transforms=this._createTransforms());return this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(a){this._visible!==
a&&(this._visible=a,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(a){this._transitionables??(this._transitionables=[]);this._transitionables.push(a);this.requestRender()}removeTransitionable(a){a.endTransition();this._transitionables&&d.remove(this._transitionables,a);this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const a=this._fadeTransition.fadeIn();
this.opacity=1;this.requestRender();return a}fadeOut(){this.fadeTransitionEnabled=!0;const a=this._fadeTransition.fadeOut();this.opacity=0;this.requestRender();return a}endTransitions(){if(this._transitionables){for(const a of this._transitionables)a.endTransition();this.requestRender()}}beforeRender(a){this.transitionStep(a.deltaTime,a.state.scale);this.setTransform(a.state)}afterRender(a){this.transitioning&&this.requestRender()}remove(){this.parent?.removeChild(this)}setTransform(a){}processRender(a){this.stage&&
(this._fadeTransition?.computedVisible??this.visible)&&this.doRender(a)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions();this.onDetach();this.emit("detach")}isTransitioning(){return this._transitionables?.some(a=>a.transitioning)??!1}transitionStep(a,b){if(this._transitionables)for(const h of this._transitionables)h.transitionStep(a,b)}onAttach(){}onDetach(){}doRender(a){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}
c.DisplayObject=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});