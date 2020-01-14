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