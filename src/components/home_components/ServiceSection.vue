<template>
    <section class="services">
    <h2>Servicii</h2>
    <div class="service-container">
        <service-card name="Transport gratuit">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjtzAcs-wEzg-RNOOp735N-DIeceMDGbPRw&s" 
             alt="Transport gratuit">
        </service-card>

        <service-card name="Comanda usor">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lqJcPFzby4ils3O6sQV5gZuAy24rhuyj9Q&s"
                 alt="Comanda usor" />
            </service-card>
            <service-card name="Economisesti">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-9X9Gg-1SxhWn9xbKqZ2sm1uKaySqZDiNg&s" 
                alt="Economisesti" />
            </service-card>
            <service-card name="Promotii">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_iBK2cCgEKBm6T4DTKTgwUmU2t8E4SVYZA&s" 
                alt="Promotii" />
            </service-card>
            <service-card name=" 24/7 Suport">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVhxTDVZGtLCLWo3pDzi1UJ1gKlhpLl_Uqg&s"
                 alt="24/7 Suport"
            /></service-card>
            <service-card name="Livrare la domiciliu">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJzV7_SS6q7ApQGy-0DD87752_UcG8aVbnQ&s" 
                alt="Livrare la domiciliu" />
            </service-card>
       </div>
    </section>
</template>


<script>
import ServiceCard from "@/components/home_components/cards/ServiceCard.vue";
export default {
    name: "ServiceSection",
    components: {
        "service-card": ServiceCard,
    },
};
</script>

<style scoped>
.services {
    text-align: center;
}

.services h2 {
    margin-bottom: 2rem;
}

.service-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

img {
    height: 100px;
    width: 100px;
}

@media (max-width: 399px) {
    .service-container {
        padding: 2rem;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: initial;
    }
}
</style>
