//���߶����Ҫ��
//�����  ������
function Ajax(){
	//����һ��ajax��XHR����
	function createXHR(){
		var xhr=null;
		//�ж�ʹ�ú��ַ�ʽ����xhr����
		if(window.XMLHttpRequest){//��IE W3C
			//������IE
			xhr=new XMLHttpRequest;
		}else if(window.ActiveXObject){//IE
			//����IE
			//�������а汾��
			var version=['Microsoft.XMLHTTP','MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
			for(var i=0;i<version.length;i++){
				xhr=new ActiveXObject(version[i]);
				//����Ƿ�ɹ�����
				if(typeof xhr=='object'){
					break;
				}
			}
		}else{//û��XHR����
			return false;
		}
		//����xhr����
		return xhr;
	}
	//����һ��ajax���߶���
	var ajaxObj={};
	//��XHR����װ��ajaxObject����
	ajaxObj.xhr=createXHR();
	//���get����
	ajaxObj.get=function(url,func){
		ajaxObj.xhr.open('get',url);
		ajaxObj.xhr.send(null);
		//�жϿͻ����Ƿ��ͳɹ�
		ajaxObj.xhr.onreadystatechange=function(){
			if(ajaxObj.xhr.readyState==4){
				//�жϷ������Ƿ񷵻سɹ�
				if(ajaxObj.xhr.status==200){
					//ʹ����Ӧ��Ϣ
					func(ajaxObj.xhr.responseText);
				}
			}
		}
	}
	//���post����
	ajaxObj.post=function(url,dataStr,func){
		ajaxObj.xhr.open('post',url);
		//����ͷ��Ϣ
		ajaxObj.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		//��������
		ajaxObj.xhr.send(dataStr);
		//�жϿͻ����Ƿ��ͳɹ�
		ajaxObj.xhr.onreadystatechange=function(){
			if(ajaxObj.xhr.readyState==4){
				//�жϷ������Ƿ񷵻سɹ�
				if(ajaxObj.xhr.status==200){
					//ʹ����Ӧ��Ϣ
					func(ajaxObj.xhr.responseText);
				}
			}
		}
	}
	//���ع��߶���
	return ajaxObj;
}