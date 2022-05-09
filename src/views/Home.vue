<template>
    <div class="container">
        <div class="grid-row">
            <div class="col-lg-9 col-6 col-sm-12">
                <Card>
                    <template #header>
                        <h2>最新更新</h2>
                    </template>

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

                    <template #footer>
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
                </Card>
            </div>

            <div class="col-lg-3 col-6 col-sm-12">
                <Card>
                    <template #header>社区小贴</template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "/src/component/Card";
export default {
    components: { Card },
};
</script>

<style lang="less" scoped>
@import url(../css/global.less);
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