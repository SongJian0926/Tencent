'use strict';!function(require,directRequire){const{connect:a}=require('react-redux'),b=require('react'),c=require('redux'),d=require('./55338d4d600923e9215b279e2c7183e0.js'),e=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),f=require('./a8c87029da0fa06e986298d447ab0fe2.js'),g=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),h=a((a)=>{return{project:a.project.current||{},mainWindow:a.window.mainWindow,qcloud:a.window.qcloudDebugWindow||{}}},(a)=>{return{async closeQCloudDebugWindow(){return a(f.setQCloudDebugWindow({show:!1}))}}})(d);class i extends b.Component{constructor(a){super(a)}render(){return b.createElement(e,{title:'\u8C03\u8BD5\u817E\u8BAF\u4E91',width:1024,height:800,min_width:600,min_height:600,resizable:!0,registryId:'QCLOUD_DEBUG_WINDOW',onWindowClose:this.props.closeQCloudDebugWindow,templateHTML:'html/qcloud-debugger.html',renderClass:h})}}const j=a(null,(a)=>({async closeQCloudDebugWindow(){return a(f.setQCloudDebugWindow({show:!1}))}}))(i);module.exports=j}(require('lazyload'),require);