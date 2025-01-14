<template>

    <div class="landing-page">
        <div class="ab-fold" @mousedown="initDrag($event)" @mousemove="drag($event)" @mouseup="endDrag()">

            <!-- IMAGES START -->
                <div class="image-popup-container hidden" id="juno" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/juno.png" alt="juno synthesizer">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="cog" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/cog.png" alt="bike cog">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="map-sofya" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/map-sofya.png" alt="map">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="me" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/me.png" alt="me">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="login-sofya" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/login-sofya.png" alt="login sofya">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="paula" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/paula.png" alt="pink bike">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="miam" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/miam.png" alt="fondue dish">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="support-sofya" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/support-sofya.png" alt="sofya support">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="hat" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/hat.png" alt="red hat">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="ipad-auticiel" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/ipad-auticiel.png" alt="ipad auticiel">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="dancehaul" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/dancehaul.png" alt="dancehaul snowboard">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="macbook-auticiel" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/macbook-auticiel.png" alt="macbook auticiel">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="pbasse" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="/images/landing-images/pbasse.png" alt="precision basse">
                    </div>
                </div>

            <!-- IMAGES END -->


            <h1 class="ab-fold-title desktop">
                <div class="presentation">
                    <div>Hi ! I am</div>
                    <div>Titouan Martin,</div>
                    <div>a {{ age }} years old</div>
                    <div>Paris based</div>
                </div>
                <div class="product-designer big-text">
                    <div>Product</div>
                    <div class="designer">Designer</div>
                </div>
            </h1>

            <h1 class="ab-fold-title mobile">
                <div class="text-block">                    
                    Hi ! I am Titouan Martin, a {{ age }} years old Paris based
                </div>
                <div class="soap product-designer text1">prod</div>
                <div class="soap product-designer text2">uct</div>
                <div class="soap product-designer text3">desig</div>
                <div class="soap product-designer text4">ner</div>
            </h1>
        </div>
        <div class="text-block">
            <div>I am a <span class="outlined">Product Designer</span> that also dabbles in <span class="outlined">Product Management</span> since {{ workingYears }} years.</div>
            <div class="about">I help teams to create and bring to life beautiful, intuitive and accessible digital products.</div>
            <div class="projects">Here are some projects I took a part in :</div>
            
            <NuxtLink to="/amikeo">
                <div class="project-container">
                    <div class="project-image-container">
                        <div class="project-background amikeo"></div>
                         <div class="project-image amikeo"></div>
                    </div>
                    <div class="big-text amikeo">amikeo</div>
                </div>
            </NuxtLink>

            <NuxtLink to="/sofya">
                <div class="project-container sofya">
                    <div class="big-text sofya">sofya</div>
                    <div class="project-image-container">
                        <div class="project-background sofya"></div>
                         <div class="project-image sofya"></div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/coach-abileo">
                <div class="project-container">
                    <div class="project-image-container">
                        <div class="project-background coach-abileo"></div>
                         <div class="project-image coach-abileo"></div>
                    </div>
                    <div class="big-text coach-abileo">Coach <br> Abileo</div>
                </div>
            </NuxtLink>
        </div>

        <Contact />
    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';

    const isDragging = ref(false); // Tracks if dragging is active
    const dragStart = ref({ x: 0, y: 0 }); // Initial mouse position
    const offset = ref({ x: 0, y: 0 }); // Offset of the element being dragged
    const currentElement = ref(null); // The element being dragged
    const hiddenElements = ref(new Set()); // A Set to track blocked elements

    useSeoMeta({
        title: 'Titouan Martin',
        description: 'Paris based Product Designer and product Manager.',
        ogTitle: 'Titouan Martin',
        ogDescription: 'Paris based Product Designer and product Manager.',
        ogImage: 'https://www.titouanmartin.com/images/socials/landing-preview.png',
        ogUrl: '[og:url]',
        twitterTitle: 'Titouan Martin',
        twitterDescription: 'Paris based Product Designer',
        twitterImage: 'https://www.titouanmartin.com/images/socials/landing-preview-square.png',
        twitterCard: 'I am a Paris based Product Designer and Product Manager'
    })

    useHead({
        htmlAttrs: {
            lang: 'en'
        },
        link: [
            {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.ico'
            }
        ]
    })

    function appearImage(event) {
        const triggeringElement = event.target.closest('.image-popup-container');

        if (hiddenElements.value.has(triggeringElement)) {
            return;
        }

        if (triggeringElement) {
            triggeringElement.classList.remove('hidden');
        }
    }

    function hideImage(event) {
        const parentContainer = event.target.closest('.image-popup-container');

        if (parentContainer) {
            parentContainer.classList.add('hidden');
            hiddenElements.value.add(parentContainer);

            setTimeout(() => {
                hiddenElements.value.delete(parentContainer);
            }, 30000); // 30 seconds
        }
    }

    function initDrag(event) {
        const target = event.target.closest('.image-popup-container');

        // Only allow dragging if the target is not hidden and isn't the close button
        if (
            target &&
            !target.classList.contains('hidden') &&
            !event.target.classList.contains('close')
        ) {
            isDragging.value = true;
            currentElement.value = target;

            // Record the initial mouse position
            dragStart.value = {
                x: event.clientX,
                y: event.clientY,
            };

            // Get the current offset of the element relative to its parent
            const rect = target.getBoundingClientRect();
            const parentRect = target.closest('.ab-fold').getBoundingClientRect();

            offset.value = {
                x: rect.left - parentRect.left,
                y: rect.top - parentRect.top,
            };
        }
    }

    function drag(event) {
        if (!isDragging.value || !currentElement.value) return;

        // Calculate the new position relative to the `.ab-fold` container
        const newLeft = offset.value.x + (event.clientX - dragStart.value.x);
        const newTop = offset.value.y + (event.clientY - dragStart.value.y);

        // Ensure the element stays within the `.ab-fold` container
        const parent = currentElement.value.closest('.ab-fold');
        const parentRect = parent.getBoundingClientRect();
        const elementRect = currentElement.value.getBoundingClientRect();

        const boundedLeft = Math.max(
            0,
            Math.min(newLeft, parentRect.width - elementRect.width)
        );
        const boundedTop = Math.max(
            0,
            Math.min(newTop, parentRect.height - elementRect.height)
        );

        // Update the element's position relative to `.ab-fold`
        currentElement.value.style.left = `${boundedLeft}px`;
        currentElement.value.style.top = `${boundedTop}px`;
    }

    function endDrag() {
        isDragging.value = false;
        currentElement.value = null;
    }

    // Prevent native drag on images inside draggable containers
    onMounted(() => {
        document.querySelectorAll('.image-popup-container img').forEach((img) => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });
    });

    // Age-related functionality
    const birthDate = new Date('1994-01-31');

    const age = computed(() => {
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const isBirthdayPassed =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!isBirthdayPassed) {
            calculatedAge -= 1;
        }
        return calculatedAge;
    });

    // Working years-related functionality
    const startYear = 2018;

    const workingYears = computed(() => {
        const today = new Date();
        return today.getFullYear() - startYear;
    });
</script>