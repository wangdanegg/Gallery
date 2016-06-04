//工具对象的要求
//便捷性  兼容性
function Ajax(){
	//创建一个ajax的XHR对象
	function createXHR(){
		var xhr=null;
		//判断使用何种方式创建xhr对象
		if(window.XMLHttpRequest){//非IE W3C
			//创建非IE
			xhr=new XMLHttpRequest;
		}else if(window.ActiveXObject){//IE
			//创建IE
			//声明所有版本号
			var version=['Microsoft.XMLHTTP','MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
			for(var i=0;i<version.length;i++){
				xhr=new ActiveXObject(version[i]);
				//检测是否成功创建
				if(typeof xhr=='object'){
					break;
				}
			}
		}else{//没有XHR对象
			return false;
		}
		//返回xhr对象
		return xhr;
	}
	//声明一个ajax工具对象
	var ajaxObj={};
	//将XHR对象装入ajaxObject当中
	ajaxObj.xhr=createXHR();
	//添加get方法
	ajaxObj.get=function(url,func){
		ajaxObj.xhr.open('get',url);
		ajaxObj.xhr.send(null);
		//判断客户端是否发送成功
		ajaxObj.xhr.onreadystatechange=function(){
			if(ajaxObj.xhr.readyState==4){
				//判断服务器是否返回成功
				if(ajaxObj.xhr.status==200){
					//使用响应信息
					func(ajaxObj.xhr.responseText);
				}
			}
		}
	}
	//添加post方法
	ajaxObj.post=function(url,dataStr,func){
		ajaxObj.xhr.open('post',url);
		//设置头信息
		ajaxObj.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		//发送请求
		ajaxObj.xhr.send(dataStr);
		//判断客户端是否发送成功
		ajaxObj.xhr.onreadystatechange=function(){
			if(ajaxObj.xhr.readyState==4){
				//判断服务器是否返回成功
				if(ajaxObj.xhr.status==200){
					//使用响应信息
					func(ajaxObj.xhr.responseText);
				}
			}
		}
	}
	//返回工具对象
	return ajaxObj;
}