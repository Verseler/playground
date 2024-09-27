import { useAddNewProductMutation } from "../redux/service/productsData";

function AddNewProduct() {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (error) return <h1>Error</h1>;
  if (isLoading) return <h1>loading...</h1>;

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
      };

      await addNewProduct(newProductData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
}

export default AddNewProduct;
