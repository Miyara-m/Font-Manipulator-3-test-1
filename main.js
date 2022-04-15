function preload()
{

}
function setup()
{
 canvas = createCanvas(600, 600);
 canvas.background("#CC99FF");
 canvas.position(650, 120);
 camera = createCapture(VIDEO);
 camera.size(600, 600);
 posenet = ml5.poseNet(camera, modelLoaded);
 posenet.on('pose', gotPoses);
 rightwrist_x = 0;
 leftwrist_x = 0;
 difference = 0;
}
function draw()
{
 canvas.background("#CC99FF");
 stroke("#FF99CC");
 textSize(difference);
 fill("#FF5050");
 text('😎🐲😏', 10, 200);
}
function modelLoaded()
{
    console.log("Model Loaded!");
}
function gotPoses(results)
{
    if (results.length > 0)
    {
      console.log(results);
      rightwrist_x = results[0].pose.rightWrist.x;
      leftwrist_x = results[0].pose.leftWrist.x;
      difference = leftwrist_x - rightwrist_x;
      console.log("difference" + difference);
      
    }
}