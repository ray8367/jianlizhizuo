//单击响应方法
function myClick(idstr,fun){
	var btn=document.getElementById(idstr);
	btn.onclick=fun; 
}
//删除职位方法
	function delSpan(){
	var spanAll=document.querySelectorAll(".table2 span")
	for(i=0;i<spanAll.length;i++){
		var num;
		spanAll[i].num=i;
		spanAll[i].onclick=function(){
			//获取所点击按钮的索引
			var j=this.num;
			//获取基本资料中的li
			var table2Li=document.querySelectorAll(".table2 Li");	
			//删除指定li
			table2Li[j].parentElement.removeChild(table2Li[j]);
		}
	}
	}
window.onload=function(){
	//获取基本资料table
	var table1=document.querySelector(".table1");	
	//获取求职意向table
	var table2=document.querySelector(".table2");	
	//获取纸张
	var paper=document.getElementsByClassName("paper1")[0];
	//获取内容区
	var content=document.getElementsByClassName("content")[0];
	//拖动方法
	function myMouse(idstr,fun){
	var btn=document.getElementById(idstr);
	btn.onmousedown=fun; 
}
	
	
	//添加方法1
//参数
//	str:添加的内容名称
//  plchd:提示文字
function add1(str,plchd){
			//获取tbody
			var tbody1=table1.getElementsByTagName("tbody")[0];
			//获取基本资料中的tr
			var table1Tr=document.querySelectorAll(".table1 tr");	
			//获取基本资料中的td
			var table1Td=document.querySelectorAll(".table1 td");	
		//获取最后一行的tr
		var trEnd=table1Tr[table1Tr.length-1];
		//获取最后一行的td
		var tdEnd=trEnd.getElementsByTagName("td");
		//判断最后一行tr中td的长度
		if(tdEnd.length==4){
			//td长度为4，则新建一个tr再新建td
			var newTr=document.createElement("tr");
			if(plchd){				
				newTr.innerHTML="<td>"+str+"</td><td><input type='text'"+" placeholder="+plchd+" class='inpt_data'/></td>"
			}
			else{
				newTr.innerHTML="<td>"+str+"</td><td><input type='text'"+"  class='inpt_data'/></td>"
			}
			tbody1.appendChild(newTr);
		}
		else if(tdEnd.length==2){
			//td长度为2，则新建td添加到tr中
			var newTd1=document.createElement("td");
			var newTd2=document.createElement("td");
			newTd1.innerHTML=str;
			if(plchd){
				newTd2.innerHTML="<input type='text' placeholder="+plchd+" class='inpt_data'/>";		
			}
			else{
				newTd2.innerHTML="<input type='text' class='inpt_data'/>";		
			}
			trEnd.appendChild(newTd1);
			trEnd.appendChild(newTd2);
		}	
	}
	
	//移除方法1
//参数
//str:需要删除的模块名称
function remove1(str){
	var tbody1=table1.getElementsByTagName("tbody")[0];
			var table1Tr=document.querySelectorAll(".table1 tr");	
			var table1Td=document.querySelectorAll(".table1 td");	
		for(i=table1Td.length-2;i>=0;i--){
			if(table1Td[i].innerHTML==str){
				console.log("找到"+str+"了");
				table1Td[i].parentNode.removeChild(table1Td[i]);
				table1Td[i+1].parentNode.removeChild(table1Td[i+1]);
				console.log("将"+str+"删除了");
				var trEnd=table1Tr[table1Tr.length-1];
				var tdEnd=trEnd.getElementsByTagName("td");
					if(tdEnd.length==0){
					trEnd.parentNode.removeChild(trEnd);
					}
				break;		
			}
			else{
				console.log("没有找到"+str)
			}
			i--;
		}
}
//拖动添加方法
//参数
//str:需要删除的模块名称
//plchd:提示文字
function drawAdd(str,plchd){
		//绑定鼠标移动事件
		document.onmousemove=function(event){
		//获取鼠标坐标
		event=event||window.event;
		var x=event.clientX;
		var y=event.clientY;
		//拖动至简历内容区域时
		if((x>400&&x<895)&&(y>80&&y<789))
		{	
			this.onmouseup=function(){
				add1(str,plchd);				
				this.onmousemove=null;
				this.onmouseup=null;
			};
		}
		}
	}

	//拖动添加姓名
	myMouse("uname",function(){
		drawAdd("姓名:","you name");
	});
	//拖动添加年龄
	myMouse("age",function(){
		drawAdd("年龄:");
	});
	//拖动添加性别
	myMouse("sex",function(){
		drawAdd("性别:","男/女");
	});
	//拖动添加爱好
	myMouse("like",function(){
		drawAdd("爱好:");
	});
	//拖动添出生日期
	myMouse("birth",function(){
		drawAdd("出生日期:");
	});
	//拖动添加专业
	myMouse("major",function(){
		drawAdd("专业:");
	});
	//拖动添加学历
	myMouse("eduhstr",function(){
		drawAdd("学历:");
	});
	//拖动添加民族
	myMouse("nation",function(){
		drawAdd("民族:");
	});
	//拖动添加联系方式
	myMouse("contact",function(){
		drawAdd("联系方式:","电话/邮箱/qq");
	});
	//拖动添加其他
	myMouse("theElse",function(){
		drawAdd("其他","此处文字可编辑");
	});
	//添加联系方式
	myClick("addCtt",function(){
	add1("联系方式:","电话/邮箱/qq")
	});
	//移除联系方式
	myClick("vmCtt",function(){
		remove1("联系方式:");
	});
	//添加姓名
	myClick("addUnm",function(){
		add1("姓名:")
	});
	//移除姓名
	myClick("vmUnm",function(){
	remove1("姓名:");
	});
	//添加性别
	myClick("addSex",function(){
		add1("性别:","男/女")
	});
	//移除性别
	myClick("vmSex",function(){
	remove1("性别:");
	});
		
	//添加年龄
	myClick("addAge",function(){
	add1("年龄:");
	});
	//移除年龄
	myClick("vmAge",function(){
		remove1("年龄:");
	});
	//添加爱好
	myClick("addLike",function(){
	add1("爱好:")
	});
	//移除爱好
	myClick("vmLike",function(){
		remove1("爱好:");
	});
	//添加出生日期
	myClick("addBirth",function(){
		add1("出生日期:");
	});
	//移除出生日期
	myClick("vmBirth",function(){
		remove1("出生日期:");
	});
	//添加专业
	myClick("addMajor",function(){
			add1("专业:");
	});
	//移除专业
	myClick("vmMajor",function(){
		remove1("专业:");
	});
	//添加民族
	myClick("addNation",function(){
		add1("民族:");
	});
	//移除民族
	myClick("vmNation",function(){
	remove1("民族:");
	});
	//添加学历
	myClick("addEduhstr",function(){
		add1("学历:");
	});
	//移除学历
	myClick("vmEduhstr",function(){
		remove1("学历:");
	});
	//添加其他
	myClick("theElse",function(){
		add1("其他:","此处文字可编辑");
	});
	//添加职位
	function addPost(){
			//获取求职意向中的ul
			var ul=document.querySelectorAll(".table2 ul")[0];	
			//获取基本资料中的li
			var table2Li=document.querySelectorAll(".table2 Li");	
			//添加一个新的li
			var newLi=document.createElement("li");
			newLi.innerHTML="<input type='text' placeholder='戳我填写职位信息' class='inpt_can'/><span></span>";
			ul.appendChild(newLi);		
			//获取所有table2中的span
	var spanAll=document.querySelectorAll(".table2 span")
	 spanAll[i].onclick=delSpan;
	}
//	点击按钮添加职位 
	myClick("addPost",function(){
		addPost();
	}
	);
	//拖拽添加职位 
	myMouse("post",function(){
	//绑定鼠标移动事件
		document.onmousemove=function(event){
		//获取鼠标坐标
		event=event||window.event;
		var x=event.clientX;
		var y=event.clientY;
		//拖动至简历内容区域时
		if((x>400&&x<895)&&(y>80&&y<789))
		{	
			this.onmouseup=function(){
				addPost();				
				this.onmousemove=null;
				this.onmouseup=null;
			};
		}
		}
	});
	var spanAll=document.querySelectorAll(".table2 span")
	for(i=0;i<spanAll.length;i++){
		spanAll[i].onclick=delSpan;
	}
	//添加教育背景
		myMouse("eduBack",function(){
			//绑定鼠标移动事件
		document.onmousemove=function(event){
		//获取鼠标坐标
		event=event||window.event;
		var x=event.clientX;
		var y=event.clientY;
		//拖动至简历内容区域时
		if((x>400&&x<895)&&(y>80&&y<789))
		{	
			this.onmouseup=function(){
				//创造一个新的div
				var newDiv=document.createElement("div");
				newDiv.innerHTML="<p>教育背景</p><tr><textarea name='eduBg'></textarea></tr>";
				content.appendChild(newDiv);
				this.onmousemove=null;
				this.onmouseup=null;
			};
		}
		}
		});
	//添加职业技能
		myMouse("vss",function(){
			//绑定鼠标移动事件
		document.onmousemove=function(event){
		//获取鼠标坐标
		event=event||window.event;
		var x=event.clientX;
		var y=event.clientY;
		//拖动至简历内容区域时
		if((x>400&&x<895)&&(y>80&&y<789))
		{	
			this.onmouseup=function(){
				//创造一个新的div
				var newDiv=document.createElement("div");
				newDiv.innerHTML="<p>职业技能</p><tr><textarea></textarea></tr>";
				content.appendChild(newDiv);
				this.onmousemove=null;
				this.onmouseup=null;
			};
		}
		}
		});
	//添加自我评价
		myMouse("myself",function(){
			//绑定鼠标移动事件
		document.onmousemove=function(event){
		//获取鼠标坐标
		event=event||window.event;
		var x=event.clientX;
		var y=event.clientY;
		//拖动至简历内容区域时
		if((x>400&&x<895)&&(y>80&&y<789))
		{	
			this.onmouseup=function(){
				//创造一个新的div
				var newDiv=document.createElement("div");
				newDiv.innerHTML="<p>自我评价</p><tr><textarea></textarea></tr>";
				content.appendChild(newDiv);
				this.onmousemove=null;
				this.onmouseup=null;
			};
		}
		}
		});
//设置背景图案
	//获取皮肤按钮
	var skin=document.querySelectorAll(".mystyle li")
	//获取小标题
	var pp=document.querySelectorAll(".content p")
	//皮肤样式方法
	function attr(bg,pBg,ftColr){
		paper.style.background=bg;
		for(i=0;i<pp.length;i++){
			pp[i].style.backgroundImage=pBg;
			paper.style.color=ftColr;
		}
	}
	skin[0].onclick=function(){
	attr("#fff","linear-gradient(90deg,#ccc,#ddd,#fff)","#000");	
	};
	skin[1].onclick=function(){
		attr("url(img/bg/3.jpg)","none","#fff");
	};
	skin[2].onclick=function(){
		attr("url(img/bg/2.jpg)","none","#000");
	}
	skin[3].onclick=function(){
		attr("url(img/bg/1.jpg)","none","#000");
		
	}
}

