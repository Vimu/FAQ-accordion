
const questions = document.querySelectorAll(".question");


questions.forEach(function(question){
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", () => {
        
        questions.forEach( (item) => {
            if(item !== question){
                item.classList.remove("show-text")
            }
        });

        question.classList.toggle("show-text");
    });

});


// Method 02

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     btns.forEach((otherBtn) => {
//         const otherQuestion = otherBtn.parentElement.parentElement;

//         if (otherQuestion !== question) {
//             otherQuestion.classList.remove("show-text");
//           }

//     });

//     question.classList.toggle("show-text");
//   });
// });
