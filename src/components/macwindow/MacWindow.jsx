import { Rnd } from 'react-rnd'
import './macwindow.scss'
import { useContext } from 'react';
import { StateContext } from '../../context/StateProvider';

const MacWindow = ({ name, title, logo, children }) => {

    const [initialState, setInitialState] = useContext(StateContext);

    const handleClick = () => {
        setInitialState({
            ...initialState,
            [name]: false,
        });
    };

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
                    <div className="icon"><img src={logo} alt={title} /></div>
                    <div className="title">{title}</div>
                    <div className="btns">
                        <div
                            title='Maximize'
                            className="btn maximize">
                        </div>
                        <div
                            title='Minimize'
                            className="btn minimize">
                        </div>
                        <div
                            title="Close"
                            onClick={handleClick}
                            className="btn close">
                        </div>
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
