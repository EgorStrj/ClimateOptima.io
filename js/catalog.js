window.onload
{
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
