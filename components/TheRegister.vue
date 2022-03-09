<template>
      <!-- REGISTER-FORM -->  	
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
                
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">
            Вход в аккаунт
          </div>
          <button id="register-form__btn-close" @click="$emit('closePop')"></button>       
        </div> 
        <form class="js-form form-register-form" action="mail.php" id="form-register-form">
          <input type="text" class="register-form__input" placeholder="Email /телефон" name="email" required>
          <input type="text" class="register-form__input" placeholder="Пароль" name="password" required>
          <button class="register-form__btn btn" data-submit>Войти</button>
          <div class="register-form__account-have">
            <span>Нет аккаунта? </span><a href="#">Зарегистрироваться</a>
          </div>
          <a href="#" class="register-form__pass-forget">Забыли пароль?</a>
          <div class="register-form__personal">
            <span>Входя в систему вы соглашаесть с нашими условиями</span>
            <a href="#">Политика конфиденциальности</a> 
            <span>и</span>
            <a href="#">Условия использования</a>
          </div>
        </form> 				                
      </div>
    </div>
  </div><!-- //register-form -->
</template>

<script>

export default {
  emits: ['closePop']
  
}
</script>
<style scoped>
#register-form input {
  color: #fff;
}

#register-form input:focus {
  border: 1px solid #fff
}

</style>