
<template> 
    <div class="wrapper">
        <Conversor 
            v-for="moeda in moedas"
            :key="moeda.id"
            :moeda-a="moeda.a"
            :moeda-b="moeda.b"
        />
    </div>
</template>

<script src="./currency.component.js"></script>
<style
    src="./currency.component.scss"
    scoped
    lang="scss"
></style>
