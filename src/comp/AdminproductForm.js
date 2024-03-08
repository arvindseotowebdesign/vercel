import React, { useEffect, useState } from 'react';
import Left from './Left';

function ProductForm() {
    const [formData, setFormData] = useState({
        productName: '',
        productDesc: '',
        productPrice: '',
        productImages:'',
    });
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    useEffect(() => {
        // Fetch categories from your API or set them statically
        const fetchedCategories = ['Men', 'Women', 'Kids'];
        setCategories(fetchedCategories);
    }, []);

    

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleFileChange(e) {
       
        const files = Array.from(e.target.files);
        setFormData({ ...formData, productImages: files });
    };

    function handleCategoryChange(e) {
        const selectedCategory = e.target.value;
        setSelectedCategory(selectedCategory);
        setFormData({ ...formData, category: selectedCategory });
    };
    function handlesubmit(e) {
        e.preventDefault();
    
        const jsonData = {
            name: formData.productName,
            desc: formData.productDesc,
            price: formData.productPrice,
            category: formData.category,
            images: formData.productImages.map((image, index) => `images[${index}]`),
        };
    
        fetch('/api/addproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        }).then((result)=>{return result.json()}).then((data)=>{
           // console.log(data)
           if(data.status===201){
            alert('Successfully added')
           }else{
            alert("Failed to add")
           }

        })
        
    
      
};

       
    

    return (

        <section id="mid">
            <div className="container mt-3"  >
                <div className="row">
                    <Left />
                    <div className="col-md-9">
                        <h2>Add Product</h2>
                        <form onSubmit={(e)=>handlesubmit(e)} className='overlay'encType='multipart/form-data'>
                            <label htmlFor="productName">Product Name:</label>
                            <input
                                type="text"
                                className='form-control'
                                name="productName"
                                value={formData.productName}
                                onChange={(e) => { handleChange(e) }}
                                required
                            />

                            <label htmlFor="productDesc">Product Description:</label>
                            <textarea
                                className='form-control'
                                name="productDesc"
                                value={formData.productDesc}
                                onChange={handleChange}
                            ></textarea>

                            <label htmlFor="productPrice">Product Price:</label>
                            <input
                                type="number"
                                className='form-control'
                                name="productPrice"
                                step="0.01"
                                value={formData.productPrice}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="category">Select Category:</label>
                            <select className='form-control' name="category" value={selectedCategory} onChange={(e) => { handleCategoryChange(e) }}>
                                <option value="">Select...</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                            <p>Selected Category: {selectedCategory}</p>

                            <label htmlFor="productImages">Images</label>
                            <input
                                type='file'
                                name='Images'
                                
                                accept='image'
                                onChange={handleFileChange}
                                className="form-control"
                                multiple 
                            />

                            <button type="submit" className='btn2 form-control mt-2'><span>Add Product</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>




    );
};

export default ProductForm;