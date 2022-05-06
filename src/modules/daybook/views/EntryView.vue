import defineAsyncComponent from 'vue';
<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Juliol</span>
            <span class="mx-2 fs-4 fw-light">2022, divendres</span>
        </div>
    </div>
  
    <div>
        <button class="btn btn-danger mx-2">
            Esborrar
            <i class="fa fa-trash-alt"></i>
        </button>
        
        <button class="btn btn-primary">
            Pujar fotografia
            <i class="fa fa-upload"></i>
        </button>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea 
            name="" 
            id="" 
            placeholder="Què ha passat avui?"
        ></textarea>
    </div>
    <DaybookFab :icon="'fa-save'"/>
    <img 
        src="https://img.oastatic.com/img2/38896870/max/roy-s-peak.jpg" 
        alt="entry-picture"
        class="img-thumbnail">
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
    textarea{
        font-size: 20px;
        border: none;
        height: 100%;

        &:hover{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
    }
</style>