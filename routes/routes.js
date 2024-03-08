import express from "express";
import {
    SignupAdmin, Adminlogin, getAllGalleryController, deleteGalleryController, AddAdminBlogController, AdmindeleteBlogController, AddAdminCategoryController
    , getAllReviewsAdmin, AdmingetAllCategories, AddAdminProduct, getAllcategoryFillAdmin, updateCategoryAdmin, getCategoryIdAdmin, deleteCategoryAdmin, getAllProductFillAdmin, updateProductAdmin, getProductIdAdmin, deleteProductAdmin,
    AddAdminPromoController, getAllPromoAdmin, updatePromoAdmin, getPromoIdAdmin, deletePromoAdmin
    , getAllBlogAdmin, exportAllProAdmin, importAllProAdmin, getAllUserAdmin, AddAdminTaxController, getAllTaxAdmin, updateTaxAdmin, getTaxIdAdmin, deleteTaxAdmin, ViewAllAdminZones, AddAdminZonesController, getAllZonesAdmin, updateZonesAdmin, getZonesIdAdmin, deleteZonesAdmin, GetImageAdmin, deleteFolderAdmin, UpdateFolderAdmin, getUserIdAdmin, GetFolderIDAdmin, AddAdminFolderController, GetFolderAdmin, editUserAdmin, AddAdminAttributeController, deleteRatingAdmin, editReviewAdmin, getAllOrderAdmin, getAllAttributeFillAdmin, updateAttributeAdmin, getAttributeIdAdmin, deleteAttributeAdmin, getAllAttribute, AddAdminTagController, getAllTagFillAdmin, updateTagAdmin, getTagIdAdmin, deleteTagAdmin, getAllTag, editHomeData, editHomeLayoutData,
} from "../controller/adminController.js";
import {
    AddCart, contactEnquire, razorpayCallback, UpdateCart, getCart, userTokenController, userBlogsController, Userlogin, SignupUser, getAllBlogsController, createBlogController,
    updateBlogController, deleteBlogController, getBlogIdController, CreateChatController, findUserschatController, findchatController
    , ViewAllZones, AuthUserByID, updateProfileUser, SignupNewUser, LoginUserWithOTP, LoginUserWithPass, SendOTP, SignupLoginUser, getTaxIdUser, ViewAllUserTaxes, ViewCompareByUser, applyPromoCode, getHomeLayoutData, AddWishListByUser, deleteCompareByUser, deleteWishListByUser, ViewWishListByUser, AddCompareByUser, ViewProductRating, ViewCategoryRating, AddRating, UsergetAllCategories, UsergetAllProducts, UsergetAllHomeProducts, userOrdersViewController, getAllAttributeUser, getProductIdUser, updateUserController, createOrderController, updateUserAndCreateOrderController, userOrdersController, getHomeData, GetAllCategoriesByParentIdController
} from "../controller/userController.js"
import authenticateToken from "../middleware/authMiddleware.js";
import { uploadImage, handleImageUpload } from "../controller/adminController.js";

const router = express.Router();

// admin routes
router.post('/adminsignup', SignupAdmin);
router.post('/admin', Adminlogin);
router.post('/admin/upload-img', uploadImage, handleImageUpload);
router.get('/admin/allgallery', getAllGalleryController);
router.delete('/admin/delete-gallery/:id', deleteGalleryController);

router.post('/admin/addBlog', AddAdminBlogController);
router.get('/admin/all-blogs', getAllBlogAdmin);


router.post('/admin/update-blog/:id', AddAdminBlogController);
router.delete('/admin/delete-blog/:id', AdmindeleteBlogController);

router.post('/admin/add-category', AddAdminCategoryController);
router.get('/all/category/:parentId', GetAllCategoriesByParentIdController);
router.get('/all-category', UsergetAllCategories);
router.get('/all-products', UsergetAllProducts);
router.get('/all-home-products', UsergetAllHomeProducts);

router.get('/admin/all-category-fillter', getAllcategoryFillAdmin);
router.get('/admin/get-category/:id', getCategoryIdAdmin);
router.put('/admin/update-category/:id', updateCategoryAdmin);
router.delete('/admin/delete-category/:id', deleteCategoryAdmin);

router.post('/admin/add-product', AddAdminProduct);
router.get('/admin/all-product-fillter', getAllProductFillAdmin);
router.get('/admin/get-product/:id', getProductIdAdmin);
router.put('/admin/update-product/:id', updateProductAdmin);
router.delete('/admin/delete-product/:id', deleteProductAdmin);


router.post('/admin/add-attribute', AddAdminAttributeController);
router.get('/admin/all-attribute-fillter', getAllAttributeFillAdmin);
router.get('/admin/get-attribute/:id', getAttributeIdAdmin);
router.put('/admin/update-attribute/:id', updateAttributeAdmin);
router.delete('/admin/delete-attribute/:id', deleteAttributeAdmin);
router.get('/admin/all-attribute', getAllAttribute);


router.post('/admin/add-tag', AddAdminTagController);
router.get('/admin/all-tag-fillter', getAllTagFillAdmin);
router.get('/admin/get-tag/:id', getTagIdAdmin);
router.put('/admin/update-tag/:id', updateTagAdmin);
router.delete('/admin/delete-tag/:id', deleteTagAdmin);
router.get('/admin/all-tag', getAllTag);

// home settings Admin
router.put('/admin/edit-home', editHomeData);
router.put('/admin/edit-home-layout', editHomeLayoutData);

// review admin
router.get('/admin/all-review', getAllReviewsAdmin);

router.put('/admin/update-rating/:id', editReviewAdmin);
router.delete('/admin/delete-rating/:id', deleteRatingAdmin);

// order Admin

router.get('/admin/all-order', getAllOrderAdmin);

// user Admin

router.get('/admin/all-user', getAllUserAdmin);
router.put('/admin/update-user/:id', editUserAdmin);
router.get('/admin/get-user/:id', getUserIdAdmin);

// Folder Admin 

router.post('/admin/add-folder', AddAdminFolderController);
router.get('/admin/get-folder', GetFolderAdmin);
router.get('/admin/get-folder/:id', GetFolderIDAdmin);
router.put('/admin/update-folder/:id', UpdateFolderAdmin);
router.delete('/admin/delete-folder/:id', deleteFolderAdmin);

// for Zones

router.post('/admin/add-zones', AddAdminZonesController);
router.get('/admin/all-zones', getAllZonesAdmin);
router.get('/admin/get-zones/:id', getZonesIdAdmin);
router.put('/admin/update-zones/:id', updateZonesAdmin);
router.delete('/admin/delete-zones/:id', deleteZonesAdmin);
router.get('/admin/get-all-zones', ViewAllAdminZones);


// for Taxes

router.post('/admin/add-tax', AddAdminTaxController);
router.get('/admin/all-tax', getAllTaxAdmin);
router.get('/admin/get-tax/:id', getTaxIdAdmin);
router.put('/admin/update-tax/:id', updateTaxAdmin);
router.delete('/admin/delete-tax/:id', deleteTaxAdmin);

// for promo code

router.post('/admin/add-promo', AddAdminPromoController);
router.get('/admin/all-promo', getAllPromoAdmin);
router.get('/admin/get-promo/:id', getPromoIdAdmin);
router.put('/admin/update-promo/:id', updatePromoAdmin);
router.delete('/admin/delete-promo/:id', deletePromoAdmin);


router.get('/admin/get-image', GetImageAdmin);

// for export admin

router.get('/admin/export/allproducts/', exportAllProAdmin);
router.post('/admin/import/allproducts/', importAllProAdmin);

importAllProAdmin

// --------------------    user routes start  -------------------//


router.post('/signup', SignupUser);
router.post('/login', Userlogin);

//router.post('/create-order', createOrderController);
router.post('/create-order/:id', updateUserAndCreateOrderController);
router.post('/razorpayCallback', razorpayCallback);


router.get('/user-orders/:id', userOrdersController);
router.get('/user-orders-view/:userId/:orderId', userOrdersViewController);


router.post('/add-cart', AddCart);
router.get('/get-cart/:id', getCart);
router.put('/update-cart/:id', UpdateCart);


router.get('/all-blogs', getAllBlogsController);



router.put('/update-user/:id', updateUserController);
router.put('/update-profile/:id', updateProfileUser);


router.post('/create-blog', createBlogController);
router.put('/update-blog/:id', updateBlogController);
router.get('/get-blog/:id', getBlogIdController);
router.delete('/delete-blog/:id', deleteBlogController);

router.post('/create-chat', CreateChatController);
router.get('/find-chats/:id', findUserschatController);
router.get('/find-chat/:firstId/:secondId', findchatController);


// get blog by user 
router.get('/validatetoken/:id', userTokenController);

router.get('/user-blogs/:id', userBlogsController);

router.get('/user-product/:id', getProductIdUser);
router.get('/all-attribute', getAllAttributeUser);

// home settings user
router.get('/home-data', getHomeData);

router.get('/home-layout-data', getHomeLayoutData);

router.post('/add-rating', AddRating);

router.get('/view-product-rating/:id', ViewProductRating);

router.get('/all-rating/', ViewCategoryRating);

router.post('/add-wishlist', AddWishListByUser);

router.post('/add-compare', AddCompareByUser);

router.delete('/delete-compare/:id', deleteCompareByUser);

router.get('/view-wishlist/:id', ViewWishListByUser);

router.get('/view-compare/:id', ViewCompareByUser);


router.delete('/delete-wishlist/:id', deleteWishListByUser);

router.post('/apply-promo', applyPromoCode);

router.get('/get-all-zones', ViewAllZones);
router.get('/get-all-taxes', ViewAllUserTaxes);
router.get('/get-tax/:id', getTaxIdUser);

router.post('/send-otp/', SendOTP);

router.post('/signup-login-otp/', SignupLoginUser);

router.post('/login-with-pass/', LoginUserWithPass);

router.post('/login-with-otp/', LoginUserWithOTP);

router.post('/signup-new-user/', SignupNewUser);

router.post('/auth-user/', AuthUserByID);
router.post('/contact-enquire/', contactEnquire);



export default router;

