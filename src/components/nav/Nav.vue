<template>
    <nav class="menu">
        <ul class="menu__items">
            <li
                class="menu__items_item"
                v-for="item in itemsMenu"
                :key="item.id"
            >
                <a :href="`#${item.route}`" :title="item.name">
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script src="./nav.component.js"></script>

<style
    src="./nav.component.scss"
    scoped
    lang="scss"
></style>
