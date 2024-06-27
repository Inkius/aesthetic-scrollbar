<script setup lang="ts" defer>
import '~/assets/css/custom-scrollbar.css'
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
const options = {
    scrollbars: { autoHide: 'move' }
}
</script>

<template>
    <main id="teste">
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
    </main>
    <OverlayScrollbarsComponent :options="options" element="body" defer />
</template>
