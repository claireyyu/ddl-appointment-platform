import "../../app/globals.css";

export default function LoadingAnimation() {
    return (
        <div className="flex items-center justify-center space-x-1 text-sm md:text-base xl:text-lg">
            <span>Decoding</span>
            <span className="dot-flashing"></span>
            <span className="dot-flashing"></span>
            <span className="dot-flashing"></span>
        </div>
    );
}