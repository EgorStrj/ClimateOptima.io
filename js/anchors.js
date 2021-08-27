window.onload
{
    let menu = document.getElementsByClassName('menu').item(0);

    const anchors = document.querySelectorAll('a.menu__item[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            if (e.target !== anchors.item(1)) {
                e.preventDefault();
                const blockId = anchor.getAttribute('href')
                document.querySelector('' + blockId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
                menu.classList.remove('active')
            }
        })
    }
}