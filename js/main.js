window.onload
{

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



    //form
    //
    //
    //

    let button = document.getElementsByClassName('call-btn').item(0);

    let callBtn = document.getElementsByClassName('form__call-button').item(0);

    let form = document.getElementsByClassName('form').item(0);

    button.addEventListener('click', function (e) {
        form.item(0).classList.add('active');
        console.log(form.item(0))
    })


    let tel = document.getElementsByClassName('call-input').item(1);
    let name = document.getElementsByClassName('call-input').item(0);
    let recallThanks = document.getElementsByClassName('recall-thanks').item(0);
    let error = document.getElementsByClassName('val-error');

    $(callBtn).click(() => {
        if (tel.val()) {
            $(error).fadeOut();
            $.ajax({
                type: 'post',
                url: '../mailCall.php',
                data: 'tel1=' + tel.val(),
                success: () => {
                    $(form).fadeOut();
                    $(recallThanks).fadeIn();
                },
                error: () => {
                    $(form).fadeOut();
                    alert('Возникла ошибка, ппожалуйста, позвоните по указанным номерам телефона');
                },
            });
        } else {
            $(error).fadeIn();
        }
    });




}