<template>

    <div class="project-page">

        <div class="project-container sofya">
            <div class="big-text sofya">sofya</div>
            <div class="project-image-container">
                <div class="project-background sofya"></div>
                    <div class="project-image sofya"></div>
            </div>
        </div>

        <div class="responsive-el-order">
            <div class="text-block project-page-small-margin order-text-1">
                <div class="chips-container project-page-small-margin">
                    <div class="chip blue">Product Designer</div>
                    <div class="chip blue">Web Integrator</div>
                    <div class="chip red">Prop Tech</div>
                    <div class="chip red">From Scratch</div>
                    <div class="chip red">SaaS</div>
                    <div class="chip red">BtoB</div>
                </div>
        
                <div class="split">
                    <div class="block">
                        <div class="section-title">About</div>
                        <div><a class="outlined" href="https://www.sofya.fr/=" target="_blank">Sofya</a> is a SaaS platform designed for professionals in the real estate sector. <a class="outlined" href="https://www.sofya.fr/=" target="_blank">Sofya</a> combines several solutions that enable stakeholders in this field to collaborate, from document storage to graphical visualization of data or building plans. Each project member can work independently while being notified of the project's progress in real time.</div>
                    </div>
                    <div class="block">
                        <div class="section-title">My Roles</div>
                        <div>
                            <ul>
                                <li>Design and development of <a class="outlined" href="https://www.sofya.fr/=" target="_blank">Sofya</a>'s electronic document management platform</li>
                                <li>Rebranding of the solution in preparation for the launch of the new flagship product</li>
                                <li>Creation, maintenance, and evolution of the design system across all solutions</li>
                                <li>Front-end development and integration of designs throughout the entire solution</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-block project-page-big-margin order-text-2">
                <div class="section-title">Context</div>
                <div class="pspacing-xs">The initial mockups for <a class="outlined" href="https://www.sofya.fr/=" target="_blank">Sofya</a>'s electronic document management solution followed the trend of other similar solutions aimed at real estate professionals: outdated user interfaces and complex user experiences. Hired as a Product Designer at the project's inception, my goal was to give the platform a look and feel as close as possible to a B2C product, to stand out from the competition.
                        By ensuring the simplest possible user experience while maintaining a high number of features, <a class="outlined" href="https://www.sofya.fr/=" target="_blank">Sofya</a> quickly established itself as the most user-friendly platform on the French market, while remaining rich in business-specific functionalities.</div>
                <div>In addition to my role as a Designer, I actively contributed to the front-end development of the beta version of the application. As the team grew, I primarily focused on integration, working as a lead HTML & CSS developer and ensuring the maintenance and proper implementation of the design system across <a class="outlined" href="https://www.sofya.fr/=" target="_blank">Sofya</a>'s entire technical ecosystem.</div>
            </div>
    
            <div class="project-big-image-container sofya-double-imac order-img-1">
                <img src="/images/sofya/sofya-double-imac.png" />
            </div>
    
            <div class="project-image-double sofya project-page-big-margin order-img-2">
                <div class="img-container img-1">
                    <img src="/images/sofya/sofya-visa.png" />
                </div>
                <div class="img-container img-2">
                    <img src="/images/sofya/sofya-document.png" />
                </div>
            </div>
        </div>

        <div class="text-block project-page-big-margin">
            <div class="case-study-title-desktop project-page-big-margin">
                <div class="big-text">Clean but rich</div>
                <div class="second-line">
                    <div class="big-text">interface</div>
                    <div class="chips-container">
                        <div class="chip blue">Benchmark</div>
                        <div class="chip blue">Workshops</div>
                        <div class="chip blue">Beta version</div>
                    </div>
                </div>
            </div>

            <div class="case-study-title-mobile project-page-small-margin">
                <div class="big-text">Clean</div>
                <div class="align-right big-text">But Rich</div>
                <div class="section-title">interface</div>
                <div class="chips-container">
                    <div class="chip blue">Benchmark</div>
                    <div class="chip blue">Workshops</div>
                    <div class="chip blue">Beta version</div>
                </div>
            </div>

            <div class="section-title">Problem</div>
            <div class="project-page-small-margin">One of the main challenge when designing the main interface was to display a large number of informations without clutter. This  was particularly evident during the design of the main interface, where all the documents for a project are stored (the number of documents can exceed 4,000). This grid can include more than 25 columns of metadata, and while each column contains important information, users—depending on their role or the project phase—do not need access to all this information at all times. As a result, not all information is relevant to the user at every moment.</div>

            <div class="section-title">Conception</div>
            <div>To ensure a readable and pleasant display, we first identified the columns most frequently used by users and set these as the default grid view, hiding all other metadata. By adding a display menu, we allowed users to select which columns they wanted to add or hide based on their preferences.</div>
            <div>To further simplify access to information, each column has its own filtering mechanism, tailored to the type of information it contains (e.g., text, date). These filters can be combined to achieve a precise and customized display of documents.</div>    
        </div>

        <div class="text-w-image-container sofya-filters project-page-big-margin">
            <div class="background"></div>
            <div class="text-w-image-sub-container">
                <img src="/images/sofya/sofya-filters.png" />
                <div>Since configuring these refined display settings can take time, we introduced what we call "views." A view represents a set of displayed/hidden columns, filters, and sorting preferences. Each new combination created by a user is treated as a new view, which they can save in just a few clicks if they think they might reuse it later.
                    To make this system easier to use and help users save time, five default views—developed during workshops with building professionals—are available to all users.</div>
            </div>
        </div>

        <div class="responsive-el-order">

            <div class="project-image-double sofya project-page-big-margin display-screen-xs">
                <div class="img-container img-3">
                    <img src="/images/sofya/sofya-view.png" />
                </div>
            </div>
            
            <div class="text-block project-page-big-margin">
                <div class="pspacing-xs">Subsequently, we noticed that within a team, only certain users who frequently used the electronic document management platform took the time to configure views. However, since all team members working on similar tasks have similar display customization needs, we added a sharing feature.</div>
                <div>This allows users to share their views with their team members, eliminating the need for everyone to configure the same views individually. This feature also enabled us to set up specific views for multiple teams at the start of a project and share them directly, ensuring a smoother onboarding experience with the application.</div>
            </div>
    
            <div class="project-image-double sofya project-page-big-margin display-screen-desktop">
                <div class="img-container img-3">
                    <img src="/images/sofya/sofya-view.png" />
                </div>
                <div class="img-container img-4">
                    <img src="/images/sofya/sofya-save-view.png" />
                </div>
            </div>

            <div class="project-image-double sofya project-page-big-margin display-screen-xs">
                <div class="img-container img-4">
                    <img src="/images/sofya/sofya-save-view.png" />
                </div>
            </div>

        </div>


        <div class="text-block project-page-small-margin">
            <div class="case-study-title-desktop project-page-big-margin">
                <div class="big-text">User Friendly Admin</div>
                <div class="second-line">
                    <div class="big-text">Pannels</div>
                    <div class="chips-container">
                        <div class="chip blue">Feedbacks</div>
                        <div class="chip blue">Iterations</div>
                        <div class="chip blue">User testing</div>
                    </div>
                </div>
            </div>

            <div class="case-study-title-mobile project-page-small-margin">
                <div class="big-text">User</div>
                <div class="align-right big-text">Friendly</div>
                <div class="section-title">Admin Pannels</div>
                <div class="chips-container">
                    <div class="chip blue">Feedbacks</div>
                    <div class="chip blue">Iterations</div>
                    <div class="chip blue">User testing</div>
                </div>
            </div>

            <div class="section-title">Problem</div>
            <div>During the research phase, we observed that a significant number of users of competing solutions complained about the inability to finely configure their workspace without resorting to support services. As a result, we decided to make all project settings editable by the administrators of the workspace.</div>
        </div>

        <div class="text-w-image-container sofya-admin project-page-big-margin">
            <div class="background"></div>
            <div class="text-w-image-sub-container">
                <div>
                    <div>The project settings include a wide range of rules specific to the French construction sector, the management of information display, and granular access rights control for different sections of the application. This refined configuration also helps maintain a clean and uncluttered main navigation interface.</div>
                    <div>It was necessary to design a user journey and configuration panels that would allow a novice administrator to make the right choices while clearly understanding all the available features.</div>
                </div>
                <img src="/images/sofya/sofya-admin.png" />
            </div>
        </div>

        <div class="text-block project-page-small-margin">
            <div class="split align-center">
                <div class="block old-sofya-img">
                    <img src="/images/sofya/sofya-old-ui.png" />
                </div>
                <div class="block">
                    <div>
                        <div class="section-title">User flow</div>
                        <div>The original design of Sofya included a separation of the different “categories” of settings into five distinct groups. This fragmentation forced users to follow a complex navigation pattern and prevented them from having a comprehensive view of all the rules applied to a section of the application.
                            Initial user research conducted on this subject quickly revealed that :</div>
                        <ul>
                            <li>The ability to combine multiple small groups of settings did not align with real-world expectations.</li>
                            <li>Users tended to create a single group of settings for each folder they needed to manage.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-block project-page-big-margin">
            <div class="align-right">
                <div class="sofya-admin-orga old-admin project-page-small-margin">
                    <div class="outlined">Old Administration section structuration</div>
                    <img src="/images/sofya/sofya-old-admin-orga.png" />
                </div>
            </div>

            <div class="sofya-admin-orga project-page-small-margin">
                <div class="outlined">New structuration</div>
                <img src="/images/sofya/sofya-new-admin-orga.png" />
            </div>
        </div>

        <div class="text-block project-page-big-margin">
            <div class="pspacing-xs">First, I decided to group all the configuration features into a single section to simplify navigation.</div>
            <div class="pspacing-xs">Since this set of settings could be overwhelming for a user, I then designed an onboarding module to guide users through configuring the main features. This module also includes the option to duplicate rule sets from another project, saving expert users a significant amount of time. Additionally, default "Sofya" settings are offered to users, allowing them to set up a basic nomenclature structure in just a few clicks. These default settings are based on a thorough study of the most common settings across numerous real estate projects.</div>
            <div>I also made extensive use of empty states, particularly working on them to leverage the available space for training users on the available features, as well as on the actions needed to complete or progress their project configuration.</div>
        </div>

        <div class="project-big-image-container sofya-admin-buttons">
            <img src="/images/sofya/sofya-admin-buttons.png" />
            <!-- <img class="display-screen-xs" src="/images/sofya/sofya-admin-buttons-mobile.png" /> -->
        </div>
    
        <div class="project-image-double sofya">
            <div class="img-container img-5">
                <img src="/images/sofya/sofya-admin-config.png" />
            </div>
            <div class="img-container img-6 display-screen-desktop">
                <img src="/images/sofya/sofya-admin-empty-state.png" />
            </div>
        </div>

        <div class="full-background sofya">
            <div class="text-block">
                <div class="pspacing-xs">Finally, the entire interface was enhanced with buttons that allow users to view help texts, detailing the exact impact of their modifications. I also created <a href="https://wiki.sofya.fr/" target="_blank" class="text-block-link">detailed online documentation</a> and included many links to this documentation within the administration interfaces.</div>
                <div class="project-page-big-margin">To make navigation more accessible, I also added a visual representation module of the document validation workflow, using drag-and-drop functionality to allow users to intuitively and visually manage complex access rights tasks.</div>
            </div>
            <img src="/images/sofya/sofya-validation-circuit.png" />
        </div>

        <Contact />

        <div class="bottom-page-block">
            <div class="block-title">Liked what you read ? Try and have some more !</div>

            <div class="text-block projects-readmore">

                <NuxtLink to="/amikeo">
                    <div class="project-container">
                        <div class="project-image-container">
                            <div class="project-background amikeo"></div>
                            <div class="project-image amikeo"></div>
                        </div>
                        <div class="big-text amikeo">amikeo</div>
                    </div>
                </NuxtLink>

                <NuxtLink to="/coach-abileo">
                    <div class="project-container">
                        <div class="project-image-container">
                            <div class="project-background coach-abileo"></div>
                            <div class="project-image coach-abileo"></div>
                        </div>
                        <div class="big-text coach-abileo sofya-page">Coach <br> Abileo</div>
                    </div>
                </NuxtLink>

            </div>
        </div>

    </div>

</template>

<script setup>
    useSeoMeta({
            title: 'Titouan Martin | Sofya',
            description: 'A SaaS tool dedicated to help build better real estate projects.',
            ogTitle: 'Titouan Martin | Sofya',
            ogDescription: 'A SaaS tool dedicated to help build better real estate projects.',
            ogImage: 'https://www.titouanmartin.com/images/socials/sofya-preview.png',
            ogUrl: '[og:url]',
            twitterTitle: 'Titouan Martin | Sofya',
            twitterDescription: 'A SaaS tool dedicated to help build better real estate projects.',
            twitterImage: 'https://www.titouanmartin.com/images/socials/sofya-preview-square.png',
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
</script>