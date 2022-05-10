<template>
    <div class="page">
        <a href="">&lt;</a>
        <a href="">1</a>
        <a href="">2</a>
        <a href="" class="current">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">&gt;</a>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.page {
    display: flex;
    a {
        display: block;
        padding: 0.3rem 0.8rem;
        border: solid 1px #ddd;
        margin-left: -1px;
        color: #555;
        &:first-child {
            border-top-left-radius: 0.3rem;
            border-bottom-left-radius: 0.3rem;
        }
        &:last-child {
            border-top-right-radius: 0.3rem;
            border-bottom-right-radius: 0.3rem;
        }
        &.current {
            border: solid 1px #a29bfe;
            background: #a29bfe;
            color: #fff;
        }
    }
}
</style>