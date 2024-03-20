const request = obj => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send(null)
    
        xhr.addEventListener('load', ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }else{
                reject({
                    code: xhr.status,
                    msg: xhr.statusText 
                })
            }
        })
    })
}

document.addEventListener('click', (e)=>{
    e.preventDefault()
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()
    
    if(tag === 'a'){
        carregaPagina(elemento)
    }
    
})

async function carregaPagina(elemento){
    try{
        const href = elemento.getAttribute('href')   
    
        objConfig = {
            method: "GET",
            url: href,
        }
    
        const response = await request(objConfig)
        carregaResultado(response)
    }catch(error){
        console.log(error)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}