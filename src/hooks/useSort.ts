import { SortTypes } from '@src/types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type UseSortParams<T> = {
  data: T[];
  key: keyof T;
};

export const useSort = <T>({ data, key }: UseSortParams<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearchParams = Object.fromEntries(searchParams);
  const initialSort = searchParams.get('sort') as SortTypes;

  const [currentSort, setCurrentSort] = useState<SortTypes>(initialSort);
  const [sortedData, setSortedData] = useState<T[]>(data);

  const getSorted = (array: T[], sort: SortTypes) => {
    return [...array].sort((a, b) => {
      if (a[key] < b[key]) {
        return sort === 'asc' ? -1 : 1;
      }

      if (a[key] > b[key]) {
        return sort === 'asc' ? 1 : -1;
      }

      return 0;
    });
  };

  const handleSort = () => {
    if (currentSort === 'desc') {
      delete initialSearchParams.sort;

      setCurrentSort(undefined);
      setSortedData(data);
      setSearchParams(initialSearchParams);

      return;
    }

    const newSort = currentSort === 'asc' ? 'desc' : 'asc';
    const sorted = getSorted(data, newSort);

    setCurrentSort(newSort);
    setSortedData(sorted);
    setSearchParams({ ...initialSearchParams, sort: newSort });
  };

  useEffect(() => {
    if (initialSort) {
      const sorted = getSorted(data, initialSort);

      setSortedData(sorted);
    }
  }, []);

  return {
    currentSort,
    sortedData,
    onSort: handleSort,
  };
};
