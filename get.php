<?php
	//接受ajax的get传参
	$name=$_GET['name'];
	//数据库验证用户名是否存在
	mysql_connect('localhost','root','');
	if(mysql_errno()){
		exit('操作失败');
	}
	mysql_set_charset('utf8');
	mysql_select_db('travel');
	$sql="SELECT uid FROM client WHERE uname='{$name}'";
	$result=mysql_query($sql);
	if($result && mysql_affected_rows()){
		echo '1';//用户名存在
	}else{
		echo '0';//用户名不存在
	}
	mysql_close();
?>