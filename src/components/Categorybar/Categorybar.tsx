import "./styles.css";
import categories from "../../constants/categories";
export default function Categorybar() {
    return (
        <div id="category-bar-container">
            {categories.map((category) => (
                <p className="categories-icon">{category}</p>
            ))}
        </div>
    );
}
