import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';
// the purpose of this component is to wrap the content of the pages with the main navigation which uses the Link component to navigate between pages
function Layout(props){
    return (
    <div>
        <MainNavigation />
        <main className={classes.main}>
            {props.children}

        </main>
    </div>
    );
}

export default Layout;