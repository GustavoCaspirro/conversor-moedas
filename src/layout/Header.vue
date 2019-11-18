<template>
    <header>
        <div class="wrapper">
            <img src="#" alt="Logo">
            <Nav />
        </div>
    </header>    
</template>

<script>
import Nav from '../components/Nav' 
export default {
    name: "Header",
    components: {
        Nav,
    }
}
</script>

<style>
    header {
        box-shadow: 0 0 6px rgba(0, 0, 0 , .1);
        background: #007037;
        color: #fff;
    }

    .wrapper {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1200px;
    }
</style>