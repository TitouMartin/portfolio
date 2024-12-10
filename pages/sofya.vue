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
                        <div><span class="outlined">Sofya</span> is a SaaS platform designed for professionals in the real estate sector. <span class="outlined">Sofya</span> combines several solutions that enable stakeholders in this field to collaborate, from document storage to graphical visualization of data or building plans. Each project member can work independently while being notified of the project's progress in real time.</div>
                    </div>
                    <div class="block">
                        <div class="section-title">Roles</div>
                        <div>
                            <ul>
                                <li>Design and development of <span class="outlined">Sofya</span>'s electronic document management platform</li>
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
                <div>The initial mockups for <span class="outlined">Sofya</span>'s electronic document management solution followed the trend of other similar solutions aimed at real estate professionals: outdated user interfaces and complex user experiences. Hired as a Product Designer at the project's inception, my goal was to give the platform a look and feel as close as possible to a B2C product, to stand out from the competition.
                        By ensuring the simplest possible user experience while maintaining a high number of features, <span class="outlined">Sofya</span> quickly established itself as the most user-friendly platform on the French market, while remaining rich in business-specific functionalities.</div>
                <div>In addition to my role as a Designer, I actively contributed to the front-end development of the beta version of the application. As the team grew, I primarily focused on integration, working as a lead HTML & CSS developer and ensuring the maintenance and proper implementation of the design system across <span class="outlined">Sofya</span>'s entire technical ecosystem.</div>
            </div>
    
            <div class="project-big-image-container sofya-double-macbook order-img-1">
                <img src="~/assets/images/sofya/sofya-double-macbook.png" />
            </div>
    
            <div class="project-image-double sofya project-page-big-margin order-img-2">
                <div class="img-container img-1">
                    <img src="~/assets/images/sofya/sofya-visa.png" />
                </div>
                <div class="img-container img-2">
                    <img src="~/assets/images/sofya/sofya-document.png" />
                </div>
            </div>
        </div>

        <div class="text-block project-page-small-margin">
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

            <div class="case-study-title-mobile project-page-big-margin">
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

        <div class="sofya-filters-container project-page-small-margin">
            <div class="background"></div>
            <div class="sofya-filters-sub-container">
                <img class="sofya-filters" src="~/assets/images/sofya/sofya-filters.png" />
                <div>Since configuring these refined display settings can take time, we introduced what we call "views." A view represents a set of displayed/hidden columns, filters, and sorting preferences. Each new combination created by a user is treated as a new view, which they can save in just a few clicks if they think they might reuse it later.
                    To make this system easier to use and help users save time, five default views—developed during workshops with building professionals—are available to all users.</div>
            </div>
        </div>

        <div class="text-block project-page-big-margin">
            <div>Subsequently, we noticed that within a team, only certain users who frequently used the electronic document management platform took the time to configure views. However, since all team members working on similar tasks have similar display customization needs, we added a sharing feature. This allows a user to share their views with their team members, eliminating the need for everyone to configure the same views individually.
                This feature also enabled us to set up specific views for multiple teams at the start of a project and share them directly, ensuring a smoother onboarding experience with the application.</div>
        </div>

        <div class="project-image-double sofya project-page-big-margin">
            <div class="img-container img-3">
                <img src="~/assets/images/sofya/sofya-view.png" />
            </div>
            <div class="img-container img-4">
                <img src="~/assets/images/sofya/sofya-save-view.png" />
            </div>
        </div>

    </div>
</template>