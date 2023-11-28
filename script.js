function setup() {
    createCanvas(windowWidth, windowHeight, SVG);
}

function keyPressed(event){ // 엔터키로 저장하는 법
    console.log(event.key);
    if( event.key === "Enter") {
        save("제목","svg")
    }
}

function draw() {
  
    background(200);

    fill(7,105,0, 95);
    noStroke();
    ellipse(495,600,240,160); // 연한 잎


}