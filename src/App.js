import './App.css';
import { React } from 'react';
function App() {
  return (
    <>
      <Form />
    </>
  );
}

function Form() {
  return (
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Nickname</label>
        </div>
        <div class="user-box">
          <input type="email" name="" required="" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required="" />
          <label>Age</label>
        </div>
        <div class="user-box">
          <select name="gender">
            <option value="none" selected>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="user-box">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
