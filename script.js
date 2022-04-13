

let arrayPrices = []
let panelLimiter = 0
let total = 0
let arrayPricesLength = 0
let messageLimiter = 0
const mainData = [{
    img: "Men-Jacket-Front-Black__15466 1.png",
    category: "Camisetas" ,
    title: "Lightweight Jacket" ,
    caption: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante..." ,
    sign:  'R$ ', 
    qtd: 0,
    price: 100.00,
    addButton: "Adicionar ao Carrinho"
}, {
    img: "image 1.png",
    category: "Acessórios" ,
    title: "Black Hat" ,
    caption: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que..." ,
    sign:  'R$ ', 
    qtd: 0,
    price: 100.00,
    addButton: "Adicionar ao Carrinho"
}, 
{
    img: "Surgical-Mask-Black__89554 1.png",
    category: "Acessórios" ,
    title: "Mask" ,
    caption: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas.." ,
    sign:  'R$ ', 
    qtd: 0,
    price:100.00,
    addButton: "Adicionar ao Carrinho"
}, 
    {
    img: "Men-TShirt-Black-Front__70046 1.png",
    category: "Camisetas" ,
    title: "T-shirt" ,
    caption: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de..." ,
    sign:  'R$ ',
    qtd: 0, 
    price: 100.00,
    addButton: "Adicionar ao Carrinho"
}, 
    {
    img: "mockup-a0dc2330__62146 1.png",
    category: "Camisetas" ,
    title: "Short-Sleeve T-Shirt" ,
    caption: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso..." ,
    sign:  'R$ ', 
    qtd: 0,
    price: 100.00,
    addButton: "Adicionar ao Carrinho"
}, 
{
    img: "mockup-9b9894f1__67347 1.png",
    category: "Camisetas" ,
    title: "Champion Packable Jacket" ,
    caption: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést..." ,
    sign:  'R$ ', 
    qtd: 0,
    price: 100.00,
    addButton: "Adicionar ao Carrinho"
}]

const main = document.querySelector("main")

function createPost(postsArray) {
    const postSection = document.querySelector('section')
    main.appendChild(postSection)

    for(let i = 0; i < postsArray.length; i++) {
        const post = document.createElement("div")
        post.classList.add('container')

        const img = document.createElement('img'); 
        img.src = postsArray[i].img;

        const category = document.createElement('button')
        category.classList.add('Category')
        category.innerText = postsArray[i].category

        const title = document.createElement('h3')
        title.classList.add('title3')
        title.innerText = postsArray[i].title

        const caption = document.createElement('p')
        caption.classList.add('caption')
        caption.innerText = postsArray[i].caption

        const sign = document.createElement('p')
        sign.innerText = postsArray[i].sign

        const price = document.createElement('span')
        price.classList.add('price')
        price.innerText = postsArray[i].price

        const addButton = document.createElement('button')
        addButton.classList.add('add')
        addButton.id = i
        addButton.innerText = postsArray[i].addButton

        

        post.appendChild(img)
        post.appendChild(category)
        post.appendChild(title)
        post.appendChild(caption)
        sign.appendChild(price)
        post.appendChild(sign)
        post.appendChild(addButton)
        postSection.appendChild(post)
    }
}

createPost(mainData)

const aside = document.createElement('aside')
const form = document.createElement('form')
const search = document.createElement('input')
search.type = 'text'
search.id = "pesquisa"
search.placeholder = 'Pesquisar por...'
const submit = document.createElement('input')
submit.type = 'submit'
submit.id = 'submit'
submit.value = 'Pesquisar'
const cart = document.createElement("section")
cart.classList.add('cart')
cart.id = "cart"
const cartButtton = document.createElement('button')
cartButtton.id = 'title'
cartButtton.innerText = 'Carrinho de Compras'
const message = document.createElement('h3')
message.id = 'message'
message.innerText = 'Seu Carrinho está vazio'
const add2 = document.createElement('button')
add2.classList.add('add2')
add2.innerText = "Adicionar ao Carrinho"


main.appendChild(aside)
aside.appendChild(form)
form.appendChild(search)
form.appendChild(submit)
aside.appendChild(cart)
cart.appendChild(cartButtton)
cart.appendChild(message)
cart.appendChild(add2)


const panel = document.createElement('div')
panel.classList.add('panel')
const quantity = document.createElement("p")
quantity.classList.add('quantity')
const value = document.createElement("p")
value.classList.add('quantity')



function calculateTotal(){
    let totalPrices = 0
    for (let index = 0; index < arrayPrices.length; index++) {
        totalPrices += arrayPrices[index]
        total = totalPrices
    }
    return total
} 




function calculate(){
    if (panelLimiter === 0){
        panelLimiter ++
        calculateTotal()
        aside.appendChild(panel)
        quantity.innerText = "Quantidade:        " + "      " + arrayPrices.length
        panel.appendChild(quantity)
        value.innerText = "Total: R$" + total
        panel.appendChild(value)
    }else{
        calculateTotal()
        quantity.innerText = "Quantidade:        " + "      " + arrayPrices.length
        value.innerText = "Total: R$" + total
        panel.appendChild(quantity)
        panel.appendChild(value)
        }
    }

   


const addButton = document.getElementsByClassName("add")
qtdButtons = addButton.length
for (let i = 0; i < qtdButtons; i++){
    addButton[i].addEventListener('click', function addToCart(){
    
        mainData[i].qtd ++
        messageLimiter ++
        if(messageLimiter == 1){
            cart.removeChild(message)
            cart.removeChild(add2)
        }
        
        if (mainData[i].qtd === 1) {
            
        
            const cartItem = document.createElement("div")
            cartItem.classList.add('cartItem')
            
        
            const imgCart = document.createElement("img")
            imgCart.classList.add('imgCart')
            imgCart.src = mainData[i].img
            
        
            const cartItemInfo = document.createElement("div")
        
            const titleCart = document.createElement("h5")
            titleCart.innerText = mainData[i].title
            titleCart.classList.add('titleCart')
           
        
            const signCart = document.createElement('p')
            signCart.classList.add('priceCart')
            signCart.innerText = mainData[i].sign
        
            const priceCartValue = document.createElement('span')
            priceCartValue.classList.add('price')
            priceCartValue.innerText = mainData[i].price
            
            const quantityItem = document.createElement('span')
            quantityItem.classList.add('qtd')
            quantityItem.innerText = "Quantidade: " + mainData[i].qtd
            quantityItem.id = "quantityHtml" + i

            const removeButton = document.createElement('button')
            removeButton.classList.add('remove')
            removeButton.id = i + 10
            removeButton.innerText = "Remover do Carrinho"
            removeButton.addEventListener('click', function removeItem(){
                mainData[i].qtd --
                arrayPrices.pop()
                console.log(total)
                calculate()
                document.getElementById("quantityHtml" + i).innerText = "Quantidade: " + mainData[i].qtd
                if (mainData[i].qtd <= 0) {
                    cart.removeChild(cartItem)
                }if(arrayPrices.length === 0){
                        aside.removeChild(panel)
                        panelLimiter = 0
                        messageLimiter = 0
                        cart.appendChild(message)
                        cart.appendChild(add2)
                    }
                }
    )
        
            cart.appendChild(cartItem)
            cartItem.appendChild(imgCart)
            cartItem.appendChild(cartItemInfo)
            cartItemInfo.appendChild(titleCart)
            cartItemInfo.appendChild(signCart)
            signCart.appendChild(priceCartValue)
            cartItemInfo.appendChild(quantityItem)
            cartItemInfo.appendChild(removeButton)

            
          
        }else{
            
            document.getElementById("quantityHtml" + i).innerText = "Quantidade: " + mainData[i].qtd
           
        }
        arrayPrices.push(mainData[i].price)
        calculate()
    }
    )  
}








    

    


     
