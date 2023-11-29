import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loading from "../components/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="text-black p-4">
      <Link to="/" className="flex items-center mb-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center ml-auto">
          <FaArrowLeft className="mr-2" />
          Regresar
        </button>
      </Link>
      <div className="mx-auto bg-white shadow-md p-6">
        <div className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        </div>
        <div className="mb-4">
          <div className="grid grid-cols-5 gap-4 items-center">
          <div class="col-span-1">
          <img
              src={product.image}
              alt={product.title}
              className="rounded-md shadow-md max-h-40 object-cover mb-4"
            />
          </div>
            
            <div className="col-span-4">
              <p className="mb-4">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="text-gray-500 text-sm border-t-2 border-blue-500 pt-2">
          <p>
            Categoría: <strong>{product.category}</strong>
          </p>
          <p>
            Precio: <strong>${product.price.toFixed(2)}</strong>
          </p>
          <p>
            Valoración:{" "}
            <strong>
              {product.rating.rate} (de {product.rating.count} votos)
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
