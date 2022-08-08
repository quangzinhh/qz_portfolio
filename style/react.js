var looper;
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}

var state_btn = document.querySelectorAll('.state_button')

var bg = document.querySelectorAll('.bg')
var color_text = document.querySelectorAll('.color_text')
var til = document.querySelectorAll('.til')
var box_shadow = document.querySelectorAll('.box_shadow')
var border_solid = document.querySelectorAll('.border_solid')
var border_top = document.querySelectorAll('.border_top')
var border_bottom = document.querySelectorAll('.border_bottom')
var bg_blur = document.querySelector('.bg_blur')
var ti = document.querySelectorAll('.ti')
var mode = document.querySelector('.bi-sun')

function change_mode () {
	for(var b of bg) {
		b.classList.toggle('bg_dark')
	}
	for (var c of color_text) {
		c.classList.toggle('color_text_dark')
	}
	for (var t of til) {
		t.classList.toggle('til_dark')
	}
	for (var box of box_shadow) {
		box.classList.toggle('box_shadow_dark')
	}
	for (var bs of border_solid) {
		bs.classList.toggle('border_solid_dark')
	}
	for (var bt of border_top) {
		bt.classList.toggle('border_top_dark')
	}
	for (var bb of border_bottom) {
		bb.classList.toggle('border_bottom_dark')
	}
	bg_blur.classList.toggle('bg_blur_dark')
	for(var t of ti) {
		t.classList.toggle('ti_dark')
	}
	if(mode.classList.contains('bi-sun'))
		{mode.classList.replace('bi-sun','bi-cloud-moon')}
	else {mode.classList.replace('bi-cloud-moon','bi-sun')}
}


for(const btn of state_btn) {
	btn.addEventListener('click', change_mode)
}


