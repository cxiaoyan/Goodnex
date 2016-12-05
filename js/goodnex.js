$(document).ready(function(){
	var n=0;
	var nt=0;
	var t=setInterval(move,2000)
	function move(){
		nt=n+1;
		if(nt==4){
			nt=0;
		}
		$(".ls-layer").eq(n).css("display","none");
		$(".ls-layer").eq(nt).css("display","block");


		// if($(".ls-layer").eq(0).css("display")=="block"){
		// 	$(".ls-layer").eq(nt).find(".plane2").addClass("active");
		// 	$(".ls-layer").eq(nt).find(".plane1").addClass("active0");
		// 	$(".ls-layer").eq(nt).find(".t1").addClass("activeh1");
		// 	$(".ls-layer").eq(nt).find(".c11").addClass("activeh2");
		// 	$(".ls-layer").eq(nt).find(".c12").addClass("activeh3");
		// }else if($(".ls-layer").eq(1).css("display")=="block"){
		// 		$(".ls-layer").eq(nt).find(".frame").addClass("activef");
		// 		$(".ls-layer").eq(nt).find(".t2").addClass("activet2");
		// 		$(".ls-layer").eq(nt).find(".c22").addClass("activec22");
		// 		$(".ls-layer").eq(nt).find(".c21").addClass("activec21");
		// }else if($(".ls-layer").eq(2).css("display")=="block"){
		// 	$(".ls-layer").eq(nt).find(".heng").addClass("activeheng");
		// 	$(".ls-layer").eq(nt).find(".shu").addClass("activeshu");
		// 	$(".ls-layer").eq(nt).find(".t3").addClass("activet3");
		// 	$(".ls-layer").eq(nt).find(".t32").addClass("activet32");
		// 	$(".ls-layer").eq(nt).find(".c31").addClass("activec31");
		// 	$(".ls-layer").eq(nt).find(".c32").addClass("activec32");
		// 	$(".ls-layer").eq(nt).find(".c33").addClass("activec33");
		// }else if($(".ls-layer").eq(3).css("display")=="block"){
		// 	$(".ls-layer").find(".pc").addClass("activepc");
		// 	$(".ls-layer").find(".p").addClass("activep");
		// 	$(".ls-layer").find(".logo-img").addClass("activelogo");
		// 	$(".ls-layer").find(".t4").addClass("activet4");
		// 	$(".ls-layer").find(".c41").addClass("activec41");
		// 	$(".ls-layer").find(".c42").addClass("activec42");
		// }
		n=nt;
	}
	// if($(".ls-layer").css("display")=="block"){
	// 	$(".ls-layer").find(".plane2").addClass("active");
	// 	$(".ls-layer").find(".plane1").addClass("active0");
	// 	$(".ls-layer").find(".t1").addClass("activeh1");
	// 	$(".ls-layer").find(".c11").addClass("activeh2");
	// 	$(".ls-layer").find(".c12").addClass("activeh3");


	// 	$(".ls-layer").find(".frame").addClass("activef");
	// 	$(".ls-layer").find(".t2").addClass("activet2");
	// 	$(".ls-layer").find(".c22").addClass("activec22");
	// 	$(".ls-layer").find(".c21").addClass("activec21");


	// 	$(".ls-layer").find(".heng").addClass("activeheng");
	// 	$(".ls-layer").find(".shu").addClass("activeshu");
	// 	$(".ls-layer").find(".t3").addClass("activet3");
	// 	$(".ls-layer").find(".t32").addClass("activet32");
	// 	$(".ls-layer").find(".c31").addClass("activec31");
	// 	$(".ls-layer").find(".c32").addClass("activec32");
	// 	$(".ls-layer").find(".c33").addClass("activec33");


	// 	$(".ls-layer").find(".pc").addClass("activepc");
	// 	$(".ls-layer").find(".p").addClass("activep");
	// 	$(".ls-layer").find(".logo-img").addClass("activelogo");
	// 	$(".ls-layer").find(".t4").addClass("activet4");
	// 	$(".ls-layer").find(".c41").addClass("activec41");
	// 	$(".ls-layer").find(".c42").addClass("activec42");


	// }else{
	// 	$(".ls-layer").find(".plane2").removeClass("active");
	// 	$(".ls-layer").find(".plane1").removeClass("active0");
	// 	$(".ls-layer").find(".t1").removeClass("activeh1");
	// 	$(".ls-layer").find(".c11").removeClass("activeh2");
	// 	$(".ls-layer").find(".c12").removeClass("activeh3");



	// 	$(".ls-layer").find(".frame").removeClass("activef");
	// 	$(".ls-layer").find(".t2").removeClass("activet2");
	// 	$(".ls-layer").find(".c22").removeClass("activec22");
	// 	$(".ls-layer").find(".c21").removeClass("activec21");


	// 	$(".ls-layer").find(".heng").removeClass("activeheng");
	// 	$(".ls-layer").find(".shu").removeClass("activeshu");
	// 	$(".ls-layer").find(".t3").removeClass("activet3");
	// 	$(".ls-layer").find(".t32").removeClass("activet32");
	// 	$(".ls-layer").find(".c31").removeClass("activec31");
	// 	$(".ls-layer").find(".c32").removeClass("activec32");
	// 	$(".ls-layer").find(".c33").removeClass("activec33");

	// }
	
})