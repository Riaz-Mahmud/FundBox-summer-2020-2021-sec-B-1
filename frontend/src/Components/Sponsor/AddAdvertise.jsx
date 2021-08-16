import LeftNavBar from './LeftNavBar';
import TopNavbar from './TopNavbar';

function AddAdvertise() {
    return (
        <div className="sb-nav-fixed">
            <TopNavbar/>
            <div id="layoutSidenav">
                <LeftNavBar/>
                <div id="layoutSidenav_content">
                    <main>
                        <h1>its a Body</h1>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AddAdvertise
