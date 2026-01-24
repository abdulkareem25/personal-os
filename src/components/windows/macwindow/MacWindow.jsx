import { Rnd } from 'react-rnd'
import './macwindow.scss'

const MacWindow = () => {
    return (
        <Rnd>
            <div className="mac-window">
                <div className="title-bar">
                    <div className="title">Mac Window</div>
                    <div className="btns">
                        <div className="btn maximize"></div>
                        <div className="btn minimize"></div>
                        <div className="btn close"></div>
                    </div>
                </div>
                <div className="content">
                    
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
