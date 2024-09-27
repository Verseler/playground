import { useGetProductByIdQuery } from "../redux/service/productsData";
function SpecificProduct() {
  const { data, isError, isLoading } = useGetProductByIdQuery(1);
  const imageSrc: string = data?.images[0];
 
  if (isError) return "Error occur ...";
  if (isLoading) return "loading...";

  return (
    <div>
      <h1>{data?.id}</h1>
      {imageSrc ? <img src={imageSrc} /> : <span>Can't load image :(</span>}
    </div>
  );
}

export default SpecificProduct;
