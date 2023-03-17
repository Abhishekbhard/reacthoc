const withTodoList = (Component) => {
  const WithTodoList = (props) => {
    if (props.loading) return <div>Loading data....</div>;
    if (!props.data) return <div>No data loaded</div>;
    if (!props.data.length) return <div>Data is empty</div>;
    return <Component {...props} />;
  };
  return WithTodoList;
};
export default withTodoList;
