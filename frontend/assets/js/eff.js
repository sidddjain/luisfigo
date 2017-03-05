
	var canvasX = document.querySelector("#inkCanvas");
	var context = canvasX.getContext("2d");
	var sNo=window.location.hash.charAt(1);
	var bg = new Image();
	bg.src = "assets/images/loaderbg.jpg";
	var myImage = new Image();
	myImage.src = "assets/images/mask.png";


	var shift = 0;
	var frameWidth = 298;
	$('#inkCanvas').css('height', $(window).height()+4);
	$('#inkCanvas').css('width', $(window).width());
	var frameHeight = 168;
	var totalFrames = 40;
	var currentFrame = 0;
	var maxSpeed=3;
	var speedvar=0;

  function setImage(canvas){
    context.drawImage(canvas, 0, 0);
  }

	function animate() {
		context.clearRect(0, 0, 298, 168);
    context.fillStyle = '#ff0000';
    context.fill();
		context.globalCompositeOperation = "xor";
		context.drawImage(myImage, shift, 0, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
		context.drawImage(bg, 0, 0, 1600, 907, 0, 0, frameWidth, frameHeight);
		if (speedvar==maxSpeed){
			shift += frameWidth;
			speedvar=0;
		}

		if (currentFrame != totalFrames*maxSpeed) {
			requestAnimationFrame(animate);
			currentFrame++;
		}

		speedvar++;
		if (currentFrame == totalFrames*maxSpeed) {
			$('#inkCanvas').hide();
		}

	}
