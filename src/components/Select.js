import React from 'react';

const Select = ({
    value,  
    name,
    onChange,
    label,
    options,  
}) => {
    
      return (
        <div className="flex flex-col mb-5">
            <div 
              className="text-xs mb-1 font-semibold"
            >{label}</div>
          {options.map(option => (
            <label key={option.value} className="flex items-center mb-1 text-sm">
              <input
                type="checkbox"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      );
    
};

export default Select;


