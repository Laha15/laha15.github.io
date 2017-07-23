var txt = document.getElementById('txt');
 
//文字を表示、ランダムな文字の後に「penguin」と表示される
setText(txt, "My Programming Activity");
 
 
 
//一文字一文字、ランダムな文字を表示した後に表示する
function setText(targetText,viewText){
	var counter = 0;
	var ary = divText(viewText);
	var resultText="";
	
	var timerId = setInterval(function(){
			resultText += randomText(targetText, ary[counter],resultText);
			counter++;
			if(counter == ary.length){
				clearInterval(timerId);
			}
	}, 100);
}
 
//ランダムな一文字を指定回数表示し、指定した一文字を表示する
function randomText(text, result, resultText){
	var counter = 0;
	var timerId = setInterval(function(){
			rand = Math.floor(Math.random()*93)+33;
			text.innerText = resultText +String.fromCharCode(rand);
			counter++;
			if(counter==10){
				clearInterval(timerId);
				text.innerText = resultText + result;
			}
	},30);
	return result;
}
 
//文字列を分割して配列に格納する
function divText(text){
	var ary = [];
	ary=text.split('');
        return ary;
}