<template>
  <div class="input__container" :options="options" >
    <div v-html="title" class="input__title"></div>
    <div class="form__input form__input-noborder">
      <label v-for="option in options" :key="option" class="input__label" >
        <span v-html="option"></span>
        <input
          name="title"
          :value="option"
          type="radio"
          @change="$emit('input', $event.target.value)"
          class="form__input-radio"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
</template>
        
      
<script>
export default {
  props: ["options", "title"],
};
</script>

<style lang="scss">
.input__container {
  @include flexcol(center);
  align-items: center;
  width: 80%;
}
.form__input {
  width: 80%;
  @include flexcol(flex-start);
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid $grey;
  border-radius: 3px;
  box-shadow: none;
  -webkit-appearance: none;
  outline: none;
}

input[type="text"] {
  -webkit-appearance: none;
}
.input__title {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 2.5rem;
  color: $dark-blue;
}
.form__input-radio {
  display: none;
}
.input__label {
  position: relative;
  padding-left: 3rem;
  line-height: 2rem;
  margin: 1rem;
  cursor: pointer;
  user-select: none;
  margin-right: 1.5rem;
  &:hover .checkmark {
    border: 1px solid $blue;
  }
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  border: 1px solid $grey;
  border-radius: 3px;
  cursor: pointer;
}
.form__input-radio:checked ~ .checkmark:after {
  content: "";
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: $blue;
  border-radius: 3px;
}
</style>
