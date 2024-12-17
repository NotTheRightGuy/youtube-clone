import { useState, useRef, useEffect } from "react";
import "./styles.css";
import categories from "../../constants/categories";
import { ArrowIcon } from "../../assets/icons";
export default function Categorybar() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const getCategoryClass = (category: string) => {
        return `categories-icon${
            category === selectedCategory ? " active" : ""
        }`;
    };

    const scrollContainer = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            containerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const checkScrollPosition = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                containerRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    useEffect(() => {
        checkScrollPosition();
        if (containerRef.current) {
            containerRef.current.addEventListener(
                "scroll",
                checkScrollPosition
            );
        }
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "scroll",
                    checkScrollPosition
                );
            }
        };
    }, []);

    return (
        <div id="category-bar-container" ref={containerRef}>
            {!isAtStart && (
                <ArrowIcon
                    className="left-arrow"
                    onClick={() => scrollContainer("left")}
                    title="Scroll left"
                />
            )}
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
            {!isAtEnd && (
                <ArrowIcon
                    className="right-arrow"
                    onClick={() => scrollContainer("right")}
                    title="Scroll right"
                />
            )}
        </div>
    );
}
