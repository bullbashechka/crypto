import './styles.css';

const FilterBlock = () => {
  const [value, setValue] = useState('');
  return (
    <div className="filter-block">
      <input
        onChange={event}
        value={value}
        className="input"
        type="text"
        placeholder="bitcoin"
      />
    </div>
  );
};

export default FilterBlock;
