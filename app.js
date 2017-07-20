var inquirer = require("inquirer");
var basic = require("./basic-flashcard.js");
var cloze = require("./cloze-flashcard.js");

var BasicCardArr = [];
var ClozeCardArr = [];

inquirer.prompt([{
  type: "list",
  message: "Please choose a flashcard.",
  choices: ["Basic Flashcards", "Cloze Flashcards"],
  name: "flashCardType"
}
]).then(function(response){
  console.log(response.flashCardType);
  //
  if (response.flashCardType === "Basic Flashcards") {
    //basic flashcard stuff
    basicAsk();

  } else {
    //cloze card stuff
    clozeAsk();
  }
});

function basicChoice(){
  inquirer.prompt([{
    type: "list",
    message: "Do you want to create another question or take the quiz?",
    choices: ["Create another question", "Take quiz"],
    name: "option"
  }]).then(function(decision){
    if (decision.option === "Create another question") {
      basicAsk();
    }else{
      console.log("Take quiz");
      console.log("You have created " + BasicCardArr.length+ " cards.");
      console.log(BasicCardArr);
    }
  });
}

function clozeChoice(){
  inquirer.prompt([{
    type: "list",
    message: "Do you want to create another sentence or take the quiz?",
    choices: ["Create another sentence", "Take quiz"],
    name: "option"
  }]).then(function(decision){
    if (decision.option === "Create another sentence") {
      clozeAsk();
    }else{
      console.log("Take quiz");
      console.log("You have created " + ClozeCardArr.length + " cards.");
      console.log(ClozeCardArr);
    }
  });
}

function basicAsk(){
  inquirer.prompt([{
    type: "input",
    message: "Enter your question.",
    name: "front"
  },
  {
    type: "input",
    message: "Enter your answer",
    name: "back"
  }
]).then(function(cont){
  //using the constructor
  // console.log(basic);
    var card = new basic(cont.front,cont.back);
    //push object made by the constructor to the array
    BasicCardArr.push(card);
    basicChoice();
    // create questions or take quiz
  });
}

function clozeAsk(){
  inquirer.prompt([{
    type: "input",
    message: "Enter a complete sentence.",
    name: "front"
  },
  {
    type: "input",
    message: "Enter your cloze word.",
    name: "back"
  }
]).then(function(cont){
  //using the constructor
  // console.log(basic);
    var card = new cloze(cont.front,cont.back);
    //push object made by the constructor to the array
    ClozeCardArr.push(card);
    clozeChoice();
    // create questions or take quiz
  });
}
