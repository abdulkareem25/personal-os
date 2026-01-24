import { Rnd } from 'react-rnd'
import './macwindow.scss'

const MacWindow = ({ title, children }) => {
    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: 600,
                height: 400,
            }}
            minWidth={400}
            minHeight={200}
            bounds="parent"
            dragHandleClassName="title-bar"
        >
            <div className="mac-window">
                <div className="title-bar">
                    <div className="title">{title}</div>
                    <div className="btns">
                        <div className="btn maximize"></div>
                        <div className="btn minimize"></div>
                        <div className="btn close"></div>
                    </div>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
