import { useEffect, useState } from "react";

const withDataFetching = (WrappedComponent) => {
  const WithDataFetching = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(props.dataSource);
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setError(error);
        }
      };
      fetchData();
    }, [props.dataSource]);
    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
      />
    );
  };
  return WithDataFetching;
};
export default withDataFetching;
