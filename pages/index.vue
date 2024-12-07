<template>
    <div class="landing-page">
        <div class="ab-fold" @mousedown="initDrag($event)" @mousemove="drag($event)" @mouseup="endDrag()">

            <!-- IMAGES START -->
                <div class="image-popup-container hidden" id="juno" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/juno.png" alt="juno synthesizer">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="cog" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/cog.png" alt="bike cog">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="map-sofya" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/map-sofya.png" alt="map">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="me" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/me.png" alt="me">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="login-sofya" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/login-sofya.png" alt="login sofya">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="paula" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/paula.png" alt="pink bike">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="miam" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/miam.png" alt="fondue dish">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="support-sofya" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/support-sofya.png" alt="sofya support">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="hat" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/hat.png" alt="red hat">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="ipad-auticiel" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/ipad-auticiel.png" alt="ipad auticiel">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="dancehaul" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/dancehaul.png" alt="dancehaul snowboard">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="macbook-auticiel" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/macbook-auticiel.png" alt="macbook auticiel">
                    </div>
                </div>

                <div class="image-popup-container hidden" id="pbasse" @mouseover="appearImage($event)">
                    <div class="image-popup-inner-container">
                        <div class="close soap" @click="hideImage($event)">x</div>
    
                        <img src="~/assets/images/landing-images/pbasse.png" alt="precision basse">
                    </div>
                </div>

            <!-- IMAGES END -->


            <h1 class="ab-fold-title desktop">
                <div class="presentation">
                    <div>Hi ! I am</div>
                    <div>Titouan Martin,</div>
                    <div>a 30 years old</div>
                    <div>Paris based</div>
                </div>
                <div class="product-designer big-text soap">
                    <div>Product</div>
                    <div class="designer">Designer</div>
                </div>
            </h1>

            <h1 class="ab-fold-title mobile">
                <div class="text-block">                    
                    Hi ! I am Titouan Martin, a 30 years old Paris based
                </div>
                <div class="soap product-designer text1">prod</div>
                <div class="soap product-designer text2">uct</div>
                <div class="soap product-designer text3">desig</div>
                <div class="soap product-designer text4">ner</div>
            </h1>
        </div>
        <div class="text-block">
            <div>I am a 7 years experienced <span class="outlined">Product Designer</span> that also dabbles in <span class="outlined">Product Management</span>.</div>
            <div class="about">I help teams to create and bring to life beautiful, intuitive and accessible digital products.</div>
            <div class="projects">Here are some projects I took a part in :</div>
            
            <div class="project-container">
                <div class="project-image-container">
                    <div class="project-background amikeo"></div>
                     <div class="project-image amikeo"></div>
                </div>
                <div class="soap big-text amikeo">amikeo</div>
            </div>

            <div class="project-container sofya">
                <div class="soap big-text sofya">sofya</div>
                <div class="project-image-container">
                    <div class="project-background sofya"></div>
                     <div class="project-image sofya"></div>
                </div>
            </div>
        </div>

        <Contact />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isDragging: false, // Tracks if dragging is active
                dragStart: { x: 0, y: 0 }, // Initial mouse position
                offset: { x: 0, y: 0 }, // Offset of the element being dragged
                currentElement: null, // The element being dragged
                hiddenElements: new Set(), // A Set to track blocked elements
            };
        },
        methods: {
            appearImage(event) {
                const triggeringElement = event.target.closest('.image-popup-container');;


                if (this.hiddenElements.has(triggeringElement)) {
                    return;
                }

                if (triggeringElement) {
                    triggeringElement.classList.remove('hidden');
                }
            },
            hideImage(event) {
                const parentContainer = event.target.closest('.image-popup-container');

                if (parentContainer) {
                    parentContainer.classList.add('hidden');
                    this.hiddenElements.add(parentContainer);

                    setTimeout(() => {
                        this.hiddenElements.delete(parentContainer);
                    }, 30000); // 30 seconds
                }
            },
            initDrag(event) {
                const target = event.target.closest('.image-popup-container');

                // Only allow dragging if the target is not hidden and isn't the close button
                if (
                    target &&
                    !target.classList.contains('hidden') &&
                    !event.target.classList.contains('close')
                ) {
                    this.isDragging = true;
                    this.currentElement = target;

                    // Record the initial mouse position
                    this.dragStart = {
                        x: event.clientX,
                        y: event.clientY,
                    };

                    // Get the current offset of the element relative to its parent
                    const rect = target.getBoundingClientRect();
                    const parentRect = target.closest('.ab-fold').getBoundingClientRect();

                    this.offset = {
                        x: rect.left - parentRect.left,
                        y: rect.top - parentRect.top,
                    };

                }
            },
            drag(event) {

                if (!this.isDragging || !this.currentElement) return;

                // Calculate the new position relative to the `.ab-fold` container
                const newLeft = this.offset.x + (event.clientX - this.dragStart.x);
                const newTop = this.offset.y + (event.clientY - this.dragStart.y);

                // Ensure the element stays within the `.ab-fold` container
                const parent = this.currentElement.closest('.ab-fold');
                const parentRect = parent.getBoundingClientRect();
                const elementRect = this.currentElement.getBoundingClientRect();

                const boundedLeft = Math.max(
                    0,
                    Math.min(newLeft, parentRect.width - elementRect.width)
                );
                const boundedTop = Math.max(
                    0,
                    Math.min(newTop, parentRect.height - elementRect.height)
                );

                // Update the element's position relative to `.ab-fold`
                this.currentElement.style.left = `${boundedLeft}px`;
                this.currentElement.style.top = `${boundedTop}px`;
            },
            endDrag() {
                if (this.isDragging) {
                }
                this.isDragging = false;
                this.currentElement = null;
            },
        },
        mounted() {
            // Prevent native drag on all images within draggable containers
            document.querySelectorAll('.image-popup-container img').forEach((img) => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });
}
    };

</script>