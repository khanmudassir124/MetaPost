import { useSelector } from "react-redux";
import { ApplicationState } from "../store";

const usePostMetaData = () => {
  const postMetaData = useSelector(
    (state: ApplicationState) => state?.postMetaData.data
  );
  return postMetaData;
};

export default usePostMetaData;
