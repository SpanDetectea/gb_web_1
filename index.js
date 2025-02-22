const dataJson = `[
{ "img" : "img/img1svg.svg",
 "title" : "ELLERY X M'O CAPSULE",
 "text" : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
 "price" : "$54.00"
},
{ "img" : "img/img2svg.svg",
 "title" : "ELLERY X M'O CAPSULE",
 "text" : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
 "price" : "$54.00"
},
{ "img" : "img/img3svg.svg",
 "title" : "ELLERY X M'O CAPSULE",
 "text" : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
 "price" : "$54.00"
},
{ "img" : "img/img4svg.svg",
 "title" : "ELLERY X M'O CAPSULE",
 "text" : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
 "price" : "$54.00"
},
{ "img" : "img/img5svg.svg",
 "title" : "ELLERY X M'O CAPSULE",
 "text" : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
 "price" : "$54.00"
},
{ "img" : "img/img6svg.svg",
 "title" : "ELLERY X M'O CAPSULE",
 "text" : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
 "price" : "$54.00"
}
]`

const wrapper = document.querySelector('.products__wrapper')
const data = JSON.parse(dataJson)
data.forEach(element => {

    const img = document.createElement('img')
    const title = document.createElement('div')
    const text = document.createElement('div')
    const price = document.createElement('div')
    const products = document.createElement('div')
    const addProductButton = document.createElement('button')
    const buttonImg = document.createElement('img')
    const ul = document.querySelector('.cart-lists')

    img.src = element.img
    img.classList.add('products__wrapper__img')

    title.textContent = element.title
    title.classList.add('products__wrapper__title')
    text.textContent = element.text
    text.classList.add('products__wrapper__text')

    price.textContent = element.price
    price.classList.add('products__wrapper__price')

    products.classList.add('products__wrapper__items')

    addProductButton.classList.add('products__wrapper__items__button')
    buttonImg.src = "img/cart.svg"
    addProductButton.appendChild(buttonImg)

    addProductButton.addEventListener("click", function (e) {
        const li = document.createElement('li')
        li.textContent = `Вы добавили ${element.title} за ${element.price} `
        const deleteEl = document.createElement('span');
        deleteEl.textContent = 'X'
        deleteEl.style.marginLeft = "40px"
        deleteEl.style.color = "red"
        deleteEl.style.cursor = "pointer"
        deleteEl.addEventListener('click', function () {
            ul.removeChild(li)
        })
        li.appendChild(deleteEl)
        ul.appendChild(li)
    })

    products.appendChild(img)
    products.appendChild(title)
    products.appendChild(text)
    products.appendChild(price)
    products.appendChild(addProductButton)

    wrapper.appendChild(products)
});
