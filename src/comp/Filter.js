import { useState } from "react";
function Filter() {

    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);
    const [showDropdown5, setShowDropdown5] = useState(false);
    const [showDropdown6, setShowDropdown6] = useState(false);
    const [showDropdown7, setShowDropdown7] = useState(false);
    const [showDropdown8, setShowDropdown8] = useState(false);
    const [showDropdown9, setShowDropdown9] = useState(false);
    const [showDropdown10, setShowDropdown10] = useState(false);
    const [showDropdown11, setShowDropdown11] = useState(false);
    const [showDropdown12, setShowDropdown12] = useState(false);



    function handleChange(e) {
        setPriceRange({
            priceRange,
            [e.target.name]: parseInt(e.target.value)
        });
    };

    function toggleDropdown(e) {
        setShowDropdown(!showDropdown);
    };

    function toggleDropdown2(e) {
        setShowDropdown2(!showDropdown2);
    };

    function toggleDropdown3(e) {
        setShowDropdown3(!showDropdown3);
    };

    function toggleDropdown4(e) {
        setShowDropdown4(!showDropdown4);
    };

    function toggleDropdown5(e) {
        setShowDropdown5(!showDropdown5);
    };

    function toggleDropdown6(e) {
        setShowDropdown6(!showDropdown6);
    };

    function toggleDropdown7(e) {
        setShowDropdown7(!showDropdown7);
    };

    function toggleDropdown8(e) {
        setShowDropdown8(!showDropdown8);
    };

    function toggleDropdown9(e) {
        setShowDropdown9(!showDropdown9);
    };

    function toggleDropdown10(e) {
        setShowDropdown10(!showDropdown10);
    };

    function toggleDropdown11(e) {
        setShowDropdown11(!showDropdown11);
    };

    function toggleDropdown12(e) {
        setShowDropdown12(!showDropdown12);
    };


   
        const colors = ['#ff0000', '#00ff00', '#0000ff','#FF69B4']; // Add more colors as needed

        function handleColorClick  (color)  {
            console.log(`Color ${color} selected`);
            // Add your logic for handling the selected color
        
        };



        return (

            <div className="filter  filter-panel ms-2">
                <h5>FILTER BY</h5>
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown(e) }}>
                        <span>Brands</span>
                        <div className={`arrow-icon ${showDropdown ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> option1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> option2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> option3
                        </label>
                    </div>
                </div>
                <hr />

                <div>
                    Price Range
                    <br />

                    <input
                        type="number"
                        name="min"
                        min="0"
                        max={priceRange.max}
                        step="10"
                        value={priceRange.min}
                        onChange={handleChange}
                        className="input1"
                    />
                    <span> - </span>
                    <input
                        type="number"
                        name="max"
                        min={priceRange.min}
                        max="1000"
                        step="10"
                        value={priceRange.max}
                        onChange={handleChange}
                        className="input1"
                    />

                </div>

                <hr />
                <label>Colours</label>
                <div>
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            className="color-option"
                            style={{ backgroundColor: color }}
                            onClick={() => {handleColorClick(color)}}
                        ></button>
                    ))}
                </div>

                <hr />


                <div>

                    <div className="dropdown-container">
                        <div className="dropdown-button" onClick={(e) => { toggleDropdown3(e) }}>
                            <span>Categories</span>
                            <div className={`arrow-icon ${showDropdown3 ? 'open' : ''}`}>▼</div>
                        </div>
                        <div className={`dropdown-content ${showDropdown3 ? 'show' : ''}`}>
                            <label className="checkbox-label">
                                <input type="checkbox" className="checkbox-input" value="option1" /> All
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" className="checkbox-input" value="option2" /> Mens
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" className="checkbox-input" value="option3" /> Women
                            </label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown2(e) }}>
                        <span>Age</span>
                        <div className={`arrow-icon ${showDropdown2 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown2 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>

                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown4(e) }}>
                        <span>Customization type</span>
                        <div className={`arrow-icon ${showDropdown4 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown4 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>

                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown5(e) }}>
                        <span>Size</span>
                        <div className={`arrow-icon ${showDropdown5 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown5 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>

                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown6(e) }}>
                        <span>Style</span>
                        <div className={`arrow-icon ${showDropdown6 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown6 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>
                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown7(e) }}>
                        <span>Fabric type</span>
                        <div className={`arrow-icon ${showDropdown7 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown7 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>
                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown8(e) }}>
                        <span>Sleeve length</span>
                        <div className={`arrow-icon ${showDropdown8 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown8 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>
                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown9(e) }}>
                        <span>Fit</span>
                        <div className={`arrow-icon ${showDropdown9 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown9 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>
                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown10(e) }}>
                        <span>Fabric Weight</span>
                        <div className={`arrow-icon ${showDropdown10 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown10 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>
                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown11(e) }}>
                        <span>Neckline</span>
                        <div className={`arrow-icon ${showDropdown11 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown11 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>
                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown12(e) }}>
                        <span>Purpose</span>
                        <div className={`arrow-icon ${showDropdown12 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown12 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>
                <hr />
                <div className="dropdown-container">
                    <div className="dropdown-button" onClick={(e) => { toggleDropdown12(e) }}>
                        <span>Safety</span>
                        <div className={`arrow-icon ${showDropdown12 ? 'open' : ''}`}>▼</div>
                    </div>
                    <div className={`dropdown-content ${showDropdown12 ? 'show' : ''}`}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option1" /> Option 1
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option2" /> Option 2
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" value="option3" /> Option 3
                        </label>
                    </div>
                </div>


            </div>


        );
    }

    export default Filter;