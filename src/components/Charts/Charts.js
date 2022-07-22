import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StyledCharts from '../../styles/StyledCharts';
import LanguageChart from './LanguageChart';
import LanguageStarsChart from './LanguageStarsChart';
import 'react-tabs/style/react-tabs.css';

const Charts = ({isDarkTheme, username, repos}) => {
    return (
        <StyledCharts>
            <Tabs>
                <TabList className="react-tabs__tab-list">
                    <Tab>Languages Used</Tab>
                    <Tab>Stars per Language</Tab>
                </TabList>
                <TabPanel>
                    <LanguageChart isDarkTheme={isDarkTheme} username={username} repos={repos} />
                </TabPanel>
                <TabPanel>
                    <LanguageStarsChart isDarkTheme={isDarkTheme} username={username} repos={repos} />
                </TabPanel>
            </Tabs>
        </StyledCharts>
    );
}

export default Charts;