<template>
    <div class="ui-nav-box">
        <b-navbar toggleable="lg" class="ui-navbar" type="dark" variant="dark">
            
            <b-navbar-brand href="#" class="ui-nav-logo" @click="goPage('home')"></b-navbar-brand>
                
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav column>
                        <b-nav-item @click="goPage('home')">{{ $t("home")}}</b-nav-item>
                        <b-nav-item @click="goPage('house')">{{$t("House")}}</b-nav-item>
                        <b-nav-item @click="goPage('hotel')">{{$t("Hotel")}}</b-nav-item>
                        <b-nav-item @click="goPage('office')">{{$t("WorkSpace")}}</b-nav-item>
                        <b-nav-item @click="goPage('bridalShop')">{{$t("BridalShop")}}</b-nav-item>
                        <b-nav-item @click="goPage('business')">{{$t("Business")}}</b-nav-item>
                        <b-nav-item @click="goPage('brand')">{{$t("Brand")}}</b-nav-item>
                        <b-nav-item @click="goPage('contact')">{{$t("ContactUs")}}</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

            <div class="ui-slider-lang">
                <span @click="changeLang('zh-CN')">{{$t("ZH")}}</span>
                <span @click="changeLang('en-us')">/ {{$t("EN")}}</span>
            </div>
            <small class="ui-slider-bei">京ICP备12345</small>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "slider",
    data() {
        return {
            
        }
    },
    methods: {
        goPage (val) {
            this.$router.push('/'+val);
        },
        changeLang (val) {
            localStorage.lang = val;
            this.$i18n.locale = val;
        }
    }
};
</script>
<style>
.ui-slider-bei{
    color: rgba(255, 255, 255, 0.5);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #343a40;
    text-align: center;
    line-height: 35px;
}
.ui-slider-lang {
    color: rgba(255, 255, 255, 0.5);
}
.ui-slider-lang {
    cursor: pointer;
    margin-bottom: 10px;
    position: absolute;
    right: 80px;
    top: 14px;
}
.ui-nav-box .ui-nav-logo{
    background: url('../assets/logo.jpg') no-repeat center;
    background-size: contain;
    height: 26px;
    width: 46px
}
.h{
    height: 100%;
}
.h-ui-auto {
    height: auto;
}
.ui-item-txt {
    padding: 22px 54px;
}
.ui-item-des{
    color: #9B9B9B;
    line-height: 30px;
}
.navbar-light .navbar-nav .nav-link{
    color: #333;
}
.ui-slider-lang span:hover,
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:visited{
    color: rgba(255, 255, 255, 0.75);
    font-weight: bold;
}
@-webkit-keyframes fadeInOut2 {
    0% {
        opacity:0.8;
    }
    100% {
        opacity:1;
    }
}
.anim_fade_image {
    -webkit-animation-name: fadeInOut2;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-duration: 0.8s;
}

div .swiper-button-next,
div .swiper-button-prev{
    background-size: 16px 44px;
}
div .swiper-button-next:focus,
div .swiper-button-prev:focus{
    outline: none;
}
@media (min-width: 768px) { 
   
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width:  992px) { 
    .h-ui-auto{
        height: 100%;
        overflow: hidden;
    }
    .move-pl {
        padding-left: 0;
    }
    .move-pr{
        padding-right: 0;
    }

    .ui-navbar .ui-nav-logo {
        margin-bottom: 26px;
        margin-right: 0;
        width: 100px;
        height: 70px;
    }
   .ui-nav-box .navbar-expand-lg .navbar-nav {
        -ms-flex-direction: column;
        flex-direction: column;
    }
   .ui-nav-box .navbar-expand-lg {
        -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
        text-align: center;
    }
    .ui-nav-box, .ui-navbar {
        height: 100%;
    }
    .ui-nav-box .navbar-collapse {
        -webkit-box-align: flex-start;
        align-items: flex-start;
    }
    .ui-slider-bei,
    .ui-slider-lang {
         display: block;
    }
    .ui-slider-lang {
        right: auto;
        top: auto;
        position: inherit;
    }
    .ui-slider-bei{
        position: inherit;
        width: auto;
        background-color: transparent;
        text-align: center;
        line-height: 1;
    }
    .ui-item-txt {
        display: none;
    }
    div .swiper-button-prev {
        left: 190px;
    }
}

</style>
