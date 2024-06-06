import { useEffect, useState } from "react";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
};

type Pagination = {
  nextPage: () => void;
  prevPage: () => void;
  totalPages: number;
  currentPage: number;
};

const usePagination = ({
  totalItems,
  itemsPerPage,
}: PaginationProps): Pagination => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalItems]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = (): void => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = (): void => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return { nextPage, prevPage, totalPages, currentPage };
};

export default usePagination;
