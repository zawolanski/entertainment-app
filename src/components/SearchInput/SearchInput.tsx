'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import Search from '@/icons/Search';

import styles from './searchInput.module.scss';

type Props = {
  label: string;
  placeholder: string;
};

const SearchWrapper = ({ label, placeholder }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value;
      const params = new URLSearchParams(searchParams);

      if (term) {
        params.set('s', term);
      } else {
        params.delete('s');
      }

      replace(`${pathname}?${params.toString()}`);
    },
    250,
  );

  return (
    <div className={styles.container}>
      <Search className={styles.searchIcon} />
      <input
        aria-label={label}
        onChange={handleSearch}
        placeholder={placeholder}
        className={styles.input}
        defaultValue={searchParams.get('s')?.toString()}
      />
    </div>
  );
};

export default SearchWrapper;
