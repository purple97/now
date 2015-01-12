function pano2vrSkin(player,skinlayer) {
	var me=this;
	var flag=false;
	var iconUrl = '../dist/images/skinimg/';
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=(skinlayer)?skinlayer:player.divSkin;
	this.elementMouseDown = new Array();
	this.elementMouseOver = new Array();
	this.player.setMargins(0,0,0,0);
	this.updateSize=function(startElement) {
		var stack = new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	};
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	};
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	};
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId='controller'
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.ggUpdatePosition=function() {
			this.style.webkitTransition='none';
			w=this.parentNode.offsetWidth;
			this.style.left=(-142 + w/2) + 'px';
			h=this.parentNode.offsetHeight;
			this.style.top=(-65 + h) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -65px;';
		hs+='width: 286px;';
		hs+='height: 50px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId='up'
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.setAttribute('src',iconUrl+'up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=iconUrl+'up__o.svg';
		}
		this._up.onmouseout=function () {
			me._up__img.src=iconUrl+'up.svg';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId='down'
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.setAttribute('src',iconUrl+'down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=iconUrl+'down__o.svg';
		}
		this._down.onmouseout=function () {
			me._down__img.src=iconUrl+'down.svg';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId='left'
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.setAttribute('src',iconUrl+'left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=iconUrl+'left__o.svg';
		}
		this._left.onmouseout=function () {
			me._left__img.src=iconUrl+'left.svg';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId='right'
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.setAttribute('src',iconUrl+'right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=iconUrl+'right__o.svg';
		}
		this._right.onmouseout=function () {
			me._right__img.src=iconUrl+'right.svg';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId='zoomin'
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.setAttribute('src',iconUrl+'zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._tt_zoomin.style.webkitTransition='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.src=iconUrl+'zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._tt_zoomin.style.webkitTransition='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.src=iconUrl+'zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin.ggId='tt_zoomin'
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  35px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		this._tt_zoomin.innerHTML="Zoom In";
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId='zoomout'
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.setAttribute('src',iconUrl+'zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._tt_zoomout.style.webkitTransition='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.src=iconUrl+'zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._tt_zoomout.style.webkitTransition='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.src=iconUrl+'zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout.ggId='tt_zoomout'
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  35px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		this._tt_zoomout.innerHTML="Zoom Out";
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId='autorotate'
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.setAttribute('src',iconUrl+'autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._tt_autorotate.style.webkitTransition='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=iconUrl+'autorotate__o.svg';
		}
		this._autorotate.onmouseout=function () {
			me._tt_autorotate.style.webkitTransition='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=iconUrl+'autorotate.svg';
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate.ggId='tt_autorotate'
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -66px;';
		hs+='top:  35px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		this._tt_autorotate.innerHTML="Start\/Stop Autorotation";
		this._autorotate.appendChild(this._tt_autorotate);
		this._controller.appendChild(this._autorotate);
		this._info=document.createElement('div');
		this._info.ggId='info'
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 190px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.setAttribute('src',iconUrl+'info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._info.appendChild(this._info__img);
		this._info.onclick=function () {
			flag=(me._userdata.style.visibility=='hidden');
			me._userdata.style.webkitTransition='none';
			me._userdata.style.visibility=flag?'inherit':'hidden';
			me._userdata.ggVisible=flag;
		}
		this._info.onmouseover=function () {
			me._tt_info.style.webkitTransition='none';
			me._tt_info.style.visibility='inherit';
			me._tt_info.ggVisible=true;
			me._info__img.src=iconUrl+'info__o.svg';
		}
		this._info.onmouseout=function () {
			me._tt_info.style.webkitTransition='none';
			me._tt_info.style.visibility='hidden';
			me._tt_info.ggVisible=false;
			me._info__img.src=iconUrl+'info.svg';
		}
		this._tt_info=document.createElement('div');
		this._tt_info.ggId='tt_info'
		this._tt_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  35px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_info.setAttribute('style',hs);
		this._tt_info.innerHTML="Show Information";
		this._info.appendChild(this._tt_info);
		this._controller.appendChild(this._info);
		this._movemode=document.createElement('div');
		this._movemode.ggId='movemode'
		this._movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 220px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._movemode.setAttribute('style',hs);
		this._movemode__img=document.createElement('img');
		this._movemode__img.setAttribute('src',iconUrl+'movemode.svg');
		this._movemode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._movemode.appendChild(this._movemode__img);
		this._movemode.onclick=function () {
			me.player.changeViewMode(2);
		}
		this._movemode.onmouseover=function () {
			me._tt_movemode.style.webkitTransition='none';
			me._tt_movemode.style.visibility='inherit';
			me._tt_movemode.ggVisible=true;
			me._movemode__img.src=iconUrl+'movemode__o.svg';
		}
		this._movemode.onmouseout=function () {
			me._tt_movemode.style.webkitTransition='none';
			me._tt_movemode.style.visibility='hidden';
			me._tt_movemode.ggVisible=false;
			me._movemode__img.src=iconUrl+'movemode.svg';
		}
		this._tt_movemode=document.createElement('div');
		this._tt_movemode.ggId='tt_movemode'
		this._tt_movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -66px;';
		hs+='top:  35px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_movemode.setAttribute('style',hs);
		this._tt_movemode.innerHTML="Change Control Mode";
		this._movemode.appendChild(this._tt_movemode);
		this._controller.appendChild(this._movemode);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId='fullscreen'
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 250px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.setAttribute('src',iconUrl+'fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._tt_fullscreen.style.webkitTransition='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=iconUrl+'fullscreen__o.svg';
		}
		this._fullscreen.onmouseout=function () {
			me._tt_fullscreen.style.webkitTransition='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=iconUrl+'fullscreen.svg';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen.ggId='tt_fullscreen'
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  35px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		this._tt_fullscreen.innerHTML="Fullscreen";
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId='loading'
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.ggUpdatePosition=function() {
			this.style.webkitTransition='none';
			w=this.parentNode.offsetWidth;
			this.style.left=(-105 + w/2) + 'px';
			h=this.parentNode.offsetHeight;
			this.style.top=(-30 + h/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style.webkitTransition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId='loadingbg'
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+='-webkit-border-radius: 10px;';
		hs+='-moz-border-radius: 10px;';
		hs+='background-color: #000000;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId='loadingbrd'
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+='-webkit-border-radius: 10px;';
		hs+='-moz-border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext.ggId='loadingtext'
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			this.innerHTML="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
		}
		this._loadingtext.ggUpdateText();
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId='loadingbar'
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+='-webkit-transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+='-webkit-border-radius: 5px;';
		hs+='-moz-border-radius: 5px;';
		hs+='background-color: #ffffff;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId='userdata'
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.ggUpdatePosition=function() {
			this.style.webkitTransition='none';
			w=this.parentNode.offsetWidth;
			this.style.left=(-120 + w/2) + 'px';
			h=this.parentNode.offsetHeight;
			this.style.top=(-80 + h/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style.webkitTransition='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId='userdatabg'
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+='-webkit-border-radius: 10px;';
		hs+='-moz-border-radius: 10px;';
		hs+='background-color: #000000;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId='userdatabrd'
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 238px;';
		hs+='height: 138px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+='-webkit-border-radius: 10px;';
		hs+='-moz-border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title.ggId='title'
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._title.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			this.innerHTML="<b>"+me.player.userdata.title+"<\/b>";
		}
		this._title.ggUpdateText();
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description.ggId='description'
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  30px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._description.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.description;
		}
		this._description.ggUpdateText();
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author.ggId='author'
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  50px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._author.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.author;
		}
		this._author.ggUpdateText();
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime.ggId='datetime'
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  70px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._datetime.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.datetime;
		}
		this._datetime.ggUpdateText();
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright.ggId='copyright'
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  110px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='-webkit-transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._copyright.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			this.innerHTML="&#169; "+me.player.userdata.copyright;
		}
		this._copyright.ggUpdateText();
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style.webkitTransition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style.webkitTransition='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};

    this.hotspotProxyClick=function(id) { };
	this.hotspotProxyOver=function(id) { };
	this.hotspotProxyOut=function(id) { };

    this.changeActiveNode = function(id) {
        var newMarker = new Array();
        var i, j;
        var tags = me.player.userdata.tags;
        for (i = 0; i < nodeMarker.length; i++) {
            var match = false;
            if ((nodeMarker[i].ggMarkerNodeId == id) && (id != '')) match = true;
            for (j = 0; j < tags.length; j++) {
                if (nodeMarker[i].ggMarkerNodeId == tags[j]) match = true;
            }
            if (match) {
                newMarker.push(nodeMarker[i]);
            }
        }
        for (i = 0; i < activeNodeMarker.length; i++) {
            if (newMarker.indexOf(activeNodeMarker[i]) < 0) {
                if (activeNodeMarker[i].ggMarkerNormal) {
                    activeNodeMarker[i].ggMarkerNormal.style.visibility = 'inherit';
                }
                if (activeNodeMarker[i].ggMarkerActive) {
                    activeNodeMarker[i].ggMarkerActive.style.visibility = 'hidden';
                }
                if (activeNodeMarker[i].ggDeactivate) {
                    activeNodeMarker[i].ggDeactivate();
                }
            }
        }
        for (i = 0; i < newMarker.length; i++) {
            if (activeNodeMarker.indexOf(newMarker[i]) < 0) {
                if (newMarker[i].ggMarkerNormal) {
                    newMarker[i].ggMarkerNormal.style.visibility = 'hidden';
                }
                if (newMarker[i].ggMarkerActive) {
                    newMarker[i].ggMarkerActive.style.visibility = 'inherit';
                }
                if (newMarker[i].ggActivate) {
                    newMarker[i].ggActivate();
                }
            }
        }
        activeNodeMarker = newMarker;
    }

	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTilt(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTilt(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePan(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePan(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style.webkitTransform=hs;
		this._title.ggUpdateText();
		this._description.ggUpdateText();
		this._author.ggUpdateText();
		this._datetime.ggUpdateText();
		this._copyright.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		{
			this.__div=document.createElement('div');
			this.__div.ggId='hotspot'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 340px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+='-webkit-transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			};
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style.webkitTransition='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			};
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style.webkitTransition='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			};
			this._hsimage=document.createElement('div');
			this._hsimage.ggId='hsimage'
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  -16px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+='-webkit-transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.setAttribute('src',iconUrl+'hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
			this._hsimage.appendChild(this._hsimage__img);
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext.ggId='hstext'
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.ggUpdatePosition=function() {
				this.style.webkitTransition='none';
				this.style.left=(-50 + (100-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  20px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='-webkit-transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='background-color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;'
			hs+='overflow: hidden;';
			this._hstext.setAttribute('style',hs);
			this._hstext.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	};
    //初始化操作按钮
	//this.addSkin();
}