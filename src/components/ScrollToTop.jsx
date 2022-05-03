import arrowUp from "../images/arrow-up.png"
import "../styles/scrollToTop.css"

const ScrollToTop = () => {
    return (
        <button
        onClick={() => {
            window.scrollTo(0, 0)
        }}
        >
            <img src={ arrowUp } alt="" />
        </button>
    );
}
 
export default ScrollToTop;