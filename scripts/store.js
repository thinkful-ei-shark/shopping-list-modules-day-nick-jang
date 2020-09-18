import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = function (id) {
  return items.find(it => it.id === id);
};

const addItem = function (name) {
  try {
    item.validateName(name);
    let it = item.create(name);

    items.push(it);
  } catch (e) {
    console.log(`Cannot add item: ${e.message}`);
  }
};

const findAndToggleChecked = function (id) {
  let it = this.findById(id);
  it.checked = !it.checked;
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const findAndUpdateName = function (id, newName) {
  try {
    item.validateName(newName);
    let it = findById(id);
    it.name = newName;
  } catch (e) {
    console.log(`Cannot update name: ${e.message}`);
  }
};

const findAndDelete = function (id) {
  this.items = this.items.filter(it => it.id !== id);
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};