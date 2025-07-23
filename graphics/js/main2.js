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
nodecg.Replicant("gametitlenext").on('change',(newVal)=>{
	const A_title = document.getElementById("text_gameTitle");
	A_title.innerHTML = newVal;
})
nodecg.Replicant("gamecategorynext").on('change',(newVal)=>{
	const A_category = document.getElementById("text_gameCategory")
	A_category.innerHTML = newVal;
})
nodecg.Replicant("gameestimatenext").on('change',(newVal)=>{
	const A_estimate = document.getElementById("text_gameEstimate");
	A_estimate.innerHTML = newVal;
})
nodecg.Replicant("playernext").on('change',(newVal)=>{
	const A_nameright = document.getElementById("Player_name");
	A_nameright.innerHTML = newVal;
})
nodecg.Replicant("commnext").on('change',(newVal)=>{
	const A_comment = document.getElementById("Comm_Name");
	A_comment.innerHTML = newVal;
})