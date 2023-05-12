 $(document).ready(function() {
     $nav = $('.nav');
     $toggleCollapse = $('.toggle-collapse');

     /* onClick event */
     $toggleCollapse.click(function() {
         $nav.toggleClass('collapse');
     })

    })



// const navSlide = () => {
//    const nav = document.querySelector('.nav');
//    const toggleCollapse = document.querySelector('.toggle-collapes');

//    toggleCollapse.addEventListener('click', () => {
//        nav.toggleClass.toggle('collapse');
//    });
// }

//  navSlide();