import { useState, useEffect } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../context/CartContext";
import Loading from "../components/Loading";

const Home = () => {
  const { data: allProducts, loading, error, getProducts } = useFakestoreApi();
  const { state: { cart } } = useCartContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (allProducts === null || allProducts === undefined) {
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, allProducts]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="text-black p-4">
      <div className="grid grid-cols-2 gap-2">
      <h1 className="text-2xl font-bold mb-4">Inicio</h1>
      {loading ? <Loading /> : null}
      {error ? <span>Hubo un error</span> : null}
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          Buscar productos:
        </label>
        <input
          type="text"
          id="search"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Ingresa el nombre del producto"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      </div>
      <ul className="grid grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            showRemoveButton={cart.some((item) => item.id === product.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
