import "./App.css";
import Card from "./components/card";

function App() {
    return (
        <div className="main-div">
            <Card   
                title="Insta"
                description="This is inst application "
                img="https://cdn-icons-png.flaticon.com/128/3670/3670125.png"
                link="https://instagram.com"
            />
            <Card />
        </div>
    );
}

export default App;
