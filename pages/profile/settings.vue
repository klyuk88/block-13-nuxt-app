<template>
  <div class="settings_page">
    <section class="beginner-header">
      <div class="container">
        <h2 class="beginner-header__title">Настройки</h2>
      </div>
    </section>
    <section class="settings_data">
      <div class="container">
        <div class="settings_data_content">
          <div class="settings_data_header">
            <h2 class="settings_data_header__title">Мои данные</h2>
            <span
              class="settings_data_header__edit_data"
              v-if="readOnly"
              @click="editSettings"
            >
              Редактировать
            </span>
            <div class="settings_saved" v-else>
              <span
                class="settings_data_header__edit_data save"
                @click="saveSattings"
              >
                Сохранить
              </span>
              <span
                class="settings_data_header__edit_data"
                @click="cancelSettigs"
              >
                Отменить
              </span>
            </div>
          </div>
          <div class="settings_data_header_form">
            <FormInput
              :type="'text'"
              :placeHolder="'Имя'"
              v-model="form.name"
              :readOnly="readOnly"
            />
            <div class="check_box_input_wrap">
              <input
                type="checkbox"
                name="Отказ от рассылки"
                id="not_send"
                v-model="form.checkSend"
              />
              <label for="not_send">
                <span>
                  <img
                    v-if="form.checkSend"
                    src="~/assets/img/profile/check.svg"
                    alt=""
                  />
                </span>
                <p>Отказаться от рассылки новостей</p>
              </label>
            </div>
            <FormInput
              :type="'tel'"
              :placeHolder="'Телефон'"
              v-model="form.tel"
              :readOnly="readOnly"
            />
            <FormInput
              :type="'password'"
              :placeHolder="'Пароль'"
              v-model="form.password"
              :readOnly="readOnly"
            />

            <a href="#" class="settings_data_header_form__logout"
              >Выйти из аккаунта</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readOnly: true,
      form: {
        name: null,
        tel: null,
        password: null,
        checkSend: true,
      },
    };
  },
  methods: {
    editSettings() {
      this.readOnly = false;
    },
    saveSattings() {
      this.readOnly = true;
    },
    cancelSettigs() {
      this.readOnly = true;
    },
  },
};
</script>

<style lang="sass">
.check_box_input_wrap
    display: flex
    align-items: center
    justify-content: center
    margin-top: -15px
    margin-bottom: 20px
    input
        width: 0
        height: 0
        opacity: 0
    label
        display: flex
        align-items: center
        cursor: pointer
        p
            font-size: 12px
            text-transform: uppercase
            font-weight: 700
            color: #8F8F8F
        span
            display: flex
            align-items: center
            justify-content: center
            width: 20px
            height: 20px
            border: 1px solid #8F8F8F
            margin-right: 10px
</style>