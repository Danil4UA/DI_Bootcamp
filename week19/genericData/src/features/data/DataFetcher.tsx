import { fetchData } from "./state/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../../app/store";


const DataFetcher = () => {
    const dispatch: AppDispatch = useDispatch();
    const data = useSelector((state: RootState) => state.data.data);
    const status = useSelector((state: RootState) => state.data.status);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  
    return (
      <>
        <h1>Data Fetcher</h1>
        {status === "pending" && <p>Loading...</p>}
        {status === "success" && (
          <div>
            <h2>Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
        {status === "failed" && <p>Failed to load data</p>}
      </>
    );
  };
  
  export default DataFetcher;