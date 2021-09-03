class Template {

   navHome() {
      return`
      <div class="container">
         <h1 class="text-center mt-4">Книга Перемен</h1>
         <div class="text-center mt-4">древнекитайский философский трактат, предназначенный для гадания.</div>
         <div class="d-flex flex-row justify-content-center m-4">
            <button class="p-1 btn btn-secondary" data-id="start">Начать гадание</button>
         </div>
      </div>
      `
   }
   navHome2() {
      return`
      <div class="container">
         <h1 class="text-center mt-4">Книга Перемен</h1>
         <div class="text-center mt-4">древнекитайский философский трактат, предназначенный для гадания.</div>
         <div class="d-flex flex-row justify-content-center m-4">
            <button class="p-1 btn btn-secondary me-1" data-id="start_create">Генерация гексаграммы</button>
            <button class="p-1 btn btn-secondary" data-id="start_select">Выбрать из таблицы</button>
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
            <div id="fullNameHelp" class="form-text" data-id="name_comment">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Введите вашу электронную почту</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" data-id="email">
            <div id="emailHelp" class="form-text" data-id="email_comment">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Придумайте пароль</label>
            <div class="btn btn-primary" data-id="createPassword">Сгенерировать пароль</div>
            <input type="password" class="form-control" id="exampleInputPassword1" data-id="new_password">
            <div class="form-text" data-id="password_comment">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Повторите пероль</label>
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
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      `
   }
}
