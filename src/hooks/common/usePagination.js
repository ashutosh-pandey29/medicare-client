import { useEffect, useMemo, useState } from "react";

export const usePagination = (data = [], limit = 10) => {
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(data.length / limit);

  const currentData = useMemo(() => {
    const start = (page - 1) * limit;
    const end = page * limit;
    return data.slice(start, end);
  }, [data, page, limit]);


  // reset page when data changes
  useEffect(() => {
    setPage(1);
  }, [data]);
  return {
    page,
    setPage,
    totalPage,
    currentData,
  };
};
