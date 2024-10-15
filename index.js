const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const arrow_icon = accordian.querySelector('.arrow_icon');
    const answers = accordian.querySelector('.answers');

    accordian.addEventListener('click',() => {
        arrow_icon.classList.toggle('active');
        answers.classList.toggle("active");
    });
});