/*!
 * jQuery UI Effects Shake 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}((function(e){"use strict";return e.effects.define("shake",(function(t,n){var i=1,a=e(this),f=t.direction||"left",s=t.distance||20,u=t.times||3,c=2*u+1,r=Math.round(t.duration/c),o="up"===f||"down"===f?"top":"left",d="up"===f||"left"===f,m={},g={},h={},l=a.queue().length;for(e.effects.createPlaceholder(a),m[o]=(d?"-=":"+=")+s,g[o]=(d?"+=":"-=")+2*s,h[o]=(d?"-=":"+=")+2*s,a.animate(m,r,t.easing);i<u;i++)a.animate(g,r,t.easing).animate(h,r,t.easing);a.animate(g,r,t.easing).animate(m,r/2,t.easing).queue(n),e.effects.unshift(a,l,c+1)}))}));
//# sourceMappingURL=effect-shake-min.js.map