const createStore = (reducer, initialState) => {
  let currentState = initialState
  const listeners = []

  const getState = () => currentState

  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = listener => listeners.push(listener)

  return { getState, dispatch, subscribe }
}

const connect = (mapStateToProps, mapDispatchToProps) => Component => {
    // NOTE В компоненте Provider store является глобальным обьектом
    // поэтому необходимо добавить window

    // NOTE небходимо при декорировании компонента
    // нужно передавать props в декорируемый компонент
    // иначе в <ToDo title="Список задач"/>
    // title в компонент не будет передан
    return class extends React.Component {
      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(window.store.getState(), this.props)}
            {...mapDispatchToProps(window.store.dispatch, this.props)}
          />
        )
      }

      componentDidMount() {
        // NOTE В компоненте Provider store является глобальным обьектом
        // поэтому необходимо добавить window
        window.store.subscribe(this.handleChange)
      }

      handleChange = () => {
        this.forceUpdate()
      }
    }
  }

class Provider extends React.Component {
  componentWillMount() {
    window.store = this.props.store
  }

  render() {
    return this.props.children
  }
}

// APP

// actions
const ADD_TODO = 'ADD_TODO'

// action creators
const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
})

// reducers
const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      state.push(action.payload)
      return state
    default:
      return state
  }
}

// components
class ToDoComponent extends React.Component {
  state = {
    todoText: ''
  }

  // NOTE Each child in an array or iterator should have a unique "key" prop
  render() {
    return (
      <div>
        <label>{this.props.title || 'Без названия'}</label>
        <div>
          <input
            value={this.state.todoText}
            placeholder="Название задачи"
            onChange={this.updateText}
          />
          <button onClick={this.addTodo}>Добавить</button>
          <ul>
            {this.props.todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
          </ul>
        </div>
      </div>
    )
  }

  // NOTE функция вида updateText() {}
  // имеет свой this поэтому мы изнутри ее не можем обратиться к свойству state
  // можно воспользоваться например updateText = () => {}
  // которая своего this не имеет
  updateText = (e) => {
    const { value } = e.target

    // NOTE неправильно менять state напрямую
    // Do not mutate state directly. Use setState()
    this.setState({ todoText: value })
  }

  // NOTE функция вида addTodo() {}
  // имеет свой this поэтому мы изнутри ее не можем обратиться к свойству state
  // можно воспользоваться например addTodo = () => {}
  // которая своего this не имеет
  addTodo = () => {
    let { todoText } = this.state

    // NOTE я предлагаю также добавить проверку потому
    // что создание задачи без названия в данном контексте нелогично
    // также можно добавить action
    // для вывода сообщения о необходимости ввести текс в поле
    if (todoText !== "") {
      this.props.addTodo(todoText)
    }

    // NOTE неправильно менять state напрямую
    // Do not mutate state directly. Use setState()
    this.setState({ todoText: "" })
  }
}

const ToDo = connect(state => ({
  todos: state,
}),
dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
}))(ToDoComponent)

// init
ReactDOM.render(
  <Provider store={createStore(reducer, [])}>
    <ToDo title="Список задач"/>
  </Provider>,
  document.getElementById('app')
)
