/**
 * 
 */
$(document).ready(function(){
	$('#divCreateWallet').on('click',function(){
		global.addTabs("钱包","","wallet.html",true,true);
	});
	$('#divTxtToChain').on('click',function(){
		global.addTabs("文本上链","","txtChain.html",true,true);
	});
	$('#divImgToChain').on('click',function(){
		global.addTabs("图片上链","","imgChain.html",true,true);
	});
	$('#divAudioToChain').on('click',function(){
		global.addTabs("音频上链","","audioChain.html",true,true);
	});
});