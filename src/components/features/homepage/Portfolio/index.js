import SuccessView from "./success";
import PendingView from "./pending";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjectsPending, selectStatus } from "../homepageSlice";
import ErrorView from "./error";

export const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectsPending());
  }, [dispatch]);

  const status = useSelector(selectStatus);

  return (
    <>
      {status === "pending" ? (
        <PendingView />
      ) : status === "error" ? (
        <ErrorView />
      ) : (
        <SuccessView />
      )}
    </>
  );
};

export default Portfolio;
