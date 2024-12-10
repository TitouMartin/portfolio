<template>
    <div class="navbar soap" @click="handleNavbarClick">
        TM
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function handleNavbarClick() {
    if (router.currentRoute.value.path === '/') {
        // If already on the index page, scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Navigate to the index page
        router.push('/');
    }
}
</script>