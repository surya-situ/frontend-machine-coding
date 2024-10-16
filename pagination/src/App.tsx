import { useEffect, useState } from "react";

interface product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number
}

function App() {

  const [products, setProducts] = useState<product []>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const startIndex = (page - 1) * itemsPerPage;
  const productLists = products.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();

        if(data && data.products) {
          setProducts(data.products)
        }
      } catch (error) {
        console.error(error)
      }
    };

    fetchProducts();
  }, []);

  const selectedPageHandler = (newPage: number) => {
    setPage(newPage)
  };

  return (
    <div className='font-mono m-10'>
     {
      products.length > 0 && <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-0 m-5'>
        {
          productLists.map((item) => {
            return <div className="h-64 p-5 bg-slate-100 text-center cursor-pointer rounded-md grid grid-cols-2" key={item.id}>
              <img className="h-40" src={item.thumbnail} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description.slice(0, 40)}...</p>
                <p>$ {item.price}</p>
              </div>
            </div>
          })
        }
      </div>
     }

      <div className="flex justify-center">
          {
            products.length > 0 && <div>
              <button disabled={page == 1} className="bg-slate-300 p-2 mx-2 rounded-md"> &lt; </button>
              {
                [...Array(Math.ceil(products.length / itemsPerPage))].map((_, i) => {
                  return <button onClick={() => selectedPageHandler(i + 1)} className="bg-slate-300 p-2 mx-2 rounded-md" key={i}>{i + 1}</button>
                })
              }
              <button className="bg-slate-300 p-2 mx-2 rounded-md"> &gt; </button>
            </div>
          }
        </div>
    </div>
  )
}

export default App
