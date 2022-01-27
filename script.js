const menuLinks = document.querySelectorAll('.nav-links [data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLinkClick);
        });
        function onMenuLinkClick(e)
        {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto))
            {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlcokValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: gotoBlcokValue,
                    behavior: "smooth"
                })
                e.preventDefault();
            }
        }
}