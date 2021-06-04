<template>
  <div class="custom-button" @click="$emit('click')">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped lang="scss">
.custom-button {
  box-sizing: border-box;
  display: block;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  background-color: $dark-blue;
  color: white;
  border-radius: 3px;
  box-shadow: 0px 5px 10px -4px $shadow;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  font-weight: 400;
  &:hover {
      background-color: $dark-blue;
  }
}
</style>
