window.onload
{

    let button = document.getElementsByClassName('call-btn').item(0);

    let form = document.getElementsByClassName('form');

    button.addEventListener('click', function (e) {
        form.item(0).classList.add('active');
        console.log(form.item(0))
    })


    const anchors = document.querySelectorAll('a.menu__item[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            if (e.target === anchors.item(0)) {
                e.preventDefault();
                const blockId = anchor.getAttribute('href')
                document.querySelector('' + blockId).scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }
            if (e.target === anchors.item(1)) {
                e.preventDefault();
                const blockId = anchor.getAttribute('href')
                document.querySelector('' + blockId).scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }
        })
    }

    let links = document.querySelectorAll('.categories__list-item-link');
    console.log(links);
    for (let link of links) {
        link.addEventListener("click", function (e) {
            if (link === e.target)
            {
                for (let link of links) {
                    link.classList.remove("active")
                }
                link.classList.add("active")
            }
        })
    }


}