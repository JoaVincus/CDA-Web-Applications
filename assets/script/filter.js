fetch('http://192.168.1.91:8080/ords/cda/cda-links/links')
            .then(res=>res.json())
            .then(json=> 
            {
                const ul = document.querySelector('.listaProdutos');
                json.items.forEach((item) => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                    <a target="_blank" href="${item.url}">
                        <img src="${item.image}">
                        <span class="item-name">${item.nome}</span>
                     </a>`;
                     ul.appendChild(li)
                });
            })

            function filtrar() {
                var input,
                filter,
                ul,
                li,
                a,
                i,
                span,
                txtValue,
                count = 0

                //PEGAR OS ELEMENTOS HTML
                input = document.getElementById('inputBusca');
                ul = document.querySelector('.listaProdutos');

                // FILTRO
                filter = input.value.toUpperCase();

                // PEGAR TODAS AS LI´S
                li = ul.getElementsByTagName('li');
                
                // PERCORRER TODOS OS LI´s 
                for(i = 0; i < li.length; i++){
                    //PEGAR A TAG A DO ELEMENTO PERCORRIDO
                    a = li[i].getElementsByTagName('a')[0]
                    //PEGA O TEXTO DENTRO DA NOSSA TAG A
                    txtValue = a.textContent || a.innerText;
                    //VERIFICAR SE O QUE O USUARIO DIGITOU BATE COM A TAG A
                    if(txtValue.toUpperCase().indexOf(filter) > -1){
                        //VALOR BATEU
                        li[i].style.display = "";
                        //INCREMENTAR O CONTADOR
                        count++
                        //PEGAR A TAG SPAN DO ITEM 
                        span = li[i].querySelector(".item-name");
                        //SE EXISTIR
                        if(span){
                            span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match)=>{
                                return "<strong>" + match + "</strong>";
                            }) //substituir o conteúdo 
                        }
                    } else {
                        //NÃO MOSTRAR O ITEM DA LISTA
                        li[i].style.display = "none";
                    }
                }

                if (count === 0 || input.value === "") {
                    ul.style.display = "none";
                } else {
                    ul.style.display = "block";
                }
            }