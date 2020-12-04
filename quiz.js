var startButton = document.getElementById("start");// To get the start button
        startButton.addEventListener("click", startGame, false);

        var answersButtonElement = document.getElementById("buttons"); // to get the container element that holds the buttons
        var buttons = document.getElementsByTagName("button"); // to get the buttons
        var  myQuestion = document.getElementById("questions");// To get the question tag
        var nextButton = document.getElementById("next"); // to get the next button
        nextButton.addEventListener("click", nextQuestion, false);
        var shuffledQuestions, currentIndex;

        // To start the quiz
        function startGame(){
           myQuestion.classList.remove("hide");            
            startButton.classList.add("hide");            
           shuffledQuestions = questions.sort(() => Math.random() - .5);
            currentQuestionIndex =0;           
            setNextQuestion();       
        }
        // To set the questions
         function setNextQuestion(){
            showQuestions(shuffledQuestions[currentQuestionIndex]);
     
        }
        // to display the questions and options
        function showQuestions(question){         
            myQuestion.innerText = question.question;
            // create buttons for the answers
           question.answers.forEach(answer =>{
            const button = document.createElement("button");
            button.innerText = answer.text;            
            button.classList.add("btn");                       
            if(answer.correct){
                button.dataset.correct = answer.correct;
            } 
            button.addEventListener("click", selectAnswer, false);                    
            answersButtonElement.append(button);                
            });            
        }
        // to select the answers
            function selectAnswer(e){
                let selectedAnswer = e.target;
                let correct = e.target.dataset.correct;              
               Array.from(buttons).forEach(button =>{
                   if(correct){
                       document.body.classList.add("correct");
                       selectedAnswer.classList.add("correct");   
                      
                   }else{
                    document.body.classList.add("wrong");
                    selectedAnswer.classList.add("wrong");                    
                   }                    
                   setStatus(button, button.dataset.correct);
               });
               // to display the next button
               nextButton.classList.remove("hide");    
               answersButtonElement.appendChild(nextButton);   
               // To check the number of questions    
               if(shuffledQuestions.length > currentQuestionIndex + 1){
                     nextButton.classList.remove("hide");
               }
               else{                
                   startButton.innerText = "Restart";                     
                   startButton.classList.remove("hide");    
                              
               }
            }
            // To set the status of the elements
          function setStatus(element, correct){                
            if(correct){
                element.classList.add("correct");                
            }
            else{
                element.classList.add("wrong");
                nextButton.classList.remove("wrong")
            }            
          }
          // to display the next question        
          function nextQuestion(){
              resetState();
              currentQuestionIndex++;
              setNextQuestion();                         
          }
          // to reset
          function resetState(){
              nextButton.classList.add("hide");
              document.body.classList.remove("wrong");
              document.body.classList.remove("correct");             
              while(answersButtonElement.firstChild){
                 answersButtonElement.removeChild(answersButtonElement.firstChild);
              }
          }

          // questions and answers
        const questions= [
            {
                question: "when Jesus died, which of the following did not happen?",
                answers:[ 
                    {text:"the veil of the temple was torn" , correct:false},
                    {text: "the dead came to life" , correct:false},  
                    {text: "there was an earthquake" , correct:false},  
                    {text: "there was a flood that covered the earth" , correct:true},         
          ]
        },
        {
                question: "Who asked Pilate for Jesus' corpse and put it in his own tomb??",
                answers:[ 
                    {text:"Zebedee" , correct:false},
                    {text: "Joseph of Arimathaea" , correct:true},  
                    {text: "Mary Magdalene" , correct:false},  
                    {text: "Paul" , correct:false},         
          ]
        },
        {
                question: "What was placed in front of the door of the tomb to close it??",
                answers:[ 
                    {text:"a stone" , correct:true},
                    {text: "a fence" , correct:false},  
                    {text: "a wall" , correct:false},  
                    {text: "a blanket" , correct:false},         
          ]
        },       
        {
                question: "On what day was Jesus' resurrection?",
                answers:[ 
                    {text:"the third day" , correct:false},
                    {text: "the fourteenth day" , correct:false},  
                    {text: "the same day as his crucifixion" , correct:false},  
                    {text: "the tenth day" , correct:true},         
          ]
        },
        {
                question: "What moved the object in front of the tomb door?",
                answers:[ 
                    {text:"the object moved itself" , correct:false},
                    {text: "the earthquake" , correct:false},  
                    {text: "the 12 Apostles" , correct:false},  
                    {text: "an angel" , correct:true},         
          ]
        },
        ]