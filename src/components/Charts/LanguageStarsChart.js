import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut,  } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageStarsChart = ({repos}) => {
    const languageUseData = {};

    repos.forEach(repo => {
        const language = repo.language === null ? 'Other' : repo.language;
        if (!languageUseData.hasOwnProperty(language)) {
            languageUseData[language] = repo.stargazers_count;
        }
        else {
            languageUseData[language] += repo.stargazers_count;
        }
    });

    const options = {
        plugins: {
            title: {
                display: false
            },
            legend: {
                display: false
            }
        },
        responsive: true
    };

    const data = {
        labels: Object.keys(languageUseData),
        datasets: [
          {
            label: 'Languages Used',
            data: Object.values(languageUseData),
            backgroundColor: ['transparent'],
            borderColor: [],
            borderWidth: 1
          }
        ]
    };

    return (
        <div className="chart">
            <h2>Stars per Language</h2>
            <hr></hr>
            <div className="chart-container">
                <div>
                    <Doughnut options={options} data={data} />
                </div>
            </div>
        </div>
    );
}

export default LanguageStarsChart;