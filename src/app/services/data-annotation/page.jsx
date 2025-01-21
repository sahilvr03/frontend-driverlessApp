'use client'; 
import React from 'react';

export default function Home() {
    return (
        <div style={styles.pageContainer}>
            {/* Header */}
            <header style={styles.header}>
                <h1 style={styles.heading}>Unlock the Potential of Your AI with Accurate Data Annotation</h1>
                <p style={styles.subheading}>Empower your machine learning models with precise and reliable annotations.</p>
            </header>

            {/* Main Content */}
            <main style={styles.main}>
                {/* Animation Section */}
                <div style={styles.animationContainer}>
                    <div  style={styles.updatedCard}>
                        <div style={styles.iconWrapper}>
                            <span role="img" aria-label="insights" style={styles.largeIcon}>
                                🤖
                            </span>
                        </div>
                        <h2 style={styles.updatedHeading}>AI-Driven Data Annotation</h2>
                        <p style={styles.updatedDescription}>
                            Harness the power of automation and human expertise to create high-quality, actionable datasets tailored to your AI needs.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <section style={styles.infoSection}>
                    <h2 style={styles.sectionHeading}>Why Choose Us?</h2>
                    <div style={styles.infoContainer}>
                        <div style={styles.infoCard}>
                            <span role="img" aria-label="precise" style={styles.infoIcon}>
                                ✅
                            </span>
                            <h3>Precision</h3>
                            <p>We ensure data is labeled with the highest level of accuracy, helping you build models you can trust.</p>
                        </div>
                        <div style={styles.infoCard}>
                            <span role="img" aria-label="efficiency" style={styles.infoIcon}>
                                ⚡
                            </span>
                            <h3>Efficiency</h3>
                            <p>Accelerate your AI training with timely delivery of annotated datasets.</p>
                        </div>
                        <div style={styles.infoCard}>
                            <span role="img" aria-label="scalable" style={styles.infoIcon}>
                                🌎
                            </span>
                            <h3>Scalability</h3>
                            <p>Adapt to your growing project needs with our scalable services.</p>
                        </div>
                        <div style={styles.infoCard}>
                            <span role="img" aria-label="secure" style={styles.infoIcon}>
                                🔒
                            </span>
                            <h3>Data Security</h3>
                            <p>Your data is safe with us, thanks to robust privacy and security protocols.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; {new Date().getFullYear()} SelfDriveWeb. All Rights Reserved.</p>
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
