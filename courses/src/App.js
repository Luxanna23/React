import logo from './logo.svg';
import './App.css';
import CourseItem from './CourseItem';

function App() {

  const courses = [
    {id: 1, nom: 'Banane', quantite: 3, prix: 2.5},
    {id: 2, nom: 'Pomme', quantite: 5, prix: 3},
    {id: 3, nom: 'Lait', quantite: 1, prix: 2},
  ];
  const sommes = courses.reduce(
    (accumulator, currentValue) => accumulator + currentValue.prix, 0 );

  return (
    <div className="container">
      <h1> Courses </h1>
        { courses.map((element) =>
      <CourseItem
        nom = {element.nom}
        quantite = {element.quantite}
        prix = {element.prix}
      /> ) }
      <p>Prix Total : {sommes} €</p>
    </div>
  );
}

export default App;
