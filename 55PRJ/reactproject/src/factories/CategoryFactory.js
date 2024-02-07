// AbstractFactory.js
class AbstractFactory {
  async create(name) {}
}

module.exports = AbstractFactory;

// CategoryFactory.js
const CategoryModel = require('../models/CategoryModel');

class CategoryFactory extends AbstractFactory {
  async create(name) {
    console.log('Creating category with name ' + name);
    const newCategory = new CategoryModel({ name });
    await newCategory.save();
    return newCategory;
  }
}

module.exports = CategoryFactory;
