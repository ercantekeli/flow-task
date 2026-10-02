import { TaskContext } from "@/context/taskContext";
import { useEffect, useState, useCallback, useContext } from "react";
import { toast, Bounce } from "react-toastify";

export const useFetch = (service) => {
  const { setAllTasks } = useContext(TaskContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const apiData = await service();
      setAllTasks(apiData);
      toast.success("İşlem Başarılı", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (err) {
      console.log(err);
      toast.error("Bir Hata Oluştu!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  }, [service]);

  useEffect(() => {
    fetchData();
  }, []);

  return { error, loading };
};
