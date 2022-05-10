<template>
    <div class="container">
        <div class="grid-row">
            <div class="col-lg-9 col-6 col-sm-12">
                <Card>
                    <template #header>
                        <h2>最新更新</h2>
                    </template>

                    <List v-bind:items="content">
                        <template v-slot:item="{item}">
                            <a href="">{{item.title}}</a>
                            <span>{{item.date}}</span>
                        </template>
                    </List>

                    <template #footer>
                        <Page></Page>
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
import Card from '/src/component/Card'
import Page from '/src/component/Page'
import List from '/src/component/List'
export default {
    components: { Card,Page,List },
    data:function(){
        return {
            content:[
                {title:'使用margin自动撑满空间',
                date:'2022-5-9'},
                {title:'使用margin自动撑满空间技巧',
                date:'2022-5-10'},
                {title:'使用margin自动撑满空间技巧',
                date:'2022-5-11'},
                {title:'使用margin自动撑满空间技巧',
                date:'2022-4-9'},
                {title:'使用margin自动撑满空间技巧',
                date:'2022-4-9'},
            ]
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../css/global.less);
</style>