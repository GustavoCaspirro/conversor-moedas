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
