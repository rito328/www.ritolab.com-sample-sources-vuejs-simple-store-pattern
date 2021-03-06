(function(e){function t(t){for(var a,s,o=t[0],l=t[1],u=t[2],f=0,p=[];f<o.length;f++)s=o[f],r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},r={app:0},n=[];function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("acbb")},7075:function(e,t,i){},"7b29":function(e,t,i){"use strict";var a=i("7075"),r=i.n(a);r.a},db13:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",{on:{submit:function(t){return t.preventDefault(),e.send(t)}}},[i("file-input",{attrs:{params:{name:"file",limit:100,unit:"kb",allow:"csv",required:!0}},on:{"check-ready":e.isReady}}),i("file-input-image",{attrs:{params:{name:"image",limit:100,unit:"kb",allow:"png,jpg,gif",preview:!0,required:!0}},on:{"check-ready":e.isReady}}),i("button",{attrs:{disabled:e.privateState.disabled,type:"submit"}},[e._v("send")])],1)},r=[],n=(i("af48"),i("397a"),i("1a5c"),{debug:!1,state:{file:{data:!1,required:!1},fileImage:{data:!1,required:!1}},setRequiredAction:function(e,t){switch(t){case"file":this._setFileRequiredAction(e);break;case"image":this._setFileImageRequiredAction(e);break;default:break}},setParamAction:function(e,t){switch(t){case"file":this._setFileAction(e);break;case"image":this._setFileImageAction(e);break;default:break}},removeParamAction:function(e){switch(e){case"file":this._removeFileAction();break;case"image":this._removeFileImageAction();break;default:break}},_setFileRequiredAction:function(e){this.debug&&console.log("setFileRequiredAction triggered with",e),this.state.file.required=e},_setFileImageRequiredAction:function(e){this.debug&&console.log("setFileImageRequiredAction triggered with",e),this.state.fileImage.required=e},_setFileAction:function(e){this.debug&&console.log("setFileAction triggered."),this.state.file.data=e},_setFileImageAction:function(e){this.debug&&console.log("setFileImageAction triggered."),this.state.fileImage.data=e},_removeFileAction:function(){this.debug&&console.log("removeFileAction triggered."),this.state.file.data=!1},_removeFileImageAction:function(){this.debug&&console.log("removeFileImageAction triggered."),this.state.fileImage.data=!1},destroyParamAction:function(){this.debug&&console.log("destroyParamAction triggered."),this._removeFileAction(),this._removeFileImageAction()}}),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"drop_area",class:e.classesDragArea,on:{dragover:function(t){return t.preventDefault(),e.onArea(t)},drop:function(t){return t.preventDefault(),e.dropFile(t)},dragleave:function(t){return t.preventDefault(),e.offArea(t)},dragend:function(t){return t.preventDefault(),e.offArea(t)}}},[i("label",[e._v("ファイルを選択\n            "),i("input",{ref:"file",attrs:{type:"file"},on:{change:e.changeFile}})])]),i("p",[i("span",{directives:[{name:"show",rawName:"v-show",value:e.sharedState.file.data.name,expression:"sharedState.file.data.name"}],attrs:{id:"file_name"}},[e._v(e._s(e.sharedState.file.data.name)+" "),i("span",{staticClass:"reset_file_ico",on:{click:e.resetFile}},[e._v("×")])])]),i("p",{directives:[{name:"show",rawName:"v-show",value:e.privateState.error,expression:"privateState.error"}],attrs:{id:"error"}},[e._v(e._s(e.privateState.error))])])},o=[],l=(i("6d27"),i("d12a"),i("b7a2"),{props:["params"],data:function(){return{limit:0,unit:"",allow:"",allowType:[],lists:{mimeType:{gif:"image/gif",jpg:"image/jpeg",png:"image/png",text:"text/plain",tsv:"text/tab-separated-values",csv:["application/vnd.ms-excel","text/csv"],pdf:"application/pdf"},unit:{kb:1e3,mb:1e6}}}},mounted:function(){this.limit=parseInt(this.params.limit),this.unit=this.params.unit,this.allow=this.params.allow.split(","),this.allowType=this._getAllowMimeType(this.allow)},methods:{isAllowFileType:function(e){return-1!==this.allowType.indexOf(e)},isAllowFileSize:function(e){return parseInt(e)<this._getLimitSizeByte()},isImage:function(e){return-1!==e.indexOf("image")},getErrorMessageSize:function(){return this.limit+this.unit+"未満のファイルのみアップロード可能です"},getErrorMessageType:function(){return this.allow.join("/")+" ファイルのみアップロード可能です"},_getAllowMimeType:function(e){for(var t=[],i=0;i<e.length;i++){var a=this.lists.mimeType[e[i]];"string"===typeof a?t.push(a):a instanceof Array&&(t=t.concat(a))}return t},_getLimitSizeByte:function(){return this.limit*this.lists.unit[this.unit]}}}),u={mixins:[l],data:function(){return{privateState:{name:"",error:"",inArea:!1},sharedState:n.state}},mounted:function(){this.privateState.name=this.params.name;var e="boolean"===typeof this.params.required&&this.params.required;n.setRequiredAction(e,this.privateState.name)},computed:{isError:function(){return""!==!!this.privateState.error},classesDragArea:function(){return{drag_on:this.privateState.inArea}}},methods:{dropFile:function(e){this.changeFile(e),this.offArea()},changeFile:function(e){var t=e.target.files||e.dataTransfer.files;this.validation(t[0])?n.setParamAction(t[0],this.privateState.name):n.removeParamAction(this.privateState.name),this.$emit("check-ready")},resetFile:function(){var e=this.$refs.file;e.type="text",e.type="file",n.removeParamAction(this.privateState.name),this.privateState.error="",this.$emit("check-ready")},validation:function(e){return this.isAllowFileType(e.type)?this.isAllowFileSize(e.size)?(this.privateState.error="",!0):(this.privateState.error=this.getErrorMessageSize(),!1):(this.privateState.error=this.getErrorMessageType(),!1)},onArea:function(){this.privateState.inArea=!0},offArea:function(){this.privateState.inArea=!1}}},c={name:"FileInput",mixins:[u]},f=c,p=i("7978"),d=Object(p["a"])(f,s,o,!1,null,null,null),m=d.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"drop_area",class:e.classesDragArea,on:{dragover:function(t){return t.preventDefault(),e.onArea(t)},drop:function(t){return t.preventDefault(),e.dropFile(t)},dragleave:function(t){return t.preventDefault(),e.offArea(t)},dragend:function(t){return t.preventDefault(),e.offArea(t)}}},[i("label",[e._v("ファイルを選択\n            "),i("input",{ref:"file",attrs:{type:"file"},on:{change:e.changeFile}})])]),i("p",[i("span",{directives:[{name:"show",rawName:"v-show",value:e.sharedState.fileImage.data.name,expression:"sharedState.fileImage.data.name"}],attrs:{id:"file_name"}},[e._v(e._s(e.sharedState.fileImage.data.name)+" "),i("span",{staticClass:"reset_file_ico",on:{click:e.resetFile}},[e._v("×")])])]),i("p",{directives:[{name:"show",rawName:"v-show",value:e.privateState.error,expression:"privateState.error"}],attrs:{id:"error"}},[e._v(e._s(e.privateState.error))]),e.isPreview?i("p",[i("img",{attrs:{src:e.privateState.imageData,alt:""}})]):e._e()])},v=[],g={data:function(){return{imageData:""}},methods:{createImage:function(e){var t=this,i=new FileReader;i.onload=function(e){t.imageData=e.target.result},i.readAsDataURL(e)}}},b={name:"FileInputImage",props:["params"],mixins:[u,g],data:function(){return{privateState:{preview:!0}}},mounted:function(){var e=this.params.preview;this.privateState.preview="boolean"!==typeof e||e},updated:function(){var e=this.sharedState.fileImage.data;"undefined"!==typeof e.size?this.isImage(e.type)&&this.createImage(e):this.privateState.imageData=""},computed:{isPreview:function(){return""!==this.privateState.imageData&&this.privateState.preview}}},S=b,A=Object(p["a"])(S,h,v,!1,null,null,null),_=A.exports,y={name:"FormSample",components:{FileInput:m,FileInputImage:_},data:function(){return{privateState:{disabled:!0},sharedState:n.state}},methods:{isReady:function(){for(var e=[],t=Object.keys(this.sharedState),i=0;i<t.length;i++){var a=this.sharedState[t[i]];e.push(!0===a.required&&!1===a.data)}this.privateState.disabled=!e.every(function(e){return!1===e})},send:function(){this.privateState.disabled||console.log({file:this.sharedState.file.data,image:this.sharedState.fileImage.data})}}},w=y,F=(i("7b29"),Object(p["a"])(w,a,r,!1,null,null,null));t["a"]=F.exports}});
//# sourceMappingURL=app.a7f87a66.js.map