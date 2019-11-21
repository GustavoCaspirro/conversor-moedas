<template>
    <section class="conversor">
    <h2>
        {{ moedaA }} para {{ moedaB }}
    </h2>
    <input
        type="text"
        v-model="moedaA_value"
        :placeholder="moedaA"
    />
    <input
        type="button"
        value="Converter"
        v-on:click="converter"
        :disabled="showLoading"
    />
    
    <h2 v-if="showLoading">
        Loading...
    </h2>

    <h2 v-if="!showLoading">
        {{ moedaB_value }}
    </h2>
</section>
</template>

<script src="./conversor.component.js"></script>
<style
    src="./conversor.component.scss"
    scoped
    lang="scss"
></style>
