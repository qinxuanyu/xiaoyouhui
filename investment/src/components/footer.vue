<template>
    <footer id="footer">
        <div class="wrap">
            <ul class="site">
                <li class="left">
                    <img src="../assets/logo.png" alt="">
                    <div class="name">大湾区招引服务平台</div>
                </li>
                <li class="middle">
                    <div class="item">
                        <i></i>
                        <p>联系电话：0775-83294515</p>
                    </div>
                    <div class="item">
                        <i></i>
                        <p>联系地址：深圳市龙华区望城坡街道南家塘社区公共服务中心4楼（地铁4号线民乐站2A出口，新奥加气站右侧）</p>
                    </div>
                </li>
                <li class="rigth">
                    <div class="email">
                        <i></i>
                        <p>E-mail：service@yhby.org</p>
                    </div>
                    <div>
                        友情链接：
                    </div>
                    <div>校友汇</div>
                </li>
            </ul>
            <div class="info">
                <p>Copyright © 2016-2017 yhby.org. All Rights Reserved.</p>
                <p><a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank" rel="noopener noreferrer">粤ICP备19018225号</a></p>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
    #footer{
        background-color: #00238c;
        margin-top: 98px;
        min-width: 1200px;
        .wrap{
            width: 1200px;
            margin: 0 auto;
            padding:  60px 0 28px 0;
            .site{
                display: flex;
                li{
                    height: 150px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    padding: 0 30px;
                    flex: 1;
                    color: #fff;

                }
                li:not(:last-child){
                    border-right: 1px solid #fff;
                }
                .left{
                    img{
                        width: 40px;
                        height: 40px;
                    }
                    .name{
                        font-size: 22px;
                    }
                }
                .middle{
                    font-size: 14px;
                }
                .rigth{
                    align-items: flex-start;
                }
            }
            .info{
                margin-top: 48px;
                font-size: 16px;
                color: #fff;
                a{
                    color: #fff;
                }
            }
        }
     
    }      
</style>
