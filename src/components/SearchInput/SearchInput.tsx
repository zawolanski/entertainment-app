'use client';

import { ChangeEvent, ElementRef, useCallback } from 'react';

import Search from '@/icons/Search';

import styles from './searchInput.module.scss';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const SearchInput = ({ label, onChange, value, placeholder }: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<ElementRef<'input'>>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div className={styles.container}>
      <Search className={styles.searchIcon} />
      <input
        aria-label={label}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
