import { ProductOne } from "./components/ProductOne";

export default function App() {
  let products = [
    {
      id: 1,
      title: "Product 1",
      desc: "This is Product 1"
    },
    {
      id: 2,
      title: "Product 2",
      desc: "This is Product 2"
    },
    {
      id: 3,
      title: "Product 3",
      desc: "This is Product 3"
    },
    {
      id: 4,
      title: "Product 4",
      desc: "This is Product 4"
    }
  ]
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.map((product) => <ProductOne {...product} />)}
    </div>
  )
}