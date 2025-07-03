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
          <span className="logo-fallback" hidden>
            🧩
          </span>
        </div>
        <div className="extension-info flex flex-col gap-1">
          <h3 className="extension-name">{extension.name}</h3>
          <p className="extension-description">{extension.description}</p>
        </div>
      </div>

      <div className="extension-footer flex justify-between items-center">
        <button
          className="remove-button"
          onClick={handleRemove}
          aria-label={`Remove ${extension.name}`}
          title="Remove extension"
        >
          Remove
        </button>
        <div className="extension-status">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={extension.isActive}
              onChange={handleToggle}
              aria-label={`${extension.name} is currently ${
                extension.isActive ? "active" : "inactive"
              }. Click to ${extension.isActive ? "deactivate" : "activate"}.`}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
