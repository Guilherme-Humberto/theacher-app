<script setup>
import { ref, reactive } from 'vue'
import BaseButton from '../../components/atoms/BaseButton.vue'
import BaseInput from '../../components/atoms/BaseInput.vue'

const timeData = reactive([{ day: '', start: '', end: '' }])

const addTimeObjData = () => {
  timeData.push({ day: '', start: '', end: '' })
}

const handleSubmit = () => {
  console.log(timeData)
}

const changeModelValue = payload => {
  console.log(payload)
}
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="introduction">
        <h1 class="title">Dar aulas na theacher</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div class="form-wrapper">
        <h3 class="title">Seus dados</h3>
        <form class="form-teacher-data-1" autocomplete="off">
          <div class="input-group cl3">
            <BaseInput
              type="text"
              placeholder="Informe seu nome"
              required
              @update:input="changeModelValue"
              name="name"
              modelValue="name"
              class="base-input"
            />
            <BaseInput
              type="text"
              placeholder="Informe seu sobrenome"
              required
              @update:input="changeModelValue"
              name="surname"
              modelValue="surname"
              class="base-input"
            />
            <input
              type="text"
              placeholder="Email para contato"
              required
              class="base-input"
            />
          </div>
          <div class="input-group cl2">
            <textarea
              type="text"
              placeholder="Biografia"
              required
              class="base-input"
            ></textarea>
            <div>
              <input
                type="text"
                placeholder="Telefone para contato"
                required
                class="base-input"
              />
              <input
                type="text"
                placeholder="Link da sua foto"
                required
                class="base-input"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="form-wrapper">
        <h3 class="title">Sobre a aula</h3>
        <form class="form-teacher-data-2" autocomplete="off">
          <div class="input-group cl3">
            <input
              type="text"
              placeholder="Selecione a matéria"
              required
              class="base-input"
            />
            <input
              type="text"
              placeholder="Custo por hora"
              required
              class="base-input"
            />
          </div>
        </form>
      </div>
      <div class="form-wrapper">
        <div class="title-wrapper">
          <h3 class="title">Horários disponíveis</h3>
          <button class="btn-new-time" @click="addTimeObjData">
            + Novo horário
          </button>
        </div>
        <form class="form-teacher-data-3" autocomplete="off">
          <div v-for="time in timeData">
            <div class="input-group cl3" style="margin-top: 10px">
              <input
                type="text"
                placeholder="Selecione o dia da semana"
                required
                v-model="time.day"
                class="base-input"
              />
              <div class="input-group cl2">
                <input
                  type="text"
                  placeholder="Das"
                  required
                  v-model="time.start"
                  class="base-input"
                />
                <input
                  type="text"
                  placeholder="Até"
                  required
                  v-model="time.end"
                  class="base-input"
                />
              </div>
            </div>
          </div>
          <div class="btn-form-wrapper">
            <img src="/icons/warning-form.svg" alt="warning-form" />
            <BaseButton
              type="submit"
              typeStyle="fill"
              @clickEvent="handleSubmit"
              text="Salvar cadastro"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  margin: 50px auto;
}

.wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.introduction {
  border-bottom: 4px solid var(--color-tertiary);
}

.introduction .title {
  font-size: 40px;
  letter-spacing: -2px;
  font-weight: bold;
}

.introduction .subtitle {
  margin: 20px 0;
  font-size: 18px;
  font-weight: 300;
}

.form-wrapper {
  margin-top: 30px;
}

.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 850px;
}

.title-wrapper .btn-new-time {
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-primary);
  font-size: 16px;
  cursor: pointer;
}

.form-wrapper .title {
  font-size: 30px;
  letter-spacing: -2px;
  margin-bottom: 20px;
}

.form-teacher-data-1 .input-group.cl2 {
  margin-top: 20px;
}

.form-teacher-data-1 .input-group.cl2 > div {
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.btn-form-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  max-width: 850px;
}
</style>
