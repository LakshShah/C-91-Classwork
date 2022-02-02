player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn:" + player1_name;
document.getElementById("player_answer").innerHTML="answer turn:" + player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charat1=word.charAt(1);
    length=Math.floor(word.length/2);
    charat2=word.charAt(length);
    length1=word.length-1;
    charat3=word.charAt(length1);
    var remove1=word.replace(charat1,"_");
    var remove2=remove1.replace(charat2,"_");
    var remove3=remove2.replace(charat2,"_");
    question_word="<h4 id='words_display'> Q "+remove3+"</h4>";
    input_box="<br> answer: <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

}