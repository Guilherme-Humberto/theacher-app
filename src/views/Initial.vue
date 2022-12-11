<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <div class="introduction">
                <div class="github">
                    <Icon icon="ant-design:github-filled" />
                    <a href="https://github.com/Guilherme-Humberto/theacher-app" target="_blank">Visitar projeto</a>
                </div>
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
    max-width: 1280px;
    margin: 0 auto;
}

.github {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
}

.github svg {
    font-size: 20px;
}

.github a {
    text-decoration: none;
    color: var(--color-text);
    font-family: var(--font-secondary);
}

.title {
    font-size: 60px;
    letter-spacing: -9%;
    font-weight: bold;
    line-height: 75px;
}

.subtitle {
    font-size: 18px;
    margin: 30px 0;
    max-width: 455px;
}

.btns {
    display: flex;
    align-items: center;
    gap: 20px;
}

.btn-fill,
.btn-outline {
    outline: none;
    border: none;
    height: 44px;
    padding: 0 30px;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: -9%;
    transition: 0.5s;
}

.btn-fill:hover,
.btn-outline:hover {
    cursor: pointer;
    letter-spacing: 1px;
}

.btn-fill {
    background: var(--color-primary);
    color: var(--color-text);
}

.btn-outline {
    color: var(--color-text);
    border: 1px solid var(--color-text);
    background: transparent;
}
</style>