let nameprimesize = 1;
let statusprimesize = 0.65;
let gameprimesize = 0.75;

// フォントサイズ自動調整
function FontSizeAdjust(object, primarysize, coefficient){
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = 36 * primarysize  + "px";
	var metrics = context.measureText(object.innerText);
	var width = metrics.width;
	if(coefficient / width < primarysize){
	object.style.fontSize =  coefficient / width + "em";
	}else{
		object.style.fontSize =  primarysize + "em";
	}
}

// データ更新処理(Eventemitter,PlayerA)
nodecg.Replicant("gametitleA").on('change',(newVal)=>{
	const A_title = document.getElementById("text_gameTitleA");
	A_title.innerHTML = newVal;
})
nodecg.Replicant("gamecategoryA").on('change',(newVal)=>{
	const A_category = document.getElementById("text_gameCategoryA")
	A_category.innerHTML = newVal;
})
nodecg.Replicant("gameestimateA").on('change',(newVal)=>{
	const A_estimate = document.getElementById("text_gameEstimateA");
	A_estimate.innerHTML = newVal;
})
nodecg.Replicant("playerA").on('change',(newVal)=>{
	const A_nameright = document.getElementById("PlayerA_name");
	A_nameright.innerHTML = newVal;
})
nodecg.Replicant("playerAtwitter").on('change',(newVal)=>{
	const A_twitter = document.getElementById("PlayerA_twitter");
	A_twitter.innerHTML = newVal;
})
nodecg.Replicant("commA").on('change',(newVal)=>{
	const A_comment = document.getElementById("CommA_Name");
	A_comment.innerHTML = newVal;
	FontSizeAdjust(A_comment,1.7, 700);
})