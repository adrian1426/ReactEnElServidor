const React=require('react');

class App extends React.Component{

    handeclick(){
        console.log("click");
    }
    render(){
        return(
            // React.createElement('h1',null,'Hola mundo')
            <div>
                <h1>Hola mundo con react y GIT</h1>
                <p>parrafos</p>
                <button onClick={this.handeclick.bind(this)}>boton</button>
            </div>
        );
    }
}

module.exports=App;