
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






