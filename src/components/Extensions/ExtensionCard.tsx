// components/ExtensionCard.tsx
import React from "react";
import { Extension } from "../../types";
import { useFilter } from "../../hooks/useFilter";
import "./ExtensionCard.css";

interface ExtensionCardProps {
  extension: Extension;
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({ extension }) => {
  const { toggleExtensionStatus, removeExtension } = useFilter();

  const handleToggle = () => {
    toggleExtensionStatus(extension.id);
  };

  const handleRemove = () => {
    if (
      window.confirm(`Are you sure you want to remove "${extension.name}"?`)
    ) {
      removeExtension(extension.id);
    }
  };

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.style.display = "none"; // Hide the image if it fails to load
    event.currentTarget.nextElementSibling?.removeAttribute("hidden"); // Show the fallback text
    // Log the error to the console
    console.error(`Failed to load image for extension: ${extension.name}`);
  };

  return (
    <div
      className={`extension-card ${extension.isActive ? "active" : "inactive"}`}
    >
      <div className="extension-header">
        <div className="extension-logo">
            <img
                src={extension.logo}
                alt={`${extension.name} logo`}
                onError={handleImageError}
                className="logo-image"
            />
          <span className="logo-fallback" hidden>🧩</span>
        </div>
        <div className="extension-info">
          <h3 className="extension-name">{extension.name}</h3>
        </div>
        <button
          className="remove-button"
          onClick={handleRemove}
          aria-label={`Remove ${extension.name}`}
          title="Remove extension"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="3,6 5,6 21,6"></polyline>
            <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>

      <div className="extension-body">
        <p className="extension-description">{extension.description}</p>
      </div>

      <div className="extension-footer">
        <div className="extension-status">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={extension.isActive}
              onChange={handleToggle}
              aria-label={`${extension.isActive ? "Deactivate" : "Activate"} ${
                extension.name
              }`}
            />
            <span className="slider"></span>
          </label>
          <span className="status-text">
            {extension.isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
