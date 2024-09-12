<template>
    <section class="banner">
        <div class="container">
            <p>Reduceri mari</p>
            <h2> Obțineți până la 30% reducere la toate ceasurile</h2>
            <router-link to="/shop" aria-label="Cumpara acum">
                <button aria-label="Exploreaza acum">Exploreaza acum</button>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "BannerSection",
};
</script>

<style scoped>
.banner {
    text-align: center;
    min-height: 25vh;
    background-image: url("https://raw.githubusercontent.com/Oluwafemi21/BuyIt/master/src/assets/images/banner/b2.webp");
    background-size: cover;
    color: white;
    display: grid;
    place-items: center;
    padding-block: 40px;
}

p {
    padding-block: 1.4rem;
    font-size: 2rem;
    color: white;
}

.banner button {
    margin-top: 20px;
    padding: 14px 30px;
    letter-spacing: 0.5px;
    background-color: white;
    border: 2px solid white;
    font-size: 1.8rem;
    color: #060f1e;
}

.banner button:hover {
    background-color: transparent;
    color: white;
}

@media (max-width: 599px) {
    p {
        font-size: 2.8rem;
    }
}
</style>