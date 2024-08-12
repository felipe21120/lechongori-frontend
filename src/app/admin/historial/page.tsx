import { Title } from "@/components";
import { IoSearchOutline } from "react-icons/io5";
import { ChartHistory } from "./ui/ChartHistory";




export default function HistorialPage() {
  return (
    <section>
      <div className="flex justify-between items-center mx-4 sm:mx-8 lg:mx-20">
        <div className="w-1/2">
          <Title
            title="Historial de ventas"
            className="text-2xl font-bold"
          />
        </div>

        <div className="w-1/2 flex justify-end">
          <div className="relative mt-4 lg:mt-0 w-full max-w-xs">
            <IoSearchOutline size={15} className="absolute top-2 left-2" />
            <input
              type="text"
              placeholder="Filtrar por fecha"
              className="w-full rounded-2xl pl-10 py-1 pr-10 border text-sm border-gray-800 focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>
      </div>

      
      <ChartHistory />



    </section>



  );
}