const poll = {
  question: "What's your favourite programming language?",
  options: ["0: JavaScript", "1:Python", "2:Rust", "3:C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Display the prompt window
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join("\n")}\n (Enter your answer)`
      )
    );
    console.log(answer);
    //Register Result
    if (typeof answer === "number" && answer < this.options.length)
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "string")
      console.log(`Poll results are: ${this.answers.join(",")}`);
    else console.log(`${this.answers}`);
  },
};

document.querySelector(".btnn").addEventListener("click", poll.registerNewAnswer.bind(poll));
