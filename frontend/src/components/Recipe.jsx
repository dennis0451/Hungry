import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function ContainerExample() {
//   return (
//     <Container>
//       <Row>
//         <Col>1 of 1</Col>
//       </Row>
//     </Container>
//   );
// }

// export default ContainerExample;

function Recipe(props) {
  const [fav, setFav] = useState(false);
  console.log(fav)

//   function removeButton() {
//     console.log('saved')
    
//     // return setSaved(!saved)
//   }

  function addFavorite() {
    setFav(!fav)
    console.log(fav)
    let label = props.label;
    axios
      .post("/favorite", {
        label: props.label,
        image: props.image,
        url: props.url,
      })
      .then((response) => console.log("added to favorites"));
    
  }

  function openRecipe() {
    window.open(props.url);
  }

  //mapped over ingredients array to create new array of li items
  // let ingredients = props.items.map(item =>
  //     <li>{item}</li>
  // )
  return (
    <div className="card">
      <img src={props.image} className="card--image" alt="" />
      <p className="food--name">{props.label}</p>
      <Button variant="primary" size="sm" onClick={openRecipe}>
        View Recipe
      </Button>
      {!fav ? (
        <Button
          variant="secondary"
          className="btn--notsaved"
          size="sm"
          onClick={addFavorite}
        >
          Save to Favorites
        </Button>
      ) : (
        <Button variant="success" size="sm">
          Saved
        </Button>
      )}
    </div>
  );
}

export default Recipe;

// image={item.recipe.image} ingredients={item.recipe.ingredientLines} directions={item.recipe.url} source={item.recipe.source}
