import "./App.css";
import Button from "../Button/Button";
import Submit from "../Submit/Submit";

const App = () => {
  return(
    <>
      <div className="Container">
        <div className="img-star">
          <img className="icon-star" src="../images/icon-star.svg" alt="" />
        </div>
        <div className="text">
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improving our offering!</p>
        </div>
        <div className="div-numbers">
          <Button numbers={1}/>
          <Button numbers={2}/>
          <Button numbers={3}/>
          <Button numbers={4}/>
          <Button numbers={5}/>
        </div>
        <Submit/>
      </div>
    </>
  )
}

export default App;