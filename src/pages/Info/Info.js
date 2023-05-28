import '../Info/info.css';
import WoWeAre from '../../components/whoWeAre/WoWeAre';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/slider/Slider';
import { Provider } from 'react-redux';
import store from '../../components/slider/store';

import '../Info/info.css';

function Info () {
    return(
        <div class="wrapper">
                <main class="page">
                        <WoWeAre/>
                        <GetInTouch/>
                    </main>
                    <Provider store={store}>
                        <div>
                            <Slider/>
                        </div>
                    </Provider>
                <Footer/>
        </div>

    )
}

export default Info;
