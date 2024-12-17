import { useState } from "react";
import "./styles.css";
import categories from "../../constants/categories";
export default function Categorybar() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const getCategoryClass = (category: string) => {
        return `categories-icon${
            category === selectedCategory ? " active" : ""
        }`;
    };

    return (
        <div id="category-bar-container">
            {categories.map((category) => (
                <p
                    className={getCategoryClass(category)}
                    onClick={() => {
                        handleCategoryChange(category);
                    }}
                >
                    {category}
                </p>
            ))}
        </div>
    );
}
