import React from 'react';
import { useNavigate } from 'react-router-dom'; // You need react-router-dom installed

/**
 * A beautiful and professional 404 "Page Not Found" component.
 *
 * @returns {JSX.Element} The NotFoundPage component.
 */
const PageNotFound = () => {
    // Hook for programmatic navigation (requires react-router-dom)
    const navigate = useNavigate();

    // --- Inline Styles for a clean, centered look ---
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh', // Full viewport height
            textAlign: 'center',
            backgroundColor: '#f8f9fa', // Light, soft background
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
        },
        errorCode: {
            fontSize: '8rem', // Large, impactful error code
            fontWeight: 'bold',
            color: '#dc3545', // A strong, modern red for emphasis
            marginBottom: '10px',
            letterSpacing: '5px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        },
        title: {
            fontSize: '2.5rem',
            color: '#343a40',
            marginBottom: '15px',
        },
        message: {
            fontSize: '1.2rem',
            color: '#6c757d',
            marginBottom: '30px',
            maxWidth: '500px',
            lineHeight: '1.5',
        },
        button: {
            padding: '12px 25px',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#ffffff', // White text
            backgroundColor: '#007bff', // Primary blue button color
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.1s ease',
            boxShadow: '0 4px 6px rgba(0, 123, 255, 0.2)',
        },
        // Optional: Hover styles for a better user experience
        buttonHover: {
            backgroundColor: '#0056b3',
            transform: 'translateY(-1px)',
        }
    };

    // State to handle button hover effect (for demonstration)
    const [isHovered, setIsHovered] = React.useState(false);

    // Function to handle button click and navigate to the home page
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.errorCode}>404</h1>
            <h2 style={styles.title}>Page Not Found</h2>
            <p style={styles.message}>
                Oops! It looks like you've stumbled upon a page that doesn't exist.
                Don't worry, we'll help you find your way back.
            </p>
            <button
                style={{ ...styles.button, ...(isHovered ? styles.buttonHover : {}) }}
                onClick={handleGoHome}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default PageNotFound;