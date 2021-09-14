class TemplateHtml extends Store{
   constructor() {
      super();
   }

   navHome2() {
      return`
      <div class="container">
         <h1 class="text-center mt-4">Книга Перемен</h1>
         <div class="text-center mt-4">древнекитайский философский трактат, предназначенный для гадания.</div>
         <div class="d-flex flex-row justify-content-center m-4">
            <button class="p-1 btn btn-secondary me-2" data-id="start_create">Генерация гексаграммы</button>
            <button class="p-1 btn btn-secondary me-2" data-id="start_select">Выбрать из таблицы</button>
            <button class="p-1 btn btn-secondary" data-id="start_question">Задать вопрос</button>
         </div>
      </div>
      `
   }
   navReg() {
      return `
      <form>
        <div class="mb-3">
            <label for="exampleInputFullName" class="form-label">Введите ваше Имя и Фамилию</label>
            <input type="text" class="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" data-id="full_name">
            <div id="fullNameHelp" class="form-text" data-id="name_comment"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Введите вашу электронную почту</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" data-id="email">
            <div id="emailHelp" class="form-text" data-id="email_comment"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Придумайте пароль</label>
            <div class="btn btn-primary" data-id="createPassword">Сгенерировать пароль</div>
            <input type="password" class="form-control" id="exampleInputPassword1" data-id="new_password">
            <div class="form-text" data-id="password_comment"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Повторите пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword2" data-id="duplicate_password">
        </div>
        <button class="btn btn-primary" data-id="btn_submit">Зарегистрироваться</button>
      </form>
      `
   }
   navLogin() {
      return `
      <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" data-id="inputEmail">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" data-id="inputPassword">
        </div>
        <button type="submit" class="btn btn-primary" data-id="btn-in">Submit</button>
      </form>
      `
   }
   navAdmin(useName) {
      return `
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" data-id="Home">Домашняя страница</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" data-id="Question">Задать вопрос</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" data-id="prediction">Предсказания</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" data-id="login">${useName}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" data-id="login_out">Выйти</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" data-id="stores_table">История предсказаний</a>
        </li>
      `
   }
   navUser(useName) {
      return `
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" data-id="Home">Домашняя страница</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" data-id="prediction">Предсказания</a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link" href="#" data-id="stores_table">История предсказаний</a>
        </li>
      </ul>
      <div class="d-flex">
        <div class="">
            <div class="navbar-text" data-id="login">Здравствуйте ${useName}</div>
        </div>
        <div class="">
            <a class="nav-link" style="color: darkgrey" href="#" data-id="login_out">Выйти</a>
        </div>
      </div>
      `
   }
   navUndefined() {
      return `
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" data-id="Home">Домашняя страница</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" data-id="prediction">Предсказания</a>
        </li>
    </ul>
    <div class="d-flex">
        <div class="">
            <a class="nav-link" style="color: darkgrey" href="#" data-id="registration">Регистрация</a>
        </div>
        <div class="">
            <a class="nav-link" style="color: darkgrey" href="#" data-id="login_in">Войти</a>
        </div>
      </div>
      `
   }

}