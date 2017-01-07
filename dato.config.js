module.exports = (dato, root) => {
  root.createDataFile('site.yaml', 'yaml', dato.site.toMap());

  root.directory('data/products', dir => {
    dato.collections.forEach((collection, index) => {
      dir.createDataFile(`${collection.slug}.yaml`, 'yaml', {
        active: collection.activeProduct,
        weight: collection.weight,
        pdateadded: collection.date,
        title: collection.productName,
        id: collection.productId,
        brand_id: collection.brands.brandId,
        price: collection.price,
        description: collection.description,
        prod_weight: collection.productWeight,
        url: "/",
        items: collection.items.map(article => {
          return {
            name: article.itemName,
            style: article.itemStyle,
            style_opts: article.optionStyle.map(item => {
              return {
                label: item.colorKey,
                colors: item.color.map(color => {
                  return {
                    name: color.colorName,
                    cid: color.colorCid,
                    images: color.colorImages.map(image => {
                      return {
                        image_name: image.imageName,
                        img: image.image.url({w: 300, fit: 'crop', auto: 'enhance, compress'})
                      }
                    }),
                    sizes: color.colorSizes.map(size =>
                      size.name
                    )
                  }
                })
              }
            })
          }
        })
      });
    });
  });
};