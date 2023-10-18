const posts = [
    { nome: 'Carla Santos', post: 'Lorem ipsum porta eleifend tristique blandit leo, curabitur quisque ut ultricies dolor, sed litora ullamcorper lacus integer. ut elementum habitant conubia rutrum integer condimentum quis ornare torquent, vivamus himenaeos habitant vitae mi per leo ultricies.'},
    { nome: 'Luiz Felipe', post: 'Lorem ipsum porta eleifend tristique blandit leo, curabitur quisque ut ultricies dolor, sed litora ullamcorper lacus integer. ut elementum habitant conubia rutrum integer condimentum quis ornare torquent, vivamus himenaeos habitant vitae mi per leo ultricies.'},
    { nome: 'Otaviano Macedo', post: 'Lorem ipsum porta eleifend tristique blandit leo, curabitur quisque ut ultricies dolor, sed litora ullamcorper lacus integer. ut elementum habitant conubia rutrum integer condimentum quis ornare torquent, vivamus himenaeos habitant vitae mi per leo ultricies.'},
    { nome: 'João Olveira', post: 'Lorem ipsum porta eleifend tristique blandit leo, curabitur quisque ut ultricies dolor, sed litora ullamcorper lacus integer. ut elementum habitant conubia rutrum integer condimentum quis ornare torquent, vivamus himenaeos habitant vitae mi per leo ultricies.'},
    { nome: 'Patricia Soares', post: 'Lorem ipsum porta eleifend tristique blandit leo, curabitur quisque ut ultricies dolor, sed litora ullamcorper lacus integer. ut elementum habitant conubia rutrum integer condimentum quis ornare torquent, vivamus himenaeos habitant vitae mi per leo ultricies.'},
    { nome: 'Tania Ouriques', post: 'Lorem ipsum porta eleifend tristique blandit leo, curabitur quisque ut ultricies dolor, sed litora ullamcorper lacus integer. ut elementum habitant conubia rutrum integer condimentum quis ornare torquent, vivamus himenaeos habitant vitae mi per leo ultricies.'},
    { nome: 'Julio Pacheco', post: 'Lorem ipsum porta eleifend tristique blandit leo, curabitur quisque ut ultricies dolor, sed litora ullamcorper lacus integer. ut elementum habitant conubia rutrum integer condimentum quis ornare torquent, vivamus himenaeos habitant vitae mi per leo ultricies.'}

]

const listarPostagens = () => {
    const postagens = document.querySelector('.posts')
    postagens.innerHTML=''
    
    posts.map((postagem)=>{
        const publicacao = document.createElement('div') 
        publicacao.setAttribute('class', 'post') 
        publicacao.setAttribute('class', 'fundoPost')

        const nomeAutor = document.createElement('h3') 
        const textoPost = document.createElement('p')
        textoPost.setAttribute('class','textoDistancia') 
        
        nomeAutor.append(postagem.nome) 
        textoPost.append(postagem.post)
        
        publicacao.appendChild(nomeAutor)
        publicacao.appendChild(textoPost)

        postagens.appendChild(publicacao) 
    })
}

listarPostagens()

const botao = document.querySelector('#enviar')

botao.addEventListener('click',(event)=>{
    event.preventDefault();
  
    const nome = document.querySelector('#nome').value
    const texto = document.querySelector('#texto').value
    
    posts.push({nome:`${nome}`, post:`${texto}`})
    
    listarPostagens() 

})