<script setup lang="ts">
    import { onMounted, onUnmounted } from 'vue'

    let shouldAdjustTracerTextHeight = false

    const handleScroll = (event: Event) => {
        animateTracerTexts(event);

        const backgroundOne = document.getElementById('background-one')
        if (backgroundOne) {
            const percentScrolled = (window.innerHeight - event.target.scrollTop) / window.innerHeight * 100
            backgroundOne.style.borderTopLeftRadius = `${percentScrolled}%`
        }
    }
    
    const animateTracerTexts = (event: Event) => {
        if (!('target' in event)) {
            return
        }
        const tracerTexts = document.getElementsByClassName('tracer-text-container')
        if (!tracerTexts || !shouldAdjustTracerTextHeight) {
            return
        }
        [...tracerTexts].forEach(t => {
            t.style.top = `calc(${2 * window.innerHeight}px - ${event.target.scrollTop}px)`
        })
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                shouldAdjustTracerTextHeight = true
            } else {
                shouldAdjustTracerTextHeight = false
            }
        })
    })

    onMounted (() => {
        const rootElement = document.getElementById('app')
        const tracerText = document.getElementById('tracer-text-trigger')
        rootElement?.addEventListener('scroll', handleScroll, false)
        if (tracerText) {
            observer.observe(tracerText)
        }
    })

    onUnmounted(() => {
        const rootElement = document.getElementById('app')
        rootElement?.removeEventListener('scroll', handleScroll, false)
    }) 
</script>

<template>
    <div class="background-container">
        <div class="background-images">
            <div id="background-one">

            </div>
            <!-- <img src="https://images.unsplash.com/photo-1555037015-1498966bcd7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt=""> -->
            <img src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" alt="">
        </div>
        <div v-for="i in [0,1,2,3]" class="tracer-text-container">
            <div class="tracer-text-alignment-parent">
                <div class="tracer-text-alignment-child">
                    <p class="tracer-text">human</p>
                </div>
            </div>
        </div>
    </div>
    <div id="main-layout" class="main-layout">
        <section>
            <div class="content">
                <h1>
                    Elliott<br>Groves<br>Design
                </h1>
            </div>
        </section>
        <section>
            <div class="content">
                
            </div>
        </section>
        <section id="tracer-text-trigger">
            <div class="content">
                <p>We're all</p>
                <p class="large-split-text">human</p>
                <p>Shouldn't the web be?</p>
            </div>
        </section>
        <section>
            <div class="content">
                
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.background-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .background-images {
        height: 100vh;
        width: min(1200px, 100vw);
        display: flex;
        img {
            width: 50%;
            object-position: center;
            object-fit: cover;
        }
        #background-one {
            width: 50%;
            border-top-left-radius: 100%;
            // background: linear-gradient(217deg, $accent-color-two, rgba(255,0,0,0) 70.71%),
            // linear-gradient(127deg, $bg-color, rgba(0,255,0,0) 70.71%),
            // linear-gradient(336deg, $accent-color-one, rgba(0,0,255,0) 70.71%);
            background: linear-gradient(-45deg, $accent-color-one, $accent-color-two);
            background-size: 200% 200%;
            animation: banner-bg 10s ease-in-out alternate infinite;
        }
    }
    @keyframes banner-bg {
        0% { background-position: 0% 0% }
        100% { background-position: 100% 100% }
    }
    .tracer-text-container {
        position: absolute;
        left: 0;
        right: 100vw;
        top: 100vh;
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        transition: top 1s cubic-bezier(.8,.22,.05,1.67);
        &:nth-child(4) {
            transition-delay: 50ms;
            .tracer-text {
                color: $accent-color-one !important;
            }
        }
        &:nth-child(3) {
            transition-delay: 130ms;
            .tracer-text {
                color: $accent-color-two !important;
            }
        }
        &:nth-child(2) {
            transition-delay: 225ms;
            .tracer-text {
                color: $bg-color !important;
            }
        }
        .tracer-text-alignment-parent {
            width: min(1200px, 100vw);
            display: flex;
            justify-content: flex-end;
            .tracer-text-alignment-child {
                width: 50%;
                padding: 2rem;
                display: flex;
                align-items: center;
                .tracer-text {
                    color: $text-color;
                    transform: translateX(-50%);
                    font-family: 'Abril Fatface', cursive;
                    font-size: clamp(4rem, 20vw, 20rem);
                }
            }        
        }    
    }
}
.main-layout {
    width: 100vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    color: $text-color;
    font-size: 3vmin;
    position: relative;
    section {
        display: flex;
        height: 100vh;
        width: min(1200px, 100vw);
        z-index: 3;
        &:nth-child(odd) {
            justify-content: flex-end;
        }
        &:nth-child(even) {
            justify-content: flex-start;
        }
        .content {
            display: flex;
            flex-flow: column;
            width: 50%;
            background: $bg-color;
            justify-content: center;
            align-items: flex-start;
            padding: 2rem;
            overflow: hidden;
            font-size: 3rem;
            p {
                font-family: 'Reenie Beanie', cursive;
                font-size: 8rem;
                display: flex;
                flex-basis: 33.333%;
                align-items: center;
                justify-content: center;
                text-align: center;
                width: 100%;
            }
            h1 {
                font-family: 'Abril Fatface', cursive;
                display: flex;
                flex-basis: 33.333%;
            }
            .large-split-text {
                transform: translateX(-50%);
                font-family: 'Abril Fatface', cursive;
                font-size: clamp(4rem, 20vw, 20rem);
            }
        }
    }
}
</style>