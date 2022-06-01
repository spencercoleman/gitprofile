import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../../utils/gitHubColors';

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageStarsChart = ({isDarkTheme, username, repos}) => {
    const LIMIT = 10;
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

    const topLanguageData = Object.entries(languageUseData).sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    }).slice(0, LIMIT);

    topLanguageData.forEach(language => {
        const languageName = language[0];
        if (colors.hasOwnProperty(languageName)) {
            if (colors[languageName].color !== null) {
                languageColors.push(colors[languageName].color);
            }
            else {
                languageColors.push('#ccc');
            }
        }
        else {
            languageColors.push('#ccc');
        }
    })

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
        labels: topLanguageData.map(language => language[0]),
        datasets: [
          {
            label: 'Languages Used',
            data: topLanguageData.map(language => language[1]),
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

export default LanguageStarsChart;