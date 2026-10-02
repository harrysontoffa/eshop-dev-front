<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';

</script>

<template>
    <div class="flex min-h-screen flex-col ">
        <AppHeader></AppHeader>
        <main class="flex-1">
            <slot></slot>
        </main>
        <AppFooter></AppFooter>
    </div>
</template>