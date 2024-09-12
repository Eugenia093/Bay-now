<template>
    <main-header />
    <sub-header heading="#CineNoiSuntem" subHeading="Povestea noastra" />
    <div class="container">
        <article>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CBGNovKb7_FTc8CrsJ9UloN3GHgFlBVbsw&s"
                class="about-img"
                alt="Cine noi suntem"
                />
                <div class="about-text">
                    <h1>Cine noi suntem?</h1>
                    <p>
                        Noi suntem cel mai bun magazin online pe piata din anul 2005.
                        Ne mândrim cu prima abordare a timpului de livrare și a satisfacției clienților.
                         Platforma noastră vă pune în legătură cu cei mai buni furnizori de servicii din zona dumneavoastră. 
                        Suntem o echipă de persoane tinere și pasionate care sunt dedicate să vă ofere cele mai bune servicii posibile.
                    </p>
                </div>
        </article>
        <div class="video-section">
            <h1>Descarca <a href="/">Aplicatia</a></h1>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFDyLvBYszZaHXWdfAIFIFI_foMHxUnQP6Q&s"
            alt=""
            class="video-baner"
            />
        </div>
    </div>
    <service-section />
    <main-footer />
</template>

<script>
import SubHeader from '@/components/SubHeader.vue';
import ServiceSection from '@/components/home_components/ServiceSection.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    components: { SubHeader, ServiceSection, MainHeader, MainFooter },
    name: "AboutView"
};
</script>

<style scoped>
article {
    display: flex;
    gap: 4rem;
    margin-bottom: 2.5rem;
}

.about-img {
    height: 50vh;
    width: 50%;
    object-fit: cover;
}

.about-text p {
    line-height: 25px;
}

.video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 3rem;
    text-align: center;
}

.video-banner {
    height: 60vh;
    width: 60%;
    border-radius: 10px;
    margin-top: 2rem;
}

.video-section a {
    text-decoration: underline;
    color: var(--dark-blue);
}

@media (max-width: 499px) {
    article {
        flex-direction: column;
    }
    .about-img,
    .about-text,
    .video-banner {
        width: 100%;
    }

    h1 {
        font-size: 4rem;
    }
}
</style>