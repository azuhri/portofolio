import React from 'react';

const Dropdown = (props) => {
  const { title = 'click', children } = props;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        {title}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
