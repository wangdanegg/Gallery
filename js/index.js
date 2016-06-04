//getstyle
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj, false)[attr];
	}
}
//header部分
(function(){ 
	var lis=document.getElementById('header').getElementsByTagName('li');
	var a=document.getElementById('header').getElementsByTagName('a');
	var menu=document.getElementById('menu').getElementsByTagName('img')[0];
	var g=false;
	function show(){
		if(g){
			for(var i=0;i<lis.length;i++){
				lis[i].style.height='0';
			}
			g=false;
		}else{
			for(var i=0;i<lis.length;i++){
				lis[i].style.height='44px';
			}
			g=true;
		}
	}
	window.onresize=function(){
		var w=window.innerWidth?window.innerWidth:document.documentElement.clientWidth;		
		if(w>=1240){
			for(var i=0;i<lis.length;i++){
				lis[i].style.height='24px';
			}
			g=false;
		}else{
			for(var i=0;i<lis.length;i++){
				lis[i].style.height='0';
			}
			g=false;
		}
	}
	menu.onclick=show;
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			color(this.index);
		}
	}	
	function color(e){
		for(var i=0;i<lis.length;i++){
			if(i==e){
				lis[i].setAttribute('style','background:#ccc');
				a[i].setAttribute('style','color:#000');
				g=false;
			}else{
				a[i].style.color='#fff';
				lis[i].removeAttribute('style');
				g=false;
			}
		}
	}
})();
//main 
(function(){
	var lis=document.getElementById('header').getElementsByTagName('li');
	var main=document.querySelectorAll('.msw');
	var a=document.getElementById('header').getElementsByTagName('a');
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			show(this.index);
		}
	}
	function show(e){
		for(var i=0;i<main.length;i++){
			if(i==e){
				main[i].removeAttribute('style');
				lis[i].style.backgroundColor='#ccc';
				a[i].style.color='#000';
			}else{
				main[i].style.height=0;
				a[i].style.color='#fff';
				lis[i].removeAttribute('style');
			}
		}
	}	
	window.onload=function(){
		for(var i=0;i<main.length;i++){
			if(i==0){
				main[i].removeAttribute('style');
				lis[i].style.backgroundColor='#ccc';
				a[i].style.color='#000';
			}else{
				main[i].style.height=0;
				a[i].style.color='#fff';
				lis[i].removeAttribute('style');
			}
		}
	}	
})();
//Gallery
(function(){
	var div=document.querySelectorAll('#gall div img');
	var img=document.querySelectorAll('#gall .gallimg');
	var zimg=document.getElementById('zimg');
	var zhe=document.getElementById('zhe');
	var close=document.getElementById('close');
	var pre=document.getElementById('pre');
	var next=document.getElementById('next');
	var order=0;
	pre.onclick=up;
	next.onclick=down;
	close.onclick=hd;
	for(var i=0;i<div.length;i++){
		div[i].index=i;
		div[i].onclick=function(){
			show(this.index);
			order=this.index;
		}
	}
	function show(e){
		for(var i=0;i<img.length;i++){
			if(i==e){
				var sr=img[i].getAttribute('src');
				zhe.className='bl';
				zimg.setAttribute('src',sr);
			}
		}
	}
	function hd(){
		zhe.className='hd';
	}
	function up(){
		--order;
		if(order<0){
			order=img.length-1;
		}
		for(var i=0;i<img.length;i++){
			if(i==order){
				var sr=img[i].getAttribute('src');
				zimg.setAttribute('src',sr);
			}
		}
	}
	function down(){
		++order;
		if(order>=img.length){
			order=0;
		}
		for(var i=0;i<img.length;i++){
			if(i==order){
				var sr=img[i].getAttribute('src');
				zimg.setAttribute('src',sr);
			}
		}
	}
})();
//Services
(function(){
	var ser_l=document.getElementById('ser_left').getElementsByTagName('div');
	var ser_r=document.getElementById('ser_right').getElementsByTagName('ul')[0].getElementsByTagName('li');
	for(var i=0;i<ser_r.length;i++){
		ser_r[i].index=i;
		ser_r[i].onclick=function(){
			change(this.index);
		}
	}
	function change(e){
		for(var i=0;i<ser_r.length;i++){
			ser_r[i].index=i;
			if(i==e){
				ser_l[i].className='bl';
				ser_r[i].style.backgroundColor='#b10021';
			}else{
				ser_l[i].className='hd';
				ser_r[i].style.backgroundColor='';
			}
		}
	}
})();
//abo
(function(){
	var abo_l=document.getElementById('abo_left').getElementsByTagName('div');
	var abo_r=document.getElementById('abo_right').getElementsByTagName('ul')[0].getElementsByTagName('li');
	for(var i=0;i<abo_r.length;i++){
		abo_r[i].index=i;
		abo_r[i].onclick=function(){
			change(this.index);
		}
	}
	function change(e){
		for(var i=0;i<abo_r.length;i++){
			abo_r[i].index=i;
			if(i==e){
				abo_l[i].className='bl';
				abo_r[i].style.backgroundColor='#b10021';
			}else{
				abo_l[i].className='hd';
				abo_r[i].style.backgroundColor='';
			}
		}
	}
})();
//ajax
(function(){
	var users=document.getElementById('user');
	users.onblur=function(){
		//获取当前用户的名称
		var username=this.value;
		var input=this;
		//进行ajax验证
		var test=Ajax();
		test.get('get.php?name='+username,callFunc);
		function callFunc(data){
			if(data==0){
				//用户名可以注册
				input.style.color='green';
			}else if(data==1){
				//用户名已存在
				input.style.color='red';
			}else{
				//操作失败
				input.style.color='yellow';
			}
		}
	}
})();