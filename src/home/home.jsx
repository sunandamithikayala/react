import './home.css';
export function Home(){
    return(

        <div className="container-fluid">
            <h3 className="box bi bi-house bg-warning " >Welcome to Home</h3>
            <div className="alert alert-dismissible alert-success w-25">
                <h4>Welcome to react 18x</h4>
                <p>React is a javascript library to build web Ui</p>
                <button className="btn btn-success" data-bs-dismiss="alert">ok</button>
            </div>
        </div>
    )
}