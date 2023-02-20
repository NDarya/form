let inputs = document.querySelectorAll('div input')
let btn = document.querySelector('button')
let img = document.querySelectorAll('.image')
let spanImp = document.querySelectorAll(".span-inp")
let label = document.querySelectorAll('.inp_label')
let success = document.querySelector('.count_suc')
let error = document.querySelector('.error')

btn.onclick = () => {
    inputs.forEach(inp => {

        if (inp.classList.contains('imp') && inp.value.length === 0) {
            inp.classList.add('red-alert')

            btn.classList.add('red-btn')
            img.forEach(img => {
                img.style.display = "block"
            })
            spanImp.forEach(span => {
                span.innerHTML = 'Please enter'
                span.style.color = 'red'
            })
            label.forEach(lab => {
                lab.style.color = 'red'
            })
            
        }
        inp.oninput = () => {
            if (inp.classList.contains('imp') && inp.value.length > 0) {
                inp.classList.add('valuable')
                inp.classList.remove('red-alert')
                img.forEach(img => {
                    
                        img.style.display = "none"
            
                })
                spanImp.forEach(span => {
                    
                        span.innerHTML = 'Done'
                        span.style.color = '#595959'
                    
                })
                label.forEach(lab => {
                   
                    lab.style.color = '#4200FF'
                    
                })
            }

        }
    })
}