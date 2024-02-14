import Card from "./components/cardContent/frontPageContent";
import Header from "./components/main";
import Review from "./components/review";

type homeProps = {
  product: any;
};

export default function Home({ product }: homeProps) {
  console.log(product);
  return (
    <>
      <Header />
      <Card product={[product]} />
      <Review />
    </>
  );
}
