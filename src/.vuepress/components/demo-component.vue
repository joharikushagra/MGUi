<template>
  <div>
    <buttonBasic text="Basic" class="btn-basic" />
    <buttonDanger text="Danger" class="btn-danger" />
    <buttonPrimary text="Primary" class="btn-primary" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "<button-basic >",
    };
  },
};
</script>

<style>
.btn-danger {
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  background-color: red !important;
  color: white;
}
.btn-basic {
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  background-color: gray !important;
  color: white;
}
.btn-primary {
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  background-color: skyblue !important;
  color: white;
}
</style>
