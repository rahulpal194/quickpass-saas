
const sidebar = document.getElementById('sidebar')
const opensidebar = document.querySelector('.open-sidebar-button')
const closesidebar = document.getElementById('close-sidebar')
opensidebar.addEventListener('click', function (){
    sidebar.classList.add('sidebar-active')
})
closesidebar.addEventListener('click', function (){
    sidebar.classList.remove('sidebar-active')
})


const slidesContainers = document.querySelectorAll('.slides');
let isDragging = false;
let startX;
let scrollLeft;

slidesContainers.forEach((slide) => {
    slide.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - slide.offsetLeft; // Get the initial mouse position
        scrollLeft = slide.scrollLeft; // Store the current scroll position
        slide.style.cursor = 'grabbing'; // Change cursor to grabbing
    });

    slide.addEventListener('mouseleave', () => {
        isDragging = false;
        slide.style.cursor = 'grab'; // Reset cursor
    });

    slide.addEventListener('mouseup', () => {
        isDragging = false;
        slide.style.cursor = 'grab'; // Reset cursor
    });

    slide.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // Stop if not dragging
        e.preventDefault(); // Prevent text selection
        const x = e.pageX - slide.offsetLeft; // Current mouse position
        const walk = (x - startX) * 2; // Calculate how far to scroll
        slide.scrollLeft = scrollLeft - walk; // Update scroll position
    });
});



const accordionBtn = document.querySelectorAll(".accordion");
accordionBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
       
        const content = btn.nextElementSibling;
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            content.style.height = '0px';
            content.style.margin = "0px 0px 0px 0px"
            btn.querySelector('.icon').classList.remove('lab-fill-cirlce-minus'); 
            btn.querySelector('.icon').classList.add('lab-fill-cirlce-plus');
            btn.querySelector('.icon').classList.add('rotate-180')
        } else {
            content.style.height = `${content.scrollHeight}px`;
            content.style.margin="8px 0px 0px 0px"
            btn.querySelector('.icon').classList.add('lab-fill-cirlce-minus'); 
            btn.querySelector('.icon').classList.remove('lab-fill-cirlce-plus');
            btn.querySelector('.icon').classList.add('-rotate-180')
        }
        btn.setAttribute('aria-expanded', !isExpanded);
    });
});





