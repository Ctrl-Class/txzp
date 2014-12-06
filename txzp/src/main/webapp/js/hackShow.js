/**
 * Created by Administrator on 2014/11/28.
 */
var canvas = document.getElementById("canvas"), context = canvas
		.getContext("2d");

var fontSize = 12, listText = "010011101010101010111010101101        "
		.split(""), column, row, listColumn = [];

function draw() {
	//画背景
	context.fillStyle = "rgba(0, 0, 0, 0.05)";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.save();

	//画Logo
	context.shadowColor = "#074425";
	context.shadowBlur = 20;
	context.font = "bold 36px Arial";
	context.fillStyle = "#eefbf5";
	context.fillText("计科学院团学招聘系统", (canvas.width / 2 - context
			.measureText("计科学院团学招聘系统").width / 2), canvas.height * 0.2);
	//context.fillText("REVOLUTIONS", (canvas.width / 2 - context.measureText("REVOLUTIONS").width / 2), canvas.height - 150);
	//context.font = "16px Microsoft Yahei";
	//        context.fillText("黑客帝国：矩阵革命", (canvas.width / 2 - context.measureText("黑客帝国：矩阵革命").width / 2), canvas.height - 100);

	//画代码
	context.restore();
	context.font = "normal " + fontSize + "px Arial";
	context.fillStyle = "#12ee46";
	for (var i = 0; i < column; i++) {
		if (Math.random() > 0.5) {
			var str = listText[parseInt(Math.random() * listText.length)];
			context.fillText(str, i * fontSize, listColumn[i] * fontSize);
			listColumn[i] += 1;
			if (listColumn[i] >= row) {
				listColumn[i] = 0;
			}
		}
	}
}

function resize() {
	canvas.width = window.innerWidth - 3;
	canvas.height = window.innerHeight - 3;

	column = canvas.width / fontSize, row = canvas.height / fontSize;

	for (var i = 0; i < column; i++) {
		listColumn[i] = 1;
	}
}

window.addEventListener("resize", resize);

canvas.addEventListener("mousedown", function() {
	clearInterval(timer);
	timer = setInterval(draw, 20);
});

canvas.addEventListener("mouseup", function() {
	clearInterval(timer);
	timer = setInterval(draw, 40);
});

resize();
var timer = setInterval(draw, 40);
