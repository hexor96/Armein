window.onload = function () {
	smoothScroll();
	NavEffectScroll();
	window.scroll(0, 0);

}

var smoothScroll = function () {

	var y = 0;
	var PaginaDestino = 0;
	var iLink = document.getElementsByClassName('item-link');
	for (var i = 0; i < iLink.length; i++) {
		iLink[i].addEventListener('click', e => {
			var ActualPosition = window.pageYOffset;
			y = ActualPosition;
			PaginaDestino = document.getElementById(e.target.getAttribute('data-target')).offsetTop;
			e.preventDefault();
			var scroll = setInterval(function () {
				if (ActualPosition < PaginaDestino) {
					var speed = 20;
					window.scroll(0, y);
					if (PaginaDestino - y < 50) { speed = 1; }
					if (y >= PaginaDestino) { clearInterval(scroll); y = PaginaDestino; }
					y += speed;
				}
				else {
					var _spped = 20;
					window.scroll(0, y);
					if (y - PaginaDestino < 50) { _spped = 1; }
					if (y <= PaginaDestino) { clearInterval(scroll); y = PaginaDestino; }
					y -= _spped;
				}
			}, 0)
		})
	}
}


var NavEffectScroll = function () {
	var _box = document.getElementsByClassName('box');
	var links = document.getElementsByClassName('item-link');
	links[0].classList.add('selected');
	var boxLenght = _box.length - 1;
	window.addEventListener('scroll', e => {
		var yCHrome = document.documentElement.scrollTop;
		for (var i = 0; i < _box.length; i++) {
			if (_box[i].scrollHeight * i - 100 < e.pageY && e.pageY < _box[i].scrollHeight * (i + 1) - 100 || _box[i].scrollHeight * i - 100 < yCHrome	 && yCHrome < _box[i].scrollHeight * (i + 1) - 100) {
				links[i].classList.add('selected');
			}
			else {
				links[i].classList.remove('selected');
			}
		}
	})
}