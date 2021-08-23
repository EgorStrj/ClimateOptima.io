window.onload
{
    const anchors = document.querySelectorAll('a.menu__item[href*="#"]');
    let aboutBlock = document.getElementsByClassName('about');
    let feedbacksBlock = document.getElementsByClassName('feedbacks');
    let categoriesBlock = document.getElementsByClassName('categories');
    let breadcrumbsBlock = document.getElementsByClassName('breadcrumbs');
    // let showCatalog = new function () {
    //     aboutBlock[0].classList.remove('active');
    //     feedbacksBlock[0].classList.remove('active');
    //     categoriesBlock[0].classList.add('active');
    //     breadcrumbsBlock[0].classList.add('active');
    // }
    // let showMain = new function () {
    //     aboutBlock[0].classList.add('active');
    //     feedbacksBlock[0].classList.add('active');
    //     categoriesBlock[0].classList.remove('active');
    //     breadcrumbsBlock[0].classList.remove('active');
    // }
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