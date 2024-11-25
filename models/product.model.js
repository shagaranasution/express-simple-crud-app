import { Schema, model } from 'mongoose';

const ProductScheme = Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the product name.'],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0.0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// With 'Product' defined as argument here will create document with name "products" in mongodb
const Product = model('Product', ProductScheme);

export default Product;
