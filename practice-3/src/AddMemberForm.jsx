import { useState } from "react";

export const AddMemberForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !gender) return;
    onAdd(name.trim(), gender);
    setName("");
    setGender("");
  };

  return (
    <form className="add-member-form" onSubmit={handleSubmit}>
      <input
        className="add-member-form__input"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />

      <select
        className="add-member-form__select"
        value={gender}
        onChange={e => setGender(e.target.value)}
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button className="add-member-form__button" type="submit">
        Add
      </button>
    </form>
  );
};
