const Dropdown = ({ users }) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-outline btn-primary btn-sm m-1">
        User List
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {users.map((user) => (
          <li key={user.userId}>
            <a>
              {user.firstName} {user.lastName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
