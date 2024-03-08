import mongoose from "mongoose";
import blogModel from "../models/blogModel.js";
import userModel from "../models/userModel.js";
import chatModel from "../models/chatModel.js";
import categoryModel from "../models/categoryModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import attributeModel from "../models/attributeModel.js";
import productModel from "../models/productModel.js";
import orderModel from "../models/orderModel.js";
import cartModel from "../models/cartModel.js";
import homeModel from "../models/homeModel.js";
import homeLayoutModel from "../models/homeLayoutModel.js";
import ratingModel from "../models/ratingModel.js";
import wishlistModel from "../models/wishlistModel.js";
import compareModel from "../models/compareModel.js";
import zonesModel from "../models/zonesModel.js";
import promoModel from "../models/promoModel.js";
import taxModel from "../models/taxModel.js";
import Razorpay from "razorpay"
import nodemailer from "nodemailer";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// export const SignupUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Validation
//     if (!username || !email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please fill all fields',
//       });
//     }

//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(401).json({
//         success: false,
//         message: 'User Already Exists',
//       });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const user = new userModel({ username, email, password: hashedPassword });
//     const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
//     user.token = token; // Update the user's token field with the generated token
//     await user.save();

//     // Generate JWT token

//     res.status(201).json({
//       success: true,
//       message: 'User created successfully',
//       user,
//       token,
//     });
//   } catch (error) {
//     console.error('Error on signup:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error on signup',
//       error: error.message,
//     });
//   }
// }



export const SignupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields',
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: 'User Already Exists',
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new userModel({ username, email, password: hashedPassword });
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    user.token = token; // Update the user's token field with the generated token
    await user.save();

    // Generate JWT token

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user,
      token,
    });
  } catch (error) {
    console.error('Error on signup:', error);
    res.status(500).json({
      success: false,
      message: 'Error on signup',
      error: error.message,
    });
  }
}



export const Userlogin = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: 'please fill all fields'
      })
    }
    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(200).send({
        success: false,
        message: 'email is not registerd',
        user,
      });
    }
    // password check

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: 'password is not incorrect',
        user
        ,
      });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    return res.status(200).send({
      success: true,
      message: 'login sucesssfully',
      user,
    })

  } catch (error) {
    return res.status(500).send
      ({
        message: `error on login ${error}`,
        sucesss: false,
        error
      })
  }
}




export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { phone, pincode, country, address, token } = req.body;
    console.log(phone, pincode, country, address, token)
    const user = await userModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true })
    return res.status(200).json({
      message: 'user Updated!',
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Error while updating user: ${error}`,
      success: false,
      error,
    });
  }
}


export const getAllBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).lean()
    if (!blogs) {
      return res.status(200).send
        ({
          message: 'NO Blogs Find',
          success: false,
        });
    }
    return res.status(200).send
      ({
        message: 'All Blogs List ',
        BlogCount: blogs.length,
        success: true,
        blogs,
      });

  } catch (error) {
    return res.status(500).send
      ({
        message: `error while getting Blogs ${error}`,
        success: false,
        error
      })
  }
}

export const createBlogController = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    //validation
    if (!title || !description || !image || !user) {
      return res.status(400).send({
        success: false,
        message: "Please Provide ALl Fields",
      });
    }
    const exisitingUser = await userModel.findById(user);
    //validaton
    if (!exisitingUser) {
      return res.status(404).send({
        success: false,
        message: "unable to find user",
      });
    }

    const newBlog = new blogModel({ title, description, image, user });
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    exisitingUser.blogs.push(newBlog);
    await exisitingUser.save({ session });
    await session.commitTransaction();
    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "Blog Created!",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Creting blog",
      error,
    });
  }
}



export const updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true })
    return res.status(200).json({
      message: 'Blog Updated!',
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Error while updating Blog: ${error}`,
      success: false,
      error,
    });
  }
}

export const getBlogIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(200).send
        ({
          message: 'Blog Not Found By Id',
          success: false,
        });
    }
    return res.status(200).json({
      message: 'fetch Single Blog!',
      success: true,
      blog,
    });

  }
  catch (error) {
    return res.status(400).json({
      message: `Error while get Blog: ${error}`,
      success: false,
      error,
    });
  }
}

export const deleteBlogController = async (req, res) => {
  try {
    const blog = await blogModel
      // .findOneAndDelete(req.params.id)
      .findByIdAndDelete(req.params.id)
      .populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    return res.status(200).send({
      success: true,
      message: "Blog Deleted!",
    });

  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Erorr WHile Deleteing BLog",
      error,
    });
  }
};
export const userBlogsController = async (req, res) => {
  try {
    const userBlog = await userModel.findById(req.params.id).populate('blogs')
    if (!userBlog) {
      return res.status(200).send
        ({
          message: 'Blog Not Found By user',
          success: false,
        });
    }
    return res.status(200).json({
      message: ' user Blog!',
      success: true,
      userBlog,
    });

  }
  catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Erorr WHile Deleteing BLog",
      error,
    });
  }

}

export const userTokenController = async (req, res) => {
  try {

    const { id } = req.params;
    const user = await userModel.findOne({ token: id })

    if (!user) {
      return res.status(200).send
        ({
          message: 'Token expire',
          success: false,
        });
    }
    return res.status(200).send
      ({
        message: 'token Found',
        success: true,
        user,
      });
  }
  catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Token Not Authorise",
      error,
    });
  }
}


export const CreateChatController = async (req, res) => {
  const { firstId, secondId } = req.body;
  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] }
    })
    if (chat) return res.status(200).json(chat);
    const newChat = new chatModel({
      members: [firstId, secondId]
    })
    const response = await newChat.save()
    res.status(200).send
      ({
        message: 'Chat Added',
        success: true,
        response,
      });

  }
  catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Chat Not Upload",
      error,
    });
  }
}


export const findUserschatController = async (req, res) => {
  const userId = req.params.id;

  try {
    const chats = await chatModel.find({
      members: { $in: [userId] }
    })
    return res.status(200).send
      ({
        message: 'Chat Added',
        success: true,
        chats,
      });

  }
  catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "User chat Not Found",
      error,
    });
  }
}



export const findchatController = async (req, res) => {
  const { firstId, secondId } = req.params;

  try {
    const chats = await chatModel.find({
      members: { $all: [firstId, secondId] }
    })
    res.status(200).send
      ({
        message: 'Chat Added',
        success: true,
        chats,
      });
  }
  catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "User chat Not Found",
      error,
    });
  }
}





export const UsergetAllCategories = async (req, res) => {

  try {
    const categories = await categoryModel.find({ status: 'true' }, '_id title');

    if (!categories) {
      return res.status(200).send
        ({
          message: 'NO Category Find',
          success: false,
        });
    }
    return res.status(200).send
      ({
        message: 'All Category List ',
        catCount: categories.length,
        success: true,
        categories,
      });

  } catch (error) {
    return res.status(500).send
      ({
        message: `error while All Categories ${error}`,
        success: false,
        error
      })
  }


}


export const UsergetAllProducts = async (req, res) => {

  try {
    const products = await productModel.find({ status: 'true' }, '_id title');

    if (!products) {
      return res.status(200).send
        ({
          message: 'NO products Find',
          success: false,
        });
    }
    return res.status(200).send
      ({
        message: 'All products List ',
        proCount: products.length,
        success: true,
        products,
      });

  } catch (error) {
    return res.status(500).send
      ({
        message: `error while All products ${error}`,
        success: false,
        error
      })
  }


}


export const UsergetAllHomeProducts = async (req, res) => {

  try {
    const products = await productModel.find({}, '_id title pImage regularPrice salePrice');

    if (!products) {
      return res.status(200).send
        ({
          message: 'NO products Find',
          success: false,
        });
    }
    return res.status(200).send
      ({
        message: 'All products List ',
        proCount: products.length,
        success: true,
        products,
      });

  } catch (error) {
    return res.status(500).send
      ({
        message: `error while All products ${error}`,
        success: false,
        error
      })
  }


}



export const getAllAttributeUser = async (req, res) => {
  try {
    const Attribute = await attributeModel.find({})
    if (!Attribute) {
      return res.status(200).send
        ({
          message: 'NO Attribute Found',
          success: false,
        });
    }
    return res.status(200).send
      ({
        message: 'All Attribute List ',
        AttributeCount: Attribute.length,
        success: true,
        Attribute,
      });

  } catch (error) {
    return res.status(500).send
      ({
        message: `error while getting attribute ${error}`,
        success: false,
        error
      })
  }
}




export const getProductIdUser = async (req, res) => {
  try {
    const { id } = req.params;
    const Product = await productModel.findById(id);
    if (!Product) {
      return res.status(200).send
        ({
          message: 'product Not Found By Id',
          success: false,
        });
    }
    return res.status(200).json({
      message: 'fetch Single product!',
      success: true,
      Product,
    });

  }
  catch (error) {
    return res.status(400).json({
      message: `Error while get product: ${error}`,
      success: false,
      error,
    });
  }
}



// get home data 

export const getHomeData = async (req, res) => {
  try {
    const homeData = await homeModel.findOne();

    if (!homeData) {
      return res.status(200).send({
        message: "Home Settings Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Found home settings!",
      success: true,
      homeData,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Error while getting home settings: ${error}`,
      success: false,
      error,
    });
  }
};

// get home layout data 

export const getHomeLayoutData = async (req, res) => {
  try {
    const homeLayout = await homeLayoutModel.findOne();

    if (!homeLayout) {
      return res.status(200).send({
        message: "Home Layout Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Found home Layout Data!",
      success: true,
      homeLayout,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Error while getting home Layout: ${error}`,
      success: false,
      error,
    });
  }
};




export const createOrderController = async (req, res) => {


  try {
    const { items, status, mode, details, totalAmount, userId } = req.body;
    //validation
    if (!status || !mode || !details || !totalAmount) {
      return res.status(400).send({
        success: false,
        message: "Please Provide ALl Fields",
      });
    }
    const exisitingUser = await userModel.findById(userId);
    //validaton
    if (!exisitingUser) {
      return res.status(404).send({
        success: false,
        message: "unable to find user",
      });
    }

    const newOrder = new orderModel({ items, status, mode, details, totalAmount });
    const session = await mongoose.startSession();
    session.startTransaction();
    await newOrder.save({ session });
    exisitingUser.orders.push(newOrder);
    await exisitingUser.save({ session });
    await session.commitTransaction();
    await newOrder.save();
    return res.status(201).send({
      success: true,
      message: "Order Sucessfully!",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Creting Order",
      error,
    });
  }
}


export const updateUserAndCreateOrderController = async (req, res) => {
  let session;
  let transactionInProgress = false;
  const { id } = req.params;
  const { username, email, address, pincode, details, discount, items, mode, payment, primary, shipping, status, totalAmount, userId } = req.body;

  const options = {
    amount: totalAmount * 100, // amount in smallest currency unit (e.g., paisa for INR)
    currency: 'INR',
    receipt: 'order_rcptid_' + Math.floor(Math.random() * 1000)
  };

  try {
    session = await mongoose.startSession();
    session.startTransaction();
    transactionInProgress = true;


    // Update user
    const user = await userModel.findByIdAndUpdate(
      id,
      { username, email, pincode, address },
      { new: true }
    );



    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // Create order for the updated user
    if (!status || !mode || !details || !totalAmount || !userId || !payment
    ) {
      console.log('status:', status);
      console.log('mode:', mode);
      console.log('details:', details);
      console.log('totalAmount:', totalAmount);
      console.log('userId:', userId);
      console.log('payment:', payment);
      console.log('shipping:', shipping);

      return res.status(400).json({
        success: false,
        message: 'Please provide all fields for the order',
      });

    }

    const order = await razorpay.orders.create(options);
    const apiKey = process.env.RAZORPAY_API_KEY; // Get Razorpay API key

    const newOrder = new orderModel({ details, discount, items, mode, payment: 0, primary, shipping, status, totalAmount, userId, orderId: order.id });

    await newOrder.save({ session });
    user.orders.push(newOrder);
    await user.save({ session });

    // Update stock quantity for each product in the order
    for (const item of items) {
      const product = await productModel.findById(item.id);
      if (product) {
        product.stock -= item.quantity; // Decrement stock by the quantity ordered
        await product.save({ session });
      }
    }


    await session.commitTransaction();
    transactionInProgress = false;

    return res.status(201).json({
      success: true,
      message: 'Order created successfully',
      newOrder,
      order,
      apiKey,
      user,
      Amount: totalAmount
    });
  } catch (error) {
    if (transactionInProgress) {
      try {
        await session.abortTransaction();
      } catch (abortError) {
        console.error('Error aborting transaction:', abortError);
      }
    }
    console.error('Error:', error);
    return res.status(400).json({
      success: false,
      message: 'Error while creating order',
      error: error.message,
    });
  } finally {
    if (session) {
      session.endSession();
    }
  }
};

export const razorpayCallback = async (req, res) => {
  const { payment_id, order_id, status } = req.body;

  try {
    if (status === 'paid') {
      // Payment successful, update order status to paid
      await orderModel.findOneAndUpdate({ orderId: order_id }, { payment: 1 });
    } else if (status === 'failed') {
      // Payment failed, update order status to unpaid
      await orderModel.findOneAndUpdate({ orderId: order_id }, { payment: 2 });
    }
    res.status(200).send('Order status updated successfully.');
  } catch (error) {
    res.status(500).send('Error updating order status: ' + error.message);
  }
};


//category fillter

export const GetAllCategoriesByParentIdController = async (req, res) => {
  try {
    const { parentId } = req.params;
    const { filter, price, page = 1, perPage = 2 } = req.query; // Extract filter, price, page, and perPage query parameters

    // Check if parentId is undefined or null
    if (!parentId) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid parent ID.",
      });
    }

    // Call the recursive function to get all categories
    const categories = await getAllCategoriesByParentId(parentId);
    const MainCat = await categoryModel
      .findById(parentId)
      .select("title")
      .lean();

    const filters = { Category: parentId }; // Initialize filters with parent category filter

    if (filter) {
      // Parse the filter parameter
      const filterParams = JSON.parse(filter);

      // Iterate through each parameter in the filter
      Object.keys(filterParams).forEach((param) => {
        // Split parameter values by comma if present
        const paramValues = filterParams[param].split(",");

        // Check if there are multiple values for the parameter
        if (paramValues.length > 1) {
          filters[`variations.${param}.${param}`] = { $all: paramValues };
        } else {
          // If only one value, handle it as a single filter
          filters[`variations.${param}.${param}`] = { $in: paramValues };
        }
      });
    }

    // Check if price parameter is provided and not blank
    if (price && price.trim() !== "") {
      const priceRanges = price.split(","); // Split multiple price ranges by comma
      const priceFilters = priceRanges.map((range) => {
        const [minPrice, maxPrice] = range.split("-"); // Split each range into min and max prices
        return { salePrice: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) } };
      });

      // Add price filters to the existing filters
      filters.$or = priceFilters;
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * perPage;

    // Fetch products based on filters with pagination
    const products = await productModel
      .find(filters)
      .select("_id title regularPrice salePrice pImage variations")
      .skip(skip)
      .limit(perPage)
      .lean();

    const Procat = { Category: parentId }; // Initialize filters with parent category filter
    const productsFilter = await productModel.find(Procat).select("_id regularPrice salePrice").lean();

    const proLength = products.length;
    return res.status(200).json({
      success: true,
      categories,
      MainCat,
      products,
      proLength,
      productsFilter,
    });
  } catch (error) {
    console.error("Error in GetAllCategoriesByParentIdController:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const getAllCategoriesByParentId = async (parentId) => {
  try {
    const categories = await categoryModel.find({ parent: parentId }).lean();

    if (!categories || categories.length === 0) {
      return [];
    }

    const result = [];

    for (const category of categories) {
      const { _id, title, image /* other fields */ } = category;

      const categoryData = {
        _id,
        title,
        image,
        subcategories: await getAllCategoriesByParentId(_id), // Recursive call
      };

      result.push(categoryData);
    }

    return result;
  } catch (error) {
    console.error("Error while fetching categories:", error);
    throw error;
  }
};

export const userOrdersController = async (req, res) => {
  try {
    const userOrder = await userModel.findById(req.params.id).populate({
      path: 'orders',
      select: '_id createdAt totalAmount status mode', // Select only _id and title fields
      options: {
        sort: { createdAt: -1 } // Sort by createdAt field in descending order
      }
    });


    if (!userOrder) {
      return res.status(200).send
        ({
          message: 'Order Not Found By user',
          success: false,
        });
    }
    return res.status(200).json({
      message: ' user Orders!',
      success: true,
      userOrder,
    });

  }
  catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Getting Orders",
      error,
    });
  }

}


export const userOrdersViewController = async (req, res) => {
  try {
    const { userId, orderId } = req.params;


    // Find the user by ID and populate their orders
    const userOrder = await userModel.findById(userId)
      .populate({
        path: 'orders',
        match: { _id: orderId } // Match the order ID
      });

    // If user or order not found, return appropriate response
    if (!userOrder || !userOrder.orders.length) {
      return res.status(404).json({
        message: 'Order Not Found By user or Order ID',
        success: false,
      });
    }

    // If user order found, return success response with the single order
    return res.status(200).json({
      message: 'Single Order Found By user ID and Order ID',
      success: true,
      userOrder: userOrder.orders[0], // Assuming there's only one order per user
    });
  } catch (error) {
    // If any error occurs during the process, log it and return error response
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Error while getting order",
      error,
    });
  }
}





export const AddCart = async (req, res) => {
  try {
    const { items, isEmpty, totalItems, totalUniqueItems, cartTotal } = req.body;

    const Cart = new cartModel({ items, isEmpty, totalItems, totalUniqueItems, cartTotal });
    await Cart.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      Cart
    });
  } catch (error) {
    console.error('Error on signup:', error);
    res.status(500).json({
      success: false,
      message: 'Error on signup',
      error: error.message,
    });
  }
}

export const UpdateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { items, isEmpty, totalItems, totalUniqueItems, cartTotal } = req.body;
    const Cart = await cartModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true })
    return res.status(200).json({
      message: 'Cart Updated!',
      success: true,
      Cart,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Error while updating cart: ${error}`,
      success: false,
      error,
    });
  }
}


export const getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const Cart = await cartModel.findById(id);
    if (!Cart) {
      return res.status(200).send
        ({
          message: 'Cart Not Found',
          success: false,
        });
    }
    return res.status(200).json({
      message: 'Cart Found successfully!',
      success: true,
      Cart,
    });

  }
  catch (error) {
    return res.status(400).json({
      message: `Error while get cart: ${error}`,
      success: false,
      error,
    });
  }
}


export const AddRating = async (req, res) => {
  try {
    const { userId, rating, comment, productId } = req.body;

    // Validation
    if (!userId || !rating || !comment || !productId) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields',
      });
    }
    else {
      // Create a new user rating instance
      const newUserRating = new ratingModel({
        userId,
        rating,
        comment,
        productId

      });

      // Save the user rating to the database
      await newUserRating.save();

      return res.status(200).json({
        message: 'User rating created successfully!',
        success: true,
        newUserRating,
      });


    }

  } catch (error) {
    return res.status(400).json({
      message: `Error while add rating: ${error}`,
      success: false,
      error,
    });
  }

}


export const ViewProductRating = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find all ratings for a specific product
    const productRatings = await ratingModel.find({ productId, status: 1 });


    // Fetch user details for each rating
    const ratingsWithUserDetails = await Promise.all(productRatings.map(async (rating) => {
      const user = await userModel.findById(rating.userId);
      return {
        rating: rating.rating,
        comment: rating.comment,
        username: user ? user.username : 'Unknown',
        createdAt: rating.createdAt,
        userId: user ? user._id : 'Unknown',
      };
    }));

    return res.status(200).json({
      success: true,
      message: 'Getting product ratings successfully!',
      productRatings: ratingsWithUserDetails,
    });
  } catch (error) {
    console.error('Error getting product ratings:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};




export const ViewCategoryRating = async (req, res) => {

  try {
    // Query the database for all ratings where status is 1
    const ratings = await ratingModel.find({ status: 1 });

    res.status(200).json({ success: true, ratings });
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }

}

// add Wishlist by user
export const AddWishListByUser = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Validation
    if (!userId || !productId) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both userId & productId',
      });
    }

    // Check if the wishlist item already exists for the user
    const existingWishlistItem = await wishlistModel.findOne({ userId, productId });

    if (existingWishlistItem) {
      return res.status(400).json({
        success: false,
        message: 'Wishlist item already exists',
      });
    }

    // Create a new wishlist item
    const newWishlistItem = new wishlistModel({
      userId,
      productId
    });

    // Save the wishlist item to the database
    await newWishlistItem.save();

    return res.status(200).json({
      message: 'Wishlist item created successfully!',
      success: true,
      newWishlistItem,
    });

  } catch (error) {
    return res.status(400).json({
      message: `Error while adding wishlist item: ${error}`,
      success: false,
      error,
    });
  }
};


export const ViewWishListByUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find wishlist items for the specified user ID
    const wishlistItems = await wishlistModel.find({ userId });

    // Extract product IDs from wishlist items
    const productIds = wishlistItems.map(item => item.productId);

    // Fetch product details for each product ID
    const productDetails = await productModel.find({ _id: { $in: productIds } }).select('_id pImage regularPrice salePrice title');

    // Combine wishlist items with product details
    const wishlistWithProductDetails = wishlistItems.map(item => {
      const productDetail = productDetails.find(product => product._id.toString() === item.productId.toString());
      return {
        _id: item._id,
        userId: item.userId,
        productId: item.productId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        productDetail: productDetail // Add product details to wishlist item
      };
    });

    return res.status(200).json({
      success: true,
      message: 'Getting wishlist successfully!',
      wishlist: wishlistWithProductDetails
    });
  } catch (error) {
    console.error('Error getting wishlist:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};



export const deleteWishListByUser = async (req, res) => {
  try {
    await wishlistModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      success: true,
      message: "Wishlist Deleted!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Erorr WHile Deleteing Wishlist",
      error,
    });
  }
};



export const AddCompareByUser = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Validation
    if (!userId || !productId) {
      return res.status(400).json({
        success: false,
        message: 'Please fill userId & productId',
      });
    }
    else {

      // Check if the wishlist item already exists for the user
      const existingWishlistItem = await compareModel.findOne({ userId, productId });

      if (existingWishlistItem) {
        return res.status(400).json({
          success: false,
          message: 'Comparsion item already exists',
        });
      }

      // Create a new user rating instance
      const newUserCompare = new compareModel({
        userId,
        productId

      });



      // Save the user rating to the database
      await newUserCompare.save();

      return res.status(200).json({
        message: 'User comparsion created successfully!',
        success: true,
        newUserCompare,
      });


    }

  } catch (error) {
    return res.status(400).json({
      message: `Error while add comparsion: ${error}`,
      success: false,
      error,
    });
  }

};

export const ViewCompareByUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find wishlist items for the specified user ID
    const CompareItems = await compareModel.find({ userId });

    // Extract product IDs from wishlist items
    const productIds = CompareItems.map(item => item.productId);

    // Fetch product details for each product ID
    const productDetails = await productModel.find({ _id: { $in: productIds } }).select('_id pImage regularPrice salePrice title specifications');

    // Combine wishlist items with product details
    const CompareWithProductDetails = CompareItems.map(item => {
      const productDetail = productDetails.find(product => product._id.toString() === item.productId.toString());
      return {
        _id: item._id,
        userId: item.userId,
        productId: item.productId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        productDetail: productDetail // Add product details to wishlist item
      };
    });

    return res.status(200).json({
      success: true,
      message: 'Getting Compare successfully!',
      comparsion: CompareWithProductDetails
    });
  } catch (error) {
    console.error('Error getting Compare:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


export const deleteCompareByUser = async (req, res) => {
  try {
    await compareModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      success: true,
      message: "Compare Deleted!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Erorr WHile Deleteing Compare",
      error,
    });
  }
};



export const ViewOrderByUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find userItems items for the specified user ID
    const userItems = await userModel.find({ userId });

    // Extract product IDs from userItems items
    const productIds = userItems.map(item => item.productId);

    // Fetch product details for each product ID
    const productDetails = await orderModel.find({ _id: { $in: productIds } }).select('_id username email phone pincode country address status');

    // Combine userItems items with product details
    const UsertWithProductDetails = userItems.map(item => {
      const productDetail = productDetails.find(product => product._id.toString() === item.productId.toString());
      return {
        _id: item._id,
        userId: item.userId,
        productId: item.productId,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        productDetail: productDetail // Add product details to wishlist item
      };
    });

    return res.status(200).json({
      success: true,
      message: 'Getting wishlist successfully!',
      wishlist: wishlistWithProductDetails
    });
  } catch (error) {
    console.error('Error getting wishlist:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// for zones 

export const ViewAllZones = async (req, res) => {

  try {
    // Query the database for all ratings where status is 1
    const Zones = await zonesModel.find({ status: 'true' });

    res.status(200).json({ success: true, Zones });
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }

}


export const ViewAllUserTaxes = async (req, res) => {

  try {
    // Query the database for all ratings where status is 1
    const taxes = await taxModel.find({ status: 'true' });

    res.status(200).json({ success: true, taxes });
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }

}

export const getTaxIdUser = async (req, res) => {
  try {
    const { id } = req.params;
    const taxes = await taxModel.find({ zoneId: id });
    if (!taxes || taxes.length === 0) {
      return res.status(200).send({
        message: "No taxes found for the specified zoneId",
        success: false,
      });
    }
    // Get the last element from the taxes array
    const lastTax = taxes[taxes.length - 1];
    return res.status(200).json({
      message: "Fetched last tax by zoneId successfully",
      success: true,
      tax: lastTax,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Error while getting taxes: ${error}`,
      success: false,
      error,
    });
  }
};



export const applyPromoCode = async (req, res) => {
  try {
    const { promoCode } = req.body;
    console.log('promoCode', req.body.promoCode)
    // Find the promo code in the database
    const promo = await promoModel.findOne({ name: promoCode });

    if (!promo) {
      return res.status(404).json({ message: 'Promo code not found' });
    }

    // Check if the promo code is valid and active
    if (promo.status !== 'true') {
      return res.status(400).json({ message: 'Promo code is not active' });
    }

    // Apply the promo code based on its type
    let discount = 0;
    let type = '';

    if (promo.type === 1) { // Percentage
      // Calculate discount percentage
      discount = parseFloat(promo.rate) / 100;
      type = 'percentage';
    } else if (promo.type === 2) { // Fixed Amount
      // Assume type is 'value', calculate discount value
      discount = parseFloat(promo.rate);
      type = 'fixed';
    } else {
      return res.status(400).json({ message: 'Invalid promo code type' });
    }

    // Return the discount and type to the client
    return res.status(200).json({ discount, type });
  } catch (error) {
    console.error('Error applying promo code:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



const sendOTP = async (phone, otp) => {
  try {
    // Make an HTTP POST request to the API endpoint to send the OTP
    await axios.post('https://api.example.com/send-otp', {
      phone,
      otp,
    });
    console.log('OTP sent successfully');
  } catch (error) {
    // Handle errors
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP');
  }
};



export const SendOTP = async (req, res) => {
  try {
    const { phone } = req.body;

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    // Send OTP via Phone
    await sendOTP(phone, otp);

    res.status(200).json({ success: true, message: 'OTP sent successfully', OTP: otp });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};



export const SignupLoginUser = async (req, res) => {
  try {
    const { phone, Gtoken } = req.body;

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    // // Send OTP via Phone
    // await sendOTP(phone, otp);

    if (!Gtoken) {
      return res.status(400).json({
        success: false,
        message: 'you can access this page ',
      });
    }

    // Validation
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields',
      });
    }

    const existingUser = await userModel.findOne({ phone });

    if (existingUser) {
      if (existingUser.password !== undefined) {
        if (existingUser.status === '0') {
          return res.status(400).json({
            success: false,
            message: 'An error occurred. Please contact support.',
          });
        }
        return res.status(201).json({
          success: true,
          message: 'User found with password',
          password: true,
        });
      } else {
        if (existingUser.status === '0') {
          return res.status(400).json({
            success: false,
            message: 'An error occurred. Please contact support.',
          });
        }
        return res.status(201).json({
          success: true,
          message: 'User found',
          existingUser: { _id: existingUser._id, username: existingUser.username, phone: existingUser.phone, email: existingUser.email },
          token: existingUser.token,
          otp: otp,
        });
      }
    } else {
      return res.status(200).json({
        success: true,
        message: 'New User found',
        newUser: true,
        otp: otp,
      });
    }
  } catch (error) {
    console.error('Error on login:', error);
    return res.status(500).json({
      success: false,
      message: 'Error on login',
      error: error.message,
    });
  }
}




export const SignupNewUser = async (req, res) => {
  try {
    const { phone, Gtoken } = req.body;

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    // // Send OTP via Phone
    // await sendOTP(phone, otp);

    if (!Gtoken) {
      return res.status(400).json({
        success: false,
        message: 'you can access this page ',
      });
    }
    // Validation
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields',
      });
    }

    // Create a new user
    const user = new userModel({ phone });
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    user.token = token; // Update the user's token field with the generated token
    await user.save();

    // Generate JWT token

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      existingUser: { _id: user._id, username: user.username, phone: user.phone, email: user.email },
      otp: otp,
      token,
    });
  } catch (error) {
    console.error('Error on signup:', error);
    res.status(500).json({
      success: false,
      message: 'Error on signup',
      error: error.message,
    });
  }
}


export const LoginUserWithOTP = async (req, res) => {
  try {
    const { phone, Gtoken } = req.body;

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    // // Send OTP via Phone
    // await sendOTP(phone, otp);

    if (!Gtoken) {
      return res.status(400).json({
        success: false,
        message: 'you can access this page ',
      });
    }
    // Validation
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields',
      });
    }

    const existingUser = await userModel.findOne({ phone, status: '1' });

    if (existingUser) {
      return res.status(201).json({
        success: true,
        message: 'User found',
        existingUser: { _id: existingUser._id, username: existingUser.username, phone: existingUser.phone, email: existingUser.email },
        token: existingUser.token,
        otp: otp,
      });

    }
  } catch (error) {
    console.error('Error on signup:', error);
    res.status(500).json({
      success: false,
      message: 'Error on signup',
      error: error.message,
    });
  }
}


export const LoginUserWithPass = async (req, res) => {

  try {
    const { phone, Gtoken, password } = req.body;

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    if (!phone || !password || !Gtoken) {
      return res.status(400).send({
        success: false,
        message: 'please fill all fields'
      })
    }
    const user = await userModel.findOne({ phone })

    // password check

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: 'password is not incorrect',
        user,
      });
    }

    // const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    return res.status(200).json({
      success: true,
      message: 'login sucesssfully with password',
      existingUser: { _id: user._id, username: user.username, phone: user.phone, email: user.email },
      token: user.token,
      checkpass: true,
    });


  } catch (error) {
    return res.status(500).send
      ({
        message: `error on login ${error}`,
        sucesss: false,
        error
      })
  }

}


export const updatePromoAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, rate, type, status } = req.body;

    let updateFields = {
      name, rate, type, status
    };

    const Promo = await promoModel.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    return res.status(200).json({
      message: "Promo code Updated!",
      success: true,
      Promo,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Error while updating Promo code: ${error}`,
      success: false,
      error,
    });
  }
};
export const AuthUserByID = async (req, res) => {

  try {
    const { id, token } = req.body;

    const existingUser = await userModel.findById(id);

    if (existingUser) {
      if (existingUser.token === token) {

        return res.status(200).json({
          success: true,
          message: 'login sucesssfully with password',
          existingUser: {
            _id: existingUser._id, username: existingUser.username, phone: existingUser.phone, email: existingUser.email,
            address: existingUser.address, pincode: existingUser.pincode, state: existingUser.state,
          },
        });


      } else {
        return res.status(401).send({
          success: false,
          message: 'token is not incorrect',
        });
      }
    } else {
      return res.status(401).send({
        success: false,
        message: 'user Not found',
      });
    }

  } catch (error) {
    return res.status(500).send
      ({
        message: `error on Auth ${error}`,
        sucesss: false,
        error
      })
  }

}


export const updateProfileUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, phone, email, pincode, address, password } = req.body;

    if (!password) {


      if (!username || !email || !pincode || !address) {
        return res.status(400).json({
          success: false,
          message: 'Please fill all fields',
        });
      }

      let updateFields = {
        username, email, pincode, address
      };

      await userModel.findByIdAndUpdate(id, updateFields, {
        new: true,
      });

      return res.status(200).json({
        message: "Profile Updated!",
        success: true,
      });
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 10);

      let updateFields = {
        password: hashedPassword
      };

      const user = await userModel.findByIdAndUpdate(id, updateFields, {
        new: true,
      });

      return res.status(200).json({
        message: "Password Updated!",
        success: true,
      });
    }


  } catch (error) {
    return res.status(400).json({
      message: `Error while updating Promo code: ${error}`,
      success: false,
      error,
    });
  }
};


export const contactEnquire = async (req, res) => {

  const { name, email, message } = req.body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    // SMTP configuration
    host: process.env.MAIL_HOST, // Update with your SMTP host
    port: process.env.MAIL_PORT, // Update with your SMTP port
    secure: process.env.MAIL_ENCRYPTION, // Set to true if using SSL/TLS
    auth: {
      user: process.env.MAIL_USERNAME, // Update with your email address
      pass: process.env.MAIL_PASSWORD,// Update with your email password
    }
  });

  // Email message
  const mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS, // Update with your email address
    to: process.env.MAIL_TO_ADDRESS, // Update with your email address
    subject: 'New Contact Us Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });

};