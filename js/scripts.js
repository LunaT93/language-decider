//business logic
function whichLanguage(quest1Val, quest2Val, quest3Val, quest4Val, quest5Val){
    if (quest1Val + quest2Val + quest3Val + quest4Val + quest5Val <= 9)
    return "Python";
    else if (quest1Val + quest2Val + quest3Val + quest4Val + quest5Val <= 12)
    return "C++";
    else
    return "Kotlin";
}

//weird thing happened where if I did "=1" even if the value was 2, it would always stop at python. If I did ===1, it wouldn't register any result. Weird. 


//user interface logic
function handleSubmission(event) {
    event.preventDefault();

    const quest1Val = parseInt(document.querySelector("input[name='question1']:checked").value);
    const quest2Val = parseInt(document.querySelector("input[name='question2']:checked").value);
    const quest3Val = parseInt(document.querySelector("input[name='question3']:checked").value);
    const quest4Val = parseInt(document.querySelector("input[name='question4']:checked").value);
    const quest5Val = parseInt(document.querySelector("input[name='question5']:checked").value);

    let result = whichLanguage(quest1Val, quest2Val, quest3Val, quest4Val, quest5Val);

    document.getElementById("output").innerText = result;
}

function submit() {
    const form = document.getElementById("form");
    form.addEventListener("submit", handleSubmission);
  }

  window.addEventListener("load", submit);

//invert colors button
var button = document.getElementById("invert-button");
var text = document.getElementById("sample-text");

button.addEventListener("click", function() {
  // Toggle the inverted class on the text element
  text.classList.toggle("inverted");
});