var circles = 12
var circleDiameter
var r
var g
var b
function setup() {
    createCanvas(screen.width, screen.height)
    frameRate(5)
    r = 255
    g = 0
    b = 0
    circleDiameter = width / circles
}

function draw() {
   var isShifted = false
   var y = height
   while (y >= 0) {
        var x 

        if (isShifted) {
            x = circleDiameter / 2
        } else {
            x = 0
        }

        while (x <= width) {
            fill(color(r, g, b))
            stroke(color(r, g, b))
            circle(x, y, circleDiameter)
            x = x + circleDiameter
        }
        y = y - (circleDiameter / 2)
        isShifted = !isShifted

        r = (r + 254) % 256
        g = (g + 7) % 256
        b = (b + 3) % 256
   }
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png')
    }
    return false
}