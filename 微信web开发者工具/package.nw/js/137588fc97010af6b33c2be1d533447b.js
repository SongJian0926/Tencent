'use strict';!function(require,directRequire){const a=require('react'),b=require('./98604b5abeae9cc6b63cd1f55ebb2c7e.js'),c=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),d=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),e=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),f=require('./a1dd553cc059d528bb0ef56afed53968.js'),{enterForeground:g}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),{connect:h}=require('react-redux');class i extends a.Component{constructor(a){super(a),this.state={}}componentWillReceiveProps(){}onSelectClick(a){let b=this.props.sceneList[a],c=b.value;this.props.setBackground({scene:c,show:!1});let d=this.props.webviewInfo.pathName,e=this.props.webviewInfo.query,f=this.props.condiction,h={scene:c,path:d,query:e};f.scene==c&&(h.shareInfo=f.shareInfo,h.referrerInfo=f.referrerInfo),g('toolbarAndBackMode',h)}render(){let c=this.props,e=this.props.sceneList.map((a)=>{return`${a.value}: ${a.name}`});return a.createElement('div',{className:'ui-mask',ref:'container',style:c.show?{opacity:'0.999999'}:d.displayNone},a.createElement(b,{show:c.show,list:e,height:this.state.height,width:this.props.width,top:62,onSelectClick:this.onSelectClick.bind(this)}))}}module.exports=h((a)=>{let b=a.project.current,c=b.compileType,d=b.condiction[c],e={};d&&d.list&&(e=d.list[d.current]||{});let f=a.simulator.webviewInfos[a.simulator.currentWebviewID]||{},g=a.toolbar.deviceInfo,h=a.toolbar.deviceScale,i=(g.screenWidth+100)*h,j=Math.min(Math.max(a.window.simulator.width,i)-100*h,g.screenWidth);return{width:j,show:a.simulator.backgroundShow,sceneMap:a.config.sceneMap||{},sceneList:a.config.sceneList||[],condiction:e,compileType:c,webviewInfo:f}},(a)=>{return{setBackground:c.bindActionCreators(e.setBackground,a)}})(i)}(require('lazyload'),require);