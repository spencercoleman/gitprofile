import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LanguageChart from './LanguageChart';
import StarredChart from './StarredChart';
import LanguageStarsChart from './LanguageStarsChart';
import './Charts.css';
import 'react-tabs/style/react-tabs.css';

const Charts = ({isDarkTheme, repos}) => {
    const theme = isDarkTheme ? 'dark' : 'light';
    
    return (
        <Tabs className={`Charts ${theme}`}>
            <TabList className={`react-tabs__tab-list ${theme}`} style={{borderBottom: `1px solid var(--${theme}-border-color)`}}>
                <Tab style={{borderRight: `1px solid var(--${theme}-border-color)`}}>Languages Used</Tab>
                <Tab>Stars per Language</Tab>
                {/* <Tab>Most Starred Repos</Tab> */}
            </TabList>
            <TabPanel>
                <LanguageChart isDarkTheme={isDarkTheme} repos={repos} />
            </TabPanel>
            <TabPanel>
                <LanguageStarsChart isDarkTheme={isDarkTheme} repos={repos} />
            </TabPanel>
            {/* <TabPanel>
                <StarredChart repos={repos} />
            </TabPanel> */}
        </Tabs>
    );
}

export default Charts;