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
    />
    <h2>
        {{ moedaB_value }}
    </h2>
</section>
</template>

<script src="./conversor.component.js"></script>
<style src="./conversor.component.scss" scoped lang="scss"></style>