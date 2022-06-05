<template>
  <div>
    <main-nav :map="map"></main-nav>
    <div class="agent-container">
      <div class="agent-info">
        <transition name="agent-logo" appear>
          <div class="agent-name-container">
            <transition name="agent-role-logo" appear>
              <img v-if="role === 'controller'" :src="controllerLogo" alt="Controller logo"/>
              <img v-else-if="role === 'duelist'" :src="duelistLogo" alt="Duelist logo"/>
              <img v-else-if="role === 'initiator'" :src="initiatorLogo" alt="Initiator logo"/>
              <img v-else-if="role === 'sentinel'" :src="sentinelLogo" alt="Sentinel logo"/>
              <div v-else class="image-placeholder"></div>
            </transition>
<!--            <h1 class="agent-name">{{ name.toUpperCase() }}</h1>-->
            <h1 class="agent-name">BRIMSTONE</h1>
          </div>
        </transition>
        <div class="agent-details">
          <section>
            <divider text="GAMEPLAY TIPS"></divider>
            <slot name="tips"></slot>
          </section>
          <section>
            <divider text="PICK REASONING"></divider>
            <slot name="reasons"></slot>
          </section>
          <section>
            <divider text="LINEUPS"></divider>
            <slot name="lineups">
              <p>
                <i>No lineups available for this agent on this map</i>
              </p>
            </slot>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainNav from "src/components/valorant/mainNav";
import divider from 'src/components/shared/divider'
import controllerLogo from 'src/assets/images/valorant/controller.svg'
import duelistLogo from 'src/assets/images/valorant/duelist.svg'
import initiatorLogo from 'src/assets/images/valorant/initiator.svg'
import sentinelLogo from 'src/assets/images/valorant/sentinel.svg'

export default {
  name: 'Agent',
  components: {
    mainNav,
    divider
  },
  props: {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      validator: (value) => {
        return ['controller', 'duelist', 'initiator', 'sentinel'].includes(value)
      }
    },
    map: {
      type: String,
      required: false
    }
  },
  data: () => {
    return {
      controllerLogo,
      duelistLogo,
      initiatorLogo,
      sentinelLogo
    }
  }
}
</script>

<style scoped lang="scss">
	.agent-container {
    font-family: "Zen Kaku Gothic New", sans-serif;
		display: flex;
		justify-content: center;
    padding-bottom: 6rem;
		.agent-info {
			display: flex;
			flex-flow: column;
			flex: 0 1 700px;
      .map-name {
        text-align: right;
        margin: 0;
      }
      .agent-name-container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin: 1rem 0 3rem 0;
        img, .image-placeholder {
          height: 2rem;
          margin-right: 1rem;
        }
        .agent-name {
          font-family: "Anton", sans-serif;
          margin: 0;
          line-height: 4rem;
          font-weight: normal;
        }
      }
      .agent-details {
        section {
          margin-bottom: 3rem;
          &:nth-child(odd) {
            background: #fff1;
            padding: 1rem 2rem;
            margin: 0 -2rem;
            margin-bottom: 3rem;
          }
        }
      }
		}
	}
  @media (max-width: 700px) {
    .agent-container {
      height: 100%;
      .agent-info {
        width: 100%;
        padding: 0 30px;
      }
    }
  }
  .agent-logo-enter-active {
    transition: transform 1s ease-out, opacity 1s ease-out;
  }
  .agent-logo-enter {
    transform: translateY(-1rem);
    opacity: 0;
  }
  .agent-role-logo-enter-active {
    transition: transform 1s ease-out;
  }
  .agent-role-logo-enter {
    transform: rotate(-40deg);
  }
</style>

<style lang="scss">
.agent-info {
  ol {
    padding-left: 20px;
    list-style-position: outside;
  }
  section {
    strong {
      font-family: Arial, sans-serif;
    }
  }
}
</style>