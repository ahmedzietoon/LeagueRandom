document.getElementById("randomChamp").onclick = function randomChamp() {
  let arrChapms =
    "Aatrox Ahri Akali Alistar Amumu Anivia Annie Ashe Azir Bard Blitzcrank Brand Braum Caitlyn Cassiopeia ChoGath Corki Darius Diana DrMundo Draven Ekko Elise Evelynn Ezreal Fiddlesticks Fiora Fizz Galio Gangplank Garen Gnar Gragas Graves Hecarim Heimerdinger Irelia Janna JarvanIV Jax Jayce Jinx Kalista Karma Karthus Kassadin Katarina Kayle Kennen KhaZix Kindred KogMaw LeBlanc Lee Sin Leona Lissandra Lucian Lulu Lux Malphite Malzahar Maokai MasterYi Miss Fortune Mordekaiser Morgana Nami Nasus Nautilus Nidalee Nocturne Nunu Olaf Orianna Pantheon Poppy Quinn Rammus RekSai Renekton Rengar Riven Rumble Ryze Sejuani Shaco Shen Shyvana Singed Sion Sivir Skarner Sona Soraka Swain Syndra TahmKench Talon Taric Teemo Thresh Tristana Trundle Tryndamere Twisted_Fate Twitch Udyr Urgot Varus Vayne Veigar VelKoz Vi Viktor Vladimir Volibear Warwick Wukong Xerath XinZhao Yasuo Yorick Zac Zed Ziggs Zilean Zyra";

  let arr = arrChapms.split(" ");
  document.write(
    `<body class="container" style=" background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); " >
    <h2 class="z-button" style="text-align:centre;padding-left: 35%;padding-top: 18%;color:#25083b;font-size:3em;">Your random Champ is ${
      arr[Math.floor(Math.random() * Math.floor(arr.length))]
    }</h2>
    </body>`
  );
};
