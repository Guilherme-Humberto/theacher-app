<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import BaseButton from '../../components/atoms/BaseButton.vue'
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="github">
        <Icon icon="ant-design:github-filled" />
        <a
          href="https://github.com/Guilherme-Humberto/theacher-app"
          target="_blank"
          >Visitar projeto</a
        >
      </div>
      <h1 class="title">Sua plataforma de estudos online</h1>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <div class="btns">
        <RouterLink to="/student">
          <BaseButton
            type="submit"
            typeStyle="fill"
            text="Estudar na theacher"
          />
        </RouterLink>
        <RouterLink to="/teacher">
          <BaseButton
            type="submit"
            typeStyle="outline"
            text="Dar aulas na theacher"
          />
        </RouterLink>
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
  letter-spacing: -2px;
  font-weight: bold;
  line-height: 75px;
  max-width: 800px;
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
</style>
