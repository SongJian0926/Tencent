"use strict";!function(require,directRequire){const a=require("asar");module.exports={asarPack:async function(b,c){return new Promise((d,e)=>{try{a.createPackage(b,c,()=>{d()})}catch(a){e(a)}})},asarUnpack:async function(b,c){return new Promise((d,e)=>{try{a.extractAll(b,c),d()}catch(a){e(a)}})},asarExtractFile:async function(b,c){return new Promise((d,e)=>{try{const e=a.extractFile(b,c);d(e)}catch(a){e(a)}})}}}(require("lazyload"),require);