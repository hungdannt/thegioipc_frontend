import Container from "@components/ui/container";
import HeroSlider from "@containers/hero-slider-fullwidth";
import Layout from "@components/layout/layout";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { fetchFlashSaleProducts } from "@framework/product/get-all-flash-sale-products";
import { fetchCategories } from "@framework/category/get-all-categories";
import { fetchNewArrivalProducts } from "@framework/product/get-all-new-arrival-products";
import { fetchBrands } from "@framework/brand/get-all-brands";
import ProductsFeatured from "@containers/products-featured";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CategoryBlockIcon from "@containers/category-block-icon";
import SaleBannerGrid from "@containers/sale-banner-grid";
import ProductsFlashSaleCarousel from "@containers/product-flash-sale-carousel";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import SaleBannerWithProducts from "@containers/sale-banner-with-products";

export default function Home() {
  return (
    <>
      <Container>
        <HeroSlider />
        <SaleBannerGrid />
        <CategoryBlockIcon sectionHeading="Danh Mục Sản Phẩm" />
        <ProductsFeatured
          limit={4}
          variant="combined"
          sectionHeading="Sản Phẩm Nổi Bật"
        />
        {/* <ProductsFlashSaleCarousel sectionHeading="Sản Phẩm Giảm Giá" /> */}
        {/* <BannerCard
          key={`banner--key${banner.id}`}
          banner={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        /> */}
        <NewArrivalsProductFeed />
        {/* <SaleBannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
        /> */}
        {/* <BrandGridBlock
          sectionHeading="text-top-brands"
          limit={12}
          variant="6column"
        /> */}
        {/* <TestimonialCarousel sectionHeading="text-testimonial" /> */}
        {/* <SubscriptionWithBg /> */}
      </Container>
    </>
  );
}

Home.Layout = Layout;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.FLASH_SALE_PRODUCTS, { limit: 10 }],
    fetchFlashSaleProducts
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, { limit: 10 }],
    fetchCategories
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, { limit: 10 }],
    fetchNewArrivalProducts
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.BRANDS, { limit: 0 }],
    fetchBrands
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer"
      ]))
    },
    revalidate: 60
  };
};
