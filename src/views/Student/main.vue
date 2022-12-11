<script setup>
import { reactive } from 'vue'
import BaseButton from '../../components/atoms/BaseButton.vue'

const data = reactive({
  name: '',
  email: ''
})

const teste = () => {
  console.log(data)
}
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">Estudar na theacher</h1>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <form class="form" autocomplete="off">
        <input
          type="text"
          placeholder="Qual seu nome?"
          required
          v-model="data.name"
          class="base-input"
        />
        <input
          type="email"
          placeholder="Qual seu email?"
          required
          v-model="data.email"
          class="base-input"
        />
        <BaseButton
          type="submit"
          typeStyle="fill"
          @clickEvent="teste"
          text="Começar meus estudos"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: grid;
  place-items: center end;
  background: url('/icons/ilustration.svg');
  background-size: 200% 70%;
  background-repeat: no-repeat;
  background-position: right center;
  width: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.title {
  font-size: 40px;
  font-weight: 500;
  max-width: 500px;
  width: 100%;
}

.subtitle {
  font-size: 18px;
  margin: 30px 0;
  max-width: 500px;
  font-weight: 300;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
}
</style>
