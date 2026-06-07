import './footer.scss';
import { useContext } from 'react';
import { StateContext } from '../../context/StateProvider';

const Footer = () => {
    const [initialState, setInitialState] = useContext(StateContext);

    const handleClick = (e) => {
        const className = e.currentTarget.className.split(' ')[1];
        setInitialState({
            ...initialState,
            [className]: !initialState[className],
        });
    };
    
    return (
        <footer>
            <div
                onClick={handleClick}
                className="icon sheryians">
                <img src={`${import.meta.env.BASE_URL}doc-icons/sheryians.svg`} alt="Sheryians icon" />
            </div>
            <div
                onClick={handleClick}
                className="icon youtube">
                <img src={`${import.meta.env.BASE_URL}doc-icons/youtube.svg`} alt="Youtube icon" />
            </div>
            <div
                onClick={handleClick}
                className="icon github">
                <img src={`${import.meta.env.BASE_URL}doc-icons/github.svg`} alt="Github icon" />
            </div>
            <div
                onClick={handleClick}
                className="icon discord">
                <img src={`${import.meta.env.BASE_URL}doc-icons/discord.svg`} alt="Discord icon" />
            </div>
            <div
                onClick={handleClick}
                className="icon whatsapp">
                <img src={`${import.meta.env.BASE_URL}doc-icons/whatsapp.svg`} alt="Whatsapp icon" />
            </div>
            <div
                onClick={handleClick}
                className="icon notes">
                <img src={`${import.meta.env.BASE_URL}doc-icons/notes.svg`} alt="Notes icon" />
            </div>
            <div
                onClick={handleClick}
                className="icon mail">
                <img src={`${import.meta.env.BASE_URL}doc-icons/mail.svg`} alt="Mail icon" />
            </div>
            <div
                onClick={handleClick}
                className="icon pdf">
                <img src={`${import.meta.env.BASE_URL}doc-icons/pdf.svg`} alt="Pdf icon" />
            </div>
            <div
                onClick={handleClick}
                className="icon cli">
                <img src={`${import.meta.env.BASE_URL}doc-icons/cli.svg`} alt="Cli icon" />
            </div>
        </footer>
    )
}

export default Footer
