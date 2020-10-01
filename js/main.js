(function(){
    const $id = (selector)=>{return document.getElementById(selector)}

    const $navbar = $id("navbar");
    const $sectionH = $id("section-h");
    const $sectionP = $id('section-p');
    const $sectionB = $id('section-b');

    $navbar.addEventListener('click', (e)=>{
        if(e.target.id === 'btn-burguer' || e.target.parentElement.id === 'btn-burguer'){
            window.scroll(0, $sectionH.offsetTop - 20)
        }
        if(e.target.id === 'btn-pizza' || e.target.parentElement.id === 'btn-pizza'){
            window.scroll(0, $sectionP.offsetTop - 20)
        }
        if(e.target.id === 'btn-bebida' || e.target.parentElement.id === 'btn-bebida'){
            window.scroll(0, $sectionB.offsetTop - 20)
        }
    })
})();