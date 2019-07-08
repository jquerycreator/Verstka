$(window).ready(()=>{
$('head style[type="text/css"]').attr('type', 'text/less');
less.refreshStyles();
window.randomize = function() {
	$('.radial-progress:nth-child(1)').attr('data-progress', Math.floor(Math.random() * 40));
	$('.radial-progress:nth-child(2)').attr('data-progress', Math.floor(Math.random() * 40));
	$('.radial-progress:nth-child(3)').attr('data-progress', Math.floor(Math.random() * 40));
	$('.radial-progress:nth-child(4)').attr('data-progress', Math.floor(Math.random() * 40));
}
setTimeout(window.randomize, 200);
$('.radial-progress').click(window.randomize);
})