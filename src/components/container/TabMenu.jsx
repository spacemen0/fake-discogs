
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TabMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => handleTabClick(index)}>
            {tab.label}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabMenu;
