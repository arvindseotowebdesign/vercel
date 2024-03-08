import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "Title is required"],
        },
        description: {
            type: String,
            require: [true, "Description is required"],
        },
        pImage: {
            type: String,
            require: [true, "Image is required"],
        },
        images: {
            type: Array,
        },
        slug: {
            type: String,
            unique: true
        },
        features: {
            type: Array,
        },
        metaDescription: {
            type: String,
        },
        metaTitle: {
            type: String,
        },
        metaKeywords: {
            type: String,
        },
        regularPrice: {
            type: Number,
        },
        salePrice: {
            type: Number,
        },

        status: {
            type: String,
            default: 'true',
        },
        stock: {
            type: Number,
        },
        variations: {
            type: Object,
        },
        specifications: {
            type: Object,
        },

        Category: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }], // Define Category as an array of ObjectIds

        weight: {
            type: Number,
        },
        gst: {
            type: Number,
        },
        length: {
            type: String,
        },
        width: {
            type: String,
        },
        height: {
            type: String,
        },

        tag: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "tag", // Reference to the same "Category" model
            // type: Array,
        }],

    },
    { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

export default productModel;