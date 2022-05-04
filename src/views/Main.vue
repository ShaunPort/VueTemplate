<template>
    <div>
        <header>
            <div class="container">
                <div class="navbar">
                    <a href="" class="logo">Templete</a>
                    <label for="">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </label>
                    <div class="collapse">
                        <ul class="links">
                            <li><a href="">在线教程</a></li>
                            <li><a href="">社区讨论</a></li>
                            <li><a href="">实战课程</a></li>
                            <li><a href="">在线文档</a></li>
                        </ul>
                        <div class="form">
                            <a href="">注册</a>
                            <a href="" class="form-gb">登录</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <router-view />
    </div>
</template>
<style lang="less" scoped>
@import url(../css/global.less);

header {
    border-bottom: solid 5px #a29bfe;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    .navbar {
        display: flex;
        height: 60px;
        align-items: center;
        .logo{
            color: #a29bfe;
            font-weight: bold;
            margin-right: 24px;
            font-size: 1.3rem;
            &+label{
                display: none;
            }
        }
        .collapse {
            display: flex;
            flex-grow: 1;
            .links {
                display: flex;
                margin-right: auto;
                a{
                    color:#777;
                    margin:0 10px;
                    font-weight: bold;
                    &:hover{
                        color:#333;

                    }
                }
            }
            .form{
                a{
                    border:solid #a29bfe;
                    border-radius: 0.4rem;
                    padding:.3rem 1rem;
                    color:#a29bfe;
                    &.form-gb{
                        background:#a29bfe;
                        color:#fff;
                        margin-left: 8px;
                    }
                }
            }
        }
    }
}
@media @small{
    header{
        .navbar{
            label{
                margin-left: auto;
                font-size: 1.2rem;
                border: solid 1px #ddd;
                padding:.1rem .6rem;
                color: #555;
                cursor: pointer;
                display: block;
            }
            .collapse{
                display: none;
            }
        }
    }
}


</style>

<script>
export default {};
</script>