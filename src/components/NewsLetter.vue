<template>
    <section class="newsletter">
        <div class="container">
            <div class="newsletter-container">
                <div class="newsletter-heading">
                    <h3>Abonați-vă la cardurile noastre informative</h3>
                    <p>
                        Pentru a fi la curent cu noile noastre sosiri și
                        <span>cadouri cu cupoane.</span>
                    </p>
                </div>
                <form>
                    <input type="email" placeholder="Email" />
                    <button>Abonati-va</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    nume: "NewsLetter",
};
</script>

<style scoped>
.newsletter {
    display: flex;
    justify-content: center;
    background-color: var(--dim-blue);
    color: white;
    min-height: 27vh;
}

.newsletter-heading p {
    color: white;
}

.newsletter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
}

.newsletter-container p span {
    color: #05d3ee;
}

form {
    width: 40%;
    position: relative;
    margin-inline: auto;
    display: flex;
}

form input {
    width: 100%;
    padding: 1.6rem 2rem;
    font-size: 1.6rem;
    border-radius: 6px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: none;
    outline: none;
}

form button {
    padding: 1.5rem 2.6rem;
    font-size: 1.7rem;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    font-weight: 500;
    color: white;
    background-color: var(--dark-green);
}

form button:hover {
    background-color: var(--grey);
}

@media (max-width: 999px) {
    .newsletter {
        text-align: center;
    }
    .newsletter-container {
        justify-content: center;
    }
    form {
        width: 100%;
    }
}
</style>