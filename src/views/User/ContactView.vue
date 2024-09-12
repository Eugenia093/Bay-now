<template>
    <main-header />
    <sub-header
        heading="#contacte"
        subHeading="Cu liniile noastre de asistență telefonică 24/7, vă vom ajuta."
    />
    <div class="container">
        <div class="map-section">
            <div class="map-details">
                <span>Luati legatura</span>
                <h3>Vizitați una dintre locațiile magazinelor noastre sau contactați-ne astăzi</h3>
                <h4>Sediul central</h4>
                <ul>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-map"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                            />
                        </svg>
                        <p>Chisinau, Mihai Viteazu 23</p>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-envelope"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                            />
                        </svg>
                        <p>buy-now@gmail.com</p>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-telephone-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                            />
                        </svg>
                        <p>+373 67748308</p>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-clock"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                            />
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                            />
                        </svg>
                        <p>Luni si Vineri: 08:00-20:00</p>
                    </li>
                </ul>
            </div>
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.0788659864497!2d28.823583975851868!3d47.038683227023014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97db0913b9973%3A0x91f1cfbda3416304!2sStrada%20Mihai%20Viteazul%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sro!2s!4v1723838597870!5m2!1sro!2s"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>

        <div class="form-section">
            <form>
                <span>Lasati un mesaj</span>
                <h3>Ne place sa te auzim</h3>

                <div class="form-control">
                    <input type="text" placeholder="Nume/Prenume" required />
                </div>
                <div class="form-control">
                    <input type="email" placeholder="E-mail" required />
                </div>
                <div class="form-control">
                    <input type="text" placeholder="Subiect" required />
                </div>
                <div class="form-control">
                    <textarea
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Mesajul tau"
                    ></textarea>
                </div>
                <action-button btnvalue="Trimite" />
            </form>
            <div class="employers-section">
                <div
                    class="employer"
                    v-for="(employer, index) in employers"
                    :key="index"
                >
                    <div class="employer-img">
                        <img :src="employer.image" :alt="employer.name" />
                    </div>
                    <div class="employer-info">
                        <h4>{{ employer.name }}</h4>
                        <p>{{ employer.position }}</p>
                        <p>Telefon: {{ employer.phone }}</p>
                        <p>Email: {{ employer.email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, ActionButton, MainHeader, MainFooter },
    name: "ContactView",
    data() {
        return {
            employers: [
                {
                    image: "data:image/jpeg;base64,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",
                    name: "Mark Muntean",
                    position: "Sef de executie",
                    phone: "+373 67748308",
                    email: "contact@gmail.com",
                },
                {
                    image: "data:image/jpeg;base64,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",
                    name: "Mihai Olaru",
                    position: "Manager senior de marketing",
                    phone: "+373 67748308",
                    email: "contact@gmail.com",
                },
                {
                    image: "data:image/jpeg;base64,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",
                    name: "Mihaela Barba",
                    position: "Manager de depozit",
                    phone: "+373 67748308",
                    email: "contact@gmail.com",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Map */
.map-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3rem;
}

.map-details {
    width: 40%;
}

span {
    text-transform: uppercase;
    font-size: 1.5rem;
}

.map-details h3 {
    padding-block: 2rem;
    font-size: 2.7rem;
    line-height: 35px;
}

.map-details h4 {
    font-size: 1.6rem;
    padding-bottom: 1rem;
}

li {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.map {
    width: 55%;
    height: 400px;
}

.map iframe {
    width: 100%;
    height: 100%;
}

/* Form */

.form-section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-block: 5rem;
    gap: 3rem;
}

form {
    width: 70%;
}

form h3 {
    padding-block: 2rem;
}

.form-control {
    padding-bottom: 2rem;
}
input,
textarea {
    width: 100%;
    border: 1px solid lightgrey;
}

input:hover,
textarea:hover {
    outline: none;
    border: 1px solid black;
}

.employer {
    display: flex;
    gap: 2rem;
    padding-bottom: 2.5rem;
}

.employer-img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
}

.employer-img img {
    max-width: 100%;
    height: auto;
}

.employer-info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.employer-info h4 {
    font-weight: 500;
    font-size: 2rem;
}

.employer-info p {
    padding: 0;
    font-size: 1.5rem;
}

@media (max-width: 799px) {
    form {
        width: 50%;
    }
}
@media (max-width: 599px) {
    .map-section {
        flex-direction: column;
    }
    .map-details,
    .map,
    form {
        width: 100%;
    }

    form h3 {
        font-size: 2.7rem;
    }

    .form-section {
        flex-direction: column;
        gap: 3rem;
    }
}
</style>