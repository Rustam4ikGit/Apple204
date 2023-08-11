let img = document.querySelector('img')
let colorBtn = document.querySelectorAll('button')

let pictures = {
    "1": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896",
    "2": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841907",
    "3": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841892",
    "4": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841897"
}

colorBtn.forEach((btn, ind) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')

        console.log(key);

        img.src = pictures[key]

        pictures.forEach(btn => {
            const key = btn.getAttribute('data-col')
            btn.onclick = () => {
                pictures.forEach(btn => bt.classList.remove('active')) // delete
                img.setAttribute('src', images[key])
                btn.classList.add('active')
                current = `Color - ${key}`
                h1.innerHTML = current
            }
        }

        btn.onmouseenter = () => {
                h1.innerHTML = `Color - ${key}`
            }

        btn.onmouseleave = () => {
                h1.innerHTML = current
            }
    }
})