import React from 'react';

import Body from './components/Body';

const App: React.FC = () => {
    return (
        <div className="bg-background dark:bg-dark-background text-black dark:text-white min-h-screen">
            <Body />
        </div>
    );
};

export default App;
