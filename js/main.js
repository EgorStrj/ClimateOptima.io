window.onload
{
    const anchors = document.querySelectorAll('a.menu__item[href*="#"]');
    const categoriesList = document.querySelectorAll('a.categories__list-item-link');
    const categoriesItems = document.querySelectorAll('div.categories__items')
    let aboutBlock = document.getElementsByClassName('about');
    let feedbacksBlock = document.getElementsByClassName('feedbacks');
    let categoriesBlock = document.getElementsByClassName('categories');
    let breadcrumbsBlock = document.getElementsByClassName('breadcrumbs');


    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            if (e.target === anchors.item(1)) {
                aboutBlock[0].classList.remove('active');
                feedbacksBlock[0].classList.remove('active');
                categoriesBlock[0].classList.add('active');
                breadcrumbsBlock[0].classList.add('active');
            }
            if (e.target !== anchors.item(1)) {
                aboutBlock[0].classList.add('active');
                feedbacksBlock[0].classList.add('active');
                categoriesBlock[0].classList.remove('active');
                breadcrumbsBlock[0].classList.remove('active');
            }
            e.preventDefault();
            const blockId = anchor.getAttribute('href')
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: "center"
            })

        })
    }

    // for (let category of categoriesList) {
    //     category.addEventListener('click', function (e) {
    //         e.preventDefault();
    //
    //     })
    // }

}