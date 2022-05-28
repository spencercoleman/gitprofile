import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../../utils/gitHubColors';

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageStarsChart = ({isDarkTheme, repos}) => {
    const languageUseData = {};
    const languageColors = [];

    repos.forEach(repo => {
        const language = repo.language === null ? 'Other' : repo.language;
        if (!languageUseData.hasOwnProperty(language)) {
            languageUseData[language] = repo.stargazers_count;
        }
        else {
            languageUseData[language] += repo.stargazers_count;
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
                        align: 'end',
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

    return (
        <div className="chart-container">
            <Doughnut options={options} data={data} />
        </div>
    );
}

export default LanguageStarsChart;