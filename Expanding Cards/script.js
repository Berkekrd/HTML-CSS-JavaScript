const panels = document.querySelectorAll('.panel')

panels.forEach((panels)=>{
    panels.addEventListener('click',()=>{
        // console.log(panels)
        removeActiveClasses()
        panels.classList.add('active')

    })
})

function removeActiveClasses(){
    panels.forEach((panels)=>{
        panels.classList.remove('active')
    })
}