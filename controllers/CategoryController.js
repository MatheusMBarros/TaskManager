const CategoryFactory = require("../factories/CategoryFactory");

class CategoryController {
    async createCategory(req, res) {
        try {
            var categoryName = await CategoryFactory.create(req.body.name)
            res.status(201).json(categoryName);
        } catch (error) {
            res.status(500)
            console.error(error);
        }
    }

    async getCategory(req, res) {
        try {
            const categoryId = req.params.categoryId;
            const category = await CategoryModel.findById(categoryId);
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter categoria' });
        }
    }

    async listCategory(req, res) {
        try {
            const categories = await CategoryModel.find();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar categorias' });
        }
    }
}

module.exports = new CategoryController();
