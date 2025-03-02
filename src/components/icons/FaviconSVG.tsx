// FaviconSVG component that renders a simple SVG icon
export const FaviconSVG = () => (
    <svg
        width="32" // Set the width of the SVG
        height="32" // Set the height of the SVG
        viewBox="0 0 32 32" // Define the view box for the SVG
        fill="none" // No fill for the SVG
        xmlns="http://www.w3.org/2000/svg" // XML namespace for SVG
    >
        <rect width="32" height="32" rx="8" fill="#1DA1F2" /> {/* Background rectangle with rounded corners */}
        <path
            d="M22 12.5L15.5 19L13 16.5L10.5 19" // Path for the checkmark
            stroke="white" // Set stroke color to white
            strokeWidth="2" // Set stroke width
            strokeLinecap="round" // Round the ends of the stroke
            strokeLinejoin="round" // Round the corners of the stroke
        />
    </svg>
); 