import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";
import { getProductById, listProducts } from "@/lib/products";

interface ProductPageProps {
  params: { id: string };
}


export const dynamic = "force-dynamic";
export const revalidate = 0; // add this line

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  const products = await listProducts();
  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return <ProductDetailClient product={product} related={related} />;
}
