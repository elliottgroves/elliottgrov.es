<script setup lang="ts">
    import { onMounted, onUnmounted } from 'vue'

    let shouldAdjustHeight = false

    const handleScroll = (event: Event) => {
        const tracerTexts = document.getElementsByClassName('tracer-text-container')
        if (!tracerTexts || !shouldAdjustHeight) {
            return
        }
        [...tracerTexts].forEach(t => {
            t.style.top = `calc(${2 * window.innerHeight}px - ${event.target.scrollTop}px)`
        })
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                shouldAdjustHeight = true
            } else {
                shouldAdjustHeight = false
            }
        })
    })

    onMounted (() => {
        const rootElement = document.getElementById('app')
        const tracerText = document.getElementById('tracer-text-trigger')
        rootElement?.addEventListener('scroll', handleScroll, false)
        observer.observe(tracerText)
    })

    onUnmounted(() => {
        const rootElement = document.getElementById('app')
        const tracerText = document.getElementById('tracer-text-trigger')
        rootElement?.removeEventListener('scroll', handleScroll, false)
        observer.observe(tracerText)
    }) 
</script>

<template>
    <div class="background-container">
        <div class="background-images">
            <img src="https://images.unsplash.com/photo-1555037015-1498966bcd7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="">
            <img src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" alt="">
        </div>
        <div v-for="i in [0,1,2,3]" :class="`tracer-text-contanier-${i}`" class="tracer-text-container">
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
                <!-- <p>We're all</p> -->
                <p class="large-split-text">human</p>
                <!-- <p>Shouldn't the web be?</p> -->
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
            &:first-of-type {
                border-top-left-radius: 100%;
                border-bottom-left-radius: 100%;
            }
            &:last-of-type {
                border-top-right-radius: 100%;
                border-bottom-right-radius: 100%;
            }
        }
    }
    .tracer-text-container {
        position: absolute;
        left: 0;
        right: 100vw;
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        transition: top 0.5s cubic-bezier(.73,.37,.52,1.63);
        &:nth-child(4) {
            transition-delay: 75ms;
            .tracer-text {
                color: red !important;
            }
        }
        &:nth-child(3) {
            transition-delay: 150ms;
            .tracer-text {
                color: blue !important;
            }
        }
        &:nth-child(2) {
            transition-delay: 225ms;
            .tracer-text {
                color: yellow !important;
            }
        }
        &:nth-child(5) {
            filter: drop-shadow(0 0 6px #fff);
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
                    color: white;
                    transform: translateX(-30vw);
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
    color: white;
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
            background: rgb(10,10,10);
            justify-content: center;
            align-items: flex-start;
            padding: 2rem;
            overflow: hidden;
            font-size: 3rem;
            p {
                font-family: 'Libre Baskerville', serif;
            }
            h1 {
                font-family: 'Abril Fatface', cursive;
            }
            .large-split-text {
                transform: translateX(-30vw);
                font-family: 'Abril Fatface', cursive;
                font-size: clamp(4rem, 20vw, 20rem);
            }
        }
    }
}
</style>