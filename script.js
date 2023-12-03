let windowCount = 0;

function setup() {
  noCanvas();
  createLimitedWindows(10); // createInfiniteWindows(); 무한대로 생성
}

function createLimitedWindows(limit) { //function createInfiniteWindows()
  const intervalId = setInterval(() => { //setInterval(() =>
    if (windowCount >= limit) {
      clearInterval(intervalId);
      return; // 정지
    }

    let x = random(windowWidth);
    let y = random(windowHeight);
    let newWindow = window.open('', '_blank', `width=400,height=200,left=${x},top=${y}`);
    newWindow.document.body.innerHTML = '<p style="font-size:48px;">당신은 피조물입니까?</p>'; 

    windowCount++;
  }, 800); // 0.8 초
}
