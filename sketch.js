let points = [[-1, 10], [1, 10], [3, 11],[4,9],[2,-1],[3,-3],[3,-6]];
let points2 = [[3,-6],[3,-7],[-5,-7],[-5,-6],[-4,-5],[-2,5],[-3,6],[-3,7],[-1, 10]];


let ctx;
var colors = "dad7cd-a3b18a-588157-3a5a40-344e41".split("-").map(a=>"#"+a)

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
  for (let i = 0; i < points2.length; i++) {
    for (let j = 0; j < points2[i].length; j++) {
      points2[i][j] = points2[i][j] * 20;
    }
  }

}



function draw() {
  background(255);
  // scale(50)
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心

  ctx = canvas.getContext('2d');
	ctx.lineWidth = 15;
	ctx.lineCap = 'round'
  colorMode(HSB, 360, 100, 100)
  noStroke()
  textSize(30)
  fill(0,102,153)
  text("你好", 100 ,200)
  scale(1, -1);  //上下翻轉


      for (let i = 0; i < points.length-1; i++) {
        for (let k = 0 ; k < 5 ; k++){
          gradientLine(ctx,points[i][0]+30*k, points[i][1]+30*k,points[i+1][0]+30*k, points[i+1][1]+30*k, color("#dad7cd"), color("#a3b18a"), 40)
        }
      }
    
      for (let i = 0; i < points2.length-1; i++) {
        for (let k = 0 ; k < 5 ; k++){
          // line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
          gradientLine(ctx,points2[i][0]+30*k, points2[i][1]+30*k,points2[i+1][0]+30*k, points2[i+1][1]+30*k, color("#588157"), color("#344e41"), 40)
        }
      }
    
    
}






function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}























































