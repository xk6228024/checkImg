// 点击放大图片功能jjjjjjjjjjjjjjs
function zoomImg (url) {
    if (document.getElementById('cover')) return
    // 创建遮罩层
    let cover = document.createElement('div')
    cover.setAttribute('id', 'cover')
    cover.style.position = 'fixed'
    cover.style.top = 0
    cover.style.left = 0
    cover.style.right = 0
    cover.style.bottom = 0
    cover.style.transition = 'all ease 0.2s'
    cover.style.background = 'rgba(0, 0, 0, .5)'
    cover.style.zIndex = 999
    cover.style.transform = 'scale(0)'
    cover.style.opacity = 0
    // 创建图片
    let img = document.createElement('img')
    img.setAttribute('src', url)
    img.style.position = 'absolute'
    img.style.top = '50%'
    img.style.left = '50%'
    img.style.transform = 'translateX(-50%) translateY(-50%)'
    img.style.transition = 'all ease 0.2s'
    // 创建减号
    let imgMinus = document.createElement('img')
    imgMinus.setAttribute('src', process.env.BASE_URL + 'img/img_minus.svg')
    imgMinus.style.position = 'absolute'
    imgMinus.style.right = '50px'
    imgMinus.style.top = '50%'
    imgMinus.style.cursor = 'pointer'
    imgMinus.style.transform = 'translateY(-50px)'
    // 创建加号
    let imgAdd = document.createElement('img')
    imgAdd.setAttribute('src', process.env.BASE_URL + 'img/img_add.svg')
    imgAdd.style.position = 'absolute'
    imgAdd.style.right = '50px'
    imgAdd.style.top = '50%'
    imgAdd.style.cursor = 'pointer'
    imgAdd.style.transform = 'translateY(50px)'
    // 创建旋转号
    let imgRotate = document.createElement('img')
    imgRotate.setAttribute('src', process.env.BASE_URL + 'img/img_rotate.svg')
    imgRotate.style.position = 'absolute'
    imgRotate.style.right = '50px'
    imgRotate.style.top = '50%'
    imgRotate.style.cursor = 'pointer'
    // imgRotate.style.transform = 'translateY(50px)'
    cover.appendChild(img)
    cover.appendChild(imgMinus)
    cover.appendChild(imgAdd)
    cover.appendChild(imgRotate)
    document.body.appendChild(cover)
    setTimeout(() => {
        cover.style.transform = 'scale(1)'
        cover.style.opacity = 1
    }, 100)
    img.onclick = (e) => {
        e.stopPropagation()
        img.style.transform += 'scale(1.2)'
    }
    imgAdd.onclick = (e) => {
        e.stopPropagation()
        img.style.transform += 'scale(1.2)'
    }
    imgMinus.onclick = (e) => {
        e.stopPropagation()
        img.style.transform += 'scale(.83)'
    }
    imgRotate.onclick = (e) => {
        e.stopPropagation()
        img.style.transform += 'rotate(90deg)'
    }
    cover.onclick = () => {
        cover.style.opacity = 0
        cover.style.transform = 'scale(0)'
        setTimeout(() => {
            cover.remove()
        }, 200)
    }
}

export {
    zoomImg
}
