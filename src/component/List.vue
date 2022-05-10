<template>
    <ul class="list-group">
        <li 
            v-for="(item,index) in items"
            v-bind:key="index"
        >
            <slot name='item' v-bind:item="item">
                {{item}}
            </slot>
        </li>
    </ul>
</template>

<script>
export default {
    props:['items']
}
</script>

<style lang="less" scoped>
.list-group {
    li {
        display: flex;
        justify-content: space-between;
        padding: 0.8rem 0;
        border-bottom: solid 1px #ddd;
        font-size: 0.8rem;
        &:last-child {
            border-bottom: none;
        }
        a {
            color: #777;
        }
        span {
            font-size: 0.5rem;
            color: #888;
        }
    }
}
</style>