<template>
    <section>
        <div class="container">
            <div class="ad1">
                <advert-card
                advertText="Acestea sunt cele mai potrivite pentru barbati si femei"
                advertTitle="primavara/vara"
                buttonText="Afla mai multe"
                backgroundImage="first"
                />
                <advert-card
                advertText="Acestea sunt cele mai potrivite pentru evenimentul tau"
                advertTitle="evenimente"
                buttonText="Afla mai multe"
                backgroundImage="second"
                />
            </div>
            <div class="ad2">
                <advert-card
                advertText="Acestea sunt cele mai potrivite pentru sezonul cald"
                advertTitle="primavara/vara"
                backgroundImage="third"
                :haveButton="false"
                />
                <advert-card
                advertText="Acestea sunt cele mai potrivite pentru sezonul cald"
                advertTitle="primavara/vara"
                backgroundImage="fourth"
                :haveButton="false"
                />
                <advert-card
                advertText="Acestea sunt cele mai potrivite pentru sezonul cald"
                advertTitle="primavara/vara"
                backgroundImage="fifth"
                :haveButton="false"
                />
            </div>
        </div>
    </section>
</template>


<script>
import AdvertCard from './cards/AdvertCard.vue';

export default {
    components: { AdvertCard },
    name: "AdvertSection",
};

</script>

<style scoped>
.ad1,
.ad2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.ad2 {
    margin-top: 3rem;
    gap: 2rem;
}

@media (max-width: 670) {
    .ad1,
    .ad2 {
        flex-wrap: wrap;
        gap: 2rem;
    }
}
</style>
