module.exports = (dato, root) => {
  root.createDataFile('site.yaml', 'yaml', dato.site.toMap());

  root.directory('data/products', dir => {
    dato.products.forEach((product, index) => {
      dir.createDataFile(`${product.slug}.yaml`, 'yaml', {
        id: product.productId,
        active: product.activeProduct,
        brand_id: product.brands.brandId,
        description: product.description,
        pdateadded: product.createdAt,
        price: product.price,
        prod_weight: product.productWeight,
        title: product.productName,
        weight: product.weight,
        url: "/",
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
              item.brandColorImage.url({w: 300, fit: 'crop', auto: 'enhance, compress'})
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
              item.productColorImage.url({w: 300, fit: 'crop', auto: 'enhance, compress'})
            ) 
          } 
        }
      });
    });
  });
};