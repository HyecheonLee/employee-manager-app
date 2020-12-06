import './App.css';
import {Provider} from "react-redux";
import store from "./redux/configureStore";
import EmployeeContainer from "./containers/EmployeeContainer";

function App() {
	return (
		<Provider store={store()}>
			<EmployeeContainer/>
		</Provider>
	);
}

export default App;
