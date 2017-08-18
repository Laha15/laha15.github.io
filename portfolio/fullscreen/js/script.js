(function(){
		var $popup_item = $('#popup-item');
		var $popup_back = $('#popup-background');
		var $thumb = $('.thumbnail');

		$popup_item.hide();
		$popup_back.hide();

		$thumb.click(function(e){
			e.preventDefault();
			$popup_item.addClass('img-mid');
			$popup_item.attr('src', this.href);
			$popup_back.fadeIn();
			$popup_item.fadeIn();
			$popup_item.addClass('img-mid');
		});

		$('#popup-background, #popup-item').bind('click', function(){
	        // ポップアップを消すため、タグをフェードアウトさせる
	        $('#popup-background').fadeOut();
	        $('#popup-item').fadeOut();  
	    });

		var count=0;
		var fr = 70;
		var br = 150;
		var fr_flg,br_flg;

		var id = setInterval(function(){
			// fr++;

			if(fr == 255){
				fr_flg=false;
			}else if(fr == 0){
				fr_flg=true;
			}

			if(fr_flg == true){
				fr++;
			}else{
				fr--;
			}

			if(br == 255){
				br_flg=false;
			}else if(br == 0){
				br_flg=true;
			}

			if(br_flg == true){
				br++;
			}else{
				br--;
			}

			count++;
			// if(count > 10){
			$('body').css('backgroundImage', 'linear-gradient(rgba('+ fr +br+',40,50,0.3), rgba('+ br +',230,'+ fr +',0.5)) , url("./img/woman.jpg")');
				// clearInterval(id);
				count = 0;
			// }
		},50);
})();
