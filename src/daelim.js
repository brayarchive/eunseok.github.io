var chaptarr =[];
var intarr = [];
var charr = [];
var tY = 1;
var bY = 2;
var fired = 0;

window.onload = function(){
	$("#backvid").attr("playsinline", "");
	var height = $("#mapimg1").height();
	var width = window.innerWidth/2 - 40;
	var vid = document.getElementById("backvid");
	var vidratio = vid.videoWidth/window.innerWidth;

	for(var i=0; i<$(".chart").length; i++){
		$(".chartinner").eq(i).css({"height":height+"px"});
		// $(".chartinner").eq(i).css({height:$(".chart").eq(i).height()-$(".chartinfo").eq(i).height()+"px"});
	}

	$( window ).resize( function() {
		var height = $("#mapimg1").height();
		var width = window.innerWidth/2 - 40;
		vidratio = vid.videoWidth/window.innerWidth;
		for(var i=0; i<$(".chart").length; i++){
			$(".chartinner").eq(i).css({"height":height+"px"});
			// $(".chartinner").eq(i).css({height:$(".chart").eq(i).height()-$(".chartinfo").eq(i).height()+"px"});
		}
		$("#chart6 .axisinner").eq(0).css({height:$("#chart6 #multiline").height()+"px"})
		chaptarr =[];
		intarr = [];
		charr = [];
		for(var i=0; i<$(".chaptertitle").length; i++){
			chaptarr.push($(".chaptertitle").eq(i).position().top);
		}
		for(var i=0; i<$(".interview").length; i++){
			intarr.push($(".interview").eq(i).position().top);
		}
		for(var i=0; i<$(".chart").length; i++){
			charr.push($(".chart").eq(i).position().top);
		}
	});

	var svgNS = "http://www.w3.org/2000/svg";  

	d3.csv("./src/chart1.csv", function(error, data) {
		for(var i=0; i<data.length; i++){
			var bar = document.createElement("div");
			bar.className = "bar";

			var korean = document.createElement("div");
			var foreign = document.createElement("div");
			korean.style.width = "100%";
			korean.style.height = 100*(data[i].한국인/90000)+"%";
			korean.style.background = "#38252A";
			korean.setAttribute("data-content" , data[i].한국인);
			foreign.style.width = "100%";
			foreign.style.height = 100*(data[i].외국인/90000)+"%";
			foreign.style.background = "#E14D46";
			foreign.setAttribute("data-content", data[i].외국인);

			bar.appendChild(foreign);
			bar.appendChild(korean);

			bar.style.width = "4.6%";
			$("#chart1 .barinner").eq(0).append(bar);			
		}

		for(var i=1; i<6; i++){
			var axis = document.createElement('div');
			var axisval = document.createElement("div");
			axisval.innerHTML = 18000*i;
			axisval.style.color = "#999";
			axisval.style.position = "absolute";
			axisval.style["z-index"] = "0";
			axisval.style["font-size"] = "10px";
			axisval.style["text-align"] = "left";
			axisval.style["padding-left"] = "5px";
			axisval.style.bottom = 100*(i*18000/90000) + "%";
			axisval.style.width = "100%";


			axis.style.bottom = 100*(i*18000/90000) + "%";
			axis.style.position = "absolute";
			axis.style.width = "100%";
			axis.style.height = "1px";
			axis.style["border-bottom"] = "1px dotted #38252A";
			$("#chart1 .axisinner").eq(0).append(axis);
			$("#chart1 .axisinner").eq(0).append(axisval);
		}

		setTimeout(function(){
			var space =  $("#chart1 .bar").eq(3).position().left - $("#chart1 .bar").eq(4).position().left;

			for(var i=0; i<data.length; i++){
				var year = document.createElement('div');
				year.innerHTML = data[i].기간;
				year.style.transform = "rotate(60deg)";
				year.style.position= "absolute";
				if(i == 0){
					// year.style.left = "calc("+($("#chart1 .bar").eq(1).position().left+space)+"px + 6% )";
					year.style.left = "calc(7% + "+(4.8*i)+"%)";

				}
				else{
					// year.style.left = "calc("+($("#chart1 .bar").eq(i).position().left)+"px + 6% )";
					year.style.left = "calc(7% + "+(4.8*i)+"%)";
				}
				year.style["font-size"] = "10px";
				$("#chart1 .chart-x").eq(0).append(year);
			}
		},1000);

	});


	d3.csv("./src/chart2.csv", function(error, data) {

		for(var i=0; i<data.length; i++){
			var bar = document.createElement("div");
			bar.className = "bar";

			var korean = document.createElement("div");
			var foreign = document.createElement("div");
			korean.style.width = "100%";
			korean.style.height = 100*(data[i].한국인/30000)+"%";
			korean.style.background = "#38252A";
			korean.setAttribute("data-content" , data[i].한국인);
			foreign.style.width = "100%";
			foreign.style.height = 100*(data[i].외국인/30000)+"%";
			foreign.style.background = "#E14D46";
			foreign.setAttribute("data-content", data[i].외국인);

			bar.appendChild(foreign);
			bar.appendChild(korean);

			bar.style.width = "4.6%";
			$("#chart2 .barinner").eq(0).append(bar);
		}

		for(var i=1; i<6; i++){
			var axis = document.createElement('div');
			var axisval = document.createElement("div");
			axisval.innerHTML = 6000*i;
			axisval.style.color = "#999";
			axisval.style.position = "absolute";
			axisval.style["font-size"] = "10px";
			axisval.style["z-index"] = "0";
			axisval.style["text-align"] = "left";
			axisval.style["padding-left"] = "5px";
			axisval.style.bottom = 100*(i*6000/30000) + "%";
			axisval.style.width = "100%";

			axis.style.bottom = 100*(i*6000/30000) + "%";
			axis.style.position = "absolute";
			axis.style.width = "100%";
			axis.style.height = "1px";
			axis.style["border-bottom"] = "1px dotted #38252A";
			// axis.style.background = "#999";
			$("#chart2 .axisinner").eq(0).append(axis);
			$("#chart2 .axisinner").eq(0).append(axisval);
		}

		setTimeout(function(){
			var space =  $("#chart2 .bar").eq(3).position().left - $("#chart2 .bar").eq(4).position().left;

			for(var i=0; i<data.length; i++){
				var year = document.createElement('div');
				year.innerHTML = data[i].기간;
				year.style.transform = "rotate(60deg)";
				year.style.position= "absolute";
				if(i == 0){
					// year.style.left = "calc("+($("#chart1 .bar").eq(1).position().left+space)+"px + 6% )";
					year.style.left = "calc(7% + "+(4.8*i)+"%)";

				}
				else{
					// year.style.left = "calc("+($("#chart1 .bar").eq(i).position().left)+"px + 6% )";
					year.style.left = "calc(7% + "+(4.8*i)+"%)";
				}
				year.style["font-size"] = "10px";
				$("#chart2 .chart-x").eq(0).append(year);
			}
		},1000);

	});

	d3.csv("./src/chart3.csv", function(error, data) {

		for(var i=0; i<data.length; i++){
			var bar = document.createElement("div");
			bar.className = "bar";

			var korean = document.createElement("div");
			korean.style.width = "100%";
			korean.style.height = 100*(data[i].num/9000)+"%";
			if(i == 5 || i== 7 || i== 8 || i== 9){
				korean.style.background = "#38252A";
			}
			else{
				korean.style.background = "#E14D46";
			}
			korean.setAttribute("data-content" , data[i].num);

			bar.appendChild(korean);

			bar.style.width = "8.6%";
			$("#chart4 .barinner").eq(0).append(bar);

			
		}

		for(var i=1; i<6; i++){
			var axis = document.createElement('div');
			var axisval = document.createElement("div");
			axisval.innerHTML = 1800*i;
			axisval.style.color = "#999";
			axisval.style.position = "absolute";
			axisval.style["z-index"] = "0";
			axisval.style["font-size"] = "10px";
			axisval.style["text-align"] = "left";
			axisval.style["padding-left"] = "5px";
			axisval.style.bottom = 100*(i*1800/9000) + "%";
			axisval.style.width = "100%";


			axis.style.bottom = 100*(i*1800/9000) + "%";
			axis.style.position = "absolute";
			axis.style.width = "100%";
			axis.style.height = "1px";
			axis.style["border-bottom"] = "1px dotted #38252A";
			$("#chart4 .axisinner").eq(0).append(axis);
			$("#chart4 .axisinner").eq(0).append(axisval);
		}

		setTimeout(function(){
			for(var i=data.length-1; i>=0; i--){
				var year = document.createElement('div');
				year.innerHTML = data[i].place;
				// year.style.transform = "rotate(60deg)";
				year.style.width = "8%";
				year.style["word-break"]= "keep-all";
				year.style.position= "absolute";
				if(i == 0){
					year.style.left = (12+i*8.6)+ "%";
				}
				else{
					year.style.left = (12+i*8.6)+"%";

				}
				year.style["font-size"] = "10px";
				$("#chart4 .chart-x").eq(0).append(year);
			}
		},1000);

	});

	d3.csv("./src/chart4.csv", function(error, data) {

		for(var i=0; i<data.length; i++){
			var bar = document.createElement("div");
			bar.className = "bar";

			var korean = document.createElement("div");
			korean.style.width = "100%";
			korean.style.height = 100*(data[i].num/9000)+"%";
			korean.style.background = "#E14D46";
			korean.setAttribute("data-content" , data[i].num);

			bar.appendChild(korean);

			bar.style.width = "4.6%";
			$("#chart5 .barinner").eq(0).append(bar);

			
		}

		for(var i=1; i<6; i++){
			var axis = document.createElement('div');
			var axisval = document.createElement("div");
			axisval.innerHTML = 1800*i;
			axisval.style.color = "#999";
			axisval.style.position = "absolute";
			axisval.style["z-index"] = "0";
			axisval.style["font-size"] = "10px";
			axisval.style["text-align"] = "left";
			axisval.style["padding-left"] = "5px";
			axisval.style.bottom = 100*(i*1800/9000) + "%";
			axisval.style.width = "100%";


			axis.style.bottom = 100*(i*1800/9000) + "%";
			axis.style.position = "absolute";
			axis.style.width = "100%";
			axis.style.height = "1px";
			axis.style["border-bottom"] = "1px dotted #38252A";
			$("#chart5 .axisinner").eq(0).append(axis);
			$("#chart5 .axisinner").eq(0).append(axisval);
		}

		setTimeout(function(){
			var space =  $("#chart5 .bar").eq(3).position().left - $("#chart5 .bar").eq(4).position().left;
			for(var i=0; i<data.length; i++){
				var year = document.createElement('div');
				year.innerHTML = data[i].time;
				year.style.transform = "rotate(60deg)";
				year.style.position= "absolute";
				if(i == 0){
					// year.style.left = "calc("+($("#chart1 .bar").eq(1).position().left+space)+"px + 6% )";
					year.style.left = "calc(7% + "+(3.8*i)+"%)";

				}
				else{
					// year.style.left = "calc("+($("#chart1 .bar").eq(i).position().left)+"px + 6% )";
					year.style.left = "calc(7% + "+(3.8*i)+"%)";
				}
				year.style["font-size"] = "10px";
				$("#chart5 .chart-x").eq(0).append(year);
			}
		},1000);

	});


	function createCircle(x,y,name,parentElement,fill){
		var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"
	    myCircle.setAttributeNS(null,"class",name);
	    myCircle.setAttributeNS(null,"cx",x);
	    myCircle.setAttributeNS(null,"cy",y);
	    myCircle.setAttributeNS(null,"r",5);
	    myCircle.setAttributeNS(null,"fill",fill);
	    myCircle.setAttributeNS(null,"stroke","none");

	    parentElement.append(myCircle);
	}

	function createLine(x,y,x2,y2,name,parentElement,stroke){
		var myLine = document.createElementNS(svgNS,"line");
	    myLine.setAttribute("class",name);
	    myLine.setAttribute("x1",x);
	    myLine.setAttribute("y1",y);
	    myLine.setAttribute("x2",x2);
	    myLine.setAttribute("y2",y2);
	    myLine.setAttribute("stroke",stroke);
	    parentElement.append(myLine);
	}

	function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}

	d3.csv("./src/chart5.csv", function(error, data) {
		// var arr = [{name:"단기사증(C-3)",values:[]},{name:"기술연수(D-3)",values:[]},{name:"일반연수(D-4)",values:[]},{name:"연수・고용허가(D3・D4)",values:[]},{name:"방문동거(F-1)",values:[]},{name:"거주(F-2)",values:[]},{name:"동반(F-3)",values:[]},{name:"결혼이민(F-6)",values:[]},{name:"결혼・동반・동거・거주(F1・F2・F3・F6)",values:[]},{name:"방문취업(H2)",values:[]},{name:"재외동포(F4)",values:[]},{name:"영주권(F5)",values:[]}];
		var arr = [{name:"단기사증(C-3)",values:[]},{name:"연수・고용허가(D3・D4)",values:[]},{name:"결혼・동반・동거・거주(F1・F2・F3・F6)",values:[]},{name:"방문취업(H2)",values:[]},{name:"재외동포(F4)",values:[]},{name:"영주권(F5)",values:[]}];
		for(var i =0; i<data.length; i++){
			arr[0].values.push({date: data[i].year, pop: data[i].C3});
			arr[1].values.push({date: data[i].year, pop: data[i].D3D4});
			arr[2].values.push({date: data[i].year, pop: data[i].FFFF});
			arr[3].values.push({date: data[i].year, pop: data[i].H2});
			arr[4].values.push({date: data[i].year, pop: data[i].F4});
			arr[5].values.push({date: data[i].year, pop: data[i].F5});
		}

		var colorarr = ["#38252A","#E14D46","#00AB4A","#F6CD1D","#4871B6","#6F706F"];
		for(var i=0; i<arr.length; i++){
			var className = "multiline_"+i,
				color = colorarr[i];


			$("#chart6 .legend_box").eq(i).css({background:color});

			for(var j=0; j<arr[i].values.length; j++){
				var x = (arr[i].values[j].date-2010)*715/9;
				var y = (715-120-(arr[i].values[j].pop/700));
				try{var x2 = (arr[i].values[j+1].date-2010)*715/9;
					var y2 = (715-120-(arr[i].values[j+1].pop/700));
					createLine(x+50, y, x2+50, y2, className, $("#multiline"), color);
				}
				catch(e){

				}

				createCircle(x+50,y,className,$("#multiline"),color);
			}
		}
		for(var i=1; i<5; i++){
			var axis = document.createElement('div');
			var axisval = document.createElement("div");
			axisval.innerHTML = 100000*i;
			axisval.style.color = "#999";
			axisval.style.position = "absolute";
			axisval.style["z-index"] = "0";
			axisval.style["font-size"] = "10px";
			axisval.style["text-align"] = "left";
			axisval.style["padding-left"] = "5px";
			axisval.style.bottom = 100*(i*100000/400000) + "%";
			axisval.style.width = "100%";

			axis.style.bottom = 100*(i*100000/400000) + "%";
			axis.style.position = "absolute";
			axis.style.width = "100%";
			axis.style.height = "1px";
			axis.style["border-bottom"] = "1px dotted #38252A";
			$("#chart6 .axisinner").eq(0).append(axis);
			$("#chart6 .axisinner").eq(0).append(axisval);
		}
		for(var i=0; i<9; i++){
			var yaxis = document.createElement('div');
			yaxis.style.left = "calc(-16px + 10% + "+(11*i)+"%)";
			yaxis.style.display = "inline-block";
			yaxis.style.position = "absolute";
			yaxis.innerHTML = (2010+i);
			$("#chart6 .chart-x").eq(0).append(yaxis);
		}
		$("#chart6 .axisinner").eq(0).css({height:$("#multiline").height()+"px"})


	});

	for(var i=0; i<$(".chaptertitle").length; i++){
		chaptarr.push($(".chaptertitle").eq(i).position().top);
	}
	for(var i=0; i<$(".interview").length; i++){
		intarr.push($(".interview").eq(i).position().top);
	}
	
	$("#articleindex").on("click",function(e){
		$("html").css({"overflow-y":"hidden"});
		$("#menu_items").css({display:"block"});
		setTimeout(function(){
			$("#menu_items").css({opacity:1});
		},200);
		e.preventDefault();
	})

	$("#closemenu").on("click",function(e){
		$("#menu_items").css({opacity:0});
		$("html").css({"overflow-y":"scroll"});
		setTimeout(function(){
			$("#menu_items").css({display:"none"});
		},300);
		e.preventDefault();
	});
	$("#mobmenu").on("click",function(){
		$("html").css({"overflow-y":"hidden"});
		$("#menu_items").css({display:"block"});
		setTimeout(function(){
			$("#menu_items").css({opacity:1});
		},200);
	});

	$(".yeara").on("click",function(){
		var year = $(this).find("a").eq(0).html();
		$(".yeara").find('a').attr("class","");
		if(year == 2013){
			$("#mapimg1").css({opacity:1});
			$("#mapimg2").css({opacity:0});
			$(this).find("a").eq(0).attr("class","selected");
		}
		else if(year == 2018){
			$("#mapimg2").css({opacity:1});
			$("#mapimg1").css({opacity:0});
			$(this).find("a").eq(0).attr("class","selected");
		}
	})

	$(".bigchapt").on("click",function(){
		$("html, body").scrollTop($(".chaptertitle").eq($(this).index(".bigchapt")).position().top);
		$("#menu_items").css({opacity:0});
		$("html").css({"overflow-y":"scroll"});
		setTimeout(function(){
			$("#menu_items").css({display:"none"});
		},300);
	});

	$(".smallshapt").on("click",function(){
		$("html, body").scrollTop($("h1").eq($(this).index(".smallshapt")).position().top);
		$("#menu_items").css({opacity:0});
		$("html").css({"overflow-y":"scroll"});
		setTimeout(function(){
			$("#menu_items").css({display:"none"});
		},300);
	});

    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }

    // $("#video_wrapper").html('<iframe id="iframe" style="width:200%; height:200%; transform:translate(-25%,-25%)" src="https://www.youtube.com/embed/uoyW1r_EHfs?controls=0&showinfo=0&autoplay=1&mute=1&loop=1&rel=0&playlist=uoyW1r_EHfs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="autoplay" allowfullscreen></iframe>')

	$(".nav_left").on("click",function(){
		var dot = $(this).parent().parent().find(".dotnav").eq(0);
		var inner = $(this).parent().parent().find(".slide_inner").eq(0);
		var index = inner.find(".show").eq(0).index();
		if(index > 1){
			inner.find(".show").eq(0).attr("class","slide_item");
			inner.find(".slide_item").eq(index-2).attr("class","slide_item show");
			dot.find(".selected_dot").eq(0).attr("class","dot");
			dot.find(".dot").eq(index-2).attr("class","dot selected_dot");
		}
		else{
			inner.find(".show").eq(0).attr("class","slide_item");
			inner.find(".slide_item").eq(inner.find(".slide_inner").length-1).attr("class","slide_item show");
			dot.find(".selected_dot").eq(0).attr("class","dot");
			dot.find(".dot").eq(inner.find(".slide_inner").length-1).attr("class","dot selected_dot");
		}

	});
	$(".nav_right").on("click",function(){
		var dot = $(this).parent().parent().find(".dotnav").eq(0);
		var inner = $(this).parent().parent().find(".slide_inner").eq(0);
		var index = inner.find(".show").eq(0).index();
		if(index < inner.find(".slide_item").length){
			inner.find(".show").eq(0).attr("class","slide_item");
			inner.find(".slide_item").eq(index).attr("class","slide_item show");
			dot.find(".selected_dot").eq(0).attr("class","dot");
			dot.find(".dot").eq(index).attr("class","dot selected_dot");
		}
		else{
			inner.find(".show").eq(0).attr("class","slide_item");
			inner.find(".slide_item").eq(0).attr("class","slide_item show");
			dot.find(".selected_dot").eq(0).attr("class","dot");
			dot.find(".dot").eq(0).attr("class","dot selected_dot");
		}
	});

	// var stats = new Stats();
	// stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
	// document.body.appendChild( stats.dom );

	// function animate() {

	// 	stats.begin();

	// 	// monitored code goes here

	// 	stats.end();

	// 	requestAnimationFrame( animate );

	// }

	// requestAnimationFrame( animate );


	};

$(window).on('scroll',function(){

		var sP = $("body").scrollTop();
		var ci = closest(chaptarr,sP);
		var chi = closest(charr,sP);
		var ii = closest(intarr,sP);
		var pi = 0;

		if(sP > window.innerHeight){
			$("#follow_sub").css({opacity:1});
			$("header").css({opacity:1});
		}
		for(var i=0; i<$(".chaptertitle").length; i++){
			if(ci !== i){
				if(sP >= chaptarr[i]){
					$(".chapterinner").eq(i).css({position:"absolute", top:(window.innerHeight*2)+"px"});
				}
				else{
					$(".chapterinner").eq(i).css({position:"absolute", top:"0px"});
				}
			}
			else{

				if(sP >= chaptarr[i]){
					pi = ci;
					$(".chapterinner").eq(i).css({position:"absolute", top:(window.innerHeight*2)+"px"});
				}
				else{
					pi = ci-1;

					$(".chapterinner").eq(i).css({position:"absolute", top:"0px"});
				}
				if(pi == 0){
					$("#follow_sub .subcap_bd").eq(0).html("1. 작은 중국");
				}
				else if(pi == 1){
					$("#follow_sub .subcap_bd").eq(0).html("2. 빅포레스트");
				}
				else if(pi == 2){
					$("#follow_sub .subcap_bd").eq(0).html("3. 자수성가");
				}
				else if(pi == 3){
					$("#follow_sub .subcap_bd").eq(0).html("4. 엄마의 나라");
				}
				else if(pi == 4){
					$("#follow_sub .subcap_bd").eq(0).html("5. 양꼬치 칭다오");
				}
				$("#follow_sub .subcap_lt").eq(0).html($(".chapterinner").eq(pi).find(".chapter_bd").eq(0).html());
				}
		}

		$(".chapter_name").attr("class","chapter_name");
		if(sP >= chaptarr[ci] && sP <= chaptarr[ci]+2*window.innerHeight){
			$(".chapterinner").eq(ci).css({position:"fixed", top:"0px",left:"0px"});
			$("header").css({opacity:0});
			$("#follow_sub").css({opacity:0});
			
		}
		if(sP >= chaptarr[ci]-600 && sP <= chaptarr[ci]+2*window.innerHeight){
			$(".chapter_name").eq(ci).attr("class","chapter_name animate");
			$("header").css({opacity:0});
			$("#follow_sub").css({opacity:0});
		}
		if(sP >= intarr[ii]-100 && sP <= intarr[ii]+window.innerHeight){
			$("header").css({opacity:0});
			$("#follow_sub").css({opacity:0});
		}
		if(sP >= charr[chi]-400 && sP <= charr[chi]){
			if($(".chart").eq(chi).parent().attr("class") == "chartwrapper"){
				var chartparent = $(".chart").eq(chi).parent();
				for(var i=0; i<chartparent.find(".bar").length; i++){
					chartparent.find(".bar").css({"transform":"scaleY(1)"});
				}
			}	
		}

		tY = 30*(chaptarr[ci]-sP+window.innerHeight)/980;

		if(tY<0){
			tY = Math.max(-30,tY);
		}
		else if(tY >=0){
			tY = Math.min(30,tY);
		}

			chaptarr =[];
			intarr = [];
			charr = [];
			for(var i=0; i<$(".chaptertitle").length; i++){
				chaptarr.push($(".chaptertitle").eq(i).position().top);
			}
			for(var i=0; i<$(".interview").length; i++){
				intarr.push($(".interview").eq(i).position().top);
			}
			for(var i=0; i<$(".chart").length; i++){
				charr.push($(".chart").eq(i).position().top);
			}

			if(tY){
				if(sP >= chaptarr[ci]-600 && sP <= chaptarr[ci]+2*window.innerHeight){
					var move = tY + ((tY - bY)/10);
					var animatebefore = document.querySelectorAll(".animate");
					$(".animate").eq(0).find(".before").css({transform:"translateY("+move+"px)"});
					$(".animate").eq(0).find(".after").css({transform:"translateY("+(-move)+"px)"});
					bY = move;
				}
			}
});

/**
* Returns the closest number from a sorted array.
**/
function closest(arr, target) {
    if (!(arr) || arr.length == 0)
        return null;
    if (arr.length == 1)
        return arr[0];

    for (var i=1; i<arr.length; i++) {
        // As soon as a number bigger than target is found, return the previous or current
        // number depending on which has smaller difference to the target.
        if (arr[i] > target) {
            var p = arr[i-1];
            var c = arr[i]
            return Math.abs( p-target ) < Math.abs( c-target ) ? i-1 : i;
        }
    }
    // No number in array is bigger so return the last.
    // return arr[arr.length-1];
    return arr.length-1;
}