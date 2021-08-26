window.onload
{

    let button = document.getElementsByClassName('call-btn').item(0);

    let form = document.getElementsByClassName('form');

    button.addEventListener('click', function (e) {
        form.item(0).classList.add('active');
        console.log(form.item(0))
    })




    let menuBtn = document.getElementsByClassName('menu__open').item(0);
    menuBtn.addEventListener('click', function () {
        menu.classList.add('active');
    })





    const anchors = document.querySelectorAll('a.menu__item[href*="#"]');
    let menu = document.getElementsByClassName('menu').item(0);
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            if (e.target !== anchors.item(1)) {
                e.preventDefault();
                const blockId = anchor.getAttribute('href')
                document.querySelector('' + blockId).scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
                menu.classList.remove('active')
            }
        })
    }


}