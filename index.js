const colors = ['#97BC23','#F3ADF9','#C7C6F4','#AF7A57',"#FCFE3D",'#D85C9A']

const btn = document.getElementById('btn')

const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}

