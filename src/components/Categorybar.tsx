import "../assets/styles/CategoryBar.css";
import categories from "../utils/categories";
export default function Categorybar() {
    return (
        <div id="category-bar-container">
            {categories.map((c) => (
                <p className="categories-icon">{c}</p>
            ))}
        </div>
    );
}
