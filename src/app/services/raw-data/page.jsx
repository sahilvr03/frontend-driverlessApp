'use client'; 
import React from 'react';

export default function RawDataProvisioning() {
    return (
        <div style={styles.pageContainer}>
            {/* Header */}
            <header style={styles.header}>
                <h1 style={styles.heading}>Raw Data Provisioning Services</h1>
                <p style={styles.subheading}>
                    Access accurate and reliable raw data to power your insights and decisions.
                </p>
            </header>

            {/* Main Content */}
            <main style={styles.main}>
                

                {/* Smart Data Provisioning Card */}
                <div style={styles.animationContainer}>
                    <div className="floating-icon" style={styles.updatedCard}>
                        <div style={styles.iconWrapper}>
                            <span role="img" aria-label="provisioning" style={styles.largeIcon}>
                                📂
                            </span>
                        </div>
                        <h2 style={styles.updatedHeading}>Smart Data Provisioning</h2>
                        <p style={styles.updatedDescription}>
                            Access clean, raw datasets prepared to accelerate your analytical and AI pipelines.
                        </p>
                    </div>
                </div>

                {/* Benefits Section */}
                <section style={styles.infoSection}>
                    <h2 style={styles.sectionHeading}>What Makes Us Stand Out?</h2>
                    <div style={styles.infoContainer}>
                        <div style={styles.infoCard}>
                            <span role="img" aria-label="quality" style={styles.infoIcon}>
                                🏆
                            </span>
                            <h3>Data Quality</h3>
                            <p>Guaranteed accuracy and reliability for your projects.</p>
                        </div>
                        <div style={styles.infoCard}>
                            <span role="img" aria-label="customization" style={styles.infoIcon}>
                                ⚙️
                            </span>
                            <h3>Custom Datasets</h3>
                            <p>Tailored raw data aligned with your unique needs.</p>
                        </div>
                        <div style={styles.infoCard}>
                            <span role="img" aria-label="scalability" style={styles.infoIcon}>
                                📈
                            </span>
                            <h3>Scalability</h3>
                            <p>Provision datasets at scale for diverse applications.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; {new Date().getFullYear()} DataProVisioning. All Rights Reserved.</p>
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
        backgroundColor: '#f9fbfd',
        color: '#333',
        margin: '0',
        padding: '0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        backgroundColor: '#1b5e20',
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
        backgroundColor: '#e8f5e9',
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
        color: '#43a047',
    },
    updatedHeading: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: '15px',
    },
    updatedDescription: {
        fontSize: '1rem',
        color: '#2e7d32',
        lineHeight: '1.5',
        marginBottom: '20px',
    },
    learnMoreButton: {
        backgroundColor: '#43a047',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
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
        backgroundColor: '#0d47a1',
        color: '#ffffff',
        textAlign: 'center',
        padding: '10px 0',
    },
};
