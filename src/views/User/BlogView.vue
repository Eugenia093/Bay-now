<template>
    <main-header />
    <sub-header heading="#Blog" subHeading="Citiți cele mai recente postări pe blog" />
    <div class="container">
        <blog-posts
        v-for="(blog, index) in blogs"
        :key="index"
        :data="blog.data"
        :image_url="blog.img"
        :title="blog.title"
        :content="blog.content"
        />
    </div>

    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, BlogPosts, MainHeader, MainFooter },
    name: "BlogView",
    data() {
        return {
            blogs: [
                {
                    date: "13/01",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59lCtMJ565Y9NtFL7uh31PBCUYeVZs17lvQ&s",
                    priority: "high",
                    title: "Cum sa alegi tinuta pentru eveniment",
                    content:
                        "Respecta codul vestimentar, daca exista In cazul in care mergi la un eveniment unde exista cod vestimentar, ar fi bine sa il repecti pe cat posibil.Opteaza pentru o tinuta clasica...",
                },
                {
                    date: "13/04",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyTsm3OGx1FtEJpvQ1vyjVnrWVS1HSAPc-Q&s",
                    title: "Cum sa devii stilata",
                    content:
                        "Studiaza revistele de moda. Femeile care doresc sa fie cunoscute ca adevarate dive ce nu gresesc niciodata din punct de vedere vestimentar, ...",
                },
                {
                    date: "12/01",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGO8MbUw6Gjx82WO35cGeAOJ8X5XmeJeF1Q&s",
                    title: "Ce trebuie sa ai in garderopa ta",
                    content:
                        "Cred că nu o sigură dată ai auzit că în orice garderobă, baza este esențială. Baza semnifică o serie de haine, accesorii și încălțăminte de ...",
                },
                {
                    date: "16/01",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PqKbD85tfUf9uDtpEo8GDZcbLCT3XLE3hg&s",
                    title: "Alege incaltamintea potrivita",
                    content:
                        "Ca regulă principală, mărimea corectă a încălțămintei este aceea care oferă suficient spațiu în zone degetelor, astfel încât să-ți poți mișca în voie picioarele în timp ce porți anumite perechi de încălțări...",
                },
                {
                    date: "06/07",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4uARcmeXONSN665apJmVWqBFsGregCgfqw&s",
                    title: "Mixuri de culori in 2024",
                    content:
                        "In topul culorilor populare pentru primavara din 2024 se afla “Greenery”, “Flame”, “Roz Quartz”, “Giallo”, “Peach Fuzz” si “Pink Yarrow”. Aceste culori indraznete sunt perfecte pentru a adauga un strop de prospetime garderobei tale...",
                },
            ],
        };
    },
};
</script>