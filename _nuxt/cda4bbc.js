(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{430:function(e,t,n){"use strict";n.r(t);n(56);var c=n(2).default.extend({props:["image","value"],data:function(){return{hovering:!1,selected:this.value}},watch:{selected:function(e,t){this.$emit("input",e)}},computed:{imgSrc:function(){var e=this.$store.state.swink.swink.metadata.id;return"".concat(this.$config.apiPath,"/v0/swink/").concat(e,"/images/").concat(this.image,"?format=thumb")}}}),o=n(75),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-h-full p-1 inline-block flex-shrink-0 relative",on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}},[n("div",{staticClass:"\n      absolute\n      top-0\n      left-0\n      right-0\n      bottom-0\n      bg-indigo-100\n      transition\n      pointer-events-none\n    ",class:{"opacity-50":e.value,"opacity-0":!e.value}}),e._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:e.hovering||e.value,expression:"hovering || value"},{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"top-2 right-2 rounded text-indigo-600 absolute cursor-pointer",class:{"opacity-75":!e.value},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selected)?e._i(e.selected,null)>-1:e.selected},on:{change:function(t){var n=e.selected,c=t.target,o=!!c.checked;if(Array.isArray(n)){var l=e._i(n,null);c.checked?l<0&&(e.selected=n.concat([null])):l>-1&&(e.selected=n.slice(0,l).concat(n.slice(l+1)))}else e.selected=o}}}),e._v(" "),n("div",[n("img",{staticClass:"max-h-full w-auto",attrs:{src:e.imgSrc}})])])}),[],!1,null,null,null);t.default=component.exports}}]);