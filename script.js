const mybutton = document.getElementById('mybutton')

let contador = 0

mybutton.addEventListener('click', () => {
    contador ++
    if(contador > 1) {
        alert(`Não há mais carros disponíveis.`)
        return
    }

    fetch('car.json')
    .then((response) => {
        response.json()
        .then((data) => {
            const myul = document.getElementById('myul')
            const mysection = document.getElementById('mysection')
            const VisualizarModelo = document.querySelector('#VisualizarModelo')
            const VisualizarAno = document.querySelector('#VisualizarAno')
            const Volta = document.querySelector('#Volta')

            data.map((item) => {
                const newli = document.createElement('li')
                newli.innerHTML = item.marca

                mysection.style.display = 'block'

                VisualizarModelo.addEventListener('click', () => {
                    newli.innerHTML = item.modelo
                    newli.appendChild(newRemoveButton)
                    
                })

                VisualizarAno.addEventListener('click', () => {
                    newli.innerHTML = item.ano
                    newli.appendChild(newRemoveButton)
                })

                Volta.addEventListener('click', () => {
                    newli.innerHTML = item.marca
                    newli.appendChild(newRemoveButton)
                })

                const newRemoveButton = document.createElement('button')
                newRemoveButton.setAttribute('id', 'removeButton')
                newRemoveButton.innerHTML = '<ion-icon name="power-outline"></ion-icon>'

                newRemoveButton.addEventListener('click', () => {
                    let confirmacao = confirm(`Deseja realmente remover esse veiculo?`)

                    if(confirmacao) {
                        myul.removeChild(newli)
                    }
                    
                })


                newli.appendChild(newRemoveButton)
                myul.appendChild(newli)

     
                
            })
        
        })
    })

   
})