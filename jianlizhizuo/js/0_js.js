window.onload = function () {
    //   获取切换按钮
    var trun_left = document.querySelector(".trun_left");
	//获取body
	var body=document.body;
    var trun_right = document.querySelector(".trun_right");
    //  获取图片
    var img = document.getElementsByTagName("img");
    //获取所有的超链接
    var allA = document.querySelectorAll(".trun_btn");
    //获取banner
    var banner = document.querySelector(".banner");
    //  alert(banner.offsetLeft);
    //  alert(banner.offsetTop);
//定义一个背景图片的数组
var bgList=["rgb(102,126,160)","rgb(142,194,158)","rgb(240,235,209)","rgb(156,216,253)"];
    //默认显示图片的索引
    var index = 0;
    img[index].style.display = "block";
		body.style.background=bgList[index]+"url(img/bg_0/21.png)";
		body.className="trunBg";
    //  alert(img.length)
    //依次换图片
    function trunImg() {
        img[index].className = "disappear";
        img[index].style.display = "none";
        index++;
        if (index == img.length) {
            index = 0;
        }
        img[index].style.display = "block";
        img[index].className = "appear";
		//根据图片主色设置body的背景
		body.style.background=bgList[index]+"url(img/bg_0/21.png)";
//        console.log(bgList[index]);
        setA();
    };
    //添加定时器
    var timer = setInterval(trunImg, 3000);
 
    //当鼠标移动到banner上时停止计时器
    banner.onmousemove = function (event) {
        event = event || window.event;
//		alert("12");
        clearInterval(timer);
    }
    banner.onmouseleave = function (event) {
		event = event || window.event;
        clearInterval(timer);
        timer = setInterval(trunImg,2000);
    }
 
    //分别绑定单击响应函数
    //  上一张  
    trun_left.onclick = function () {
        img[index].style.display = "none";
        index--;
        if (index < 0) {
            index = img.length - 1;
        }
        img[index].style.display = "block";
		body.style.background=bgList[index]+"url(img/bg_0/21.png)";
        img[index].className = "move";
        setA();
    }
    //  下一张
    trun_right.onclick = function () {
        img[index].style.display = "none";
        index++;
        if (index == img.length) {
            index = 0;
        }
        img[index].style.display = "block";
		body.style.background=bgList[index]+"url(img/bg_0/21.png)";
        img[index].className = "move";
        setA();
    };
 
    //  设置小按钮的单击响应函数
    for (i = 0; i < allA.length; i++) {
        //为每个超链接都添加一个num属性作为标记
        allA[i].num = i;
        allA[i].onclick = function () {
            if (index != this.num) {
                img[index].style.display = "none";
                index = this.num;
                //切换到指定索引的图片
                img[index].style.display = "block";
				body.style.background=bgList[index]+"url(img/bg_0/21.png)";
                img[index].className = "move";
                setA();
            }
        }
    }
 
    //  设置小按钮的背景颜色
 
    function setA() {
        //遍历所有
        for (i = 0; i < allA.length; i++) {
            //将所有的设置为白色
            allA[i].style.background = "#fff";			
        }
        //将选中的设置为红色
        allA[index].style.background = "red";
    }
    //关于
    //获取关于按钮
    var about = document.querySelectorAll(".btList a")[2];
    about.onclick = function () {
        alert("作者：饶锐\r\r指导老师：汪荣斌 付雯");
    }
    //联系我们
    //获取联系我们按钮
    var contactOur = document.querySelectorAll(".btList a")[3];
    contactOur.onclick = function () {
        alert("软件开发1604");
    };
 
}