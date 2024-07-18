import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from 'widgets/Navbar';


const App = () => {
    const { theme, toggleTheme } = useTheme()


    return (
        <div className={classNames('app', { hovered: false, selected: true }, [theme, 'cls2', 'cls3'])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
}

export default App;


