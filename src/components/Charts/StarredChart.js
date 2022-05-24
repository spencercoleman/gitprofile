import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StarredChart = ({repos}) => {
    const starredRepoData = {};
    const starryRepos = repos.sort((a, b) => (b.stargazers_count - a.stargazers_count)).slice(0, 5);

    starryRepos.forEach(repo => {
        if (!starredRepoData.hasOwnProperty(repo.name)) {
            starredRepoData[repo.name] = repo.stargazers_count;
        }
        else {
            starredRepoData[repo.name] += repo.stargazers_count;
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
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    callback: (value, index, values) => {
                    } 
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }

    const data = {
        labels: Object.keys(starredRepoData),
        datasets: [
            {
                data: Object.values(starredRepoData),
                backgroundColor: 'transparent',
                borderColor: '',
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="chart">
            <h2>Most Starred Repos</h2>
            <hr></hr>
            <div className="chart-container">
                <div>
                    <Bar options={options} data={data} />
                </div>
            </div>
        </div>
    );
}

export default StarredChart;