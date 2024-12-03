const endpointDaAPI = fetch('http://192.168.1.91:8080/ords/cda/cda-links/links')
  .then(res => res.json())
  .then((json) => {
    json.items.forEach((item) => {


      const sectionCards = document.querySelector('.cards')
      const sectionApex = document.getElementById('apex')
      const sectionIntranet = document.getElementById('intranet')
      const sectionInternet = document.getElementById('internet')

      const card = document.createElement('div');
      const cardIcon = document.createElement('div');
      const tittle = document.createElement('h3');
      const button = document.createElement('a');
      const description = document.createElement('span');
      const ul = document.createElement('ul');
      const li = document.createElement('li')
      ul.appendChild(li)


      card.setAttribute('class', 'card')
      cardIcon.setAttribute('class', `icon ${item.categoria}`)
      tittle.setAttribute('class', 'card-title')
      button.setAttribute('class', `button ${item.categoria}`)
      button.setAttribute('href', item.url)

      tittle.innerHTML = `${item.nome}`;
      description.innerHTML = `${item.descricao}`;
      li.innerHTML = `${item.categoria}`;
      ul.innerHTML = `${item.categoria}`
      button.innerHTML = `<a class=button">Acessar</a>`

      card.appendChild(cardIcon)
      card.appendChild(tittle)
      card.appendChild(button)
      card.appendChild(description)
      card.appendChild(ul)

      if (item.categoria === 'APEX') {
        sectionApex.appendChild(card)
      } else if (item.categoria === 'Internet') {
        sectionInternet.appendChild(card)
      } else if (item.categoria === 'OXAR') {
        sectionIntranet.appendChild(card)
      } else {
        sectionCards.appendChild(card)
      }
    });
  })