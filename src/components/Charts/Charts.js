import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LanguageChart from './LanguageChart';
import StarredChart from './StarredChart';
import LanguageStarsChart from './LanguageStarsChart';
import './Charts.css';
import 'react-tabs/style/react-tabs.css';

const Charts = ({repos}) => {
    return (
        <Tabs className="Charts">
            <TabList>
                <Tab>Languages Used</Tab>
                <Tab>Stars per Language</Tab>
                {/* <Tab>Most Starred Repos</Tab> */}
            </TabList>
            <TabPanel>
                <LanguageChart repos={repos} />
            </TabPanel>
            <TabPanel>
                <LanguageStarsChart repos={repos} />
            </TabPanel>
            {/* <TabPanel>
                <StarredChart repos={repos} />
            </TabPanel> */}
        </Tabs>
    );
}

export default Charts;