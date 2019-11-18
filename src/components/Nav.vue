<template>
    <nav class="menu">
        <ul class="menu__items">
            <li
                class="menu__items_item"
                v-for="item in itemsMenu"
                :key="item.id"
            >
                <a href="item.route">{{ item.name }}</a>
                
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            itemsMenu: [
                {
                    id: 0,
                    name: "Home",
                    route: "/home",
                },
                {
                    id: 1,
                    name: "Conversor",
                    route: "/conversor",
                },
                {
                    id: 2,
                    name: "Sobre",
                    route: "/sobre",
                }
            ]
        };
    }
}
</script>

<style scoped>
    .menu__items {
        padding: 0;
    }
    .menu__items_item {
        display: inline;
        list-style-type: none;
    }

    .menu__items_item a {
        color: #fff;
        padding: 0 10px;
        text-decoration: none;
    }
</style>