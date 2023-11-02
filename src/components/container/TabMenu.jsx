import React, { useState } from 'react';

const TabMenu = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabs = [
        { label: 'Tab 1', content: 'This is the content for Tab 1' },
        { label: 'Tab 2', content: 'This is the content for Tab 2' },
        { label: 'Tab 3', content: 'This is the content for Tab 3' },
    ];

    return (
        <div>
                    <img src="logo.png" alt="logo" style={{ height: '50px', marginRight: '20px' }} />
                    <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                        {tabs.map((tab, index) => (
                            <li key={index} onClick={() => handleTabClick(index)} style={{ marginRight: '20px', cursor: 'pointer' }}>
                                {tab.label}
                            </li>
                        ))}
                    </ul>
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
            <div>{tabs[activeTab].content}</div>
        </div>
    );
};

export default TabMenu;
