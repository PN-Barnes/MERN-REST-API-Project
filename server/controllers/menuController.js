// @desc get all menu items
// @route GET /api/menu
// @access Public

const getMenu = async (req, res) => {
  res.status(200).json({ Burrito: '$5' });
};

// @desc Post a new menu item
// @route POST /api/menu/
// @access Private
const createItem = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text message');
  }
  res.status(200).json({ Burrito: 'Add Item' });
};

// @desc Update a current menu item
// @route PUT /api/menu/:id
// @access Private
const updateItem = async (req, res) => {
  res.status(200).json({ message: `update Item ${req.params.id}` });
};

// @desc Delete a current menu item
// @route DELETE /api/menu/:id
// @access Private
const deleteItem = async (req, res) => {
  res.status(200).json({ message: `Item ${req.params.id} has been deleted` });
};
module.exports = {
  getMenu,
  createItem,
  updateItem,
  deleteItem,
};
