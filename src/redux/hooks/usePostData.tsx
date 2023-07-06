import { useSelector } from "react-redux";
import { ApplicationState } from "../store";

const usePostData = () => {
  const postData = useSelector(
    (state: ApplicationState) => state?.postData.data
  );
  return postData;
};

export default usePostData;
