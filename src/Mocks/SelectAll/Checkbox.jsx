export default function Checkbox({ label, checked, onChange }) {
    return (
      <div className="checkbox">
        <label className="checkbox__label">
          <input
            type="checkbox"
            className="checkbox__input"
            checked={checked}
            onChange={onChange}
          />
          {label}
        </label>
      </div>
    );
  }
  