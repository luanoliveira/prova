class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      selected: null,
      loading: false,
      options: []
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

  onRemoveAll = (event) => {
    this.setState({
      selected: null,
      options: []
    });
  }

  getComponentOptions() {
    if (this.state.loading) {
      return (
        <div className="text-center">
          <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i>
        </div>
      );
    }

    if (this.state.options.length == 0) {
      return (<div className="alert alert-danger">Nenhum item encontrado</div>);
    }

    const options = this.state.options.map(option => {
      return (
        <option value={option.valor}>
          {option.nome}
        </option>
      );
    });
  
    return (
      <div className="form-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {this.state.options.length}
              {this.state.options.length == 1 ? ' item' : ' itens' }
            </span>
          </div>
          <select className="form-control" onChange={this.handleChange}>
            <option value="" selected={this.state.selected==null}>- Selecione um valor -</option>
            {options}
          </select>
        </div>
      </div>
    );
  }

  load = (event) => {

    this.setState({
      loading: true,
      selected: null
    });

    // aqui timeout só para visualizar a animação
    setTimeout(() => {
      axios
        .get('api.json')
        .then(response => {
          // handle success
          this.setState({
            options: response.data
          });
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
          this.setState({
            loading: false
          })
        });
      }, 500);
  }
  
	render() {
		return (
			<div className="container py-5">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-6">
            <div className="text-center">
              <img 
                src="https://www.activesoft.com.br/frontend/images/logo.png" 
                alt="Activesoft"
                width="200px" />
            </div>
            <p className="text-center">Teste Operacional</p>
            <p>
              <strong>Nome:</strong> {this.props.name}<br/>
              <strong>E-mail:</strong> {this.props.email}
            </p>
            <small className="text-muted">Implemente um componente React que ao inicializar realize uma requisição a uma API (aqui usaremos um JSON como API Mock) e com o resultado monte um SELECT para que seja possível escolher um item da lista.<br/>
            Implemente também um botão que possa forçar a atualização da lista do SELECT realizando uma nova consulta a API e atualizando a lista.</small>

            <hr/>
            
            {this.getComponentOptions()}
          
            {this.state.selected != null &&
            <button 
              type="button"
              className="btn btn-secondary mr-2"
              onClick={this.onRemoveItem}>Remover Item</button>
            }

            {this.state.options.length > 0 && !this.state.loading &&
            <button 
              type="button"
              className="btn btn-secondary mr-2"
              onClick={this.onRemoveAll}>Remover Todos</button>
            }

            {!this.state.loading &&
            <button 
              type="button"
              className="btn btn-success mr-2"
              onClick={this.load}>Atualizar</button>
            }
          </div>
        </div>
      </div>
		);
  }
  
  componentDidMount() {
    this.load();
  }
}

ReactDOM.render(
	<App 
    name="Luan Oliveira"
    email="luanconecte@gmail.com"
		/>,
	document.getElementById('app')
);