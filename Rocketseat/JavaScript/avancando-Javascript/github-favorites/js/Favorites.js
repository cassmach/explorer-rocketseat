export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
         this.entries = [{
            login: 'cassmach',
            name: "Cássio Machado",
            public_repos: '27',
            followers: "35",

        },
        {
            login: 'diego3g',
            name: "Diego Fernandes",
            public_repos: '76',
            followers: "200",

        }   
    ]
    
    }

    delete(user){
        const filteredEntries = this.entries
        .filter(entry =>entry.login !== user.login)
        console.log(filteredEntries)

        
    }
}


// classe que vai criar a visualização e envetos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

    
    this.entries.forEach(user => {
        const row = this.createRow()
        
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers
        
        row.querySelector('.remove').onclick = () => {
          const isOk = confirm('Tem certeza que deseja deletar essa linha?')
            if (isOk) {
                this.delete(user)
            }

        }

        this.tbody.append(row)
    })
    }

    createRow(){ 
        const tr = document.createElement('tr')

        tr.innerHTML = `
                  <td class="user">
                      <img src="https://github.com/cassmach.png" alt="imagem do cassio">
                      <a href="https://github.com/cassmach" target="_blank">
                          <p>Cássio Machado</p>
                          <span>cass.mach</span>
                      </a>
                  </td>
                  <td class="repositories">
                      27
                  </td>
                  <td class="followers">
                      3
                  </td>
                  <td>
                      <button class="remove">&times;</button>
                  </td>
      `
      
      return tr
    }

    

    removeAllTr() {
    this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}