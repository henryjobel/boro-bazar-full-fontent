import SectionHeader from '@components/common/section-header';
import ProductCardAlpine from '@components/product/product-cards/product-card-alpine';
import ProductCardOak from '@components/product/product-cards/product-card-oak';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import { Product } from '@framework/types';
import Alert from '@components/ui/alert';
import cn from 'classnames';

interface ProductsProps {
  lang: string;
  sectionHeading: string;
  sectionSubHeading?: string;
  headingPosition?: 'left' | 'center';
  className?: string;
  products?: Product[] | any; // API object safe
  loading: boolean;
  error?: string;
  limit?: number;
  uniqueKey?: string;
  variant?: 'alpine' | 'oak';
}

const ProductsGridBlock: React.FC<ProductsProps> = ({
  sectionHeading,
  sectionSubHeading,
  headingPosition = 'center',
  className = 'mb-12 lg:mb-14 xl:mb-16',
  products,
  loading,
  error,
  limit = 10,
  uniqueKey = 'product',
  variant = 'alpine',
  lang,
}) => {
  // 🔒 Normalize products (array না হলেও safe)
  const productList: Product[] = Array.isArray(products)
    ? products
    : products?.data && Array.isArray(products.data)
    ? products.data
    : [];

  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        sectionSubHeading={sectionSubHeading}
        headingPosition={headingPosition}
        lang={lang}
      />

      <div
        className={cn(
          'grid',
          variant === 'alpine' && {
            'grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 md:gap-4 2xl:gap-5':
              true,
          },
          variant === 'oak' && {
            'grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 md:gap-4 2xl:gap-5':
              true,
          },
        )}
      >
        {/* ❌ Error */}
        {error && <Alert message={error} className="col-span-full" />}

        {/* ⏳ Loading */}
        {!error && loading && productList.length === 0 &&
          Array.from({ length: limit }).map((_, idx) => (
            <ProductCardLoader
              key={`${uniqueKey}-loader-${idx}`}
              uniqueKey={`${uniqueKey}-loader-${idx}`}
            />
          ))}

        {/* ✅ Products */}
        {!error && !loading &&
          productList.map((product: Product) =>
            variant === 'oak' ? (
              <ProductCardOak
                key={`${uniqueKey}-${product.id}`}
                product={product}
                lang={lang}
              />
            ) : (
              <ProductCardAlpine
                key={`${uniqueKey}-${product.id}`}
                product={product}
                lang={lang}
              />
            ),
          )}
      </div>
    </div>
  );
};

export default ProductsGridBlock;
