new Splide('#splideHamburguesa', {
      perPage: 3,
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
    }).mount();

    new Splide('#splidePizza', {
        perPage: 3,
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
      }).mount();