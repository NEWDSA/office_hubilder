<template>
    <TopNav>
		<template v-slot:topNavTitle>
			日历
		</template>
		
	</TopNav>

  <div class="calendar">
    <van-calendar
  title="查看日期"
  :poppable="false"
  :show-confirm="false"
  color="#10AF9C"
  :style="{ height: '500px' }"
/>
  </div>
</template>

<script setup>
    import { ref } from 'vue';

</script>

<style lang="scss">
    
</style>