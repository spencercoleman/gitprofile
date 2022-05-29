import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../../utils/gitHubColors';

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageChart = ({isDarkTheme, username, repos}) => {
    const languageUseData = {};
    const languageColors = [];

    repos.forEach(repo => {
        const language = repo.language === null ? 'Other' : repo.language;
        if (!languageUseData.hasOwnProperty(language)) {
            languageUseData[language] = 1;
        }
        else {
            languageUseData[language] += 1;
        }
    });

    for (let language in languageUseData) {
        if (colors.hasOwnProperty(language)) {
            if (colors[language].color !== null) {
                languageColors.push(colors[language].color);
            }
            else {
                languageColors.push('#ccc');
            }
        }
        else {
            languageColors.push('#bbb');
        }
    }

    const options = {
        plugins: {
            title: {
                display: false
            },
            legend: {
                position: 'right',
                labels: {
                    font: {
                        family: 'Barlow',
                        size: 15,
                        align: 'end'
                    },
                    color: isDarkTheme ? '#c0caf5' : '#0f0f14'
                }
            }
        }
    };

    const data = {
        labels: Object.keys(languageUseData),
        datasets: [
          {
            label: 'Languages Used',
            data: Object.values(languageUseData),
            backgroundColor: languageColors,
            borderWidth: 0,
          }
        ]
    };

    const content = repos.length ? <Doughnut options={options} data={data} /> : <p>{username} doesn't have any language data.</p>;

    return (
        <div className="chart-container">
            {content}
        </div>
    );
}

export default LanguageChart;