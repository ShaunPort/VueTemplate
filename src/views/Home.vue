<template>
    <div class="container">
        <br /><br />
        <div class="grid-row">
            <div class="col-lg-9 col-6 col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h2>最新更新</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li>
                                <a href="">使用margin自动撑满空间技巧</a>
                                <span>2022-5-9</span>
                            </li>
                            <li>
                                <a href="">使用margin自动撑满空间技巧</a>
                                <span>2022-5-9</span>
                            </li>
                            <li>
                                <a href="">使用margin自动撑满空间技巧</a>
                                <span>2022-5-9</span>
                            </li>
                            <li>
                                <a href="">使用margin自动撑满空间技巧</a>
                                <span>2022-5-9</span>
                            </li>
                            <li>
                                <a href="">使用margin自动撑满空间技巧</a>
                                <span>2022-5-9</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <div class="page">
                            <a href="">&lt;</a>
                            <a href="">1</a>
                            <a href="">2</a>
                            <a href="" class="current">3</a>
                            <a href="">4</a>
                            <a href="">5</a>
                            <a href="">&gt;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-6 col-sm-12">
                <div class="card">
                    <div class="card-header">社区小贴</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url(../css/global.less);
.page {
    display: flex;
    a{
        display: block;
        padding: .3rem .8rem;
        border: solid 1px #ddd;
        margin-left: -1px;
        color:#555;
        &:first-child{
            border-top-left-radius: .3rem;
            border-bottom-left-radius: .3rem;
        }
        &:last-child{
            border-top-right-radius: .3rem;
            border-bottom-right-radius: .3rem;
        }
        &.current{
            border: solid 1px #a29bfe;
            background: #a29bfe;
            color:#fff;
        }
    }
}
.card {
    border: solid 1px #ddd;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    .card-header {
        padding: 0.5rem 1rem;
        border-bottom: solid 1px #ddd;
    }
    .card-body {
        padding: 1rem;
    }
    .card-footer {
        padding: 0.5rem 1rem;
        border-top: solid 1px #ddd;
    }
}

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