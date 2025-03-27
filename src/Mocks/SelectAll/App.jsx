import { useState } from "react";
import Checkbox from "./Checkbox";

export default function SelectForm() {
  const [items, setItems] = useState([
    { id: 1, name: "EGG", checked: false },
    { id: 2, name: "BREAD", checked: false },
    { id: 3, name: "FOOD", checked: false },
  ]);

  const AllSelected = items.every((item) => item.checked);

  const handleToggle = (id) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id == id) {
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      });
    });
  };

  const handleSelectAll = () => {
    const shouldCheck = !AllSelected;
    setItems((prev) => {
      return prev.map((item) => {
        return { ...item, checked: shouldCheck };
      });
    });
  };

  const handleClear = () => {
    setItems((prev) => {
      return prev.map((item) => {
        return { ...item, checked: false };
      });
    });
  };

  return (
    <div className="select-form">
      <div className="select-items">
        Selected:{" "}
        {items
          .filter((i) => i.checked)
          .map((i) => i.name)
          .join(",") || "None"}
      </div>

      <div className="checkbox-list">
        <Checkbox
          label="SelectAll"
          checked={AllSelected}
          onChange={handleSelectAll}
        />
        {items.map(({ id, name, checked }) => (
          <div key={id}>
            <Checkbox
              label={name}
              checked={checked}
              onChange={() => handleToggle(id)}
            />
          </div>
        ))}
      </div>
      <button className="clear-button" onClick={handleClear}>
        clearall
      </button>
    </div>
  );
}
