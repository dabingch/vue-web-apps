<template>
  <div class="income-list">
    <IncomeItem v-for="income in state.sortedIncome" :key="income.id" :income="income" @remove-item="removeItem" />
  </div>
</template>

<script>
import IncomeItem from "./IncomeItem"

export default {
  name: "IncomeList",
  props: {
    state: Object
  },
  components: {IncomeItem},
  setup(props, { emit }) {
    function removeItem(id) {
      emit('remove-item', id)
    }

    return { removeItem }
  }
}
</script>

<style scoped>
  .income-list {
    margin-top: 30px;
    padding: 15px;
  }
</style>