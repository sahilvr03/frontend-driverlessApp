
import ProductSidebar from "@/app/components/ProductpageComponents/productsidebar/page";
import MainProductList from "@/app/components/ProductpageComponents/MainProductList/page";
import ProtectedRoute from "@/app/protectedRoute/protectedRoute";

const ProductPage = () => {

  

 
  return (<ProtectedRoute allowedRoles={['user','admin']}>
    
      <div>
      
        <div className="flex">
          {/* Sidebar */}
          <ProductSidebar/>

          {/* Main Content */}
          <main className="flex-1 p-6">


            {/* Top Filters and Search */}
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="flex space-x-4">
                <select className="border border-gray-300 rounded-md px-4 py-2">
                  <option>Type</option>
                </select>
                <select className="border border-gray-300 rounded-md px-4 py-2">
                  <option>Topic</option>
                </select>
                <select className="border border-gray-300 rounded-md px-4 py-2">
                  <option>Year</option>
                </select>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="search here ..."
                  className="border border-gray-300 rounded-md px-4 py-2 pr-10"
                />
                <button className="absolute right-2 top-2 text-green-500">🔍</button>
              </div>
            </div>

            {/* Products List */}
           <MainProductList/>
          </main>
        </div>
      </div>
      </ProtectedRoute>
  );
};

export default ProductPage;
