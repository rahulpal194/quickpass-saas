
const sidebar = document.getElementById('sidebar')
const opensidebar = document.querySelector('.open-sidebar-button')
const closesidebar = document.getElementById('close-sidebar')
opensidebar.addEventListener('click', function (){
    sidebar.classList.add('sidebar-active')
})
closesidebar.addEventListener('click', function (){
    sidebar.classList.remove('sidebar-active')
})