export const ChartHistory: React.FC = () => {
  return (
      <div className="flex justify-center items-center h-[70vh] mt-12 px-4">
          <div className="w-full sm:w-4/5 md:w-4/4 lg:w-2/3 h-full rounded-3xl shadow-2xl overflow-auto">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center">
                      <div>
                          <h2 className="font-semibold text-sm sm:text-base md:text-lg">Fecha de compra</h2>
                          <p className="mt-1 font-light text-xs sm:text-sm md:text-base">23/09/2024</p>
                      </div>
                      <div>
                          <h2 className="font-semibold text-sm sm:text-base md:text-lg">Identificación de compra</h2>
                          <p className="mt-1 font-light text-xs sm:text-sm md:text-base">#12345</p>
                      </div>
                      <div>
                          <h2 className="font-semibold text-sm sm:text-base md:text-lg">Productos</h2>
                          <p className="mt-1 font-light text-xs sm:text-sm md:text-base">Lechona (1), Carne (4)</p>
                      </div>
                      <div>
                          <h2 className="font-semibold text-sm sm:text-base md:text-lg">Valor total</h2>
                          <p className="mt-1 font-light text-xs sm:text-sm md:text-base">$100.000</p>
                      </div>
                  </div>

                  <div className="border-b border-gray-600 my-4"></div>


                  {[...Array(5)].map((_, index) => (
                      <div key={index}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center mt-4">
                              <div>
                                  <h2 className="font-semibold text-sm sm:text-base md:text-lg">Fecha de compra</h2>
                                  <p className="font-light text-xs sm:text-sm md:text-base">23/09/2024</p>
                              </div>
                              <div>
                                  <h2 className="font-semibold text-sm sm:text-base md:text-lg">Identificación de compra</h2>
                                  <p className="font-light text-xs sm:text-sm md:text-base">#12345</p>
                              </div>
                              <div>
                                  <h2 className="font-semibold text-sm sm:text-base md:text-lg">Productos</h2>
                                  <p className="font-light text-xs sm:text-sm md:text-base">Lechona (1), Carne (4)</p>
                              </div>
                              <div>
                                  <h2 className="font-semibold text-sm sm:text-base md:text-lg">Valor total</h2>
                                  <p className="font-light text-xs sm:text-sm md:text-base">$100.000</p>
                              </div>
                          </div>
                          <div className="border-b border-gray-600 my-4"></div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};
