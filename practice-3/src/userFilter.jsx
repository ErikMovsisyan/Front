export const UserFilter = ({ getUser }) => {
  return (
    <div className="user-filter">
      <button
        className="user-filter__button user-filter__button--all"
        onClick={() => getUser(null)}
      >
        All
      </button>
      <button
        className="user-filter__button user-filter__button--male"
        onClick={() => getUser("male")}
      >
        Male
      </button>
      <button
        className="user-filter__button user-filter__button--female"
        onClick={() => getUser("female")}
      >
        Female
      </button>
    </div>
  );
};
