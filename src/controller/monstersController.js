const axios = require('axios');

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

  res.json(monsters);
}

module.exports = {
  fetchMonsters,
};
