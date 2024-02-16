import logo from './logo.svg';
import propTypes from 'prop-types';
import './App.css';


const CourseItem = ({ nom, quantite, prix }) => {

    function random(){
        let a ='#';
        for (let i = 0; i<6; i++){
            a += Math.floor(Math.random() * 9);
        }
        console.log(a);
        return a;
    }

    return (
        
        <div className="course-item" style={{backgroundColor : random()}}>
            <p>Nom : {nom} </p>
            <p>Quantité : {quantite} </p>
            <p>Prix : {prix} </p>
        </div>
    )
};

CourseItem.propTypes = {


}

export default CourseItem;