const mybutton = document.getElementById('mybutton')
let contador = 0

mybutton.addEventListener('click', ()=> {
    contador ++
    if(contador > 1) {
        return
    }

    fetch('car.json').then((response)=> {
        return response.json()
    }).then((data)=> {
        const myul = document.getElementById('myul')

        for(let i = 0; i < data.length; i++) {
            const item = data[i]


            const newli = document.createElement('li')
            newli.setAttribute('id', 'myli')

            myul.appendChild(newli)

            const containertext = document.createElement('div')
            containertext.setAttribute('id', 'containertext')

            newli.appendChild(containertext)

            const title = document.createElement('div')
            title.setAttribute('id', 'title')

            containertext.appendChild(title)

            const textMarca = document.createElement('p')
            textMarca.setAttribute('id', 'textMarca')
            textMarca.innerHTML = item.marca

            title.appendChild(textMarca)

            const buttonExibir = document.createElement('button')
            buttonExibir.setAttribute('id', 'buttonExibir')
            buttonExibir.innerHTML = '<ion-icon name="chevron-forward-outline"></ion-icon>'

            buttonExibir.addEventListener('click', ()=> {
                buttonExibir.classList.toggle('setabaixo');
                buttonExibir.style.transition = '0.3s'
                containerNames.classList.toggle('setabaixo')
                containerNames.style.transition = '0.3s'
            })

            title.appendChild(buttonExibir)

            const containerNames = document.createElement('div')
            containerNames.setAttribute('id', 'containerNames')

            containertext.appendChild(containerNames)

            const textModelo = document.createElement('p')
            textModelo.setAttribute('id', 'textModelo')
            textModelo.innerHTML = '- ' + item.modelo

            const textAno = document.createElement('p')
            textAno.setAttribute('id', 'textAno')
            textAno.innerHTML = '- ' + item.ano

            containerNames.appendChild(textModelo)
            containerNames.appendChild(textAno)

            const removeButton = document.createElement('button')
            removeButton.setAttribute('id', 'removeButton')
            removeButton.innerHTML = '<ion-icon name="power-outline"></ion-icon>'

            removeButton.addEventListener('click', ()=> {
                let confirmar = confirm(`Deseja remover esse veículo`)
                if(confirmar) {
                    myul.removeChild(newli)
                }
            })

            newli.appendChild(removeButton)


        }
    })
})