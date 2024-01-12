//business logic
function whichLanguage(quest1Val, quest2Val, quest3Val){
    if (quest1Val + quest2Val + quest3Val <= 4)
    return "Python";
    else if (quest1Val + quest2Val + quest3Val <= 7)
    return "C++";
    else if (quest1Val + quest2Val + quest3Val > 7)
    return "Kotlin";
}

//weird thing happened where if I did "=1" even if the value was 2, it would always stop at python. If I did ===1, it wouldn't register any result. Weird. 


//user interface logic
function handleSubmission(event) {
    event.preventDefault();

    const quest1Val = parseInt(document.querySelector("input[name='question1']:checked").value);
    const quest2Val = parseInt(document.querySelector("input[name='question2']:checked").value);
    const quest3Val = parseInt(document.querySelector("input[name='question3']:checked").value);

    let result = whichLanguage(quest1Val, quest2Val, quest3Val);

    document.getElementById("output").innerText = result;
}

function submit() {
    const form = document.getElementById("form");
    form.addEventListener("submit", handleSubmission);
  }

  window.addEventListener("load", submit);