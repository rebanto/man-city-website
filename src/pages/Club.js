import React from 'react';

function Club() {
  const honors = [
    {
      competition: "Premier League",
      trophiesWon: 9,
      years: "2012, 2014, 2018, 2019, 2020, 2021, 2022, 2023",
      trophyImage: "https://www.onlinebookiesoffers.co.uk/wp-content/uploads/2023/04/4-removebg-preview-7.png"
    },
    {
      competition: "Champions League",
      trophiesWon: 1,
      years: "2023",
      trophyImage: "https://www.pngarts.com/files/5/UEFA-Champions-League-Trophy-PNG-Image.png"
    },
    {
      competition: "FA Cup",
      trophiesWon: 7,
      years: "1904, 1934, 1956, 1969, 2011, 2019, 2023",
      trophyImage: "https://th.bing.com/th/id/R.45dc7e0105d9d87aab5cf87ccd9bf473?rik=gF2xWrT5eVBp9A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-t6Pjkrz2V9A%2fUQiq17d4qGI%2fAAAAAAAACN0%2fiJrDCMvOiVw%2fs1600%2fTrofeo%2bFA%2bCUP%2bIF.png&ehk=ckPVrwukYJtelQ7MvndfUCbRzpPUJEj%2fzRo%2fm86FFRg%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      competition: "EFL Cup",
      trophiesWon: 8,
      years: "1970, 1976, 2014, 2016, 2018, 2019, 2020, 2021",
      trophyImage: "https://www.thesportsdb.com/images/media/league/trophy/zsun1e1565450186.png"
    },
    {
      competition: "Community Shield",
      trophiesWon: 6,
      years: "1937, 1968, 1972, 2012, 2018, 2019",
      trophyImage: "https://i.pinimg.com/originals/37/6a/e9/376ae9123d867b2b77a2436d1e83c1a4.png"
    },
    {
      competition: "UEFA Super Cup",
      trophiesWon: 1,
      years: "2023",
      trophyImage: "https://i1.wp.com/i.pinimg.com/originals/f5/0b/c2/f50bc229414768bd10c027dab4a9a5a0.png"
    },
  ];

  const statistics = [
    { category: "Top Scorer", person: "Sergio Agüero - 260 goals" },
    { category: "Top Goalscorer by Season", person: "Erling Haaland - 36 goals" },
    { category: "Most Appearances", person: "Joe Corrigan - 526 appearances" },
    { category: "Most Assists", person: "Kevin De Bruyne - 109 assists" },
    { category: "Most Clean Sheets", person: "Joe Hart - 137 clean sheets" },
    { category: "Most Expensive Signing", person: "Jack Grealish - £100m" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="p-8 pt-32">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-dark_blue rounded-2xl text-6xl mb-8 font-extrabold tracking-wide leading-tight shadow-lg p-3 text-center">
            Club Honors
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {honors.map((honor, index) => (
              <div key={index} className="bg-light_blue bg-opacity-10 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-dark_blue text-4xl font-bold">{honor.competition}</h2>
                <img 
                  src={honor.trophyImage} 
                  alt={`${honor.competition} Trophy`} 
                  className="my-4 mx-auto h-40 w-auto object-contain"
                />
                <p className="text-3xl mt-2 font-semibold">{honor.trophiesWon} Titles</p>
                <p className="text-lg mt-2">{honor.years}</p>
              </div>
            ))}
          </div>

          <h2 className="text-dark_blue text-5xl mb-8 font-extrabold tracking-wide leading-tight p-3 text-center">
            Club Statistics
          </h2>

          <div className="space-y-4 pb-8">
            {statistics.map((stat, index) => (
              <div key={index} className="flex justify-between items-center border-b-2 border-light_blue pb-5">
                <p className="text-xl font-semibold">{stat.category}</p>
                <p className="text-xl text-dark_blue">{stat.person}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Club;
