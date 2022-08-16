// Champ names
var arrChapms =
  "Aatrox Ahri Akali Alistar Amumu Anivia Annie Ashe Azir Bard Blitzcrank Brand Braum Caitlyn Cassiopeia ChoGath Corki Darius Diana DrMundo Draven Ekko Elise Evelynn Ezreal Fiddlesticks Fiora Fizz Galio Gangplank Garen Gnar Gragas Graves Hecarim Heimerdinger Irelia Janna JarvanIV Jax Jayce Jinx Kalista Karma Karthus Kassadin Katarina Kayle Kennen KhaZix Kindred KogMaw LeBlanc Lee Sin Leona Lissandra Lucian Lulu Lux Malphite Malzahar Maokai MasterYi Miss Fortune Mordekaiser Morgana Nami Nasus Nautilus Nidalee Nocturne Nunu Olaf Orianna Pantheon Poppy Quinn Rammus RekSai Renekton Rengar Riven Rumble Ryze Sejuani Shaco Shen Shyvana Singed Sion Sivir Skarner Sona Soraka Swain Syndra TahmKench Talon Taric Teemo Thresh Tristana Trundle Tryndamere Twisted_Fate Twitch Udyr Urgot Varus Vayne Veigar VelKoz Vi Viktor Vladimir Volibear Warwick Wukong Xerath XinZhao Yasuo Yorick Zac Zed Ziggs Zilean Zyra";

var arr =
  arrChapms.split(" ")[
    Math.floor(Math.random() * Math.floor(arrChapms.split(" ").length))
  ];

//start scripts
var text = document.querySelector(".ur_random");
text.innerHTML = `Your random Champ is &nbsp; <span>${arr}</span>`;
console.log(text);
console.log(button);
