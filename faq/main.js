const toggleResponse = evt => {
    // remove existing open state
     const faqItems =   document.querySelectorAll(".faq-item");
     Array.from(faqItems).forEach((element) => {
       if(element.classList.contains('open')){
           element.classList.remove('open')
       }
     });



    const selectedFaqItem = evt.target.parentNode;
    if (selectedFaqItem.classList.contains('open')) {
        selectedFaqItem.classList.remove("open");
        return
    }
    selectedFaqItem.classList.toggle("open");
   
}
window.onload = function () {
    const faqHeaders = document.querySelectorAll('.faq-title')
    Array.from(faqHeaders).forEach(element => {
        element.addEventListener('click', toggleResponse)
    })
}