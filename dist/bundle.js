!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Table=e():t.Table=e()}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var i=(l=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[o].concat(r).concat([i]).join("\n")}var l;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<t.length;i++){var l=t[i];"number"==typeof l[0]&&n[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="("+l[2]+") and ("+o+")"),e.push(l))}},e}},function(t,e,o){var n,i,r={},l=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),s=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,c=0,h=[],d=o(6);function u(t,e){for(var o=0;o<t.length;o++){var n=t[o],i=r[n.id];if(i){i.refs++;for(var l=0;l<i.parts.length;l++)i.parts[l](n.parts[l]);for(;l<n.parts.length;l++)i.parts.push(g(n.parts[l],e))}else{var s=[];for(l=0;l<n.parts.length;l++)s.push(g(n.parts[l],e));r[n.id]={id:n.id,refs:1,parts:s}}}}function f(t,e){for(var o=[],n={},i=0;i<t.length;i++){var r=t[i],l=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};n[l]?n[l].parts.push(s):o.push(n[l]={id:l,parts:[s]})}return o}function p(t,e){var o=s(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=h[h.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),h.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertAt.before,o);o.insertBefore(e,i)}}function _(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return o.nc}();n&&(t.attrs.nonce=n)}return v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function g(t,e){var o,n,i,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var l=c++;o=a||(a=b(e)),n=w.bind(null,o,l,!1),i=w.bind(null,o,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),n=function(t,e,o){var n=o.css,i=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(n=d(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var l=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(l),s&&URL.revokeObjectURL(s)}.bind(null,o,e),i=function(){_(o),o.href&&URL.revokeObjectURL(o.href)}):(o=b(e),n=function(t,e){var o=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),i=function(){_(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=l()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=f(t,e);return u(o,e),function(t){for(var n=[],i=0;i<o.length;i++){var l=o[i];(s=r[l.id]).refs--,n.push(s)}t&&u(f(t,e),e);for(i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete r[s.id]}}}};var m,y=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function w(t,e,o,n){var i=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(r,l[e]):t.appendChild(r)}}},function(t,e){t.exports='<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#FFF" d="M10.9 9.1h3.7a.9.9 0 1 1 0 1.8h-3.7v3.7a.9.9 0 1 1-1.8 0v-3.7H5.4a.9.9 0 0 1 0-1.8h3.7V5.4a.9.9 0 0 1 1.8 0v3.7z"></path></svg>'},function(t,e,o){const n=o(12).TableConstructor,i=o(11),r={input:"tc-table__inp"};t.exports=class{static get enableLineBreaks(){return!0}static get toolbox(){return{icon:i,title:"Table"}}constructor({data:t,config:e,api:o}){this.api=o,this._tableConstructor=new n(t,e,o)}render(){return this._tableConstructor.htmlElement}save(t){const e=[],o=t.querySelector("table").rows;for(let t=0;t<o.length;t++){const n=o[t],i=Array.from(n.cells);i.map(t=>t.querySelector("."+r.input)).every(this._isEmpty)||e.push(i.map(t=>t.innerHTML))}return{content:e}}_isEmpty(t){return!t.textContent.trim()}}},function(t,e,o){var n=o(5);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(1)(n,i);n.locals&&(t.exports=n.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-editor{padding:10px;position:relative;box-sizing:content-box;width:100%;left:-10px}",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,o){var n=o(8);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(1)(n,i);n.locals&&(t.exports=n.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-toolbar{background:#9b7b81;}.tc-toolbar--hidden{visibility:hidden}.tc-toolbar--hor{width:100%;height:21px;flex-direction:row;left:0;top:1px}.tc-toolbar--hor,.tc-toolbar--ver{display:flex;align-items:center;position:absolute;z-index:100}.tc-toolbar--ver{height:100%;width:21px;flex-direction:column;top:0;left:-1px}.tc-toolbar__plus{height:21px;width:21px;margin-top:0;color:#9b7b81;}.tc-toolbar__plus--hor{margin-left:-10px}.tc-toolbar__plus--ver{margin-top:-10px}.tc-toolbar__plus svg{vertical-align:top}.tc-toolbar__shine-line--hor{min-height:1px;width:100%}.tc-toolbar__shine-line--ver{min-width:1px;height:100%}",""])},function(t,e,o){var n=o(10);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(1)(n,i);n.locals&&(t.exports=n.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-table{width:100%;height:100%;border-collapse:collapse;table-layout:fixed;}.tc-table__wrap{border:1px solid #dbdbe2;border-radius:3px;position:relative;height:100%;width:100%;box-sizing:border-box}.tc-table__cell{border:1px solid #dbdbe2;padding:0;vertical-align:top}.tc-table__area{padding:10px;height:100%}.tc-table__inp{outline:none;flex-grow:100;min-height:1.5em;height:100%;overflow:hidden}.tc-table tbody tr:first-child td{border-top:none}.tc-table tbody tr:last-child td{border-bottom:none}.tc-table tbody tr td:last-child{border-right:none}.tc-table tbody tr td:first-child{border-left:none}",""])},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 5V19H20.5V5H3.5ZM7.5 7V9H5.5V7H7.5ZM5.5 11V13H7.5V11H5.5ZM5.5 15H7.5V17H5.5V15ZM9.5 17H18.5V15H9.5V17ZM18.5 13H9.5V11H18.5V13ZM9.5 9H18.5V7H9.5V9Z" fill="currentColor"></path></svg>'},function(t,e,o){"use strict";o.r(e);o(4);function n(t){return!(null==t)}function i(t,e=null,o=null,i=null){const r=document.createElement(t);if(n(e))for(let t=0;t<e.length;t++)n(e[t])&&r.classList.add(e[t]);if(n(o))for(let t in o)r.setAttribute(t,o[t]);if(n(i))for(let t=0;t<i.length;t++)n(i[t])&&r.appendChild(i[t]);return r}function r(t){const e=t.getBoundingClientRect();return{y1:Math.floor(e.top+window.pageYOffset),x1:Math.floor(e.left+window.pageXOffset),x2:Math.floor(e.right+window.pageXOffset),y2:Math.floor(e.bottom+window.pageYOffset)}}function l(t,e,o){let n;return e-t.x1>=-1&&e-t.x1<=11&&(n="left"),t.x2-e>=-1&&t.x2-e<=11&&(n="right"),o-t.y1>=-1&&o-t.y1<=11&&(n="top"),t.y2-o>=-1&&t.y2-o<=11&&(n="bottom"),n}o(7);var s=o(2),a=o.n(s);const c={highlightingLine:"tc-toolbar",hidden:"tc-toolbar--hidden",horizontalToolBar:"tc-toolbar--hor",horizontalHighlightingLine:"tc-toolbar__shine-line--hor",verticalToolBar:"tc-toolbar--ver",verticalHighlightingLine:"tc-toolbar__shine-line--ver",plusButton:"tc-toolbar__plus",horizontalPlusButton:"tc-toolbar__plus--hor",verticalPlusButton:"tc-toolbar__plus--ver",area:"tc-table__area"};class h{constructor(){this._plusButton=this._generatePlusButton(),this._highlightingLine=this._generateHighlightingLine(),this._toolbar=this._generateToolBar([this._plusButton,this._highlightingLine])}hide(){this._toolbar.classList.add(c.hidden)}show(){this._toolbar.classList.remove(c.hidden),this._highlightingLine.classList.remove(c.hidden)}hideLine(){this._highlightingLine.classList.add(c.hidden)}get htmlElement(){return this._toolbar}_generatePlusButton(){const t=i("div",[c.plusButton]);return t.innerHTML=a.a,t.addEventListener("click",t=>{t.stopPropagation();const e=new CustomEvent("click",{detail:{x:t.pageX,y:t.pageY},bubbles:!0});this._toolbar.dispatchEvent(e)}),t}_generateHighlightingLine(){const t=i("div",[c.highlightingLine]);return t.addEventListener("click",t=>{t.stopPropagation();const e=new CustomEvent("click",{bubbles:!0});this._toolbar.dispatchEvent(e)}),t}_generateToolBar(t){const e=i("div",[c.hidden],null,t);return e.addEventListener("mouseleave",t=>{this._recalcMousePos(t)}),e}_recalcMousePos(t){this.hide();const e=document.elementFromPoint(t.pageX,t.pageY);if(null!==e&&e.classList.contains(c.area)){const o=new MouseEvent("mouseover",{clientX:t.pageX,clientY:t.pageY});e.dispatchEvent(o)}}}class d extends h{constructor(){super(),this._toolbar.classList.add(c.horizontalToolBar),this._plusButton.classList.add(c.horizontalPlusButton),this._highlightingLine.classList.add(c.horizontalHighlightingLine)}showIn(t){const e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).height)/2);this._toolbar.style.top=t-e+"px",this.show()}}class u extends h{constructor(){super(),this._toolbar.classList.add(c.verticalToolBar),this._plusButton.classList.add(c.verticalPlusButton),this._highlightingLine.classList.add(c.verticalHighlightingLine)}showIn(t){const e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).width)/2);this._toolbar.style.left=t-e+"px",this.show()}}o(9);const f={table:"tc-table",inputField:"tc-table__inp",cell:"tc-table__cell",wrapper:"tc-table__wrap",area:"tc-table__area"};class p{constructor(){this._numberOfColumns=0,this._numberOfRows=0,this._element=this._createTableWrapper(),this._table=this._element.querySelector("table"),this._hangEvents()}addColumn(t=-1){this._numberOfColumns++;const e=this._table.rows;for(let o=0;o<e.length;o++){const n=e[o].insertCell(t);this._fillCell(n)}}addRow(t=-1){this._numberOfRows++;const e=this._table.insertRow(t);return this._fillRow(e),e}get htmlElement(){return this._element}get body(){return this._table}get selectedCell(){return this._selectedCell}_createTableWrapper(){return i("div",[f.wrapper],null,[i("table",[f.table])])}_createContenteditableArea(){return i("div",[f.inputField],{contenteditable:"true"})}_fillCell(t){t.classList.add(f.cell);const e=this._createContenteditableArea();t.appendChild(i("div",[f.area],null,[e]))}_fillRow(t){for(let e=0;e<this._numberOfColumns;e++){const e=t.insertCell();this._fillCell(e)}}_hangEvents(){this._table.addEventListener("focus",t=>{this._focusEditField(t)},!0),this._table.addEventListener("blur",t=>{this._blurEditField(t)},!0),this._table.addEventListener("keydown",t=>{this._pressedEnterInEditField(t)}),this._table.addEventListener("click",t=>{this._clickedOnCell(t)}),this._table.addEventListener("mouseover",t=>{this._mouseEnterInDetectArea(t),t.stopPropagation()},!0)}_focusEditField(t){t.target.classList.contains(f.inputField)&&(this._selectedCell=t.target.closest("."+f.cell))}_blurEditField(t){t.target.classList.contains(f.inputField)&&(this._selectedCell=null)}_pressedEnterInEditField(t){t.target.classList.contains(f.inputField)&&(13!==t.keyCode||t.shiftKey||t.preventDefault())}_clickedOnCell(t){if(!t.target.classList.contains(f.cell))return;t.target.querySelector("."+f.inputField).focus()}_mouseEnterInDetectArea(t){if(!t.target.classList.contains(f.area))return;const e=l(r(t.target.closest("TD")),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}o.d(e,"TableConstructor",function(){return b});const _={editor:"tc-editor",toolBarHor:"tc-toolbar--hor",toolBarVer:"tc-toolbar--ver",inputField:"tc-table__inp"};class b{constructor(t,e,o){this._table=new p;const n=this._resizeTable(t,e);this._fillTable(t,n),this._container=i("div",[_.editor,o.styles.block],null,[this._table.htmlElement]),this._verticalToolBar=new u,this._horizontalToolBar=new d,this._table.htmlElement.appendChild(this._horizontalToolBar.htmlElement),this._table.htmlElement.appendChild(this._verticalToolBar.htmlElement),this._hoveredCell=null,this._activatedToolBar=null,this._hoveredCellSide=null,this._plusButDelay=null,this._toolbarShowDelay=null,this._hangEvents()}get htmlElement(){return this._container}_fillTable(t,e){if(void 0!==t.content)for(let o=0;o<e.rows&&o<t.content.length;o++)for(let n=0;n<e.cols&&n<t.content[o].length;n++){this._table.body.rows[o].cells[n].querySelector("."+_.inputField).innerHTML=t.content[o][n]}}_resizeTable(t,e){const o=Array.isArray(t.content),n=!!o&&t.content.length,i=o?t.content.length:void 0,r=n?t.content[0].length:void 0,l=Number.parseInt(e.rows),s=Number.parseInt(e.cols),a=(!isNaN(l)&&l>0?l:void 0)||i||2,c=(!isNaN(s)&&s>0?s:void 0)||r||2;for(let t=0;t<a;t++)this._table.addRow();for(let t=0;t<c;t++)this._table.addColumn();return{rows:a,cols:c}}_showToolBar(t,e){this._hideToolBar(),this._activatedToolBar=t,t.showIn(e)}_hideToolBar(){null!==this._activatedToolBar&&this._activatedToolBar.hide()}_hangEvents(){this._container.addEventListener("mouseInActivatingArea",t=>{this._toolbarCalling(t)}),this._container.addEventListener("click",t=>{this._clickToolbar(t)}),this._container.addEventListener("input",()=>{this._hideToolBar()}),this._container.addEventListener("keydown",t=>{this._containerKeydown(t)}),this._container.addEventListener("mouseout",t=>{this._leaveDetectArea(t)}),this._container.addEventListener("mouseover",t=>{this._mouseEnterInDetectArea(t)})}_mouseInActivatingAreaListener(t){this._hoveredCellSide=t.detail.side;const e=r(t.target),o=r(this._table.htmlElement);if(this._hoveredCell=t.target.closest("TD"),null===this._hoveredCell){const t=11;this._hoveredCell=this._container,e.x1+=t,e.y1+=t,e.x2-=t,e.y2-=t}"top"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y1-o.y1-2),"bottom"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y2-o.y1-1),"left"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x1-o.x1-2),"right"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x2-o.x1-1)}_isToolbar(t){return!(!t.closest("."+_.toolBarHor)&&!t.closest("."+_.toolBarVer))}_leaveDetectArea(t){this._isToolbar(t.relatedTarget)||(clearTimeout(this._toolbarShowDelay),this._hideToolBar())}_toolbarCalling(t){this._isToolbar(t.target)||(clearTimeout(this._toolbarShowDelay),this._toolbarShowDelay=setTimeout(()=>{this._mouseInActivatingAreaListener(t)},125))}_clickToolbar(t){if(!this._isToolbar(t.target))return;let e;if(this._activatedToolBar===this._horizontalToolBar?(this._addRow(),e="y"):(this._addColumn(),e="x"),isNaN(t.detail)&&null!==t.detail){const o=r(this._table.htmlElement);let n;n="x"===e?t.detail.x-o.x1:t.detail.y-o.y1,this._delayAddButtonForMultiClickingNearMouse(n)}else this._hideToolBar()}_containerKeydown(t){13===t.keyCode&&this._containerEnterPressed(t)}_delayAddButtonForMultiClickingNearMouse(t){this._showToolBar(this._activatedToolBar,t),this._activatedToolBar.hideLine(),clearTimeout(this._plusButDelay),this._plusButDelay=setTimeout(()=>{this._hideToolBar()},500)}_getHoveredSideOfContainer(){return this._hoveredCell===this._container?this._isBottomOrRight()?0:-1:1}_isBottomOrRight(){return"bottom"===this._hoveredCellSide||"right"===this._hoveredCellSide}_addRow(){const t=this._hoveredCell.closest("TR");let e=this._getHoveredSideOfContainer();1===e&&(e=t.sectionRowIndex,e+=this._isBottomOrRight()),this._table.addRow(e)}_addColumn(){let t=this._getHoveredSideOfContainer();1===t&&(t=this._hoveredCell.cellIndex,t+=this._isBottomOrRight()),this._table.addColumn(t)}_containerEnterPressed(t){if(null===this._table.selectedCell||t.shiftKey)return;const e=this._table.selectedCell.closest("TR");let o=this._getHoveredSideOfContainer();1===o&&(o=e.sectionRowIndex+1),this._table.addRow(o).cells[0].click()}_mouseEnterInDetectArea(t){let e=l(r(this._container),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}}])});