const CategoryFactory = require("../factories/CategoryFactory");
const CategoryModel = require("../models/CategoryModel");

class CategoryController {
    constructor() {
      this.categoryFactory = new CategoryFactory(); // Create an instance of the factory
    }
  
    async createCategory(req, res) {
      try {
        const categoryName = await this.categoryFactory.create(req.body.name); // Use a fábrica para criar uma nova categoria
        res.status(201).json(categoryName);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar categoria', details: error.message });
        console.error(error);
      }
    }
  
    async getCategory(req, res) {
      try {
        const categoryId = req.params.categoryId;
        const category = await CategoryModel.findById(categoryId);
        res.json(category);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao obter categoria', details: error.message });
      }
    }
  
    async listCategory(req, res) {
      try {
        const categories = await CategoryModel.find();
        res.json(categories);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}

// Export the class instance instead of the class itself
module.exports = new CategoryController();
