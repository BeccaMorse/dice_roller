parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rSxx":[function(require,module,exports) {
function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&r(e.prototype,n),o&&r(e,o),e}module.exports=function(){function r(n,o){if(e(this,r),isNaN(o))throw new Error("No Dice! That's not a number.");if(o<=0)throw new Error("Stay Positive! Number of sides must be greater than zero.");if(o%1!=0)throw new Error("Stay Wholesome! Whole numbers only, please.");if(o>100)throw new Error("100 or under, please!");this.id=n,this.numSides=o}return n(r,[{key:"roll",value:function(){return Math.ceil(Math.random()*this.numSides)}}]),r}();
},{}],"Focm":[function(require,module,exports) {
var e=require("./die.js"),n=function(n,t){var d=new e("die-"+n.length,t);n.push(d),document.getElementById("diceBucket").insertAdjacentHTML("beforeend","<p>"+t+'-Sided Die: <span id="'+d.id+'"><span></p>')},t=function(e){var n=0;for(dieIndex in e){var t=e[dieIndex],d=t.roll();document.getElementById(t.id).innerHTML=d,n+=d}return n};document.addEventListener("DOMContentLoaded",function(){var e=[];document.getElementById("rollAllDice").addEventListener("click",function(){var n=t(e);document.getElementById("sum").innerHTML=n}),document.getElementById("addNewDie").addEventListener("click",function(){var t=document.getElementById("numSides").value;try{n(e,t)}catch(d){window.alert(d)}}),document.getElementById("removeDie").addEventListener("click",function(){var n=document.getElementById("diceBucket");n.removeChild(n.lastElementChild),e.pop()})});
},{"./die.js":"rSxx"}]},{},["Focm"], null)
//# sourceMappingURL=/dice_roller.a5347f19.js.map