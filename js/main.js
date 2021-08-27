window.onload
{

    let menuBtn = document.getElementsByClassName('menu__open').item(0);
    let closeMenu = document.getElementsByClassName('menu__close').item(0);

    $(menuBtn).click(() => {
        $(menu).addClass('active');
    })

    $(closeMenu).click(() => {
        $(menu).removeClass('active')
    })

    // let up = document.getElementsByClassName('up').item(0);
    // let header = document.getElementsByTagName('Header');
    // $(up).click((e) => {
    //     if (e.target === up) {
    //         e.preventDefault();
    //         header.scrollIntoView( {
    //             behavior: "smooth",
    //             block: "start"
    //         })
    //     }
    //
    // })

    let menu = document.getElementsByClassName('menu').item(0);
    // const anchors = document.querySelectorAll('a.menu__item[href*="#"]');
    // for (let anchor of anchors) {
    //     anchor.addEventListener("click", function (e) {
    //         if (e.target !== anchors.item(1)) {
    //             e.preventDefault();
    //             const blockId = anchor.getAttribute('href')
    //             document.querySelector('' + blockId).scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "center"
    //             })
    //             menu.classList.remove('active')
    //         }
    //
    //     })
    // }


    //form
    //
    //
    //

    let close = document.getElementsByClassName('close').item(0);
    let button = document.getElementsByClassName('call-btn').item(0);
    let callBtn = document.getElementsByClassName('form__call-button').item(0);
    let form = document.getElementsByClassName('form').item(0);
    let tel = document.getElementsByClassName('call-input').item(1);
    let name = document.getElementsByClassName('call-input').item(0);
    let recallThanks = document.getElementsByClassName('recall-thanks').item(0);
    let error = document.getElementsByClassName('val-error');
    let formContainer = document.getElementsByClassName('form__container').item(0);

    $(close).click(() => {
        $(form).removeClass('active');
    })

    $(button).click(() => {
        $(form).addClass('active');
    })

    $(callBtn).click(() => {
        if (tel.val() && name.val()) {
            $(error).fadeOut();
            $.ajax({
                type: 'post',
                url: '../mailCall.php',
                data: 'tel1=' + tel.val(),
                success: () => {
                    $(formContainer).fadeOut();
                    $(recallThanks).addClass('active');
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