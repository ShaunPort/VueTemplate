<style lang="less" scoped>
@import url(../css/global.less);

header {
    user-select: none;
    border-bottom: solid 5px #a29bfe;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    .navbar {
        display: flex;
        padding: 1rem;
        align-items: center;
        .logo {
            color: #a29bfe;
            font-weight: bold;
            margin-right: 24px;
            font-size: 1.4rem;
        }
        .collapse {
            display: flex;
            flex-grow: 1;
            .links {
                display: flex;
                margin-right: auto;
                li {
                    margin: 0 10px;
                    a {
                        color: #777;
                        font-weight: bold;
                        &:hover {
                            color: #222;
                            font-weight: bold;
                        }
                    }
                }
            }
            .form {
                a {
                    border: 0.18rem solid #a29bfe;
                    border-radius: 0.4rem;
                    padding: 0.2rem 0.8rem;
                    color: #a29bfe;
                    &.form-gb {
                        background: #a29bfe;
                        color: #fff;
                        margin-left: 8px;
                    }
                }
            }
        }
        label {
            display: none;
            & + input {
                display: none;
            }
        }
    }
}

@media @small {

    header {
        .navbar {
            flex-flow: row wrap;
            label {
                display: block;
                margin-left: auto;
                font-size: 1.2rem;
                border: solid 1px #ddd;
                padding: 0.2rem 0.6rem;
                color: #555;
                cursor: pointer;
                & + input:checked {
                    & + .collapse {
                        display: block;
                    }
                }
            }
            .collapse {
                display: none;
                width: 100%;
                flex-flow: column;
                margin-top: 0.4rem;
                .links {
                    flex-direction: column;
                    margin-bottom: 1rem;
                    li {
                        margin: 0.5rem 0;
                    }
                }
            }
        }
    }
}
@media @medium {

}

@media @big {

}
</style>

<template>
    <div>
        <header>
            <div class="container">
                <div class="navbar">
                    <a href="" class="logo">Templete</a>
                    <label for="toggle-nav">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </label>
                    <input type="checkbox" id="toggle-nav" />
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

<script>
export default {};
</script>