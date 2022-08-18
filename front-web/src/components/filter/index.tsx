import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterData, Store } from '../../types';
import { requestBackend } from '../../utils/request';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  const handleChangeStore = (value: Store) => {
    const selectedStore = value as Store;
    onFilterChange({ store: selectedStore });
  };

  useEffect(() => {
    requestBackend({ url: '/stores' }).then((response) => {
      setSelectStores(response.data);
    });
  }, []);

  return (
    <header className="filter-container base-card">
      <Select
        options={selectStores}
        isClearable
        placeholder="Loja"
        classNamePrefix="store-filter-select"
        onChange={(value: Store | null) => handleChangeStore(value as Store)}
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
      />
    </header>
  );
}

export default Filter;
