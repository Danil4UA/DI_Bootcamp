import { useEffect } from "react";
import { fetchFood } from "./state/foodSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const FoodFetcher = (): JSX.Element => {
  const { food, status } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFood()); // Correctly invoking the thunk
  }, [dispatch]);

//   const handleClick = () => {
//     console.log(food);
//   };

  return (
    <>
      <h3>Fetch data:</h3>
      {/* <button onClick={handleClick}>Get Data</button> */}
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && food.length > 0 && (
        <div>
          {food.map((item: any, index: number) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      )}
      {status === "failed" && <p>Failed to fetch food data.</p>}
    </>
  );
};

export default FoodFetcher;