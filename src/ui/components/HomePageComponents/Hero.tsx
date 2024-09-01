import { MyChart } from "./Chart";

export const Hero = () => {
    const ingresosData = [500, 750, 600, 800, 650, 900, 1000, 1100];


    return (
        <div className="flex flex-wrap absolute top-[20vh] justify-center gap-10">
            <div className="bg-rose-50 h-[35vh] p-8 rounded-l-xl">
                <h2 className="text-6xl text-rose-500 font-semibold text-center">Ingresos: </h2>
                <div className="flex gap-3 justify-center">
                    <h3 className="relative top-8 text-8xl font-medium">1.052.500</h3>
                    <span className="relative top-24 text-5xl font-bold">COP</span>
                </div>
            </div>
            <div className="bg-rose-50 h-[35vh] p-8 rounded-r-xl">
                <h2 className="text-6xl text-rose-500 font-semibold text-center">Gastos: </h2>
                <div className="flex gap-3 justify-center">
                    <h3 className="relative top-8 text-8xl font-medium">1.052.500</h3>
                    <span className="relative top-24 text-5xl font-bold">COP</span>
                </div>
            </div>

            <div className="w-[30vw] bg-rose-50 h-[44vh] rounded-l-xl justify-center flex">
                <MyChart chartData={ingresosData} />
            </div>
            <div className="w-[30vw] bg-rose-50 h-[44vh] rounded-r-xl justify-center flex">
                <MyChart chartData={ingresosData} />
            </div>
        </div>
    );
};
