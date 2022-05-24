import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut,  } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageChart = ({repos}) => {
    const languageUseData = {};

    repos.forEach(repo => {
        const language = repo.language === null ? 'Other' : repo.language;
        if (!languageUseData.hasOwnProperty(language)) {
            languageUseData[language] = 1;
        }
        else {
            languageUseData[language] += 1;
        }
    });

    const options = {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
        },
        responsive: true,
    }

    const data = {
        labels: Object.keys(languageUseData),
        datasets: [
          {
            label: 'Languages Used',
            data: Object.values(languageUseData),
            backgroundColor: ['transparent'],
            borderColor: [],
            borderWidth: 1,
          },
        ],
    };

    return (
        <div>
            <h2>Languages Used</h2>
            <Doughnut options={options} data={data} />
        </div>
    );
}

export default LanguageChart;