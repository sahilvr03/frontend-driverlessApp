'use client'; 
import React from 'react';

export default function DataCleaning() {
    return (
        <div style={styles.pageContainer}>
            {/* Header */}
            <header style={styles.header}>
                <h1 style={styles.heading}>Data Cleaning Services</h1>
                <p style={styles.subheading}>
                    Transform raw, messy datasets into clean, structured data for actionable insights.
                </p>
            </header>

            {/* Main Content */}
            <main style={styles.main}>
                {/* Smart Data Cleaning Card */}
                <div className="floating-icon" style={styles.animationContainer}>
                    <div style={styles.updatedCard}>
                        <div style={styles.iconWrapper}>
                            <span role="img" aria-label="cleaning" style={styles.largeIcon}>
                                🧹
                            </span>
                        </div>
                        <h2 style={styles.updatedHeading}>Smart Data Cleaning</h2>
                        <p style={styles.updatedDescription}>
                            Say goodbye to messy datasets! We ensure your data is clean, structured, and ready for actionable insights.
                        </p>
                    </div>
                </div>

                {/* Benefits Section */}
                <section style={styles.infoSection}>
                    <h2 style={styles.sectionHeading}>Why Choose Our Services?</h2>
                    <div style={styles.infoContainer}>
                        <div style={styles.infoCard}>
                            <span role="img" aria-label="accuracy" style={styles.infoIcon}>
                                🎯
                            </span>
                            <h3>Accuracy</h3>
                            <p>Our team ensures every piece of data meets your quality standards.</p>
                        </div>
                        <div  style={styles.infoCard}>
                            <span role="img" aria-label="automation" style={styles.infoIcon}>
                                ⚙️
                            </span>
                            <h3>Automation</h3>
                            <p>We combine automated tools with manual validation for optimal results.</p>
                        </div>
                        <div  style={styles.infoCard}>
                            <span role="img" aria-label="efficiency" style={styles.infoIcon}>
                                🚀
                            </span>
                            <h3>Efficiency</h3>
                            <p>Fast turnaround times to keep your projects on track.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; {new Date().getFullYear()} DataCleaningPro. All Rights Reserved.</p>
            </footer>

            {/* CSS Animation */}
            <style jsx>{`
                .floating-icon {
                    animation: float 3s infinite ease-in-out;
                }
                @keyframes float {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
const styles = {
    pageContainer: {
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        backgroundColor: '#f8fafc',
        color: '#333',
        margin: '0',
        padding: '0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        backgroundColor: '#1e3a8a',
        color: '#ffffff',
        textAlign: 'center',
        padding: '40px 20px',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0',
    },
    subheading: {
        marginTop: '10px',
        fontSize: '1.2rem',
        opacity: '0.9',
    },
    main: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1',
    },
    animationContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px',
    },
    updatedCard: {
        backgroundColor: '#e3f2fd',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        padding: '30px',
        width: '350px',
        position: 'relative',
        overflow: 'hidden',
    },
    iconWrapper: {
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto 20px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    largeIcon: {
        fontSize: '2.5rem',
        color: '#1e88e5',
    },
    updatedHeading: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#1565c0',
        marginBottom: '15px',
    },
    updatedDescription: {
        fontSize: '1rem',
        color: '#1565c0',
        lineHeight: '1.5',
        marginBottom: '20px',
    },
    infoSection: {
        textAlign: 'center',
    },
    sectionHeading: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
    },
    infoCard: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '250px',
        textAlign: 'center',
    },
    infoIcon: {
        fontSize: '2rem',
        marginBottom: '10px',
    },
    footer: {
        backgroundColor: '#1e3a8a',
        color: '#ffffff',
        textAlign: 'center',
        padding: '10px 0',
    },
};
