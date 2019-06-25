class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      selected: null,
      options: [
        {nome: 'Item 1', valor: 1},
        {nome: 'Item 2', valor: 2},
        {nome: 'Item 3', valor: 3},
        {nome: 'Item 4', valor: 4},
        {nome: 'Item 5', valor: 5},
        {nome: 'Item 6', valor: 6}
      ]
    };
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value ? event.target.value : null
    });
  }

  onRemoveItem = (event) => {
    this.setState({
      selected: null,
      options: this.state.options.filter(option => option.valor != this.state.selected)
    });
  }
  
	render() {
    const options = this.state.options.map((option) => <option value={option.valor}>{option.nome}</option>)

    let empty;

    if (this.state.options.length == 0) {
      empty = (<div className="alert alert-danger">Nenhum item encontrado</div>)
    }

		return (
			<div className="container">
			  <h2>{ this.props.name }</h2>
        <select className="form-control" onChange={this.handleChange}>
          <option value="" selected={this.state.selected==null}>- Selecione um valor -</option>
          {options}
        </select>
      
        {empty}

        <pre>{this.state.selected}</pre>
      
        {this.state.selected != null &&
        <button 
          type="button"
          className="btn btn-primary"
          onClick={this.onRemoveItem}>Remover Item</button>
        }
      </div>
		);
  }
  
  componentDidMount() {
    axios
      .get('api.json')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
}

ReactDOM.render(
	<App 
		name="Luan Oliveira"
		/>,
	document.getElementById('app')
);