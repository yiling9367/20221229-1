var face_x=[]
var face_y=[]
var facce_size=[]
var face_num=10
var m_x,m_y
var song
var songIsplay
var song
var songIsplay=false
var amp
var vol=0
var music_btn,mouse_btn,Speech_btn
var musicIsplay=true
var mouseIsplay=true
var myRec = new p5.SpeechRec();
var result


function preload(){
  song = loadSound("God Rest Ye Merry Gentlmen - DJ Williams.mp3");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  
music_btn = createButton("音樂跳舞")
music_btn.position(10,10)
music_btn.size(350, 100);
music_btn.style('background-color', 'pink');
music_btn.style('font-size', '38px');
music_btn.style('color', 'blue');
music_btn.mousePressed(music_btn_pressed)

mouse_btn = createButton("滑鼠跳動")
mouse_btn.position(370,10)
mouse_btn.size(350, 100);
mouse_btn.style('background-color', 'pink');
mouse_btn.style('font-size', '38px');
mouse_btn.style('color', 'blue');
mouse_btn.mousePressed(mouse_btn_pressed)

Speech_btn = createButton("語音辨識(跳舞/不要跳)")
Speech_btn.position(740,10)
Speech_btn.size(350, 100);
Speech_btn.style('background-color', 'pink');
Speech_btn.style('font-size', '32px');
Speech_btn.style('color', 'blue');
Speech_btn.mousePressed(Speech_btn_pressed)
  

}

function music_btn_pressed(){  
  song.stop()
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()
  music_btn.style('background-color', '#00b4d8');
  mouse_btn.style('background-color', 'black');
}

function music_btn_pressed(){  
  song.stop()
  song.play()
  songIsplay = true
  musicIsplay = false
  amp=new p5.Amplitude()
  music_btn.style('background-color', '#00b4d8');
  mouse_btn.style('background-color', 'black');
}

function mouse_btn_pressed(){  
  song.pause()
  musicIsplay = true
  songIsplay = false
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', '#00b4d8');
}

function Speech_btn_pressed(){ 
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', 'black');
  Speech_btn.style('background-color', '#00b4d8');
  myRec.onResult = showResult;
  myRec.start();
}
function showResult()
  {
      if(myRec.resultValue==true) {
			
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        textStyle("italic")
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      console.log(1)
      console.log(myRec.resultString)
      if(myRec.resultString==="跳舞")
      {
        music_btn_pressed()
        mouseIsplay = false
        songIsplay = true
      }
      if(myRec.resultString==="不要跳")
      {
        song.pause()
        mouseIsplay = true
        songIsplay = false
        }
		}
	}
function draw() {
  background(189,224,254); //背景顏色
  textSize(40)
  text("X:"+mouseX+" Y:"+mouseY,50,50) //左上座標
  translate(width/2,height/2)
  if(songIsplay){
    vol = amp.getLevel()
    m_x =map(vol,0,1,0,width) 
    m_y= map(vol,0,1,0,height)
    
  }
  else
  if(mouseIsplay)
  {
    m_x = mouseX
    m_y= mouseY
  
  }
  push()
  fill("#ffc8dd")
  ellipse(0,0,450) //身體
  fill("#f72585")
  ellipse(0-100,0+150,180) //左腳
  ellipse(0+100,0+150,180) //右腳
  fill("#ffc8dd")
  ellipse(0+200+m_x/20,0-50+m_y/20,130) //右手
  ellipse(0-200+m_x/20,0-50+m_y/20,130) //左手
  fill("#ff99c8")
  ellipse(0-100,0-50,50,20) //左腮紅
  ellipse(0+100,0-50,50,20) //右腮紅
  fill("#001d3d")
  ellipse(-50,-100,50,110) //左眼眶
  ellipse(+50,-100,50,110) //右眼眶
  fill("#ffffff")
  ellipse(-50+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),35) //左眼
  ellipse(50+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),35) //右眼
  if(mouseIsPressed)
  {   //mouseIsPressed為true，代表有按下滑鼠
    fill(255,0,0)
    arc(0,75-70,100,40,0,180)  //下弧
  }
  else
  {   //mouseIsPressed為false，代表沒有按下滑鼠
   fill(255,0,0)
   arc(0,75-70,100,90,0,180)  //上弧
  }

pop()
if(!songIsplay){
 // arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //沒有播放
}
else{
  vol = amp.getLevel() //取得聲音值(值為0~1之間)
  console.log(vol)
 // arc(0,f_s/4-1,f_s/2,map(vol,0,0.5,f_s/5,f_s/10),0,180)
}


  }