const { MenuItem } = require('../models');

// @desc get all menu items
// @route GET /api/menu
// @access Public

const getMenu = async (req, res) => {
  const menuItems = await MenuItem.find({});

  res.status(200).json(menuItems);
};

// @desc Post a new menu item
// @route POST /api/menu/
// @access Private
const createItem = async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a text message');
  }

  const newMenuItem = MenuItem.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    ingredients: req.body.ingredients,
  });
  res.status(200).json('New Menu Item Added');
};

// @desc Update a current menu item
// @route PUT /api/menu/:id
// @access Private
const updateItem = async (req, res) => {
  const item = await MenuItem.findById(req.params.id);

  if (!item) {
    res.status(400);
    throw new Error('Menu item not found!');
  }

  const updatedMenuItem = await MenuItem.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedMenuItem);
};

// @desc Delete a current menu item
// @route DELETE /api/menu/:id
// @access Private
const deleteItem = async (req, res) => {
  const item = await MenuItem.findById(req.params.id);

  if (!item) {
    res.status(400);
    throw new Error('Menu item not found!');
  }
  await item.remove();

  res.status(200).json({ _id: req.params.id });
};
module.exports = {
  getMenu,
  createItem,
  updateItem,
  deleteItem,
};
