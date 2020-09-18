const validateName = function (name) {
  if (!name) throw new TypeError('Name does not exist.');
};

const create = function (name) {
  return {
    id: cuid(),
    name: name,
    checked: false
  };
};

export default {
  validateName,
  create
};