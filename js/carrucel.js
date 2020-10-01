const carrucelHamburguesa =  new Splide('#splideHamburguesa', {
      perPage: 3,
      lazyLoad: 'nearby',
      gap: '2rem',
      arrows:false,
      autoplay:true,
      resetProgress: true,
      breakpoints: {
		'768': {
			perPage: 2,
			gap    : '1rem',
		},
        '425': {
			perPage: 1,
			gap    : '1rem',
        }
    }
    });

const carrucelPizza = new Splide('#splidePizza', {
        perPage: 3,
        lazyLoad: 'nearby',
        gap: '2rem',
        arrows:false,
        autoplay:true,
        resetProgress: true,
        breakpoints: {
          '768': {
              perPage: 2,
              gap    : '1rem',
          },
          '425': {
              perPage: 1,
              gap    : '1rem',
          }
      }
      });

      const carrucelBebida = new Splide('#splideBebida', {
        perPage: 3,
        lazyLoad: 'nearby',
        gap: '2rem',
        arrows:false,
        autoplay:true,
        resetProgress: true,
        breakpoints: {
          '768': {
              perPage: 2,
              gap    : '1rem',
          },
          '425': {
              perPage: 1,
              gap    : '1rem',
          }
      }
      });
  
 window.addEventListener('load', (e)=>{
    carrucelHamburguesa.mount();
    carrucelPizza.mount();
    carrucelBebida.mount();
 })     
