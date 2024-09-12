<template>
    <section class="products">
        <h2>Sosiri noi</h2>
        <p class="highlight">Cele mai noi produse pe care le avem la reducere</p>
        <div class="container">
            <div class="product__container" v-if="newArrivals">
                <product-card
                    v-for="(product, index) in newArrivals"
                    :key="index"
                    :productId="product._id"
                    :productName="product.name"
                    :brand="product.brand"
                    :price="product.price"
                    :currency="product.currency"
                    :ratings="product.rating"
                    :image_url="product.images[0]"
                    :in_stock="product.in_stock"
                />
            </div>
            <product-preloader type="inline" v-else>
                Se incarca produsul...
            </product-preloader>
        </div>
    </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";
export default {
    name: "NewArrivals",
    components: {
        ProductCard,
        ProductPreloader,
    },
    props: ["newArrivals"],
};
</script>