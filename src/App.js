import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import ListOfStudent from './Components/ListOfStudent';

function App() {
  const name = "salim"
  const age = 19;
  const profession = "student"
  const sayHello = (x) => {
    alert(`hello ${x}`)
  }
  const object = {
    name: "salim", age: 19, profession: "student", sayHello: function (x) {
      alert('hello' + x)
    }
  }
  const arrayOfStudents=[{id:0,name:"salim",age:30},{id:1,name:"emna",age:28},{id:2,name:"allem",age:25}]
  return (
    <div className="App">
    {/*   <Profile
        name={name}
        age={age}
        profession={profession}
        sayHello={sayHello}

      /> */}
      <ListOfStudent arrayOfStudents={arrayOfStudents}/>
    </div>
  );
}

export default App;
