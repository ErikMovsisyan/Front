export const MemberItem = ({ user }) => {
  return (
    <p className="member-item">
      <span className="member-item__name">{user.name}</span>
      {user.gender && (
        <span className={`member-item__badge member-item__badge--${user.gender}`}>
          {user.gender}
        </span>
      )}
    </p>
  );
};
