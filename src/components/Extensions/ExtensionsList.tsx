import type { Extension } from "../../types";
import { useFilter } from "../../hooks/useFilter";
import ExtensionCard from "./ExtensionCard";
import "./ExtensionsList.css";

const ExtensionsList: React.FC = () => {
  const { filteredExtensions, loading, error } = useFilter();

  function handleTryAgain() {
    // Logic to retry fetching extensions
    window.location.reload();
  }

  if (loading) {
    return (
      <div className="extensions-loading">
        <div className="loading-spinner"></div>
        <p>Loading extensions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="extensions-error">
        <p>
          <strong>Error:</strong> while trying to get extensions:{" "}
          {error || "An unexpected error occurred."}
        </p>
        <button className="try-again" onClick={handleTryAgain}>
            Try Again
        </button>
      </div>
    );
  }

  if( filteredExtensions.length === 0) {
    return (
      <div className="extensions-empty">
        <p>No extensions found. Please check your filters or add new extensions.</p>
      </div>
    );
  }


  return (
    <div className="extensions-grid">
      {filteredExtensions.map((extension: Extension) => (
        <ExtensionCard key={extension.id} extension={extension} />
      ))}
    </div>
  );
};

export default ExtensionsList;
