(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{402:function(n,o,r){(function(n){var r=n.alloc(512),c=n.alloc(256);!function(){for(var n=1,i=0;i<255;i++)r[i]=n,c[n]=i,256&(n<<=1)&&(n^=285);for(i=255;i<512;i++)r[i]=r[i-255]}(),o.log=function(n){if(n<1)throw new Error("log("+n+")");return c[n]},o.exp=function(n){return r[n]},o.mul=function(n,o){return 0===n||0===o?0:r[c[n]+c[o]]}}).call(this,r(372).Buffer)}}]);