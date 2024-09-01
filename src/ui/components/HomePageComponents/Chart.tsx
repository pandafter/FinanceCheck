import { Chart, ChartData, ChartType, registerables } from "chart.js";
import { useRef, useEffect } from "react";

// Register Chart.js components
Chart.register(...registerables);

interface Props {
    chartData: number[];
}

export const MyChart = ({ chartData }: Props) => {
    const chartRef = useRef<Chart | null>(null);

    const formatData = (data: number[]): ChartData<ChartType> => ({
        labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
        datasets: [
            {
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(99, 132, 255, 0.2)',
                    'rgba(162, 235, 54, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(99, 132, 255, 1)',
                    'rgba(162, 235, 54, 1)',
                ],
                borderWidth: 1,
            },
        ],
    });

    const canvasCallback = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (ctx && !chartRef.current) {
            chartRef.current = new Chart(ctx, {
                type: "polarArea",
                data: formatData(chartData),
                options: { 
                    responsive: true, 
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    weight: "bold",
                                    
                                },
                            }
                        }
                    }
                },
            });
        }
    };

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.data = formatData(chartData);
            chartRef.current.update();
        }
    }, [chartData]);

    useEffect(() => {
        return () => {
            chartRef.current?.destroy();
            chartRef.current = null;
        };
    }, []);

    return (
        <div className="self-center w-1/2">
            <div className="overflow-hidden">
                <canvas ref={canvasCallback}></canvas>
            </div>
        </div>
    );
};
