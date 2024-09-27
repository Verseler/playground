import { useGetAllProductsQuery } from "../redux/service/productsData";

function AllProducts() {
  const { data, currentData } = useGetAllProductsQuery();

  return (
    <div>
      {data?.products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}

export default AllProducts;
