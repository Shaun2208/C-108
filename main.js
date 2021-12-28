
function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/eeToJ4Jsh/",modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults (error,result){
   
}