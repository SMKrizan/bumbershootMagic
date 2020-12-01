// import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

// Categories have many Products
Category.hasMany(Product, {
  foreign_key: 'id'
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreign_key: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagged_product',
  foreign_key: 'product_id'
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tag',
  foreign_key: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
