var circles = 12;
var circleDiameter;
var hue = 0;
var animating = false;

function setup() {
    createCanvas(screen.width, screen.height);
    frameRate(30);
    circleDiameter = width / circles;
    colorMode(HSB, 100, 100, 100, 200);
}

function draw() {
    background(0);
    var isShifted = false;
    var y = height;
    while (y >= 0) {
        var x;
        if (isShifted) {
            x = circleDiameter / 2;
        } else {
            x = 0;
        }
        while (x <= width) {
            var d = dist(mouseX, mouseY, x, y);
            if (d < circleDiameter / 2) {
                animating = true;
            } else {
                animating = false;
            }
            if (animating) {
                hue = (hue + 20) % 360;
            } else {
                hue = 0;
            }
            var saturation = map(y, height, 0, 0, 100);
            var brightness = 100;
            var gradientColor = color(hue, saturation, brightness);
            gradientColor.setAlpha(map(y, height, 0, 0, 100));
            fill(gradientColor);
            stroke(hue, saturation, brightness);
            circle(x, y, circleDiameter);
            x = x + circleDiameter;
        }
        y = y - (circleDiameter / 2);
        isShifted = !isShifted;
    }
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png');
    }
    return false;
}
