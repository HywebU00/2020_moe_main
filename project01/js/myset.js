$(function(){

	// 左右主選單 點一個秀一個
	$('#Header .navbar-header .pull-right').click(function(){
		$(this).parent().siblings().eq(1).removeClass('in');
	});
	$('#Header .navbar-header .pull-left').click(function(){
		$(this).parent().siblings().eq(0).removeClass('in');
	});

	// Go Top 
	// var GoTop_Offset = $('#GoTop').offset().top;

	// $('#GoTop').click(function(){
	// 	$('html,body').animate({scrollTop:0},1200);
	// 	return false;
	// });
	// $(window).scroll(function() {
	// 	if ( $(this).scrollTop() > GoTop_Offset){
	// 		$('#GoTop').fadeIn(600);
	// 	}else {
	// 		$('#GoTop').stop().fadeOut(600);
	// 	}
	// });

	// Go Top
	$(function(){
		var GoTop_Offset = $('#Btn_GoTop').offset().top;

		$('#Btn_GoTop').hide();

		$(window).scroll(function() {
			if ( $(this).scrollTop() > 200){
				$('#Btn_GoTop').fadeIn(600);
			}else {
				$('#Btn_GoTop').stop().fadeOut(600);
			}
		});
		$('#Btn_GoTop').click(function(){
			$('html,body').animate({scrollTop:0},1200);
			return false;
		});
	});

	//Fatfooter 內容收合
	$(function(){
		$(".FatFooterBtn").click(function() {
			$('#FatFooter>div>nav>ul>li>ul').slideToggle(function() {
				if ($(this).is(':visible')) {
					document.getElementById("FatFooterBtn").value = "收合";
				} else {
					document.getElementById("FatFooterBtn").value = "展開";
				}
			});
			$(this).toggleClass('close');
		});
	});

	// U00頁籤
	// $(function(){
	// 	//顯示選到的頁籤的內容。用css設定也可以，本範例中css也有設定（18、19行）
	// 	$('.tabs').find('.active').next('.tabContent').show();

	// 	//取得頁籤區塊的寬度，並存入變數tw中
	// 	// var tw = $('.tabSet').width();
	// 	var tabItemHeight = $('.tabs>h1>a').innerHeight();//取得頁籤項目含padding高度，並存入變數tabItemHeight中
	// 	$('.tabs').find('.tabContent').css('top' , tabItemHeight );//找到頁籤內容區塊，設定它的top等於頁籤項目高度

	// 	//各別處理每個頁籤組
	// 	$('.tabSet').each(function(){
	// 		//抓取各個頁籤的寬度
	// 		var twSelf = $(this).width();
	// 		//找到被選到的頁籤內容，取得它含padding的高度，並將高度存到變數tabContentHeight中。
	// 		var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight();
	// 		//取得每個頁籤組中頁籤項目的個數
	// 		var tabItemLength = $(this).find('h1').length;

	// 		$(this).height(tabContentHeight + tabItemHeight);//頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
	// 		$(this).find('h1>a').width( twSelf / tabItemLength ); //頁籤項目的寬度＝頁籤組的寬度／頁籤項目個數
	// 	});

	// 	$('.tabs>h1>a').focus(tabs);//用鍵盤選到頁籤時執行tabs函式
	// 	$('.tabs>h1>a').click(tabs);//用滑鼠選到頁籤時執行tabs函式

	// 	//定義tabs函式
	// 	function tabs(){
	// 		//非選到的頁籤項目的 class 要移除
	// 		$(this).parent('h1').siblings().removeClass('active');
	// 		//把選到的頁籤項目加上 class="active"S
	// 		$(this).parent('h1').addClass('active');

	// 		tabContentHeight = $(this).parent('h1').next('.tabContent').innerHeight();//取得選到的頁籤內容含padding的高度
	// 		$(this).parents('.tabSet').height(tabContentHeight + tabItemHeight);//頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
	// 		return false;
	// 	}
	// });

	// U00頁籤 eason+偉良
	jQuery(document).ready(function() {
	    $('.tabs').find('.active').next('.tabContent').fadeIn(); //顯示選到的頁籤的內容。用css設定也可以，本範例中css也有設定（18、19行）
	    // var tw = $('.tabSet').width(); //取得頁籤區塊的寬度，並存入變數tw中
	    var tabItemHeight = $('.tabs>h2>a').innerHeight(); //取得頁籤項目含padding高度，並存入變數tabItemHeight中
	    $('.tabs').find('.tabContent').css('top', tabItemHeight); //找到頁籤內容區塊，設定它的top等於頁籤項目高度
	    $(window).on('load resize', function() {
	    	var tw = $('.tabSet').width()*0.98; 
	        $('.tabSet').each(function() { //各別處理每個頁籤組

	        	var twSelf = $(this).width();
	            var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight(); //找到被選到的頁籤內容，取得它含padding的高度，並將高度存到變數tabContentHeight中。
	            var tabItemLength = $(this).find('h2').length; //取得每個頁籤組中頁籤項目的個數

	            $(this).height(tabContentHeight + tabItemHeight); //頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
	            $(this).find('h2>a').width(twSelf / tabItemLength); //頁籤項目的寬度＝頁籤組的寬度／頁籤項目個數 
	        });
	    });
	    $('.tabs>h2>a').focus(tabs); //用鍵盤選到頁籤時執行tabs函式
	    $('.tabs>h2>a').click(tabs); //用滑鼠選到頁籤時執行tabs函式

	    function tabs() { //定義tabs函式
	        $(this).parent('h2').siblings().removeClass('active'); //非選到的頁籤項目的 class 要移除
	        $(this).parent('h2').addClass('active'); //把選到的頁籤項目加上 class="active"
	        tabContentHeight = $(this).parent('h2').next('.tabContent').innerHeight(); //取得選到的頁籤內容含padding的高度
	        $(this).parents('.tabSet').height(tabContentHeight + tabItemHeight); //頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
	    }
	});

	// fancy box
	$(function(){
		/* Button helper. Disable animations, hide close button, change title type and content */
		$('.fancybox-buttons').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',
			closeBtn  : true,
			helpers : {
				title : {
					type : 'inside'
				},
				buttons : {}
			},
			afterLoad : function() {
				this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			}
		});
	});
	
})