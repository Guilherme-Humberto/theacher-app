<script setup>
import IlustrationSvgVue from '../components/atoms/Ilustration-svg.vue';
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <div class="introduction">
                <h1 class="title">Sua plataforma de estudos online</h1>
                <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div class="btns">
                    <button class="btn-fill">Estudar na theacher</button>
                    <button class="btn-outline">Dar aulas na theacher</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: url('/icons/ilustration.svg');
        background-size: 100% 70%;
        background-repeat: no-repeat;
        background-position: right center;
        width: 100%;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
</style>