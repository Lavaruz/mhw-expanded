const router = require('express').Router();
const Monsters = require('../controller/monstersController');

router.get('/', Monsters.fetchMonsters);

module.exports = router;
