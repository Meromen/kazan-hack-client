<template>
  <div class="request-details">
    <back-bar></back-bar>
    <div class="info">
      <p>
        <span>
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.06848" cy="3" r="3" fill="#292D39"/>
            <path d="M13.0685 12H1.0685C1.0685 12 0.914372 11.0651 1.0685 10.5C1.18338 10.0788 1.31997 9.85899 1.5685 9.5C2.12423 8.69729 2.38478 8.4678 3.06848 8C4.08769 7.30264 4.53454 7.19147 5.56848 7C6.52847 6.82222 7.60851 6.82222 8.5685 7C9.60244 7.19147 10.21 7.39287 11.0685 8C12.0893 8.72189 12.8065 9.27747 13.0685 10.5C13.1912 11.0728 13.0685 12 13.0685 12Z" fill="#292D39" stroke="#292D39"/>
          </svg>
        </span>
        От кого: {{ user.name }}
      </p>
      <p>
        <span>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.77592 0C8.93757 0 9.06861 0.130163 9.06861 0.290727V2.76191C9.06861 2.92247 8.93757 3.05264 8.77592 3.05264C8.61426 3.05264 8.48324 2.92247 8.48324 2.76191V0.290727C8.48324 0.130163 8.61426 0 8.77592 0ZM3.21495 0C3.3766 0 3.50763 0.130163 3.50763 0.290727V2.76191C3.50763 2.92247 3.3766 3.05264 3.21495 3.05264C3.05328 3.05264 2.92226 2.92247 2.92226 2.76191V0.290727C2.92226 0.130163 3.05328 0 3.21495 0ZM10.8247 0.872182C11.4753 0.872182 12 1.39338 12 2.03963V4.65164H0V2.03963C0 1.39338 0.524722 0.872182 1.17531 0.872182H2.04878H2.62958V2.11232C2.45008 2.27201 2.3369 2.5037 2.3369 2.76191C2.3369 3.2436 2.73 3.63409 3.21495 3.63409C3.69988 3.63409 4.09299 3.2436 4.09299 2.76191C4.09299 2.5037 3.9798 2.27201 3.80031 2.11232V0.872182H8.19512V2.10777C8.01282 2.26759 7.89787 2.5014 7.89787 2.76191C7.89787 3.2436 8.29098 3.63409 8.77592 3.63409C9.26085 3.63409 9.65397 3.2436 9.65397 2.76191C9.65397 2.50601 9.54257 2.27641 9.36585 2.11686V0.872182H10.8247ZM12 5.23309V11.0431C12 11.6893 11.4753 12.2105 10.8247 12.2105H1.17531C0.524722 12.2105 0 11.6893 0 11.0431V5.23309H12Z" fill="black"/>
          </svg>
        </span>
        Дата: {{ ` ${reqTime.getDate()}.${reqTime.getMonth() + 1}.${reqTime.getFullYear()}` }}
      </p>
      <p>
        <span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H1.56912V3.12923H0V0ZM0 8.87095H1.56912V12H0V8.87095ZM2.82292 8.87095H12V12H2.82292V8.87095ZM0 4.43512H1.56912V7.56417H0V4.43512ZM2.82292 4.43512H12V7.56417H2.82292V4.43512ZM2.82292 0H12V3.12923H2.82292V0Z" fill="black"/>
          </svg>
        </span>
        Категория: {{ req.request.kind }}
      </p>
      <p>
        <span>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.243 1.76165C6.47249 -2.00891 0 0.675903 0 6.00509C0 11.3343 6.47249 14.0175 10.243 10.247C12.5857 7.90437 12.5857 4.10425 10.243 1.76165ZM5.99961 6.39863H9.63173V7.03017L5.58273 7.01462C5.39296 6.93373 5.36807 6.81707 5.36807 6.63663V2.76807H5.99961V6.39863Z" fill="black"/>
          </svg>
        </span>
        Время прибытия мастера: В ближайшее время.
      </p>
      <p>
        <span>
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.06848" cy="3" r="3" fill="#292D39"/>
            <path d="M13.0685 12H1.0685C1.0685 12 0.914372 11.0651 1.0685 10.5C1.18338 10.0788 1.31997 9.85899 1.5685 9.5C2.12423 8.69729 2.38478 8.4678 3.06848 8C4.08769 7.30264 4.53454 7.19147 5.56848 7C6.52847 6.82222 7.60851 6.82222 8.5685 7C9.60244 7.19147 10.21 7.39287 11.0685 8C12.0893 8.72189 12.8065 9.27747 13.0685 10.5C13.1912 11.0728 13.0685 12 13.0685 12Z" fill="#292D39" stroke="#292D39"/>
          </svg>
        </span>
        Мастер: {{ req.worker.name }}
      </p>
      <p>
        <span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9943 9.46415C12.0197 9.65896 11.9603 9.82834 11.8164 9.9723L10.1269 11.6491C10.0506 11.7338 9.95114 11.8058 9.82834 11.8651C9.70554 11.9244 9.58488 11.9625 9.46635 11.9794C9.45788 11.9794 9.43242 11.9816 9.39005 11.9858C9.34777 11.99 9.29272 11.9922 9.22497 11.9922C9.06401 11.9922 8.80357 11.9647 8.44363 11.9096C8.0837 11.8545 7.64333 11.719 7.12253 11.5031C6.6016 11.2871 6.0109 10.9631 5.35034 10.5313C4.68977 10.0994 3.98682 9.50652 3.24155 8.75275C2.64871 8.16839 2.15751 7.60943 1.76793 7.0759C1.37836 6.54233 1.065 6.04901 0.82787 5.59592C0.590716 5.14283 0.412866 4.73208 0.294299 4.36367C0.175733 3.99527 0.0952767 3.67768 0.0529315 3.41091C0.0105863 3.14413 -0.00635178 2.93452 0.00211726 2.78208C0.0105863 2.62964 0.0148208 2.54495 0.0148208 2.52801C0.0317589 2.40944 0.0698696 2.28876 0.129153 2.16596C0.188436 2.04316 0.260423 1.94364 0.345113 1.86742L2.03469 0.17785C2.15325 0.0592833 2.28876 0 2.4412 0C2.5513 0 2.64869 0.0317589 2.73338 0.0952767C2.81807 0.158795 2.89006 0.237133 2.94934 0.330293L4.30862 2.90912C4.38485 3.04462 4.40602 3.19283 4.37214 3.35374C4.33827 3.51465 4.26628 3.65016 4.15618 3.76025L3.53371 4.38273C3.51677 4.39967 3.50195 4.42719 3.48924 4.4653C3.47654 4.50341 3.47019 4.53517 3.47019 4.56058C3.50407 4.73843 3.58029 4.94169 3.69885 5.17035C3.80048 5.37361 3.95716 5.62133 4.16889 5.91351C4.38061 6.20569 4.68126 6.54231 5.07084 6.92342C5.45194 7.31304 5.79071 7.61576 6.08712 7.83177C6.38348 8.04764 6.63128 8.2065 6.8303 8.30813C7.02933 8.40976 7.18177 8.47116 7.28761 8.49227L7.44636 8.52405C7.4633 8.52405 7.49089 8.51768 7.52896 8.50499C7.56707 8.49227 7.59459 8.47747 7.61155 8.46051L8.33563 7.7237C8.48816 7.58822 8.66593 7.52047 8.8692 7.52047C9.01322 7.52047 9.12749 7.54585 9.21218 7.59669H9.22486L11.6766 9.04489C11.8545 9.15508 11.9604 9.29477 11.9943 9.46415Z" fill="#010002"/>
          </svg>
        </span>
        Связаться с мастером: {{ req.worker.phone }}
      </p>
    </div>
    <h3>Статус</h3>
    <div class="statuses">
      <div :class="{'active' : req.status.toLowerCase() === 'рассматривается'}" class="status">
        <div  style="background: red;" class="circle"></div>
        <span>Рассматривается</span>
      </div>
      <div :class="{'active' : req.status.toLowerCase() === 'ожидается'}" class="status">
        <div  style="background: orange;" class="circle"></div>
        <span>Ожидается</span>
      </div>
      <div :class="{'active' : req.status.toLowerCase() === 'выполняется'}" class="status">
        <div  style="background: yellow;" class="circle"></div>
        <span>Выполняется</span>
      </div>
      <div :class="{'active' : req.status.toLowerCase() === 'выполнено'}" class="status">
        <div  style="background: green;" class="circle"></div>
        <span>Выполнено</span>
      </div>
    </div>
    <input v-show="user.role.toLowerCase() == 'client' && req.status.toLowerCase() != 'выполнено'" @click="cancelRequest" class="btn-2" type="button" value="Отменить заявку">
    <input v-show="user.role.toLowerCase() == 'worker' && req.status.toLowerCase() != 'выполнено'" @click="changeStatus" class="btn-2" type="button" value="Поменять статус">
    
  </div>
</template>

<script>
import backBar from '@/components/BackBar'

export default {
  components: {
    backBar
  },
  created () {
    if (!this.user) { this.$router.push('/auth') }

    this.req = this.requests.find((element, index) => {
      if (element.id === this.$route.params.id) { return element }
    })
  },
  data () {
    return {
      req: {}
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    requests () {
      return this.$store.state.requests
    },
    reqTime () {
      return new Date(this.req.date)
    }
  },
  methods: {
    cancelRequest () {
      this.$store.dispatch('DELETE_REQUEST', this.req.id)
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeStatus() {
      this.$store.dispatch('CHANGE_STATUS', {id: this.req.id, status: this.req.status.toLowerCase()})
    }
  }
}
</script>

<style lang="scss" scoped>
.request-details {
  height: 95%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .info {
    padding: 5px;
    border: 1px solid rgba(41, 45, 57, 0.2);
    border-width: 1px 0;
  }

  .statuses {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 20%;

    .status {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .circle {
      width: 8px;
      height: 8px;
      border-radius: 100px;
      transition: 0.3s;
      
      @media (min-width: 600px) {
        width: 30px;
        height: 30px;
      }
    }

    span {
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 11px;
      transition: 0.3s;
      
      color: #9D9D9D;
      
      @media (min-width: 600px) {
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
      }
    }
  }

  .active {
    .circle {
      width: 16px;
      height: 16px;
      border-radius: 100px;
      
      @media (min-width: 600px) {
        width: 60px;
        height: 60px;
      }
    }

    span {
      font-style: normal;
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
      color: #000000;
      
      @media (min-width: 600px) {
        font-size: 24px;
        line-height: 28px;
      }
    }
  }
}

</style>
