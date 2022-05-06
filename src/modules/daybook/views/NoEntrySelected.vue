<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hi ha res seleccionat</h1>
    </div>
    <DaybookFab />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        DaybookFab: defineAsyncComponent( () => import( '@/modules/daybook/components/DayBookFab.vue'))
    }
}
</script>


<style lang="scss" scoped>
    div{
        height: 100%;
    }

</style>