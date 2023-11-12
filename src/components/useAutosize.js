import { useEffect } from "react";

const useAutosize = (ref, value) => {
  useEffect(() => {
    if (ref) {
      ref.style.height = "0px";
      const scrollHeight = ref.scrollHeight;
      ref.style.height = scrollHeight + "px";
    }
  }, [ref, value]);
};

export default useAutosize;