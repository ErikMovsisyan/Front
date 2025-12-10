import { useEffect, useState } from "react";
import { MemberItem } from "./MemberItem";
import { AddMemberForm } from "./AddMemberForm";
import { UserFilter } from "./userFilter";

export const MemberList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = (name, gender) => {
    if (!name.trim() || !gender) return;

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, gender })
    })
      .then(res => res.json())
      .then(newUser => {
        setUsers(prev => [...prev, newUser]);
      });
  };

  const getUser = (gender) => {
    const url = gender
      ? `http://localhost:3001/users?gender=${gender}`
      : "http://localhost:3001/users";

    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  return (
    <div className="member-list">
      <h2 className="member-list__title">Members</h2>

      <div className="member-list__items">
        {users.map(user => (
          <MemberItem key={user.id} user={user} />
        ))}
      </div>

      <AddMemberForm onAdd={addUser} />

      <UserFilter getUser={getUser} />
    </div>
  );
};





















