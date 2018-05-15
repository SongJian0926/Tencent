'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a,b,c){const d=c();let e=d.toolbar.deviceInfo,f=e.screenHeight-e.navigationbarHeight-e.statusbarHeight,g=d.simulator.appConfig||{},h=((g.global||{}).window||{}).navigationStyle||'default';'custom'==h&&(f=e.screenHeight);let i=d.simulator.webviewInfos[d.simulator.currentWebviewID];i&&-1!=i.tabbarIndex&&(f-=e.tabbarHeight),d.project.current.attr&&d.project.current.attr.gameApp&&(f=e.screenHeight);let k=d.simulator.orientation&&'landscape'==d.simulator.orientation.value,l={errMsg:`${b.api}:ok`,model:e.title,pixelRatio:e.dpr,windowWidth:k?f:e.screenWidth,windowHeight:k?e.screenWidth:f,system:'iOS'===e.os?'iOS 10.0.1':'Android 5.0',language:'zh_CN',version:'6.6.3'};const m=j.getLibVersionNumber();if(1001000<=m&&(l=_extends({},l,{screenWidth:k?e.screenHeight:e.screenWidth,screenHeight:k?e.screenWidth:e.screenHeight,SDKVersion:j.getCurrent().libVersion})),1005000<=m&&(l=_extends({},l,{brand:'devtools',fontSizeSetting:16})),1008000<=m&&(l.benchmarkLevel=1),1009000<=m){let a=await navigator.getBattery(),b=parseInt(100*a.level);l.batteryLevel=b;const c=e.statusbarHeight;'number'==typeof c&&(l=_extends({},l,{statusBarHeight:c}))}return l}async function b(){let a=await navigator.getBattery(),b=parseInt(100*a.level);return{isCharging:a.charging,level:b}}async function c(a,b){let c=d.getState();return{errMsg:`${b.api}:ok`,networkType:c.toolbar.network.list[c.toolbar.network.current]}}const d=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),h=require('./15ba1827c7f6564a45df6bd44da3a977.js'),i=require('./f171257bbcaef547a3cf27266ccb0db2.js'),j=require('./3bfffbe88b3d923921f851c0697974fe.js'),{enterBackground:k,enterForeground:l}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),m=function(a){const b=[];if(!a)return b;for(let c=0;c<a.length;c++){const d=a[c],e=d.plugin_info;e&&b.push({appId:d.appid,plugin_list:e.plugin_list})}return b};module.exports={getSystemInfo:a,getSystemInfoSync:a,getNetworkType:c,getNetworkTypeSync:c,makePhoneCall:(a,b)=>new Promise((c)=>{a({type:f.SIMULATOR_SET_CONFIRM,data:{show:!0,content:`拨打 ${b.args.phoneNumber}?【仅为模拟】`,callback:async(a)=>{k('makePhoneCall'),l('makePhoneCall'),a?c({errMsg:`${b.api}:ok`}):c({errMsg:`${b.api}:cancel`})}}})}),enableAccelerometer:async function(a,b){let c=b.args;return a({type:f.SIMULATOR_SET_ACCELEROMETER,data:{accelerometer:c.enable}}),{errMsg:`${b.api}:ok`}},enableCompass:async function(a,b){let c=b.args;return a({type:f.SIMULATOR_SET_COMPASS,data:{compass:c.enable}}),{errMsg:`${b.api}:ok`}},getScreenBrightness:async function(a,b){let c=d.getState(),e=0.5;return c.toolbar.deviceStatus&&(e=c.toolbar.deviceStatus.brightness),{errMsg:`${b.api}:ok`,value:e}},setScreenBrightness:async function(a,b){let c=parseFloat(b.args.value);return isNaN(c)?{errMsg:`${b.api}:fail error parameter`}:(a({type:f.TOOLBAR_SET_DEVICE_STATUS,data:{brightness:c}}),{errMsg:`${b.api}:ok`})},setKeepScreenOn:async function(a,b){const c=b.args.keepScreenOn;return a({type:f.TOOLBAR_SET_DEVICE_STATUS,data:{screenon:c}}),{errMsg:`${b.api}:ok`}},captureScreen:async function(a,b){a({type:f.SIMULATOR_CAPTURE_SCREEN,data:{callbackID:b.callbackID}})},vibrateLong:async function(a,b){return a({type:f.SIMULATOR_SET_VIBRATE,data:{type:'long'}}),{errMsg:`${b.api}:ok`}},vibrateShort:async function(a,b){return a({type:f.SIMULATOR_SET_VIBRATE,data:{type:'short'}}),{errMsg:`${b.api}:ok`}},verifyPlugin:async function(a,b){let{body:c,resp:d}=await h({url:i.verifyPlugin,method:'POST',body:JSON.stringify({ext_info:JSON.stringify(b.args.data||{})}),needToken:1,needAppID:1});return{data:{list:c.list},errMsg:`${b.api}:ok`}},batchGetContact:async function(a,b){let{body:c,resp:d}=await h({url:i.batchGetContact,method:'POST',body:JSON.stringify({appid_list:b.args.appIds}),needToken:1,needAppID:1});const e=m(c.contact_list);return{contactList:e,errMsg:`${b.api}:ok`}},setDeviceOrientation:async function(a,b){let c=b.args&&b.args.value;return!c||0>['portrait','landscape'].indexOf(c)?{errMsg:`${b.api}:fail invalid parameter`}:(a({type:f.SIMULATOR_SET_ORIENTATION,data:{api:b.api,callbackID:b.callbackID,value:b.args&&b.args.value||'portrait'}}),{errMsg:`${b.api}:ok`})},setStatusBarStyle:async function(a,b){let c=b.args;return 0>['white','black'].indexOf(c.color)?{errMsg:`${b.api}:fail invalid color`}:(a({type:f.SIMULATOR_SET_STATUSBAR_STYLE,data:{color:c.color}}),{errMsg:`${b.api}:ok`})},setMenuStyle:async function(a,b){let c=b.args&&b.args.style;return 0>['dark','light'].indexOf(c)?{errMsg:`${b.api}:fail invalid style "${c}"`}:(a({type:f.SIMULATOR_SET_MENU,data:{style:c}}),{errMsg:`${b.api}:ok`})},getBatteryInfo:b,getBatteryInfoSync:b,pageNotFoundCallback:async function(a,b){return a({type:f.SIMULATOR_PAGENOTFOUND_CALLBACK}),{errMsg:`${b.api}:ok`}}}}(require('lazyload'),require);