export const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked }) => {
    const handleDelete = () => {
      if (window.confirm('Are you sure you want to delete it?')) {
        cleanTasks();
      }
    };
  
    return (
      <div className="custom-visibility-control">
        <div className="custom-form-check">
          <input
            className="custom-form-check-input"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
          <label className="custom-form-check-label">Show tasks done</label>
        </div>
        <button onClick={handleDelete} className="custom-btn">Clear</button>
      </div>
    );
  };
  