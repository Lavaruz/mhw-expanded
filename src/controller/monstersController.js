const axios = require('axios');

let img_src =
  'https://raw.githubusercontent.com/Lavaruz/mhw-expanded/master/public/img/ancient%20leshen.webp';

async function fetchMonsters(req, res) {
  const monsters = await axios
    .get('https://mhw-db.com/monsters', {
      params: {
        p: JSON.stringify({
          id: true,
          name: true,
        }),
      },
    })
    .then(async (response) => {
      return response.data;
    });
  monsters.map((monster) => {
    let name = monster.name.toLowerCase();
    monster = Object.assign(monster, {
      img: `https://raw.githubusercontent.com/Lavaruz/mhw-expanded/master/public/img/${name}.webp`,
    });
  });
  res.send(monsters);
}

module.exports = {
  fetchMonsters,
};
