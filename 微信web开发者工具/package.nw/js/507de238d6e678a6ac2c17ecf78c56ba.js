'use strict';!function(require,directRequire){const a=require('./f171257bbcaef547a3cf27266ccb0db2.js'),b=require('./3bfffbe88b3d923921f851c0697974fe.js'),c=require('./15ba1827c7f6564a45df6bd44da3a977.js'),d=require('./72653d4b93cdd7443296229431a7aa9a.js'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js');module.exports={getPhoneNumber:async function(g,e,h){let i=b.getCurrent(),j=e.api,k=e.callbackID;try{let{body:d}=await c({url:`${a.getUserPhoneNumber}`,method:'post',body:JSON.stringify({appid:b.getProjectAppID()}),needToken:1,needAppID:1,needCheckErrCode:-1}),e=d.jsapi_baseresponse,i=e?parseInt(e.errcode):-1e4;if(0===i){var l,m;try{m=JSON.parse(d.data),l=JSON.parse(m.data)}catch(a){throw`获取数据错误 ${a}`}if(!l||!l.mobile)throw'\u7528\u6237\u672A\u7ED1\u5B9A\u624B\u673A\uFF0C\u8BF7\u5148\u5728\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u8FDB\u884C\u7ED1\u5B9A\u540E\u91CD\u8BD5';if(l.need_auth)throw'\u7528\u6237\u7ED1\u5B9A\u7684\u624B\u673A\u9700\u8981\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u8BF7\u5728\u5BA2\u6237\u7AEF\u5B8C\u6210\u77ED\u4FE1\u9A8C\u8BC1\u6B65\u9AA4';g({type:f.SIMULATOR_SET_AUTHORIZE_CONFIRM,data:{show:!0,imageUrl:d.appicon_url,appName:d.appname,scopeList:[d.scope],callback:(a)=>{var b={};a?b={errMsg:`${j}:ok`,encryptedData:m.encryptedData,iv:m.iv}:b.errMsg=`${j}:fail user deny`,g({type:f.JSSDK_CALLBACK,webviewID:h,callbackID:k,res:b})}}})}else if(-12001==i)throw'\u8BE5 appid \u6CA1\u6709\u6743\u9650';else if(-12004==i)throw'\u8BF7\u5148\u4F7F\u7528 wx.login \u767B\u5F55';else throw`系统错误 errorCode:${i}`}catch(a){return g({type:f.SIMULATOR_SET_CONFIRM,data:{show:!0,title:'\u83B7\u53D6\u624B\u673A\u53F7\u5931\u8D25',content:a.toString()}}),d.error(`getPhoneNumber catch error ${a}`),{errMsg:`${j}:fail ${a}`}}}}}(require('lazyload'),require);