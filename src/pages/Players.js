import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Players() {
  const getCarouselSettings = () => ({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    appendDots: dots => (
      <div className="custom-dots">
        <ul className="list-none"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="bg-light_blue w-4 h-4 rounded-full"></div>
    )
  });

  const goalkeepers = [
    { name: "Ederson", number: 31, image: "https://www.mancity.com/meta/media/q1mpvs1j/training-1.jpg" },
    { name: "Ortega", number: 18, image: "https://fcbinside.de/wp-content/uploads/2023/08/imago1032985456-1.jpg" },
    { name: "Carson", number: 33, image: "https://www.mancity.com/meta/media/rqjd1pav/training-8.jpg" },
  ];

  const defenders = [
    { name: "Walker", number: 2, image: "https://www.mancity.com/meta/media/w5zpvlut/24aw_pr_ts_football_man-city_away_matchwear_walker_0029_16x9_1920x1080px.jpg" },
    { name: "Dias", number: 3, image: "https://www.mancity.com/meta/media/ya3f4fv4/training-3.jpg" },
    { name: "Stones", number: 5, image: "https://e0.365dm.com/20/12/2048x1152/skysports-john-stones-man-city_5203868.jpg?20201220134156" },
    { name: "Akanji", number: 25, image: "https://www.mancity.com/meta/media/aancq3pm/24aw_pr_ts_football_man-city_away_matchwear_akanji_0056_16x9_1920x1080px.jpg" },
    { name: "Gvardiol", number: 24, image: "https://www.mancity.com/meta/media/wo3ba25h/mt-6.jpg" },
  ];

  const midfielders = [
    { name: "Rodri", number: 16, image: "https://th.bing.com/th/id/OIP.1N4ijMYjGJSkIngwPRnqXAHaE8?rs=1&pid=ImgDetMain" },
    { name: "De Bruyne", number: 17, image: "https://www.mancity.com/meta/media/dgcfxp0u/24aw_pr_ts_football_man-city_away_matchwear_de-bruyne_0076_16x9_1920x1080px.jpg" },
    { name: "Bernardo", number: 20, image: "https://www.mancity.com/meta/media/h5terjww/training-9.jpeg" },
    { name: "Bobb", number: 52, image: "https://www.mancity.com/meta/media/nrnlpur1/training-10.jpg" },
  ];

  const attackers = [
    { name: "Haaland", number: 9, image: "https://www.mancity.com/meta/media/mpbnely4/training-4.jpg" },
    { name: "Doku", number: 11, image: "https://www.mancity.com/meta/media/l1pde0iu/training-main-overlay.jpg?width=1280" },
    { name: "Grealish", number: 10, image: "https://www.mancity.com/meta/media/o2woh5cc/mt-8.jpg" },
    { name: "Foden", number: 47, image: "https://th.bing.com/th/id/OIP.U2NCSyizCdRyLy9IhalA7gHaFT?rs=1&pid=ImgDetMain" },
  ];

  return (
    <div className="bg-white min-h-screen p-8 pt-28 font-sans max-w-screen-xl mx-auto">
      <h1 className="text-dark_blue text-7xl mt-5 mb-12 text-center font-bold">Players</h1>

      <div className="mb-16">
        <h2 className="text-light_blue text-4xl mb-8 font-bold">Goalkeepers</h2>
        <Slider {...getCarouselSettings()}>
          {goalkeepers.map(player => (
            <div key={player.name} className="p-4">
              <img src={player.image} alt={player.name} className="rounded-lg shadow-lg w-full h-72 object-cover transform transition-transform hover:scale-105" />
              <h3 className="text-center text-2xl mt-4 font-medium">{player.name} - #{player.number}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mb-16">
        <h2 className="text-light_blue text-4xl mb-8 font-bold">Defenders</h2>
        <Slider {...getCarouselSettings()}>
          {defenders.map(player => (
            <div key={player.name} className="p-4">
              <img src={player.image} alt={player.name} className="rounded-lg shadow-lg w-full h-72 object-cover transform transition-transform hover:scale-105" />
              <h3 className="text-center text-2xl mt-4 font-medium">{player.name} - #{player.number}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mb-16">
        <h2 className="text-light_blue text-4xl mb-8 font-bold">Midfielders</h2>
        <Slider {...getCarouselSettings()}>
          {midfielders.map(player => (
            <div key={player.name} className="p-4">
              <img src={player.image} alt={player.name} className="rounded-lg shadow-lg w-full h-72 object-cover transform transition-transform hover:scale-105" />
              <h3 className="text-center text-2xl mt-4 font-medium">{player.name} - #{player.number}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mb-16">
        <h2 className="text-light_blue text-4xl mb-8 font-bold">Attackers</h2>
        <Slider {...getCarouselSettings()}>
          {attackers.map(player => (
            <div key={player.name} className="p-4">
              <img src={player.image} alt={player.name} className="rounded-lg shadow-lg w-full h-72 object-cover transform transition-transform hover:scale-105" />
              <h3 className="text-center text-2xl mt-4 font-medium">{player.name} - #{player.number}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Players;
