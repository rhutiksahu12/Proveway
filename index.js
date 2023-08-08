let bundle = document.getElementsByName('bundlebtn');
// console.log(bundle[1].checked)
let collapsablediv = document.querySelectorAll('.collapse');
// console.log(collapsable[1])
console.log(collapsablediv.length)

bundle.forEach(radio =>{
    radio.addEventListener('change', ()=>{
        const divToShow =radio.value;

        collapsablediv.forEach(div => {
            if(div.id===divToShow){
                div.style.display = 'block'
                div.parentElement.classList.add('active')
            } else {
                div.style.display='none'
                div.parentElement.classList.remove('active')
            }

        })
    })
})
    
