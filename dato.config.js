module.exports = (dato, root) => {
  root.createDataFile('site.toml', 'toml', dato.site.toMap());

  root.directory('data/products', dir => {
    dato.products.forEach((product, index) => {
      dir.createDataFile(`${product.slug}.toml`, 'toml', {
        id: product.productId,
        active: product.activeProduct,
        brand_id: product.brands.brandId,
        description: product.description,
        pdateadded: product.createdAt,
        price: product.price,
        prod_weight: product.productWeight,
        title: product.productName,
        weight: product.weight,
        product_size: product.productSizes.map(item =>
          item.name
        ),
        color: { 
          logo: { 
            name: product.brandColors.map(item =>
              item.brandColorName
            ), 
            cid: product.brandColors.map(item =>
              item.brandColorCid
            ),
            images: product.brandColors.map(item =>
              item.brandColorImage
            ) 
          },
          product: { 
            name: product.productColors.map(item =>
              item.productColorName
            ), 
            cid: product.productColors.map(item =>
              item.productColorCid
            ),
            images: product.productColors.map(item =>
              item.productColorImage
            ) 
          } 
        }
      });
    });
  });
};