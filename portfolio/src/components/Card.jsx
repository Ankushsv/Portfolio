import React from "react";

export const Card = ({ title, description }) => {
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      maxWidth: "300px",
      width: "100%",
      padding: "16px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      margin: "16px auto",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
    },
    imagePlaceholder: {
      width: "60px",
      height: "60px",
      backgroundColor: "#f0f0f0",
      borderRadius: "50%",
      margin: "0 auto 16px",
      border: "1px dashed #ccc",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: "0 0 8px",
    },
    description: {
      fontSize: "14px",
      color: "#666",
      margin: 0,
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
      }}
      className="text-white "
    >
      <div style={styles.imagePlaceholder}></div>
      <h3 style={styles.title} className="">{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};


