import Select from 'react-select';
import './styles.css';

function Filter() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <header className="filter-container base-card">
      <Select
        options={options}
        isClearable
        placeholder="Loja"
        classNamePrefix="store-filter-select"
      />
    </header>
  );
}

export default Filter;
