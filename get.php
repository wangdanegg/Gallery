<?php
	//����ajax��get����
	$name=$_GET['name'];
	//���ݿ���֤�û����Ƿ����
	mysql_connect('localhost','root','');
	if(mysql_errno()){
		exit('����ʧ��');
	}
	mysql_set_charset('utf8');
	mysql_select_db('travel');
	$sql="SELECT uid FROM client WHERE uname='{$name}'";
	$result=mysql_query($sql);
	if($result && mysql_affected_rows()){
		echo '1';//�û�������
	}else{
		echo '0';//�û���������
	}
	mysql_close();
?>