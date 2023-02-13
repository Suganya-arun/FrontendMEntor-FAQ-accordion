// const btn=document.querySelectorAll("button");
// console.log(btn);
// btn.forEach(item=> {item.addEventListener("click",collapse)});
function collapse(e)
{

    
    // e.nextElementSibling.classList.add("answer-show");
    // e.classList.add("question-show");
 // e.querySelector("img").classList.add("arrow-active");

    e.nextElementSibling.classList.toggle("answer-show");
    e.classList.toggle("question-show");
    e.querySelector("img").classList.toggle("arrow-active");
}
function collapseBtn(e)
{
    e.parentElement.classList.toggle("question-show");
    e.parentElement.nextElementSibling.classList.toggle("answer-show");
    e.querySelector("img").classList.toggle("arrow-active");
}