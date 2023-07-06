import { useSelector } from "react-redux";
import { ApplicationState } from "../store";

const usePostDataControl = () => {
  const postData = useSelector(
    (state: ApplicationState) => state?.postDataControl
  );
  return postData;
};

const useCurrentPage = () => {
  const postData = useSelector(
    (state: ApplicationState) => state?.postDataControl
  );
  return postData?.currentPage;
};

export { usePostDataControl, useCurrentPage };
