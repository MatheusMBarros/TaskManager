const CategoryModel = require('../models/CategoryModel');


class CategoryFactory {
 async create(name) {
    console.log('Creating category with name ' + name); 
    const newCategory = new CategoryModel({ name });
    await newCategory.save();
    return { "nome da categoria salva": name };
  }
}

module.exports = new CategoryFactory();
