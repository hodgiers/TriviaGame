function ShowResults() {
    // alert("Time is up");
}

//Start a countdown timer
function MakeTimer() {

    // Set the time to countdown from
    var countDownDate = new Date().getTime() + 30000;

    // Update the count down every 1 second
    var x = setInterval(function() {
        var now = new Date().getTime();

        // Find the distance between now an the countdown time
        var distance = countDownDate - now;

        // Time calculations for minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="status"
        document.getElementById("status").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write text and show the results
        if (distance < 0) {
            clearInterval(x);
            ShowResults();
            panel.html("<h2>Times Up!</h2>");
            panel.append("<h2> Correct Answers: "+ this.correct +"</h2>");
            panel.append("<h2> Incorrect Answers: "+ this.incorrect +"</h2>");
      }
    }, 1000);
}

var panel = $("#quiz-area");
$("#start").on("click", function() {
    $("#start").remove();
    MakeTimer();
    for (var i = 0; i < questions.length; i++) {
        panel.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            panel.append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
    }
});

// questions
var questions = [{
    // questions
    question: "Who is it OK to share passwords with?",
    // 4 options
    answers: ["Your Boss", "Your Coworker", "Human Resources", "None of the above"],
    // answers
    correctAnswer: "None of the above"
}, {
    // questions
    question: "If you use a public Wi-Fi network (in a cafe or hotel, for example) that assigns you a password, it's okay to send confidential business data.",
    // 4 options
    answers: ["True", "False"],
    // answers
    correctAnswer: "False"
}, {
    // questions
    question: "What does the 'https://' at the beginning of a URL denote, as opposed to 'http://' (without the “s”)?",
    // 4 options
    answers: ["That the site has special high definition", "That information entered into the site is encrypted", "That the site is the newest version available", "None of the above"],
    // answers
    correctAnswer: "That information entered into the site is encrypted"
}, {
    // questions
    question: "Which of the following is an example of a “phishing” attack?",
    // 4 options
    answers: ["Sending someone an email that contains a malicious link that is disguised to look like an email from someone the person knows", "Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information", "Sending someone a text message that contains a malicious link that is disguised to look like a notification that the person has won a contest", "All of the above"],
    // answers
    correctAnswer: "All of the above"
}, {
    // questions
    question: "A group of computers that is networked together and used by hackers to steal information is called a …",
    // 4 options
    answers: ["Botnet", "Rootkit", "DDoS", "Operating System"],
    // answers
    correctAnswer: "Botnet"
}, {
    // questions
    question: "Which of the following four passwords is the most secure",
    // 4 options
    answers: ["Boat123", "WTh!5Z", "into*48", "!pa$$w0rd!"],
    // answers
    correctAnswer: "Th!5Z"
}, {
    // questions
    question: "Criminals access someone’s computer and encrypt the user’s personal files and data. The user is unable to access this data unless they pay the criminals to decrypt the files. This practice is called",
    // 4 options
    answers: ["Botnet", "Ransomware", "Driving", "Spam"],
    // answers
    correctAnswer: "Ransomware"
}, {
    // questions
    question: "Private browsing” is a feature in many internet browsers that lets users access web pages without any information (like browsing history) being stored by the browser. Can internet service providers see the online activities of their subscribers when those subscribers are using private browsing?",
    // 4 options
    answers: ["Yes", "No", "Sometimes"],
    // answers
    correctAnswer: "Yes"
}, {
    // questions
    question: "Turning off the GPS function of your smartphone prevents any tracking of your phone’s location.",
    // 4 options
    answers: ["Yes", "No", "Sometimes"],
    // answers
    correctAnswer: "No"
}, {
    // questions
    question: "What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?",
    // 4 options
    answers: ["Use of insecure Wi-Fi networks", "Key-logging", "De-anonymization by network operators", "Phishing attacks"],
    // answers
    correctAnswer: "Use of insecure Wi-Fi networks"
}, ];

var correct = 0;
var incorrect = 0;

    function showResults(){
        $.each($("input[name = 'question-0']:checked"), function () {
            if($(this).val() === questions[0].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-1']:checked"), function () {
            if($(this).val() === questions[1].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-2']:checked"), function () {
            if($(this).val() === questions[2].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-3']:checked"), function () {
            if($(this).val() === questions[3].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-4']:checked"), function () {
            if($(this).val() === questions[4].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-5']:checked"), function () {
            if($(this).val() === questions[5].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-6']:checked"), function () {
            if($(this).val() === questions[6].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-7']:checked"), function () {
            if($(this).val() === questions[7].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-8']:checked"), function () {
            if($(this).val() === questions[8].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
          $.each($("input[name = 'question-9']:checked"), function () {
            if($(this).val() === questions[9].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }
          });
    }

   $("#done").on("click", function() {
    $("#done").remove();
    showResults();
})     

