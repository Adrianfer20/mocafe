(function(){
    const $id = (selector)=>{return document.getElementById(selector)}


    const $navbar = $id("navbar");
    const $sectionH = $id("section-h");
    const $sectionP = $id('section-p');
    const $sectionB = $id('section-b');

    $navbar.addEventListener('click', (e)=>{
        if(e.target.id === 'btn-burguer' || e.target.parentElement.id === 'btn-burguer'){
            console.log(e.target);
            window.scroll(0, $sectionH.offsetTop - 20);
            document.querySelector("button.bg-orange-600").classList.remove('bg-orange-600');
            if(e.target.matches('img')){
                return e.target.parentElement.classList.add('bg-orange-600');
            }
            else if (e.target.matches('button')){
                return e.target.classList.add('bg-orange-600');
            }
        }
        if(e.target.id === 'btn-pizza' || e.target.parentElement.id === 'btn-pizza'){
            console.log(e.target);
            window.scroll(0, $sectionP.offsetTop - 20);
            document.querySelector("button.bg-orange-600").classList.remove('bg-orange-600');
            if(e.target.matches('img')){
                return e.target.parentElement.classList.add('bg-orange-600');
            }
            else if (e.target.matches('button')){
                return e.target.classList.add('bg-orange-600');
            }
        }
        if(e.target.id === 'btn-bebida' || e.target.parentElement.id === 'btn-bebida'){
            console.log(e.target);
            window.scroll(0, $sectionB.offsetTop - 20);
            document.querySelector("button.bg-orange-600").classList.remove('bg-orange-600');
            if(e.target.matches('img')){
                return e.target.parentElement.classList.add('bg-orange-600');
            }
            else if (e.target.matches('button')){
                return e.target.classList.add('bg-orange-600');
            }
        }
    })
})();