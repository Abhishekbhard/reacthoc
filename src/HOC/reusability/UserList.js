import withDataFetching from "./withDataFetching";
const UserList = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading data....</div>;
  }
  if (error) {
    return <div>Error :{error.message}</div>;
  }
  return (
    <ul>
      {data.map((user) => {
        return (
          <li key={user.id}>
            {user.name}({user.email})
          </li>
        );
      })}
    </ul>
  );
};

const UserListWrapper = withDataFetching(UserList);

export default UserListWrapper;
