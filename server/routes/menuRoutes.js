const router = require('express').Router();
const {
  getMenu,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/menuController');

// @desc short hand for all four routes
// router.get('/', getMenu);
// router.post('/', createItem);
// router.put('/:id', updateItem);
// router.delete('/:id', deleteItem);
router.route('/').get(getMenu).post(createItem);
router.route('/:id').delete(deleteItem).put(updateItem);

module.exports = router;
